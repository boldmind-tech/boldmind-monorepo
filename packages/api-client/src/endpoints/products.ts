import APIClient from '../client';

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

export class ProductsEndpoints {
  constructor(private client: APIClient) {}

  async getProducts(params?: { 
    category?: string; 
    status?: string; 
    limit?: number; 
    offset?: number 
  }) {
    return this.client.get<{ products: Product[]; total: number }>('/products', { params });
  }
  
  async getProduct(productId: string) {
    return this.client.get<Product>(`/products/${productId}`);
  }
  
  async getProductBySlug(slug: string) {
    return this.client.get<Product>(`/products/slug/${slug}`);
  }
  
  async createProduct(data: CreateProductData) {
    return this.client.post<Product>('/products', data);
  }
  
  async updateProduct(productId: string, data: Partial<CreateProductData>) {
    return this.client.put<Product>(`/products/${productId}`, data);
  }
  
  async deleteProduct(productId: string) {
    return this.client.delete(`/products/${productId}`);
  }
  
  async getProductStats(productId: string) {
    return this.client.get<any>(`/products/${productId}/stats`);
  }
  
  async updateProductStatus(productId: string, status: string) {
    return this.client.put(`/products/${productId}/status`, { status });
  }
  
  async getProductCategories() {
    return this.client.get<string[]>('/products/categories');
  }
  
  async searchProducts(query: string, params?: { limit?: number }) {
    return this.client.get<Product[]>(`/products/search?q=${query}`, { params });
  }
}