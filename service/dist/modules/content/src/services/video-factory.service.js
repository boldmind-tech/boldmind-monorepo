"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoFactoryService = void 0;
const axios_1 = require("axios");
class VideoFactoryService {
    static async convertPostToVideo(post) {
        try {
            const response = await axios_1.default.post(`${this.baseUrl}/jobs`, {
                sourceType: 'amebogist',
                sourceId: post._id || post.id,
                title: post.title,
                content: post.content.pidgin || post.content.english || post.content,
                media: post.media?.featuredImage,
                targetPlatforms: ['facebook', 'instagram', 'tiktok']
            });
            return response.data;
        }
        catch (error) {
            console.error('Social Factory Integration Error:', error.message);
            return null;
        }
    }
}
exports.VideoFactoryService = VideoFactoryService;
VideoFactoryService.baseUrl = process.env['SOCIAL_FACTORY_SERVICE_URL'] || 'http://localhost:4023';
//# sourceMappingURL=video-factory.service.js.map