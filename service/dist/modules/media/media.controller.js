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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const media_service_1 = require("./media.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const decorators_1 = require("../../common/decorators");
let MediaController = class MediaController {
    constructor(mediaService) {
        this.mediaService = mediaService;
    }
    uploadFile(file, userId, folder = 'misc', optimize, maxWidth) {
        return this.mediaService.uploadFile(file, folder, userId, {
            optimize: optimize !== 'false',
            maxWidth: maxWidth ? parseInt(maxWidth, 10) : undefined,
        });
    }
    uploadMultiple(files, userId, folder = 'misc') {
        return this.mediaService.uploadMultiple(files, folder, userId);
    }
    getPresignedUrl(userId, body) {
        return this.mediaService.getPresignedUploadUrl(body.folder, body.fileName, body.mimeType, userId);
    }
    getMyMedia(userId, folder, page = 1, limit = 20) {
        return this.mediaService.getUserMedia(userId, folder, +page, +limit);
    }
    deleteFile(id, userId, role) {
        return this.mediaService.deleteFile(id, userId, role);
    }
    adminListAll(page = 1, limit = 50) {
        return this.mediaService.adminListAll(+page, +limit);
    }
};
exports.MediaController = MediaController;
__decorate([
    (0, common_1.Post)('upload'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, swagger_1.ApiOperation)({ summary: 'Upload a single file' }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, decorators_1.CurrentUser)('id')),
    __param(2, (0, common_1.Body)('folder')),
    __param(3, (0, common_1.Body)('optimize')),
    __param(4, (0, common_1.Body)('maxWidth')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String]),
    __metadata("design:returntype", void 0)
], MediaController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Post)('upload/batch'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 10)),
    (0, swagger_1.ApiOperation)({ summary: 'Upload multiple files (max 10)' }),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, decorators_1.CurrentUser)('id')),
    __param(2, (0, common_1.Body)('folder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String, String]),
    __metadata("design:returntype", void 0)
], MediaController.prototype, "uploadMultiple", null);
__decorate([
    (0, common_1.Post)('presign'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Get a presigned URL for direct browser upload' }),
    __param(0, (0, decorators_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MediaController.prototype, "getPresignedUrl", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get my uploaded media' }),
    __param(0, (0, decorators_1.CurrentUser)('id')),
    __param(1, (0, common_1.Query)('folder')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", void 0)
], MediaController.prototype, "getMyMedia", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a media file' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, decorators_1.CurrentUser)('id')),
    __param(2, (0, decorators_1.CurrentUser)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], MediaController.prototype, "deleteFile", null);
__decorate([
    (0, common_1.Get)('admin/all'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, decorators_1.Roles)('ADMIN', 'SUPER_ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'List all media files (admin)' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MediaController.prototype, "adminListAll", null);
exports.MediaController = MediaController = __decorate([
    (0, swagger_1.ApiTags)('Media'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('media'),
    __metadata("design:paramtypes", [media_service_1.MediaService])
], MediaController);
//# sourceMappingURL=media.controller.js.map