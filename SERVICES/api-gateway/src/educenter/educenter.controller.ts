// SERVICES/api-gateway/src/educenter/educenter.controller.ts

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
    // ApiBody,
    ApiQuery,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { EducenterServiceClient } from '../clients/educenter-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('educenter')
@Controller('educenter')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class EducenterController {
    constructor(private educenterClient: EducenterServiceClient) { }

    // Courses
    @Get('courses')
    @ApiOperation({ summary: 'Get all courses' })
    @ApiQuery({ name: 'category', required: false })
    @ApiQuery({ name: 'status', required: false })
    async getCourses(@Query() query: { category?: string; status?: string }) {
        return this.educenterClient.getAllCourses(query);
    }

    @Get('courses/:id')
    @ApiOperation({ summary: 'Get course by ID' })
    @ApiParam({ name: 'id', description: 'Course ID' })
    async getCourse(@Param('id') id: string) {
        return this.educenterClient.getCourseById(id);
    }

    @Post('courses')
    @ApiOperation({ summary: 'Create a new course' })
    async createCourse(@Body() data: any) {
        return this.educenterClient.createCourse(data);
    }

    @Patch('courses/:id')
    @ApiOperation({ summary: 'Update course' })
    async updateCourse(@Param('id') id: string, @Body() data: any) {
        return this.educenterClient.updateCourse(id, data);
    }

    @Delete('courses/:id')
    @ApiOperation({ summary: 'Delete course' })
    async deleteCourse(@Param('id') id: string) {
        return this.educenterClient.deleteCourse(id);
    }

    // Exam Prep
    @Get('exams/questions')
    @ApiOperation({ summary: 'Get past exam questions' })
    @ApiQuery({ name: 'examType', required: true })
    @ApiQuery({ name: 'subject', required: false })
    @ApiQuery({ name: 'year', required: false })
    async getQuestions(@Query() query: { examType: string; subject?: string; year?: number }) {
        return this.educenterClient.getPastQuestions(query.examType, query.subject, query.year);
    }

    @Post('exams/attempt')
    @ApiOperation({ summary: 'Submit exam attempt' })
    async submitAttempt(@CurrentUser() user: any, @Body() data: any) {
        return this.educenterClient.submitExamAttempt(user.id, data);
    }

    @Get('me/progress')
    @ApiOperation({ summary: 'Get my exam progress' })
    async getMyProgress(@CurrentUser() user: any) {
        return this.educenterClient.getUserExamProgress(user.id);
    }

    // Leaderboard
    @Get('leaderboard')
    @ApiOperation({ summary: 'Get leaderboard' })
    @ApiQuery({ name: 'limit', required: false })
    async getLeaderboard(@Query('limit') limit?: number) {
        return this.educenterClient.getLeaderboard(limit);
    }

    // Subscription
    @Get('me/subscription')
    @ApiOperation({ summary: 'Get my subscription' })
    async getMySubscription(@CurrentUser() user: any) {
        return this.educenterClient.getUserSubscription(user.id);
    }

    @Patch('me/subscription')
    @ApiOperation({ summary: 'Update subscription plan' })
    async updateSubscription(@CurrentUser() user: any, @Body('plan') plan: string) {
        return this.educenterClient.updateUserSubscription(user.id, plan);
    }
}