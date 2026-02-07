
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
    ApiQuery,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { NotificationServiceClient } from '../clients/notification-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('notifications')
@Controller('notifications')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class NotificationsController {
    constructor(private notificationClient: NotificationServiceClient) { }

    @Get('me')
    @ApiOperation({ summary: 'Get my notifications' })
    @ApiQuery({ name: 'page', required: false })
    @ApiQuery({ name: 'limit', required: false })
    @ApiQuery({ name: 'read', required: false })
    async getMyNotifications(
        @CurrentUser() user: any,
        @Query('page') page?: number,
        @Query('limit') limit?: number,
        @Query('read') read?: boolean,
    ) {
        return this.notificationClient.getUserNotifications(user.id, { page, limit, read });
    }

    @Get('me/unread-count')
    @ApiOperation({ summary: 'Get unread count' })
    async getUnreadCount(@CurrentUser() user: any) {
        return this.notificationClient.getUnreadCount(user.id);
    }

    @Patch('me/read-all')
    @ApiOperation({ summary: 'Mark all as read' })
    async markAllAsRead(@CurrentUser() user: any) {
        return this.notificationClient.markAllAsRead(user.id);
    }

    @Patch(':id/read')
    @ApiOperation({ summary: 'Mark as read' })
    @ApiParam({ name: 'id', description: 'Notification ID' })
    async markAsRead(@CurrentUser() user: any, @Param('id') id: string) {
        return this.notificationClient.markAsRead(user.id, id);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete notification' })
    @ApiParam({ name: 'id', description: 'Notification ID' })
    async deleteNotification(@CurrentUser() user: any, @Param('id') id: string) {
        return this.notificationClient.deleteNotification(user.id, id);
    }

    @Get('preferences')
    @ApiOperation({ summary: 'Get preferences' })
    async getPreferences(@CurrentUser() user: any) {
        return this.notificationClient.getPreferences(user.id);
    }

    @Patch('preferences')
    @ApiOperation({ summary: 'Update preferences' })
    async updatePreferences(@CurrentUser() user: any, @Body() preferences: any) {
        return this.notificationClient.updatePreferences(user.id, preferences);
    }

    // Sending endpoints (Testing/Admin use)
    @Post('send/email')
    @ApiOperation({ summary: 'Send email (test)' })
    async sendEmail(@CurrentUser() user: any, @Body() data: any) {
        // Enforce admin check in real app? Using current user ID for now as sender or subject
        return this.notificationClient.sendEmail(user.id, data);
    }

    @Post('send/sms')
    @ApiOperation({ summary: 'Send SMS (test)' })
    async sendSMS(@CurrentUser() user: any, @Body() data: any) {
        return this.notificationClient.sendSMS(user.id, data);
    }

    @Post('send/push')
    @ApiOperation({ summary: 'Send push notification (test)' })
    async sendPushNotification(@Body() data: any) {
        return this.notificationClient.sendPushNotification(data);
    }

    @Post('send/in-app')
    @ApiOperation({ summary: 'Send in-app notification (test)' })
    async sendInAppNotification(@Body() data: any) {
        return this.notificationClient.sendInAppNotification(data);
    }
}
