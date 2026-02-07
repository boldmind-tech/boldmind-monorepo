// SERVICES/api-gateway/src/safeai/safeai.controller.ts

import {
    Controller,
    Get,
    Post,
    Patch,
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
import { SafeaiServiceClient } from '../clients/safeai-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('safeai')
@Controller('safeai')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class SafeaiController {
    constructor(private safeaiClient: SafeaiServiceClient) { }

    // Incidents
    @Post('incidents')
    @ApiOperation({ summary: 'Report incident' })
    async reportIncident(@CurrentUser() user: any, @Body() data: any) {
        return this.safeaiClient.reportIncident(user.id, data);
    }

    @Get('incidents')
    @ApiOperation({ summary: 'Get incidents' })
    @ApiQuery({ name: 'status', required: false })
    @ApiQuery({ name: 'type', required: false })
    @ApiQuery({ name: 'area', required: false })
    async getIncidents(
        @Query() query: { status?: string; type?: string; area?: string },
    ) {
        return this.safeaiClient.getIncidents(query);
    }

    @Get('incidents/:id')
    @ApiOperation({ summary: 'Get incident by ID' })
    @ApiParam({ name: 'id', description: 'Incident ID' })
    async getIncident(@Param('id') id: string) {
        return this.safeaiClient.getIncidentById(id);
    }

    @Patch('incidents/:id')
    @ApiOperation({ summary: 'Update incident status' })
    @ApiParam({ name: 'id', description: 'Incident ID' })
    async updateIncidentStatus(
        @Param('id') id: string,
        @Body() data: { status: string; notes?: string },
    ) {
        return this.safeaiClient.updateIncidentStatus(id, data.status, data.notes);
    }

    // Criminal Database
    @Post('criminals/search')
    @ApiOperation({ summary: 'Search criminal records' })
    async searchCriminals(@Body() data: any) {
        return this.safeaiClient.searchCriminalRecords(data);
    }

    @Get('criminals/:id')
    @ApiOperation({ summary: 'Get criminal profile' })
    @ApiParam({ name: 'id', description: 'Criminal ID' })
    async getCriminalProfile(@Param('id') id: string) {
        return this.safeaiClient.getCriminalProfile(id);
    }

    @Post('criminals')
    @ApiOperation({ summary: 'Add criminal record' })
    async addCriminalRecord(@Body() data: any) {
        return this.safeaiClient.addCriminalRecord(data);
    }

    // Pattern Recognition
    @Get('analytics/patterns')
    @ApiOperation({ summary: 'Get crime patterns' })
    @ApiQuery({ name: 'area', required: false })
    @ApiQuery({ name: 'timeframe', required: false })
    async getCrimePatterns(
        @Query() query: { area?: string; timeframe?: string },
    ) {
        return this.safeaiClient.getCrimePatterns(query.area, query.timeframe);
    }

    @Get('analytics/predictions')
    @ApiOperation({ summary: 'Get predictive alerts' })
    async getPredictiveAlerts() {
        return this.safeaiClient.getPredictiveAlerts();
    }

    // Evidence
    @Post('incidents/:id/evidence')
    @ApiOperation({ summary: 'Upload evidence' })
    @ApiParam({ name: 'id', description: 'Incident ID' })
    async uploadEvidence(
        @Param('id') id: string,
        @Body() data: { fileData: string; metadata: any },
    ) {
        return this.safeaiClient.uploadEvidence(id, data.fileData, data.metadata);
    }

    @Get('incidents/:id/evidence')
    @ApiOperation({ summary: 'Get evidence' })
    @ApiParam({ name: 'id', description: 'Incident ID' })
    async getEvidence(@Param('id') id: string) {
        return this.safeaiClient.getEvidence(id);
    }

    // Communication
    @Post('communications/messages')
    @ApiOperation({ summary: 'Send officer message' })
    async sendMessage(
        @CurrentUser() user: any,
        @Body() data: { message: string; priority?: string },
    ) {
        return this.safeaiClient.sendOfficerMessage(user.id, data.message, data.priority);
    }

    @Get('me/messages')
    @ApiOperation({ summary: 'Get my messages' })
    async getMyMessages(@CurrentUser() user: any) {
        return this.safeaiClient.getOfficerMessages(user.id);
    }

    // Facial Recognition
    @Post('search/facial')
    @ApiOperation({ summary: 'Search by facial recognition' })
    async searchByFacial(@Body('imageData') imageData: string) {
        return this.safeaiClient.searchByFacialRecognition(imageData);
    }

    // License Plate
    @Get('search/plate')
    @ApiOperation({ summary: 'Search by license plate' })
    @ApiQuery({ name: 'number', required: true })
    async searchByPlate(@Query('number') plateNumber: string) {
        return this.safeaiClient.searchByLicensePlate(plateNumber);
    }
}