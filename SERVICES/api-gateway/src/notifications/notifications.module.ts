
// SERVICES/api-gateway/src/notifications/notifications.module.ts

import { Module, Global } from '@nestjs/common';
import { NotificationServiceClient } from '../clients/notification-service.client';

@Global()
@Module({
    providers: [NotificationServiceClient],
    exports: [NotificationServiceClient],
})
export class NotificationsModule { }
