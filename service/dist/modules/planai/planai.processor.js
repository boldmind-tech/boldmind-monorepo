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
var PlanAIProcessor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanAIProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let PlanAIProcessor = PlanAIProcessor_1 = class PlanAIProcessor {
    constructor(prisma) {
        this.prisma = prisma;
        this.logger = new common_1.Logger(PlanAIProcessor_1.name);
    }
    async handlePlanAIJob(job) {
        const { jobId } = job.data;
        const start = Date.now();
        await this.prisma.planAIJob.update({
            where: { id: jobId },
            data: { status: 'PROCESSING', bullJobId: String(job.id) },
        });
        try {
            const processingMs = Date.now() - start;
            await this.prisma.planAIJob.update({
                where: { id: jobId },
                data: { status: 'COMPLETED', processingMs },
            });
            this.logger.log(`PlanAI job ${jobId} completed in ${processingMs}ms`);
        }
        catch (err) {
            this.logger.error(`PlanAI job ${jobId} failed:`, err.message);
            await this.prisma.planAIJob.update({
                where: { id: jobId },
                data: { status: 'FAILED', errorMessage: err.message },
            });
            throw err;
        }
    }
};
exports.PlanAIProcessor = PlanAIProcessor;
__decorate([
    (0, bull_1.Process)('process'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlanAIProcessor.prototype, "handlePlanAIJob", null);
exports.PlanAIProcessor = PlanAIProcessor = PlanAIProcessor_1 = __decorate([
    (0, bull_1.Processor)('planai-jobs'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PlanAIProcessor);
//# sourceMappingURL=planai.processor.js.map