// SERVICES/user-service/src/users/users.service.ts

import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async create(createUserDto: CreateUserDto) {
        const existingUser = await this.prisma.client.user.findUnique({
            where: { id: createUserDto.id },
        });

        if (existingUser) {
            throw new ConflictException('User already exists');
        }

        const existingEmail = await this.prisma.client.user.findUnique({
            where: { email: createUserDto.email },
        });

        if (existingEmail) {
            throw new ConflictException('Email already in use');
        }

        return this.prisma.client.user.create({
            data: createUserDto,
        });
    }

    async findById(id: string) {
        const user = await this.prisma.client.user.findUnique({
            where: { id },
            include: {
                profiles: true,
                organizations: true,
            },
        });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    async findByEmail(email: string) {
        return this.prisma.client.user.findUnique({
            where: { email },
            include: {
                profiles: true,
                organizations: true,
            },
        });
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        // Remove the unused 'user' variable by not assigning it
        await this.findById(id); // Just check if user exists

        return this.prisma.client.user.update({
            where: { id },
            data: updateUserDto,
        });
    }

    async delete(id: string) {
        await this.findById(id); // Just check if user exists

        return this.prisma.client.user.delete({
            where: { id },
        });
    }

    // User Profiles
    async getProfiles(userId: string) {
        await this.findById(userId); // Just check if user exists

        return this.prisma.client.userProfile.findMany({
            where: { userId },
        });
    }

    async getProfileByProduct(userId: string, productSlug: string) {
        const profile = await this.prisma.client.userProfile.findUnique({
            where: {
                userId_productSlug: {
                    userId,
                    productSlug,
                },
            },
        });

        if (!profile) {
            throw new NotFoundException('Profile not found');
        }

        return profile;
    }

    async createProfile(userId: string, data: any) {
        await this.findById(userId); // Just check if user exists

        return this.prisma.client.userProfile.create({
            data: {
                userId,
                ...data,
            },
        });
    }

    async updateProfile(userId: string, productSlug: string, data: any) {
        await this.getProfileByProduct(userId, productSlug); // Just check if profile exists

        return this.prisma.client.userProfile.update({
            where: {
                userId_productSlug: {
                    userId,
                    productSlug,
                },
            },
            data,
        });
    }

    async deleteProfile(userId: string, productSlug: string) {
        await this.getProfileByProduct(userId, productSlug); // Just check if profile exists

        return this.prisma.client.userProfile.delete({
            where: {
                userId_productSlug: {
                    userId,
                    productSlug,
                },
            },
        });
    }

    // Organizations
    async getOrganizations(userId: string) {
        await this.findById(userId); // Just check if user exists

        return this.prisma.client.organization.findMany({
            where: { ownerId: userId },
        });
    }

    async createOrganization(userId: string, data: any) {
        await this.findById(userId); // Just check if user exists

        return this.prisma.client.organization.create({
            data: {
                ownerId: userId,
                ...data,
            },
        });
    }
}