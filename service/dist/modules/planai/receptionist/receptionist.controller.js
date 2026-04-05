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
exports.ReceptionistController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const roles_guard_1 = require("../../auth/roles.guard");
const roles_decorator_1 = require("../../../common/decorators/roles.decorator");
const user_decorator_1 = require("../../../common/decorators/user.decorator");
const public_decorator_1 = require("../../../common/decorators/public.decorator");
const metawebhook_service_1 = require("./metawebhook.service");
const receptionist_service_1 = require("./receptionist.service");
const create_receptionist_dto_1 = require("./dto/create-receptionist.dto");
const update_receptionist_dto_1 = require("./dto/update-receptionist.dto");
const send_message_dto_1 = require("./dto/send-message.dto");
let ReceptionistController = class ReceptionistController {
    constructor(webhookService, receptionistService) {
        this.webhookService = webhookService;
        this.receptionistService = receptionistService;
    }
    verifyWebhook(mode, token, challenge, res) {
        const result = this.webhookService.verifyWebhook(mode, token, challenge);
        res.status(200).send(result);
    }
    async receiveWebhook(req, signature, payload) {
        return this.webhookService.processWebhook(payload, req.rawBody, signature);
    }
    create(userId, dto) {
        return this.receptionistService.createReceptionist(userId, dto);
    }
    getMine(userId) {
        return this.receptionistService.getMyReceptionist(userId);
    }
    update(userId, dto) {
        return this.receptionistService.updateReceptionist(userId, dto);
    }
    toggle(userId) {
        return this.receptionistService.toggleReceptionist(userId);
    }
    getConversations(userId, page = 1, limit = 20, search) {
        return this.receptionistService.getConversations(userId, { page: +page, limit: +limit, search });
    }
    getThread(userId, phone) {
        return this.receptionistService.getConversationThread(userId, phone);
    }
    manualReply(userId, phone, dto) {
        return this.receptionistService.sendManualReply(userId, phone, dto.message);
    }
    resolve(userId, phone) {
        return this.receptionistService.resolveConversation(userId, phone);
    }
    addKnowledge(userId, dto) {
        return this.receptionistService.addKnowledgeEntry(userId, dto);
    }
    getKnowledge(userId) {
        return this.receptionistService.getKnowledge(userId);
    }
    deleteKnowledge(userId, id) {
        return this.receptionistService.deleteKnowledgeEntry(userId, id);
    }
    analytics(userId) {
        return this.receptionistService.getAnalytics(userId);
    }
    adminList(page = 1, limit = 20) {
        return this.receptionistService.adminListAll(+page, +limit);
    }
    adminSuspend(id) {
        return this.receptionistService.adminSuspend(id);
    }
};
exports.ReceptionistController = ReceptionistController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('webhook'),
    (0, swagger_1.ApiOperation)({ summary: 'Meta webhook verification (GET)' }),
    __param(0, (0, common_1.Query)('hub.mode')),
    __param(1, (0, common_1.Query)('hub.verify_token')),
    __param(2, (0, common_1.Query)('hub.challenge')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", void 0)
], ReceptionistController.prototype, "verifyWebhook", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('webhook'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Meta webhook event receiver (POST)' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Headers)('x-hub-signature-256')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], ReceptionistController.prototype, "receiveWebhook", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('setup'),
    (0, swagger_1.ApiOperation)({ summary: 'Create AI Receptionist for my business' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_receptionist_dto_1.CreateReceptionistDto]),
    __metadata("design:returntype", void 0)
], ReceptionistController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('my'),
    (0, swagger_1.ApiOperation)({ summary: 'Get my receptionist config' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReceptionistController.prototype, "getMine", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('my'),
    (0, swagger_1.ApiOperation)({ summary: 'Update my receptionist config' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_receptionist_dto_1.UpdateReceptionistDto]),
    __metadata("design:returntype", void 0)
], ReceptionistController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('my/toggle'),
    (0, swagger_1.ApiOperation)({ summary: 'Toggle AI Receptionist on/off' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReceptionistController.prototype, "toggle", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('conversations'),
    (0, swagger_1.ApiOperation)({ summary: 'List all conversations for my receptionist' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, String]),
    __metadata("design:returntype", void 0)
], ReceptionistController.prototype, "getConversations", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('conversations/:phone'),
    (0, swagger_1.ApiOperation)({ summary: 'Get conversation thread by phone number' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Param)('phone')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ReceptionistController.prototype, "getThread", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('conversations/:phone/reply'),
    (0, swagger_1.ApiOperation)({ summary: 'Send manual reply in a conversation' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Param)('phone')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, send_message_dto_1.SendMessageDto]),
    __metadata("design:returntype", void 0)
], ReceptionistController.prototype, "manualReply", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('conversations/:phone/resolve'),
    (0, swagger_1.ApiOperation)({ summary: 'Mark conversation as resolved' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Param)('phone')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ReceptionistController.prototype, "resolve", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('knowledge'),
    (0, swagger_1.ApiOperation)({ summary: 'Add FAQ / knowledge base entry' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReceptionistController.prototype, "addKnowledge", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('knowledge'),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReceptionistController.prototype, "getKnowledge", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('knowledge/:id'),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ReceptionistController.prototype, "deleteKnowledge", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('analytics'),
    (0, swagger_1.ApiOperation)({ summary: 'Receptionist analytics dashboard' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReceptionistController.prototype, "analytics", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'super_admin'),
    (0, common_1.Get)('admin/all'),
    (0, swagger_1.ApiOperation)({ summary: '[Admin] List all receptionists' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ReceptionistController.prototype, "adminList", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'super_admin'),
    (0, common_1.Patch)('admin/:id/suspend'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReceptionistController.prototype, "adminSuspend", null);
exports.ReceptionistController = ReceptionistController = __decorate([
    (0, swagger_1.ApiTags)('AI Receptionist'),
    (0, common_1.Controller)('receptionist'),
    __metadata("design:paramtypes", [metawebhook_service_1.MetaWebhookService,
        receptionist_service_1.ReceptionistService])
], ReceptionistController);
//# sourceMappingURL=receptionist.controller.js.map