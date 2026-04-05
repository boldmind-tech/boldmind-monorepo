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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var VideoFactoryService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoFactoryService = void 0;
const common_1 = require("@nestjs/common");
const bullmq_1 = require("@nestjs/bullmq");
const bullmq_2 = require("bullmq");
const ai_service_1 = require("../ai.service");
const PLATFORM_LIMITS = {
    twitter: { maxChars: 280, maxHashtags: 3 },
    instagram: { maxChars: 2200, maxHashtags: 30 },
    facebook: { maxChars: 63206, maxHashtags: 5 },
    tiktok: { maxChars: 2200, maxHashtags: 20 },
    whatsapp: { maxChars: 1000, maxHashtags: 0 },
    linkedin: { maxChars: 3000, maxHashtags: 10 },
};
let VideoFactoryService = VideoFactoryService_1 = class VideoFactoryService {
    constructor(ai, socialQueue, videoQueue) {
        this.ai = ai;
        this.socialQueue = socialQueue;
        this.videoQueue = videoQueue;
        this.logger = new common_1.Logger(VideoFactoryService_1.name);
    }
    async convertPostToVideo(post, targetPlatforms = ['facebook', 'instagram', 'tiktok']) {
        try {
            const sourceId = String(post._id ?? post.id ?? Date.now());
            const job = await this.socialQueue.add('generate-social-content', {
                sourceId,
                sourceType: 'amebogist',
                post,
                targetPlatforms,
            }, {
                attempts: 3,
                backoff: { type: 'exponential', delay: 2000 },
                removeOnComplete: { age: 86400 },
                removeOnFail: { age: 86400 * 7 },
            });
            this.logger.log(`Social content job queued: ${job.id} for post ${sourceId}`);
            return {
                sourceId,
                sourceType: 'amebogist',
                platforms: { facebook: null, instagram: null, tiktok: null, twitter: null, whatsapp: null, linkedin: null },
                status: 'queued',
                jobId: job.id,
            };
        }
        catch (err) {
            this.logger.error(`VideoFactory queue error: ${String(err)}`);
            return null;
        }
    }
    async generateSocialContentPackage(post, platforms = ['instagram', 'twitter', 'whatsapp']) {
        const language = post.language ?? 'english';
        const systemPrompt = `You are a Nigerian social media content strategist for AmeboGist.
You create platform-optimized content that resonates with Nigerian tech entrepreneurs, creators, and digital-savvy users.
${language === 'pidgin' ? 'Use Nigerian Pidgin English where specified. Be authentic, energetic, and relatable.' : ''}
Always reference Nigerian context: prices in Naira, local platforms (WhatsApp, etc.), Nigerian examples.`;
        const platformSpecs = platforms.map((p) => {
            const limits = PLATFORM_LIMITS[p];
            return `${p}: max ${limits.maxChars} chars, max ${limits.maxHashtags} hashtags, ${this.getPlatformTone(p, language)}`;
        });
        const userMessage = `Convert this article into social media content for Nigerian audiences:

Title: ${post.title}
Excerpt: ${post.excerpt ?? post.content.slice(0, 300)}
Tags: ${post.tags?.join(', ') ?? ''}
Language: ${language}

Generate content for these platforms:
${platformSpecs.join('\n')}

Return JSON object with platform keys: ${platforms.join(', ')}
Each value: { caption, hashtags (array), callToAction, imagePrompt (describe ideal image for this post) }
ONLY return the JSON object.`;
        const result = await this.ai.generateJson(systemPrompt, userMessage, { task: 'creative', temperature: 0.8, cacheTtl: 3600 });
        const output = {
            facebook: null, instagram: null, tiktok: null, twitter: null, whatsapp: null, linkedin: null,
        };
        for (const platform of platforms) {
            const content = result.content[platform];
            if (content) {
                const limits = PLATFORM_LIMITS[platform];
                output[platform] = {
                    caption: (content.caption ?? '').slice(0, limits.maxChars),
                    hashtags: (content.hashtags ?? []).slice(0, limits.maxHashtags),
                    callToAction: content.callToAction ?? 'Read more on AmeboGist 👉',
                    imagePrompt: content.imagePrompt,
                    characterCount: (content.caption ?? '').length,
                };
            }
        }
        return output;
    }
    async generateWhatsAppBroadcast(post) {
        const language = post.language ?? 'pidgin';
        const result = await this.ai.chat(`You write viral WhatsApp broadcast messages for Nigerian audiences.
       ${language === 'pidgin' ? 'Write in Nigerian Pidgin English.' : ''}
       Messages should be short (max 500 chars), engaging, drive clicks.
       Use emojis sparingly but effectively. No hashtags for WhatsApp.`, `Create a WhatsApp broadcast message for this article:
Title: ${post.title}
Excerpt: ${post.excerpt ?? post.content.slice(0, 200)}

Message should: tease the content, create FOMO, include a CTA.
Return ONLY the message text.`, { task: 'creative', temperature: 0.85 });
        return {
            message: result.content.slice(0, 1000),
            imageUrl: post.media?.featuredImage,
            ctaUrl: `https://amebogist.boldmind.ng/articles/${post._id ?? post.id}`,
            ctaText: language === 'pidgin' ? 'Read am here 👇' : 'Read the full story 👇',
        };
    }
    async scheduleContentDistribution(params) {
        const delay = Math.max(0, params.publishAt.getTime() - Date.now());
        const jobIds = [];
        for (const platform of params.platforms) {
            const platformContent = params.content[platform];
            if (!platformContent)
                continue;
            const job = await this.socialQueue.add('publish-to-platform', {
                postId: params.postId,
                platform,
                content: platformContent,
                scheduledFor: params.publishAt.toISOString(),
            }, {
                delay,
                attempts: 3,
                backoff: { type: 'exponential', delay: 5000 },
            });
            jobIds.push(job.id ?? '');
            this.logger.log(`Scheduled ${platform} post for ${params.publishAt.toISOString()} (job: ${job.id})`);
        }
        return jobIds;
    }
    async getJobStatus(jobId) {
        const job = await this.socialQueue.getJob(jobId);
        if (!job)
            return { status: 'not_found' };
        const state = await job.getState();
        return {
            status: state,
            progress: job.progress,
            result: job.returnvalue,
            error: job.failedReason,
        };
    }
    async generateAndUploadImage(params) {
        try {
            const format = this.getPlatformImageFormat(params.platform);
            const imageResult = await this.ai.generateSocialImage(params.imagePrompt, format);
            if (imageResult.url)
                return imageResult.url;
            if (imageResult.data) {
                this.logger.warn('R2 upload not implemented — returning null');
                return null;
            }
            return null;
        }
        catch (err) {
            this.logger.error(`Image gen failed: ${String(err)}`);
            return null;
        }
    }
    getPlatformTone(platform, language) {
        const tones = {
            twitter: 'punchy, witty, conversational, news-hook style',
            instagram: 'visual-first, storytelling caption, lifestyle-adjacent',
            tiktok: `${language === 'pidgin' ? 'Gen-Z Pidgin vibes, ' : ''}trendy, educational hooks`,
            facebook: 'community-building, shareable, discussion-starter',
            whatsapp: 'personal, broadcast-ready, action-oriented',
            linkedin: 'professional, thought-leadership, business case',
        };
        return tones[platform] ?? 'engaging, Nigerian-market-aware';
    }
    getPlatformImageFormat(platform) {
        const formats = {
            instagram: 'square',
            tiktok: 'portrait',
            facebook: 'landscape',
            twitter: 'landscape',
            whatsapp: 'whatsapp-flyer',
            linkedin: 'landscape',
        };
        return formats[platform] ?? 'square';
    }
};
exports.VideoFactoryService = VideoFactoryService;
exports.VideoFactoryService = VideoFactoryService = VideoFactoryService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, bullmq_1.InjectQueue)('social-factory')),
    __param(2, (0, bullmq_1.InjectQueue)('video-render')),
    __metadata("design:paramtypes", [ai_service_1.AiService,
        bullmq_2.Queue,
        bullmq_2.Queue])
], VideoFactoryService);
//# sourceMappingURL=video-factory.service.js.map