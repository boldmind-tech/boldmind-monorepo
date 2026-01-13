// packages/utils/src/constants/routes.ts
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  SUBSCRIPTION: '/subscription',
  
  // EduCenter
  EDUCENTER: {
    STUDY_HUB: '/study-hub',
    BUSINESS_SCHOOL: '/business-school',
    AI_LAB: '/ai-lab',
  },
  
  // Naija FitHer
  NAIJA_FITHER: {
    MEAL_PLANS: '/meal-plans',
    WORKOUTS: '/workouts',
    PROGRESS: '/progress',
  },
  
  // BoldMind OS
  BOLDMIND_OS: {
    CAPTURE: '/capture',
    FOCUS: '/focus',
    CONNECT: '/connect',
    CREATE: '/create',
    REFLECT: '/reflect',
  },
} as const;