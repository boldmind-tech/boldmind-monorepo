
// SERVICES/ai-receptionist-service/src/services/ai-response.service.ts

import { MetaGraphProvider } from '../providers/meta-graph.provider';

export interface KeywordRule {
    keywords: string[];
    response: string;
    action?: 'book' | 'qualify' | 'info';
}

export class AIResponseService {
    private metaProvider: MetaGraphProvider;

    constructor(pageAccessToken: string) {
        this.metaProvider = new MetaGraphProvider(pageAccessToken);
    }

    // Match keywords and generate response
    matchKeywords(message: string, rules: KeywordRule[]): KeywordRule | null {
        const lowerMessage = message.toLowerCase();

        for (const rule of rules) {
            for (const keyword of rule.keywords) {
                if (lowerMessage.includes(keyword.toLowerCase())) {
                    return rule;
                }
            }
        }

        return null;
    }

    // Generate personalized response
    personalizeResponse(template: string, userName?: string): string {
        if (userName) {
            return template.replace('{name}', userName);
        }
        return template.replace('{name}', 'there');
    }

    // Determine lead intent
    classifyIntent(message: string): {
        intent: 'booking' | 'pricing' | 'general' | 'complaint';
        confidence: number;
    } {
        const lowerMessage = message.toLowerCase();

        // Booking keywords
        const bookingKeywords = ['book', 'appointment', 'schedule', 'reserve', 'when can', 'available'];
        const bookingScore = bookingKeywords.filter(kw => lowerMessage.includes(kw)).length;

        // Pricing keywords
        const pricingKeywords = ['price', 'cost', 'how much', 'payment', 'afford'];
        const pricingScore = pricingKeywords.filter(kw => lowerMessage.includes(kw)).length;

        // Complaint keywords
        const complaintKeywords = ['bad', 'poor', 'disappointed', 'refund', 'complaint'];
        const complaintScore = complaintKeywords.filter(kw => lowerMessage.includes(kw)).length;

        if (bookingScore > 0) {
            return { intent: 'booking', confidence: Math.min(bookingScore / 3, 1) };
        } else if (pricingScore > 0) {
            return { intent: 'pricing', confidence: Math.min(pricingScore / 3, 1) };
        } else if (complaintScore > 0) {
            return { intent: 'complaint', confidence: Math.min(complaintScore / 3, 1) };
        }

        return { intent: 'general', confidence: 0.5 };
    }

    // Calculate lead score (0-100)
    calculateLeadScore(params: {
        hasContactInfo: boolean;
        messageLength: number;
        intent: string;
        interactionCount: number;
        responseTime: number; // in seconds
    }): number {
        let score = 50; // Base score

        // Contact info provided
        if (params.hasContactInfo) score += 20;

        // Message quality
        if (params.messageLength > 50) score += 10;
        else if (params.messageLength > 20) score += 5;

        // Intent
        if (params.intent === 'booking') score += 15;
        else if (params.intent === 'pricing') score += 10;

        // Engagement
        if (params.interactionCount > 3) score += 10;
        else if (params.interactionCount > 1) score += 5;

        // Quick response (high engagement)
        if (params.responseTime < 300) score += 5; // < 5 min

        return Math.min(Math.max(score, 0), 100);
    }
}


