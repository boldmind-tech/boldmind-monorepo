// SERVICES/api-gateway/src/proxy/proxy.controller.ts - FIXED

import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Req,
  Res,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { ProxyService } from './proxy.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiExcludeEndpoint } from '@nestjs/swagger';

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

@ApiTags('proxy')
@Controller()
export class ProxyController {
  constructor(private proxyService: ProxyService) { }

  @Get('proxy/:service/*')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async proxyGet(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.handleProxyRequest(req, res, headers, 'GET');
  }

  @Post('proxy/:service/*')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async proxyPost(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.handleProxyRequest(req, res, headers, 'POST');
  }

  @Put('proxy/:service/*')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async proxyPut(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.handleProxyRequest(req, res, headers, 'PUT');
  }

  @Patch('proxy/:service/*')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async proxyPatch(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.handleProxyRequest(req, res, headers, 'PATCH');
  }

  @Delete('proxy/:service/*')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async proxyDelete(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.handleProxyRequest(req, res, headers, 'DELETE');
  }


  // ==================== EDUCENTER ROUTES ====================

  @Get('educenter/*')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint() // Exclude from Swagger to avoid errors
  async getEducenter(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('educenter', 'GET', req, res, headers);
  }

  @Post('educenter/*')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postEducenter(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('educenter', 'POST', req, res, headers);
  }

  @Put('educenter/*')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putEducenter(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('educenter', 'PUT', req, res, headers);
  }

  @Patch('educenter/*')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchEducenter(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('educenter', 'PATCH', req, res, headers);
  }

  @Delete('educenter/*')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteEducenter(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('educenter', 'DELETE', req, res, headers);
  }

  // ==================== USER ROUTES ====================

  @Get('users/*')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getUsers(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('users', 'GET', req, res, headers);
  }

  @Post('users/*')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postUsers(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('users', 'POST', req, res, headers);
  }

  @Patch('users/*')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchUsers(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('users', 'PATCH', req, res, headers);
  }

  @Delete('users/*')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteUsers(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('users', 'DELETE', req, res, headers);
  }

  // ==================== PAYMENT ROUTES ====================

  @Get('payments/*')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getPayments(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('payments', 'GET', req, res, headers);
  }

  @Post('payments/*')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postPayments(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('payments', 'POST', req, res, headers);
  }

  @Patch('payments/*')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchPayments(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('payments', 'PATCH', req, res, headers);
  }
  // ==================== HELPER METHODS ====================

  private async handleProxyRequest(
    req: any,
    res: any,
    headers: any,
    method: string,
  ) {
    const service = req.params['service'] as ServiceType;
    return this.proxyRequest(service, method, req, res, headers);
  }

  private async proxyRequest(
    service: ServiceType,
    method: string,
    req: any,
    res: any,
    headers: any,
  ) {
    const path = req.url.replace(`/api/${service}`, '').replace(`/api/proxy/${service}`, '');
    const data = req.body;

    try {
      const result = await this.proxyService.serviceRequest(service, method, path, data, headers);
      return res.json(result);
    } catch (error: any) {
      console.error(`Proxy error (${service}):`, error.message);
      return res.status(error.response?.status || 500).json({
        error: error.message || 'Proxy request failed',
        service,
        path,
      });
    }
  }
}
