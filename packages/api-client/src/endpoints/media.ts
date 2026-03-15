
import APIClient from '../client';

export class MediaEndpoints {
    constructor(private client: APIClient) { }

    async uploadFile(file: any) {
        // Note: Implementation usually requires FormData, handled by caller or extended client method
        return this.client.post(`/media/upload`, file);
    }

    async getFile(fileId: string) {
        return this.client.get(`/media/files/${fileId}`);
    }

    async deleteFile(fileId: string) {
        return this.client.delete(`/media/files/${fileId}`);
    }

    async getStorageStats() {
        return this.client.get(`/media/stats`);
    }
}
