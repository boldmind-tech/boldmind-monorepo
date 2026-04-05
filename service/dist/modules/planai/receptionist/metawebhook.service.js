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
var MetaWebhookService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaWebhookService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
const bullmq_1 = require("@nestjs/bullmq");
const bullmq_2 = require("bullmq");
const rxjs_1 = require("rxjs");
const crypto = require("crypto");
const prisma_service_1 = require("../../../database/prisma.service");
const redis_service_1 = require("../../../database/redis.service");
let MetaWebhookService = MetaWebhookService_1 = class MetaWebhookService {
    constructor(config, http, prisma, redis, receptionistQueue) {
        this.config = config;
        this.http = http;
        this.prisma = prisma;
        this.redis = redis;
        this.receptionistQueue = receptionistQueue;
        this.logger = new common_1.Logger(MetaWebhookService_1.name);
        this.waApiVersion = 'v19.0';
        this.verifyToken = this.config.get('META_WEBHOOK_VERIFY_TOKEN');
        this.appSecret = this.config.get('META_APP_SECRET');
        this.waToken = this.config.get('META_WHATSAPP_TOKEN');
    }
    verifyWebhook(mode, token, challenge) {
        if (mode === 'subscribe' && token === this.verifyToken) {
            this.logger.log('Meta webhook verified successfully');
            return challenge;
        }
        throw new common_1.UnauthorizedException('Webhook verification failed');
    }
    validateSignature(rawBody, signature) {
        const expected = `sha256=${crypto
            .createHmac('sha256', this.appSecret)
            .update(rawBody)
            .digest('hex')}`;
        return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
    }
    async processWebhook(payload, rawBody, signature) {
        if (!this.validateSignature(rawBody, signature)) {
            throw new common_1.UnauthorizedException('Invalid webhook signature');
        }
        for (const entry of payload.entry) {
            for (const change of entry.changes) {
                if (change.field === 'messages') {
                    await this.handleMessagesChange(change.value);
                }
            }
        }
        return { status: 'ok' };
    }
    async handleMessagesChange(value) {
        if (!value.messages?.length)
            return;
        for (const msg of value.messages) {
            const contact = value.contacts?.find(c => c.wa_id === msg.from);
            const senderName = contact?.profile?.name ?? 'Unknown';
            const dedupKey = `meta:msg:${msg.id}`;
            const seen = await this.redis.get(dedupKey);
            if (seen)
                continue;
            await this.redis.set(dedupKey, '1', 3600);
            this.logger.log(`Incoming WA message from ${msg.from} (${senderName}): type=${msg.type}`);
            await this.receptionistQueue.add('process-inbound', {
                phoneNumberId: value.metadata.phone_number_id,
                from: msg.from,
                senderName,
                message: msg,
            }, { attempts: 3, backoff: { type: 'exponential', delay: 2000 } });
            await this.upsertConversation(msg.from, senderName, msg);
        }
        if (value.statuses?.length) {
            await this.handleStatuses(value.statuses);
        }
    }
    async sendTextMessage(phoneNumberId, to, text) {
        const url = `https://graph.facebook.com/${this.waApiVersion}/${phoneNumberId}/messages`;
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.http.post(url, {
                messaging_product: 'whatsapp',
                recipient_type: 'individual',
                to,
                type: 'text',
                text: { preview_url: false, body: text },
            }, { headers: { Authorization: `Bearer ${this.waToken}` } }));
            return data;
        }
        catch (err) {
            this.logger.error(`Failed to send WA message to ${to}`, err?.response?.data);
            throw err;
        }
    }
    async sendTemplateMessage(phoneNumberId, to, templateName, langCode, components) {
        const url = `https://graph.facebook.com/${this.waApiVersion}/${phoneNumberId}/messages`;
        const { data } = await (0, rxjs_1.firstValueFrom)(this.http.post(url, {
            messaging_product: 'whatsapp',
            to,
            type: 'template',
            template: { name: templateName, language: { code: langCode }, components },
        }, { headers: { Authorization: `Bearer ${this.waToken}` } }));
        return data;
    }
    async sendInteractiveButtons(phoneNumberId, to, bodyText, buttons) {
        const url = `https://graph.facebook.com/${this.waApiVersion}/${phoneNumberId}/messages`;
        const { data } = await (0, rxjs_1.firstValueFrom)(this.http.post(url, {
            messaging_product: 'whatsapp',
            to,
            type: 'interactive',
            interactive: {
                type: 'button',
                body: { text: bodyText },
                action: {
                    buttons: buttons.map(b => ({ type: 'reply', reply: { id: b.id, title: b.title } })),
                },
            },
        }, { headers: { Authorization: `Bearer ${this.waToken}` } }));
        return data;
    }
    async sendMessengerMessage(recipientId, text, accessToken) {
        const url = `https://graph.facebook.com/${this.waApiVersion}/me/messages`;
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.http.post(url, {
                recipient: { id: recipientId },
                message: { text },
            }, { params: { access_token: accessToken } }));
            return data;
        }
        catch (err) {
            this.logger.error(`Failed to send Messenger message to ${recipientId}`, err?.response?.data);
            throw err;
        }
    }
    async replyToComment(commentId, message, accessToken) {
        const url = `https://graph.facebook.com/${this.waApiVersion}/${commentId}/comments`;
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.http.post(url, { message }, { params: { access_token: accessToken } }));
            return data;
        }
        catch (err) {
            this.logger.error(`Failed to reply to comment ${commentId}`, err?.response?.data);
            throw err;
        }
    }
    async sendInstagramMessage(recipientId, text, accessToken) {
        const url = `https://graph.facebook.com/${this.waApiVersion}/me/messages`;
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.http.post(url, {
                recipient: { id: recipientId },
                message: { text },
            }, { params: { access_token: accessToken } }));
            return data;
        }
        catch (err) {
            this.logger.error(`Failed to send Instagram message to ${recipientId}`, err?.response?.data);
            throw err;
        }
    }
    async sendWhatsAppMessage(to, text, phoneNumberId, accessToken) {
        const url = `https://graph.facebook.com/${this.waApiVersion}/${phoneNumberId}/messages`;
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.http.post(url, {
                messaging_product: 'whatsapp',
                recipient_type: 'individual',
                to,
                type: 'text',
                text: { preview_url: false, body: text },
            }, { headers: { Authorization: `Bearer ${accessToken}` } }));
            return data;
        }
        catch (err) {
            this.logger.error(`Failed to send WhatsApp message to ${to}`, err?.response?.data);
            throw err;
        }
    }
    async downloadMediaUrl(mediaId) {
        const urlRes = await (0, rxjs_1.firstValueFrom)(this.http.get(`https://graph.facebook.com/${this.waApiVersion}/${mediaId}`, {
            headers: { Authorization: `Bearer ${this.waToken}` },
        }));
        return urlRes.data.url;
    }
    async upsertConversation(from, name, msg) {
        const existing = await this.prisma.conversationLog.findFirst({
            where: { senderPhone: from, status: 'ACTIVE' },
            orderBy: { createdAt: 'desc' },
        });
        const newEntry = {
            id: msg.id,
            type: msg.type,
            body: msg.text?.body ?? `[${msg.type}]`,
            timestamp: new Date(Number(msg.timestamp) * 1000).toISOString(),
            direction: 'inbound',
        };
        if (existing) {
            const messages = Array.isArray(existing.messages) ? existing.messages : [];
            await this.prisma.conversationLog.update({
                where: { id: existing.id },
                data: {
                    senderName: name,
                    messages: [...messages, newEntry],
                    updatedAt: new Date(),
                },
            });
        }
        else {
            const client = await this.prisma.receptionistClient.findFirst({
                where: { whatsappNumber: from },
            });
            if (!client) {
                this.logger.warn(`No ReceptionistClient found for phone ${from}; skipping conversation log.`);
                return;
            }
            await this.prisma.conversationLog.create({
                data: {
                    clientId: client.id,
                    platform: 'WHATSAPP',
                    externalId: msg.id,
                    senderName: name,
                    senderPhone: from,
                    messages: [newEntry],
                    status: 'ACTIVE',
                },
            });
        }
    }
    async handleStatuses(statuses) {
        for (const s of statuses) {
            try {
                const conv = await this.prisma.conversationLog.findFirst({
                    where: { externalId: s.id },
                });
                if (!conv)
                    continue;
                const messages = Array.isArray(conv.messages) ? conv.messages : [];
                const updated = messages.map((m) => m.id === s.id ? { ...m, deliveryStatus: s.status } : m);
                await this.prisma.conversationLog.update({
                    where: { id: conv.id },
                    data: { messages: updated, updatedAt: new Date() },
                });
            }
            catch {
            }
        }
    }
};
exports.MetaWebhookService = MetaWebhookService;
exports.MetaWebhookService = MetaWebhookService = MetaWebhookService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(4, (0, bullmq_1.InjectQueue)('receptionist')),
    __metadata("design:paramtypes", [config_1.ConfigService,
        axios_1.HttpService,
        prisma_service_1.PrismaService,
        redis_service_1.RedisService,
        bullmq_2.Queue])
], MetaWebhookService);
//# sourceMappingURL=metawebhook.service.js.map