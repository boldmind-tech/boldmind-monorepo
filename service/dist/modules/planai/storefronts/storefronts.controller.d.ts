import { StorefrontsService } from './storefronts.service';
import { CreateStoreDto, UpdateStoreDto, CreateProductDto, UpdateProductDto, PlaceOrderDto, UpdateOrderStatusDto, GetProductsQueryDto, GetOrdersQueryDto } from './dto/storefronts.dto';
export declare class StorefrontsController {
    private readonly service;
    constructor(service: StorefrontsService);
    getPublicStore(slug: string): Promise<any>;
    getStoreProducts(slug: string, query: GetProductsQueryDto): Promise<{
        data: {
            name: string;
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            tags: string[];
            description: string | null;
            currency: string;
            category: string | null;
            price: number;
            imageUrls: string[];
            comparePrice: number | null;
            sku: string | null;
            stock: number;
            trackInventory: boolean;
            weight: number | null;
            storeId: string;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
    getProduct(productId: string): Promise<{
        store: {
            name: string;
            id: string;
            slug: string;
            colorTheme: string;
        };
    } & {
        name: string;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        tags: string[];
        description: string | null;
        currency: string;
        category: string | null;
        price: number;
        imageUrls: string[];
        comparePrice: number | null;
        sku: string | null;
        stock: number;
        trackInventory: boolean;
        weight: number | null;
        storeId: string;
    }>;
    placeOrder(slug: string, dto: PlaceOrderDto): Promise<{
        message: string;
        totalNGN: number;
        items: {
            id: string;
            productId: string;
            quantity: number;
            productName: string;
            unitPrice: number;
            totalPrice: number;
            orderId: string;
        }[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.OrderStatus;
        cancelledAt: Date | null;
        totalAmount: number;
        notes: string | null;
        customerName: string;
        customerEmail: string;
        customerPhone: string | null;
        deliveryAddress: import("@prisma/client/runtime/client").JsonValue;
        trackingCode: string | null;
        storeId: string;
        buyerId: string | null;
        orderNumber: string;
        shippingFee: number;
        paymentRef: string | null;
        paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
        shippedAt: Date | null;
        deliveredAt: Date | null;
    }>;
    createStore(userId: string, dto: CreateStoreDto): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        coverImageUrl: string | null;
        state: string | null;
        userId: string;
        status: import("@prisma/client").$Enums.StoreStatus;
        description: string | null;
        category: string;
        settings: import("@prisma/client/runtime/client").JsonValue | null;
        whatsappNumber: string | null;
        slug: string;
        logoUrl: string | null;
        customDomain: string | null;
        colorTheme: string;
        address: string | null;
        paystackSubAccount: string | null;
        totalRevenue: number;
        totalOrders: number;
    }>;
    getMyStores(userId: string): Promise<({
        _count: {
            orders: number;
            products: number;
        };
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        coverImageUrl: string | null;
        state: string | null;
        userId: string;
        status: import("@prisma/client").$Enums.StoreStatus;
        description: string | null;
        category: string;
        settings: import("@prisma/client/runtime/client").JsonValue | null;
        whatsappNumber: string | null;
        slug: string;
        logoUrl: string | null;
        customDomain: string | null;
        colorTheme: string;
        address: string | null;
        paystackSubAccount: string | null;
        totalRevenue: number;
        totalOrders: number;
    })[]>;
    updateStore(storeId: string, userId: string, dto: UpdateStoreDto): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        coverImageUrl: string | null;
        state: string | null;
        userId: string;
        status: import("@prisma/client").$Enums.StoreStatus;
        description: string | null;
        category: string;
        settings: import("@prisma/client/runtime/client").JsonValue | null;
        whatsappNumber: string | null;
        slug: string;
        logoUrl: string | null;
        customDomain: string | null;
        colorTheme: string;
        address: string | null;
        paystackSubAccount: string | null;
        totalRevenue: number;
        totalOrders: number;
    }>;
    deleteStore(storeId: string, userId: string): Promise<{
        message: string;
    }>;
    getDashboard(storeId: string, userId: string): Promise<any>;
    addProduct(storeId: string, userId: string, dto: CreateProductDto): Promise<{
        name: string;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        tags: string[];
        description: string | null;
        currency: string;
        category: string | null;
        price: number;
        imageUrls: string[];
        comparePrice: number | null;
        sku: string | null;
        stock: number;
        trackInventory: boolean;
        weight: number | null;
        storeId: string;
    }>;
    updateProduct(storeId: string, productId: string, userId: string, dto: UpdateProductDto): Promise<{
        name: string;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        tags: string[];
        description: string | null;
        currency: string;
        category: string | null;
        price: number;
        imageUrls: string[];
        comparePrice: number | null;
        sku: string | null;
        stock: number;
        trackInventory: boolean;
        weight: number | null;
        storeId: string;
    }>;
    deleteProduct(storeId: string, productId: string, userId: string): Promise<{
        message: string;
    }>;
    getOrders(storeId: string, userId: string, query: GetOrdersQueryDto): Promise<{
        data: {
            totalNGN: number;
            subtotalNGN: number;
            items: ({
                product: {
                    name: string;
                    imageUrls: string[];
                };
            } & {
                id: string;
                productId: string;
                quantity: number;
                productName: string;
                unitPrice: number;
                totalPrice: number;
                orderId: string;
            })[];
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import("@prisma/client").$Enums.OrderStatus;
            cancelledAt: Date | null;
            totalAmount: number;
            notes: string | null;
            customerName: string;
            customerEmail: string;
            customerPhone: string | null;
            deliveryAddress: import("@prisma/client/runtime/client").JsonValue;
            trackingCode: string | null;
            storeId: string;
            buyerId: string | null;
            orderNumber: string;
            shippingFee: number;
            paymentRef: string | null;
            paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
            shippedAt: Date | null;
            deliveredAt: Date | null;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
    updateOrderStatus(storeId: string, orderId: string, userId: string, dto: UpdateOrderStatusDto): Promise<{
        totalNGN: number;
        items: ({
            product: {
                name: string;
            };
        } & {
            id: string;
            productId: string;
            quantity: number;
            productName: string;
            unitPrice: number;
            totalPrice: number;
            orderId: string;
        })[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.OrderStatus;
        cancelledAt: Date | null;
        totalAmount: number;
        notes: string | null;
        customerName: string;
        customerEmail: string;
        customerPhone: string | null;
        deliveryAddress: import("@prisma/client/runtime/client").JsonValue;
        trackingCode: string | null;
        storeId: string;
        buyerId: string | null;
        orderNumber: string;
        shippingFee: number;
        paymentRef: string | null;
        paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
        shippedAt: Date | null;
        deliveredAt: Date | null;
    }>;
}
