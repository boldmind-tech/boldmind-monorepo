"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SocialFactoryProcessor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialFactoryProcessor = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const common_1 = require("@nestjs/common");
let SocialFactoryProcessor = SocialFactoryProcessor_1 = class SocialFactoryProcessor extends bullmq_1.WorkerHost {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger(SocialFactoryProcessor_1.name);
    }
    async process(job) {
        this.logger.log(`Processing social-factory job: ${job.name} (${job.id})`);
        switch (job.name) {
            case 'generate-social-content':
                return this.handleGenerateSocialContent(job);
            case 'publish-to-platform':
                return this.handlePublishToPlatform(job);
            default:
                this.logger.warn(`Unknown job: ${job.name}`);
                return null;
        }
    }
    async handleGenerateSocialContent(job) {
        const { sourceId, post, targetPlatforms } = job.data;
        this.logger.log(`Generating social content for post ${sourceId} → ${targetPlatforms.join(', ')}`);
        await job.updateProgress(50);
        await new Promise((r) => setTimeout(r, 1000));
        await job.updateProgress(100);
        return { sourceId, platforms: targetPlatforms, status: 'generated' };
    }
    async handlePublishToPlatform(job) {
        const { postId, platform, content } = job.data;
        this.logger.log(`Publishing post ${postId} to ${platform}`);
        return { postId, platform, publishedAt: new Date().toISOString() };
    }
};
exports.SocialFactoryProcessor = SocialFactoryProcessor;
exports.SocialFactoryProcessor = SocialFactoryProcessor = SocialFactoryProcessor_1 = __decorate([
    (0, bullmq_1.Processor)('social-factory')
], SocialFactoryProcessor);
//# sourceMappingURL=social-factory.processor.js.map