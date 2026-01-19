import APIClient from '../client';

const defaultClient = new APIClient(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api');

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  status: 'draft' | 'building' | 'beta' | 'live' | 'archived';
  version: string;
  ownerId?: string;
  features: string[];
  pricing?: {
    type: 'free' | 'paid' | 'freemium';
    plans?: {
      name: string;
      price: number;
      interval: 'monthly' | 'yearly';
      features: string[];
    }[];
  };
  stats?: {
    users: number;
    revenue?: number;
    rating?: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductData {
  name: string;
  description: string;
  category: string;
  features: string[];
  status?: string;
}

export const productsApi = {
  getProducts: (params?: { 
    category?: string; 
    status?: string; 
    limit?: number; 
    offset?: number 
  }) => 
    defaultClient.get<{ products: Product[]; total: number }>('/products', { params }),
  
  getProduct: (productId: string) => 
    defaultClient.get<Product>(`/products/${productId}`),
  
  getProductBySlug: (slug: string) => 
    defaultClient.get<Product>(`/products/slug/${slug}`),
  
  createProduct: (data: CreateProductData) => 
    defaultClient.post<Product>('/products', data),
  
  updateProduct: (productId: string, data: Partial<CreateProductData>) => 
    defaultClient.put<Product>(`/products/${productId}`, data),
  
  deleteProduct: (productId: string) => 
    defaultClient.delete(`/products/${productId}`),
  
  getProductStats: (productId: string) => 
    defaultClient.get<any>(`/products/${productId}/stats`),
  
  updateProductStatus: (productId: string, status: string) => 
    defaultClient.put(`/products/${productId}/status`, { status }),
  
  getProductCategories: () => 
    defaultClient.get<string[]>('/products/categories'),
  
  searchProducts: (query: string, params?: { limit?: number }) => 
    defaultClient.get<Product[]>(`/products/search?q=${query}`, { params })
};