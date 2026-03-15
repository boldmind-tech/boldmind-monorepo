
import APIClient from '../client';

export class BoldmindOsEndpoints {
    constructor(private client: APIClient) { }

    async getSystemStatus() {
        return this.client.get(`/boldmind-os/status`);
    }

    async getApps() {
        return this.client.get(`/boldmind-os/apps`);
    }

    async installApp(appId: string) {
        return this.client.post(`/boldmind-os/apps/${appId}/install`);
    }

    async uninstallApp(appId: string) {
        return this.client.post(`/boldmind-os/apps/${appId}/uninstall`);
    }

    async getSettings() {
        return this.client.get(`/boldmind-os/settings`);
    }

    async updateSettings(settings: any) {
        return this.client.patch(`/boldmind-os/settings`, settings);
    }

    async getStorageUsage() {
        return this.client.get(`/boldmind-os/storage/usage`);
    }
}
