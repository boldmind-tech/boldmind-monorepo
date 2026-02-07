// SERVICES/api-gateway/src/naija-fither/naija-fither.controller.ts

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
    // ApiBody,
    ApiQuery,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { NaijaFitherServiceClient } from '../clients/naija-fither-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('naija-fither')
@Controller('naija-fither')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class NaijaFitherController {
    constructor(private naijaFitherClient: NaijaFitherServiceClient) { }

    // Workouts
    @Get('workouts')
    @ApiOperation({ summary: 'Get workouts' })
    @ApiQuery({ name: 'type', required: false })
    @ApiQuery({ name: 'difficulty', required: false })
    @ApiQuery({ name: 'duration', required: false })
    async getWorkouts(
        @Query() query: { type?: string; difficulty?: string; duration?: number },
    ) {
        return this.naijaFitherClient.getWorkouts(query);
    }

    @Post('workouts')
    @ApiOperation({ summary: 'Create workout' })
    async createWorkout(@Body() data: any) {
        return this.naijaFitherClient.createWorkout(data);
    }

    @Get('workouts/:id')
    @ApiOperation({ summary: 'Get workout by ID' })
    @ApiParam({ name: 'id', description: 'Workout ID' })
    async getWorkout(@Param('id') id: string) {
        return this.naijaFitherClient.getWorkoutById(id);
    }

    // Meal Plans
    @Get('meals/plans')
    @ApiOperation({ summary: 'Get meal plans' })
    @ApiQuery({ name: 'calories', required: false })
    @ApiQuery({ name: 'dietType', required: false })
    async getMealPlans(
        @Query() query: { calories?: number; dietType?: string },
    ) {
        return this.naijaFitherClient.getMealPlans(query);
    }

    @Get('meals/foods/search')
    @ApiOperation({ summary: 'Search Nigerian foods' })
    @ApiQuery({ name: 'q', required: true })
    async searchFoods(@Query('q') query: string) {
        return this.naijaFitherClient.searchNigerianFoods(query);
    }

    @Get('meals/foods/:id')
    @ApiOperation({ summary: 'Get food details' })
    @ApiParam({ name: 'id', description: 'Food ID' })
    async getFoodDetails(@Param('id') id: string) {
        return this.naijaFitherClient.getFoodDetails(id);
    }

    // Progress Tracking
    @Post('me/workouts/log')
    @ApiOperation({ summary: 'Log workout' })
    async logWorkout(
        @CurrentUser() user: any,
        @Body() data: { workoutId: string; duration: number; completed: boolean },
    ) {
        return this.naijaFitherClient.logWorkout(user.id, data.workoutId, {
            duration: data.duration,
            completed: data.completed,
        });
    }

    @Post('me/meals/log')
    @ApiOperation({ summary: 'Log meal' })
    async logMeal(@CurrentUser() user: any, @Body() data: any) {
        return this.naijaFitherClient.logMeal(user.id, data);
    }

    @Get('me/progress')
    @ApiOperation({ summary: 'Get my progress' })
    async getMyProgress(@CurrentUser() user: any) {
        return this.naijaFitherClient.getUserProgress(user.id);
    }

    @Patch('me/goals')
    @ApiOperation({ summary: 'Update goals' })
    async updateGoals(@CurrentUser() user: any, @Body() goals: any) {
        return this.naijaFitherClient.updateUserGoals(user.id, goals);
    }

    // Challenges
    @Get('challenges/active')
    @ApiOperation({ summary: 'Get active challenges' })
    async getActiveChallenges() {
        return this.naijaFitherClient.getActiveChallenges();
    }

    @Post('challenges/:id/join')
    @ApiOperation({ summary: 'Join challenge' })
    @ApiParam({ name: 'id', description: 'Challenge ID' })
    async joinChallenge(@CurrentUser() user: any, @Param('id') id: string) {
        return this.naijaFitherClient.joinChallenge(user.id, id);
    }

    // AI Coach
    @Post('me/ai-coach')
    @ApiOperation({ summary: 'Get AI recommendation' })
    async getAIRecommendation(
        @CurrentUser() user: any,
        @Body('query') query: string,
    ) {
        return this.naijaFitherClient.getAIRecommendation(user.id, query);
    }

    // Community
    @Get('community/posts')
    @ApiOperation({ summary: 'Get community posts' })
    @ApiQuery({ name: 'category', required: false })
    async getCommunityPosts(@Query('category') category?: string) {
        return this.naijaFitherClient.getCommunityPosts(category);
    }

    @Post('community/posts')
    @ApiOperation({ summary: 'Create community post' })
    async createCommunityPost(@CurrentUser() user: any, @Body() data: any) {
        return this.naijaFitherClient.createCommunityPost(user.id, data);
    }
}