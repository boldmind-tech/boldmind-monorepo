import { Controller, Get, Post, Put, Param, Query, Body } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('transactions')
@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Get('user/:uid')
  @ApiOperation({ summary: 'Get user transactions' })
  getUserTransactions(@Param('uid') uid: string, @Query('limit') limit?: number) {
    return this.transactionsService.findByUser(uid, limit ? parseInt(limit) : 50);
  }

  @Get('app/:app')
  @ApiOperation({ summary: 'Get app transactions' })
  getAppTransactions(@Param('app') app: string, @Query('limit') limit?: number) {
    return this.transactionsService.findByApp(app, limit ? parseInt(limit) : 100);
  }

  @Get('revenue')
  @ApiOperation({ summary: 'Get revenue statistics' })
  @ApiQuery({ name: 'app', required: false })
  @ApiQuery({ name: 'startDate', required: false })
  @ApiQuery({ name: 'endDate', required: false })
  getRevenue(
    @Query('app') app?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    const start = startDate ? new Date(startDate) : undefined;
    const end = endDate ? new Date(endDate) : undefined;
    return this.transactionsService.getRevenue(app, start, end);
  }

  @Get('revenue/by-app')
  @ApiOperation({ summary: 'Get revenue by app' })
  @ApiQuery({ name: 'startDate', required: false })
  @ApiQuery({ name: 'endDate', required: false })
  getRevenueByApp(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    const start = startDate ? new Date(startDate) : undefined;
    const end = endDate ? new Date(endDate) : undefined;
    return this.transactionsService.getRevenueByApp(start, end);
  }

  @Get(':reference')
  @ApiOperation({ summary: 'Get transaction by reference' })
  getTransaction(@Param('reference') reference: string) {
    return this.transactionsService.findByReference(reference);
  }

  @Put(':reference/refund')
  @ApiOperation({ summary: 'Refund transaction' })
  refundTransaction(
    @Param('reference') reference: string,
    @Body() body: { reason: string },
  ) {
    return this.transactionsService.refund(reference, body.reason);
  }
}