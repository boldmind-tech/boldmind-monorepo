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
var ReceptionistService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceptionistService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const event_emitter_1 = require("@nestjs/event-emitter");
const prisma_service_1 = require("../../../database/prisma.service");
const ai_service_1 = require("../../ai/ai.service");
const metawebhook_service_1 = require("./metawebhook.service");
const crypto = require("crypto");
let ReceptionistService = ReceptionistService_1 = class ReceptionistService {
    constructor(prisma, ai, meta, config, eventEmitter) {
        this.prisma = prisma;
        this.ai = ai;
        this.meta = meta;
        this.config = config;
        this.eventEmitter = eventEmitter;
        this.logger = new common_1.Logger(ReceptionistService_1.name);
    }
    verifyWebhook(mode, token, challenge) {
        const verifyToken = this.config.get('META_WEBHOOK_VERIFY_TOKEN');
        if (mode === 'subscribe' && token === verifyToken)
            return challenge;
        throw new common_1.BadRequestException('Webhook verification failed');
    }
    async handleWebhookEvent(signature, body) {
        const appSecret = this.config.get('META_APP_SECRET');
        const hash = crypto.createHmac('sha256', appSecret).update(JSON.stringify(body)).digest('hex');
        if (signature !== `sha256=${hash}`) {
            throw new common_1.BadRequestException('Invalid Meta signature');
        }
        const { object, entry } = body;
        for (const entryItem of entry || []) {
            for (const change of entryItem.changes || []) {
                await this.processChange(object, change, entryItem.id);
            }
            for (const messaging of entryItem.messaging || []) {
                await this.processMessengerEvent(messaging, entryItem.id);
            }
        }
    }
    async processChange(object, change, pageId) {
        if (object === 'instagram' && change.field === 'messages') {
            await this.handleInstagramMessage(change.value, pageId);
        }
        else if (object === 'page' && change.field === 'feed') {
            await this.handleFacebookComment(change.value, pageId);
        }
        else if (object === 'whatsapp_business_account') {
            await this.handleWhatsAppMessage(change.value, pageId);
        }
    }
    async processMessengerEvent(messaging, pageId) {
        if (messaging.message && !messaging.message.is_echo) {
            const client = await this.findClientByPageId(pageId);
            if (!client)
                return;
            const response = await this.generateResponse(client, messaging.message.text || '', messaging.sender.id, 'FACEBOOK_MESSAGE');
            if (response) {
                await this.meta.sendMessengerMessage(messaging.sender.id, response, client.fbPageAccessToken);
            }
        }
    }
    async handleInstagramMessage(value, igId) {
        const client = await this.findClientByIgId(igId);
        if (!client)
            return;
        const messages = value.messages || [];
        for (const message of messages) {
            if (message.is_echo)
                continue;
            const response = await this.generateResponse(client, message.text, message.from.id, 'INSTAGRAM_DM');
            if (response) {
                await this.meta.sendInstagramMessage(message.from.id, response, client.fbPageAccessToken);
            }
        }
    }
    async handleWhatsAppMessage(value, wabaId) {
        const client = await this.findClientByWabaId(wabaId);
        if (!client)
            return;
        const messages = value.messages || [];
        for (const message of messages) {
            if (message.type !== 'text')
                continue;
            const response = await this.generateResponse(client, message.text.body, message.from, 'WHATSAPP');
            if (response && client.whatsappNumber && client.fbPageAccessToken) {
                await this.meta.sendWhatsAppMessage(message.from, response, client.whatsappNumber, client.fbPageAccessToken);
            }
        }
    }
    async handleFacebookComment(value, pageId) {
        if (value.item !== 'comment' || value.verb !== 'add')
            return;
        const client = await this.findClientByPageId(pageId);
        if (!client)
            return;
        const response = await this.generateResponse(client, value.message, value.from.id, 'FACEBOOK_COMMENT');
        if (response) {
            await this.meta.replyToComment(value.comment_id, response, client.fbPageAccessToken);
        }
    }
    async generateResponse(client, messageText, senderId, platform) {
        const history = await this.prisma.conversationLog.findMany({
            where: {
                clientId: client.id,
                OR: [{ senderPhone: senderId }, { senderIgId: senderId }],
            },
            orderBy: { createdAt: 'desc' },
            take: 5,
        });
        const kbContext = JSON.stringify(client.faqData || {});
        const systemPrompt = `You are a helpful AI receptionist for ${client.businessName}.
Tone: friendly and professional.
Business Type: ${client.businessType || 'Nigerian business'}.

Knowledge Base:
${kbContext}

RULES:
1. Only answer based on the knowledge base. 
2. For bookings, ask for name, phone, preferred date.
3. For complaints, acknowledge then escalate if needed.
4. Respond in the same language the customer wrote in.
5. Keep responses under 200 words.
6. If you cannot help, politely say so and offer to connect them with the team.
${client.greetingMessage ? `Greeting: ${client.greetingMessage}` : ''}`;
        let fullSystemPrompt = systemPrompt + '\n\nConversation History:\n';
        for (const h of history.reverse()) {
            const msgArr = Array.isArray(h.messages) ? h.messages : [];
            for (const m of msgArr) {
                if (m.direction === 'inbound')
                    fullSystemPrompt += `User: ${m.body ?? ''}\n`;
                else if (m.direction === 'outbound')
                    fullSystemPrompt += `Assistant: ${m.body ?? ''}\n`;
            }
        }
        const shouldEscalate = (client.escalationTriggers || []).some((trigger) => messageText.toLowerCase().includes(trigger.toLowerCase()));
        const sentiment = await this.ai.analyzeSentiment(messageText);
        const intent = this.classifyIntent(messageText);
        let responseText = null;
        if (!shouldEscalate && sentiment !== 'negative') {
            const { content } = await this.ai.chat(fullSystemPrompt, messageText, { maxTokens: 300, temperature: 0.5 });
            responseText = content;
        }
        const senderPhoneField = platform !== 'INSTAGRAM_DM' ? senderId : undefined;
        const senderIgIdField = platform === 'INSTAGRAM_DM' ? senderId : undefined;
        const existingLog = await this.prisma.conversationLog.findFirst({
            where: {
                clientId: client.id,
                status: 'ACTIVE',
                OR: [{ senderPhone: senderId }, { senderIgId: senderId }],
            },
            orderBy: { createdAt: 'desc' },
        });
        const inboundEntry = { type: 'text', body: messageText, direction: 'inbound', timestamp: new Date().toISOString() };
        const outboundEntry = responseText
            ? { type: 'text', body: responseText, direction: 'outbound', timestamp: new Date().toISOString() }
            : null;
        const newEntries = outboundEntry ? [inboundEntry, outboundEntry] : [inboundEntry];
        let conversationLogId = existingLog?.id;
        if (existingLog) {
            const prev = Array.isArray(existingLog.messages) ? existingLog.messages : [];
            await this.prisma.conversationLog.update({
                where: { id: existingLog.id },
                data: {
                    messages: [...prev, ...newEntries],
                    isEscalated: shouldEscalate || existingLog.isEscalated,
                    sentiment,
                    updatedAt: new Date(),
                },
            });
        }
        else {
            const externalId = `${senderId}-${Date.now()}`;
            const newLog = await this.prisma.conversationLog.create({
                data: {
                    clientId: client.id,
                    platform,
                    externalId,
                    ...(senderPhoneField ? { senderPhone: senderPhoneField } : {}),
                    ...(senderIgIdField ? { senderIgId: senderIgIdField } : {}),
                    messages: newEntries,
                    isEscalated: shouldEscalate,
                    sentiment,
                },
            });
            conversationLogId = newLog.id;
        }
        if (conversationLogId) {
            await this.prisma.leadCapture.upsert({
                where: { conversationId: conversationLogId },
                update: {},
                create: {
                    clientId: client.id,
                    conversationId: conversationLogId,
                    platform,
                    phone: senderPhoneField || null,
                    intent,
                },
            }).catch(() => { });
        }
        if (shouldEscalate) {
            this.eventEmitter.emit('receptionist.escalation', {
                clientId: client.id,
                senderId,
                message: messageText,
                platform,
            });
            return `Thank you for reaching out! A member of our team will be with you shortly. 🙏`;
        }
        return responseText;
    }
    classifyIntent(text) {
        const lower = text.toLowerCase();
        if (/price|cost|how much|fee|charge/.test(lower))
            return 'pricing';
        if (/book|schedule|appointment|time|available/.test(lower))
            return 'booking';
        if (/complaint|bad|terrible|disappointed|wrong/.test(lower))
            return 'complaint';
        if (/refund|return|cancel/.test(lower))
            return 'refund';
        if (/thank|love|great|awesome/.test(lower))
            return 'compliment';
        return 'inquiry';
    }
    async findClientByPageId(pageId) {
        return this.prisma.receptionistClient.findFirst({
            where: { fbPageId: pageId, isActive: true },
        });
    }
    async findClientByIgId(igId) {
        return this.prisma.receptionistClient.findFirst({
            where: { igPageId: igId, isActive: true },
        });
    }
    async findClientByWabaId(wabaId) {
        return this.prisma.receptionistClient.findFirst({
            where: { whatsappNumber: wabaId, isActive: true },
        });
    }
    async createReceptionist(userId, dto) {
        return this.prisma.receptionistClient.create({
            data: { userId, ...dto },
        });
    }
    async getMyReceptionist(userId) {
        return this.prisma.receptionistClient.findFirst({
            where: { userId },
        });
    }
    async updateReceptionist(userId, dto) {
        const client = await this.getMyReceptionist(userId);
        if (!client)
            throw new common_1.BadRequestException('Receptionist config not found');
        return this.prisma.receptionistClient.update({
            where: { id: client.id },
            data: dto,
        });
    }
    async toggleReceptionist(userId) {
        const client = await this.getMyReceptionist(userId);
        if (!client)
            throw new common_1.BadRequestException('Receptionist config not found');
        return this.prisma.receptionistClient.update({
            where: { id: client.id },
            data: { isActive: !client.isActive },
        });
    }
    async getConversations(userId, params) {
        const client = await this.getMyReceptionist(userId);
        if (!client)
            return { data: [], total: 0 };
        const { page, limit, search } = params;
        const skip = (page - 1) * limit;
        const where = {
            clientId: client.id,
            ...(search ? { messageIn: { contains: search, mode: 'insensitive' } } : {}),
        };
        const [data, total] = await Promise.all([
            this.prisma.conversationLog.findMany({
                where: where,
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit,
            }),
            this.prisma.conversationLog.count({ where: where }),
        ]);
        return { data, total, page, limit };
    }
    async getConversationThread(userId, phone) {
        const client = await this.getMyReceptionist(userId);
        if (!client)
            return [];
        return this.prisma.conversationLog.findMany({
            where: {
                clientId: client.id,
                OR: [{ senderPhone: phone }, { senderIgId: phone }],
            },
            orderBy: { createdAt: 'asc' },
        });
    }
    async sendManualReply(userId, phone, message) {
        const client = await this.getMyReceptionist(userId);
        if (!client)
            throw new common_1.BadRequestException('Receptionist config not found');
        const lastMsg = await this.prisma.conversationLog.findFirst({
            where: {
                clientId: client.id,
                OR: [{ senderPhone: phone }, { senderIgId: phone }],
            },
            orderBy: { createdAt: 'desc' },
        });
        const platform = lastMsg?.platform || 'WHATSAPP';
        if (platform === 'WHATSAPP' && client.whatsappNumber) {
            await this.meta.sendWhatsAppMessage(phone, message, client.whatsappNumber, client.fbPageAccessToken);
        }
        else if (platform === 'INSTAGRAM_DM') {
            await this.meta.sendInstagramMessage(phone, message, client.fbPageAccessToken);
        }
        else if (platform === 'FACEBOOK_MESSAGE') {
            await this.meta.sendMessengerMessage(phone, message, client.fbPageAccessToken);
        }
        const existingLog = await this.prisma.conversationLog.findFirst({
            where: {
                clientId: client.id,
                OR: [{ senderPhone: phone }, { senderIgId: phone }],
            },
            orderBy: { createdAt: 'desc' },
        });
        const outboundEntry = { type: 'text', body: message, direction: 'outbound', timestamp: new Date().toISOString() };
        if (existingLog) {
            const prev = Array.isArray(existingLog.messages) ? existingLog.messages : [];
            return this.prisma.conversationLog.update({
                where: { id: existingLog.id },
                data: { messages: [...prev, outboundEntry], updatedAt: new Date() },
            });
        }
        return this.prisma.conversationLog.create({
            data: {
                clientId: client.id,
                platform,
                externalId: `manual-${phone}-${Date.now()}`,
                senderPhone: phone,
                messages: [outboundEntry],
                isEscalated: false,
            },
        });
    }
    async resolveConversation(userId, phone) {
        const client = await this.getMyReceptionist(userId);
        if (!client)
            throw new common_1.BadRequestException('Receptionist config not found');
        try {
            await this.prisma.conversationLog.updateMany({
                where: {
                    clientId: client.id,
                    status: 'ACTIVE',
                    OR: [{ senderPhone: phone }, { senderIgId: phone }],
                },
                data: { status: 'CLOSED', closedAt: new Date() },
            });
            const logs = await this.prisma.conversationLog.findMany({
                where: {
                    clientId: client.id,
                    OR: [{ senderPhone: phone }, { senderIgId: phone }],
                },
                select: { id: true }
            });
            if (logs.length > 0) {
                await this.prisma.leadCapture.updateMany({
                    where: { clientId: client.id, conversationId: { in: logs.map(l => l.id) } },
                    data: { isQualified: true, qualifiedAt: new Date() },
                });
            }
        }
        catch (e) {
        }
        return { success: true, message: 'Conversation resolved' };
    }
    async addKnowledgeEntry(userId, dto) {
        const client = await this.getMyReceptionist(userId);
        if (!client)
            throw new common_1.BadRequestException('Receptionist config not found');
        const kb = client.faqData || [];
        const newEntry = { id: crypto.randomUUID(), ...dto };
        kb.push(newEntry);
        return this.prisma.receptionistClient.update({
            where: { id: client.id },
            data: { faqData: kb },
        });
    }
    async getKnowledge(userId) {
        const client = await this.getMyReceptionist(userId);
        return client?.faqData || [];
    }
    async deleteKnowledgeEntry(userId, entryId) {
        const client = await this.getMyReceptionist(userId);
        if (!client)
            throw new common_1.BadRequestException('Receptionist config not found');
        const kb = client.faqData || [];
        const updatedKb = kb.filter((entry) => entry.id !== entryId);
        return this.prisma.receptionistClient.update({
            where: { id: client.id },
            data: { faqData: updatedKb },
        });
    }
    async getAnalytics(userId) {
        const client = await this.getMyReceptionist(userId);
        if (!client)
            throw new common_1.BadRequestException('Receptionist config not found');
        return this.getClientAnalytics(client.id);
    }
    async getClientAnalytics(clientId) {
        const [totalConversations, leads, sentiment] = await Promise.all([
            this.prisma.conversationLog.count({ where: { clientId } }),
            this.prisma.leadCapture.groupBy({
                by: ['isQualified'],
                where: { clientId },
                _count: true,
            }),
            this.prisma.conversationLog.groupBy({
                by: ['sentiment'],
                where: { clientId },
                _count: true,
            }),
        ]);
        return { totalConversations, leads, sentiment };
    }
    async adminListAll(page, limit) {
        const skip = (page - 1) * limit;
        const [data, total] = await Promise.all([
            this.prisma.receptionistClient.findMany({ skip, take: limit }),
            this.prisma.receptionistClient.count(),
        ]);
        return { data, total, page, limit };
    }
    async adminSuspend(id) {
        return this.prisma.receptionistClient.update({
            where: { id },
            data: { isActive: false },
        });
    }
};
exports.ReceptionistService = ReceptionistService;
exports.ReceptionistService = ReceptionistService = ReceptionistService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        ai_service_1.AiService,
        metawebhook_service_1.MetaWebhookService,
        config_1.ConfigService,
        event_emitter_1.EventEmitter2])
], ReceptionistService);
//# sourceMappingURL=receptionist.service.js.map