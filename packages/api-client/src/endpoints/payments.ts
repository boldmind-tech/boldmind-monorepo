import { APIClient } from '../client';

export class PaymentsEndpoints {
  constructor(private client: APIClient) {}

  // Products
  async getProducts(app?: string) {
    const url = app ? `/payments/products/app/${app}` : '/payments/products';
    return this.client.get(url);
  }

  async getProduct(productId: string) {
    return this.client.get(`/payments/products/${productId}`);
  }

  // Subscriptions
  async subscribe(data: { uid: string; email: string; productId: string }) {
    return this.client.post('/payments/subscriptions/subscribe', data);
  }

  async verifyPayment(reference: string) {
    return this.client.post('/payments/subscriptions/verify', { reference });
  }

  async getUserSubscriptions(uid: string) {
    return this.client.get(`/payments/subscriptions/${uid}`);
  }

  // Transactions
  async getUserTransactions(uid: string) {
    return this.client.get(`/payments/transactions/user/${uid}`);
  }

  async getTransaction(reference: string) {
    return this.client.get(`/payments/transactions/${reference}`);
  }

  async getRevenue(params?: { app?: string; startDate?: string; endDate?: string }) {
    return this.client.get('/payments/transactions/revenue', { params });
  }

  async getRevenueByApp(params?: { startDate?: string; endDate?: string }) {
    return this.client.get('/payments/transactions/revenue/by-app', { params });
  }
}