// packages/utils/src/constants/colors.ts

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

export const BOLDMIND_COLOR_SCHEMES: Record<string, ProductColorScheme> = {
  // Main Products
  'boldmind-hub': {
    name: 'BoldMind Hub',
    slug: 'boldmind-hub',
    category: 'ecosystem',
    primary: '#00143C', // Navy Blue
    secondary: '#FFC800', // Gold
    accent: '#2A4A6E', // Light Navy
    background: '#FFFFFF',
    foreground: '#111827',
    muted: '#F3F4F6',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#00143C', '#002966'],
      secondary: ['#FFC800', '#FFD95C'],
      background: ['#FFFFFF', '#F9FAFB']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 20, 60, 0.05)',
      md: '0 4px 6px -1px rgba(0, 20, 60, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 20, 60, 0.1)',
      xl: '0 20px 25px -5px rgba(0, 20, 60, 0.1)'
    }
  },

  'amebogist': {
    name: 'AmeboGist',
    slug: 'amebogist',
    category: 'media',
    primary: '#00A859', // Green
    secondary: '#FF6B35', // Orange
    accent: '#007A3D', // Dark Green
    background: '#FFFFFF',
    foreground: '#1A1A1A',
    muted: '#E8F5E9',
    success: '#00A859',
    warning: '#FF6B35',
    error: '#FF3B30',
    info: '#007AFF',
    gradients: {
      primary: ['#00A859', '#00C964'],
      secondary: ['#FF6B35', '#FF8C42'],
      background: ['#FFFFFF', '#F8F9FA']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 168, 89, 0.05)',
      md: '0 4px 6px -1px rgba(0, 168, 89, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 168, 89, 0.1)',
      xl: '0 20px 25px -5px rgba(0, 168, 89, 0.1)'
    }
  },

  'educenter': {
    name: 'EduCenter',
    slug: 'educenter',
    category: 'education',
    primary: '#2A4A6E', // Blue
    secondary: '#FFD95C', // Yellow
    accent: '#1A3452', // Dark Blue
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#E3F2FD',
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    info: '#2196F3',
    gradients: {
      primary: ['#2A4A6E', '#3A5A8E'],
      secondary: ['#FFD95C', '#FFE68C'],
      background: ['#FFFFFF', '#F5F7FA']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(42, 74, 110, 0.05)',
      md: '0 4px 6px -1px rgba(42, 74, 110, 0.1)',
      lg: '0 10px 15px -3px rgba(42, 74, 110, 0.1)',
      xl: '0 20px 25px -5px rgba(42, 74, 110, 0.1)'
    }
  },

  // PlanAI Suite Products
  'planai-suite': {
    name: 'PlanAI Suite',
    slug: 'planai-suite',
    category: 'ai',
    primary: '#7C3AED', // Purple
    secondary: '#10B981', // Emerald
    accent: '#5B21B6', // Dark Purple
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F5F3FF',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#7C3AED', '#8B5CF6'],
      secondary: ['#10B981', '#34D399'],
      background: ['#FFFFFF', '#F9FAFB']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(124, 58, 237, 0.05)',
      md: '0 4px 6px -1px rgba(124, 58, 237, 0.1)',
      lg: '0 10px 15px -3px rgba(124, 58, 237, 0.1)',
      xl: '0 20px 25px -5px rgba(124, 58, 237, 0.1)'
    }
  },

  // === CONCEPT APP SHARED THEME ===
  'concept-app': {
    name: 'Concept App',
    slug: 'concept-app',
    category: 'concept',
    primary: '#64748B', // Slate
    secondary: '#0F172A', // Dark
    accent: '#38BDF8', // Sky
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F1F5F9',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#64748B', '#94A3B8'],
      secondary: ['#0F172A', '#1E293B'],
      background: ['#FFFFFF', '#F8FAFC']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(100, 116, 139, 0.05)',
      md: '0 4px 6px -1px rgba(100, 116, 139, 0.1)',
      lg: '0 10px 15px -3px rgba(100, 116, 139, 0.1)',
      xl: '0 20px 25px -5px rgba(100, 116, 139, 0.1)'
    }
  },

  'ai-receptionist': {
    name: 'AI Receptionist',
    slug: 'ai-receptionist',
    category: 'ai',
    primary: '#3B82F6', // Blue
    secondary: '#8B5CF6', // Purple
    accent: '#1D4ED8', // Dark Blue
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#DBEAFE',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#3B82F6', '#60A5FA'],
      secondary: ['#8B5CF6', '#A78BFA'],
      background: ['#FFFFFF', '#F9FAFB']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(59, 130, 246, 0.05)',
      md: '0 4px 6px -1px rgba(59, 130, 246, 0.1)',
      lg: '0 10px 15px -3px rgba(59, 130, 246, 0.1)',
      xl: '0 20px 25px -5px rgba(59, 130, 246, 0.1)'
    }
  },

  // Building Products
  'boldmind-os': {
    name: 'BoldMind OS',
    slug: 'boldmind-os',
    category: 'productivity',
    primary: '#E63946', // Red
    secondary: '#FFC800', // Gold
    accent: '#B91C1C', // Dark Red
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#FEF2F2',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#E63946', '#EF4444'],
      secondary: ['#FFC800', '#FFD95C'],
      background: ['#FFFFFF', '#F9FAFB']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(230, 57, 70, 0.05)',
      md: '0 4px 6px -1px rgba(230, 57, 70, 0.1)',
      lg: '0 10px 15px -3px rgba(230, 57, 70, 0.1)',
      xl: '0 20px 25px -5px rgba(230, 57, 70, 0.1)'
    }
  },

  'naija-fither': {
    name: 'Naija FitHer',
    slug: 'naija-fither',
    category: 'health',
    primary: '#FF4081', // Pink
    secondary: '#9C27B0', // Purple
    accent: '#E91E63', // Dark Pink
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#FCE4EC',
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    info: '#2196F3',
    gradients: {
      primary: ['#FF4081', '#FF79B0'],
      secondary: ['#9C27B0', '#BA68C8'],
      background: ['#FFFFFF', '#F9FAFB']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(255, 64, 129, 0.05)',
      md: '0 4px 6px -1px rgba(255, 64, 129, 0.1)',
      lg: '0 10px 15px -3px rgba(255, 64, 129, 0.1)',
      xl: '0 20px 25px -5px rgba(255, 64, 129, 0.1)'
    }
  },

  'emailscraper-pro': {
    name: 'EmailScraper Pro',
    slug: 'emailscraper-pro',
    category: 'lead-gen',
    primary: '#2196F3', // Blue
    secondary: '#FFFFFF',
    accent: '#0D47A1', // Dark Blue
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#E3F2FD',
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    info: '#2196F3',
    gradients: {
      primary: ['#2196F3', '#42A5F5'],
      secondary: ['#FFFFFF', '#F5F5F5'],
      background: ['#FFFFFF', '#F9FAFB']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(33, 150, 243, 0.05)',
      md: '0 4px 6px -1px rgba(33, 150, 243, 0.1)',
      lg: '0 10px 15px -3px rgba(33, 150, 243, 0.1)',
      xl: '0 20px 25px -5px rgba(33, 150, 243, 0.1)'
    }
  },

  // Concept Apps - Unified Theme
  'safe-ai': {
    name: 'SAFE AI',
    slug: 'safe-ai',
    category: 'security',
    primary: '#64748B', // Slate
    secondary: '#0F172A', // Dark
    accent: '#38BDF8', // Sky
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F1F5F9',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#64748B', '#94A3B8'],
      secondary: ['#0F172A', '#1E293B'],
      background: ['#FFFFFF', '#F8FAFC']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(100, 116, 139, 0.05)',
      md: '0 4px 6px -1px rgba(100, 116, 139, 0.1)',
      lg: '0 10px 15px -3px rgba(100, 116, 139, 0.1)',
      xl: '0 20px 25px -5px rgba(100, 116, 139, 0.1)'
    }
  },

  'afrohustle-os': {
    name: 'AfroHustle OS',
    slug: 'afrohustle-os',
    category: 'education',
    primary: '#64748B', // Slate
    secondary: '#0F172A', // Dark
    accent: '#38BDF8', // Sky
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F1F5F9',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#64748B', '#94A3B8'],
      secondary: ['#0F172A', '#1E293B'],
      background: ['#FFFFFF', '#F8FAFC']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(100, 116, 139, 0.05)',
      md: '0 4px 6px -1px rgba(100, 116, 139, 0.1)',
      lg: '0 10px 15px -3px rgba(100, 116, 139, 0.1)',
      xl: '0 20px 25px -5px rgba(100, 116, 139, 0.1)'
    }
  },

  'kolo-ai': {
    name: 'KoloAI',
    slug: 'kolo-ai',
    category: 'fintech',
    primary: '#64748B', // Slate
    secondary: '#0F172A', // Dark
    accent: '#38BDF8', // Sky
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F1F5F9',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#64748B', '#94A3B8'],
      secondary: ['#0F172A', '#1E293B'],
      background: ['#FFFFFF', '#F8FAFC']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(100, 116, 139, 0.05)',
      md: '0 4px 6px -1px rgba(100, 116, 139, 0.1)',
      lg: '0 10px 15px -3px rgba(100, 116, 139, 0.1)',
      xl: '0 20px 25px -5px rgba(100, 116, 139, 0.1)'
    }
  },

  'afrocopy-ai': {
    name: 'AfroCopy AI',
    slug: 'afrocopy-ai',
    category: 'ai',
    primary: '#64748B', // Slate
    secondary: '#0F172A', // Dark
    accent: '#38BDF8', // Sky
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F1F5F9',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#64748B', '#94A3B8'],
      secondary: ['#0F172A', '#1E293B'],
      background: ['#FFFFFF', '#F8FAFC']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(100, 116, 139, 0.05)',
      md: '0 4px 6px -1px rgba(100, 116, 139, 0.1)',
      lg: '0 10px 15px -3px rgba(100, 116, 139, 0.1)',
      xl: '0 20px 25px -5px rgba(100, 116, 139, 0.1)'
    }
  },

  'skill2cash-board': {
    name: 'Skill2Cash Board',
    slug: 'skill2cash-board',
    category: 'marketplace',
    primary: '#64748B', // Slate
    secondary: '#0F172A', // Dark
    accent: '#38BDF8', // Sky
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F1F5F9',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#64748B', '#94A3B8'],
      secondary: ['#0F172A', '#1E293B'],
      background: ['#FFFFFF', '#F8FAFC']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(100, 116, 139, 0.05)',
      md: '0 4px 6px -1px rgba(100, 116, 139, 0.1)',
      lg: '0 10px 15px -3px rgba(100, 116, 139, 0.1)',
      xl: '0 20px 25px -5px rgba(100, 116, 139, 0.1)'
    }
  },

  'anontruth-mic': {
    name: 'AnonTruth Mic',
    slug: 'anontruth-mic',
    category: 'social',
    primary: '#64748B', // Slate
    secondary: '#0F172A', // Dark
    accent: '#38BDF8', // Sky
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F1F5F9',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#64748B', '#94A3B8'],
      secondary: ['#0F172A', '#1E293B'],
      background: ['#FFFFFF', '#F8FAFC']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(100, 116, 139, 0.05)',
      md: '0 4px 6px -1px rgba(100, 116, 139, 0.1)',
      lg: '0 10px 15px -3px rgba(100, 116, 139, 0.1)',
      xl: '0 20px 25px -5px rgba(100, 116, 139, 0.1)'
    }
  },

  // === SOCIAL FACTORY ===
  'social-factory': {
    name: 'Social Media Content Factory',
    slug: 'social-factory',
    category: 'ai',
    primary: '#9C27B0', // Purple
    secondary: '#FF4081', // Pink
    accent: '#7B1FA2', // Dark Purple
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F3E5F5',
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    info: '#2196F3',
    gradients: {
      primary: ['#9C27B0', '#AB47BC'],
      secondary: ['#FF4081', '#FF79B0'],
      background: ['#FFFFFF', '#F9FAFB']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(156, 39, 176, 0.05)',
      md: '0 4px 6px -1px rgba(156, 39, 176, 0.1)',
      lg: '0 10px 15px -3px rgba(156, 39, 176, 0.1)',
      xl: '0 20px 25px -5px rgba(156, 39, 176, 0.1)'
    }
  },

  // === PLANAI SUITE SUB-PRODUCTS (Inherit Purple Theme) ===
  'credibility-hubs': {
    name: 'Professional Credibility Hubs',
    slug: 'credibility-hubs',
    category: 'ai',
    primary: '#7C3AED', // Purple
    secondary: '#10B981', // Emerald
    accent: '#5B21B6', // Dark Purple
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F5F3FF',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#7C3AED', '#8B5CF6'],
      secondary: ['#10B981', '#34D399'],
      background: ['#FFFFFF', '#F9FAFB']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(124, 58, 237, 0.05)',
      md: '0 4px 6px -1px rgba(124, 58, 237, 0.1)',
      lg: '0 10px 15px -3px rgba(124, 58, 237, 0.1)',
      xl: '0 20px 25px -5px rgba(124, 58, 237, 0.1)'
    }
  },

  'business-planning': {
    name: 'AI Business Planning',
    slug: 'business-planning',
    category: 'ai',
    primary: '#7C3AED',
    secondary: '#10B981',
    accent: '#5B21B6',
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F5F3FF',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#7C3AED', '#8B5CF6'],
      secondary: ['#10B981', '#34D399'],
      background: ['#FFFFFF', '#F9FAFB']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(124, 58, 237, 0.05)',
      md: '0 4px 6px -1px rgba(124, 58, 237, 0.1)',
      lg: '0 10px 15px -3px rgba(124, 58, 237, 0.1)',
      xl: '0 20px 25px -5px rgba(124, 58, 237, 0.1)'
    }
  },

  'financial-forecasting': {
    name: 'Financial Forecasting',
    slug: 'financial-forecasting',
    category: 'ai',
    primary: '#7C3AED',
    secondary: '#10B981',
    accent: '#5B21B6',
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F5F3FF',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#7C3AED', '#8B5CF6'],
      secondary: ['#10B981', '#34D399'],
      background: ['#FFFFFF', '#F9FAFB']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(124, 58, 237, 0.05)',
      md: '0 4px 6px -1px rgba(124, 58, 237, 0.1)',
      lg: '0 10px 15px -3px rgba(124, 58, 237, 0.1)',
      xl: '0 20px 25px -5px rgba(124, 58, 237, 0.1)'
    }
  },

  'investor-readiness': {
    name: 'Investor Readiness Suite',
    slug: 'investor-readiness',
    category: 'ai',
    primary: '#7C3AED',
    secondary: '#10B981',
    accent: '#5B21B6',
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F5F3FF',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#7C3AED', '#8B5CF6'],
      secondary: ['#10B981', '#34D399'],
      background: ['#FFFFFF', '#F9FAFB']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(124, 58, 237, 0.05)',
      md: '0 4px 6px -1px rgba(124, 58, 237, 0.1)',
      lg: '0 10px 15px -3px rgba(124, 58, 237, 0.1)',
      xl: '0 20px 25px -5px rgba(124, 58, 237, 0.1)'
    }
  },

  'branding-design': {
    name: 'Branding & Design Tools',
    slug: 'branding-design',
    category: 'ai',
    primary: '#7C3AED',
    secondary: '#10B981',
    accent: '#5B21B6',
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F5F3FF',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#7C3AED', '#8B5CF6'],
      secondary: ['#10B981', '#34D399'],
      background: ['#FFFFFF', '#F9FAFB']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(124, 58, 237, 0.05)',
      md: '0 4px 6px -1px rgba(124, 58, 237, 0.1)',
      lg: '0 10px 15px -3px rgba(124, 58, 237, 0.1)',
      xl: '0 20px 25px -5px rgba(124, 58, 237, 0.1)'
    }
  },

  'digital-storefronts': {
    name: 'Digital Storefronts',
    slug: 'digital-storefronts',
    category: 'marketplace',
    primary: '#7C3AED',
    secondary: '#10B981',
    accent: '#5B21B6',
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F5F3FF',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#7C3AED', '#8B5CF6'],
      secondary: ['#10B981', '#34D399'],
      background: ['#FFFFFF', '#F9FAFB']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(124, 58, 237, 0.05)',
      md: '0 4px 6px -1px rgba(124, 58, 237, 0.1)',
      lg: '0 10px 15px -3px rgba(124, 58, 237, 0.1)',
      xl: '0 20px 25px -5px rgba(124, 58, 237, 0.1)'
    }
  },

  'marketing-automation': {
    name: 'Marketing Automation',
    slug: 'marketing-automation',
    category: 'ai',
    primary: '#7C3AED',
    secondary: '#10B981',
    accent: '#5B21B6',
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F5F3FF',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#7C3AED', '#8B5CF6'],
      secondary: ['#10B981', '#34D399'],
      background: ['#FFFFFF', '#F9FAFB']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(124, 58, 237, 0.05)',
      md: '0 4px 6px -1px rgba(124, 58, 237, 0.1)',
      lg: '0 10px 15px -3px rgba(124, 58, 237, 0.1)',
      xl: '0 20px 25px -5px rgba(124, 58, 237, 0.1)'
    }
  },

  'analytics-dashboard': {
    name: 'Analytics Dashboard',
    slug: 'analytics-dashboard',
    category: 'ai',
    primary: '#7C3AED',
    secondary: '#10B981',
    accent: '#5B21B6',
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F5F3FF',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#7C3AED', '#8B5CF6'],
      secondary: ['#10B981', '#34D399'],
      background: ['#FFFFFF', '#F9FAFB']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(124, 58, 237, 0.05)',
      md: '0 4px 6px -1px rgba(124, 58, 237, 0.1)',
      lg: '0 10px 15px -3px rgba(124, 58, 237, 0.1)',
      xl: '0 20px 25px -5px rgba(124, 58, 237, 0.1)'
    }
  },

  // === MARKETPLACE PRODUCTS ===
  'naijagig-matcher': {
    name: 'NaijaGig Matcher',
    slug: 'naijagig-matcher',
    category: 'marketplace',
    primary: '#64748B', // Slate
    secondary: '#0F172A', // Dark
    accent: '#38BDF8', // Sky
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F1F5F9',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#64748B', '#94A3B8'],
      secondary: ['#0F172A', '#1E293B'],
      background: ['#FFFFFF', '#F8FAFC']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(100, 116, 139, 0.05)',
      md: '0 4px 6px -1px rgba(100, 116, 139, 0.1)',
      lg: '0 10px 15px -3px rgba(100, 116, 139, 0.1)',
      xl: '0 20px 25px -5px rgba(100, 116, 139, 0.1)'
    }
  },

  // === FINTECH PRODUCTS ===
  'borderless-remit': {
    name: 'BorderlessRemit Tracker',
    slug: 'borderless-remit',
    category: 'fintech',
    primary: '#64748B', // Slate
    secondary: '#0F172A', // Dark
    accent: '#38BDF8', // Sky
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F1F5F9',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#64748B', '#94A3B8'],
      secondary: ['#0F172A', '#1E293B'],
      background: ['#FFFFFF', '#F8FAFC']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(100, 116, 139, 0.05)',
      md: '0 4px 6px -1px rgba(100, 116, 139, 0.1)',
      lg: '0 10px 15px -3px rgba(100, 116, 139, 0.1)',
      xl: '0 20px 25px -5px rgba(100, 116, 139, 0.1)'
    }
  },

  'receipt-genius': {
    name: 'ReceiptGenius NG',
    slug: 'receipt-genius',
    category: 'fintech',
    primary: '#64748B', // Slate
    secondary: '#0F172A', // Dark
    accent: '#38BDF8', // Sky
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F1F5F9',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#64748B', '#94A3B8'],
      secondary: ['#0F172A', '#1E293B'],
      background: ['#FFFFFF', '#F8FAFC']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(100, 116, 139, 0.05)',
      md: '0 4px 6px -1px rgba(100, 116, 139, 0.1)',
      lg: '0 10px 15px -3px rgba(100, 116, 139, 0.1)',
      xl: '0 20px 25px -5px rgba(100, 116, 139, 0.1)'
    }
  },

  // === UTILITY PRODUCTS ===
  'power-alert': {
    name: 'PowerAlert NG',
    slug: 'power-alert',
    category: 'utilities',
    primary: '#64748B', // Slate
    secondary: '#0F172A', // Dark
    accent: '#38BDF8', // Sky
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F1F5F9',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#64748B', '#94A3B8'],
      secondary: ['#0F172A', '#1E293B'],
      background: ['#FFFFFF', '#F8FAFC']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(100, 116, 139, 0.05)',
      md: '0 4px 6px -1px rgba(100, 116, 139, 0.1)',
      lg: '0 10px 15px -3px rgba(100, 116, 139, 0.1)',
      xl: '0 20px 25px -5px rgba(100, 116, 139, 0.1)'
    }
  },

  'farmgate-direct': {
    name: 'FarmGate Direct',
    slug: 'farmgate-direct',
    category: 'marketplace',
    primary: '#64748B', // Slate
    secondary: '#0F172A', // Dark
    accent: '#38BDF8', // Sky
    background: '#FFFFFF',
    foreground: '#1F2937',
    muted: '#F1F5F9',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    gradients: {
      primary: ['#64748B', '#94A3B8'],
      secondary: ['#0F172A', '#1E293B'],
      background: ['#FFFFFF', '#F8FAFC']
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(100, 116, 139, 0.05)',
      md: '0 4px 6px -1px rgba(100, 116, 139, 0.1)',
      lg: '0 10px 15px -3px rgba(100, 116, 139, 0.1)',
      xl: '0 20px 25px -5px rgba(100, 116, 139, 0.1)'
    }
  }
};

