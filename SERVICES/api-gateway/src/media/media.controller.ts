// SERVICES/api-gateway/src/media/media.controller.ts

import {
    Controller,
    Get,
    Post,
    Delete,
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
    //   ApiBody,
    ApiQuery,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { MediaServiceClient } from '../clients/media-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('media')
@Controller('media')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class MediaController {
    constructor(private mediaClient: MediaServiceClient) { }

    // Upload
    @Post('upload')
    @ApiOperation({ summary: 'Upload file' })
    async uploadFile(@Body() data: any) {
        return this.mediaClient.uploadFile(data);
    }

    @Post('upload/batch')
    @ApiOperation({ summary: 'Upload multiple files' })
    async uploadMultiple(@Body() data: { files: any[] }) {
        return this.mediaClient.uploadMultiple(data.files);
    }

    // Image Processing
    @Post('process/image')
    @ApiOperation({ summary: 'Process image' })
    async processImage(@Body() data: any) {
        return this.mediaClient.processImage(data);
    }

    @Post('process/image/resize')
    @ApiOperation({ summary: 'Resize image' })
    async resizeImage(
        @Body() data: { imageUrl: string; width: number; height?: number },
    ) {
        return this.mediaClient.resizeImage(data.imageUrl, data.width, data.height);
    }

    // Video Processing
    @Post('process/video')
    @ApiOperation({ summary: 'Process video' })
    async processVideo(
        @Body() data: { videoUrl: string; operations: string[] },
    ) {
        return this.mediaClient.processVideo(data.videoUrl, data.operations);
    }

    @Post('process/video/thumbnail')
    @ApiOperation({ summary: 'Generate thumbnail' })
    async generateThumbnail(
        @Body() data: { videoUrl: string; timestamp?: number },
    ) {
        return this.mediaClient.generateThumbnail(data.videoUrl, data.timestamp);
    }

    // File Management
    @Get('files/:id/metadata')
    @ApiOperation({ summary: 'Get file metadata' })
    @ApiParam({ name: 'id', description: 'File ID' })
    async getFileMetadata(@Param('id') id: string) {
        return this.mediaClient.getFileMetadata(id);
    }

    @Delete('files/:id')
    @ApiOperation({ summary: 'Delete file' })
    @ApiParam({ name: 'id', description: 'File ID' })
    async deleteFile(@Param('id') id: string) {
        return this.mediaClient.deleteFile(id);
    }

    @Get('me/files')
    @ApiOperation({ summary: 'Get my files' })
    @ApiQuery({ name: 'type', required: false })
    async getMyFiles(@CurrentUser() user: any, @Query('type') type?: string) {
        return this.mediaClient.getUserFiles(user.id, type);
    }

    // Optimization
    @Post('optimize/image')
    @ApiOperation({ summary: 'Optimize image' })
    async optimizeImage(
        @Body() data: { imageUrl: string; quality?: number },
    ) {
        return this.mediaClient.optimizeImage(data.imageUrl, data.quality);
    }

    @Post('optimize/video')
    @ApiOperation({ summary: 'Compress video' })
    async compressVideo(
        @Body() data: { videoUrl: string; targetSize?: number },
    ) {
        return this.mediaClient.compressVideo(data.videoUrl, data.targetSize);
    }

    // CDN
    @Get('files/:id/signed-url')
    @ApiOperation({ summary: 'Get signed URL' })
    @ApiParam({ name: 'id', description: 'File ID' })
    @ApiQuery({ name: 'expiry', required: false })
    async getSignedUrl(
        @Param('id') id: string,
        @Query('expiry') expirySeconds?: number,
    ) {
        return this.mediaClient.getSignedUrl(id, expirySeconds);
    }
}