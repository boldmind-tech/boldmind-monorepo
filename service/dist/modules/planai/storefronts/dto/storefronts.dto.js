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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrdersQueryDto = exports.GetProductsQueryDto = exports.UpdateOrderStatusDto = exports.PlaceOrderDto = exports.DeliveryAddressDto = exports.OrderItemDto = exports.UpdateProductDto = exports.CreateProductDto = exports.UpdateStoreDto = exports.CreateStoreDto = exports.ORDER_STATUSES = exports.STORE_CATEGORIES = exports.NIGERIAN_STATES = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const mapped_types_1 = require("@nestjs/mapped-types");
exports.NIGERIAN_STATES = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
    'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT',
    'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi',
    'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo',
    'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara',
];
exports.STORE_CATEGORIES = [
    'fashion', 'electronics', 'food-drinks', 'beauty-health', 'home-garden',
    'sports-outdoors', 'books-education', 'art-crafts', 'digital-products',
    'services', 'automobiles', 'agriculture', 'baby-kids', 'general',
];
exports.ORDER_STATUSES = [
    'PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED', 'CANCELLED', 'REFUNDED',
];
class CreateStoreDto {
}
exports.CreateStoreDto = CreateStoreDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(80),
    __metadata("design:type", String)
], CreateStoreDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(60),
    (0, class_validator_1.Matches)(/^[a-z0-9-]+$/, { message: 'Slug can only contain lowercase letters, numbers and hyphens' }),
    __metadata("design:type", String)
], CreateStoreDto.prototype, "slug", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1000),
    __metadata("design:type", String)
], CreateStoreDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsIn)(exports.STORE_CATEGORIES, { message: `Category must be one of: ${exports.STORE_CATEGORIES.join(', ')}` }),
    __metadata("design:type", String)
], CreateStoreDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], CreateStoreDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(exports.NIGERIAN_STATES, { message: 'Must be a valid Nigerian state' }),
    __metadata("design:type", String)
], CreateStoreDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^\+?234[0-9]{10}$|^0[7-9][0-1][0-9]{8}$/, {
        message: 'Enter a valid Nigerian phone number e.g. 08012345678 or +2348012345678',
    }),
    __metadata("design:type", String)
], CreateStoreDto.prototype, "whatsappNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(7),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, { message: 'Color must be a valid hex code e.g. #059669' }),
    __metadata("design:type", String)
], CreateStoreDto.prototype, "colorTheme", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({}, { message: 'Logo must be a valid URL' }),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], CreateStoreDto.prototype, "logo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({}, { message: 'Logo must be a valid URL' }),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], CreateStoreDto.prototype, "logoUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({}, { message: 'Banner must be a valid URL' }),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], CreateStoreDto.prototype, "banner", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({}, { message: 'Cover image must be a valid URL' }),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], CreateStoreDto.prototype, "coverImageUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStoreDto.prototype, "paystackSubAccount", void 0);
const client_1 = require("@prisma/client");
class UpdateStoreDto extends (0, mapped_types_1.PartialType)(CreateStoreDto) {
}
exports.UpdateStoreDto = UpdateStoreDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['ACTIVE', 'PAUSED', 'SUSPENDED']),
    __metadata("design:type", String)
], UpdateStoreDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateStoreDto.prototype, "isActive", void 0);
class CreateProductDto {
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(5000),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: 'price must be an integer in Kobo (e.g. ₦500 = 50000 kobo)' }),
    (0, class_validator_1.Min)(100, { message: 'Minimum price is ₦1 (100 kobo)' }),
    (0, class_validator_1.Max)(10_000_000_00),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1, { message: 'Minimum price is ₦1' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "priceNGN", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "comparePrice", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateProductDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateProductDto.prototype, "sku", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "stock", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "stockQuantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProductDto.prototype, "trackInventory", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMaxSize)(10, { message: 'Maximum 10 images per product' }),
    (0, class_validator_1.IsUrl)({}, { each: true, message: 'Each image must be a valid URL' }),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "imageUrls", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsUrl)({}, { each: true }),
    (0, class_validator_1.ArrayMaxSize)(10),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "images", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.ArrayMaxSize)(20),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "tags", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "weight", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProductDto.prototype, "isDigital", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({}, { message: 'Download URL must be a valid URL' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "downloadUrl", void 0);
class UpdateProductDto extends (0, mapped_types_1.PartialType)(CreateProductDto) {
}
exports.UpdateProductDto = UpdateProductDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateProductDto.prototype, "isActive", void 0);
class OrderItemDto {
}
exports.OrderItemDto = OrderItemDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], OrderItemDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1, { message: 'Quantity must be at least 1' }),
    (0, class_validator_1.Max)(1000),
    __metadata("design:type", Number)
], OrderItemDto.prototype, "quantity", void 0);
class DeliveryAddressDto {
}
exports.DeliveryAddressDto = DeliveryAddressDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(300),
    __metadata("design:type", String)
], DeliveryAddressDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], DeliveryAddressDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsIn)(exports.NIGERIAN_STATES, { message: 'Must be a valid Nigerian state' }),
    __metadata("design:type", String)
], DeliveryAddressDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], DeliveryAddressDto.prototype, "lga", void 0);
class PlaceOrderDto {
}
exports.PlaceOrderDto = PlaceOrderDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1, { message: 'Order must have at least one item' }),
    (0, class_validator_1.ArrayMaxSize)(50),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => OrderItemDto),
    __metadata("design:type", Array)
], PlaceOrderDto.prototype, "items", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], PlaceOrderDto.prototype, "customerName", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Enter a valid email address' }),
    __metadata("design:type", String)
], PlaceOrderDto.prototype, "customerEmail", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^\+?234[0-9]{10}$|^0[7-9][0-1][0-9]{8}$/, {
        message: 'Enter a valid Nigerian phone number',
    }),
    __metadata("design:type", String)
], PlaceOrderDto.prototype, "customerPhone", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => DeliveryAddressDto),
    __metadata("design:type", DeliveryAddressDto)
], PlaceOrderDto.prototype, "deliveryAddress", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], PlaceOrderDto.prototype, "notes", void 0);
class UpdateOrderStatusDto {
}
exports.UpdateOrderStatusDto = UpdateOrderStatusDto;
__decorate([
    (0, class_validator_1.IsIn)(exports.ORDER_STATUSES, { message: `Status must be one of: ${exports.ORDER_STATUSES.join(', ')}` }),
    __metadata("design:type", String)
], UpdateOrderStatusDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], UpdateOrderStatusDto.prototype, "trackingCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], UpdateOrderStatusDto.prototype, "note", void 0);
class GetProductsQueryDto {
    constructor() {
        this.page = 1;
        this.limit = 20;
    }
}
exports.GetProductsQueryDto = GetProductsQueryDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], GetProductsQueryDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], GetProductsQueryDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetProductsQueryDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetProductsQueryDto.prototype, "search", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['price_asc', 'price_desc', 'newest', 'popular']),
    __metadata("design:type", String)
], GetProductsQueryDto.prototype, "sort", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], GetProductsQueryDto.prototype, "minPrice", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], GetProductsQueryDto.prototype, "maxPrice", void 0);
class GetOrdersQueryDto {
    constructor() {
        this.page = 1;
        this.limit = 20;
    }
}
exports.GetOrdersQueryDto = GetOrdersQueryDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)([...exports.ORDER_STATUSES, '']),
    __metadata("design:type", String)
], GetOrdersQueryDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], GetOrdersQueryDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value, 10)),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], GetOrdersQueryDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetOrdersQueryDto.prototype, "search", void 0);
//# sourceMappingURL=storefronts.dto.js.map