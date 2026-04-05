import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { AuthService } from '../auth.service';
declare const GoogleStrategy_base: new (...args: any[]) => Strategy;
export declare class GoogleStrategy extends GoogleStrategy_base {
    private readonly authService;
    constructor(config: ConfigService, authService: AuthService);
    validate(req: Request, _accessToken: string, _refreshToken: string, profile: {
        id: string;
        emails: Array<{
            value: string;
        }>;
        displayName: string;
        photos?: Array<{
            value: string;
        }>;
    }, done: VerifyCallback): Promise<void>;
}
export {};
