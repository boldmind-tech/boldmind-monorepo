
import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
    Query,
    UseGuards,
} from '@nestjs/common';
import {
    ApiTags,
    ApiBearerAuth,
    ApiOperation,
    ApiParam,
    ApiQuery,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { FarmgateDirectServiceClient } from '../clients/farmgate-direct-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('farmgate-direct')
@Controller('farmgate-direct')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class FarmgateDirectController {
    constructor(private farmgateDirectClient: FarmgateDirectServiceClient) { }

    // Listings
    @Post('listings')
    @ApiOperation({ summary: 'Create listing' })
    async createListing(@CurrentUser() user: any, @Body() data: any) {
        return this.farmgateDirectClient.createListing(user.id, data);
    }

    @Get('listings')
    @ApiOperation({ summary: 'Get listings' })
    @ApiQuery({ name: 'category', required: false })
    async getListings(@Query() query: any) {
        return this.farmgateDirectClient.getListings(query);
    }

    @Get('listings/:id')
    @ApiOperation({ summary: 'Get listing by ID' })
    @ApiParam({ name: 'id', description: 'Listing ID' })
    async getListingById(@Param('id') id: string) {
        return this.farmgateDirectClient.getListingById(id);
    }

    @Patch('listings/:id')
    @ApiOperation({ summary: 'Update listing' })
    @ApiParam({ name: 'id', description: 'Listing ID' })
    async updateListing(@CurrentUser() user: any, @Param('id') id: string, @Body() data: any) {
        return this.farmgateDirectClient.updateListing(id, user.id, data);
    }

    @Delete('listings/:id')
    @ApiOperation({ summary: 'Delete listing' })
    @ApiParam({ name: 'id', description: 'Listing ID' })
    async deleteListing(@CurrentUser() user: any, @Param('id') id: string) {
        return this.farmgateDirectClient.deleteListing(id, user.id);
    }

    // Farmer Profiles
    @Post('farmers')
    @ApiOperation({ summary: 'Create farmer profile' })
    async createFarmerProfile(@CurrentUser() user: any, @Body() data: any) {
        return this.farmgateDirectClient.createFarmerProfile(user.id, data);
    }

    @Get('farmers/:id')
    @ApiOperation({ summary: 'Get farmer profile' })
    @ApiParam({ name: 'id', description: 'Farmer ID' })
    async getFarmerProfile(@Param('id') id: string) {
        return this.farmgateDirectClient.getFarmerProfile(id);
    }

    @Get('farmers/:id/listings')
    @ApiOperation({ summary: 'Get farmer listings' })
    @ApiParam({ name: 'id', description: 'Farmer ID' })
    async getFarmerListings(@Param('id') id: string) {
        return this.farmgateDirectClient.getFarmerListings(id);
    }

    // Orders
    @Post('orders')
    @ApiOperation({ summary: 'Create order' })
    async createOrder(@CurrentUser() user: any, @Body() data: any) {
        return this.farmgateDirectClient.createOrder(user.id, data);
    }

    @Get('orders')
    @ApiOperation({ summary: 'Get orders' })
    @ApiQuery({ name: 'role', enum: ['buyer', 'farmer'] })
    @ApiQuery({ name: 'status', required: false })
    async getOrders(@CurrentUser() user: any, @Query('role') role: 'buyer' | 'farmer', @Query('status') status?: string) {
        return this.farmgateDirectClient.getOrders(user.id, role, status);
    }

    @Get('orders/:id')
    @ApiOperation({ summary: 'Get order by ID' })
    @ApiParam({ name: 'id', description: 'Order ID' })
    async getOrderById(@Param('id') id: string) {
        return this.farmgateDirectClient.getOrderById(id);
    }

    @Patch('orders/:id/status')
    @ApiOperation({ summary: 'Update order status' })
    @ApiParam({ name: 'id', description: 'Order ID' })
    async updateOrderStatus(@Param('id') id: string, @Body('status') status: string, @Body('notes') notes?: string) {
        return this.farmgateDirectClient.updateOrderStatus(id, status, notes);
    }

    // Quality Verification
    @Post('listings/:id/quality-check')
    @ApiOperation({ summary: 'Request quality check' })
    @ApiParam({ name: 'id', description: 'Listing ID' })
    async requestQualityCheck(@Param('id') id: string) {
        return this.farmgateDirectClient.requestQualityCheck(id);
    }

    @Get('listings/:id/quality-report')
    @ApiOperation({ summary: 'Get quality report' })
    @ApiParam({ name: 'id', description: 'Listing ID' })
    async getQualityReport(@Param('id') id: string) {
        return this.farmgateDirectClient.getQualityReport(id);
    }

    // Logistics
    @Get('listings/:id/delivery-options')
    @ApiOperation({ summary: 'Get delivery options' })
    @ApiParam({ name: 'id', description: 'Listing ID' })
    @ApiQuery({ name: 'destination', required: true })
    async getDeliveryOptions(@Param('id') id: string, @Query('destination') destination: string) {
        return this.farmgateDirectClient.getDeliveryOptions(id, destination);
    }

    @Get('orders/:id/tracking')
    @ApiOperation({ summary: 'Track delivery' })
    @ApiParam({ name: 'id', description: 'Order ID' })
    async trackDelivery(@Param('id') id: string) {
        return this.farmgateDirectClient.trackDelivery(id);
    }

    // Market Prices
    @Get('market/prices')
    @ApiOperation({ summary: 'Get market prices' })
    async getMarketPrices(@Query('product') product?: string, @Query('location') location?: string) {
        return this.farmgateDirectClient.getMarketPrices(product, location);
    }

    @Get('market/trends')
    @ApiOperation({ summary: 'Get price trends' })
    @ApiQuery({ name: 'product', required: true })
    async getPriceTrends(@Query('product') product: string) {
        return this.farmgateDirectClient.getPriceTrends(product);
    }

    // Reviews
    @Post('orders/:id/reviews')
    @ApiOperation({ summary: 'Submit review' })
    @ApiParam({ name: 'id', description: 'Order ID' })
    async submitReview(
        @CurrentUser() user: any,
        @Param('id') id: string,
        @Body() data: { rating: number; comment?: string }
    ) {
        return this.farmgateDirectClient.submitReview(id, user.id, data.rating, data.comment);
    }

    @Get('farmers/:id/reviews')
    @ApiOperation({ summary: 'Get farmer reviews' })
    @ApiParam({ name: 'id', description: 'Farmer ID' })
    async getFarmerReviews(@Param('id') id: string) {
        return this.farmgateDirectClient.getFarmerReviews(id);
    }
}
