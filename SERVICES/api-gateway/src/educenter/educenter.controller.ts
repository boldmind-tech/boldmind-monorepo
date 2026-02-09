// SERVICES/api-gateway/src/educenter/educenter.controller.ts

import {
    Controller,
    Get,
    Post,
    Patch,
    // Delete,
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
import { EducenterServiceClient } from '../clients/educenter-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('educenter')
@Controller('educenter')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class EducenterController {
    constructor(private educenterClient: EducenterServiceClient) { }

    // ==================== Courses ====================

    @Get('courses')
    @ApiOperation({ summary: 'Get all courses' })
    @ApiQuery({ name: 'category', required: false })
    @ApiQuery({ name: 'level', required: false })
    @ApiQuery({ name: 'isPublished', required: false })
    async getCourses(@Query() query: { category?: string; level?: string; isPublished?: boolean }) {
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
    @ApiParam({ name: 'id', description: 'Course ID' })
    async updateCourse(@Param('id') id: string, @Body() data: any) {
        return this.educenterClient.updateCourse(id, data);
    }

    @Post('courses/:id/enroll')
    @ApiOperation({ summary: 'Enroll in a course' })
    @ApiParam({ name: 'id', description: 'Course ID' })
    async enrollInCourse(@Param('id') id: string, @CurrentUser() user: any) {
        return this.educenterClient.enrollInCourse(id, { userId: user.id });
    }

    @Patch('courses/enrollments/:id/progress')
    @ApiOperation({ summary: 'Update enrollment progress' })
    @ApiParam({ name: 'id', description: 'Enrollment ID' })
    async updateEnrollmentProgress(@Param('id') id: string, @Body() data: any) {
        return this.educenterClient.updateEnrollmentProgress(id, data);
    }

    @Get('me/enrollments')
    @ApiOperation({ summary: 'Get my course enrollments' })
    async getMyEnrollments(@CurrentUser() user: any) {
        return this.educenterClient.getUserEnrollments(user.id);
    }

    // ==================== Questions ====================

    @Get('questions')
    @ApiOperation({ summary: 'Get exam questions' })
    @ApiQuery({ name: 'subject', required: true })
    @ApiQuery({ name: 'examType', required: true })
    @ApiQuery({ name: 'year', required: false })
    @ApiQuery({ name: 'limit', required: false })
    async getQuestions(
        @Query() query: { subject: string; examType: string; year?: string; limit?: number }
    ) {
        return this.educenterClient.getQuestions(query);
    }

    @Get('questions/subjects')
    @ApiOperation({ summary: 'Get subjects for exam type' })
    @ApiQuery({ name: 'examType', required: true })
    async getSubjects(@Query('examType') examType: string) {
        try {
            console.log(`[Gateway] Fetching subjects for examType: ${examType}`);
            const response = await this.educenterClient.getSubjects(examType);

            // Log response structure for debugging
            console.log(`[Gateway] Service response type: ${typeof response}`);

            if (!response || (Array.isArray(response) && response.length === 0)) {
                console.warn(`[Gateway] Empty subjects from service, returning fallback for ${examType}`);
            }

            return response;
        } catch (error: any) {
            console.error(`[Gateway] Error fetching subjects for ${examType}:`, error.message);
            throw error;
        }
    }

    @Get('questions/years')
    @ApiOperation({ summary: 'Get available years for exam type' })
    @ApiQuery({ name: 'examType', required: true })
    async getYears(@Query('examType') examType: string) {
        return this.educenterClient.getYears(examType);
    }

    @Get('questions/subjects-for-year/:year')
    @ApiOperation({ summary: 'Get available subjects for a specific year' })
    @ApiParam({ name: 'year', description: 'Year' })
    async getSubjectsForYear(@Param('year') year: string) {
        return this.educenterClient.getSubjectsForYear(year);
    }

    @Get('questions/years-for-subject/:subject')
    @ApiOperation({ summary: 'Get available years for a specific subject' })
    @ApiParam({ name: 'subject', description: 'Subject' })
    async getYearsForSubject(@Param('subject') subject: string) {
        return this.educenterClient.getYearsForSubject(subject);
    }

    @Get('questions/comprehension-years/:subject')
    @ApiOperation({ summary: 'Get available years for comprehension questions' })
    @ApiParam({ name: 'subject', description: 'Subject' })
    async getComprehensionYears(@Param('subject') subject: string) {
        return this.educenterClient.getComprehensionYears(subject);
    }

    @Get('questions/top')
    @ApiOperation({ summary: 'Get top/featured questions' })
    @ApiQuery({ name: 'limit', required: false })
    async getTopQuestions(@Query('limit') limit?: number) {
        return this.educenterClient.getTopQuestions(limit);
    }

    @Get('questions/detail/:id')
    @ApiOperation({ summary: 'Get question detail' })
    @ApiParam({ name: 'id', description: 'Question ID' })
    @ApiQuery({ name: 'subject', required: true })
    async getQuestionDetail(@Param('id') id: string, @Query('subject') subject: string) {
        return this.educenterClient.getQuestionDetail(id, subject);
    }

    @Get('questions/comprehension')
    @ApiOperation({ summary: 'Get comprehension questions' })
    @ApiQuery({ name: 'subject', required: true })
    @ApiQuery({ name: 'year', required: false })
    @ApiQuery({ name: 'limit', required: false })
    @ApiQuery({ name: 'random', required: false })
    async getComprehensionQuestions(
        @Query() query: { subject: string; year?: string; limit?: number; random?: boolean }
    ) {
        return this.educenterClient.getComprehensionQuestions(query);
    }

    @Get('questions/multi-subject')
    @ApiOperation({ summary: 'Get questions from multiple subjects' })
    @ApiQuery({ name: 'subjects', required: true, isArray: true })
    @ApiQuery({ name: 'questionsPerSubject', required: false })
    async getMultiSubjectQuestions(
        @Query() query: { subjects: string[]; questionsPerSubject?: number }
    ) {
        return this.educenterClient.getMultiSubjectQuestions(query);
    }

    // ==================== Quizzes ====================

    @Post('quizzes/start')
    @ApiOperation({ summary: 'Start a new quiz' })
    async startQuiz(@CurrentUser() user: any, @Body() data: any) {
        return this.educenterClient.startQuiz({
            userId: user.id,
            ...data,
        });
    }

    @Post('quizzes/:id/submit')
    @ApiOperation({ summary: 'Submit quiz answers' })
    @ApiParam({ name: 'id', description: 'Quiz ID' })
    async submitQuiz(@Param('id') id: string, @Body() data: any) {
        return this.educenterClient.submitQuiz(id, data);
    }

    @Get('quizzes/:id')
    @ApiOperation({ summary: 'Get quiz by ID' })
    @ApiParam({ name: 'id', description: 'Quiz ID' })
    async getQuiz(@Param('id') id: string) {
        return this.educenterClient.getQuizById(id);
    }

    @Get('me/quizzes')
    @ApiOperation({ summary: 'Get my quiz history' })
    async getMyQuizzes(@CurrentUser() user: any) {
        return this.educenterClient.getUserQuizzes(user.id);
    }

    // ==================== Leaderboard ====================

    @Get('leaderboard/global')
    @ApiOperation({ summary: 'Get global leaderboard' })
    @ApiQuery({ name: 'examType', required: false })
    @ApiQuery({ name: 'subject', required: false })
    async getGlobalLeaderboard(@Query() query: { examType?: string; subject?: string }) {
        return this.educenterClient.getGlobalLeaderboard(query);
    }

    @Get('leaderboard/me/rank')
    @ApiOperation({ summary: 'Get my leaderboard rank' })
    @ApiQuery({ name: 'examType', required: false })
    @ApiQuery({ name: 'subject', required: false })
    async getMyRank(@CurrentUser() user: any, @Query() query: { examType?: string; subject?: string }) {
        return this.educenterClient.getUserRank(user.id, query);
    }

    // ==================== Notes ====================

    @Get('notes/:examType/:subject')
    @ApiOperation({ summary: 'Get notes for a subject' })
    @ApiParam({ name: 'examType', description: 'Exam type (JAMB, WAEC, NECO)' })
    @ApiParam({ name: 'subject', description: 'Subject name' })
    async getNotes(
        @Param('examType') examType: string,
        @Param('subject') subject: string,
        @CurrentUser() user: any
    ) {
        return this.educenterClient.getNotes(examType, subject, user.id);
    }

    @Get('notes/download/:noteId')
    @ApiOperation({ summary: 'Download a note' })
    @ApiParam({ name: 'noteId', description: 'Note ID' })
    async downloadNote(@Param('noteId') noteId: string, @CurrentUser() user: any) {
        return this.educenterClient.downloadNote(noteId, user.id);
    }

    // ==================== Study Materials ====================

    @Get('materials')
    @ApiOperation({ summary: 'Get study materials' })
    @ApiQuery({ name: 'subject', required: false })
    @ApiQuery({ name: 'type', required: false })
    async getStudyMaterials(@Query() query: { subject?: string; type?: string }) {
        return this.educenterClient.getStudyMaterials(query.subject, query.type);
    }

    // ==================== User Progress ====================

    @Get('me/progress')
    @ApiOperation({ summary: 'Get my exam progress' })
    async getMyProgress(@CurrentUser() user: any) {
        return this.educenterClient.getUserExamProgress(user.id);
    }

    // ==================== Subscription ====================

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