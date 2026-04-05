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
exports.PaymentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const payment_service_1 = require("./payment.service");
const payment_dto_1 = require("./payment.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const user_decorator_1 = require("../../common/decorators/user.decorator");
const public_decorator_1 = require("../../common/decorators/public.decorator");
let PaymentController = class PaymentController {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    initialize(userId, email, dto) {
        return this.paymentService.initializePayment(userId, email, dto);
    }
    verify(reference) {
        return this.paymentService.verifyPayment(reference);
    }
    webhook(signature, req) {
        return this.paymentService.handleWebhook(signature, req.rawBody);
    }
    history(userId, page = 1, limit = 20) {
        return this.paymentService.getUserPayments(userId, +page, +limit);
    }
    subscriptions(userId) {
        return this.paymentService.getUserSubscriptions(userId);
    }
    checkAccess(userId, productSlug) {
        return this.paymentService.checkProductAccess(userId, productSlug);
    }
    joinWaitlist(body) {
        return this.paymentService.createWaitlistEntry(body.productSlug, body.email, body.name);
    }
};
exports.PaymentController = PaymentController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('initialize'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Initialize Paystack payment' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)('email')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, payment_dto_1.InitializePaymentDto]),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "initialize", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('verify/:reference'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Verify a Paystack transaction' }),
    __param(0, (0, common_1.Param)('reference')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "verify", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('webhook'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Paystack webhook endpoint' }),
    __param(0, (0, common_1.Headers)('x-paystack-signature')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "webhook", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('history'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Get payment history for current user' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "history", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('subscriptions'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all subscriptions for current user' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "subscriptions", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('access/:productSlug'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Check if user has access to a product' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Param)('productSlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "checkAccess", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('waitlist'),
    (0, swagger_1.ApiOperation)({ summary: 'Join product waitlist' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "joinWaitlist", null);
exports.PaymentController = PaymentController = __decorate([
    (0, swagger_1.ApiTags)('Payments'),
    (0, common_1.Controller)('payment'),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], PaymentController);
//# sourceMappingURL=payment.controller.js.map