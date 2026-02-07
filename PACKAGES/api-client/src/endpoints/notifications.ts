
import APIClient from '../client';

export class NotificationsEndpoints {
    constructor(private client: APIClient) { }

    async getMyNotifications(page?: number, limit?: number, read?: boolean) {
        return this.client.get(`/notifications/me`, { params: { page, limit, read } });
    }

    async getUnreadCount() {
        return this.client.get(`/notifications/me/unread-count`);
    }

    async markAllAsRead() {
        return this.client.patch(`/notifications/me/read-all`);
    }

    async markAsRead(id: string) {
        return this.client.patch(`/notifications/${id}/read`);
    }

    async deleteNotification(id: string) {
        return this.client.delete(`/notifications/${id}`);
    }

    async getPreferences() {
        return this.client.get(`/notifications/preferences`);
    }

    async updatePreferences(preferences: any) {
        return this.client.patch(`/notifications/preferences`, preferences);
    }
}
