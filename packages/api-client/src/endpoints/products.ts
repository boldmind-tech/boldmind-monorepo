import { api } from '../client';

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
    api.get<{ products: Product[]; total: number }>('/products', {
        params,
        headers: undefined
    }),
  
  getProduct: (productId: string) => 
    api.get<Product>(`/products/${productId}`),
  
  getProductBySlug: (slug: string) => 
    api.get<Product>(`/products/slug/${slug}`),
  
  createProduct: (data: CreateProductData) => 
    api.post<Product>('/products', data),
  
  updateProduct: (productId: string, data: Partial<CreateProductData>) => 
    api.put<Product>(`/products/${productId}`, data),
  
  deleteProduct: (productId: string) => 
    api.delete(`/products/${productId}`),
  
  getProductStats: (productId: string) => 
    api.get<any>(`/products/${productId}/stats`),
  
  updateProductStatus: (productId: string, status: string) => 
    api.put(`/products/${productId}/status`, { status }),
  
  getProductCategories: () => 
    api.get<string[]>('/products/categories'),
  
  searchProducts: (query: string, params?: { limit?: number }) => 
    api.get<Product[]>(`/products/search?q=${query}`, { params })
};  