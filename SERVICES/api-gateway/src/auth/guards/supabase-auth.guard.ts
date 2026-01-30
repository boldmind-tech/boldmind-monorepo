import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { SupabaseService } from '../supabase.service';

@Injectable()
export class SupabaseAuthGuard implements CanActivate {
    constructor(private supabaseService: SupabaseService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
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
