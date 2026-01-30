import {
    Injectable,
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Injectable()
export class AdminGuard extends AuthGuard implements CanActivate {
    override async canActivate(context: ExecutionContext): Promise<boolean> {
        // First, check if the user is authenticated using the base AuthGuard logic
        const isAuthenticated = await super.canActivate(context);
        if (!isAuthenticated) {
            return false;
        }

        const request = context.switchToHttp().getRequest();
        const user = request.user;

        if (!user) {
            throw new UnauthorizedException('User not found in request');
        }

        // Check if the user has the ADMIN role
        // Adjust this check based on how roles are structured in your JWT payload/user object
        if (user.role !== 'ADMIN' && !user.isAdmin) {
            throw new ForbiddenException('Requires admin privileges');
        }

        return true;
    }
}
