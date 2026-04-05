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
var AIJobsProcessor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIJobsProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let AIJobsProcessor = AIJobsProcessor_1 = class AIJobsProcessor {
    constructor() {
        this.logger = new common_1.Logger(AIJobsProcessor_1.name);
    }
    async handleEmailScrape(job) {
        const { targetUrl, limit = 50 } = job.data;
        this.logger.log(`Email scrape job started for user ${job.data.userId}`);
        const emails = [];
        if (targetUrl) {
            try {
                const { data } = await axios_1.default.get(targetUrl, { timeout: 10000 });
                const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
                const found = data.match(emailRegex) || [];
                emails.push(...found.slice(0, limit));
            }
            catch (err) {
                this.logger.warn(`Scrape failed for ${targetUrl}:`, err.message);
            }
        }
        const disposable = ['mailinator.com', 'tempmail.com', 'guerrillamail.com', 'throwaway.email'];
        const unique = [...new Set(emails)].filter((e) => !disposable.some((d) => e.includes(d)));
        this.logger.log(`Email scrape complete: found ${unique.length} emails`);
        return { emails: unique, count: unique.length };
    }
};
exports.AIJobsProcessor = AIJobsProcessor;
__decorate([
    (0, bull_1.Process)('email-scrape'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AIJobsProcessor.prototype, "handleEmailScrape", null);
exports.AIJobsProcessor = AIJobsProcessor = AIJobsProcessor_1 = __decorate([
    (0, bull_1.Processor)('ai-jobs')
], AIJobsProcessor);
//# sourceMappingURL=ai-jobs.processor.js.map