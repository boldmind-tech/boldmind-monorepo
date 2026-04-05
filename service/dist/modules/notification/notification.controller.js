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
exports.NotificationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const notification_service_1 = require("./notification.service");
const send_push_dto_1 = require("./dto/send-push.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const decorators_1 = require("../../common/decorators");
let NotificationController = class NotificationController {
    constructor(notifService) {
        this.notifService = notifService;
    }
    getMyNotifications(userId, page = 1, limit = 20) {
        return this.notifService.getUserNotifications(userId, +page, +limit);
    }
    markAsRead(userId, ids) {
        return this.notifService.markAsRead(userId, ids);
    }
    deleteNotification(userId, id) {
        return this.notifService.deleteNotification(userId, id);
    }
    subscribePush(userId, dto) {
        return this.notifService.subscribePush(userId, {
            endpoint: dto.endpoint,
            keys: dto.keys,
        }, dto.deviceLabel);
    }
    unsubscribePush(endpoint) {
        return this.notifService.unsubscribePush(endpoint);
    }
    broadcastPush(dto) {
        return this.notifService.broadcastToAll(dto);
    }
    broadcastEmail(body) {
        return this.notifService.broadcastEmail(body.subject, body.html, body.segment);
    }
};
exports.NotificationController = NotificationController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get current user notifications' }),
    __param(0, (0, decorators_1.CurrentUser)('id')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], NotificationController.prototype, "getMyNotifications", null);
__decorate([
    (0, common_1.Post)('read'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Mark notifications as read' }),
    __param(0, (0, decorators_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", void 0)
], NotificationController.prototype, "markAsRead", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a notification' }),
    __param(0, (0, decorators_1.CurrentUser)('id')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], NotificationController.prototype, "deleteNotification", null);
__decorate([
    (0, common_1.Post)('push/subscribe'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Subscribe to web push notifications' }),
    __param(0, (0, decorators_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, send_push_dto_1.SubscribePushDto]),
    __metadata("design:returntype", void 0)
], NotificationController.prototype, "subscribePush", null);
__decorate([
    (0, common_1.Post)('push/unsubscribe'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Unsubscribe from push notifications' }),
    __param(0, (0, common_1.Body)('endpoint')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotificationController.prototype, "unsubscribePush", null);
__decorate([
    (0, common_1.Post)('broadcast/push'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, decorators_1.Roles)('ADMIN', 'SUPER_ADMIN'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Broadcast push notification to all users (admin)' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_push_dto_1.SendPushDto]),
    __metadata("design:returntype", void 0)
], NotificationController.prototype, "broadcastPush", null);
__decorate([
    (0, common_1.Post)('broadcast/email'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, decorators_1.Roles)('ADMIN', 'SUPER_ADMIN'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Broadcast email to all or a segment (admin)' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificationController.prototype, "broadcastEmail", null);
exports.NotificationController = NotificationController = __decorate([
    (0, swagger_1.ApiTags)('Notifications'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('notifications'),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], NotificationController);
//# sourceMappingURL=notification.controller.js.map