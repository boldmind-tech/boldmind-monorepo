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
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { ApiTags, ApiBearerAuth, ApiExcludeEndpoint } from '@nestjs/swagger';
import { Public } from '../auth/decorators/public.decorator';

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

  @Get('proxy/:service*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async proxyGet(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.handleProxyRequest(req, res, headers, 'GET');
  }

  @Post('proxy/:service*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async proxyPost(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.handleProxyRequest(req, res, headers, 'POST');
  }

  @Put('proxy/:service*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async proxyPut(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.handleProxyRequest(req, res, headers, 'PUT');
  }

  @Patch('proxy/:service*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async proxyPatch(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.handleProxyRequest(req, res, headers, 'PATCH');
  }

  @Delete('proxy/:service*')
  @UseGuards(SupabaseAuthGuard)
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

  @Get('educenter*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint() // Exclude from Swagger to avoid errors
  async getEducenter(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('educenter', 'GET', req, res, headers);
  }

  @Post('educenter*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postEducenter(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('educenter', 'POST', req, res, headers);
  }

  @Put('educenter*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putEducenter(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('educenter', 'PUT', req, res, headers);
  }

  @Patch('educenter*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchEducenter(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('educenter', 'PATCH', req, res, headers);
  }

  @Delete('educenter*')
  @UseGuards(SupabaseAuthGuard)
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

  @Get('users*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getUsers(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('users', 'GET', req, res, headers);
  }

  @Post('users*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postUsers(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('users', 'POST', req, res, headers);
  }

  @Put('users*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putUsers(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('users', 'PUT', req, res, headers);
  }

  @Patch('users*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchUsers(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('users', 'PATCH', req, res, headers);
  }

  @Delete('users*')
  @UseGuards(SupabaseAuthGuard)
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

  @Get('payments*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getPayments(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('payments', 'GET', req, res, headers);
  }

  @Post('payments*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postPayments(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('payments', 'POST', req, res, headers);
  }

  @Put('payments*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putPayments(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('payments', 'PUT', req, res, headers);
  }

  @Patch('payments*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchPayments(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('payments', 'PATCH', req, res, headers);
  }

  @Delete('payments*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deletePayments(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('payments', 'DELETE', req, res, headers);
  }

  // ==================== ANALYTICS ROUTES ====================

  @Get('analytics*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getAnalytics(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('analytics', 'GET', req, res, headers);
  }

  @Post('analytics*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postAnalytics(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('analytics', 'POST', req, res, headers);
  }

  @Put('analytics*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putAnalytics(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('analytics', 'PUT', req, res, headers);
  }

  @Patch('analytics*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchAnalytics(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('analytics', 'PATCH', req, res, headers);
  }

  @Delete('analytics*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteAnalytics(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('analytics', 'DELETE', req, res, headers);
  }

  // ==================== HUB ROUTES ====================

  @Get('hub*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getHub(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('hub', 'GET', req, res, headers);
  }

  @Post('hub*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postHub(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('hub', 'POST', req, res, headers);
  }

  @Put('hub*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putHub(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('hub', 'PUT', req, res, headers);
  }

  @Patch('hub*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchHub(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('hub', 'PATCH', req, res, headers);
  }

  @Delete('hub*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteHub(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('hub', 'DELETE', req, res, headers);
  }

  // ==================== RECEPTIONIST ROUTES ====================

  @Get('receptionist*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getReceptionist(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('receptionist', 'GET', req, res, headers);
  }

  @Post('receptionist*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postReceptionist(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('receptionist', 'POST', req, res, headers);
  }

  @Put('receptionist*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putReceptionist(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('receptionist', 'PUT', req, res, headers);
  }

  @Patch('receptionist*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchReceptionist(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('receptionist', 'PATCH', req, res, headers);
  }

  @Delete('receptionist*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteReceptionist(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('receptionist', 'DELETE', req, res, headers);
  }

  // ==================== CREDIBILITY ROUTES ====================

  @Get('credibility*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getCredibility(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('credibility', 'GET', req, res, headers);
  }

  @Post('credibility*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postCredibility(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('credibility', 'POST', req, res, headers);
  }

  @Put('credibility*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putCredibility(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('credibility', 'PUT', req, res, headers);
  }

  @Patch('credibility*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchCredibility(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('credibility', 'PATCH', req, res, headers);
  }

  @Delete('credibility*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteCredibility(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('credibility', 'DELETE', req, res, headers);
  }

  // ==================== BUSINESS-PLANNING ROUTES ====================

  @Get('business-planning*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getBusinessPlanning(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('business-planning', 'GET', req, res, headers);
  }

  @Post('business-planning*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postBusinessPlanning(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('business-planning', 'POST', req, res, headers);
  }

  @Put('business-planning*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putBusinessPlanning(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('business-planning', 'PUT', req, res, headers);
  }

  @Patch('business-planning*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchBusinessPlanning(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('business-planning', 'PATCH', req, res, headers);
  }

  @Delete('business-planning*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteBusinessPlanning(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('business-planning', 'DELETE', req, res, headers);
  }

  // ==================== FINANCIAL ROUTES ====================

  @Get('financial*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getFinancial(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('financial', 'GET', req, res, headers);
  }

  @Post('financial*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postFinancial(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('financial', 'POST', req, res, headers);
  }

  @Put('financial*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putFinancial(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('financial', 'PUT', req, res, headers);
  }

  @Patch('financial*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchFinancial(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('financial', 'PATCH', req, res, headers);
  }

  @Delete('financial*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteFinancial(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('financial', 'DELETE', req, res, headers);
  }

  // ==================== INVESTOR ROUTES ====================

  @Get('investor*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getInvestor(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('investor', 'GET', req, res, headers);
  }

  @Post('investor*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postInvestor(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('investor', 'POST', req, res, headers);
  }

  @Put('investor*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putInvestor(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('investor', 'PUT', req, res, headers);
  }

  @Patch('investor*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchInvestor(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('investor', 'PATCH', req, res, headers);
  }

  @Delete('investor*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteInvestor(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('investor', 'DELETE', req, res, headers);
  }

  // ==================== STOREFRONTS ROUTES ====================

  @Get('storefronts*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getStorefronts(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('storefronts', 'GET', req, res, headers);
  }

  @Post('storefronts*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postStorefronts(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('storefronts', 'POST', req, res, headers);
  }

  @Put('storefronts*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putStorefronts(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('storefronts', 'PUT', req, res, headers);
  }

  @Patch('storefronts*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchStorefronts(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('storefronts', 'PATCH', req, res, headers);
  }

  @Delete('storefronts*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteStorefronts(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('storefronts', 'DELETE', req, res, headers);
  }

  // ==================== DIGITAL-STOREFRONTS ROUTES ====================

  @Get('digital-storefronts*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getDigitalStorefronts(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('digital-storefronts', 'GET', req, res, headers);
  }

  @Post('digital-storefronts*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postDigitalStorefronts(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('digital-storefronts', 'POST', req, res, headers);
  }

  @Put('digital-storefronts*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putDigitalStorefronts(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('digital-storefronts', 'PUT', req, res, headers);
  }

  @Patch('digital-storefronts*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchDigitalStorefronts(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('digital-storefronts', 'PATCH', req, res, headers);
  }

  @Delete('digital-storefronts*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteDigitalStorefronts(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('digital-storefronts', 'DELETE', req, res, headers);
  }

  // ==================== MARKETING ROUTES ====================

  @Get('marketing*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getMarketing(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('marketing', 'GET', req, res, headers);
  }

  @Post('marketing*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postMarketing(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('marketing', 'POST', req, res, headers);
  }

  @Put('marketing*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putMarketing(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('marketing', 'PUT', req, res, headers);
  }

  @Patch('marketing*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchMarketing(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('marketing', 'PATCH', req, res, headers);
  }

  @Delete('marketing*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteMarketing(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('marketing', 'DELETE', req, res, headers);
  }

  // ==================== ANALYTICS-DASHBOARD ROUTES ====================

  @Get('analytics-dashboard*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getAnalyticsDashboard(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('analytics-dashboard', 'GET', req, res, headers);
  }

  @Post('analytics-dashboard*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postAnalyticsDashboard(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('analytics-dashboard', 'POST', req, res, headers);
  }

  @Put('analytics-dashboard*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putAnalyticsDashboard(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('analytics-dashboard', 'PUT', req, res, headers);
  }

  @Patch('analytics-dashboard*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchAnalyticsDashboard(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('analytics-dashboard', 'PATCH', req, res, headers);
  }

  @Delete('analytics-dashboard*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteAnalyticsDashboard(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('analytics-dashboard', 'DELETE', req, res, headers);
  }

  // ==================== SAFEAI ROUTES ====================

  @Get('safeai*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getSafeai(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('safeai', 'GET', req, res, headers);
  }

  @Post('safeai*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postSafeai(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('safeai', 'POST', req, res, headers);
  }

  @Put('safeai*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putSafeai(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('safeai', 'PUT', req, res, headers);
  }

  @Patch('safeai*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchSafeai(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('safeai', 'PATCH', req, res, headers);
  }

  @Delete('safeai*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteSafeai(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('safeai', 'DELETE', req, res, headers);
  }

  // ==================== KOLOAI ROUTES ====================

  @Get('koloai*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getKoloai(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('koloai', 'GET', req, res, headers);
  }

  @Post('koloai*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postKoloai(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('koloai', 'POST', req, res, headers);
  }

  @Put('koloai*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putKoloai(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('koloai', 'PUT', req, res, headers);
  }

  @Patch('koloai*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchKoloai(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('koloai', 'PATCH', req, res, headers);
  }

  @Delete('koloai*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteKoloai(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('koloai', 'DELETE', req, res, headers);
  }

  // ==================== RECEIPT ROUTES ====================

  @Get('receipt*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getReceipt(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('receipt', 'GET', req, res, headers);
  }

  @Post('receipt*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postReceipt(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('receipt', 'POST', req, res, headers);
  }

  @Put('receipt*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putReceipt(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('receipt', 'PUT', req, res, headers);
  }

  @Patch('receipt*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchReceipt(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('receipt', 'PATCH', req, res, headers);
  }

  @Delete('receipt*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteReceipt(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('receipt', 'DELETE', req, res, headers);
  }

  // ==================== AMEBOGIST ROUTES ====================

  @Public()
  @Get('amebogist*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getAmebogist(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('amebogist', 'GET', req, res, headers);
  }

  @Post('amebogist*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postAmebogist(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('amebogist', 'POST', req, res, headers);
  }

  @Put('amebogist*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putAmebogist(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('amebogist', 'PUT', req, res, headers);
  }

  @Patch('amebogist*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchAmebogist(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('amebogist', 'PATCH', req, res, headers);
  }

  @Delete('amebogist*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteAmebogist(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('amebogist', 'DELETE', req, res, headers);
  }

  // ==================== SOCIAL-FACTORY ROUTES ====================

  @Get('social-factory*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getSocialFactory(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('social-factory', 'GET', req, res, headers);
  }

  @Post('social-factory*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postSocialFactory(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('social-factory', 'POST', req, res, headers);
  }

  @Put('social-factory*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putSocialFactory(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('social-factory', 'PUT', req, res, headers);
  }

  @Patch('social-factory*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchSocialFactory(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('social-factory', 'PATCH', req, res, headers);
  }

  @Delete('social-factory*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteSocialFactory(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('social-factory', 'DELETE', req, res, headers);
  }

  // ==================== EMAILSCRAPER-PRO ROUTES ====================

  @Get('emailscraper-pro*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getEmailscraperPro(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('emailscraper-pro', 'GET', req, res, headers);
  }

  @Post('emailscraper-pro*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postEmailscraperPro(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('emailscraper-pro', 'POST', req, res, headers);
  }

  @Put('emailscraper-pro*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putEmailscraperPro(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('emailscraper-pro', 'PUT', req, res, headers);
  }

  @Patch('emailscraper-pro*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchEmailscraperPro(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('emailscraper-pro', 'PATCH', req, res, headers);
  }

  @Delete('emailscraper-pro*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteEmailscraperPro(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('emailscraper-pro', 'DELETE', req, res, headers);
  }

  // ==================== AFROHUSTLE ROUTES ====================

  @Get('afrohustle*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getAfrohustle(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('afrohustle', 'GET', req, res, headers);
  }

  @Post('afrohustle*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postAfrohustle(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('afrohustle', 'POST', req, res, headers);
  }

  @Put('afrohustle*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putAfrohustle(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('afrohustle', 'PUT', req, res, headers);
  }

  @Patch('afrohustle*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchAfrohustle(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('afrohustle', 'PATCH', req, res, headers);
  }

  @Delete('afrohustle*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteAfrohustle(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('afrohustle', 'DELETE', req, res, headers);
  }

  // ==================== NAIJAGIG-MATCHER ROUTES ====================

  @Get('naijagig-matcher*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getNaijagigMatcher(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('naijagig-matcher', 'GET', req, res, headers);
  }

  @Post('naijagig-matcher*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postNaijagigMatcher(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('naijagig-matcher', 'POST', req, res, headers);
  }

  @Put('naijagig-matcher*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putNaijagigMatcher(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('naijagig-matcher', 'PUT', req, res, headers);
  }

  @Patch('naijagig-matcher*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchNaijagigMatcher(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('naijagig-matcher', 'PATCH', req, res, headers);
  }

  @Delete('naijagig-matcher*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteNaijagigMatcher(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('naijagig-matcher', 'DELETE', req, res, headers);
  }

  // ==================== BORDERLESS-REMIT ROUTES ====================

  @Get('borderless-remit*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getBorderlessRemit(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('borderless-remit', 'GET', req, res, headers);
  }

  @Post('borderless-remit*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postBorderlessRemit(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('borderless-remit', 'POST', req, res, headers);
  }

  @Put('borderless-remit*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putBorderlessRemit(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('borderless-remit', 'PUT', req, res, headers);
  }

  @Patch('borderless-remit*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchBorderlessRemit(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('borderless-remit', 'PATCH', req, res, headers);
  }

  @Delete('borderless-remit*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteBorderlessRemit(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('borderless-remit', 'DELETE', req, res, headers);
  }

  // ==================== POWER-ALERT ROUTES ====================

  @Get('power-alert*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getPowerAlert(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('power-alert', 'GET', req, res, headers);
  }

  @Post('power-alert*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postPowerAlert(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('power-alert', 'POST', req, res, headers);
  }

  @Put('power-alert*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putPowerAlert(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('power-alert', 'PUT', req, res, headers);
  }

  @Patch('power-alert*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchPowerAlert(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('power-alert', 'PATCH', req, res, headers);
  }

  @Delete('power-alert*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deletePowerAlert(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('power-alert', 'DELETE', req, res, headers);
  }

  // ==================== FARMGATE-DIRECT ROUTES ====================

  @Get('farmgate-direct/*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getFarmgateDirect(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('farmgate-direct', 'GET', req, res, headers);
  }

  @Post('farmgate-direct/*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postFarmgateDirect(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('farmgate-direct', 'POST', req, res, headers);
  }

  @Put('farmgate-direct/*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putFarmgateDirect(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('farmgate-direct', 'PUT', req, res, headers);
  }

  @Patch('farmgate-direct/*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchFarmgateDirect(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('farmgate-direct', 'PATCH', req, res, headers);
  }

  @Delete('farmgate-direct/*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteFarmgateDirect(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('farmgate-direct', 'DELETE', req, res, headers);
  }

  // ==================== AFROCOPY-AI ROUTES ====================

  @Get('afrocopy-ai/*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getAfrocopyAi(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('afrocopy-ai', 'GET', req, res, headers);
  }

  @Post('afrocopy-ai/*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postAfrocopyAi(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('afrocopy-ai', 'POST', req, res, headers);
  }

  @Put('afrocopy-ai/*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putAfrocopyAi(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('afrocopy-ai', 'PUT', req, res, headers);
  }

  @Patch('afrocopy-ai/*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchAfrocopyAi(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('afrocopy-ai', 'PATCH', req, res, headers);
  }

  @Delete('afrocopy-ai/*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteAfrocopyAi(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('afrocopy-ai', 'DELETE', req, res, headers);
  }

  // ==================== SKILL2CASH ROUTES ====================

  @Get('skill2cash/*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getSkill2cash(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('skill2cash', 'GET', req, res, headers);
  }

  @Post('skill2cash/*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postSkill2cash(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('skill2cash', 'POST', req, res, headers);
  }

  @Put('skill2cash/*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putSkill2cash(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('skill2cash', 'PUT', req, res, headers);
  }

  @Patch('skill2cash/*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchSkill2cash(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('skill2cash', 'PATCH', req, res, headers);
  }

  @Delete('skill2cash/*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteSkill2cash(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('skill2cash', 'DELETE', req, res, headers);
  }

  // ==================== ANONTRUTH-MIC ROUTES ====================

  @Get('anontruth-mic/*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async getAnontruthMic(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('anontruth-mic', 'GET', req, res, headers);
  }

  @Post('anontruth-mic/*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async postAnontruthMic(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('anontruth-mic', 'POST', req, res, headers);
  }

  @Put('anontruth-mic/*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async putAnontruthMic(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('anontruth-mic', 'PUT', req, res, headers);
  }

  @Patch('anontruth-mic/*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async patchAnontruthMic(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('anontruth-mic', 'PATCH', req, res, headers);
  }

  @Delete('anontruth-mic/*')
  @UseGuards(SupabaseAuthGuard)
  @ApiBearerAuth()
  @ApiExcludeEndpoint()
  async deleteAnontruthMic(
    @Req() req: any,
    @Res() res: any,
    @Headers() headers: any,
  ) {
    return this.proxyRequest('anontruth-mic', 'DELETE', req, res, headers);
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
    // Important: replace /api/proxy/ first, then /api/, then /proxy/
    // We want to end up with /service/resource... which appended to baseURL (e.g. .../api)
    // results in .../api/service/resource...
    const path = req.url
      .replace('/api/proxy/', '/')
      .replace('/proxy/', '/')
      .replace('/api/', '/');
    const data = req.body;

    try {
      // Inject user identity from the guard into headers for downstream services
      const proxyHeaders = {
        ...headers,
        'x-user-id': req.user?.id,
        'x-user-email': req.user?.email,
        'x-user-role': req.user?.role,
      };

      const result = await this.proxyService.serviceRequest(service, method, path, data, proxyHeaders);
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