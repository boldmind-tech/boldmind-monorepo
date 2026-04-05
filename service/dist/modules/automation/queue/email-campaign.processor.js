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
var EmailCampaignProcessor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailCampaignProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const resend_1 = require("resend");
const config_1 = require("@nestjs/config");
let EmailCampaignProcessor = EmailCampaignProcessor_1 = class EmailCampaignProcessor {
    constructor(config) {
        this.config = config;
        this.logger = new common_1.Logger(EmailCampaignProcessor_1.name);
        this.resend = new resend_1.Resend(config.get('RESEND_API_KEY'));
        this.FROM_EMAIL = config.get('FROM_EMAIL', 'hello@boldmind.ng');
    }
    async handleEmailBatch(job) {
        const { subject, htmlBody, recipients } = job.data;
        this.logger.log(`Sending email batch: ${recipients.length} recipients`);
        let sent = 0;
        let failed = 0;
        for (const email of recipients) {
            try {
                await this.resend.emails.send({
                    from: `BoldMind <${this.FROM_EMAIL}>`,
                    to: email,
                    subject,
                    html: htmlBody,
                });
                sent++;
                await new Promise((r) => setTimeout(r, 100));
            }
            catch (err) {
                this.logger.warn(`Email failed to ${email}:`, err.message);
                failed++;
            }
        }
        this.logger.log(`Batch complete: ${sent} sent, ${failed} failed`);
        return { sent, failed };
    }
    async handleExpiryReminder(job) {
        const { email, name, productSlug, expiresAt } = job.data;
        const daysLeft = Math.ceil((new Date(expiresAt).getTime() - Date.now()) / 86400000);
        await this.resend.emails.send({
            from: `BoldMind <${this.FROM_EMAIL}>`,
            to: email,
            subject: `⚠️ Your ${productSlug} subscription expires in ${daysLeft} days`,
            html: `
        <h2>Hi ${name},</h2>
        <p>Your <strong>${productSlug}</strong> subscription expires in <strong>${daysLeft} days</strong>.</p>
        <p>Renew now to keep your access without interruption.</p>
        <p>
          <a href="https://boldmind.ng/dashboard/subscriptions" 
             style="background:#4F46E5;color:white;padding:12px 24px;border-radius:6px;text-decoration:none;">
            Renew Subscription →
          </a>
        </p>
        <p style="color:#6B7280;font-size:14px;">The BoldMind Team</p>
      `,
        });
    }
};
exports.EmailCampaignProcessor = EmailCampaignProcessor;
__decorate([
    (0, bull_1.Process)('send-batch'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmailCampaignProcessor.prototype, "handleEmailBatch", null);
__decorate([
    (0, bull_1.Process)('expiry-reminder'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmailCampaignProcessor.prototype, "handleExpiryReminder", null);
exports.EmailCampaignProcessor = EmailCampaignProcessor = EmailCampaignProcessor_1 = __decorate([
    (0, bull_1.Processor)('email-campaigns'),
    __metadata("design:paramtypes", [config_1.ConfigService])
], EmailCampaignProcessor);
//# sourceMappingURL=email-campaign.processor.js.map