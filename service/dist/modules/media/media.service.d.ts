import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../database/prisma.service';
export type MediaFolder = 'avatars' | 'articles' | 'products' | 'storefronts' | 'content' | 'misc';
export declare class MediaService {
    private config;
    private prisma;
    private readonly logger;
    private readonly r2;
    private readonly bucket;
    private readonly publicUrl;
    constructor(config: ConfigService, prisma: PrismaService);
    uploadFile(file: Express.Multer.File, folder: MediaFolder, uploadedById: string, options?: {
        optimize?: boolean;
        maxWidth?: number;
    }): Promise<{
        key: string;
        id: string;
        createdAt: Date;
        url: string;
        size: number;
        folder: string;
        originalName: string;
        mimeType: string;
        uploadedById: string;
    }>;
    uploadMultiple(files: Express.Multer.File[], folder: MediaFolder, uploadedById: string): Promise<{
        uploaded: any[];
        failed: number;
    }>;
    getPresignedUploadUrl(folder: MediaFolder, fileName: string, mimeType: string, uploadedById: string): Promise<{
        uploadUrl: string;
        key: string;
        publicUrl: string;
    }>;
    getSignedReadUrl(key: string, expiresIn?: number): Promise<string>;
    deleteFile(mediaId: string, userId: string, role?: string): Promise<{
        message: string;
        key: string;
    }>;
    getUserMedia(userId: string, folder?: MediaFolder, page?: number, limit?: number): Promise<{
        data: {
            key: string;
            id: string;
            createdAt: Date;
            url: string;
            size: number;
            folder: string;
            originalName: string;
            mimeType: string;
            uploadedById: string;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
    adminListAll(page?: number, limit?: number): Promise<{
        data: ({
            uploadedBy: {
                name: string;
                email: string;
                id: string;
            };
        } & {
            key: string;
            id: string;
            createdAt: Date;
            url: string;
            size: number;
            folder: string;
            originalName: string;
            mimeType: string;
            uploadedById: string;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
    private optimizeImage;
    private validateFile;
    private buildKey;
}
