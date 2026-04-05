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
exports.StorefrontsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const storefronts_service_1 = require("./storefronts.service");
const auth_guard_1 = require("../../auth/auth.guard");
const user_decorator_1 = require("../../../common/decorators/user.decorator");
const public_decorator_1 = require("../../../common/decorators/public.decorator");
const storefronts_dto_1 = require("./dto/storefronts.dto");
let StorefrontsController = class StorefrontsController {
    constructor(service) {
        this.service = service;
    }
    getPublicStore(slug) {
        return this.service.getPublicStore(slug);
    }
    getStoreProducts(slug, query) {
        return this.service.getStoreProducts(slug, query);
    }
    getProduct(productId) {
        return this.service.getProduct(productId);
    }
    placeOrder(slug, dto) {
        return this.service.placeOrder(slug, dto);
    }
    createStore(userId, dto) {
        return this.service.createStore(dto, userId);
    }
    getMyStores(userId) {
        return this.service.getOwnerStores(userId);
    }
    updateStore(storeId, userId, dto) {
        return this.service.updateStore(storeId, dto, userId);
    }
    deleteStore(storeId, userId) {
        return this.service.deleteStore(storeId, userId);
    }
    getDashboard(storeId, userId) {
        return this.service.getStoreDashboard(storeId, userId);
    }
    addProduct(storeId, userId, dto) {
        return this.service.addProduct(storeId, dto, userId);
    }
    updateProduct(storeId, productId, userId, dto) {
        return this.service.updateProduct(storeId, productId, dto, userId);
    }
    deleteProduct(storeId, productId, userId) {
        return this.service.deleteProduct(storeId, productId, userId);
    }
    getOrders(storeId, userId, query) {
        return this.service.getStoreOrders(storeId, userId, query);
    }
    updateOrderStatus(storeId, orderId, userId, dto) {
        return this.service.updateOrderStatus(storeId, orderId, dto, userId);
    }
};
exports.StorefrontsController = StorefrontsController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get public storefront by slug' }),
    (0, swagger_1.ApiParam)({ name: 'slug', example: 'ade-fashion-store' }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StorefrontsController.prototype, "getPublicStore", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':slug/products'),
    (0, swagger_1.ApiOperation)({ summary: 'List products in a storefront' }),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, storefronts_dto_1.GetProductsQueryDto]),
    __metadata("design:returntype", void 0)
], StorefrontsController.prototype, "getStoreProducts", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('products/:productId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single product' }),
    __param(0, (0, common_1.Param)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StorefrontsController.prototype, "getProduct", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(':slug/orders'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Place an order on a storefront' }),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, storefronts_dto_1.PlaceOrderDto]),
    __metadata("design:returntype", void 0)
], StorefrontsController.prototype, "placeOrder", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new storefront' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, storefronts_dto_1.CreateStoreDto]),
    __metadata("design:returntype", void 0)
], StorefrontsController.prototype, "createStore", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('owner/my-stores'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'List all my storefronts' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StorefrontsController.prototype, "getMyStores", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('owner/:storeId'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a storefront' }),
    __param(0, (0, common_1.Param)('storeId')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, storefronts_dto_1.UpdateStoreDto]),
    __metadata("design:returntype", void 0)
], StorefrontsController.prototype, "updateStore", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('owner/:storeId'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a storefront' }),
    __param(0, (0, common_1.Param)('storeId')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], StorefrontsController.prototype, "deleteStore", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('owner/:storeId/dashboard'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Get store analytics dashboard' }),
    __param(0, (0, common_1.Param)('storeId')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], StorefrontsController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('owner/:storeId/products'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Add a product to a storefront' }),
    __param(0, (0, common_1.Param)('storeId')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, storefronts_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], StorefrontsController.prototype, "addProduct", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('owner/:storeId/products/:productId'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a product' }),
    __param(0, (0, common_1.Param)('storeId')),
    __param(1, (0, common_1.Param)('productId')),
    __param(2, (0, user_decorator_1.CurrentUser)('id')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, storefronts_dto_1.UpdateProductDto]),
    __metadata("design:returntype", void 0)
], StorefrontsController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('owner/:storeId/products/:productId'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a product' }),
    __param(0, (0, common_1.Param)('storeId')),
    __param(1, (0, common_1.Param)('productId')),
    __param(2, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], StorefrontsController.prototype, "deleteProduct", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('owner/:storeId/orders'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Get orders for a storefront' }),
    __param(0, (0, common_1.Param)('storeId')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, storefronts_dto_1.GetOrdersQueryDto]),
    __metadata("design:returntype", void 0)
], StorefrontsController.prototype, "getOrders", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('owner/:storeId/orders/:orderId'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Update order status' }),
    __param(0, (0, common_1.Param)('storeId')),
    __param(1, (0, common_1.Param)('orderId')),
    __param(2, (0, user_decorator_1.CurrentUser)('id')),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, storefronts_dto_1.UpdateOrderStatusDto]),
    __metadata("design:returntype", void 0)
], StorefrontsController.prototype, "updateOrderStatus", null);
exports.StorefrontsController = StorefrontsController = __decorate([
    (0, swagger_1.ApiTags)('Storefronts'),
    (0, common_1.Controller)('storefronts'),
    __metadata("design:paramtypes", [storefronts_service_1.StorefrontsService])
], StorefrontsController);
//# sourceMappingURL=storefronts.controller.js.map