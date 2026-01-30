// SERVICES/api-gateway/src/proxy/proxy.service.ts

import { Injectable, HttpException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

type ServiceType =
  | 'educenter'
  | 'users'
  | 'payments'
  | 'analytics'
  | 'hub'
  | 'receptionist'
  | 'credibility'
  | 'business-planning'
  | 'financial'
  | 'investor'
  | 'storefronts'
  | 'digital-storefronts'
  | 'marketing'
  | 'analytics-dashboard'
  | 'safeai'
  | 'koloai'
  | 'receipt'
  | 'amebogist'
  | 'social-factory'
  | 'emailscraper-pro'
  | 'afrohustle'
  | 'naijagig-matcher'
  | 'borderless-remit'
  | 'power-alert'
  | 'farmgate-direct'
  | 'afrocopy-ai'
  | 'skill2cash'
  | 'anontruth-mic';

@Injectable()
export class ProxyService {
  private readonly serviceUrls: Record<ServiceType, string>;

  constructor(private httpService: HttpService) {
    // Initialize all service URLs from environment variables
    this.serviceUrls = {
      // PostgreSQL Services
      'educenter': process.env['EDUCENTER_SERVICE_URL'] || 'http://localhost:4001',
      'users': process.env['USER_SERVICE_URL'] || 'http://localhost:4002',
      'payments': process.env['PAYMENT_SERVICE_URL'] || 'http://localhost:4003',
      'analytics': process.env['ANALYTICS_SERVICE_URL'] || 'http://localhost:4004',
      'hub': process.env['HUB_SERVICE_URL'] || 'http://localhost:4005',
      'receptionist': process.env['RECEPTIONIST_SERVICE_URL'] || 'http://localhost:4006',
      'credibility': process.env['CREDIBILITY_SERVICE_URL'] || 'http://localhost:4007',
      'business-planning': process.env['BUSINESS_PLANNING_SERVICE_URL'] || 'http://localhost:4008',
      'financial': process.env['FINANCIAL_SERVICE_URL'] || 'http://localhost:4009',
      'investor': process.env['INVESTOR_SERVICE_URL'] || 'http://localhost:4010',
      'storefronts': process.env['STOREFRONTS_SERVICE_URL'] || 'http://localhost:4011',
      'digital-storefronts': process.env['DIGITAL_STOREFRONTS_SERVICE_URL'] || 'http://localhost:4012',
      'marketing': process.env['MARKETING_SERVICE_URL'] || 'http://localhost:4013',
      'analytics-dashboard': process.env['ANALYTICS_DASHBOARD_SERVICE_URL'] || 'http://localhost:4014',
      'safeai': process.env['SAFEAI_SERVICE_URL'] || 'http://localhost:4015',
      'koloai': process.env['KOLOAI_SERVICE_URL'] || 'http://localhost:4016',
      'receipt': process.env['RECEIPT_SERVICE_URL'] || 'http://localhost:4017',

      // MongoDB Services
      'amebogist': process.env['AMEBOGIST_SERVICE_URL'] || 'http://localhost:4021',
      'social-factory': process.env['SOCIAL_FACTORY_SERVICE_URL'] || 'http://localhost:4022',
      'emailscraper-pro': process.env['EMAILSCRAPER_PRO_SERVICE_URL'] || 'http://localhost:4023',
      'afrohustle': process.env['AFROHUSTLE_SERVICE_URL'] || 'http://localhost:4024',
      'naijagig-matcher': process.env['NAIJAGIG_MATCHER_SERVICE_URL'] || 'http://localhost:4025',
      'borderless-remit': process.env['BORDERLESS_REMIT_SERVICE_URL'] || 'http://localhost:4026',
      'power-alert': process.env['POWER_ALERT_SERVICE_URL'] || 'http://localhost:4027',
      'farmgate-direct': process.env['FARMGATE_DIRECT_SERVICE_URL'] || 'http://localhost:4028',
      'afrocopy-ai': process.env['AFROCOPY_AI_SERVICE_URL'] || 'http://localhost:4029',
      'skill2cash': process.env['SKILL2CASH_SERVICE_URL'] || 'http://localhost:4030',
      'anontruth-mic': process.env['ANONTRUTH_MIC_SERVICE_URL'] || 'http://localhost:4031',
    };
  }

  // Generic service request
  async serviceRequest(
    service: ServiceType,
    method: string,
    path: string,
    data?: any,
    headers?: any,
  ): Promise<any> {
    const baseUrl = this.serviceUrls[service];
    if (!baseUrl) {
      throw new HttpException(`Service '${service}' not configured`, 500);
    }
    return this.makeRequest(baseUrl, method, path, data, headers);
  }

  // Individual service methods for backward compatibility
  async educenterRequest(
    method: string,
    path: string,
    data?: any,
    headers?: any,
  ): Promise<any> {
    return this.serviceRequest('educenter', method, path, data, headers);
  }

  async hub(
    method: string,
    path: string,
    data?: any,
    headers?: any,
  ): Promise<any> {
    return this.serviceRequest('hub', method, path, data, headers);
  }

  async userRequest(
    method: string,
    path: string,
    data?: any,
    headers?: any,
  ): Promise<any> {
    return this.serviceRequest('users', method, path, data, headers);
  }

  async paymentRequest(
    method: string,
    path: string,
    data?: any,
    headers?: any,
  ): Promise<any> {
    return this.serviceRequest('payments', method, path, data, headers);
  }

  // MongoDB services
  async amebogistRequest(
    method: string,
    path: string,
    data?: any,
    headers?: any,
  ): Promise<any> {
    return this.serviceRequest('amebogist', method, path, data, headers);
  }

  async socialFactoryRequest(
    method: string,
    path: string,
    data?: any,
    headers?: any,
  ): Promise<any> {
    return this.serviceRequest('social-factory', method, path, data, headers);
  }

  // Add more individual methods as needed...

  private async makeRequest(
    baseUrl: string,
    method: string,
    path: string,
    data?: any,
    headers?: any,
  ): Promise<any> {
    try {
      const url = `${baseUrl}${path}`;

      // Remove authorization header from forwarded request
      // (services will authenticate via JWT from user object)
      const filteredHeaders = { ...headers };
      delete filteredHeaders.authorization;

      const config = {
        method: method.toLowerCase(),
        url,
        headers: {
          'Content-Type': 'application/json',
          ...filteredHeaders,
        },
        ...(data && Object.keys(data).length > 0 && { data }),
        // Add timeout
        timeout: 30000, // 30 seconds
      };

      const response = await firstValueFrom(this.httpService.request(config));
      return response.data;
    } catch (error: any) {
      console.error(`Proxy request failed: ${method} ${baseUrl}${path}`, error.message);

      if (error.response) {
        // Forward the error from the service
        throw new HttpException(
          error.response.data || 'Service error',
          error.response.status,
        );
      } else if (error.request) {
        // Service is unreachable
        throw new HttpException(
          `Service unavailable: ${error.message}`,
          503,
        );
      } else {
        // Other errors
        throw new HttpException(
          `Proxy error: ${error.message}`,
          500,
        );
      }
    }
  }

  // Health check for all services
  async checkServiceHealth(): Promise<Record<string, { status: string; responseTime?: number }>> {
    const healthResults: Record<string, { status: string; responseTime?: number }> = {};

    const services = Object.keys(this.serviceUrls) as ServiceType[];

    for (const service of services) {
      const startTime = Date.now();
      try {
        await this.makeRequest(this.serviceUrls[service], 'GET', '/health', undefined, {});
        const responseTime = Date.now() - startTime;
        healthResults[service] = { status: 'healthy', responseTime };
      } catch (error) {
        healthResults[service] = { status: 'unhealthy' };
      }
    }

    return healthResults;
  }
}