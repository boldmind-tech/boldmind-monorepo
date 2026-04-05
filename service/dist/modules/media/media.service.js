"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MediaService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const sharp = require("sharp");
const path = require("path");
const crypto = require("crypto");
const prisma_service_1 = require("../../database/prisma.service");
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
const ALLOWED_DOC_TYPES = ['application/pdf'];
const ALLOWED_TYPES = [...ALLOWED_IMAGE_TYPES, ...ALLOWED_DOC_TYPES];
const MAX_FILE_SIZE = 10 * 1024 * 1024;
let MediaService = MediaService_1 = class MediaService {
    constructor(config, prisma) {
        this.config = config;
        this.prisma = prisma;
        this.logger = new common_1.Logger(MediaService_1.name);
        this.bucket = this.config.get('R2_BUCKET_NAME');
        this.publicUrl = this.config.get('R2_PUBLIC_URL');
        this.r2 = new client_s3_1.S3Client({
            region: 'auto',
            endpoint: this.config.get('R2_ENDPOINT'),
            credentials: {
                accessKeyId: this.config.get('R2_ACCESS_KEY_ID'),
                secretAccessKey: this.config.get('R2_SECRET_ACCESS_KEY'),
            },
        });
    }
    async uploadFile(file, folder, uploadedById, options) {
        this.validateFile(file);
        let buffer = file.buffer;
        let contentType = file.mimetype;
        if (ALLOWED_IMAGE_TYPES.includes(file.mimetype) && options?.optimize !== false) {
            buffer = await this.optimizeImage(buffer, options?.maxWidth ?? 1920);
            contentType = 'image/webp';
        }
        const key = this.buildKey(folder, file.originalname, contentType);
        await this.r2.send(new client_s3_1.PutObjectCommand({
            Bucket: this.bucket,
            Key: key,
            Body: buffer,
            ContentType: contentType,
            CacheControl: 'public, max-age=31536000, immutable',
            Metadata: { uploadedBy: uploadedById },
        }));
        const url = `${this.publicUrl}/${key}`;
        const media = await this.prisma.media.create({
            data: {
                key,
                url,
                folder,
                originalName: file.originalname,
                mimeType: contentType,
                size: buffer.length,
                uploadedById,
            },
        });
        return media;
    }
    async uploadMultiple(files, folder, uploadedById) {
        if (!files?.length)
            throw new common_1.BadRequestException('No files provided');
        if (files.length > 10)
            throw new common_1.BadRequestException('Max 10 files per upload');
        const results = await Promise.allSettled(files.map(f => this.uploadFile(f, folder, uploadedById)));
        return {
            uploaded: results.filter(r => r.status === 'fulfilled').map(r => r.value),
            failed: results.filter(r => r.status === 'rejected').length,
        };
    }
    async getPresignedUploadUrl(folder, fileName, mimeType, uploadedById) {
        if (!ALLOWED_TYPES.includes(mimeType)) {
            throw new common_1.BadRequestException(`File type ${mimeType} not allowed`);
        }
        const key = this.buildKey(folder, fileName, mimeType);
        const command = new client_s3_1.PutObjectCommand({
            Bucket: this.bucket,
            Key: key,
            ContentType: mimeType,
            Metadata: { uploadedBy: uploadedById },
        });
        const signedUrl = await (0, s3_request_presigner_1.getSignedUrl)(this.r2, command, { expiresIn: 3600 });
        const publicUrl = `${this.publicUrl}/${key}`;
        return { uploadUrl: signedUrl, key, publicUrl };
    }
    async getSignedReadUrl(key, expiresIn = 3600) {
        const command = new client_s3_1.GetObjectCommand({ Bucket: this.bucket, Key: key });
        return (0, s3_request_presigner_1.getSignedUrl)(this.r2, command, { expiresIn });
    }
    async deleteFile(mediaId, userId, role) {
        const media = await this.prisma.media.findFirst({ where: { id: mediaId } });
        if (!media)
            throw new common_1.NotFoundException('Media not found');
        const isOwner = media.uploadedById === userId;
        const isAdmin = ['admin', 'super_admin'].includes(role ?? '');
        if (!isOwner && !isAdmin)
            throw new common_1.BadRequestException('Access denied');
        await this.r2.send(new client_s3_1.DeleteObjectCommand({ Bucket: this.bucket, Key: media.key }));
        await this.prisma.media.delete({ where: { id: mediaId } });
        return { message: 'File deleted', key: media.key };
    }
    async getUserMedia(userId, folder, page = 1, limit = 20) {
        const skip = (page - 1) * limit;
        const where = { uploadedById: userId };
        if (folder)
            where.folder = folder;
        const [data, total] = await this.prisma.$transaction([
            this.prisma.media.findMany({ where, skip, take: limit, orderBy: { createdAt: 'desc' } }),
            this.prisma.media.count({ where }),
        ]);
        return { data, meta: { total, page, limit, pages: Math.ceil(total / limit) } };
    }
    async adminListAll(page = 1, limit = 50) {
        const skip = (page - 1) * limit;
        const [data, total] = await this.prisma.$transaction([
            this.prisma.media.findMany({
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: { uploadedBy: { select: { id: true, name: true, email: true } } },
            }),
            this.prisma.media.count(),
        ]);
        return { data, meta: { total, page, limit, pages: Math.ceil(total / limit) } };
    }
    async optimizeImage(buffer, maxWidth) {
        return sharp(buffer)
            .resize(maxWidth, undefined, { withoutEnlargement: true, fit: 'inside' })
            .webp({ quality: 82 })
            .toBuffer();
    }
    validateFile(file) {
        if (!file)
            throw new common_1.BadRequestException('No file provided');
        if (file.size > MAX_FILE_SIZE) {
            throw new common_1.BadRequestException(`File too large. Max size is ${MAX_FILE_SIZE / 1024 / 1024}MB`);
        }
        if (!ALLOWED_TYPES.includes(file.mimetype)) {
            throw new common_1.BadRequestException(`File type "${file.mimetype}" is not allowed`);
        }
    }
    buildKey(folder, originalName, mimeType) {
        const ext = mimeType === 'image/webp' ? '.webp' : path.extname(originalName) || '.bin';
        const hash = crypto.randomBytes(8).toString('hex');
        const date = new Date().toISOString().slice(0, 10).replace(/-/g, '/');
        return `${folder}/${date}/${hash}${ext}`;
    }
};
exports.MediaService = MediaService;
exports.MediaService = MediaService = MediaService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        prisma_service_1.PrismaService])
], MediaService);
//# sourceMappingURL=media.service.js.map