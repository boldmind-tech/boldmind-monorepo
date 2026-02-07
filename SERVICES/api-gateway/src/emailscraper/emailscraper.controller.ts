// SERVICES/api-gateway/src/emailscraper/emailscraper.controller.ts

import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Query,
    UseGuards,
} from '@nestjs/common';
import {
    ApiTags,
    ApiBearerAuth,
    ApiOperation,
    ApiParam,
    // ApiBody,
    ApiQuery,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { EmailscraperServiceClient } from '../clients/emailscraper-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('emailscraper')
@Controller('emailscraper')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class EmailscraperController {
    constructor(private emailscraperClient: EmailscraperServiceClient) { }

    // Email Discovery
    @Post('find')
    @ApiOperation({ summary: 'Find emails' })
    async findEmails(@Body() data: any) {
        return this.emailscraperClient.findEmails(data);
    }

    @Get('domain')
    @ApiOperation({ summary: 'Find domain emails' })
    @ApiQuery({ name: 'domain', required: true })
    async findDomainEmails(@Query('domain') domain: string) {
        return this.emailscraperClient.findDomainEmails(domain);
    }

    // Verification
    @Post('verify')
    @ApiOperation({ summary: 'Verify email' })
    async verifyEmail(@Body() data: { email: string }) {
        return this.emailscraperClient.verifyEmail(data);
    }

    @Post('verify/bulk')
    @ApiOperation({ summary: 'Bulk verify emails' })
    async bulkVerify(@Body() data: { emails: string[] }) {
        return this.emailscraperClient.bulkVerify(data.emails);
    }

    // Lead Enrichment
    @Get('enrich')
    @ApiOperation({ summary: 'Enrich lead' })
    @ApiQuery({ name: 'email', required: true })
    async enrichLead(@Query('email') email: string) {
        return this.emailscraperClient.enrichLead(email);
    }

    // Bulk Operations
    @Post('bulk/upload')
    @ApiOperation({ summary: 'Upload bulk list' })
    async uploadBulkList(@Body() data: any) {
        return this.emailscraperClient.uploadBulkList(data);
    }

    @Get('me/bulk-jobs')
    @ApiOperation({ summary: 'Get my bulk jobs' })
    async getMyBulkJobs(@CurrentUser() user: any) {
        return this.emailscraperClient.getBulkJobs(user.id);
    }

    @Get('bulk/jobs/:id/download')
    @ApiOperation({ summary: 'Download bulk job results' })
    @ApiParam({ name: 'id', description: 'Job ID' })
    async downloadResults(@Param('id') id: string) {
        return this.emailscraperClient.downloadResults(id);
    }

    // Nigerian Directory
    @Get('directory/search')
    @ApiOperation({ summary: 'Search Nigerian directory' })
    @ApiQuery({ name: 'q', required: true })
    @ApiQuery({ name: 'category', required: false })
    async searchDirectory(
        @Query('q') query: string,
        @Query('category') category?: string,
    ) {
        return this.emailscraperClient.searchNigerianDirectory(query, category);
    }

    // Usage
    @Get('me/usage')
    @ApiOperation({ summary: 'Get API usage' })
    async getApiUsage(@CurrentUser() user: any) {
        return this.emailscraperClient.getApiUsage(user.id);
    }
}