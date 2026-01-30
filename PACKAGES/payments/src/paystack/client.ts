import axios from 'axios';
import { PaymentData, PaymentResponse, PaymentVerificationResponse, PaymentConfig } from '../types';

export class PaystackClient {
  private baseURL = 'https://api.paystack.co';
  private secretKey: string;
  public publicKey: string;

  constructor(config: PaymentConfig) {
    this.secretKey = config.secretKey;
    this.publicKey = config.publicKey;
  }

  async initializePayment(data: PaymentData): Promise<PaymentResponse> {
    try {
      const response = await axios.post(
        `${this.baseURL}/transaction/initialize`,
        {
          amount: data.amount * 100, // Paystack uses kobo
          email: data.email,
          reference: data.reference || `ref_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          currency: data.currency || 'NGN',
          callback_url: data.callback_url,
          metadata: data.metadata,
          channels: ['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer']
        },
        {
          headers: {
            Authorization: `Bearer ${this.secretKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.status) {
        return {
          success: true,
          message: 'Payment initialized successfully',
          data: {
            reference: response.data.data.reference,
            authorization_url: response.data.data.authorization_url,
            access_code: response.data.data.access_code
          }
        };
      }

      return {
        success: false,
        message: response.data.message || 'Failed to initialize payment'
      };
    } catch (error: any) {
      console.error('Paystack initialization error:', error);
      return {
        success: false,
        message: error.response?.data?.message || error.message || 'Payment initialization failed',
        error: error.message
      };
    }
  }

  async verifyPayment(reference: string): Promise<PaymentVerificationResponse> {
    try {
      const response = await axios.get(
        `${this.baseURL}/transaction/verify/${reference}`,
        {
          headers: {
            Authorization: `Bearer ${this.secretKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.status && response.data.data.status === 'success') {
        const transaction = response.data.data;
        return {
          success: true,
          verified: true,
          data: {
            reference: transaction.reference,
            amount: transaction.amount / 100,
            currency: transaction.currency,
            status: transaction.status,
            paid_at: transaction.paid_at,
            customer: {
              email: transaction.customer.email,
              name: transaction.customer.name
            }
          }
        };
      }

      return {
        success: false,
        verified: false,
        message: response.data.message || 'Payment verification failed'
      };
    } catch (error: any) {
      console.error('Paystack verification error:', error);
      return {
        success: false,
        verified: false,
        message: error.response?.data?.message || error.message || 'Payment verification failed',
        error: error.message
      };
    }
  }

  async createPlan(name: string, amount: number, interval: string): Promise<any> {
    try {
      const response = await axios.post(
        `${this.baseURL}/plan`,
        {
          name,
          amount: amount * 100,
          interval,
          currency: 'NGN'
        },
        {
          headers: {
            Authorization: `Bearer ${this.secretKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      return response.data;
    } catch (error: any) {
      console.error('Paystack create plan error:', error);
      throw error;
    }
  }

  async createSubscription(planCode: string, customerEmail: string, authorizationCode: string): Promise<any> {
    try {
      const response = await axios.post(
        `${this.baseURL}/subscription`,
        {
          plan: planCode,
          customer: customerEmail,
          authorization: authorizationCode
        },
        {
          headers: {
            Authorization: `Bearer ${this.secretKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      return response.data;
    } catch (error: any) {
      console.error('Paystack create subscription error:', error);
      throw error;
    }
  }
}