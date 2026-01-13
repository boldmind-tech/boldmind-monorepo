import { 
  Controller, 
  All, 
  Req, 
  Res, 
  UseGuards,
  Headers,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { ProxyService } from './proxy.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('proxy')
@Controller()
export class ProxyController {
  constructor(private proxyService: ProxyService) {}

  // EduCenter routes
  @All('educenter/*')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async proxyEducenter(
    @Req() req: Request,
    @Res() res: Response,
    @Headers() headers: any,
  ) {
    const path = req.url.replace('/api/educenter', '');
    const method = req.method;
    const data = req.body;

    try {
      const result = await this.proxyService.educenterRequest(
        method,
        path,
        data,
        headers,
      );
      return res.json(result);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  // User routes
  @All('users/*')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async proxyUsers(
    @Req() req: Request,
    @Res() res: Response,
    @Headers() headers: any,
  ) {
    const path = req.url.replace('/api/users', '');
    const method = req.method;
    const data = req.body;

    try {
      const result = await this.proxyService.userRequest(method, path, data, headers);
      return res.json(result);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

  // Payment routes
  @All('payments/*')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async proxyPayments(
    @Req() req: Request,
    @Res() res: Response,
    @Headers() headers: any,
  ) {
    const path = req.url.replace('/api/payments', '');
    const method = req.method;
    const data = req.body;

    try {
      const result = await this.proxyService.paymentRequest(method, path, data, headers);
      return res.json(result);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }
}