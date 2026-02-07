// SERVICES/api-gateway/src/health/health.controller.ts

import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { KeepAliveService } from '../keep-alive/keep-alive.service';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(private readonly keepAliveService: KeepAliveService) { }

  @Get()
  @ApiOperation({ summary: 'Health check endpoint' })
  check() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'api-gateway',
      version: '1.0.0',
      uptime: process.uptime(),
    };
  }

  @Get('ping')
  @ApiOperation({ summary: 'Ping endpoint' })
  ping() {
    return { message: 'pong', timestamp: new Date().toISOString() };
  }

  @Get('trigger-keep-alive')
  @ApiOperation({ summary: 'Manually trigger keep-alive ping (for testing)' })
  async triggerKeepAlive() {
    await this.keepAliveService.handleKeepAlive();
    return { message: 'Keep-alive triggered manually' };
  }
}