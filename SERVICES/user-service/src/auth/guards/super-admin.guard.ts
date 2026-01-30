// SERVICES/user-service/src/auth/guards/super-admin.guard.ts
import {
    Injectable,
    CanActivate,
    ExecutionContext,
    ForbiddenException,
} from '@nestjs/common';
// import { Observable } from 'rxjs';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SuperAdminGuard implements CanActivate {
    constructor(private prisma: PrismaService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const userId = request.headers['x-user-id'];

        if (!userId) {
            throw new ForbiddenException('User ID not provided');
        }

        const user = await this.prisma.client.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                isSuperAdmin: true,
            },
        });

        if (!user) {
            throw new ForbiddenException('User not found');
        }

        if (!user.isSuperAdmin) {
            throw new ForbiddenException('Super admin access required');
        }

        return true;
    }
}