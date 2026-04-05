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
var NotificationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const bullmq_1 = require("@nestjs/bullmq");
const bullmq_2 = require("bullmq");
const resend_1 = require("resend");
const webpush = require("web-push");
const prisma_service_1 = require("../../database/prisma.service");
const metawebhook_service_1 = require("../planai/receptionist/metawebhook.service");
const client_1 = require("@prisma/client");
let NotificationService = NotificationService_1 = class NotificationService {
    constructor(config, prisma, metaWebhook, notifQueue) {
        this.config = config;
        this.prisma = prisma;
        this.metaWebhook = metaWebhook;
        this.notifQueue = notifQueue;
        this.logger = new common_1.Logger(NotificationService_1.name);
        this.resend = new resend_1.Resend(this.config.get('RESEND_API_KEY'));
        this.fromEmail = this.config.get('RESEND_FROM_EMAIL', 'hello@boldmind.ng');
        webpush.setVapidDetails(`mailto:${this.fromEmail}`, this.config.get('VAPID_PUBLIC_KEY'), this.config.get('VAPID_PRIVATE_KEY'));
    }
    async sendEmail(dto) {
        try {
            const result = await this.resend.emails.send({
                from: dto.from ?? this.fromEmail,
                to: Array.isArray(dto.to) ? dto.to : [dto.to],
                subject: dto.subject,
                html: dto.html,
                text: dto.text,
                replyTo: dto.replyTo,
                tags: dto.tags,
            });
            await this.logNotification({
                userId: dto.userId,
                type: client_1.NotificationType.EMAIL,
                title: dto.subject,
                body: dto.text ?? dto.subject,
                meta: { resendId: result.data?.id, to: dto.to },
            });
            return result;
        }
        catch (err) {
            this.logger.error('Resend email failed', err);
            throw err;
        }
    }
    async sendWelcomeEmail(userId, name, email) {
        return this.sendEmail({
            userId,
            to: email,
            subject: `Welcome to BoldMind, ${name}! 🚀`,
            html: this.buildWelcomeTemplate(name),
            text: `Welcome to BoldMind, ${name}! Your account is ready.`,
        });
    }
    async sendPasswordResetEmail(email, resetUrl) {
        return this.sendEmail({
            to: email,
            subject: 'Reset Your BoldMind Password',
            html: this.buildPasswordResetTemplate(resetUrl),
            text: `Reset your password here: ${resetUrl}`,
        });
    }
    async sendOtpEmail(email, otp) {
        return this.sendEmail({
            to: email,
            subject: 'Your BoldMind OTP Code',
            html: `<p>Your one-time code is: <strong>${otp}</strong>. It expires in 10 minutes.</p>`,
            text: `Your OTP is ${otp}. Expires in 10 minutes.`,
        });
    }
    async sendPaymentReceiptEmail(userId, email, amount, plan) {
        return this.sendEmail({
            userId,
            to: email,
            subject: `Payment Confirmed — ${plan} Plan`,
            html: this.buildReceiptTemplate(amount, plan),
            text: `Payment of ₦${amount.toLocaleString()} confirmed for ${plan} plan.`,
        });
    }
    async sendWhatsapp(phoneNumberId, to, message) {
        try {
            const result = await this.metaWebhook.sendTextMessage(phoneNumberId, to, message);
            await this.logNotification({
                type: client_1.NotificationType.WHATSAPP,
                title: 'WhatsApp Message',
                body: message,
                meta: { to, result },
            });
            return result;
        }
        catch (err) {
            this.logger.error(`WhatsApp send failed to ${to}`, err);
            throw err;
        }
    }
    async subscribePush(userId, subscription, deviceLabel) {
        return this.prisma.pushSubscription.upsert({
            where: { endpoint: subscription.endpoint },
            create: { userId, endpoint: subscription.endpoint, keys: subscription.keys, deviceLabel },
            update: { userId, keys: subscription.keys },
        });
    }
    async unsubscribePush(endpoint) {
        await this.prisma.pushSubscription.deleteMany({ where: { endpoint } });
    }
    async sendPushToUser(userId, dto) {
        const subs = await this.prisma.pushSubscription.findMany({ where: { userId } });
        if (!subs.length)
            return { sent: 0 };
        const payload = JSON.stringify({
            title: dto.title,
            body: dto.body,
            icon: dto.icon ?? '/icons/icon-192.png',
            badge: '/icons/badge-72.png',
            data: dto.data,
            url: dto.url,
        });
        const results = await Promise.allSettled(subs.map(sub => webpush.sendNotification({ endpoint: sub.endpoint, keys: sub.keys }, payload)));
        for (let i = 0; i < results.length; i++) {
            const r = results[i];
            if (r.status === 'rejected') {
                const err = r.reason;
                if (err?.statusCode === 410 || err?.statusCode === 404) {
                    await this.prisma.pushSubscription.deleteMany({ where: { endpoint: subs[i].endpoint } });
                }
            }
        }
        await this.logNotification({
            userId,
            type: client_1.NotificationType.PUSH,
            title: dto.title,
            body: dto.body,
        });
        const sent = results.filter(r => r.status === 'fulfilled').length;
        return { sent, total: subs.length };
    }
    async broadcastToAll(dto) {
        await this.notifQueue.add('broadcast-push', dto, {
            attempts: 2,
            backoff: { type: 'fixed', delay: 5000 },
        });
        return { message: 'Broadcast queued' };
    }
    async broadcastEmail(subject, html, segment) {
        await this.notifQueue.add('broadcast-email', { subject, html, segment: segment ?? 'all' }, { attempts: 3, backoff: { type: 'exponential', delay: 3000 } });
        return { message: 'Email broadcast queued' };
    }
    async getUserNotifications(userId, page = 1, limit = 20) {
        const skip = (page - 1) * limit;
        const [data, total, unread] = await this.prisma.$transaction([
            this.prisma.notification.findMany({
                where: { userId },
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit,
            }),
            this.prisma.notification.count({ where: { userId } }),
            this.prisma.notification.count({ where: { userId, read: false } }),
        ]);
        return { data, meta: { total, page, limit, pages: Math.ceil(total / limit) }, unread };
    }
    async markAsRead(userId, notificationIds) {
        const where = { userId };
        if (notificationIds?.length)
            where.id = { in: notificationIds };
        await this.prisma.notification.updateMany({ where, data: { read: true, readAt: new Date() } });
        return { message: 'Marked as read' };
    }
    async deleteNotification(userId, id) {
        await this.prisma.notification.deleteMany({ where: { id, userId } });
        return { message: 'Deleted' };
    }
    async logNotification(data) {
        try {
            if (data.userId) {
                await this.prisma.notification.create({
                    data: {
                        userId: data.userId,
                        type: data.type,
                        title: data.title,
                        body: data.body,
                        meta: data.meta ?? {},
                    },
                });
            }
        }
        catch (e) {
            this.logger.warn('Failed to log notification', e);
        }
    }
    buildWelcomeTemplate(name) {
        return `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px">
        <h1 style="color:#6d28d9">Welcome to BoldMind, ${name}! 🚀</h1>
        <p>Your account is ready. Start exploring our suite of AI-powered tools.</p>
        <a href="https://boldmind.ng/dashboard" style="background:#6d28d9;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;display:inline-block;margin-top:16px">
          Go to Dashboard
        </a>
        <p style="color:#6b7280;margin-top:24px;font-size:13px">BoldMind · Lagos, Nigeria</p>
      </div>`;
    }
    buildPasswordResetTemplate(url) {
        return `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px">
        <h2>Reset Your Password</h2>
        <p>Click the button below to reset your BoldMind password. This link expires in 1 hour.</p>
        <a href="${url}" style="background:#dc2626;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;display:inline-block;margin-top:16px">
          Reset Password
        </a>
        <p style="color:#6b7280;font-size:13px;margin-top:16px">If you didn't request this, ignore this email.</p>
      </div>`;
    }
    buildReceiptTemplate(amount, plan) {
        return `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px">
        <h2>Payment Confirmed ✅</h2>
        <p>Your <strong>${plan}</strong> plan is now active.</p>
        <table style="width:100%;border-collapse:collapse;margin-top:16px">
          <tr><td style="padding:8px;border-bottom:1px solid #e5e7eb">Amount</td><td>₦${amount.toLocaleString()}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #e5e7eb">Plan</td><td>${plan}</td></tr>
          <tr><td style="padding:8px">Date</td><td>${new Date().toLocaleDateString()}</td></tr>
        </table>
        <a href="https://boldmind.ng/dashboard" style="background:#6d28d9;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;display:inline-block;margin-top:24px">
          View Dashboard
        </a>
      </div>`;
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = NotificationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, bullmq_1.InjectQueue)('notifications')),
    __metadata("design:paramtypes", [config_1.ConfigService,
        prisma_service_1.PrismaService,
        metawebhook_service_1.MetaWebhookService,
        bullmq_2.Queue])
], NotificationService);
//# sourceMappingURL=notification.service.js.map