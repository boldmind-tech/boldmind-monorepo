
import {
    Controller,
    Get,
    Post,
    Patch,
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
import { Skill2cashServiceClient } from '../clients/skill2cash-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('skill2cash')
@Controller('skill2cash')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class Skill2cashController {
    constructor(private skill2cashClient: Skill2cashServiceClient) { }

    // Skill Profiles
    @Post('profiles')
    @ApiOperation({ summary: 'Create skill profile' })
    async createSkillProfile(@CurrentUser() user: any, @Body() data: any) {
        return this.skill2cashClient.createSkillProfile(user.id, data);
    }

    @Get('profiles/me')
    @ApiOperation({ summary: 'Get my skill profile' })
    async getMySkillProfile(@CurrentUser() user: any) {
        return this.skill2cashClient.getSkillProfile(user.id);
    }

    @Get('profiles/:userId')
    @ApiOperation({ summary: 'Get skill profile by user ID' })
    @ApiParam({ name: 'userId', description: 'User ID' })
    async getSkillProfile(@Param('userId') userId: string) {
        return this.skill2cashClient.getSkillProfile(userId);
    }

    @Patch('profiles/me')
    @ApiOperation({ summary: 'Update skill profile' })
    async updateSkillProfile(@CurrentUser() user: any, @Body() data: any) {
        return this.skill2cashClient.updateSkillProfile(user.id, data);
    }

    @Post('profiles/me/videos')
    @ApiOperation({ summary: 'Upload portfolio video' })
    async uploadPortfolioVideo(@CurrentUser() user: any, @Body() data: { videoData: string; description?: string }) {
        return this.skill2cashClient.uploadPortfolioVideo(user.id, data.videoData, data.description);
    }

    // Discovery
    @Get('skills')
    @ApiOperation({ summary: 'Find skills' })
    @ApiQuery({ name: 'skill', required: false })
    @ApiQuery({ name: 'location', required: false })
    async findSkills(@Query() query: any) {
        return this.skill2cashClient.findSkills(query);
    }

    @Get('categories')
    @ApiOperation({ summary: 'Get skill categories' })
    async getSkillCategories() {
        return this.skill2cashClient.getSkillCategories();
    }

    // Bookings
    @Post('bookings')
    @ApiOperation({ summary: 'Create booking' })
    async createBooking(@CurrentUser() user: any, @Body() data: any) {
        return this.skill2cashClient.createBooking(user.id, data);
    }

    @Get('bookings')
    @ApiOperation({ summary: 'Get bookings' })
    @ApiQuery({ name: 'role', enum: ['provider', 'client'] })
    @ApiQuery({ name: 'status', required: false })
    async getBookings(@CurrentUser() user: any, @Query('role') role: 'provider' | 'client', @Query('status') status?: string) {
        return this.skill2cashClient.getBookings(user.id, role, status);
    }

    @Get('bookings/:id')
    @ApiOperation({ summary: 'Get booking by ID' })
    @ApiParam({ name: 'id', description: 'Booking ID' })
    async getBookingById(@Param('id') id: string) {
        return this.skill2cashClient.getBookingById(id);
    }

    @Post('bookings/:id/confirm')
    @ApiOperation({ summary: 'Confirm booking' })
    @ApiParam({ name: 'id', description: 'Booking ID' })
    async confirmBooking(@CurrentUser() user: any, @Param('id') id: string) {
        return this.skill2cashClient.confirmBooking(id, user.id);
    }

    @Post('bookings/:id/complete')
    @ApiOperation({ summary: 'Complete booking' })
    @ApiParam({ name: 'id', description: 'Booking ID' })
    async completeBooking(@Param('id') id: string, @Body() completionData: any) {
        return this.skill2cashClient.completeBooking(id, completionData);
    }

    @Post('bookings/:id/cancel')
    @ApiOperation({ summary: 'Cancel booking' })
    @ApiParam({ name: 'id', description: 'Booking ID' })
    async cancelBooking(@Param('id') id: string, @Body('reason') reason?: string) {
        return this.skill2cashClient.cancelBooking(id, reason);
    }

    // Escrow & Payments
    @Post('bookings/:id/release-payment')
    @ApiOperation({ summary: 'Release payment' })
    @ApiParam({ name: 'id', description: 'Booking ID' })
    async releasePayment(@Param('id') id: string, @Body('amount') amount?: number) {
        return this.skill2cashClient.releasePayment(id, amount);
    }

    @Post('bookings/:id/dispute')
    @ApiOperation({ summary: 'Dispute booking' })
    @ApiParam({ name: 'id', description: 'Booking ID' })
    async disputeBooking(@Param('id') id: string, @Body() data: { reason: string; evidence?: string[] }) {
        return this.skill2cashClient.disputeBooking(id, data.reason, data.evidence);
    }

    // Reviews
    @Post('bookings/:id/reviews')
    @ApiOperation({ summary: 'Submit review' })
    @ApiParam({ name: 'id', description: 'Booking ID' })
    async submitReview(
        @CurrentUser() user: any,
        @Param('id') id: string,
        @Body() data: { rating: number; comment?: string; isAnonymous?: boolean }
    ) {
        return this.skill2cashClient.submitReview(id, user.id, data.rating, data.comment, data.isAnonymous);
    }

    @Get('profiles/:providerId/reviews')
    @ApiOperation({ summary: 'Get provider reviews' })
    @ApiParam({ name: 'providerId', description: 'Provider ID' })
    async getProviderReviews(@Param('providerId') providerId: string) {
        return this.skill2cashClient.getProviderReviews(providerId);
    }

    // Availability
    @Post('profiles/me/availability')
    @ApiOperation({ summary: 'Set availability' })
    async setAvailability(@CurrentUser() user: any, @Body('schedule') schedule: any[]) {
        return this.skill2cashClient.setAvailability(user.id, schedule);
    }

    @Get('profiles/:userId/availability')
    @ApiOperation({ summary: 'Get availability' })
    @ApiParam({ name: 'userId', description: 'User ID' })
    @ApiQuery({ name: 'date', required: false })
    async getAvailability(@Param('userId') userId: string, @Query('date') date?: string) {
        return this.skill2cashClient.getAvailability(userId, date);
    }

    // Earnings
    @Get('earnings')
    @ApiOperation({ summary: 'Get earnings' })
    @ApiQuery({ name: 'period', required: false })
    async getEarnings(@CurrentUser() user: any, @Query('period') period?: string) {
        return this.skill2cashClient.getEarnings(user.id, period);
    }

    @Post('withdraw')
    @ApiOperation({ summary: 'Withdraw earnings' })
    async withdrawEarnings(@CurrentUser() user: any, @Body() data: { amount: number; accountDetails: any }) {
        return this.skill2cashClient.withdrawEarnings(user.id, data.amount, data.accountDetails);
    }
}
