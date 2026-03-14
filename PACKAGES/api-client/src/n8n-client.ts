//packages/api-client/src/n8n-client.ts
interface WebhookPayload {
    [key: string]: any;
}

export class N8NClient {
    private baseUrl: string;

    constructor() {
        this.baseUrl = process.env['N8N_WEBHOOK_URL'] || 'https://n8n.boldmind.ng/webhook';
    }

    // AI Receptionist
    async triggerAIReceptionist(data: {
        businessId: string;
        message: string;
        sender: string;
        platform: 'instagram' | 'facebook' | 'whatsapp';
    }) {
        return this.triggerWebhook('ai-receptionist/inbound', data);
    }

    // EduCenter Exam Grading
    async gradeExam(data: {
        examId: string;
        studentId: string;
        answers: Record<string, string>;
    }) {
        return this.triggerWebhook('educenter/grade-exam', data);
    }

    // Social Factory - Generate Video
    async generateVideo(data: {
        topic: string;
        platform: 'tiktok' | 'instagram' | 'youtube';
        voice: 'en-NG' | 'en-US';
    }) {
        return this.triggerWebhook('social-factory/generate', data);
    }

    // EmailScraper Pro
    async findEmails(data: {
        company: string;
        industry: string;
        location: string;
    }) {
        return this.triggerWebhook('emailscraper/search', data);
    }

    // ReceiptGenius
    async generateReceipt(data: {
        businessName: string;
        customerName: string;
        customerEmail: string;
        customerPhone: string;
        items: Array<{ name: string; price: number; quantity: number }>;
    }) {
        return this.triggerWebhook('receiptgenius/create', data);
    }

    // KoloAI - Thrift Contribution
    async recordContribution(data: {
        groupId: string;
        userId: string;
        amount: number;
        paymentReference: string;
    }) {
        return this.triggerWebhook('koloai/payment', data);
    }

    // ============ FACEBOOK MARKETING API ============

    // Campaign Management
    async createFacebookCampaign(data: {
        adAccountId: string;
        name: string;
        objective: 'OUTCOME_TRAFFIC' | 'OUTCOME_ENGAGEMENT' | 'OUTCOME_LEADS' | 'OUTCOME_SALES' | 'OUTCOME_AWARENESS';
        dailyBudget: number;
        status?: 'ACTIVE' | 'PAUSED';
    }) {
        return this.triggerWebhook('facebook/create-campaign', data);
    }

    async updateFacebookCampaign(data: {
        campaignId: string;
        name?: string;
        status?: 'ACTIVE' | 'PAUSED' | 'DELETED';
        dailyBudget?: number;
    }) {
        return this.triggerWebhook('facebook/update-campaign', data);
    }

    // Lead Ads
    async getFacebookLeads(data: {
        formId: string;
        pageId: string;
        limit?: number;
    }) {
        return this.triggerWebhook('facebook/get-leads', data);
    }

    // Conversions API
    async sendFacebookConversion(data: {
        pixelId: string;
        eventName: 'Purchase' | 'Lead' | 'AddToCart' | 'ViewContent' | 'InitiateCheckout';
        eventTime: number;
        userData: {
            email?: string;
            phone?: string;
            firstName?: string;
            lastName?: string;
            city?: string;
            state?: string;
            country?: string;
        };
        customData?: {
            currency: string;
            value: number;
            contentIds?: string[];
            contentType?: string;
        };
        eventSourceUrl?: string;
    }) {
        return this.triggerWebhook('facebook/send-conversion', data);
    }

    // Audience Management
    async createCustomAudience(data: {
        adAccountId: string;
        name: string;
        subtype: 'CUSTOM' | 'WEBSITE' | 'LOOKALIKE';
        description?: string;
        customerFileSource?: 'USER_PROVIDED_ONLY';
    }) {
        return this.triggerWebhook('facebook/create-audience', data);
    }

    async addUsersToAudience(data: {
        audienceId: string;
        users: Array<{
            email?: string;
            phone?: string;
            firstName?: string;
            lastName?: string;
        }>;
    }) {
        return this.triggerWebhook('facebook/add-users-to-audience', data);
    }

    // Ad Insights
    async getFacebookAdInsights(data: {
        adAccountId?: string;
        campaignId?: string;
        adSetId?: string;
        adId?: string;
        timeRange: {
            since: string; // YYYY-MM-DD
            until: string; // YYYY-MM-DD
        };
        fields?: string[];
        level?: 'account' | 'campaign' | 'adset' | 'ad';
    }) {
        return this.triggerWebhook('facebook/get-insights', data);
    }

    // ============ INSTAGRAM API ============

    // Content Publishing
    async publishInstagramPost(data: {
        igUserId: string;
        imageUrl: string;
        caption: string;
        locationId?: string;
    }) {
        return this.triggerWebhook('instagram/publish-post', data);
    }

    async publishInstagramStory(data: {
        igUserId: string;
        imageUrl: string;
    }) {
        return this.triggerWebhook('instagram/publish-story', data);
    }

    async publishInstagramCarousel(data: {
        igUserId: string;
        mediaUrls: string[];
        caption: string;
        locationId?: string;
    }) {
        return this.triggerWebhook('instagram/publish-carousel', data);
    }

    // Engagement
    async replyToInstagramComment(data: {
        commentId: string;
        message: string;
    }) {
        return this.triggerWebhook('instagram/reply-comment', data);
    }

    async hideInstagramComment(data: {
        commentId: string;
        hide: boolean;
    }) {
        return this.triggerWebhook('instagram/hide-comment', data);
    }

    async sendInstagramDM(data: {
        recipientId: string;
        message: string;
    }) {
        return this.triggerWebhook('instagram/send-dm', data);
    }

