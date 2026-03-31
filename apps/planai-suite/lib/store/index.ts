// APPS/WEB_APPS/storefronts/lib/api.ts
import { boldMindAPI, type Storefront, type StoreProduct, type StoreOrder } from '@boldmind/api-client';

/**
 * Storefronts API Client
 * E-commerce store management
 */
export const storefrontsAPI = {
    /**
     * Public Storefronts
     */
    public: {
        /** GET /storefronts/:slug - Get storefront by slug */
        get: (slug: string) => boldMindAPI.storefronts.get(slug),
        
        /** GET /storefronts/:slug/products - Get store products */
        getProducts: (slug: string) => boldMindAPI.storefronts.products(slug),
        
        /** GET /storefronts/products/:productId - Get product details */
        getProduct: (productId: string) => boldMindAPI.storefronts.getProduct(productId),
        
        /** POST /storefronts/:slug/orders - Place order */
        placeOrder: (slug: string, data: { productId: string; buyerEmail: string; buyerName?: string }) =>
            boldMindAPI.storefronts.placeOrder(slug, data),
    },
    
    /**
     * Store Owner Functions
     */
    owner: {
        /** POST /storefronts - Create store */
        create: (data: Partial<Storefront>) => boldMindAPI.storefronts.owner.create(data),
        
        /** GET /storefronts/owner/my-stores - Get my stores */
        getMyStores: () => boldMindAPI.storefronts.owner.myStores(),
        
        /** PATCH /storefronts/owner/:storeId - Update store */
        update: (storeId: string, data: Partial<Storefront>) =>
            boldMindAPI.storefronts.owner.update(storeId, data),
        
        /** DELETE /storefronts/owner/:storeId - Delete store */
        delete: (storeId: string) => boldMindAPI.storefronts.owner.delete(storeId),
        
        /** GET /storefronts/owner/:storeId/dashboard - Get store dashboard */
        getDashboard: (storeId: string) => boldMindAPI.storefronts.owner.dashboard(storeId),
        
        /** POST /storefronts/owner/:storeId/products - Add product */
        addProduct: (storeId: string, data: Partial<StoreProduct>) =>
            boldMindAPI.storefronts.owner.addProduct(storeId, data),
        
        /** PATCH /storefronts/owner/:storeId/products/:productId - Update product */
        updateProduct: (storeId: string, productId: string, data: Partial<StoreProduct>) =>
            boldMindAPI.storefronts.owner.updateProduct(storeId, productId, data),
        
        /** DELETE /storefronts/owner/:storeId/products/:productId - Delete product */
        deleteProduct: (storeId: string, productId: string) =>
            boldMindAPI.storefronts.owner.deleteProduct(storeId, productId),
        
        /** GET /storefronts/owner/:storeId/orders - Get store orders */
        getOrders: (storeId: string) => boldMindAPI.storefronts.owner.orders(storeId),
        
        /** PATCH /storefronts/owner/:storeId/orders/:orderId - Update order status */
        updateOrder: (storeId: string, orderId: string, data: { status: StoreOrder['status'] }) =>
            boldMindAPI.storefronts.owner.updateOrder(storeId, orderId, data),
    },
};

export default storefrontsAPI;