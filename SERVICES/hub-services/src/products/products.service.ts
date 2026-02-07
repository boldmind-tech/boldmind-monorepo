// SERVICES/hub-service/src/products/products.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';

import {
    Prisma, PrismaClient, ProductStatus, ProductCategory
} from '../generated/client';

import {
    BOLDMIND_PRODUCTS,
} from '@boldmind/utils'; // Import from shared package

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaClient) { }

    async getAllProducts(
        page: number = 1,
        limit: number = 20,
        filters?: {
            category?: ProductCategory | undefined;
            status?: ProductStatus | undefined;
            search?: string | undefined;
        },
    ) {
        const skip = (page - 1) * limit;
        const where: Prisma.ProductWhereInput = {};

        if (filters?.category) {
            where.category = filters.category;
        }

        if (filters?.status) {
            where.status = filters.status;
        }

        if (filters?.search) {
            where.OR = [
                { name: { contains: filters.search, mode: 'insensitive' } },
                { description: { contains: filters.search, mode: 'insensitive' } },
                { tagline: { contains: filters.search, mode: 'insensitive' } },
            ];
        }

        const [products, total] = await Promise.all([
            this.prisma.product.findMany({
                where,
                skip,
                take: limit,
                orderBy: { priority: 'asc' },
                include: {
                    _count: {
                        select: {
                            revenueTracking: true,
                            userGrowth: true,
                            metrics: true,
                        },
                    },
                },
            }),
            this.prisma.product.count({ where }),
        ]);

        return {
            products,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }

    async getProductById(id: string) {
        const product = await this.prisma.product.findUnique({
            where: { id },
            include: {
                revenueTracking: {
                    orderBy: { date: 'desc' },
                    take: 30,
                },
                userGrowth: {
                    orderBy: { date: 'desc' },
                    take: 30,
                },
                metrics: {
                    orderBy: { date: 'desc' },
                    take: 30,
                },
                roadmapItems: {
                    where: { status: { not: 'COMPLETED' } },
                    orderBy: { priority: 'asc' },
                },
                changelogEntries: {
                    where: { isPublished: true },
                    orderBy: { publishedAt: 'desc' },
                    take: 10,
                },
            },
        });

        if (!product) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }

        return product;
    }

    async getProductBySlug(slug: string) {
        const product = await this.prisma.product.findUnique({
            where: { slug },
        });

        if (!product) {
            throw new NotFoundException(`Product with slug ${slug} not found`);
        }

        return product;
    }

    async createProduct(data: Prisma.ProductCreateInput) {
        return this.prisma.product.create({
            data,
        });
    }

    async updateProduct(id: string, data: Prisma.ProductUpdateInput) {
        try {
            return await this.prisma.product.update({
                where: { id },
                data,
            });
        } catch (error) {
            if (error === 'P2025') {
                throw new NotFoundException(`Product with ID ${id} not found`);
            }
            throw error;
        }
    }

    async deleteProduct(id: string) {
        try {
            return await this.prisma.product.delete({
                where: { id },
            });
        } catch (error) {
            if (error === 'P2025') {
                throw new NotFoundException(`Product with ID ${id} not found`);
            }
            throw error;
        }
    }

    // Sync with catalog data
    async syncWithCatalog() {
        const catalogProducts = BOLDMIND_PRODUCTS;
        const results = [];

        for (const catalogProduct of catalogProducts) {
            const existing = await this.prisma.product.findUnique({
                where: { slug: catalogProduct.slug },
            });

            if (existing) {
                // Update existing
                const updated = await this.prisma.product.update({
                    where: { slug: catalogProduct.slug },
                    data: {
                        name: catalogProduct.name,
                        description: catalogProduct.description || existing.description,
                        category: catalogProduct.category as any,
                        status: catalogProduct.status as any,
                        version: catalogProduct.version,
                        tagline: catalogProduct.description?.substring(0, 200),
                        techStack: catalogProduct.techStack,
                        tags: catalogProduct.tags,
                        metadata: {
                            ...(existing.metadata as any),
                            ...(catalogProduct as any),
                            updatedAt: new Date().toISOString(),
                        },
                    },
                });
                results.push({ action: 'updated', product: updated.name });
            } else {
                // Create new
                const created = await this.prisma.product.create({
                    data: {
                        productId: catalogProduct.id,
                        name: catalogProduct.name,
                        slug: catalogProduct.slug,
                        description: catalogProduct.description || '',
                        tagline: catalogProduct.description?.substring(0, 200) || '',
                        category: catalogProduct.category as any,
                        status: catalogProduct.status as any,
                        version: catalogProduct.version,
                        techStack: catalogProduct.techStack,
                        tags: catalogProduct.tags,
                        monthlyRevenue: catalogProduct.monthlyRevenue || 0,
                        metadata: catalogProduct as any,
                    },
                });
                results.push({ action: 'created', product: created.name });
            }
        }

        return results;
    }

    // Get product metrics
    async getProductMetrics(productId: string, period: string = '30d') {
        const product = await this.getProductById(productId);

        const metrics = await this.prisma.productMetric.findMany({
            where: { productId },
            orderBy: { date: 'desc' },
            take: period === '30d' ? 30 : period === '7d' ? 7 : 90,
        });

        const revenue = await this.prisma.revenueTracking.findMany({
            where: { productId },
            orderBy: { date: 'desc' },
            take: 30,
        });

        const userGrowth = await this.prisma.userGrowth.findMany({
            where: { productId },
            orderBy: { date: 'desc' },
            take: 30,
        });

        return {
            product,
            metrics,
            revenue,
            userGrowth,
            summary: {
                totalRevenue: revenue.reduce((sum, r) => sum + Number(r.revenue), 0),
                avgRevenue: revenue.length > 0
                    ? revenue.reduce((sum, r) => sum + Number(r.revenue), 0) / revenue.length
                    : 0,
                totalUsers: userGrowth.length > 0
                    ? userGrowth[0]?.totalUsers || 0
                    : 0,
                activeUsers: userGrowth.length > 0
                    ? userGrowth[0]?.activeUsers || 0
                    : 0,
            },
        };
    }
}