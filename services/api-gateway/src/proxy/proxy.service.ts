import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProxyService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  private getServiceUrl(service: string): string {
    const serviceUrls = this.configService.get('services');
    return serviceUrls[service];
  }

  async forwardRequest(
    service: string,
    method: string,
    path: string,
    data?: any,
    headers?: any,
  ) {
    const serviceUrl = this.getServiceUrl(service);
    const url = `${serviceUrl}${path}`;

    try {
      const response = await firstValueFrom(
        this.httpService.request({
          method,
          url,
          data,
          headers,
        }),
      );

      return response.data;
    } catch (error) {
      throw new Error(`Service request failed: ${error}`);
    }
  }

  // EduCenter service methods
  async educenterRequest(method: string, path: string, data?: any, headers?: any) {
    return this.forwardRequest('educenter', method, path, data, headers);
  }

  // User service methods
  async userRequest(method: string, path: string, data?: any, headers?: any) {
    return this.forwardRequest('user', method, path, data, headers);
  }

  // Payment service methods
  async paymentRequest(method: string, path: string, data?: any, headers?: any) {
    return this.forwardRequest('payment', method, path, data, headers);
  }
}