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
var EmailScraperService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailScraperService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bullmq_1 = require("bullmq");
const bullmq_2 = require("@nestjs/bullmq");
const config_1 = require("@nestjs/config");
let EmailScraperService = EmailScraperService_1 = class EmailScraperService {
    constructor(emailLeadModel, scrapeJobModel, leadListModel, scrapeQueue, config) {
        this.emailLeadModel = emailLeadModel;
        this.scrapeJobModel = scrapeJobModel;
        this.leadListModel = leadListModel;
        this.scrapeQueue = scrapeQueue;
        this.config = config;
        this.logger = new common_1.Logger(EmailScraperService_1.name);
        this.hunterApiKey = this.config.getOrThrow('HUNTER_IO_API_KEY');
    }
    async searchEmails(dto, userId) {
        const job = await this.scrapeJobModel.create({
            userId, jobType: 'website', status: 'queued', inputData: dto,
        });
        if (dto.domain) {
            const result = await this.searchByDomainHunter(dto.domain, dto.limit ?? 10);
            const savedLeads = await this.saveLeads(result, userId, dto.saveToListId);
            await this.scrapeJobModel.findByIdAndUpdate(job._id, {
                status: 'completed', totalFound: result.length,
                totalValid: savedLeads.filter((l) => l.confidence && l.confidence >= 70).length,
                totalSaved: savedLeads.length, completedAt: new Date(),
            });
            return { jobId: job._id, leads: savedLeads };
        }
        await this.scrapeQueue.add('scrape-directory', { jobId: job._id.toString(), ...dto, userId }, { attempts: 3 });
        return { jobId: job._id, status: 'queued', message: 'Scraping started. Results will be available in your leads list.' };
    }
    async verifyEmail(email) {
        const response = await fetch(`https://api.hunter.io/v2/email-verifier?email=${encodeURIComponent(email)}&api_key=${this.hunterApiKey}`);
        if (!response.ok) {
            return { email, status: 'unknown', error: 'Verification service unavailable', score: undefined };
        }
        const data = await response.json();
        return {
            email,
            status: data.data.status,
            score: data.data.score,
            mxRecords: data.data.mx_records,
            smtpValid: data.data.smtp_check,
            isDisposable: data.data.disposable,
            isWebmail: data.data.webmail,
        };
    }
    async bulkVerify(emails, userId) {
        const results = await Promise.allSettled(emails.map((e) => this.verifyEmail(e)));
        const verified = results.map((r, i) => r.status === 'fulfilled' ? r.value : { email: emails[i], status: 'unknown', score: undefined });
        await Promise.all(verified.map((v) => this.emailLeadModel.updateMany({ userId, email: v.email }, { $set: { verificationStatus: v.status === 'valid' ? 'valid' : v.status === 'invalid' ? 'invalid' : 'unknown', verifiedAt: new Date(), confidence: v.score } })));
        return { total: emails.length, results: verified };
    }
    async getUserLeads(userId, page, listId, status) {
        const limit = 50;
        const filter = { userId };
        if (listId)
            filter['listId'] = listId;
        if (status)
            filter['verificationStatus'] = status;
        const [leads, total] = await Promise.all([
            this.emailLeadModel.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
            this.emailLeadModel.countDocuments(filter),
        ]);
        return { data: leads, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } };
    }
    async exportLeads(userId, listId, format) {
        const filter = { userId };
        if (listId)
            filter['listId'] = listId;
        const leads = await this.emailLeadModel.find(filter).lean();
        if (format === 'json')
            return { leads };
        const headers = ['Email', 'First Name', 'Last Name', 'Title', 'Company', 'Industry', 'Website', 'LinkedIn', 'Phone', 'Location', 'Status', 'Confidence'];
        const rows = leads.map((l) => [
            l.email, l.firstName ?? '', l.lastName ?? '', l.title ?? '', l.company ?? '',
            l.industry ?? '', l.website ?? '', l.linkedinUrl ?? '', l.phone ?? '',
            l.location ?? '', l.verificationStatus, l.confidence ?? '',
        ]);
        const csv = [headers.join(','), ...rows.map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(','))].join('\n');
        return { csv, filename: `leads-export-${Date.now()}.csv` };
    }
    async createList(name, description, userId) {
        return this.leadListModel.create({ userId, name, description });
    }
    async getUserLists(userId) {
        return this.leadListModel.find({ userId }).sort({ createdAt: -1 }).lean();
    }
    async getUserJobs(userId) {
        return this.scrapeJobModel.find({ userId }).sort({ createdAt: -1 }).limit(20).lean();
    }
    async searchByDomainHunter(domain, limit) {
        const response = await fetch(`https://api.hunter.io/v2/domain-search?domain=${encodeURIComponent(domain)}&limit=${limit}&api_key=${this.hunterApiKey}`);
        if (!response.ok) {
            this.logger.warn(`Hunter.io domain search failed for ${domain}`);
            return [];
        }
        const data = await response.json();
        return data.data.emails.map((e) => ({
            email: e.value,
            firstName: e.first_name,
            lastName: e.last_name,
            fullName: [e.first_name, e.last_name].filter(Boolean).join(' '),
            title: e.position,
            company: data.data.organization,
            website: `https://${domain}`,
            linkedinUrl: e.linkedin_url,
            source: 'website',
            confidence: e.confidence,
            verificationStatus: (e.confidence >= 70 ? 'valid' : 'unknown'),
        }));
    }
    async saveLeads(leads, userId, listId) {
        const saved = [];
        for (const lead of leads) {
            try {
                const doc = await this.emailLeadModel.findOneAndUpdate({ userId, email: lead['email'] }, { $setOnInsert: { ...lead, userId, listId: listId ?? undefined, tags: [] } }, { upsert: true, new: true });
                saved.push(doc);
            }
            catch {
            }
        }
        return saved;
    }
};
exports.EmailScraperService = EmailScraperService;
exports.EmailScraperService = EmailScraperService = EmailScraperService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('EmailLead')),
    __param(1, (0, mongoose_1.InjectModel)('ScrapeJob')),
    __param(2, (0, mongoose_1.InjectModel)('LeadList')),
    __param(3, (0, bullmq_2.InjectQueue)('emailscraper')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        bullmq_1.Queue,
        config_1.ConfigService])
], EmailScraperService);
//# sourceMappingURL=emailscraper.service.js.map