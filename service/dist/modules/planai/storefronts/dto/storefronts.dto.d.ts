export declare const NIGERIAN_STATES: string[];
export declare const STORE_CATEGORIES: string[];
export declare const ORDER_STATUSES: string[];
export declare class CreateStoreDto {
    name: string;
    slug?: string;
    description?: string;
    category: string;
    address?: string;
    state?: string;
    whatsappNumber?: string;
    colorTheme?: string;
    logo?: string;
    logoUrl?: string;
    banner?: string;
    coverImageUrl?: string;
    paystackSubAccount?: string;
}
import { StoreStatus } from '@prisma/client';
declare const UpdateStoreDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateStoreDto>>;
export declare class UpdateStoreDto extends UpdateStoreDto_base {
    status?: StoreStatus;
    isActive?: boolean;
}
export declare class CreateProductDto {
    name: string;
    description?: string;
    price?: number;
    priceNGN?: number;
    comparePrice?: number;
    category?: string;
    sku?: string;
    stock?: number;
    stockQuantity?: number;
    trackInventory?: boolean;
    imageUrls?: string[];
    images?: string[];
    tags?: string[];
    weight?: number;
    isDigital?: boolean;
    downloadUrl?: string;
}
declare const UpdateProductDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
    isActive?: boolean;
}
export declare class OrderItemDto {
    productId: string;
    quantity: number;
}
export declare class DeliveryAddressDto {
    address: string;
    city: string;
    state: string;
    lga: string;
}
export declare class PlaceOrderDto {
    items: OrderItemDto[];
    customerName: string;
    customerEmail: string;
    customerPhone?: string;
    deliveryAddress: DeliveryAddressDto;
    notes?: string;
}
export declare class UpdateOrderStatusDto {
    status: string;
    trackingCode?: string;
    note?: string;
}
export declare class GetProductsQueryDto {
    page?: number;
    limit?: number;
    category?: string;
    search?: string;
    sort?: string;
    minPrice?: number;
    maxPrice?: number;
}
export declare class GetOrdersQueryDto {
    status?: string;
    page?: number;
    limit?: number;
    search?: string;
}
export {};
