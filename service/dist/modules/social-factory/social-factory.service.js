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
var SocialFactoryService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialFactoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let SocialFactoryService = SocialFactoryService_1 = class SocialFactoryService {
    constructor(prisma) {
        this.prisma = prisma;
        this.logger = new common_1.Logger(SocialFactoryService_1.name);
    }
    async generatePost(userId, data) {
        this.logger.log(`Generating social post for user ${userId} on ${data.platform}`);
        return {
            content: `Here is an awesome generated post about ${data.topic} tailored for ${data.platform}! 🚀 #BoldMind`,
            platform: data.platform,
            tone: data.tone || 'professional',
        };
    }
    async schedulePost(userId, data) {
        return {
            id: `sched_${Date.now()}`,
            status: 'SCHEDULED',
            ...data,
            message: 'Post successfully scheduled.',
        };
    }
    async getScheduledPosts(userId) {
        return [];
    }
};
exports.SocialFactoryService = SocialFactoryService;
exports.SocialFactoryService = SocialFactoryService = SocialFactoryService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SocialFactoryService);
//# sourceMappingURL=social-factory.service.js.map