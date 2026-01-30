// SERVICES/user-service/src/users/admin.service.ts
import {
    Injectable,
    NotFoundException,
    // ConflictException,
    ForbiddenException,
    BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, UserRole } from '../generated/client';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { BOLDMIND_PRODUCTS } from '@boldmind/utils';

interface UserFilters {
    page?: number;
    limit?: number;
    role?: UserRole;
    isAdmin?: boolean;
    search?: string;
}

interface AuditLogFilters {
    page?: number;
    limit?: number;
    userId?: string;
    action?: string;
    entityType?: string;
}

@Injectable()
export class AdminService {
    constructor(private prisma: PrismaService) { }

    async findAllUsers(filters: UserFilters) {
        const page = filters.page || 1;
        const limit = filters.limit || 20;
        const skip = (page - 1) * limit;

        const where: Prisma.UserWhereInput = {};

        if (filters.role) {
            where.role = filters.role;
        }

        if (filters.isAdmin !== undefined) {
            where.isAdmin = filters.isAdmin;
        }

        if (filters.search) {
            where.OR = [
                { email: { contains: filters.search, mode: 'insensitive' } },
                { fullName: { contains: filters.search, mode: 'insensitive' } },
                { phone: { contains: filters.search, mode: 'insensitive' } },
            ];
        }

        const [users, total] = await Promise.all([
            this.prisma.client.user.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                select: {
                    id: true,
                    email: true,
                    fullName: true,
                    phone: true,
                    avatarUrl: true,
                    role: true,
                    isAdmin: true,
                    isSuperAdmin: true,
                    isVerified: true,
                    lastLoginAt: true,
                    loginCount: true,
                    createdAt: true,
                    updatedAt: true,
                    _count: {
                        select: {
                            profiles: true,
                            organizations: true,
                            userProducts: true,
                        },
                    },
                },
            }),
            this.prisma.client.user.count({ where }),
        ]);

        return {
            users,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }

    async updateUser(userId: string, data: any) {
        const user = await this.prisma.client.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        // Prevent modifying super admin unless you are super admin
        if (user.isSuperAdmin && !data.currentUser?.isSuperAdmin) {
            throw new ForbiddenException('Cannot modify super admin');
        }

        // Update user
        const updatedUser = await this.prisma.client.user.update({
            where: { id: userId },
            data: {
                ...data,
                ...(data.password && {
                    password: await bcrypt.hash(data.password, 10),
                }),
            },
        });

        // Create audit log
        await this.createAuditLog({
            userId: data.currentUser.id,
            adminUserId: data.currentUser.id,
            action: 'UPDATE_USER',
            entityType: 'USER',
            entityId: userId,
            oldData: user,
            newData: updatedUser,
            changes: this.calculateChanges(user, updatedUser),
        });

        return updatedUser;
    }

    async inviteAdmin(data: {
        email: string;
        role: UserRole;
        productScope?: string[];
        invitedById: string;
    }) {
        // Check if user already exists
        const existingUser = await this.prisma.client.user.findUnique({
            where: { email: data.email },
        });

        if (existingUser) {
            // If user exists, update their role
            const updatedUser = await this.prisma.client.user.update({
                where: { email: data.email },
                data: {
                    role: data.role,
                    isAdmin: true,
                    permissions: this.getDefaultPermissionsForRole(data.role),
                },
            });

            await this.createAuditLog({
                userId: updatedUser.id,
                adminUserId: data.invitedById,
                action: 'INVITE_ADMIN_EXISTING',
                entityType: 'USER',
                entityId: updatedUser.id,
                oldData: existingUser,
                newData: updatedUser,
            });

            return {
                type: 'existing_user',
                user: updatedUser,
                message: 'User upgraded to admin role',
            };
        }

        // Create invitation for new user
        const token = uuidv4();
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 7); // 7 days expiry

        const invitation = await this.prisma.client.invitation.create({
            data: {
                email: data.email,
                token,
                role: data.role,
                invitedById: data.invitedById,
                expiresAt,
                productScope: data.productScope || [],
            },
        });

        // TODO: Send invitation email

        await this.createAuditLog({
            userId: data.invitedById,
            adminUserId: data.invitedById,
            action: 'CREATE_INVITATION',
            entityType: 'INVITATION',
            entityId: invitation.id,
            newData: invitation,
        });

        return {
            type: 'new_invitation',
            invitation,
            inviteUrl: `/auth/invite/${token}`,
            message: 'Invitation sent successfully',
        };
    }

    async getAdminStats() {
        const [
            totalUsers,
            totalAdmins,
            recentUsers,
            userGrowth,
            activeProducts,
            topProducts,
        ] = await Promise.all([
            // Total users
            this.prisma.client.user.count(),

            // Total admins
            this.prisma.client.user.count({
                where: { isAdmin: true },
            }),

            // Recent users (last 7 days)
            this.prisma.client.user.findMany({
                where: {
                    createdAt: {
                        gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
                    },
                },
                orderBy: { createdAt: 'desc' },
                take: 10,
                select: {
                    id: true,
                    email: true,
                    fullName: true,
                    role: true,
                    createdAt: true,
                },
            }),

            // User growth by day (last 30 days)
            this.getUserGrowthStats(),

            // Active products count
            this.prisma.client.userProduct.groupBy({
                by: ['productSlug'],
                _count: {
                    productSlug: true,
                },
                where: {
                    isActive: true,
                },
            }),

            // Top products by user count
            this.prisma.client.userProduct.groupBy({
                by: ['productSlug'],
                _count: {
                    id: true,
                },
                orderBy: {
                    _count: {
                        id: 'desc',
                    },
                },
                take: 5,
            }),
        ]);

        // Calculate growth percentage
        const today = new Date();
        const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
        const sixtyDaysAgo = new Date(today.getTime() - 60 * 24 * 60 * 60 * 1000);

        const [currentMonthUsers, previousMonthUsers] = await Promise.all([
            this.prisma.client.user.count({
                where: {
                    createdAt: {
                        gte: thirtyDaysAgo,
                        lt: today,
                    },
                },
            }),
            this.prisma.client.user.count({
                where: {
                    createdAt: {
                        gte: sixtyDaysAgo,
                        lt: thirtyDaysAgo,
                    },
                },
            }),
        ]);

        const growthPercentage = previousMonthUsers > 0
            ? ((currentMonthUsers - previousMonthUsers) / previousMonthUsers) * 100
            : 100;

        return {
            totals: {
                users: totalUsers,
                admins: totalAdmins,
                activeProducts: activeProducts.length,
            },
            growth: {
                currentMonth: currentMonthUsers,
                previousMonth: previousMonthUsers,
                percentage: growthPercentage,
                trend: growthPercentage >= 0 ? 'up' : 'down',
            },
            recentUsers,
            userGrowth,
            topProducts: topProducts.map((p: any) => ({
                productSlug: p.productSlug,
                userCount: p._count.id,
                productName: BOLDMIND_PRODUCTS.find(bp => bp.slug === p.productSlug)?.name || p.productSlug,
            })),
        };
    }

    async getAuditLogs(filters: AuditLogFilters) {
        const page = filters.page || 1;
        const limit = filters.limit || 20;
        const skip = (page - 1) * limit;

        const where: Prisma.AuditLogWhereInput = {};

        if (filters.userId) {
            where.userId = filters.userId;
        }

        if (filters.action) {
            where.action = filters.action;
        }

        if (filters.entityType) {
            where.entityType = filters.entityType;
        }

        const [logs, total] = await Promise.all([
            this.prisma.client.auditLog.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: {
                    user: {
                        select: {
                            id: true,
                            email: true,
                            fullName: true,
                        },
                    },
                    adminUser: {
                        select: {
                            id: true,
                            email: true,
                            fullName: true,
                        },
                    },
                },
            }),
            this.prisma.client.auditLog.count({ where }),
        ]);

        return {
            logs,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }

    async getUserProducts(userId: string) {
        const user = await this.prisma.client.user.findUnique({
            where: { id: userId },
            include: {
                userProducts: {
                    orderBy: { lastUsedAt: 'desc' },
                },
            },
        });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        // Enrich with product info
        const enrichedProducts = user.userProducts.map((product: any) => {
            const productInfo = BOLDMIND_PRODUCTS.find(p => p.slug === product.productSlug);
            return {
                ...product,
                productInfo: productInfo ? {
                    name: productInfo.name,
                    category: productInfo.category,
                    status: productInfo.status,
                    icon: productInfo.icon,
                } : null,
            };
        });

        return {
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
            },
            products: enrichedProducts,
            summary: {
                totalProducts: user.userProducts.length,
                activeProducts: user.userProducts.filter((p: any) => p.isActive).length || false,
                freeProducts: user.userProducts.filter((p: any) => p.tier === 'free').length || 'free',
                paidProducts: user.userProducts.filter((p: any) => p.tier !== 'free').length || 'paid',
            },
        };
    }

    async getProductUsers(productSlug: string) {
        // Validate product exists
        const product = BOLDMIND_PRODUCTS.find(p => p.slug === productSlug);
        if (!product) {
            throw new BadRequestException(`Product ${productSlug} not found`);
        }

        // Fetch all user products for this product slug
        const userProducts = await this.prisma.client.userProduct.findMany({
            where: { productSlug },
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                        fullName: true,
                        avatarUrl: true,
                        createdAt: true,
                    },
                },
            },
            orderBy: { subscribedAt: 'desc' },
        });

        return userProducts.map((up: any) => ({
            id: up.id,
            userId: up.userId,
            productSlug: up.productSlug,
            productName: up.productName,
            tier: up.tier,
            isActive: up.isActive,
            subscribedAt: up.subscribedAt,
            expiresAt: up.expiresAt,
            lastUsedAt: up.lastUsedAt,
            user: up.user,
        }));
    }

    async assignProductToUser(userId: string, data: {
        productSlug: string;
        tier?: string;
        expiresAt?: Date;
        planId?: string;
        priceMonthly?: number;
    }) {
        const user = await this.prisma.client.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        // Check if product exists in catalog
        const product = BOLDMIND_PRODUCTS.find(p => p.slug === data.productSlug);
        if (!product) {
            throw new BadRequestException(`Product ${data.productSlug} not found`);
        }

        // Check if user already has this product
        const existingProduct = await this.prisma.client.userProduct.findUnique({
            where: {
                userId_productSlug: {
                    userId,
                    productSlug: data.productSlug,
                },
            },
        });

        if (existingProduct) {
            // Update existing
            const updated = await this.prisma.client.userProduct.update({
                where: {
                    userId_productSlug: {
                        userId,
                        productSlug: data.productSlug,
                    },
                },
                data: {
                    tier: data.tier || existingProduct.tier,
                    isActive: true,
                    expiresAt: data.expiresAt ?? null,
                    planId: data.planId ?? null,
                    priceMonthly: data.priceMonthly ?? null,
                    updatedAt: new Date(),
                },

            });

            await this.createAuditLog({
                userId,
                action: 'UPDATE_USER_PRODUCT',
                entityType: 'USER_PRODUCT',
                entityId: updated.id,
                oldData: existingProduct,
                newData: updated,
            });

            return updated;
        }

        // Create new
        const userProduct = await this.prisma.client.userProduct.create({
            data: {
                userId,
                productSlug: data.productSlug,
                productName: product.name,
                tier: data.tier || 'free',
                isActive: true,
                subscribedAt: new Date(),
                expiresAt: data.expiresAt ?? null,
                planId: data.planId ?? null,
                priceMonthly: data.priceMonthly ?? null,
                currency: 'NGN',
            },
        });

        await this.createAuditLog({
            userId,
            action: 'ASSIGN_USER_PRODUCT',
            entityType: 'USER_PRODUCT',
            entityId: userProduct.id,
            newData: userProduct,
        });

        return userProduct;
    }

    async createSuperAdminIfNotExists() {
        const superAdminEmail = process.env.SUPER_ADMIN_EMAIL || 'admin@boldmind.ng';

        const existing = await this.prisma.client.user.findUnique({
            where: { email: superAdminEmail },
        });

        if (existing) {
            return existing;
        }

        const superAdminPassword = process.env.SUPER_ADMIN_PASSWORD || 'changeme123';
        const hashedPassword = await bcrypt.hash(superAdminPassword, 10);

        const superAdmin = await this.prisma.client.user.create({
            data: {
                id: uuidv4(),
                email: superAdminEmail,
                fullName: 'Super Admin',
                role: UserRole.SUPER_ADMIN,
                isAdmin: true,
                isSuperAdmin: true,
                isVerified: true,
                password: hashedPassword,
                permissions: ['*'],
            },
        });

        console.log('✅ Super admin created');
        console.log(`📧 Email: ${superAdminEmail}`);
        console.log(`🔑 Password: ${superAdminPassword}`);
        console.log('⚠️  Please change the password immediately!');

        return superAdmin;
    }

    private async getUserGrowthStats() {
        const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

        const dailyStats = await this.prisma.client.$queryRaw`
      SELECT 
        DATE(created_at) as date,
        COUNT(*) as count
      FROM users
      WHERE created_at >= ${thirtyDaysAgo}
      GROUP BY DATE(created_at)
      ORDER BY date ASC
    `;

        return dailyStats;
    }

    private async createAuditLog(data: {
        userId: string;
        adminUserId?: string;
        action: string;
        entityType: string;
        entityId?: string;
        oldData?: any;
        newData?: any;
        changes?: any;
        ipAddress?: string;
        userAgent?: string;
        productSlug?: string;
    }) {
        return this.prisma.client.auditLog.create({
            data: {
                userId: data.userId,
                adminUserId: data.adminUserId ?? null,
                action: data.action,
                entityType: data.entityType,
                entityId: data.entityId ?? null,
                oldData: data.oldData ?? Prisma.DbNull,
                newData: data.newData ?? Prisma.DbNull,
                changes: data.changes ?? Prisma.DbNull,
                ipAddress: data.ipAddress ?? null,
                userAgent: data.userAgent ?? null,
                productSlug: data.productSlug ?? null,
            },
        });
    }

    private calculateChanges(oldData: any, newData: any) {
        const changes: Record<string, { old: any; new: any }> = {};

        for (const key in newData) {
            if (oldData[key] !== newData[key]) {
                changes[key] = {
                    old: oldData[key],
                    new: newData[key],
                };
            }
        }

        return changes;
    }

    private getDefaultPermissionsForRole(role: UserRole): string[] {
        const permissions: Record<UserRole, string[]> = {
            [UserRole.SUPER_ADMIN]: ['*'],
            [UserRole.ADMIN]: [
                'users:read',
                'users:update',
                'users:create',
                'users:delete',
                'products:read',
                'products:update',
                'analytics:read',
            ],
            [UserRole.MANAGER]: [
                'users:read',
                'products:read',
                'products:update',
                'analytics:read',
            ],
            [UserRole.EDITOR]: [
                'content:create',
                'content:update',
                'content:read',
            ],
            [UserRole.USER]: [],
            [UserRole.GUEST]: [],
            [UserRole.SUPPORT]: [
                'users:read',
                'tickets:read',
                'tickets:update',
            ],
            [UserRole.ANALYST]: [
                'analytics:read',
                'users:read',
            ],
        };

        return permissions[role] || [];
    }
}