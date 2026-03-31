// APPS/WEB_APPS/receptionist/lib/api.ts
import { boldMindAPI, type ReceptionistConfig, type Conversation, type KnowledgeBase } from '@boldmind/api-client';

/**
 * Receptionist API Client
 * AI-powered customer service and lead management
 */
export const receptionistAPI = {
    /**
     * Configuration
     */
    config: {
        /** POST /receptionist/setup - Setup receptionist */
        setup: (data: Partial<ReceptionistConfig>) => boldMindAPI.receptionist.setup(data),
        
        /** GET /receptionist/my - Get current config */
        get: () => boldMindAPI.receptionist.getConfig(),
        
        /** PATCH /receptionist/my - Update config */
        update: (data: Partial<ReceptionistConfig>) => boldMindAPI.receptionist.updateConfig(data),
        
        /** PATCH /receptionist/my/toggle - Toggle active status */
        toggle: () => boldMindAPI.receptionist.toggle(),
    },
    
    /**
     * Conversations
     */
    conversations: {
        /** GET /receptionist/conversations - List conversations */
        list: () => boldMindAPI.receptionist.conversations.list(),
        
        /** GET /receptionist/conversations/:phone - Get specific conversation */
        get: (phone: string) => boldMindAPI.receptionist.conversations.get(phone),
        
        /** POST /receptionist/conversations/:phone/reply - Reply to conversation */
        reply: (phone: string, message: string) =>
            boldMindAPI.receptionist.conversations.reply(phone, message),
        
        /** PATCH /receptionist/conversations/:phone/resolve - Mark as resolved */
        resolve: (phone: string) => boldMindAPI.receptionist.conversations.resolve(phone),
    },
    
    /**
     * Knowledge Base
     */
    knowledge: {
        /** POST /receptionist/knowledge - Add knowledge entry */
        add: (data: { content: string; source?: string }) =>
            boldMindAPI.receptionist.knowledge.add(data),
        
        /** GET /receptionist/knowledge - List knowledge entries */
        list: () => boldMindAPI.receptionist.knowledge.list(),
        
        /** DELETE /receptionist/knowledge/:id - Delete knowledge entry */
        delete: (id: string) => boldMindAPI.receptionist.knowledge.delete(id),
    },
    
    /**
     * Analytics
     */
    analytics: () => boldMindAPI.receptionist.analytics(),
    
    /**
     * Admin Functions
     */
    admin: {
        /** GET /receptionist/admin/all - Get all receptionist configs */
        getAll: () => boldMindAPI.receptionist.admin.all(),
        
        /** PATCH /receptionist/admin/:id/suspend - Suspend a receptionist */
        suspend: (id: string) => boldMindAPI.receptionist.admin.suspend(id),
    },
};

export default receptionistAPI;