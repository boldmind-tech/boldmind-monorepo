import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PaystackService {
  private baseUrl = 'https://api.paystack.co';
  private secretKey: string;

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.secretKey = this.configService.get('PAYSTACK_SECRET_KEY') || '';
  }

  async initializeTransaction(data: {
    email: string;
    amount: number;
    metadata: any;
    callback_url?: string;
  }) {
    try {
      const response = await firstValueFrom(
        this.httpService.post(
          `${this.baseUrl}/transaction/initialize`,
          {
            email: data.email,
            amount: data.amount,
            metadata: data.metadata,
            callback_url: data.callback_url,
          },
          {
            headers: {
              Authorization: `Bearer ${this.secretKey}`,
              'Content-Type': 'application/json',
            },
          },
        ),
      );

      return response.data;
    } catch (error: any) {
      throw new HttpException(
        error?.response?.data?.message || 'Payment initialization failed',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async verifyTransaction(reference: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.baseUrl}/transaction/verify/${reference}`, {
          headers: {
            Authorization: `Bearer ${this.secretKey}`,
          },
        }),
      );

      return response.data;
    } catch (error: any) {
      throw new HttpException(
        error.response?.data?.message || 'Payment verification failed',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}