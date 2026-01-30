
// SERVICES/ai-receptionist-service/src/routes/webhooks.routes.ts

import { Router } from 'express';
import { prisma } from '../index';
import { MetaGraphProvider } from '../providers/meta-graph.provider';
import { AIResponseService } from '../services/ai-response.service';

const router = Router();

// Webhook verification (GET)
router.get('/meta', (req, res) => {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode === 'subscribe' && token === process.env['META_VERIFY_TOKEN']) {
        console.log('Webhook verified');
        res.status(200).send(challenge);
    } else {
        res.sendStatus(403);
    }
});

// Webhook handler (POST)
router.post('/meta', async (req, res) => {
    try {
        const signature = req.headers['x-hub-signature-256'] as string;
        const body = JSON.stringify(req.body);

        // Verify signature
        if (!MetaGraphProvider.verifyWebhookSignature(
            signature,
            body,
            process.env['META_APP_SECRET']!
        )) {
            return res.sendStatus(403);
        }

        const event = req.body;

        // Process webhook asynchronously
        processWebhook(event).catch(console.error);

        // Respond immediately
        res.sendStatus(200);
    } catch (error) {
        console.error('Webhook error:', error);
        res.sendStatus(500);
    }
});

async function processWebhook(event: any) {
    const { object, entry } = event;

    if (object !== 'instagram' && object !== 'page') {
        return;
    }

    for (const item of entry) {
        // Handle messages
        if (item.messaging) {
            for (const messagingEvent of item.messaging) {
                await handleMessage(messagingEvent, object);
            }
        }

        // Handle comments
        if (item.changes) {
            for (const change of item.changes) {
                if (change.field === 'comments') {
                    await handleComment(change.value);
                }
            }
        }
    }
}

async function handleMessage(event: any, platform: 'instagram' | 'page') {
    const { sender, recipient, message } = event;

    if (!message?.text) return; // Skip non-text messages

    // Find client by recipient ID
    const client = await prisma.receptionistClient.findFirst({
        where: {
            isActive: true,
            autoReply: true,
            // TODO: Match by page ID stored in socialLinks
        },
    });

    if (!client) return;

    // Create or update lead
    const lead = await prisma.lead.upsert({
        where: {
            clientId_contactInfo: {
                clientId: client.id,
                contactInfo: sender.id,
            },
        },
        create: {
            clientId: client.id,
            source: platform === 'instagram' ? 'INSTAGRAM' : 'FACEBOOK',
            contactInfo: sender.id,
            message: message.text,
            status: 'NEW',
            priority: 'MEDIUM',
        },
        update: {
            lastInteraction: new Date(),
            interactionCount: { increment: 1 },
        },
    });

    // AI Response
    const aiService = new AIResponseService(process.env['META_PAGE_ACCESS_TOKEN']!);

    // Get user profile
    const metaProvider = new MetaGraphProvider(process.env['META_PAGE_ACCESS_TOKEN']!);
    const userProfile = await metaProvider.getUserProfile(sender.id);

    // Classify intent and calculate score
    const { intent } = aiService.classifyIntent(message.text);
    const leadScore = aiService.calculateLeadScore({
        hasContactInfo: !!userProfile?.name,
        messageLength: message.text.length,
        intent,
        interactionCount: lead.interactionCount,
        responseTime: 60, // placeholder
    });

    // Update lead with score
    await prisma.lead.update({
        where: { id: lead.id },
        data: {
            leadScore,
            isQualified: leadScore >= 70,
            qualificationNotes: { intent, score: leadScore },
        },
    });

    // Generate response
    let responseText = client.greetingMessage || 'Hi {name}! Thanks for reaching out.';

    if (intent === 'booking' && client.bookAppointments) {
        responseText += ' You can book an appointment here: [BOOKING_LINK]';
    }

    responseText = aiService.personalizeResponse(responseText, userProfile?.name);

    // Send reply
    await metaProvider.sendMessage(sender.id, responseText, platform === 'instagram' ? 'instagram' : 'facebook');

    // Save conversation
    await prisma.conversation.create({
        data: {
            clientId: client.id,
            leadId: lead.id,
            platform: platform === 'instagram' ? 'INSTAGRAM' : 'FACEBOOK',
            platformUserId: sender.id,
            messages: [
                {
                    from: 'user',
                    text: message.text,
                    timestamp: new Date().toISOString(),
                },
                {
                    from: 'bot',
                    text: responseText,
                    timestamp: new Date().toISOString(),
                },
            ],
            messageCount: 2,
        },
    });

    // Update client stats
    await prisma.receptionistClient.update({
        where: { id: client.id },
        data: {
            totalLeads: { increment: 1 },
            qualifiedLeads: leadScore >= 70 ? { increment: 1 } : undefined,
        },
    });
}

async function handleComment(change: any) {
    // Similar logic for comment replies
    console.log('Comment received:', change);
}

export default router;