import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService, JwtPayload } from '../auth.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    constructor(config: ConfigService, authService: AuthService);
    validate(payload: JwtPayload): Promise<{
        sub: string;
        email: string;
        ecosystemRole: import("@prisma/client").$Enums.EcosystemRole;
        role: import("@prisma/client").$Enums.UserRole;
        id: string;
        permissions: string[];
        isActive: boolean;
    }>;
}
export {};
