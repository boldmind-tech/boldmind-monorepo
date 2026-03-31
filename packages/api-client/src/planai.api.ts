// ─────────────────────────────────────────────────────────────────────────────
// packages/api-client/src/planai.api.ts
// Routes: /api/v1/planai/*  /api/v1/receptionist/*  /api/v1/storefronts/*
// ─────────────────────────────────────────────────────────────────────────────

import { apiFetch, qs } from './client';
import type { ApiResponse, PaginatedResponse, PlanAIJob, BusinessPlan, FinancialForecast, BrandingJob, ReceptionistConfig, Conversation, KnowledgeBase, Storefront, StoreProduct, StoreOrder } from './types';

// ─── PlanAI Jobs ──────────────────────────────────────────────────────────────

export const planaiAPI = {
  jobs: {
    /** GET /planai/jobs */
    list: () =>
      apiFetch<ApiResponse<PlanAIJob[]>>('/planai/jobs'),

    /** GET /planai/jobs/:id */
    get: (id: string) =>
      apiFetch<ApiResponse<PlanAIJob>>(`/planai/jobs/${id}`),
  },

  // ── Business Planning ──────────────────────────────────────────────────────

  planning: {
    /** POST /planai/planning/generate */
    generate: (data: { businessName: string; industry: string; description: string; goals?: string[]; templateId?: string }) =>
      apiFetch<ApiResponse<BusinessPlan>>('/planai/planning/generate', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** POST /planai/planning/pitch-deck */
    pitchDeck: (data: { businessPlanId?: string; slides?: number; theme?: string }) =>
      apiFetch<ApiResponse<PlanAIJob>>('/planai/planning/pitch-deck', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** GET /planai/planning/jobs */
    myJobs: () =>
      apiFetch<ApiResponse<PlanAIJob[]>>('/planai/planning/jobs'),

    /** GET /planai/planning/jobs/:id */
    getJob: (id: string) =>
      apiFetch<ApiResponse<PlanAIJob>>(`/planai/planning/jobs/${id}`),

    /** GET /planai/planning/jobs/:id/download */
    downloadJob: (id: string) =>
      `${(typeof process !== 'undefined' ? process.env['NEXT_PUBLIC_API_URL'] : '') ?? ''}/planai/planning/jobs/${id}/download`,

    /** GET /planai/planning/templates */
    templates: () =>
      apiFetch<ApiResponse<unknown[]>>('/planai/planning/templates', {
        next: { revalidate: 3600 },
      }),
  },

  // ── Finance ───────────────────────────────────────────────────────────────

  finance: {
    /** POST /planai/finance/forecast */
    forecast: (data: { revenue: number; expenses: number; months: number; currency?: string }) =>
      apiFetch<ApiResponse<FinancialForecast>>('/planai/finance/forecast', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** POST /planai/finance/scenario */
    scenario: (data: { baseRevenue: number; scenarios: string[] }) =>
      apiFetch<ApiResponse<unknown>>('/planai/finance/scenario', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** POST /planai/finance/break-even */
    breakEven: (data: { fixedCosts: number; variableCosts: number; pricePerUnit: number }) =>
      apiFetch<ApiResponse<{ breakEvenUnits: number; breakEvenRevenue: number }>>('/planai/finance/break-even', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** GET /planai/finance/forecasts */
    myForecasts: () =>
      apiFetch<ApiResponse<FinancialForecast[]>>('/planai/finance/forecasts'),

    /** GET /planai/finance/forecasts/:id */
    getForecast: (id: string) =>
      apiFetch<ApiResponse<FinancialForecast>>(`/planai/finance/forecasts/${id}`),

    /** GET /planai/finance/exchange-rate */
    exchangeRate: () =>
      apiFetch<ApiResponse<{ usdToNgn: number; updatedAt: string }>>('/planai/finance/exchange-rate', {
        next: { revalidate: 3600 },
      }),
  },

  // ── Branding ──────────────────────────────────────────────────────────────

  branding: {
    /** POST /planai/branding/logo */
    logo: (data: { businessName: string; industry?: string; style?: string; colors?: string[] }) =>
      apiFetch<ApiResponse<BrandingJob>>('/planai/branding/logo', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** POST /planai/branding/brand-kit */
    brandKit: (data: { businessName: string; industry?: string; tone?: string }) =>
      apiFetch<ApiResponse<BrandingJob>>('/planai/branding/brand-kit', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** POST /planai/branding/flyer */
    flyer: (data: { title: string; content: string; style?: string; imageUrl?: string }) =>
      apiFetch<ApiResponse<BrandingJob>>('/planai/branding/flyer', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** POST /planai/branding/color-palette */
    colorPalette: (data: { industry?: string; mood?: string; baseColor?: string }) =>
      apiFetch<ApiResponse<{ colors: string[]; names: string[] }>>('/planai/branding/color-palette', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** GET /planai/branding/jobs */
    myJobs: () =>
      apiFetch<ApiResponse<BrandingJob[]>>('/planai/branding/jobs'),
  },

  // ── Marketing ────────────────────────────────────────────────────────────

  marketing: {
    /** POST /planai/marketing/campaign/email */
    createEmailCampaign: (data: { subject: string; body: string; audienceIds?: string[] }) =>
      apiFetch<ApiResponse<{ campaignId: string }>>('/planai/marketing/campaign/email', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** POST /planai/marketing/campaign/:id/send */
    sendCampaign: (id: string) =>
      apiFetch<ApiResponse<void>>(`/planai/marketing/campaign/${id}/send`, { method: 'POST' }),

    /** POST /planai/marketing/generate/subject-lines */
    generateSubjectLines: (data: { topic: string; tone?: string; count?: number }) =>
      apiFetch<ApiResponse<string[]>>('/planai/marketing/generate/subject-lines', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** POST /planai/marketing/generate/email-copy */
    generateEmailCopy: (data: { purpose: string; tone?: string; productName?: string }) =>
      apiFetch<ApiResponse<{ subject: string; body: string }>>('/planai/marketing/generate/email-copy', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** POST /planai/marketing/whatsapp/broadcast */
    whatsappBroadcast: (data: { message: string; phones: string[] }) =>
      apiFetch<ApiResponse<{ sent: number; failed: number }>>('/planai/marketing/whatsapp/broadcast', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** GET /planai/marketing/analytics/:campaignId */
    campaignAnalytics: (campaignId: string) =>
      apiFetch<ApiResponse<unknown>>(`/planai/marketing/analytics/${campaignId}`),
  },

  // ── Credibility ───────────────────────────────────────────────────────────

  credibility: {
    /** POST /planai/credibility/portfolio */
    createPortfolio: (data: unknown) =>
      apiFetch<ApiResponse<unknown>>('/planai/credibility/portfolio', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** GET /planai/credibility/portfolio/:userId */
    getPortfolio: (userId: string) =>
      apiFetch<ApiResponse<unknown>>(`/planai/credibility/portfolio/${userId}`),

    /** POST /planai/credibility/linkedin-optimize */
    linkedinOptimize: (data: { headline?: string; summary?: string; industry?: string }) =>
      apiFetch<ApiResponse<{ optimized: string; tips: string[] }>>('/planai/credibility/linkedin-optimize', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** POST /planai/credibility/resume */
    generateResume: (data: unknown) =>
      apiFetch<ApiResponse<{ pdfUrl: string }>>('/planai/credibility/resume', {
        method: 'POST', body: JSON.stringify(data),
      }),
  },

  // ── Investor Readiness ────────────────────────────────────────────────────

  investor: {
    /** POST /planai/investor/safe-agreement */
    safeAgreement: (data: { investorName: string; amount: number; valuation: number }) =>
      apiFetch<ApiResponse<{ pdfUrl: string }>>('/planai/investor/safe-agreement', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** POST /planai/investor/data-room */
    dataRoom: (data: unknown) =>
      apiFetch<ApiResponse<unknown>>('/planai/investor/data-room', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** POST /planai/investor/due-diligence-checklist */
    dueDiligence: (data?: unknown) =>
      apiFetch<ApiResponse<unknown>>('/planai/investor/due-diligence-checklist', {
        method: 'POST', body: JSON.stringify(data ?? {}),
      }),

    /** POST /planai/investor/investor-update */
    investorUpdate: (data: { month: string; highlights: string[]; metrics: Record<string, number> }) =>
      apiFetch<ApiResponse<{ html: string }>>('/planai/investor/investor-update', {
        method: 'POST', body: JSON.stringify(data),
      }),
  },

  // ── Analytics ────────────────────────────────────────────────────────────

  analytics: {
    /** GET /planai/analytics/overview */
    overview: () =>
      apiFetch<ApiResponse<unknown>>('/planai/analytics/overview'),

    /** POST /planai/analytics/report */
    report: (data: unknown) =>
      apiFetch<ApiResponse<unknown>>('/planai/analytics/report', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** GET /planai/analytics/revenue */
    revenue: () =>
      apiFetch<ApiResponse<unknown>>('/planai/analytics/revenue'),

    /** GET /planai/analytics/growth-insights */
    growthInsights: () =>
      apiFetch<ApiResponse<unknown>>('/planai/analytics/growth-insights'),
  },

  // ── HR & Legal & Operations ───────────────────────────────────────────────

  /** POST /planai/hr */
  hr: (data: unknown) =>
    apiFetch<ApiResponse<unknown>>('/planai/hr', { method: 'POST', body: JSON.stringify(data) }),

  /** POST /planai/legal */
  legal: (data: unknown) =>
    apiFetch<ApiResponse<unknown>>('/planai/legal', { method: 'POST', body: JSON.stringify(data) }),

  /** POST /planai/operations */
  operations: (data: unknown) =>
    apiFetch<ApiResponse<unknown>>('/planai/operations', { method: 'POST', body: JSON.stringify(data) }),

  // ── Email Scraper ─────────────────────────────────────────────────────────

  emailScraper: {
    /** POST /planai/emailscraper/search */
    search: (data: { domain?: string; company?: string; role?: string; limit?: number }) =>
      apiFetch<ApiResponse<{ leads: unknown[]; jobId: string }>>('/planai/emailscraper/search', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** POST /planai/emailscraper/verify */
    verify: (email: string) =>
      apiFetch<ApiResponse<{ email: string; isValid: boolean; score: number }>>('/planai/emailscraper/verify', {
        method: 'POST', body: JSON.stringify({ email }),
      }),

    /** POST /planai/emailscraper/bulk-verify */
    bulkVerify: (emails: string[]) =>
      apiFetch<ApiResponse<{ jobId: string }>>('/planai/emailscraper/bulk-verify', {
        method: 'POST', body: JSON.stringify({ emails }),
      }),

    /** GET /planai/emailscraper/leads */
    leads: (params?: { page?: number; limit?: number; listId?: string }) =>
      apiFetch<PaginatedResponse<unknown>>(`/planai/emailscraper/leads${qs({ ...params })}`),

    /** GET /planai/emailscraper/leads/export */
    exportLeads: (params?: { listId?: string; format?: 'csv' | 'json' }) =>
      `${(typeof process !== 'undefined' ? process.env['NEXT_PUBLIC_API_URL'] : '') ?? ''}/planai/emailscraper/leads/export${qs({ ...params })}`,

    /** POST /planai/emailscraper/lists */
    createList: (data: { name: string }) =>
      apiFetch<ApiResponse<unknown>>('/planai/emailscraper/lists', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** GET /planai/emailscraper/lists */
    lists: () =>
      apiFetch<ApiResponse<unknown[]>>('/planai/emailscraper/lists'),

    /** GET /planai/emailscraper/jobs */
    jobs: () =>
      apiFetch<ApiResponse<unknown[]>>('/planai/emailscraper/jobs'),
  },
};

// ─── Receptionist ─────────────────────────────────────────────────────────────

export const receptionistAPI = {
  /** POST /receptionist/setup */
  setup: (data: Partial<ReceptionistConfig>) =>
    apiFetch<ApiResponse<ReceptionistConfig>>('/receptionist/setup', {
      method: 'POST', body: JSON.stringify(data),
    }),

  /** GET /receptionist/my */
  getConfig: () =>
    apiFetch<ApiResponse<ReceptionistConfig>>('/receptionist/my'),

  /** PATCH /receptionist/my */
  updateConfig: (data: Partial<ReceptionistConfig>) =>
    apiFetch<ApiResponse<ReceptionistConfig>>('/receptionist/my', {
      method: 'PATCH', body: JSON.stringify(data),
    }),

  /** PATCH /receptionist/my/toggle */
  toggle: () =>
    apiFetch<ApiResponse<{ isActive: boolean }>>('/receptionist/my/toggle', { method: 'PATCH' }),

  conversations: {
    /** GET /receptionist/conversations */
    list: () =>
      apiFetch<ApiResponse<Conversation[]>>('/receptionist/conversations'),

    /** GET /receptionist/conversations/:phone */
    get: (phone: string) =>
      apiFetch<ApiResponse<Conversation>>(`/receptionist/conversations/${phone}`),

    /** POST /receptionist/conversations/:phone/reply */
    reply: (phone: string, message: string) =>
      apiFetch<ApiResponse<void>>(`/receptionist/conversations/${phone}/reply`, {
        method: 'POST', body: JSON.stringify({ message }),
      }),

    /** PATCH /receptionist/conversations/:phone/resolve */
    resolve: (phone: string) =>
      apiFetch<ApiResponse<void>>(`/receptionist/conversations/${phone}/resolve`, { method: 'PATCH' }),
  },

  knowledge: {
    /** POST /receptionist/knowledge */
    add: (data: { content: string; source?: string }) =>
      apiFetch<ApiResponse<KnowledgeBase>>('/receptionist/knowledge', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** GET /receptionist/knowledge */
    list: () =>
      apiFetch<ApiResponse<KnowledgeBase[]>>('/receptionist/knowledge'),

    /** DELETE /receptionist/knowledge/:id */
    delete: (id: string) =>
      apiFetch<void>(`/receptionist/knowledge/${id}`, { method: 'DELETE' }),
  },

  /** GET /receptionist/analytics */
  analytics: () =>
    apiFetch<ApiResponse<unknown>>('/receptionist/analytics'),

  admin: {
    /** GET /receptionist/admin/all */
    all: () => apiFetch<ApiResponse<ReceptionistConfig[]>>('/receptionist/admin/all'),
    /** PATCH /receptionist/admin/:id/suspend */
    suspend: (id: string) => apiFetch<void>(`/receptionist/admin/${id}/suspend`, { method: 'PATCH' }),
  },
};

// ─── Storefronts ──────────────────────────────────────────────────────────────

export const storefrontsAPI = {
  /** GET /storefronts/:slug */
  get: (slug: string) =>
    apiFetch<ApiResponse<Storefront>>(`/storefronts/${slug}`, { next: { revalidate: 300 } }),

  /** GET /storefronts/:slug/products */
  products: (slug: string) =>
    apiFetch<ApiResponse<StoreProduct[]>>(`/storefronts/${slug}/products`, { next: { revalidate: 120 } }),

  /** GET /storefronts/products/:productId */
  getProduct: (productId: string) =>
    apiFetch<ApiResponse<StoreProduct>>(`/storefronts/products/${productId}`),

  /** POST /storefronts/:slug/orders */
  placeOrder: (slug: string, data: { productId: string; buyerEmail: string; buyerName?: string }) =>
    apiFetch<ApiResponse<{ orderId: string; paymentUrl: string }>>(`/storefronts/${slug}/orders`, {
      method: 'POST', body: JSON.stringify(data),
    }),

  owner: {
    /** POST /storefronts */
    create: (data: Partial<Storefront>) =>
      apiFetch<ApiResponse<Storefront>>('/storefronts', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** GET /storefronts/owner/my-stores */
    myStores: () =>
      apiFetch<ApiResponse<Storefront[]>>('/storefronts/owner/my-stores'),

    /** PATCH /storefronts/owner/:storeId */
    update: (storeId: string, data: Partial<Storefront>) =>
      apiFetch<ApiResponse<Storefront>>(`/storefronts/owner/${storeId}`, {
        method: 'PATCH', body: JSON.stringify(data),
      }),

    /** DELETE /storefronts/owner/:storeId */
    delete: (storeId: string) =>
      apiFetch<void>(`/storefronts/owner/${storeId}`, { method: 'DELETE' }),

    /** GET /storefronts/owner/:storeId/dashboard */
    dashboard: (storeId: string) =>
      apiFetch<ApiResponse<unknown>>(`/storefronts/owner/${storeId}/dashboard`),

    /** POST /storefronts/owner/:storeId/products */
    addProduct: (storeId: string, data: Partial<StoreProduct>) =>
      apiFetch<ApiResponse<StoreProduct>>(`/storefronts/owner/${storeId}/products`, {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** PATCH /storefronts/owner/:storeId/products/:productId */
    updateProduct: (storeId: string, productId: string, data: Partial<StoreProduct>) =>
      apiFetch<ApiResponse<StoreProduct>>(`/storefronts/owner/${storeId}/products/${productId}`, {
        method: 'PATCH', body: JSON.stringify(data),
      }),

    /** DELETE /storefronts/owner/:storeId/products/:productId */
    deleteProduct: (storeId: string, productId: string) =>
      apiFetch<void>(`/storefronts/owner/${storeId}/products/${productId}`, { method: 'DELETE' }),

    /** GET /storefronts/owner/:storeId/orders */
    orders: (storeId: string) =>
      apiFetch<ApiResponse<StoreOrder[]>>(`/storefronts/owner/${storeId}/orders`),

    /** PATCH /storefronts/owner/:storeId/orders/:orderId */
    updateOrder: (storeId: string, orderId: string, data: { status: StoreOrder['status'] }) =>
      apiFetch<ApiResponse<StoreOrder>>(`/storefronts/owner/${storeId}/orders/${orderId}`, {
        method: 'PATCH', body: JSON.stringify(data),
      }),
  },
};