// Utility Functions
export function getColorScheme(slug: string): ProductColorScheme {
  return BOLDMIND_COLOR_SCHEMES[slug] || BOLDMIND_COLOR_SCHEMES['boldmind-hub']!;
}

export function getCategoryColorSchemes(category: string): ProductColorScheme[] {
  return Object.values(BOLDMIND_COLOR_SCHEMES)
    .filter(scheme => scheme.category === category);
}

export function generateCSSVariables(slug: string): string {
  const scheme = getColorScheme(slug);

  return `
    :root[data-product="${slug}"] {
      /* Primary Colors */
      --color-primary: ${scheme.primary};
      --color-primary-dark: color-mix(in srgb, ${scheme.primary} 90%, black);
      --color-primary-light: color-mix(in srgb, ${scheme.primary} 10%, white);
      
      /* Secondary Colors */
      --color-secondary: ${scheme.secondary};
      --color-secondary-dark: color-mix(in srgb, ${scheme.secondary} 90%, black);
      --color-secondary-light: color-mix(in srgb, ${scheme.secondary} 10%, white);
      
      /* Accent Colors */
      --color-accent: ${scheme.accent};
      
      /* Background & Foreground */
      --color-background: ${scheme.background};
      --color-foreground: ${scheme.foreground};
      --color-muted: ${scheme.muted};
      
      /* Status Colors */
      --color-success: ${scheme.success};
      --color-warning: ${scheme.warning};
      --color-error: ${scheme.error};
      --color-info: ${scheme.info};
      
      /* Gradients */
      --gradient-primary: linear-gradient(135deg, ${scheme.gradients.primary[0]}, ${scheme.gradients.primary[1]});
      --gradient-secondary: linear-gradient(135deg, ${scheme.gradients.secondary[0]}, ${scheme.gradients.secondary[1]});
      --gradient-background: linear-gradient(135deg, ${scheme.gradients.background[0]}, ${scheme.gradients.background[1]});
      
      /* Shadows */
      --shadow-sm: ${scheme.shadows.sm};
      --shadow-md: ${scheme.shadows.md};
      --shadow-lg: ${scheme.shadows.lg};
      --shadow-xl: ${scheme.shadows.xl};
    }
  `;
}

export function getContrastColor(hexColor: string): string {
  // Remove the # if present
  const hex = hexColor.replace('#', '');

  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return black or white based on luminance
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

export function generateThemeClasses(slug: string): Record<string, string> {
  const scheme = getColorScheme(slug);

  return {
    'bg-primary': `bg-[${scheme.primary}]`,
    'text-primary': `text-[${scheme.primary}]`,
    'border-primary': `border-[${scheme.primary}]`,
    'bg-secondary': `bg-[${scheme.secondary}]`,
    'text-secondary': `text-[${scheme.secondary}]`,
    'border-secondary': `border-[${scheme.secondary}]`,
    'bg-accent': `bg-[${scheme.accent}]`,
    'text-accent': `text-[${scheme.accent}]`,
    'border-accent': `border-[${scheme.accent}]`,
  };
}