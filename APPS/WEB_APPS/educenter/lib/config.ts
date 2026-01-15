// EduCenter Configuration using shared packages

// Past Questions API Configuration
export const PAST_QUESTIONS_CONFIG = {
  baseUrl: 'https://questions.aloc.com.ng/api/v2',
  accessToken: process.env.NEXT_PUBLIC_ALOC_ACCESS_TOKEN || '',
  endpoints: {
    getQuestions: '/q',
    getSubjects: '/subjects',
    getYears: '/years',
  },
};

// Subjects available
export const SUBJECTS = [
  { value: 'english', label: 'English Language' },
  { value: 'mathematics', label: 'Mathematics' },
  { value: 'commerce', label: 'Commerce' },
  { value: 'accounting', label: 'Accounting' },
  { value: 'biology', label: 'Biology' },
  { value: 'physics', label: 'Physics' },
  { value: 'chemistry', label: 'Chemistry' },
  { value: 'englishlit', label: 'English Literature' },
  { value: 'government', label: 'Government' },
  { value: 'crk', label: 'CRK' },
  { value: 'geography', label: 'Geography' },
  { value: 'economics', label: 'Economics' },
  { value: 'irk', label: 'IRK' },
  { value: 'civiledu', label: 'Civic Education' },
  { value: 'insurance', label: 'Insurance' },
  { value: 'currentaffairs', label: 'Current Affairs' },
  { value: 'history', label: 'History' },
];

// Exam years available
export const EXAM_YEARS = [
  '2000', '2001', '2002', '2003', '2004', '2005',
  '2006', '2007', '2008', '2009', '2010', '2011',
  '2012', '2013', '2014', '2015', '2016', '2017',
  '2018', '2019', '2020', '2021', '2022', '2023',
];

// Subscription Plans
export const SUBSCRIPTION_PLANS = {
  studyHub: {
    sixMonths: {
      name: 'Study Hub - 6 Months',
      price: 70000, // Paystack expects amount in kobo (₦700)
      duration: 6,
      features: [
        'All past questions (JAMB, WAEC, NECO)',
        'CBT practice mode',
        'Performance analytics',
        'Study plans & reminders',
        'Offline access',
        'Progress tracking',
      ],
    },
    oneYear: {
      name: 'Study Hub - 1 Year',
      price: 100000, // ₦1,000
      duration: 12,
      features: [
        'All past questions (JAMB, WAEC, NECO)',
        'CBT practice mode',
        'Performance analytics',
        'Study plans & reminders',
        'Offline access',
        'Progress tracking',
        'Priority support',
      ],
    },
  },
  businessSchool: {
    lifetime: {
      name: 'Digital Business School - Lifetime',
      price: 100000, // ₦1,000
      duration: null, // Lifetime
      features: [
        'Platform access',
        'Free courses library',
        'Community access',
        'Premium courses (paid separately)',
        'Expert-led content',
        'Sales funnel templates',
        'Marketing playbooks',
      ],
    },
  },
  aiLab: {
    lifetime: {
      name: 'AI Skills Lab - Lifetime',
      price: 100000, // ₦1,000
      duration: null, // Lifetime
      features: [
        'Platform access',
        'Free AI tools',
        'Basic tutorials',
        'Premium tools (paid separately)',
        'Weekly updates',
        'Prompt engineering course',
        'AI automation templates',
      ],
    },
  },
};

// API Endpoints
export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api',
  endpoints: {
    // Auth
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    
    // Users
    getUser: '/users/:uid',
    updateUser: '/users/:uid',
    
    // Study Hub
    getProgress: '/study-hub/progress/:uid',
    saveProgress: '/study-hub/progress',
    getLeaderboard: '/study-hub/leaderboard',
    
    // Business School
    getCourses: '/business-school/courses',
    getCourse: '/business-school/courses/:id',
    enrollCourse: '/business-school/enroll',
    
    // AI Lab
    getTools: '/ai-lab/tools',
    generateVideo: '/ai-lab/video-generate',
    automateWhatsApp: '/ai-lab/whatsapp-automation',
    
    // Subscriptions
    subscribe: '/subscriptions/subscribe',
    verifyPayment: '/subscriptions/verify',
    getSubscriptions: '/subscriptions/:uid',
  },
};

// Feature Flags
export const FEATURES = {
  studyHub: {
    cbtMode: true,
    offlineMode: true,
    aiExplanations: false, // Coming soon
  },
  businessSchool: {
    liveClasses: false, // Coming soon
    certifications: true,
  },
  aiLab: {
    videoGeneration: true,
    promptEngineering: true,
    whatsappAutomation: true,
  },
};