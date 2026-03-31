// ─────────────────────────────────────────────────────────────────────────────
// packages/api-client/src/automation.api.ts
// Routes: /api/v1/automation/*
// ─────────────────────────────────────────────────────────────────────────────

import { apiFetch } from './client';
import type { ApiResponse, AutomationJob, QueueStats } from './types';

export const automationAPI = {
  social: {
    /** POST /automation/social/schedule */
    schedule: (data: { content: string; platforms: string[]; scheduledAt: string; mediaUrls?: string[] }) =>
      apiFetch<ApiResponse<AutomationJob>>('/automation/social/schedule', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** POST /automation/social/calendar */
    calendar: (data: { month?: number; year?: number; topics?: string[] }) =>
      apiFetch<ApiResponse<unknown>>('/automation/social/calendar', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** POST /automation/social/captions */
    captions: (data: { topic: string; tone?: string; platforms?: string[]; count?: number }) =>
      apiFetch<ApiResponse<string[]>>('/automation/social/captions', {
        method: 'POST', body: JSON.stringify(data),
      }),
  },

  email: {
    /** POST /automation/email/campaign */
    campaign: (data: { subject: string; html: string; scheduledAt?: string; tags?: string[] }) =>
      apiFetch<ApiResponse<AutomationJob>>('/automation/email/campaign', {
        method: 'POST', body: JSON.stringify(data),
      }),
  },

  scraper: {
    /** POST /automation/scraper/run */
    run: (data: { urls: string[]; selectors?: Record<string, string> }) =>
      apiFetch<ApiResponse<AutomationJob>>('/automation/scraper/run', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** POST /automation/scraper/verify */
    verify: (data: { emails: string[] }) =>
      apiFetch<ApiResponse<AutomationJob>>('/automation/scraper/verify', {
        method: 'POST', body: JSON.stringify(data),
      }),
  },

  /** POST /automation/trigger — generic n8n workflow trigger */
  trigger: (data: { workflow: string; payload?: Record<string, unknown> }) =>
    apiFetch<ApiResponse<{ triggered: boolean; jobId?: string }>>('/automation/trigger', {
      method: 'POST', body: JSON.stringify(data),
    }),

  /** GET /automation/queues — admin: BullMQ queue stats */
  queues: () =>
    apiFetch<ApiResponse<QueueStats[]>>('/automation/queues'),
};