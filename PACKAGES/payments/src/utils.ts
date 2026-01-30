import { PaymentProvider, PaymentConfig, PaymentData, PaymentResponse, PaymentVerificationResponse } from './types';
import { PaystackClient } from './paystack/client';
import { FlutterwaveClient } from './flutterwave/client';

export class PaymentGateway {
  private provider: PaymentProvider;
  private client: PaystackClient | FlutterwaveClient;

  constructor(config: PaymentConfig) {
    this.provider = config.provider;
    
    if (config.provider === 'paystack') {
      this.client = new PaystackClient(config);
    } else {
      this.client = new FlutterwaveClient(config);
    }
  }

  async initializePayment(data: PaymentData): Promise<PaymentResponse> {
    return await this.client.initializePayment(data);
  }

  async verifyPayment(reference: string): Promise<PaymentVerificationResponse> {
    return await this.client.verifyPayment(reference);
  }

  async createPlan(name: string, amount: number, interval: string): Promise<any> {
    if (this.provider === 'paystack') {
      return await (this.client as PaystackClient).createPlan(name, amount, interval);
    } else {
      return await (this.client as FlutterwaveClient).createPlan(name, amount, interval);
    }
  }

  getProvider(): PaymentProvider {
    return this.provider;
  }
}

// Helper function to generate unique reference
export function generateReference(prefix: string = 'ref'): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substr(2, 9);
  return `${prefix}_${timestamp}_${random}`;
}

// Format amount based on provider requirements
export function formatAmount(amount: number, provider: PaymentProvider): number {
  if (provider === 'paystack') {
    return amount * 100; // Convert to kobo
  }
  return amount; // Flutterwave uses normal amount
}

// Validate payment data
export function validatePaymentData(data: PaymentData): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.amount || data.amount <= 0) {
    errors.push('Amount must be greater than 0');
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email is required');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}