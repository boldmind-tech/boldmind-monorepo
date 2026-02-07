// SERVICES/hub-service/src/roadmap/roadmap.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, PrismaClient } from '../generated/client';
@Injectable()
export class RoadmapService {
    constructor(private prisma: PrismaClient) { }

    async getRoadmapItems(
        productId?: string,
        status?: string,
        priority?: string,
        page: number = 1,
        limit: number = 20,
    ) {
        const skip = (page - 1) * limit;
        const where: any = {};

        if (productId) {
            where.productId = productId;
        }

        if (status) {
            where.status = status;
        }

        if (priority) {
            where.priority = priority;
        }

        const [items, total] = await Promise.all([
            this.prisma.roadmapItem.findMany({
                where,
                skip,
                take: limit,
                orderBy: { priority: 'asc' },
                include: { product: true },
            }),
            this.prisma.roadmapItem.count({ where }),
        ]);

        return {
            items,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }

    async createRoadmapItem(data: Prisma.RoadmapItemCreateInput) {
        return this.prisma.roadmapItem.create({
            data,
        });
    }

    async updateRoadmapItem(id: string, data: Prisma.RoadmapItemUpdateInput) {
        try {
            return await this.prisma.roadmapItem.update({
                where: { id },
                data,
            });
        } catch (error) {
            if (error === 'P2025') {
                throw new NotFoundException(`Roadmap item with ID ${id} not found`);
            }
            throw error;
        }
    }

    async deleteRoadmapItem(id: string) {
        try {
            return await this.prisma.roadmapItem.delete({
                where: { id },
            });
        } catch (error) {
            if (error === 'P2025') {
                throw new NotFoundException(`Roadmap item with ID ${id} not found`);
            }
            throw error;
        }
    }

    async voteRoadmapItem(id: string, userId: string, action: 'upvote' | 'downvote') {
        const item = await this.prisma.roadmapItem.findUnique({
            where: { id },
        });

        if (!item) {
            throw new NotFoundException(`Roadmap item with ID ${id} not found`);
        }

        // Track user votes in metadata
        const metadata = (item.metadata as any) || {};
        const userVotes = metadata.userVotes || {};

        if (action === 'upvote' && !userVotes[userId]) {
            userVotes[userId] = true;
            return this.prisma.roadmapItem.update({
                where: { id },
                data: {
                    votes: { increment: 1 },
                    metadata: { ...metadata, userVotes },
                },
            });
        } else if (action === 'downvote' && userVotes[userId]) {
            delete userVotes[userId];
            return this.prisma.roadmapItem.update({
                where: { id },
                data: {
                    votes: { decrement: 1 },
                    metadata: { ...metadata, userVotes },
                },
            });
        }

        return item;
    }

    async getProductRoadmap(productId: string) {
        const items = await this.prisma.roadmapItem.findMany({
            where: { productId },
            orderBy: [{ priority: 'asc' }, { estimatedDate: 'asc' }],
        });

        // Group by status
        const grouped = {
            PLANNED: items.filter(i => i.status === 'PLANNED'),
            IN_PROGRESS: items.filter(i => i.status === 'IN_PROGRESS'),
            COMPLETED: items.filter(i => i.status === 'COMPLETED'),
            ON_HOLD: items.filter(i => i.status === 'ON_HOLD'),
        };

        return {
            items,
            grouped,
            stats: {
                total: items.length,
                planned: grouped.PLANNED.length,
                inProgress: grouped.IN_PROGRESS.length,
                completed: grouped.COMPLETED.length,
                onHold: grouped.ON_HOLD.length,
            },
        };
    }
}