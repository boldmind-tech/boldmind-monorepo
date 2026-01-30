// SERVICES/hub-service/src/products/products.controller.ts
import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    Query,
    UseGuards,
    ParseIntPipe,
    DefaultValuePipe,
    HttpStatus,
    HttpCode,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProductCategory, ProductStatus } from '../generated/client';

@ApiTags('products')
@Controller('products')
@ApiBearerAuth()
@UseGuards(AuthGuard)
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    @ApiOperation({ summary: 'Get all products with pagination and filters' })
    @ApiResponse({ status: 200, description: 'Products retrieved successfully' })
    async getAllProducts(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit: number,
        @Query('category') category?: ProductCategory,
        @Query('status') status?: ProductStatus,
        @Query('search') search?: string,
    ) {
        return this.productsService.getAllProducts(page, limit, {
            category,
            status,
            search,
        });
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get product by ID' })
    @ApiResponse({ status: 200, description: 'Product found' })
    @ApiResponse({ status: 404, description: 'Product not found' })
    async getProductById(@Param('id') id: string) {
        return this.productsService.getProductById(id);
    }

    @Get('slug/:slug')
    @ApiOperation({ summary: 'Get product by slug' })
    async getProductBySlug(@Param('slug') slug: string) {
        return this.productsService.getProductBySlug(slug);
    }

    @Post()
    @ApiOperation({ summary: 'Create a new product' })
    @HttpCode(HttpStatus.CREATED)
    async createProduct(@Body() data: any) {
        return this.productsService.createProduct(data);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update product' })
    async updateProduct(@Param('id') id: string, @Body() data: any) {
        return this.productsService.updateProduct(id, data);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete product' })
    @HttpCode(HttpStatus.NO_CONTENT)
    async deleteProduct(@Param('id') id: string) {
        return this.productsService.deleteProduct(id);
    }

    @Post('sync-catalog')
    @ApiOperation({ summary: 'Sync products with catalog data' })
    async syncWithCatalog() {
        return this.productsService.syncWithCatalog();
    }

    @Get(':id/metrics')
    @ApiOperation({ summary: 'Get product metrics and analytics' })
    async getProductMetrics(
        @Param('id') id: string,
        @Query('period') period: string = '30d',
    ) {
        return this.productsService.getProductMetrics(id, period);
    }
}