import crypto from 'crypto';

/**
 * Facebook/Meta Webhook Utilities
 * Utilities for verifying and processing Facebook webhooks
 */

/**
 * Verify Facebook webhook signature
 * @param payload - Raw request body as string
 * @param signature - X-Hub-Signature-256 header value
 * @param appSecret - Facebook App Secret
 * @returns boolean indicating if signature is valid
 */
export function verifyFacebookSignature(
    payload: string,
    signature: string,
    appSecret: string
): boolean {
    const expectedSignature = crypto
        .createHmac('sha256', appSecret)
        .update(payload)
        .digest('hex');

    return `sha256=${expectedSignature}` === signature;
}

/**
 * Verify webhook subscription token
 * @param mode - hub.mode from query params
 * @param token - hub.verify_token from query params
 * @param verifyToken - Your configured verify token
 * @returns boolean indicating if token is valid
 */
export function verifyWebhookToken(
    mode: string,
    token: string,
    verifyToken: string
): boolean {
    return mode === 'subscribe' && token === verifyToken;
}

/**
 * Extract lead data from Facebook Lead Ads webhook
 * @param webhookPayload - Webhook payload from Facebook
 * @returns Extracted lead information
 */
export function extractLeadData(webhookPayload: any) {
    const entry = webhookPayload.entry?.[0];
    if (!entry) return null;

    const change = entry.changes?.[0];
    if (!change || change.field !== 'leadgen') return null;

    return {
        leadId: change.value.leadgen_id,
        formId: change.value.form_id,
        adId: change.value.ad_id,
        pageId: change.value.page_id,
        adGroupId: change.value.adgroup_id,
        createdTime: change.value.created_time,
    };
}

/**
 * Extract message from Messenger webhook
 * @param webhookPayload - Webhook payload from Messenger
 * @returns Extracted message information
 */
export function extractMessengerMessage(webhookPayload: any) {
    if (webhookPayload.object !== 'page') return null;

    const messaging = webhookPayload.entry?.[0]?.messaging?.[0];
    if (!messaging) return null;

    return {
        senderId: messaging.sender?.id,
        recipientId: messaging.recipient?.id,
        timestamp: messaging.timestamp,
        message: messaging.message,
        postback: messaging.postback,
        read: messaging.read,
        delivery: messaging.delivery,
    };
}

/**
 * Extract message from WhatsApp webhook
 * @param webhookPayload - Webhook payload from WhatsApp
 * @returns Extracted message information
 */
export function extractWhatsAppMessage(webhookPayload: any) {
    if (webhookPayload.object !== 'whatsapp_business_account') return null;

    const change = webhookPayload.entry?.[0]?.changes?.[0];
    if (!change || change.field !== 'messages') return null;

    const message = change.value.messages?.[0];
    if (!message) return null;

    const contact = change.value.contacts?.[0];

    return {
        messageId: message.id,
        from: message.from,
        timestamp: message.timestamp,
        type: message.type,
        text: message.text?.body,
        image: message.image,
        document: message.document,
        video: message.video,
        audio: message.audio,
        location: message.location,
        contacts: message.contacts,
        interactive: message.interactive,
        button: message.button,
        context: message.context,
        contactProfile: contact?.profile,
        phoneNumberId: change.value.metadata?.phone_number_id,
        displayPhoneNumber: change.value.metadata?.display_phone_number,
    };
}

/**
 * Extract status update from WhatsApp webhook
 * @param webhookPayload - Webhook payload from WhatsApp
 * @returns Extracted status information
 */
export function extractWhatsAppStatus(webhookPayload: any) {
    if (webhookPayload.object !== 'whatsapp_business_account') return null;

    const change = webhookPayload.entry?.[0]?.changes?.[0];
    if (!change || change.field !== 'messages') return null;

    const status = change.value.statuses?.[0];
    if (!status) return null;

    return {
        messageId: status.id,
        status: status.status, // sent, delivered, read, failed
        timestamp: status.timestamp,
        recipientId: status.recipient_id,
        conversation: status.conversation,
        pricing: status.pricing,
        errors: status.errors,
    };
}

/**
 * Extract comment from Instagram webhook
 * @param webhookPayload - Webhook payload from Instagram
 * @returns Extracted comment information
 */
