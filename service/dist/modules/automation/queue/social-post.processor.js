"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SocialPostProcessor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialPostProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const config_1 = require("@nestjs/config");
let SocialPostProcessor = SocialPostProcessor_1 = class SocialPostProcessor {
    constructor(config) {
        this.config = config;
        this.logger = new common_1.Logger(SocialPostProcessor_1.name);
    }
    async handleSocialPost(job) {
        const { platforms, content, mediaUrls, caption, hashtags } = job.data;
        this.logger.log(`Processing social post for platforms: ${platforms.join(', ')}`);
        const results = {};
        for (const platform of platforms) {
            try {
                results[platform] = await this.postToPlatform(platform, content, mediaUrls, caption, hashtags);
                this.logger.log(`Posted to ${platform} ✓`);
            }
            catch (err) {
                this.logger.error(`Failed to post to ${platform}:`, err.message);
                results[platform] = { error: err.message };
            }
        }
        return results;
    }
    async postToPlatform(platform, content, mediaUrls, caption, hashtags) {
        const fullCaption = `${caption || content}\n\n${hashtags?.map((h) => `#${h}`).join(' ') || ''}`.trim();
        switch (platform.toLowerCase()) {
            case 'instagram': {
                const igToken = this.config.get('META_PAGE_ACCESS_TOKEN');
                const igId = this.config.get('INSTAGRAM_BUSINESS_ID');
                if (!igToken || !igId)
                    throw new Error('Instagram not configured');
                if (mediaUrls?.[0]) {
                    const { data: container } = await axios_1.default.post(`https://graph.facebook.com/v19.0/${igId}/media`, { image_url: mediaUrls[0], caption: fullCaption, access_token: igToken });
                    const { data: result } = await axios_1.default.post(`https://graph.facebook.com/v19.0/${igId}/media_publish`, { creation_id: container.id, access_token: igToken });
                    return result;
                }
                break;
            }
            case 'facebook': {
                const pageToken = this.config.get('META_PAGE_ACCESS_TOKEN');
                const pageId = this.config.get('FACEBOOK_PAGE_ID');
                if (!pageToken || !pageId)
                    throw new Error('Facebook not configured');
                const { data } = await axios_1.default.post(`https://graph.facebook.com/v19.0/${pageId}/feed`, { message: fullCaption, access_token: pageToken });
                return data;
            }
            case 'twitter':
            case 'x': {
                this.logger.warn('Twitter/X posting not yet configured');
                return { status: 'skipped', reason: 'Twitter API not configured' };
            }
            default:
                this.logger.warn(`Platform ${platform} not yet supported for auto-posting`);
                return { status: 'skipped' };
        }
    }
};
exports.SocialPostProcessor = SocialPostProcessor;
__decorate([
    (0, bull_1.Process)('post'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SocialPostProcessor.prototype, "handleSocialPost", null);
exports.SocialPostProcessor = SocialPostProcessor = SocialPostProcessor_1 = __decorate([
    (0, bull_1.Processor)('social-posts'),
    __metadata("design:paramtypes", [config_1.ConfigService])
], SocialPostProcessor);
//# sourceMappingURL=social-post.processor.js.map