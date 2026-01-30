export interface User {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  subscriptions: Record<string, Subscription>;
  stats: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

export interface Subscription {
  active: boolean;
  productId?: string;
  expiresAt?: Date | null;
  plan?: string;
}

export interface Product {
  productId: string;
  name: string;
  app: string;
  category: string;
  price: number;
  currency: string;
  duration?: number;
  metadata: {
    pillar?: string;
    features?: string[];
    description?: string;
  };
  active: boolean;
}

export interface Transaction {
  reference: string;
  uid: string;
  email: string;
  app: string;
  productId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'success' | 'failed' | 'refunded';
  paidAt?: Date;
  createdAt: Date;
}
