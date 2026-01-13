
// products/products.controller.ts
import { Controller, Get, Post, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get('app/:app')
  @ApiOperation({ summary: 'Get products by app' })
  getProductsByApp(@Param('app') app: string) {
    return this.productsService.getProductsByApp(app);
  }

  @Get(':productId')
  @ApiOperation({ summary: 'Get product by ID' })
  getProduct(@Param('productId') productId: string) {
    return this.productsService.getProduct(productId);
  }

  @Post('seed')
  @ApiOperation({ summary: 'Seed product catalog (development only)' })
  seedProducts() {
    return this.productsService.seedProducts();
  }
}