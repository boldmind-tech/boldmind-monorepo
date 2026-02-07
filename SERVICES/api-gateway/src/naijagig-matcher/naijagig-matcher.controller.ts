// SERVICES/api-gateway/src/naijagig-matcher/naijagig-matcher.controller.ts

import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Query,
    Patch,
    UseGuards,
} from '@nestjs/common';
import {
    ApiTags,
    ApiBearerAuth,
    ApiOperation,
    ApiParam,
    // ApiBody,
    ApiQuery,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { NaijagigMatcherServiceClient } from '../clients/naijagig-matcher-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('naijagig-matcher')
@Controller('naijagig-matcher')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class NaijagigMatcherController {
    constructor(private naijagigMatcherClient: NaijagigMatcherServiceClient) { }

    // Gigs
    @Post('gigs')
    @ApiOperation({ summary: 'Post a gig' })
    async postGig(@CurrentUser() user: any, @Body() data: any) {
        return this.naijagigMatcherClient.postGig(user.id, data);
    }

    @Get('gigs')
    @ApiOperation({ summary: 'Get gigs' })
    @ApiQuery({ name: 'category', required: false })
    @ApiQuery({ name: 'location', required: false })
    @ApiQuery({ name: 'budgetMin', required: false })
    @ApiQuery({ name: 'budgetMax', required: false })
    @ApiQuery({ name: 'status', required: false })
    async getGigs(
        @Query() query: {
            category?: string;
            location?: string;
            budgetMin?: number;
            budgetMax?: number;
            status?: string;
        },
    ) {
        return this.naijagigMatcherClient.getGigs(query);
    }

    @Get('gigs/:id')
    @ApiOperation({ summary: 'Get gig by ID' })
    @ApiParam({ name: 'id', description: 'Gig ID' })
    async getGig(@Param('id') id: string) {
        return this.naijagigMatcherClient.getGigById(id);
    }

    // Worker Profiles
    @Post('worker-profile')
    @ApiOperation({ summary: 'Create worker profile' })
    async createWorkerProfile(@CurrentUser() user: any, @Body() data: any) {
        return this.naijagigMatcherClient.createWorkerProfile(user.id, data);
    }

    @Get('me/worker-profile')
    @ApiOperation({ summary: 'Get my worker profile' })
    async getMyWorkerProfile(@CurrentUser() user: any) {
        return this.naijagigMatcherClient.getWorkerProfile(user.id);
    }

    @Patch('me/worker-profile')
    @ApiOperation({ summary: 'Update worker profile' })
    async updateWorkerProfile(@CurrentUser() user: any, @Body() data: any) {
        return this.naijagigMatcherClient.updateWorkerProfile(user.id, data);
    }

    // @Get('workers/:id/listings')
    // @ApiOperation({ summary: 'Get worker listings' })
    // @ApiParam({ name: 'id', description: 'Worker ID' })
    // async getWorkerListings(@Param('id') id: string) {
    //     return this.naijagigMatcherClient.getFarmerListings(id);
    // }

    // Matching
    @Get('gigs/:id/matches')
    @ApiOperation({ summary: 'Find matching workers for gig' })
    @ApiParam({ name: 'id', description: 'Gig ID' })
    async findMatchingWorkers(@Param('id') id: string) {
        return this.naijagigMatcherClient.findMatchingWorkers(id);
    }

    @Get('me/matches')
    @ApiOperation({ summary: 'Find matching gigs for me' })
    async findMatchingGigs(@CurrentUser() user: any) {
        return this.naijagigMatcherClient.findMatchingGigs(user.id);
    }

    // Applications
    @Post('gigs/:id/apply')
    @ApiOperation({ summary: 'Apply for gig' })
    @ApiParam({ name: 'id', description: 'Gig ID' })
    async applyForGig(
        @CurrentUser() user: any,
        @Param('id') id: string,
        @Body('message') message?: string,
    ) {
        return this.naijagigMatcherClient.applyForGig(user.id, id, message);
    }

    @Get('gigs/:id/applications')
    @ApiOperation({ summary: 'Get gig applications' })
    @ApiParam({ name: 'id', description: 'Gig ID' })
    async getGigApplications(@Param('id') id: string) {
        return this.naijagigMatcherClient.getGigApplications(id);
    }

    // Hiring
    @Post('gigs/:id/hire')
    @ApiOperation({ summary: 'Hire worker' })
    @ApiParam({ name: 'id', description: 'Gig ID' })
    async hireWorker(
        @CurrentUser() _user: any,
        @Param('id') id: string,
        @Body('workerId') workerId: string,
    ) {
        return this.naijagigMatcherClient.hireWorker(id, workerId);
    }

    @Post('gigs/:id/payment/release')
    @ApiOperation({ summary: 'Release payment' })
    @ApiParam({ name: 'id', description: 'Gig ID' })
    async releasePayment(
        @Param('id') id: string,
        @Body('amount') amount?: number,
    ) {
        return this.naijagigMatcherClient.releasePayment(id, amount || 0);
    }

    // Reviews
    @Post('gigs/:id/reviews')
    @ApiOperation({ summary: 'Submit review' })
    @ApiParam({ name: 'id', description: 'Gig ID' })
    async submitReview(
        @CurrentUser() user: any,
        @Param('id') id: string,
        @Body() data: { reviewedId: string; rating: number; comment?: string },
    ) {
        return this.naijagigMatcherClient.submitReview(
            id,
            user.id,
            data.reviewedId,
            data.rating,
            data.comment,
        );
    }

    // @Get('workers/:id/reviews')
    // @ApiOperation({ summary: 'Get worker reviews' })
    // @ApiParam({ name: 'id', description: 'Worker ID' })
    // async getWorkerReviews(@Param('id') id: string) {
    //     return this.naijagigMatcherClient.getWorkerReviews(id);
    // }

    // Wallet
    @Get('me/wallet')
    @ApiOperation({ summary: 'Get wallet balance' })
    async getWalletBalance(@CurrentUser() user: any) {
        return this.naijagigMatcherClient.getWalletBalance(user.id);
    }

    @Post('me/wallet/withdraw')
    @ApiOperation({ summary: 'Withdraw earnings' })
    async withdrawEarnings(
        @CurrentUser() user: any,
        @Body() data: { amount: number; accountDetails: any },
    ) {
        return this.naijagigMatcherClient.withdrawEarnings(
            user.id,
            data.amount,
            data.accountDetails,
        );
    }
}