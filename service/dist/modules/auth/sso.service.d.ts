import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
export declare class SsoService {
    private readonly config;
    private readonly isProd;
    private readonly cookieDomain;
    constructor(config: ConfigService);
    setSsoCookie(res: Response, accessToken: string): void;
    clearSsoCookie(res: Response): void;
}
