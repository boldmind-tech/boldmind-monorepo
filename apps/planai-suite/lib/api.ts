// APPS/WEB_APPS/planai/lib/api.ts
import { boldMindAPI, type BusinessPlan, type FinancialForecast, type BrandingJob } from '@boldmind/api-client';

/**
 * PlanAI API Client
 * AI-powered business planning, branding, and financial tools
 */
export const planaiAPI = {
    /**
     * Business Planning
     */
    planning: {
        /** POST /planai/planning/generate - Generate business plan */
        generate: (data: { 
            businessName: string; 
            industry: string; 
            description: string; 
            goals?: string[];
            templateId?: string;
        }) => boldMindAPI.planai.planning.generate(data),
        
        /** POST /planai/planning/pitch-deck - Generate pitch deck */
        generatePitchDeck: (data: { businessPlanId?: string; slides?: number; theme?: string }) =>
            boldMindAPI.planai.planning.pitchDeck(data),
        
        /** GET /planai/planning/jobs - Get all planning jobs */
        getJobs: () => boldMindAPI.planai.planning.myJobs(),
        
        /** GET /planai/planning/jobs/:id - Get specific job */
        getJob: (jobId: string) => boldMindAPI.planai.planning.getJob(jobId),
        
        /** GET /planai/planning/jobs/:id/download - Download job result */
        getDownloadUrl: (jobId: string) => boldMindAPI.planai.planning.downloadJob(jobId),
        
        /** GET /planai/planning/templates - Get templates */
        getTemplates: () => boldMindAPI.planai.planning.templates(),
    },
    
    /**
     * Financial Tools
     */
    finance: {
        /** POST /planai/finance/forecast - Generate financial forecast */
        forecast: (data: { revenue: number; expenses: number; months: number; currency?: string }) =>
            boldMindAPI.planai.finance.forecast(data),
        
        /** POST /planai/finance/scenario - Run scenario analysis */
        scenario: (data: { baseRevenue: number; scenarios: string[] }) =>
            boldMindAPI.planai.finance.scenario(data),
        
        /** POST /planai/finance/break-even - Calculate break-even point */
        breakEven: (data: { fixedCosts: number; variableCosts: number; pricePerUnit: number }) =>
            boldMindAPI.planai.finance.breakEven(data),
        
        /** GET /planai/finance/forecasts - Get all forecasts */
        getForecasts: () => boldMindAPI.planai.finance.myForecasts(),
        
        /** GET /planai/finance/forecasts/:id - Get specific forecast */
        getForecast: (id: string) => boldMindAPI.planai.finance.getForecast(id),
        
        /** GET /planai/finance/exchange-rate - Get exchange rate */
        getExchangeRate: () => boldMindAPI.planai.finance.exchangeRate(),
    },
    
    /**
     * Branding Tools
     */
    branding: {
        /** POST /planai/branding/logo - Generate logo */
        generateLogo: (data: { businessName: string; industry?: string; style?: string; colors?: string[] }) =>
            boldMindAPI.planai.branding.logo(data),
        
        /** POST /planai/branding/brand-kit - Generate complete brand kit */
        generateBrandKit: (data: { businessName: string; industry?: string; tone?: string }) =>
            boldMindAPI.planai.branding.brandKit(data),
        
        /** POST /planai/branding/flyer - Generate flyer */
        generateFlyer: (data: { title: string; content: string; style?: string; imageUrl?: string }) =>
            boldMindAPI.planai.branding.flyer(data),
        
        /** POST /planai/branding/color-palette - Generate color palette */
        generateColorPalette: (data: { industry?: string; mood?: string; baseColor?: string }) =>
            boldMindAPI.planai.branding.colorPalette(data),
        
        /** GET /planai/branding/jobs - Get all branding jobs */
        getJobs: () => boldMindAPI.planai.branding.myJobs(),
    },
    
    /**
     * Credibility & Professional Profile
     */
    credibility: {
        /** POST /planai/credibility/portfolio - Create portfolio */
        createPortfolio: (data: unknown) => boldMindAPI.planai.credibility.createPortfolio(data),
        
        /** GET /planai/credibility/portfolio/:userId - Get portfolio */
        getPortfolio: (userId: string) => boldMindAPI.planai.credibility.getPortfolio(userId),
        
        /** POST /planai/credibility/linkedin-optimize - Optimize LinkedIn profile */
        optimizeLinkedIn: (data: { headline?: string; summary?: string; industry?: string }) =>
            boldMindAPI.planai.credibility.linkedinOptimize(data),
        
        /** POST /planai/credibility/resume - Generate resume */
        generateResume: (data: unknown) => boldMindAPI.planai.credibility.generateResume(data),
    },
    
    /**
     * Investor Tools
     */
    investor: {
        /** POST /planai/investor/safe-agreement - Generate SAFE agreement */
        generateSafeAgreement: (data: { investorName: string; amount: number; valuation: number }) =>
            boldMindAPI.planai.investor.safeAgreement(data),
        
        /** POST /planai/investor/data-room - Create data room */
        createDataRoom: (data: unknown) => boldMindAPI.planai.investor.dataRoom(data),
        
        /** POST /planai/investor/due-diligence-checklist - Get due diligence checklist */
        getDueDiligenceChecklist: (data?: unknown) => 
            boldMindAPI.planai.investor.dueDiligence(data),
        
        /** POST /planai/investor/investor-update - Generate investor update */
        generateInvestorUpdate: (data: { month: string; highlights: string[]; metrics: Record<string, number> }) =>
            boldMindAPI.planai.investor.investorUpdate(data),
    },
    
    /**
     * Jobs & Tasks
     */
    jobs: {
        /** GET /planai/jobs - List all jobs */
        list: () => boldMindAPI.planai.jobs.list(),
        
        /** GET /planai/jobs/:id - Get specific job */
        get: (id: string) => boldMindAPI.planai.jobs.get(id),
    },
    
    /**
     * HR, Legal & Operations
     */
    hr: (data: unknown) => boldMindAPI.planai.hr(data),
    legal: (data: unknown) => boldMindAPI.planai.legal(data),
    operations: (data: unknown) => boldMindAPI.planai.operations(data),
};

export default planaiAPI;