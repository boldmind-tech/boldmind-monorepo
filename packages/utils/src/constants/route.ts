export const ROUTES = {
  // Main routes
  HOME: '/',
  ABOUT: '/about',
  PRODUCTS: '/products',
  CONTACT: '/contact',
  
  // Auth routes
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  
  // Dashboard routes
  DASHBOARD: '/dashboard',
  PROFILE: '/dashboard/profile',
  SETTINGS: '/dashboard/settings',
  
  // Product specific routes
  AMEBOGIST: {
    HOME: '/amebogist',
    NEWS: '/amebogist/news',
    TECH: '/amebogist/tech',
    LIFESTYLE: '/amebogist/lifestyle'
  },
  
  EDUCENTER: {
    HOME: '/educenter',
    COURSES: '/educenter/courses',
    JAMB: '/educenter/jamb',
    SUBSCRIPTION: '/educenter/subscription'
  },
  
  BOLDMIND_OS: {
    HOME: '/boldmind-os',
    CAPTURE: '/boldmind-os/capture',
    FOCUS: '/boldmind-os/focus',
    CONNECT: '/boldmind-os/connect',
    CREATE: '/boldmind-os/create',
    REFLECT: '/boldmind-os/reflect'
  },
  
  PLANAI: {
    HOME: '/planai',
    RECEPTIONIST: '/planai/receptionist',
    SOCIAL_FACTORY: '/planai/social-factory',
    CREDIBILITY_HUBS: '/planai/credibility-hubs'
  },
  
  API: {
    AUTH: '/api/auth',
    PAYMENTS: '/api/payments',
    WEBHOOKS: '/api/webhooks'
  }
} as const;