    // Insights
    async getInstagramAccountInsights(data: {
        igUserId: string;
        metrics: string[];
        period: 'day' | 'week' | 'days_28' | 'lifetime';
        since?: number;
        until?: number;
    }) {
        return this.triggerWebhook('instagram/account-insights', data);
    }

    async getInstagramMediaInsights(data: {
        mediaId: string;
        metrics: string[];
    }) {
        return this.triggerWebhook('instagram/media-insights', data);
    }

    // Discovery
    async searchInstagramHashtag(data: {
        igUserId: string;
        query: string;
    }) {
        return this.triggerWebhook('instagram/hashtag-search', data);
    }

    async getInstagramBusinessDiscovery(data: {
        igUserId: string;
        username: string;
        fields: string[];
    }) {
        return this.triggerWebhook('instagram/business-discovery', data);
    }

    // ============ WHATSAPP BUSINESS API ============

    // Send Messages
    async sendWhatsAppText(data: {
        phoneNumberId: string;
        to: string;
        message: string;
    }) {
        return this.triggerWebhook('whatsapp/send-text', data);
    }

    async sendWhatsAppTemplate(data: {
        phoneNumberId: string;
        to: string;
        templateName: string;
        languageCode: string;
        parameters?: Array<{
            type: 'text';
            text: string;
        }>;
    }) {
        return this.triggerWebhook('whatsapp/send-template', data);
    }

    async sendWhatsAppMedia(data: {
        phoneNumberId: string;
        to: string;
        type: 'image' | 'video' | 'document' | 'audio';
        mediaUrl: string;
        caption?: string;
        filename?: string;
    }) {
        return this.triggerWebhook('whatsapp/send-media', data);
    }

    async sendWhatsAppInteractive(data: {
        phoneNumberId: string;
        to: string;
        type: 'list' | 'button';
        header?: string;
        body: string;
        footer?: string;
        action: {
            button?: string;
            sections?: Array<{
                title: string;
                rows: Array<{
                    id: string;
                    title: string;
                    description?: string;
                }>;
            }>;
            buttons?: Array<{
                type: 'reply';
                reply: {
                    id: string;
                    title: string;
                };
            }>;
        };
    }) {
        return this.triggerWebhook('whatsapp/send-interactive', data);
    }

    async markWhatsAppMessageRead(data: {
        phoneNumberId: string;
        messageId: string;
    }) {
        return this.triggerWebhook('whatsapp/mark-read', data);
    }

    // Business Profile
    async updateWhatsAppProfile(data: {
        phoneNumberId: string;
        about?: string;
        address?: string;
        description?: string;
        email?: string;
        vertical?: string;
        websites?: string[];
    }) {
        return this.triggerWebhook('whatsapp/update-profile', data);
    }

    // ============ MESSENGER PLATFORM API ============

    // Send Messages
    async sendMessengerMessage(data: {
        recipientId: string;
        message: {
            text?: string;
            attachment?: {
                type: 'image' | 'video' | 'audio' | 'file' | 'template';
                payload: any;
            };
            quickReplies?: Array<{
                contentType: 'text';
                title: string;
                payload: string;
            }>;
        };
        messagingType?: 'RESPONSE' | 'UPDATE' | 'MESSAGE_TAG';
        tag?: string;
    }) {
        return this.triggerWebhook('messenger/send-message', data);
    }

    async sendMessengerTemplate(data: {
        recipientId: string;
        templateType: 'generic' | 'button' | 'receipt' | 'media';
        elements?: Array<{
            title: string;
            subtitle?: string;
            imageUrl?: string;
            buttons?: Array<{
                type: 'web_url' | 'postback';
                title: string;
                url?: string;
                payload?: string;
            }>;
        }>;
        text?: string;
        buttons?: Array<{
            type: 'web_url' | 'postback';
            title: string;
            url?: string;
            payload?: string;
        }>;
    }) {
        return this.triggerWebhook('messenger/send-template', data);
    }

    // Messenger Profile
    async setMessengerGetStarted(data: {
        pageId: string;
        payload: string;
    }) {
        return this.triggerWebhook('messenger/set-get-started', data);
    }

    async setMessengerGreeting(data: {
        pageId: string;
        greeting: string;
    }) {
        return this.triggerWebhook('messenger/set-greeting', data);
    }

    async setMessengerMenu(data: {
        pageId: string;
        menuItems: Array<{
            type: 'postback' | 'web_url';
            title: string;
            payload?: string;
            url?: string;
        }>;
    }) {
        return this.triggerWebhook('messenger/set-menu', data);
    }

    // ============ FACEBOOK PAGE API ============

    async createFacebookPost(data: {
        pageId: string;
        message?: string;
        link?: string;
        imageUrl?: string;
        videoUrl?: string;
        published?: boolean;
    }) {
        return this.triggerWebhook('facebook/create-post', data);
    }

    async scheduleFacebookPost(data: {
        pageId: string;
        message: string;
        scheduledPublishTime: number; // Unix timestamp
        link?: string;
        imageUrl?: string;
    }) {
        return this.triggerWebhook('facebook/schedule-post', data);
    }

    async replyToFacebookComment(data: {
        commentId: string;
        message: string;
    }) {
        return this.triggerWebhook('facebook/reply-comment', data);
    }

    async getFacebookPageInsights(data: {
        pageId: string;
        metrics: string[];
        period?: 'day' | 'week' | 'days_28';
        since?: number;
        until?: number;
    }) {
        return this.triggerWebhook('facebook/page-insights', data);
    }

    private async triggerWebhook(path: string, payload: WebhookPayload) {
        try {
            const response = await fetch(`${this.baseUrl}/${path}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            return await response.json();
        } catch (error) {
            console.error(`n8n webhook error (${path}):`, error);
            throw error;
        }
    }
}

export const n8n = new N8NClient();