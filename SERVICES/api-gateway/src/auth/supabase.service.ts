// SERVICES/api-gateway/src/auth/supabase.service.ts
import { Injectable, OnModuleInit, Logger, BadRequestException } from '@nestjs/common';
import { getSupabaseClient } from '@boldmind/auth';
import { SupabaseClient } from '@supabase/supabase-js';
import { NotificationServiceClient } from '../clients/notification-service.client';

@Injectable()
export class SupabaseService implements OnModuleInit {
    private readonly logger = new Logger(SupabaseService.name);
    private supabase: SupabaseClient | null = null;
    constructor(private readonly notificationClient: NotificationServiceClient) { }

    async onModuleInit() {
        try {
            // Use service role explicitly for backend/admin operations
            this.supabase = getSupabaseClient({ useServiceRole: true });

            // Optional: Quick health check
            // We use a safe check that doesn't depend on specific public tables
            // which might not exist in all environments (e.g. fresh clones)
            try {
                await this.supabase.auth.getSession();
                this.logger.log('Supabase client (service role) initialized successfully');
            } catch (e) {
                this.logger.warn('Supabase client initialized but connectivity check failed: ' + e);
            }
        } catch (err) {
            this.logger.error('Failed to initialize Supabase client', err);
            throw err;
        }
    }

    // ────────────────────────────────────────────────
    // Auth methods
    // ────────────────────────────────────────────────

    async signInWithPassword(email: string, password: string) {
        const client = this.getClient();
        const { data, error } = await client.auth.signInWithPassword({ email, password });
        if (error) throw error;
        return data;
    }

    async signUp(email: string, password: string, metadata?: Record<string, any>) {
        const client = this.getClient();
        const { data, error } = await client.auth.signUp({
            email,
            password,
            options: { data: metadata } as any,
        });
        if (error) throw error;

        // Send Welcome Email if user was created successfully
        if (data.user) {
            try {
                await this.notificationClient.sendEmail(data.user.id, {
                    to: email,
                    subject: 'Welcome to BoldMind!',
                    templateType: 'welcome',
                    data: {
                        fullName: metadata?.['fullName'] || email.split('@')[0],
                    }
                });
                this.logger.log(`Welcome email sent to ${email}`);
            } catch (err: any) {
                this.logger.error(`Failed to send welcome email to ${email}: ${err.message}`);
            }
        }

        return data;
    }

    async signOut() {
        const client = this.getClient();
        const { error } = await client.auth.signOut();
        if (error) throw error;
    }

    async refreshSession() {
        const client = this.getClient();
        const { data, error } = await client.auth.refreshSession();
        if (error) throw error;
        return data;
    }

    async resetPasswordForEmail(email: string) {
        const client = this.getClient();

        // Use Supabase Admin to generate the reset link instead of having Supabase send the email
        const { data, error } = await client.auth.admin.generateLink({
            type: 'recovery',
            email,
            options: {
                redirectTo: process.env['FRONTEND_URL'] ? `${process.env['FRONTEND_URL']}/auth/reset-password` : 'http://localhost:3000/auth/reset-password',
            }
        });

        if (error) throw error;

        if (data.user && data.properties?.action_link) {
            try {
                await this.notificationClient.sendEmail(data.user.id, {
                    to: email,
                    subject: 'Reset Your Password - BoldMind',
                    templateType: 'reset_password',
                    data: {
                        fullName: data.user.user_metadata?.['fullName'] || email.split('@')[0],
                        resetLink: data.properties.action_link
                    }
                });
                this.logger.log(`Password reset email sent to ${email}`);
            } catch (err: any) {
                this.logger.error(`Failed to send password reset email to ${email}: ${err.message}`);
                throw new BadRequestException('Failed to send reset email. Please try again later.');
            }
        }
    }

    async updatePassword(newPassword: string) {
        const client = this.getClient();
        const { error } = await client.auth.updateUser({ password: newPassword });
        if (error) throw error;
    }

    async verifyToken(token: string) {
        const client = this.getClient();
        const { data, error } = await client.auth.getUser(token);
        if (error) throw error;
        return data.user;
    }

    async verifyUserById(userId: string) {
        const client = this.getClient();
        const { data, error } = await client.auth.admin.getUserById(userId);
        if (error) throw error;
        return data.user;
    }

    async getSession() {
        const client = this.getClient();
        const { data, error } = await client.auth.getSession();
        if (error) throw error;
        return data.session;
    }

    async deleteUser(userId: string) {
        const client = this.getClient();
        const { error } = await client.auth.admin.deleteUser(userId);
        if (error) throw error;
    }

    async deleteCurrentUser() {
        const client = this.getClient();
        const { data: { user } } = await client.auth.getUser();
        if (!user) throw new BadRequestException('No authenticated user');
        const { error } = await client.auth.admin.deleteUser(user.id);
        if (error) throw error;
    }

    // ────────────────────────────────────────────────
    // Helper: Get client with type narrowing
    // ────────────────────────────────────────────────
    private getClient(): SupabaseClient {
        if (!this.supabase) {
            throw new Error('Supabase client not initialized. Check onModuleInit.');
        }
        return this.supabase;
    }
}