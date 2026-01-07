import axios from 'axios';
import { PaymentData, PaymentResponse, PaymentVerificationResponse, PaymentConfig } from '../types';

export class FlutterwaveClient {
  private baseURL = 'https://api.flutterwave.com/v3';
  private secretKey: string;
  public publicKey: string;
  constructor(config: PaymentConfig) {
    this.secretKey = config.secretKey;
    this.publicKey = config.publicKey;
  }

  async initializePayment(data: PaymentData): Promise<PaymentResponse> {
    try {
      const response = await axios.post(
        `${this.baseURL}/payments`,
        {
          tx_ref: data.reference || `flw_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          amount: data.amount,
          currency: data.currency || 'NGN',
          redirect_url: data.redirect_url,
          payment_options: 'card, banktransfer, ussd, mobilemoneyghana, mobilemoneytanzania, mobilemoneyuganda, mobilemoneyrwanda, mobilemoneyzambia',
          customer: {
            email: data.email,
            name: data.customer?.name || '',
            phone_number: data.customer?.phone || ''
          },
          customizations: {
            title: 'BoldMind Payment',
            description: 'Payment for services',
            logo: 'https://boldmind.ng/logo.png'
          },
          meta: data.metadata
        },
        {
          headers: {
            Authorization: `Bearer ${this.secretKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.status === 'success') {
        return {
          success: true,
          message: 'Payment initialized successfully',
          data: {
            reference: response.data.data.tx_ref,
            checkout_url: response.data.data.link
          }
        };
      }

      return {
        success: false,
        message: response.data.message || 'Failed to initialize payment'
      };
    } catch (error: any) {
      console.error('Flutterwave initialization error:', error);
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
        `${this.baseURL}/transactions/verify_by_reference?tx_ref=${reference}`,
        {
          headers: {
            Authorization: `Bearer ${this.secretKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.status === 'success' && response.data.data.status === 'successful') {
        const transaction = response.data.data;
        return {
          success: true,
          verified: true,
          data: {
            reference: transaction.tx_ref,
            amount: transaction.amount,
            currency: transaction.currency,
            status: transaction.status,
            paid_at: transaction.created_at,
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
      console.error('Flutterwave verification error:', error);
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
        `${this.baseURL}/payment-plans`,
        {
          amount,
          name,
          interval,
          currency: 'NGN',
          duration: 0 // 0 for indefinite
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
      console.error('Flutterwave create plan error:', error);
      throw error;
    }
  }
}