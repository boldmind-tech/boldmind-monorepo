// ─────────────────────────────────────────────────────────────────────────────
// packages/utils/src/constants/colors.ts
// ─────────────────────────────────────────────────────────────────────────────
// CORRECTION: BoldMind Hub primary was #00143C (near-black, wrong).
// Extracted from logo.webp:
//   Primary  = #2B4D87  (the circle background — medium slate navy)
//   Secondary = #E9A825  (the 'B' symbol — warm golden amber)
// All other product colors unchanged.
// ─────────────────────────────────────────────────────────────────────────────

export type ColorScheme = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  success: string;
  warning: string;
  error: string;
  info: string;
};

export type ProductColorScheme = ColorScheme & {
  name: string;
  slug: string;
  category: string;
  icon: string;
  description: string;
  gradients: {
    primary: string[];
    secondary: string[];
    background: string[];
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function buildShadows(primary: string) {
  return {
    sm: `0 2px 4px 0 ${hexToRgba(primary, 0.08)}`,
    md: `0 6px 12px -2px ${hexToRgba(primary, 0.12)}`,
    lg: `0 12px 24px -4px ${hexToRgba(primary, 0.15)}`,
    xl: `0 24px 48px -8px ${hexToRgba(primary, 0.18)}`,
  };
}

// ─── Centralized CSS variable generation ─────────────────────────────────────

export function generateCSSVariables(scheme: ProductColorScheme): string {
  return `
    --product-primary: ${scheme.primary};
    --product-secondary: ${scheme.secondary};
    --product-accent: ${scheme.accent};
    --product-background: ${scheme.background};
    --product-foreground: ${scheme.foreground};
    --product-muted: ${scheme.muted};
    --product-highlight: ${hexToRgba(scheme.secondary, 0.12)};
    --product-glow: ${hexToRgba(scheme.secondary, 0.25)};
  `.trim();
}

export function generateThemeClasses(scheme: ProductColorScheme): Record<string, string> {
  return {
    primary: `bg-[${scheme.primary}]`,
    secondary: `bg-[${scheme.secondary}]`,
    text: `text-[${scheme.foreground}]`,
    background: `bg-[${scheme.background}]`,
    border: `border-[${scheme.muted}]`,
  };
}

// ─── Product Color Schemes ────────────────────────────────────────────────────

export const BOLDMIND_COLOR_SCHEMES: Record<string, ProductColorScheme> = {

  // ─── CORE ECOSYSTEM ────────────────────────────────────────────────────────

  'boldmind-hub': {
    name: 'BoldMind Hub',
    slug: 'boldmind-hub',
    category: 'ecosystem',
    icon: '🚀',
    description: 'Central ecosystem portal for all BoldMind products',

    // ✅ CORRECTED — extracted from logo.webp
    // Old value: primary: '#00143C' (near-black, not matching logo)
    primary:    '#2B4D87',  // circle background — medium slate navy
    secondary:  '#E9A825',  // the 'B' symbol — warm golden amber
    accent:     '#5B8ADE',  // lighter navy for interactive elements

    background: '#FAFAF9',
    foreground: '#1A202C',
    muted:      '#E7E5E4',
    success:    '#38A169',
    warning:    '#DD6B20',
    error:      '#C53030',
    info:       '#3182CE',
    gradients: {
      primary:    ['#2B4D87', '#1E3A6E'],
      secondary:  ['#E9A825', '#F5C242'],
      background: ['#FAFAF9', '#F5F5F4'],
    },
    shadows: buildShadows('#2B4D87'),
  },

  // ─── PLANAI SUITE ──────────────────────────────────────────────────────────

  'planai-suite': {
    name: 'PlanAI Suite', slug: 'planai-suite', category: 'ai', icon: '🧠',
    description: '12 AI-powered business tools for Nigerian entrepreneurs',
    primary: '#6B21A8', secondary: '#059669', accent: '#BE185D',
    background: '#FAF5FF', foreground: '#1F2937', muted: '#F3E8FF',
    success: '#059669', warning: '#D97706', error: '#DC2626', info: '#0284C7',
    gradients: {
      primary: ['#6B21A8', '#7C3AED'],
      secondary: ['#059669', '#10B981'],
      background: ['#FAF5FF', '#F3E8FF'],
    },
    shadows: buildShadows('#6B21A8'),
  },

  'ai-receptionist': {
    name: 'AI Receptionist', slug: 'ai-receptionist', category: 'ai', icon: '🤖',
    description: 'Multi-tenant AI for Instagram, WhatsApp, Facebook — auto-qualifies leads 24/7',
    primary: '#0C4A6E', secondary: '#7C2D12', accent: '#0891B2',
    background: '#F0F9FF', foreground: '#0F172A', muted: '#E0F2FE',
    success: '#059669', warning: '#D97706', error: '#DC2626', info: '#0284C7',
    gradients: {
      primary: ['#0C4A6E', '#0369A1'],
      secondary: ['#7C2D12', '#9A3412'],
      background: ['#F0F9FF', '#E0F2FE'],
    },
    shadows: buildShadows('#0C4A6E'),
  },

  'credibility-hubs': {
    name: 'Professional Credibility Hubs', slug: 'credibility-hubs', category: 'ai', icon: '💼',
    description: 'AI-assisted personal branding — portfolio, LinkedIn optimizer, resume generator',
    primary: '#312E81', secondary: '#C2410C', accent: '#4F46E5',
    background: '#F5F3FF', foreground: '#1E1B4B', muted: '#EDE9FE',
    success: '#059669', warning: '#D97706', error: '#DC2626', info: '#6366F1',
    gradients: { primary: ['#312E81', '#4338CA'], secondary: ['#C2410C', '#EA580C'], background: ['#F5F3FF', '#EDE9FE'] },
    shadows: buildShadows('#312E81'),
  },

  'business-planning': {
    name: 'AI Business Planning', slug: 'business-planning', category: 'ai', icon: '📋',
    description: 'Generate bank-ready Nigerian business plans in under 10 minutes',
    primary: '#1E3A5F', secondary: '#0D9488', accent: '#3B82F6',
    background: '#F0FDFA', foreground: '#134E4A', muted: '#CCFBF1',
    success: '#0D9488', warning: '#D97706', error: '#DC2626', info: '#3B82F6',
    gradients: { primary: ['#1E3A5F', '#2563EB'], secondary: ['#0D9488', '#14B8A6'], background: ['#F0FDFA', '#CCFBF1'] },
    shadows: buildShadows('#1E3A5F'),
  },

  'financial-forecasting': {
    name: 'Financial Forecasting', slug: 'financial-forecasting', category: 'ai', icon: '💰',
    description: 'AI cashflow modeling and revenue forecasting for Nigerian SMEs',
    primary: '#064E3B', secondary: '#B45309', accent: '#10B981',
    background: '#ECFDF5', foreground: '#022C22', muted: '#D1FAE5',
    success: '#10B981', warning: '#B45309', error: '#DC2626', info: '#0284C7',
    gradients: { primary: ['#064E3B', '#047857'], secondary: ['#B45309', '#D97706'], background: ['#ECFDF5', '#D1FAE5'] },
    shadows: buildShadows('#064E3B'),
  },

  'investor-readiness': {
    name: 'Investor Readiness Suite', slug: 'investor-readiness', category: 'ai', icon: '📈',
    description: 'Automated funding documentation — SAFE agreements, data room, cap table',
    primary: '#1E293B', secondary: '#CA8A04', accent: '#475569',
    background: '#F8FAFC', foreground: '#0F172A', muted: '#E2E8F0',
    success: '#059669', warning: '#CA8A04', error: '#DC2626', info: '#3B82F6',
    gradients: { primary: ['#1E293B', '#334155'], secondary: ['#CA8A04', '#EAB308'], background: ['#F8FAFC', '#F1F5F9'] },
    shadows: buildShadows('#1E293B'),
  },

  'branding-design': {
    name: 'Branding & Design Tools', slug: 'branding-design', category: 'ai', icon: '🎨',
    description: 'AI logo generator, brand kit creator, marketing visual maker',
    primary: '#86198F', secondary: '#EA580C', accent: '#D946EF',
    background: '#FDF4FF', foreground: '#1F2937', muted: '#FAE8FF',
    success: '#059669', warning: '#D97706', error: '#DC2626', info: '#A855F7',
    gradients: { primary: ['#86198F', '#A21CAF'], secondary: ['#EA580C', '#F97316'], background: ['#FDF4FF', '#FAE8FF'] },
    shadows: buildShadows('#86198F'),
  },

  'digital-storefronts': {
    name: 'Digital Storefronts', slug: 'digital-storefronts', category: 'marketplace', icon: '🛍️',
    description: 'Launch an online store in 5 minutes with Paystack payments',
    primary: '#7C2D12', secondary: '#059669', accent: '#F59E0B',
    background: '#FFFBEB', foreground: '#1C1917', muted: '#FEF3C7',
    success: '#059669', warning: '#D97706', error: '#DC2626', info: '#0284C7',
    gradients: { primary: ['#7C2D12', '#9A3412'], secondary: ['#059669', '#10B981'], background: ['#FFFBEB', '#FEF3C7'] },
    shadows: buildShadows('#7C2D12'),
  },

  'marketing-automation': {
    name: 'Marketing Automation', slug: 'marketing-automation', category: 'ai', icon: '📧',
    description: 'AI-driven email campaigns, WhatsApp broadcast, lead nurturing',
    primary: '#7E22CE', secondary: '#E11D48', accent: '#A855F7',
    background: '#FAF5FF', foreground: '#1F2937', muted: '#F3E8FF',
    success: '#059669', warning: '#D97706', error: '#E11D48', info: '#8B5CF6',
    gradients: { primary: ['#7E22CE', '#9333EA'], secondary: ['#E11D48', '#F43F5E'], background: ['#FAF5FF', '#F3E8FF'] },
    shadows: buildShadows('#7E22CE'),
  },

  'analytics-dashboard': {
    name: 'Analytics Dashboard', slug: 'analytics-dashboard', category: 'ai', icon: '📊',
    description: 'Cross-platform BI — unify Instagram, TikTok, Paystack analytics',
    primary: '#0F172A', secondary: '#2563EB', accent: '#06B6D4',
    background: '#F8FAFC', foreground: '#0F172A', muted: '#E2E8F0',
    success: '#10B981', warning: '#F59E0B', error: '#EF4444', info: '#2563EB',
    gradients: { primary: ['#0F172A', '#1E293B'], secondary: ['#2563EB', '#3B82F6'], background: ['#F8FAFC', '#F1F5F9'] },
    shadows: buildShadows('#0F172A'),
  },

  // ─── BOLDMIND OS ───────────────────────────────────────────────────────────

  'boldmind-os': {
    name: 'BoldMind OS', slug: 'boldmind-os', category: 'productivity', icon: '🧠',
    description: 'ADHD-friendly focus mode, pomodoro & knowledge graph',
    primary: '#9F1239', secondary: '#EA580C', accent: '#7C3AED',
    background: '#FFF7ED', foreground: '#1C1917', muted: '#FFEDD5',
    success: '#059669', warning: '#D97706', error: '#DC2626', info: '#0284C7',
    gradients: { primary: ['#9F1239', '#BE123C'], secondary: ['#EA580C', '#F97316'], background: ['#FFF7ED', '#FFEDD5'] },
    shadows: buildShadows('#9F1239'),
  },

  // ─── BOLDMIND TOOLS ────────────────────────────────────────────────────────

  'skillgig': {
    name: 'SkillGig', slug: 'skillgig', category: 'marketplace', icon: '💼',
    description: 'Freelance and gig economy platform for Nigerian talent',
    primary: '#7C3AED', secondary: '#F59E0B', accent: '#A78BFA',
    background: '#FAFAFA', foreground: '#1F2937', muted: '#EDE9FE',
    success: '#059669', warning: '#D97706', error: '#DC2626', info: '#7C3AED',
    gradients: { primary: ['#7C3AED', '#6D28D9'], secondary: ['#F59E0B', '#D97706'], background: ['#FAFAFA', '#EDE9FE'] },
    shadows: buildShadows('#7C3AED'),
  },

  'social-factory': {
    name: 'Social Content Factory', slug: 'social-factory', category: 'ai', icon: '🎬',
    description: 'AI social media content calendar, caption gen & auto-posting',
    primary: '#831843', secondary: '#EA580C', accent: '#DB2777',
    background: '#FFF1F2', foreground: '#1F2937', muted: '#FCE7F3',
    success: '#059669', warning: '#D97706', error: '#DC2626', info: '#EC4899',
    gradients: { primary: ['#831843', '#BE185D'], secondary: ['#EA580C', '#F97316'], background: ['#FFF1F2', '#FCE7F3'] },
    shadows: buildShadows('#831843'),
  },

  'emailscraper-pro': {
    name: 'EmailScraper Pro', slug: 'emailscraper-pro', category: 'productivity', icon: '🔍',
    description: 'B2B email discovery and lead generation tool for Nigeria',
    primary: '#075985', secondary: '#B45309', accent: '#0891B2',
    background: '#FAFAFA', foreground: '#18181B', muted: '#E4E4E7',
    success: '#059669', warning: '#D97706', error: '#DC2626', info: '#0284C7',
    gradients: { primary: ['#075985', '#0369A1'], secondary: ['#B45309', '#D97706'], background: ['#FAFAFA', '#F4F4F5'] },
    shadows: buildShadows('#075985'),
  },

  // ─── NAIJA FIT ─────────────────────────────────────────────────────────────

  'naija-fit': {
    name: 'NaijaFit', slug: 'naija-fit', category: 'health', icon: '💪',
    description: 'Nigerian fitness — workout plans, meal tracking, AI coach, community challenges',
    primary: '#065F46', secondary: '#0891B2', accent: '#10B981',
    background: '#F0FFF4', foreground: '#1C1917', muted: '#D1FAE5',
    success: '#10B981', warning: '#D97706', error: '#DC2626', info: '#0891B2',
    gradients: { primary: ['#065F46', '#047857'], secondary: ['#0891B2', '#06B6D4'], background: ['#F0FFF4', '#D1FAE5'] },
    shadows: buildShadows('#065F46'),
  },

  // ─── AMEBOGIST ─────────────────────────────────────────────────────────────

  'amebogist': {
    name: 'AmeboGist', slug: 'amebogist', category: 'media', icon: '📰',
    description: "Nigeria's #1 Pidgin English news & gist platform — 12k+ users",
    primary: '#065F46', secondary: '#DC2626', accent: '#0891B2',
    background: '#FFFBEB', foreground: '#1C1917', muted: '#FEF3C7',
    success: '#059669', warning: '#D97706', error: '#DC2626', info: '#0284C7',
    gradients: { primary: ['#065F46', '#047857'], secondary: ['#DC2626', '#EF4444'], background: ['#FFFBEB', '#FEF3C7'] },
    shadows: buildShadows('#065F46'),
  },

  // ─── EDUCENTER ─────────────────────────────────────────────────────────────

  'educenter': {
    name: 'EduCenter', slug: 'educenter', category: 'education', icon: '🎓',
    description: 'JAMB, WAEC & NECO CBT simulator with AI tutoring',
    primary: '#1E40AF', secondary: '#F59E0B', accent: '#7C3AED',
    background: '#F8FAFC', foreground: '#0F172A', muted: '#E2E8F0',
    success: '#10B981', warning: '#F59E0B', error: '#EF4444', info: '#3B82F6',
    gradients: { primary: ['#1E40AF', '#3B82F6'], secondary: ['#F59E0B', '#FBBF24'], background: ['#F8FAFC', '#F1F5F9'] },
    shadows: buildShadows('#1E40AF'),
  },

  // ─── CONCEPT PRODUCTS ──────────────────────────────────────────────────────

  'safe-ai': {
    name: 'SAFE AI', slug: 'safe-ai', category: 'security', icon: '🛡️',
    description: 'AI security intelligence for Nigerian law enforcement',
    primary: '#1E293B', secondary: '#DC2626', accent: '#475569',
    background: '#F1F5F9', foreground: '#0F172A', muted: '#E2E8F0',
    success: '#059669', warning: '#D97706', error: '#DC2626', info: '#3B82F6',
    gradients: { primary: ['#1E293B', '#334155'], secondary: ['#DC2626', '#EF4444'], background: ['#F1F5F9', '#E2E8F0'] },
    shadows: buildShadows('#1E293B'),
  },

  'afrohustle-os': {
    name: 'AfroHustle OS', slug: 'afrohustle-os', category: 'education', icon: '💼',
    description: '100 proven side-hustle blueprints for Nigerian entrepreneurs',
    primary: '#92400E', secondary: '#059669', accent: '#B45309',
    background: '#FFFBEB', foreground: '#1C1917', muted: '#FEF3C7',
    success: '#059669', warning: '#B45309', error: '#DC2626', info: '#0284C7',
    gradients: { primary: ['#92400E', '#B45309'], secondary: ['#059669', '#10B981'], background: ['#FFFBEB', '#FEF3C7'] },
    shadows: buildShadows('#92400E'),
  },

  'naijagig-matcher': {
    name: 'NaijaGig Matcher', slug: 'naijagig-matcher', category: 'marketplace', icon: '🔧',
    description: 'Hyper-local gig marketplace for Nigerian artisans',
    primary: '#4338CA', secondary: '#EA580C', accent: '#6366F1',
    background: '#EEF2FF', foreground: '#1E1B4B', muted: '#E0E7FF',
    success: '#059669', warning: '#EA580C', error: '#DC2626', info: '#6366F1',
    gradients: { primary: ['#4338CA', '#6366F1'], secondary: ['#EA580C', '#F97316'], background: ['#EEF2FF', '#E0E7FF'] },
    shadows: buildShadows('#4338CA'),
  },

  'kolo-ai': {
    name: 'KoloAI', slug: 'kolo-ai', category: 'fintech', icon: '👥',
    description: 'Digital Ajo/Esusu thrift collector with AI default prediction',
    primary: '#065F46', secondary: '#CA8A04', accent: '#0D9488',
    background: '#ECFDF5', foreground: '#022C22', muted: '#D1FAE5',
    success: '#0D9488', warning: '#CA8A04', error: '#DC2626', info: '#14B8A6',
    gradients: { primary: ['#065F46', '#047857'], secondary: ['#CA8A04', '#EAB308'], background: ['#ECFDF5', '#D1FAE5'] },
    shadows: buildShadows('#065F46'),
  },

  'borderless-remit': {
    name: 'BorderlessRemit', slug: 'borderless-remit', category: 'fintech', icon: '💱',
    description: 'Real-time Nigerian remittance rate comparison',
    primary: '#1D4ED8', secondary: '#059669', accent: '#2563EB',
    background: '#EFF6FF', foreground: '#1E3A8A', muted: '#DBEAFE',
    success: '#059669', warning: '#D97706', error: '#DC2626', info: '#2563EB',
    gradients: { primary: ['#1D4ED8', '#3B82F6'], secondary: ['#059669', '#10B981'], background: ['#EFF6FF', '#DBEAFE'] },
    shadows: buildShadows('#1D4ED8'),
  },

  'receipt-genius': {
    name: 'ReceiptGenius NG', slug: 'receipt-genius', category: 'fintech', icon: '🧾',
    description: 'VAT-compliant invoice & receipt generator for Nigerian SMEs',
    primary: '#374151', secondary: '#059669', accent: '#6B7280',
    background: '#F9FAFB', foreground: '#111827', muted: '#E5E7EB',
    success: '#059669', warning: '#D97706', error: '#DC2626', info: '#3B82F6',
    gradients: { primary: ['#374151', '#4B5563'], secondary: ['#059669', '#10B981'], background: ['#F9FAFB', '#F3F4F6'] },
    shadows: buildShadows('#374151'),
  },

  'power-alert': {
    name: 'PowerAlert NG', slug: 'power-alert', category: 'utilities', icon: '⚡',
    description: 'Crowd-sourced NEPA/EKEDC light tracker + solar calculator',
    primary: '#B45309', secondary: '#059669', accent: '#F59E0B',
    background: '#FFFBEB', foreground: '#1C1917', muted: '#FEF3C7',
    success: '#059669', warning: '#B45309', error: '#DC2626', info: '#0284C7',
    gradients: { primary: ['#B45309', '#D97706'], secondary: ['#059669', '#10B981'], background: ['#FFFBEB', '#FEF3C7'] },
    shadows: buildShadows('#B45309'),
  },

  'farmgate-direct': {
    name: 'FarmGate Direct', slug: 'farmgate-direct', category: 'marketplace', icon: '🌾',
    description: 'Direct farmer-to-buyer marketplace — cuts out middlemen',
    primary: '#166534', secondary: '#92400E', accent: '#16A34A',
    background: '#F0FDF4', foreground: '#14532D', muted: '#DCFCE7',
    success: '#16A34A', warning: '#92400E', error: '#DC2626', info: '#0284C7',
    gradients: { primary: ['#166534', '#15803D'], secondary: ['#92400E', '#B45309'], background: ['#F0FDF4', '#DCFCE7'] },
    shadows: buildShadows('#166534'),
  },

  'afrocopy-ai': {
    name: 'AfroCopy AI', slug: 'afrocopy-ai', category: 'ai', icon: '✍️',
    description: 'African-first AI copywriting — Pidgin, Yoruba, Igbo, Hausa',
    primary: '#7C2D12', secondary: '#6B21A8', accent: '#C2410C',
    background: '#FFF7ED', foreground: '#1C1917', muted: '#FFEDD5',
    success: '#059669', warning: '#D97706', error: '#DC2626', info: '#A855F7',
    gradients: { primary: ['#7C2D12', '#9A3412'], secondary: ['#6B21A8', '#7C3AED'], background: ['#FFF7ED', '#FFEDD5'] },
    shadows: buildShadows('#7C2D12'),
  },

  'skill2cash': {
    name: 'Skill2Cash Board', slug: 'skill2cash', category: 'marketplace', icon: '🎭',
    description: 'Anonymous skill marketplace for Gen-Z Nigerians — video showcase',
    primary: '#4C1D95', secondary: '#E11D48', accent: '#7C3AED',
    background: '#FAF5FF', foreground: '#1F2937', muted: '#EDE9FE',
    success: '#059669', warning: '#D97706', error: '#E11D48', info: '#8B5CF6',
    gradients: { primary: ['#4C1D95', '#6D28D9'], secondary: ['#E11D48', '#F43F5E'], background: ['#FAF5FF', '#EDE9FE'] },
    shadows: buildShadows('#4C1D95'),
  },

  'anontruth-mic': {
    name: 'AnonTruth Mic', slug: 'anontruth-mic', category: 'social', icon: '🎤',
    description: 'Temporary anonymous audio drops — voice-distorted, auto-deleted',
    primary: '#18181B', secondary: '#EF4444', accent: '#3F3F46',
    background: '#FAFAFA', foreground: '#18181B', muted: '#E4E4E7',
    success: '#059669', warning: '#D97706', error: '#EF4444', info: '#3B82F6',
    gradients: { primary: ['#18181B', '#27272A'], secondary: ['#EF4444', '#F87171'], background: ['#FAFAFA', '#F4F4F5'] },
    shadows: buildShadows('#18181B'),
  },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

export const MAIN_PRODUCTS = Object.values(BOLDMIND_COLOR_SCHEMES).filter(
  (p) => p.slug !== 'boldmind-hub',
);

export function getColorScheme(slug: string): ProductColorScheme {
  return BOLDMIND_COLOR_SCHEMES[slug] || BOLDMIND_COLOR_SCHEMES['boldmind-hub']!;
}

export function getCategoryColorSchemes(category: string): ProductColorScheme[] {
  return Object.values(BOLDMIND_COLOR_SCHEMES).filter((s) => s.category === category);
}

export function hexToHSL(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

export function getContrastColor(hexColor: string): string {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#1A202C' : '#FAFAF9';
}