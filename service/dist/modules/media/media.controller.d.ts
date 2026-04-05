import { MediaService, MediaFolder } from './media.service';
export declare class MediaController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    uploadFile(file: Express.Multer.File, userId: string, folder?: MediaFolder, optimize?: string, maxWidth?: string): Promise<{
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
    uploadMultiple(files: Express.Multer.File[], userId: string, folder?: MediaFolder): Promise<{
        uploaded: any[];
        failed: number;
    }>;
    getPresignedUrl(userId: string, body: {
        folder: MediaFolder;
        fileName: string;
        mimeType: string;
    }): Promise<{
        uploadUrl: string;
        key: string;
        publicUrl: string;
    }>;
    getMyMedia(userId: string, folder?: MediaFolder, page?: number, limit?: number): Promise<{
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
    deleteFile(id: string, userId: string, role: string): Promise<{
        message: string;
        key: string;
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
}
