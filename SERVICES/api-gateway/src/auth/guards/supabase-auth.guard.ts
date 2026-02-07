import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
    Logger,
} from '@nestjs/common';
import { SupabaseService } from '../supabase.service';
import { UserServiceClient } from '../../clients/user-service.client';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

@Injectable()
export class SupabaseAuthGuard implements CanActivate {
    private readonly logger = new Logger(SupabaseAuthGuard.name);

    constructor(
        private supabaseService: SupabaseService,
        private userServiceClient: UserServiceClient,
        private reflector: Reflector,
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (isPublic) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers['authorization'];

        if (!authHeader) {
            throw new UnauthorizedException('Missing authorization header');
        }

        const [type, token] = authHeader.split(' ');

        if (type !== 'Bearer' || !token) {
            throw new UnauthorizedException('Invalid authorization format');
        }

        try {
            const user = await this.supabaseService.verifyToken(token);

            if (!user) {
                throw new UnauthorizedException('Invalid token');
            }

            // Sync user to local database if verified but not yet synced
            // We check app_metadata.synced flag to avoid redundant calls
            const isVerified = user.email_confirmed_at || user.phone_confirmed_at;
            const isSynced = user.app_metadata?.synced === true;

            if (isVerified && !isSynced) {
                try {
                    this.logger.log(`Syncing verified user ${user.id} to user-service`);

                    // Create user in user-service (idempotent driven by ID)
                    await this.userServiceClient.createUser({
                        id: user.id,
                        email: user.email || '',
                        fullName: user.user_metadata?.full_name || user.email?.split('@')[0],
                        // Add other fields as needed
                    });

                    // Update Supabase metadata to mark as synced
                    await this.supabaseService.updateUserMetadata(user.id, { synced: true });

                    this.logger.log(`User ${user.id} synced successfully`);
                } catch (err: any) {
                    // If conflict (409), it means user already exists which is fine, just mark as synced
                    if (err.status === 409 || err.response?.status === 409) {
                        this.logger.log(`User ${user.id} already exists in user-service, marking as synced`);
                        await this.supabaseService.updateUserMetadata(user.id, { synced: true });
                    } else {
                        // Log error but don't block authentication
                        this.logger.error(`Failed to sync user ${user.id}: ${err.message}`);
                    }
                }
            }

            // Attach user to request for use in controllers
            request.user = {
                id: user.id,
                email: user.email,
                role: user.app_metadata?.role || 'authenticated',
            };

            return true;
        } catch (error) {
            throw new UnauthorizedException('Authentication failed: ' + (error instanceof Error ? error.message : 'Unknown error'));
        }
    }
}