export function extractInstagramComment(webhookPayload: any) {
    const change = webhookPayload.entry?.[0]?.changes?.[0];
    if (!change || change.field !== 'comments') return null;

    return {
        commentId: change.value.id,
        mediaId: change.value.media?.id,
        mediaProductType: change.value.media?.media_product_type,
        text: change.value.text,
        fromId: change.value.from?.id,
        fromUsername: change.value.from?.username,
        parentId: change.value.parent_id,
    };
}

/**
 * Extract mention from Instagram webhook
 * @param webhookPayload - Webhook payload from Instagram
 * @returns Extracted mention information
 */
export function extractInstagramMention(webhookPayload: any) {
    const change = webhookPayload.entry?.[0]?.changes?.[0];
    if (!change || change.field !== 'mentions') return null;

    return {
        commentId: change.value.comment_id,
        mediaId: change.value.media_id,
        text: change.value.text,
    };
}

/**
 * Extract message from Instagram webhook
 * @param webhookPayload - Webhook payload from Instagram
 * @returns Extracted message information
 */
export function extractInstagramMessage(webhookPayload: any) {
    if (webhookPayload.object !== 'instagram') return null;

    const messaging = webhookPayload.entry?.[0]?.messaging?.[0];
    if (!messaging) return null;

    return {
        senderId: messaging.sender?.id,
        recipientId: messaging.recipient?.id,
        timestamp: messaging.timestamp,
        message: messaging.message,
        postback: messaging.postback,
        reaction: messaging.reaction,
    };
}

/**
 * Extract Facebook Page post from webhook
 * @param webhookPayload - Webhook payload from Facebook Page
 * @returns Extracted post information
 */
export function extractFacebookPagePost(webhookPayload: any) {
    if (webhookPayload.object !== 'page') return null;

    const change = webhookPayload.entry?.[0]?.changes?.[0];
    if (!change || change.field !== 'feed') return null;

    return {
        postId: change.value.post_id,
        verb: change.value.verb, // add, edited, remove
        createdTime: change.value.created_time,
        message: change.value.message,
        from: change.value.from,
        link: change.value.link,
        photoId: change.value.photo_id,
        videoId: change.value.video_id,
    };
}

/**
 * Extract Facebook Page comment from webhook
 * @param webhookPayload - Webhook payload from Facebook Page
 * @returns Extracted comment information
 */
export function extractFacebookPageComment(webhookPayload: any) {
    if (webhookPayload.object !== 'page') return null;

    const change = webhookPayload.entry?.[0]?.changes?.[0];
    if (!change || change.field !== 'feed') return null;

    return {
        commentId: change.value.comment_id,
        postId: change.value.post_id,
        parentId: change.value.parent_id,
        verb: change.value.verb, // add, edited, remove
        createdTime: change.value.created_time,
        message: change.value.message,
        from: change.value.from,
    };
}

/**
 * Hash user data for Facebook Conversions API
 * @param data - User data to hash
 * @returns Hashed user data
 */
export function hashUserData(data: {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    gender?: string;
    dateOfBirth?: string;
}) {
    const hash = (value: string) => {
        return crypto
            .createHash('sha256')
            .update(value.toLowerCase().trim())
            .digest('hex');
    };

    const hashed: any = {};

    if (data.email) hashed.em = hash(data.email);
    if (data.phone) hashed.ph = hash(data.phone.replace(/\D/g, ''));
    if (data.firstName) hashed.fn = hash(data.firstName);
    if (data.lastName) hashed.ln = hash(data.lastName);
    if (data.city) hashed.ct = hash(data.city);
    if (data.state) hashed.st = hash(data.state);
    if (data.zip) hashed.zp = hash(data.zip);
    if (data.country) hashed.country = hash(data.country);
    if (data.gender) hashed.ge = hash(data.gender);
    if (data.dateOfBirth) hashed.db = hash(data.dateOfBirth);

    return hashed;
}

/**
 * Format error response for webhook
 * @param error - Error object
 * @returns Formatted error response
 */
export function formatWebhookError(error: any) {
    return {
        success: false,
        error: {
            message: error.message || 'Unknown error',
            code: error.code || 'UNKNOWN_ERROR',
            type: error.type || 'webhook_error',
        },
        timestamp: new Date().toISOString(),
    };
}

/**
 * Format success response for webhook
 * @param data - Response data
 * @returns Formatted success response
 */
export function formatWebhookSuccess(data: any = {}) {
    return {
        success: true,
        data,
        timestamp: new Date().toISOString(),
    };
}
