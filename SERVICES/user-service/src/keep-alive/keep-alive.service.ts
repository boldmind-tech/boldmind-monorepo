
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class KeepAliveService {
    private readonly logger = new Logger(KeepAliveService.name);
    private readonly appUrl: string;

    constructor(private readonly httpService: HttpService) {
        // User Service defaults to port 4001
        this.appUrl = process.env.RENDER_EXTERNAL_URL ||
            process.env.APP_URL ||
            'http://localhost:4001/api';
    }

    /**
     * Runs every 14 minutes to prevent Render free tier spin-down
     */
    @Cron('*/13 * * * *')
    async handleKeepAlive() {
        try {
            const response = await firstValueFrom(
                this.httpService.get(`${this.appUrl}/health/ping`, {
                    timeout: 10000,
                    validateStatus: () => true
                })
            );

            this.logger.log(`Keep-alive ping: ${response.status} at ${new Date().toISOString()}`);
        } catch (error: any) {
            this.logger.warn(`Keep-alive ping failed: ${error.message}`);
        }
    }
}
