// SERVICES/hub-service/src/auth/guards/auth.guard.ts
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest<Request>();
        const token = this.extractToken(request);

        if (!token) {
            throw new ForbiddenException('No token provided');
        }

        try {
            const user = await this.authService.validateToken(token);
            (request as any)['user'] = user;
            return true;
        } catch (error) {
            throw new ForbiddenException('Invalid or expired token');
        }
    }

    private extractToken(request: Request): string | undefined {  // ← CHANGED: null → undefined
        const authHeader = request.headers.authorization;
        if (!authHeader) return undefined;

        const [type, token] = authHeader.split(' ');
        return type === 'Bearer' ? token : undefined;
    }
}