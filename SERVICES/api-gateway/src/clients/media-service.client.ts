// SERVICES/api-gateway/src/clients/media-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface UploadFileDto {
    fileData: string; // base64
    fileName: string;
    contentType: string;
    folder?: string;
}

interface ProcessImageDto {
    imageUrl: string;
    operations: ('resize' | 'crop' | 'compress' | 'filter')[];
    options?: Record<string, any>;
}

@Injectable()
export class MediaServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['MEDIA_SERVICE_URL'] || 'http://localhost:4005',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 60000, // Longer for file operations
        });
    }

    // Upload
    async uploadFile(data: UploadFileDto) {
        try {
            const response = await this.client.post('/upload', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Upload failed',
                error.response?.status || 500,
            );
        }
    }

    async uploadMultiple(files: UploadFileDto[]) {
        try {
            const response = await this.client.post('/upload/batch', { files });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Batch upload failed',
                error.response?.status || 500,
            );
        }
    }

    // Image Processing
    async processImage(data: ProcessImageDto) {
        try {
            const response = await this.client.post('/process/image', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Image processing failed',
                error.response?.status || 500,
            );
        }
    }

    async resizeImage(imageUrl: string, width: number, height?: number) {
        try {
            const response = await this.client.post('/process/image/resize', {
                imageUrl,
                width,
                height,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Image resize failed',
                error.response?.status || 500,
            );
        }
    }

    // Video Processing
    async processVideo(videoUrl: string, operations: string[]) {
        try {
            const response = await this.client.post('/process/video', {
                videoUrl,
                operations,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Video processing failed',
                error.response?.status || 500,
            );
        }
    }

    async generateThumbnail(videoUrl: string, timestamp?: number) {
        try {
            const response = await this.client.post('/process/video/thumbnail', {
                videoUrl,
                timestamp,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Thumbnail generation failed',
                error.response?.status || 500,
            );
        }
    }

    // File Management
    async getFileMetadata(fileId: string) {
        try {
            const response = await this.client.get(`/files/${fileId}/metadata`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch file metadata',
                error.response?.status || 500,
            );
        }
    }

    async deleteFile(fileId: string) {
        try {
            const response = await this.client.delete(`/files/${fileId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to delete file',
                error.response?.status || 500,
            );
        }
    }

    async getUserFiles(userId: string, type?: string) {
        try {
            const response = await this.client.get(`/users/${userId}/files`, {
                params: { type },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch user files',
                error.response?.status || 500,
            );
        }
    }

    // Optimization
    async optimizeImage(imageUrl: string, quality?: number) {
        try {
            const response = await this.client.post('/optimize/image', {
                imageUrl,
                quality,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Image optimization failed',
                error.response?.status || 500,
            );
        }
    }

    async compressVideo(videoUrl: string, targetSize?: number) {
        try {
            const response = await this.client.post('/optimize/video', {
                videoUrl,
                targetSize,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Video compression failed',
                error.response?.status || 500,
            );
        }
    }

    // CDN & URLs
    async getSignedUrl(fileId: string, expirySeconds?: number) {
        try {
            const response = await this.client.get(`/files/${fileId}/signed-url`, {
                params: { expiry: expirySeconds },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to generate signed URL',
                error.response?.status || 500,
            );
        }
    }
}