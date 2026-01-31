// PACKAGES/auth/src/providers/supabase/auth.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { getSupabaseClient } from './client';
import { Session, AuthResponse } from '../../domain/models/Session';

export class SupabaseAuthProvider {
    private _client: SupabaseClient | undefined;
    private options: { url?: string; key?: string; options?: any } | undefined;

    constructor(
        url?: string,
        key?: string,
        options?: any,
    ) {
        if (url && key) {
            this.options = { url, key, options };
        }
        // If no explicit config, we'll use lazy initialization via getSupabaseClient()
        // which reads from process.env when needed.
    }

    private get client(): SupabaseClient {
        if (!this._client) {
            if (this.options) {
                const { url, key, options } = this.options;
                const baseAuth = {
                    autoRefreshToken: true,
                    persistSession: true,
                };

                const mergedOptions = {
                    ...options,
                    auth: {
                        ...baseAuth,
                        ...(options?.auth ?? {}),
                    },
                } as any;

                this._client = createClient(url!, key!, mergedOptions);
            } else {
                this._client = getSupabaseClient();
            }
        }
        return this._client;
    }

    // ──────────────────────────────────────────────
    // AUTHENTICATION METHODS
    // ──────────────────────────────────────────────

    async signInWithEmail(email: string, password: string): Promise<AuthResponse> {
        try {
            const { data, error } = await this.client.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                return {
                    session: null,
                    user: null,
                    error: {
                        message: error.message,
                        status: error.status ?? undefined,
                        code: error.code ?? undefined,
                    },
                };
            }

            return {
                session: data.session as Session,
                user: null,
                error: null,
            };
        } catch (error: any) {
            return {
                session: null,
                user: null,
                error: {
                    message: error.message || 'Failed to sign in',
                    status: undefined,
                    code: undefined,
                },
            };
        }
    }

    async signUpWithEmail(email: string, password: string, metadata?: Record<string, any>): Promise<AuthResponse> {
        try {
            const { data, error } = await this.client.auth.signUp({
                email,
                password,
                options: metadata ? {
                    data: metadata,
                    emailRedirectTo: `${window.location.origin}/auth/callback`,
                } : {
                    emailRedirectTo: `${window.location.origin}/auth/callback`,
                },
            });

            if (error) {
                return {
                    session: null,
                    user: null,
                    error: {
                        message: error.message,
                        status: error.status ?? undefined,
                        code: error.code ?? undefined,
                    },
                };
            }

            return {
                session: data.session as Session,
                user: null,
                error: null,
            };
        } catch (error: any) {
            return {
                session: null,
                user: null,
                error: {
                    message: error.message || 'Failed to sign up',
                    status: undefined,
                    code: undefined,
                },
            };
        }
    }

    async signInWithOAuth(provider: 'google' | 'github' | 'twitter' | 'facebook'): Promise<void> {
        const { error } = await this.client.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            },
        });

        if (error) {
            throw new Error(error.message);
        }
    }

    async signOut(): Promise<void> {
        const { error } = await this.client.auth.signOut();
        if (error) {
            throw new Error(error.message);
        }
    }

    // ──────────────────────────────────────────────
    // SESSION METHODS
    // ──────────────────────────────────────────────

    async getSession(): Promise<Session | null> {
        const { data, error } = await this.client.auth.getSession();
        if (error || !data.session) {
            return null;
        }
        return data.session as Session;
    }

    async refreshSession(): Promise<Session | null> {
        const { data, error } = await this.client.auth.refreshSession();
        if (error || !data.session) {
            return null;
        }
        return data.session as Session;
    }

    onAuthStateChange(callback: (session: Session | null) => void) {
        return this.client.auth.onAuthStateChange((_event, session) => {
            callback(session as Session | null);
        });
    }

    // ──────────────────────────────────────────────
    // PASSWORD METHODS
    // ──────────────────────────────────────────────

    async resetPasswordForEmail(email: string): Promise<void> {
        const { error } = await this.client.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/auth/reset-password`,
        });

        if (error) {
            throw new Error(error.message);
        }
    }

    async updatePassword(newPassword: string): Promise<void> {
        const { error } = await this.client.auth.updateUser({
            password: newPassword,
        });

        if (error) {
            throw new Error(error.message);
        }
    }

    // ──────────────────────────────────────────────
    // VERIFICATION METHODS
    // ──────────────────────────────────────────────

    async verifyToken(token: string): Promise<{ id: string; email: string; role?: string } | null> {
        try {
            const { data: { user }, error } = await this.client.auth.getUser(token);

            if (error || !user) {
                return null;
            }

            return {
                id: user.id,
                email: user.email ?? '',
                role: user.user_metadata?.['role'] ?? user.app_metadata?.['role'] ?? 'user',
            };
        } catch (error) {
            console.error('Token verification failed:', error);
            return null;
        }
    }

    async verifyOtp(email: string, token: string, type: 'signup' | 'invite' | 'magiclink' | 'recovery' | 'email_change' | 'email'): Promise<AuthResponse> {
        try {
            const { data, error } = await this.client.auth.verifyOtp({
                email,
                token,
                type,
            });

            if (error) {
                return {
                    session: null,
                    user: null,
                    error: {
                        message: error.message,
                        status: error.status ?? undefined,
                        code: error.code ?? undefined,
                    },
                };
            }

            return {
                session: data.session as Session,
                user: null,
                error: null,
            };
        } catch (error: any) {
            return {
                session: null,
                user: null,
                error: {
                    message: error.message || 'Failed to verify OTP',
                    status: undefined,
                    code: undefined,
                },
            };
        }
    }

    async verifyUserById(userId: string): Promise<{ id: string; email: string; role?: string } | null> {
        try {
            const { data: { user }, error } = await this.client.auth.admin.getUserById(userId);

            if (error || !user) {
                return null;
            }

            return {
                id: user.id,
                email: user.email ?? '',
                role: user.user_metadata?.['role'] ?? user.app_metadata?.['role'] ?? 'user',
            };
        } catch (error) {
            console.error('User verification by ID failed:', error);
            return null;
        }
    }

    // ──────────────────────────────────────────────
    // ADMIN METHODS
    // ──────────────────────────────────────────────

    async resendVerification(email: string): Promise<{ success: boolean; error?: string }> {
        try {
            const { error } = await this.client.auth.resend({
                type: 'signup',
                email: email,
                options: {
                    emailRedirectTo: `${window.location.origin}/auth/callback`,
                }
            });

            if (error) {
                return { success: false, error: error.message };
            }

            return { success: true };
        } catch (error: any) {
            return { success: false, error: error.message || 'Failed to resend verification email' };
        }
    }

    async deleteUser(userId: string): Promise<{ success: boolean; error?: string }> {
        try {
            const { error } = await this.client.auth.admin.deleteUser(userId);

            if (error) {
                return {
                    success: false,
                    error: error.message,
                };
            }

            return { success: true };
        } catch (error: any) {
            return {
                success: false,
                error: error.message || 'Failed to delete user',
            };
        }
    }

    async deleteCurrentUser(): Promise<{ success: boolean; error?: string }> {
        try {
            const { data } = await this.client.auth.getSession();

            if (!data.session?.user?.id) {
                return {
                    success: false,
                    error: 'No authenticated user',
                };
            }

            const { error } = await this.client.auth.admin.deleteUser(data.session.user.id);

            if (error) {
                return {
                    success: false,
                    error: error.message,
                };
            }

            return { success: true };
        } catch (error: any) {
            return {
                success: false,
                error: error.message || 'Failed to delete current user',
            };
        }
    }

    async updateUserMetadata(userId: string, metadata: Record<string, any>): Promise<{ success: boolean; error?: string }> {
        try {
            const { error } = await this.client.auth.admin.updateUserById(userId, {
                user_metadata: metadata,
            });

            if (error) {
                return {
                    success: false,
                    error: error.message,
                };
            }

            return { success: true };
        } catch (error: any) {
            return {
                success: false,
                error: error.message || 'Failed to update user metadata',
            };
        }
    }
}

export const supabaseAuthProvider = new SupabaseAuthProvider();