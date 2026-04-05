//#region src/types.d.ts
interface ApiResponse<T> {
  data: T;
  message?: string;
  statusCode?: number;
}
interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
type UserRole = 'user' | 'admin' | 'super_admin' | 'moderator' | 'support' | 'analyst' | 'manager';
interface AuthUser {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  role: UserRole;
  isActive: boolean;
  isSuperAdmin?: boolean;
  avatar?: string;
  createdAt: string;
  onboardingComplete?: boolean;
}
interface TokenPair {
  accessToken: string;
  refreshToken?: string;
}
interface AuthTokenResponse {
  user: AuthUser;
  tokens: TokenPair;
}
interface PaystackInit {
  authorizationUrl: string;
  reference: string;
  accessCode: string;
}
interface PaymentVerification {
  status: 'success' | 'failed' | 'pending';
  reference: string;
  amount: number;
  productSlug: string;
  plan: string;
  paidAt?: string;
}
interface Subscription {
  id: string;
  productSlug: string;
  productName?: string;
  plan: string;
  status: 'active' | 'expired' | 'cancelled';
  expiresAt?: string;
  renewsAt?: string;
  amount?: number;
}
interface ProductAccess {
  hasAccess: boolean;
  plan?: string;
  expiresAt?: string;
}
interface Article {
  id: string;
  slug: string;
  title: string;
  content?: string;
  excerpt?: string;
  coverImage?: string;
  category?: string;
  tags?: string[];
  status: 'draft' | 'published' | 'archived';
  isFeatured?: boolean;
  viewCount?: number;
  reactions?: Record<string, number>;
  commentCount?: number;
  author?: {
    id: string;
    fullName?: string;
    email: string;
    avatar?: string;
  };
  createdAt: string;
  publishedAt?: string;
  updatedAt: string;
}
interface ArticleComment {
  id: string;
  content: string;
  reactions?: Record<string, number>;
  isFlagged?: boolean;
  author?: {
    id: string;
    fullName?: string;
    avatar?: string;
  };
  createdAt: string;
}
interface ArticleCategory {
  id: string;
  name: string;
  slug: string;
  count?: number;
}
interface CreatorStats {
  totalArticles: number;
  totalViews: number;
  totalReactions: number;
  totalComments: number;
  publishedCount: number;
}
type ExamType = 'JAMB' | 'WAEC' | 'NECO' | 'GCE';
interface EduQuestion {
  id: string;
  question: string;
  options: Record<string, string>;
  answer?: string;
  explanation?: string;
  subject: string;
  examType: ExamType;
  year?: string;
  topic?: string;
}
interface CbtSession {
  id: string;
  examType: ExamType;
  subject: string;
  questions: EduQuestion[];
  startedAt: string;
  expiresAt?: string;
  status: 'active' | 'submitted' | 'abandoned';
}
interface CbtResult {
  sessionId: string;
  score: number;
  total: number;
  percentage: number;
  timeTaken?: number;
  answers: Record<string, string>;
  review?: Array<{
    questionId: string;
    correct: boolean;
    correctAnswer: string;
  }>;
}
interface EduDashboard {
  totalSessions: number;
  avgScore: number;
  questionsAnswered: number;
  subjectBreakdown?: Record<string, number>;
}
interface EduStreak {
  currentStreak: number;
  bestStreak: number;
  dailyGoal: number;
  todayCompleted: number;
  lastActive?: string;
}
interface LeaderboardEntry {
  rank: number;
  userId: string;
  fullName?: string;
  avatar?: string;
  score: number;
  sessions: number;
}
interface EduCourse {
  id: string;
  slug: string;
  title: string;
  description?: string;
  category?: string;
  level?: string;
  isPublished: boolean;
  enrollCount?: number;
  createdAt: string;
}
interface PlanAIJob {
  id: string;
  type: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  result?: unknown;
  createdAt: string;
  completedAt?: string;
}
interface BusinessPlan {
  jobId: string;
  status: string;
  plan?: string;
  sections?: Record<string, string>;
}
interface FinancialForecast {
  id: string;
  revenue: number[];
  expenses: number[];
  profit: number[];
  breakEven?: {
    month: number;
    amount: number;
  };
  currency: string;
  period: 'monthly' | 'annual';
}
interface BrandingJob {
  jobId: string;
  type: 'logo' | 'flyer' | 'brand-kit' | 'color-palette';
  status: string;
  imageUrl?: string;
  assets?: string[];
}
interface ReceptionistConfig {
  id: string;
  businessName: string;
  greeting?: string;
  isActive: boolean;
  whatsappPhone?: string;
}
interface ConversationMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}
interface Conversation {
  phone: string;
  messages: ConversationMessage[];
  isResolved: boolean;
  lastMessage: string;
  updatedAt: string;
}
interface KnowledgeBase {
  id: string;
  content: string;
  source?: string;
  createdAt: string;
}
interface Storefront {
  id: string;
  slug: string;
  name: string;
  description?: string;
  logo?: string;
  isActive: boolean;
  ownerId: string;
  createdAt: string;
}
interface StoreProduct {
  id: string;
  name: string;
  description?: string;
  price: number;
  currency: string;
  imageUrl?: string;
  stock?: number;
  isActive: boolean;
}
interface StoreOrder {
  id: string;
  productId: string;
  buyerEmail: string;
  amount: number;
  status: 'pending' | 'paid' | 'fulfilled' | 'cancelled';
  createdAt: string;
}
interface FitnessProfile {
  id: string;
  userId: string;
  age?: number;
  weight?: number;
  height?: number;
  goal?: string;
  activityLevel?: string;
  updatedAt: string;
}
interface Exercise {
  name: string;
  sets?: number;
  reps?: number;
  duration?: number;
  notes?: string;
}
interface WorkoutDay {
  day: number;
  exercises: Exercise[];
}
interface WorkoutPlan {
  id: string;
  title: string;
  weeks: number;
  days: WorkoutDay[];
  createdAt: string;
}
interface MealLog {
  id: string;
  meal: string;
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  loggedAt: string;
}
interface BodyMetric {
  id: string;
  weight?: number;
  bmi?: number;
  notes?: string;
  loggedAt: string;
}
interface FitnessDashboard {
  currentWeight?: number;
  weeklyWorkouts: number;
  caloriesThisWeek: number;
  streakDays: number;
}
interface WorkspaceMember {
  userId: string;
  role: 'owner' | 'admin' | 'member';
  joinedAt: string;
}
interface Workspace {
  id: string;
  name: string;
  description?: string;
  ownerId: string;
  members?: WorkspaceMember[];
  createdAt: string;
}
interface OsProject {
  id: string;
  name: string;
  description?: string;
  workspaceId: string;
  createdAt: string;
}
interface OsTask {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'in_progress' | 'done';
  assigneeId?: string;
  dueDate?: string;
  priority?: 'low' | 'medium' | 'high';
  workspaceId: string;
  projectId?: string;
  createdAt: string;
}
interface OsDashboard {
  totalTasks: number;
  completedToday: number;
  activeWorkspaces: number;
  upcomingDeadlines: OsTask[];
}
interface Notification {
  id: string;
  title?: string;
  message: string;
  type?: string;
  isRead: boolean;
  link?: string;
  createdAt: string;
}
interface MediaFile {
  id: string;
  url: string;
  key: string;
  mimeType: string;
  size: number;
  folder?: string;
  createdAt: string;
}
interface PresignedUrl {
  url: string;
  key: string;
  fields?: Record<string, string>;
}
interface EmailLead {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  domain?: string;
  verified: boolean;
  score?: number;
  source?: string;
  createdAt: string;
}
interface LeadList {
  id: string;
  name: string;
  count: number;
  createdAt: string;
}
interface AdminStats {
  totalUsers: number;
  activeUsers: number;
  totalRevenue: number;
  newUsersToday: number;
  productBreakdown: Record<string, number>;
}
interface AdminUser {
  id: string;
  email: string;
  fullName?: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
  lastLoginAt?: string;
}
interface WaitlistEntry {
  id: string;
  email: string;
  productSlug: string;
  position: number;
  createdAt: string;
}
interface AutomationJob {
  id: string;
  type: string;
  status: string;
  payload?: unknown;
  result?: unknown;
  createdAt: string;
}
interface QueueStats {
  name: string;
  waiting: number;
  active: number;
  delayed: number;
  failed: number;
}
//#endregion
//#region src/auth.api.d.ts
interface RegisterPayload {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}
interface LoginPayload {
  email: string;
  password: string;
  rememberMe?: boolean;
}
interface VerifyEmailPayload {
  email: string;
  code: string;
}
interface ForgotPasswordPayload {
  email: string;
}
interface ResetPasswordPayload {
  token: string;
  password: string;
}
interface ChangePasswordPayload {
  currentPassword: string;
  newPassword: string;
}
declare const authAPI: {
  /** POST /auth/register */register: (payload: RegisterPayload) => Promise<ApiResponse<AuthTokenResponse>>; /** POST /auth/login → sets HttpOnly cookie + returns tokens */
  login: (payload: LoginPayload) => Promise<ApiResponse<AuthTokenResponse>>; /** POST /auth/refresh → uses HttpOnly refresh cookie */
  refresh: () => Promise<ApiResponse<{
    accessToken: string;
  }>>; /** POST /auth/logout */
  logout: () => Promise<void>; /** POST /auth/logout-all → revoke all sessions */
  logoutAll: () => Promise<void>; /** GET /auth/me → current user from cookie */
  me: () => Promise<ApiResponse<AuthUser>>; /** POST /auth/verify-email */
  verifyEmail: (payload: VerifyEmailPayload) => Promise<ApiResponse<void>>; /** POST /auth/forgot-password */
  forgotPassword: (payload: ForgotPasswordPayload) => Promise<ApiResponse<void>>; /** POST /auth/reset-password */
  resetPassword: (payload: ResetPasswordPayload) => Promise<ApiResponse<void>>; /** PATCH /auth/change-password (authenticated) */
  changePassword: (payload: ChangePasswordPayload) => Promise<ApiResponse<void>>; /** PATCH /auth/users/:id/role */
  updateUserRole: (userId: string, role: string) => Promise<ApiResponse<AuthUser>>; /** Google OAuth redirect URL builder (client-side only) */
  googleOAuthUrl: (redirectUrl: string, isExternal?: boolean) => string;
};
//#endregion
//#region src/users.api.d.ts
interface UserListParams {
  page?: number;
  limit?: number;
  search?: string;
  role?: string;
  isActive?: boolean;
}
interface UpdateProfilePayload {
  firstName?: string;
  lastName?: string;
  avatar?: string;
  bio?: string;
  phone?: string;
}
declare const usersAPI: {
  /** GET /users — admin: list all users */list: (params?: UserListParams) => Promise<PaginatedResponse<AuthUser>>; /** GET /users/dashboard — current user dashboard stats */
  dashboard: () => Promise<ApiResponse<unknown>>; /** GET /users/:id */
  get: (id: string) => Promise<ApiResponse<AuthUser>>; /** PATCH /users/:id */
  update: (id: string, data: Partial<AuthUser>) => Promise<ApiResponse<AuthUser>>; /** PATCH /users/:id/profile */
  updateProfile: (id: string, payload: UpdateProfilePayload) => Promise<ApiResponse<AuthUser>>; /** GET /users/:id/activity */
  activity: (id: string) => Promise<ApiResponse<unknown[]>>; /** DELETE /users/:id/ban */
  ban: (id: string) => Promise<void>;
};
//#endregion
//#region src/payment.api.d.ts
interface InitializePaymentPayload {
  productSlug: string;
  plan: string;
  email: string;
  callbackUrl: string;
  amount?: number;
  metadata?: Record<string, unknown>;
}
declare const paymentAPI: {
  /** POST /payment/initialize → get Paystack authorization URL */initialize: (payload: InitializePaymentPayload) => Promise<ApiResponse<PaystackInit>>; /** GET /payment/verify/:reference */
  verify: (reference: string) => Promise<ApiResponse<PaymentVerification>>; /** GET /payment/history */
  history: () => Promise<ApiResponse<PaymentVerification[]>>; /** GET /payment/subscriptions */
  subscriptions: () => Promise<ApiResponse<Subscription[]>>; /** GET /payment/access/:productSlug */
  checkAccess: (productSlug: string) => Promise<ApiResponse<ProductAccess>>; /** POST /payment/waitlist */
  joinWaitlist: (data: {
    email: string;
    productSlug: string;
    name?: string;
  }) => Promise<ApiResponse<WaitlistEntry>>;
};
//#endregion
//#region src/amebogist.api.d.ts
interface ArticleListParams {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  featured?: boolean;
  status?: string;
}
interface CreateArticlePayload {
  title: string;
  content: string;
  excerpt?: string;
  coverImage?: string;
  category?: string;
  tags?: string[];
  status?: 'draft' | 'published';
}
declare const amebogistAPI: {
  /** GET /amebogist/articles */list: (params?: ArticleListParams) => Promise<PaginatedResponse<Article>>; /** GET /amebogist/search */
  search: (query: string, page?: number) => Promise<PaginatedResponse<Article>>; /** GET /amebogist/articles/trending */
  trending: (limit?: number) => Promise<ApiResponse<Article[]>>; /** GET /amebogist/articles/featured */
  featured: () => Promise<ApiResponse<Article[]>>; /** GET /amebogist/categories */
  categories: () => Promise<ApiResponse<ArticleCategory[]>>; /** GET /amebogist/articles/trends */
  trends: () => Promise<ApiResponse<unknown>>; /** GET /amebogist/articles/:slug */
  getBySlug: (slug: string) => Promise<ApiResponse<Article>>; /** POST /amebogist/articles */
  create: (payload: CreateArticlePayload) => Promise<ApiResponse<Article>>; /** PATCH /amebogist/articles/:id */
  update: (id: string, payload: Partial<CreateArticlePayload>) => Promise<ApiResponse<Article>>; /** DELETE /amebogist/articles/:id */
  delete: (id: string) => Promise<void>; /** PATCH /amebogist/articles/:id/publish */
  publish: (id: string) => Promise<ApiResponse<Article>>; /** PATCH /amebogist/articles/:id/archive */
  archive: (id: string) => Promise<ApiResponse<Article>>; /** PATCH /amebogist/articles/:id/feature */
  feature: (id: string) => Promise<ApiResponse<Article>>; /** POST /amebogist/articles/:id/react */
  react: (id: string, reaction: string) => Promise<ApiResponse<{
    reactions: Record<string, number>;
  }>>; /** POST /amebogist/articles/:slug/view */
  recordView: (slug: string) => Promise<void>; /** POST /amebogist/articles/generate-ai */
  generateAI: (prompt: string) => Promise<ApiResponse<{
    content: string;
    title: string;
  }>>; /** POST /amebogist/articles/:id/video-factory */
  videoFactory: (id: string) => Promise<ApiResponse<{
    jobId: string;
  }>>;
  comments: {
    /** GET /amebogist/articles/:id/comments */list: (articleId: string, page?: number) => Promise<PaginatedResponse<ArticleComment>>; /** POST /amebogist/articles/:id/comments */
    create: (articleId: string, content: string) => Promise<ApiResponse<ArticleComment>>; /** DELETE /amebogist/comments/:id */
    delete: (commentId: string) => Promise<void>; /** PATCH /amebogist/comments/:id/react */
    react: (commentId: string, reaction: string) => Promise<ApiResponse<unknown>>; /** PATCH /amebogist/comments/:id/flag */
    flag: (commentId: string) => Promise<void>;
  };
  creator: {
    /** GET /amebogist/creator/my-articles */myArticles: (params?: ArticleListParams) => Promise<PaginatedResponse<Article>>; /** GET /amebogist/creator/stats */
    stats: () => Promise<ApiResponse<CreatorStats>>; /** GET /amebogist/me/stats */
    meStats: () => Promise<ApiResponse<CreatorStats>>;
  };
  rss: {
    /** GET /amebogist/rss */feed: () => string; /** GET /amebogist/rss/:category */
    categoryFeed: (category: string) => string;
  };
};
//#endregion
//#region src/educenter.api.d.ts
interface StartCbtPayload {
  examType: ExamType;
  subject: string;
  numberOfQuestions?: number;
  year?: string;
}
interface MockCbtPayload extends StartCbtPayload {
  isMock: true;
}
interface SubmitCbtPayload {
  answers: Record<string, string>;
  timeTaken?: number;
}
interface AiTutorPayload {
  question: string;
  subject?: string;
  examType?: ExamType;
  context?: string;
}
interface StudyPlanPayload {
  examType: ExamType;
  subjects: string[];
  examDate: string;
  dailyHours?: number;
}
interface CourseProgressPayload {
  progressPercentage: number;
  completedAt?: string;
}
declare const educenterAPI: {
  /** GET /educenter/subjects/:examType */subjects: (examType: ExamType) => Promise<ApiResponse<string[]>>; /** GET /educenter/questions/preview */
  questionsPreview: (params?: {
    examType?: ExamType;
    subject?: string;
    limit?: number;
  }) => Promise<ApiResponse<EduQuestion[]>>;
  cbt: {
    /** POST /educenter/cbt/start */start: (payload: StartCbtPayload) => Promise<ApiResponse<CbtSession>>; /** POST /educenter/cbt/mock */
    mock: (payload: MockCbtPayload) => Promise<ApiResponse<CbtSession>>; /** POST /educenter/cbt/:sessionId/submit */
    submit: (sessionId: string, payload: SubmitCbtPayload) => Promise<ApiResponse<CbtResult>>; /** POST /educenter/cbt/:sessionId/abandon */
    abandon: (sessionId: string) => Promise<void>; /** GET /educenter/cbt/:sessionId/review */
    review: (sessionId: string) => Promise<ApiResponse<CbtResult>>;
  }; /** GET /educenter/sessions */
  sessions: (params?: {
    page?: number;
    limit?: number;
  }) => Promise<PaginatedResponse<CbtResult>>; /** GET /educenter/dashboard */
  dashboard: () => Promise<ApiResponse<EduDashboard>>; /** GET /educenter/analytics/:examType/:subject */
  analytics: (examType: ExamType, subject: string) => Promise<ApiResponse<unknown>>;
  streak: {
    /** GET /educenter/streak */get: () => Promise<ApiResponse<EduStreak>>; /** PATCH /educenter/streak/goal */
    setGoal: (dailyGoal: number) => Promise<ApiResponse<EduStreak>>;
  };
  leaderboard: {
    /** GET /educenter/leaderboard */global: (params?: {
      examType?: ExamType;
      subject?: string;
      page?: number;
    }) => Promise<PaginatedResponse<LeaderboardEntry>>; /** GET /educenter/leaderboard/my-rank */
    myRank: (params?: {
      examType?: ExamType;
      subject?: string;
    }) => Promise<ApiResponse<LeaderboardEntry>>;
  }; /** POST /educenter/ai-tutor */
  aiTutor: (payload: AiTutorPayload) => Promise<ApiResponse<{
    answer: string;
    sources?: string[];
  }>>; /** POST /educenter/study-plan */
  studyPlan: (payload: StudyPlanPayload) => Promise<ApiResponse<unknown>>;
  courses: {
    /** GET /educenter/courses */list: (params?: {
      category?: string;
      level?: string;
    }) => Promise<PaginatedResponse<EduCourse>>; /** GET /educenter/courses/:slug */
    get: (slug: string) => Promise<ApiResponse<EduCourse>>; /** GET /educenter/courses/marketing-playbooks */
    marketingPlaybooks: () => Promise<ApiResponse<EduCourse[]>>; /** GET /educenter/courses/ai-tools-training */
    aiToolsTraining: () => Promise<ApiResponse<EduCourse[]>>; /** POST /educenter/courses — admin: create */
    create: (data: Partial<EduCourse>) => Promise<ApiResponse<EduCourse>>; /** POST /educenter/courses/:courseId/enroll */
    enroll: (courseId: string) => Promise<ApiResponse<{
      enrollmentId: string;
    }>>; /** PATCH /educenter/courses/:courseId/progress */
    updateProgress: (courseId: string, payload: CourseProgressPayload) => Promise<ApiResponse<unknown>>; /** PATCH /educenter/courses/:courseId/publish */
    publish: (courseId: string) => Promise<ApiResponse<EduCourse>>;
  };
};
//#endregion
//#region src/client.d.ts
declare class ApiError extends Error {
  readonly status: number;
  readonly code: string;
  constructor(status: number, code: string, message: string);
}
declare function setAccessToken(token: string | null): void;
declare function getAccessToken(): string | null;
interface ClientConfig {
  baseUrl: string;
  /** Called when a 401 response cannot be recovered with refresh. */
  onUnauthorized?: () => void;
}
declare function configure(config: Partial<ClientConfig>): void;
type FetchOptions = RequestInit & {
  /** Next.js 15 cache config for Server Components */next?: {
    revalidate?: number | false;
    tags?: string[];
  }; /** Skip the 401-refresh retry (used internally to avoid loops) */
  _skipRefresh?: boolean;
};
declare function apiFetch<T>(path: string, options?: FetchOptions): Promise<T>;
declare function apiUpload<T>(path: string, form: FormData, method?: string): Promise<T>;
declare function qs(params: Record<string, string | number | boolean | undefined | null>): string;
//#endregion
//#region src/planai.api.d.ts
declare const planaiAPI: {
  jobs: {
    /** GET /planai/jobs */list: () => Promise<ApiResponse<PlanAIJob[]>>; /** GET /planai/jobs/:id */
    get: (id: string) => Promise<ApiResponse<PlanAIJob>>;
  };
  planning: {
    /** POST /planai/planning/generate */generate: (data: {
      businessName: string;
      industry: string;
      description: string;
      goals?: string[];
      templateId?: string;
    }) => Promise<ApiResponse<BusinessPlan>>; /** POST /planai/planning/pitch-deck */
    pitchDeck: (data: {
      businessPlanId?: string;
      slides?: number;
      theme?: string;
    }) => Promise<ApiResponse<PlanAIJob>>; /** GET /planai/planning/jobs */
    myJobs: () => Promise<ApiResponse<PlanAIJob[]>>; /** GET /planai/planning/jobs/:id */
    getJob: (id: string) => Promise<ApiResponse<PlanAIJob>>; /** GET /planai/planning/jobs/:id/download */
    downloadJob: (id: string) => string; /** GET /planai/planning/templates */
    templates: () => Promise<ApiResponse<unknown[]>>;
  };
  finance: {
    /** POST /planai/finance/forecast */forecast: (data: {
      revenue: number;
      expenses: number;
      months: number;
      currency?: string;
    }) => Promise<ApiResponse<FinancialForecast>>; /** POST /planai/finance/scenario */
    scenario: (data: {
      baseRevenue: number;
      scenarios: string[];
    }) => Promise<ApiResponse<unknown>>; /** POST /planai/finance/break-even */
    breakEven: (data: {
      fixedCosts: number;
      variableCosts: number;
      pricePerUnit: number;
    }) => Promise<ApiResponse<{
      breakEvenUnits: number;
      breakEvenRevenue: number;
    }>>; /** GET /planai/finance/forecasts */
    myForecasts: () => Promise<ApiResponse<FinancialForecast[]>>; /** GET /planai/finance/forecasts/:id */
    getForecast: (id: string) => Promise<ApiResponse<FinancialForecast>>; /** GET /planai/finance/exchange-rate */
    exchangeRate: () => Promise<ApiResponse<{
      usdToNgn: number;
      updatedAt: string;
    }>>;
  };
  branding: {
    /** POST /planai/branding/logo */logo: (data: {
      businessName: string;
      industry?: string;
      style?: string;
      colors?: string[];
    }) => Promise<ApiResponse<BrandingJob>>; /** POST /planai/branding/brand-kit */
    brandKit: (data: {
      businessName: string;
      industry?: string;
      tone?: string;
    }) => Promise<ApiResponse<BrandingJob>>; /** POST /planai/branding/flyer */
    flyer: (data: {
      title: string;
      content: string;
      style?: string;
      imageUrl?: string;
    }) => Promise<ApiResponse<BrandingJob>>; /** POST /planai/branding/color-palette */
    colorPalette: (data: {
      industry?: string;
      mood?: string;
      baseColor?: string;
    }) => Promise<ApiResponse<{
      colors: string[];
      names: string[];
    }>>; /** GET /planai/branding/jobs */
    myJobs: () => Promise<ApiResponse<BrandingJob[]>>;
  };
  marketing: {
    /** POST /planai/marketing/campaign/email */createEmailCampaign: (data: {
      subject: string;
      body: string;
      audienceIds?: string[];
    }) => Promise<ApiResponse<{
      campaignId: string;
    }>>; /** POST /planai/marketing/campaign/:id/send */
    sendCampaign: (id: string) => Promise<ApiResponse<void>>; /** POST /planai/marketing/generate/subject-lines */
    generateSubjectLines: (data: {
      topic: string;
      tone?: string;
      count?: number;
    }) => Promise<ApiResponse<string[]>>; /** POST /planai/marketing/generate/email-copy */
    generateEmailCopy: (data: {
      purpose: string;
      tone?: string;
      productName?: string;
    }) => Promise<ApiResponse<{
      subject: string;
      body: string;
    }>>; /** POST /planai/marketing/whatsapp/broadcast */
    whatsappBroadcast: (data: {
      message: string;
      phones: string[];
    }) => Promise<ApiResponse<{
      sent: number;
      failed: number;
    }>>; /** GET /planai/marketing/analytics/:campaignId */
    campaignAnalytics: (campaignId: string) => Promise<ApiResponse<unknown>>;
  };
  credibility: {
    /** POST /planai/credibility/portfolio */createPortfolio: (data: unknown) => Promise<ApiResponse<unknown>>; /** GET /planai/credibility/portfolio/:userId */
    getPortfolio: (userId: string) => Promise<ApiResponse<unknown>>; /** POST /planai/credibility/linkedin-optimize */
    linkedinOptimize: (data: {
      headline?: string;
      summary?: string;
      industry?: string;
    }) => Promise<ApiResponse<{
      optimized: string;
      tips: string[];
    }>>; /** POST /planai/credibility/resume */
    generateResume: (data: unknown) => Promise<ApiResponse<{
      pdfUrl: string;
    }>>;
  };
  investor: {
    /** POST /planai/investor/safe-agreement */safeAgreement: (data: {
      investorName: string;
      amount: number;
      valuation: number;
    }) => Promise<ApiResponse<{
      pdfUrl: string;
    }>>; /** POST /planai/investor/data-room */
    dataRoom: (data: unknown) => Promise<ApiResponse<unknown>>; /** POST /planai/investor/due-diligence-checklist */
    dueDiligence: (data?: unknown) => Promise<ApiResponse<unknown>>; /** POST /planai/investor/investor-update */
    investorUpdate: (data: {
      month: string;
      highlights: string[];
      metrics: Record<string, number>;
    }) => Promise<ApiResponse<{
      html: string;
    }>>;
  };
  analytics: {
    /** GET /planai/analytics/overview */overview: () => Promise<ApiResponse<unknown>>; /** POST /planai/analytics/report */
    report: (data: unknown) => Promise<ApiResponse<unknown>>; /** GET /planai/analytics/revenue */
    revenue: () => Promise<ApiResponse<unknown>>; /** GET /planai/analytics/growth-insights */
    growthInsights: () => Promise<ApiResponse<unknown>>;
  }; /** POST /planai/hr */
  hr: (data: unknown) => Promise<ApiResponse<unknown>>; /** POST /planai/legal */
  legal: (data: unknown) => Promise<ApiResponse<unknown>>; /** POST /planai/operations */
  operations: (data: unknown) => Promise<ApiResponse<unknown>>;
  emailScraper: {
    /** POST /planai/emailscraper/search */search: (data: {
      domain?: string;
      company?: string;
      role?: string;
      limit?: number;
    }) => Promise<ApiResponse<{
      leads: unknown[];
      jobId: string;
    }>>; /** POST /planai/emailscraper/verify */
    verify: (email: string) => Promise<ApiResponse<{
      email: string;
      isValid: boolean;
      score: number;
    }>>; /** POST /planai/emailscraper/bulk-verify */
    bulkVerify: (emails: string[]) => Promise<ApiResponse<{
      jobId: string;
    }>>; /** GET /planai/emailscraper/leads */
    leads: (params?: {
      page?: number;
      limit?: number;
      listId?: string;
    }) => Promise<PaginatedResponse<unknown>>; /** GET /planai/emailscraper/leads/export */
    exportLeads: (params?: {
      listId?: string;
      format?: "csv" | "json";
    }) => string; /** POST /planai/emailscraper/lists */
    createList: (data: {
      name: string;
    }) => Promise<ApiResponse<unknown>>; /** GET /planai/emailscraper/lists */
    lists: () => Promise<ApiResponse<unknown[]>>; /** GET /planai/emailscraper/jobs */
    jobs: () => Promise<ApiResponse<unknown[]>>;
  };
};
declare const receptionistAPI: {
  /** POST /receptionist/setup */setup: (data: Partial<ReceptionistConfig>) => Promise<ApiResponse<ReceptionistConfig>>; /** GET /receptionist/my */
  getConfig: () => Promise<ApiResponse<ReceptionistConfig>>; /** PATCH /receptionist/my */
  updateConfig: (data: Partial<ReceptionistConfig>) => Promise<ApiResponse<ReceptionistConfig>>; /** PATCH /receptionist/my/toggle */
  toggle: () => Promise<ApiResponse<{
    isActive: boolean;
  }>>;
  conversations: {
    /** GET /receptionist/conversations */list: () => Promise<ApiResponse<Conversation[]>>; /** GET /receptionist/conversations/:phone */
    get: (phone: string) => Promise<ApiResponse<Conversation>>; /** POST /receptionist/conversations/:phone/reply */
    reply: (phone: string, message: string) => Promise<ApiResponse<void>>; /** PATCH /receptionist/conversations/:phone/resolve */
    resolve: (phone: string) => Promise<ApiResponse<void>>;
  };
  knowledge: {
    /** POST /receptionist/knowledge */add: (data: {
      content: string;
      source?: string;
    }) => Promise<ApiResponse<KnowledgeBase>>; /** GET /receptionist/knowledge */
    list: () => Promise<ApiResponse<KnowledgeBase[]>>; /** DELETE /receptionist/knowledge/:id */
    delete: (id: string) => Promise<void>;
  }; /** GET /receptionist/analytics */
  analytics: () => Promise<ApiResponse<unknown>>;
  admin: {
    /** GET /receptionist/admin/all */all: () => Promise<ApiResponse<ReceptionistConfig[]>>; /** PATCH /receptionist/admin/:id/suspend */
    suspend: (id: string) => Promise<void>;
  };
};
declare const storefrontsAPI: {
  /** GET /storefronts/:slug */get: (slug: string) => Promise<ApiResponse<Storefront>>; /** GET /storefronts/:slug/products */
  products: (slug: string) => Promise<ApiResponse<StoreProduct[]>>; /** GET /storefronts/products/:productId */
  getProduct: (productId: string) => Promise<ApiResponse<StoreProduct>>; /** POST /storefronts/:slug/orders */
  placeOrder: (slug: string, data: {
    productId: string;
    buyerEmail: string;
    buyerName?: string;
  }) => Promise<ApiResponse<{
    orderId: string;
    paymentUrl: string;
  }>>;
  owner: {
    /** POST /storefronts */create: (data: Partial<Storefront>) => Promise<ApiResponse<Storefront>>; /** GET /storefronts/owner/my-stores */
    myStores: () => Promise<ApiResponse<Storefront[]>>; /** PATCH /storefronts/owner/:storeId */
    update: (storeId: string, data: Partial<Storefront>) => Promise<ApiResponse<Storefront>>; /** DELETE /storefronts/owner/:storeId */
    delete: (storeId: string) => Promise<void>; /** GET /storefronts/owner/:storeId/dashboard */
    dashboard: (storeId: string) => Promise<ApiResponse<unknown>>; /** POST /storefronts/owner/:storeId/products */
    addProduct: (storeId: string, data: Partial<StoreProduct>) => Promise<ApiResponse<StoreProduct>>; /** PATCH /storefronts/owner/:storeId/products/:productId */
    updateProduct: (storeId: string, productId: string, data: Partial<StoreProduct>) => Promise<ApiResponse<StoreProduct>>; /** DELETE /storefronts/owner/:storeId/products/:productId */
    deleteProduct: (storeId: string, productId: string) => Promise<void>; /** GET /storefronts/owner/:storeId/orders */
    orders: (storeId: string) => Promise<ApiResponse<StoreOrder[]>>; /** PATCH /storefronts/owner/:storeId/orders/:orderId */
    updateOrder: (storeId: string, orderId: string, data: {
      status: StoreOrder["status"];
    }) => Promise<ApiResponse<StoreOrder>>;
  };
};
//#endregion
//#region src/fitness.api.d.ts
declare const fitnessAPI: {
  /** GET /fitness/profile */getProfile: () => Promise<ApiResponse<FitnessProfile>>; /** PATCH /fitness/profile */
  updateProfile: (data: Partial<FitnessProfile>) => Promise<ApiResponse<FitnessProfile>>;
  plans: {
    /** POST /fitness/plans/generate */generate: (data: {
      goal: string;
      level?: string;
      daysPerWeek?: number;
    }) => Promise<ApiResponse<WorkoutPlan>>; /** GET /fitness/plans */
    list: () => Promise<ApiResponse<WorkoutPlan[]>>; /** GET /fitness/plans/:id */
    get: (id: string) => Promise<ApiResponse<WorkoutPlan>>;
  };
  workouts: {
    /** POST /fitness/workouts */log: (data: {
      planId?: string;
      exercises: unknown[];
      duration?: number;
    }) => Promise<ApiResponse<unknown>>; /** GET /fitness/workouts */
    list: () => Promise<ApiResponse<unknown[]>>;
  };
  meals: {
    /** POST /fitness/meals */log: (data: {
      meal: string;
      calories?: number;
      mealTime?: string;
    }) => Promise<ApiResponse<MealLog>>; /** GET /fitness/meals */
    list: () => Promise<ApiResponse<MealLog[]>>; /** POST /fitness/meals/analyze */
    analyze: (data: {
      meal: string;
      quantity?: string;
    }) => Promise<ApiResponse<{
      calories: number;
      macros: Record<string, number>;
    }>>;
  };
  metrics: {
    /** POST /fitness/metrics */log: (data: Partial<BodyMetric>) => Promise<ApiResponse<BodyMetric>>; /** GET /fitness/metrics */
    list: () => Promise<ApiResponse<BodyMetric[]>>;
  }; /** GET /fitness/dashboard */
  dashboard: () => Promise<ApiResponse<FitnessDashboard>>;
};
//#endregion
//#region src/os.api.d.ts
declare const osAPI: {
  workspaces: {
    /** POST /os/workspaces */create: (data: {
      name: string;
      description?: string;
    }) => Promise<ApiResponse<Workspace>>; /** GET /os/workspaces */
    list: () => Promise<ApiResponse<Workspace[]>>; /** GET /os/workspaces/:id */
    get: (id: string) => Promise<ApiResponse<Workspace>>; /** PATCH /os/workspaces/:id */
    update: (id: string, data: Partial<Workspace>) => Promise<ApiResponse<Workspace>>; /** DELETE /os/workspaces/:id */
    delete: (id: string) => Promise<void>;
    members: {
      /** POST /os/workspaces/:id/members */add: (workspaceId: string, data: {
        userId: string;
        role?: string;
      }) => Promise<ApiResponse<Workspace>>; /** DELETE /os/workspaces/:id/members/:targetUserId */
      remove: (workspaceId: string, targetUserId: string) => Promise<void>; /** PATCH /os/workspaces/:id/members/:targetUserId/role */
      updateRole: (workspaceId: string, targetUserId: string, role: string) => Promise<ApiResponse<void>>;
    };
    projects: {
      /** POST /os/workspaces/:id/projects */create: (workspaceId: string, data: {
        name: string;
        description?: string;
      }) => Promise<ApiResponse<OsProject>>; /** GET /os/workspaces/:id/projects */
      list: (workspaceId: string) => Promise<ApiResponse<OsProject[]>>;
    };
    tasks: {
      /** POST /os/workspaces/:id/tasks */create: (workspaceId: string, data: Partial<OsTask>) => Promise<ApiResponse<OsTask>>; /** GET /os/workspaces/:id/tasks */
      list: (workspaceId: string) => Promise<ApiResponse<OsTask[]>>;
    };
  };
  tasks: {
    /** PATCH /os/tasks/:taskId */update: (taskId: string, data: Partial<OsTask>) => Promise<ApiResponse<OsTask>>; /** DELETE /os/tasks/:taskId */
    delete: (taskId: string) => Promise<void>;
  }; /** GET /os/dashboard */
  dashboard: () => Promise<ApiResponse<OsDashboard>>;
};
//#endregion
//#region src/media.api.d.ts
declare const mediaAPI: {
  /** POST /media/upload — single file multipart upload */upload: (file: File, folder?: string) => Promise<ApiResponse<MediaFile>>; /** POST /media/upload/batch — multiple files */
  uploadBatch: (files: File[], folder?: string) => Promise<ApiResponse<MediaFile[]>>; /** POST /media/presign — get a presigned URL for direct S3/R2 upload */
  presign: (data: {
    fileName: string;
    mimeType: string;
    folder?: string;
  }) => Promise<ApiResponse<PresignedUrl>>; /** GET /media — list current user's media */
  list: () => Promise<ApiResponse<MediaFile[]>>; /** DELETE /media/:id */
  delete: (id: string) => Promise<void>;
  admin: {
    /** GET /media/admin/all */all: () => Promise<ApiResponse<MediaFile[]>>;
  };
};
//#endregion
//#region src/notifications.api.d.ts
declare const notificationsAPI: {
  /** GET /notifications */list: (params?: {
    page?: number;
    limit?: number;
  }) => Promise<PaginatedResponse<Notification>>; /** POST /notifications/read — mark all as read (or pass ids in body) */
  markRead: (ids?: string[]) => Promise<void>; /** DELETE /notifications/:id */
  delete: (id: string) => Promise<void>;
  push: {
    /** POST /notifications/push/subscribe */subscribe: (subscription: PushSubscription) => Promise<void>; /** POST /notifications/push/unsubscribe */
    unsubscribe: (endpoint: string) => Promise<void>;
  };
  admin: {
    /** POST /notifications/broadcast/push */broadcastPush: (data: {
      title: string;
      body: string;
      url?: string;
    }) => Promise<ApiResponse<void>>; /** POST /notifications/broadcast/email */
    broadcastEmail: (data: {
      subject: string;
      html: string;
      userIds?: string[];
    }) => Promise<ApiResponse<void>>;
  };
};
//#endregion
//#region src/automation.api.d.ts
declare const automationAPI: {
  social: {
    /** POST /automation/social/schedule */schedule: (data: {
      content: string;
      platforms: string[];
      scheduledAt: string;
      mediaUrls?: string[];
    }) => Promise<ApiResponse<AutomationJob>>; /** POST /automation/social/calendar */
    calendar: (data: {
      month?: number;
      year?: number;
      topics?: string[];
    }) => Promise<ApiResponse<unknown>>; /** POST /automation/social/captions */
    captions: (data: {
      topic: string;
      tone?: string;
      platforms?: string[];
      count?: number;
    }) => Promise<ApiResponse<string[]>>;
  };
  email: {
    /** POST /automation/email/campaign */campaign: (data: {
      subject: string;
      html: string;
      scheduledAt?: string;
      tags?: string[];
    }) => Promise<ApiResponse<AutomationJob>>;
  };
  scraper: {
    /** POST /automation/scraper/run */run: (data: {
      urls: string[];
      selectors?: Record<string, string>;
    }) => Promise<ApiResponse<AutomationJob>>; /** POST /automation/scraper/verify */
    verify: (data: {
      emails: string[];
    }) => Promise<ApiResponse<AutomationJob>>;
  }; /** POST /automation/trigger — generic n8n workflow trigger */
  trigger: (data: {
    workflow: string;
    payload?: Record<string, unknown>;
  }) => Promise<ApiResponse<{
    triggered: boolean;
    jobId?: string;
  }>>; /** GET /automation/queues — admin: BullMQ queue stats */
  queues: () => Promise<ApiResponse<QueueStats[]>>;
};
//#endregion
//#region src/admin.api.d.ts
declare const adminAPI: {
  /** GET /admin/stats */stats: () => Promise<ApiResponse<AdminStats>>;
  users: {
    /** GET /admin/users */list: (params?: {
      page?: number;
      limit?: number;
      role?: string;
      search?: string;
    }) => Promise<PaginatedResponse<AdminUser>>; /** PATCH /admin/users/:id/role */
    updateRole: (id: string, role: string) => Promise<ApiResponse<AdminUser>>;
  }; /** GET /admin/revenue */
  revenue: () => Promise<ApiResponse<unknown>>;
  waitlist: {
    /** GET /admin/waitlist */list: (params?: {
      productSlug?: string;
      page?: number;
    }) => Promise<PaginatedResponse<WaitlistEntry>>; /** POST /admin/waitlist/:productSlug/invite */
    invite: (productSlug: string, emails: string[]) => Promise<ApiResponse<{
      invited: number;
    }>>;
  }; /** GET /admin/logs */
  logs: (params?: {
    page?: number;
    limit?: number;
    level?: string;
  }) => Promise<PaginatedResponse<unknown>>;
};
//#endregion
//#region src/index.d.ts
/**
 * Unified API client — mirrors the shape apps already use via boldMindAPI.*
 *
 * @example
 * const { data } = await boldMindAPI.auth.login({ email, password });
 * const { data } = await boldMindAPI.educenter.dashboard();
 * const { data } = await boldMindAPI.payments.verify('txn_ref');
 */
declare const boldMindAPI: {
  readonly auth: {
    register: (payload: RegisterPayload) => Promise<ApiResponse<AuthTokenResponse>>;
    login: (payload: LoginPayload) => Promise<ApiResponse<AuthTokenResponse>>;
    refresh: () => Promise<ApiResponse<{
      accessToken: string;
    }>>;
    logout: () => Promise<void>;
    logoutAll: () => Promise<void>;
    me: () => Promise<ApiResponse<AuthUser>>;
    verifyEmail: (payload: VerifyEmailPayload) => Promise<ApiResponse<void>>;
    forgotPassword: (payload: ForgotPasswordPayload) => Promise<ApiResponse<void>>;
    resetPassword: (payload: ResetPasswordPayload) => Promise<ApiResponse<void>>;
    changePassword: (payload: ChangePasswordPayload) => Promise<ApiResponse<void>>;
    updateUserRole: (userId: string, role: string) => Promise<ApiResponse<AuthUser>>;
    googleOAuthUrl: (redirectUrl: string, isExternal?: boolean) => string;
  };
  readonly users: {
    list: (params?: UserListParams) => Promise<PaginatedResponse<AuthUser>>;
    dashboard: () => Promise<ApiResponse<unknown>>;
    get: (id: string) => Promise<ApiResponse<AuthUser>>;
    update: (id: string, data: Partial<AuthUser>) => Promise<ApiResponse<AuthUser>>;
    updateProfile: (id: string, payload: UpdateProfilePayload) => Promise<ApiResponse<AuthUser>>;
    activity: (id: string) => Promise<ApiResponse<unknown[]>>;
    ban: (id: string) => Promise<void>;
  };
  readonly payments: {
    initialize: (payload: InitializePaymentPayload) => Promise<ApiResponse<PaystackInit>>;
    verify: (reference: string) => Promise<ApiResponse<PaymentVerification>>;
    history: () => Promise<ApiResponse<PaymentVerification[]>>;
    subscriptions: () => Promise<ApiResponse<Subscription[]>>;
    checkAccess: (productSlug: string) => Promise<ApiResponse<ProductAccess>>;
    joinWaitlist: (data: {
      email: string;
      productSlug: string;
      name?: string;
    }) => Promise<ApiResponse<WaitlistEntry>>;
  };
  readonly amebogist: {
    list: (params?: ArticleListParams) => Promise<PaginatedResponse<Article>>;
    search: (query: string, page?: number) => Promise<PaginatedResponse<Article>>;
    trending: (limit?: number) => Promise<ApiResponse<Article[]>>;
    featured: () => Promise<ApiResponse<Article[]>>;
    categories: () => Promise<ApiResponse<ArticleCategory[]>>;
    trends: () => Promise<ApiResponse<unknown>>;
    getBySlug: (slug: string) => Promise<ApiResponse<Article>>;
    create: (payload: CreateArticlePayload) => Promise<ApiResponse<Article>>;
    update: (id: string, payload: Partial<CreateArticlePayload>) => Promise<ApiResponse<Article>>;
    delete: (id: string) => Promise<void>;
    publish: (id: string) => Promise<ApiResponse<Article>>;
    archive: (id: string) => Promise<ApiResponse<Article>>;
    feature: (id: string) => Promise<ApiResponse<Article>>;
    react: (id: string, reaction: string) => Promise<ApiResponse<{
      reactions: Record<string, number>;
    }>>;
    recordView: (slug: string) => Promise<void>;
    generateAI: (prompt: string) => Promise<ApiResponse<{
      content: string;
      title: string;
    }>>;
    videoFactory: (id: string) => Promise<ApiResponse<{
      jobId: string;
    }>>;
    comments: {
      list: (articleId: string, page?: number) => Promise<PaginatedResponse<ArticleComment>>;
      create: (articleId: string, content: string) => Promise<ApiResponse<ArticleComment>>;
      delete: (commentId: string) => Promise<void>;
      react: (commentId: string, reaction: string) => Promise<ApiResponse<unknown>>;
      flag: (commentId: string) => Promise<void>;
    };
    creator: {
      myArticles: (params?: ArticleListParams) => Promise<PaginatedResponse<Article>>;
      stats: () => Promise<ApiResponse<CreatorStats>>;
      meStats: () => Promise<ApiResponse<CreatorStats>>;
    };
    rss: {
      feed: () => string;
      categoryFeed: (category: string) => string;
    };
  };
  readonly educenter: {
    subjects: (examType: ExamType) => Promise<ApiResponse<string[]>>;
    questionsPreview: (params?: {
      examType?: ExamType;
      subject?: string;
      limit?: number;
    }) => Promise<ApiResponse<EduQuestion[]>>;
    cbt: {
      start: (payload: StartCbtPayload) => Promise<ApiResponse<CbtSession>>;
      mock: (payload: MockCbtPayload) => Promise<ApiResponse<CbtSession>>;
      submit: (sessionId: string, payload: SubmitCbtPayload) => Promise<ApiResponse<CbtResult>>;
      abandon: (sessionId: string) => Promise<void>;
      review: (sessionId: string) => Promise<ApiResponse<CbtResult>>;
    };
    sessions: (params?: {
      page?: number;
      limit?: number;
    }) => Promise<PaginatedResponse<CbtResult>>;
    dashboard: () => Promise<ApiResponse<EduDashboard>>;
    analytics: (examType: ExamType, subject: string) => Promise<ApiResponse<unknown>>;
    streak: {
      get: () => Promise<ApiResponse<EduStreak>>;
      setGoal: (dailyGoal: number) => Promise<ApiResponse<EduStreak>>;
    };
    leaderboard: {
      global: (params?: {
        examType?: ExamType;
        subject?: string;
        page?: number;
      }) => Promise<PaginatedResponse<LeaderboardEntry>>;
      myRank: (params?: {
        examType?: ExamType;
        subject?: string;
      }) => Promise<ApiResponse<LeaderboardEntry>>;
    };
    aiTutor: (payload: AiTutorPayload) => Promise<ApiResponse<{
      answer: string;
      sources?: string[];
    }>>;
    studyPlan: (payload: StudyPlanPayload) => Promise<ApiResponse<unknown>>;
    courses: {
      list: (params?: {
        category?: string;
        level?: string;
      }) => Promise<PaginatedResponse<EduCourse>>;
      get: (slug: string) => Promise<ApiResponse<EduCourse>>;
      marketingPlaybooks: () => Promise<ApiResponse<EduCourse[]>>;
      aiToolsTraining: () => Promise<ApiResponse<EduCourse[]>>;
      create: (data: Partial<EduCourse>) => Promise<ApiResponse<EduCourse>>;
      enroll: (courseId: string) => Promise<ApiResponse<{
        enrollmentId: string;
      }>>;
      updateProgress: (courseId: string, payload: CourseProgressPayload) => Promise<ApiResponse<unknown>>;
      publish: (courseId: string) => Promise<ApiResponse<EduCourse>>;
    };
  };
  readonly planai: {
    jobs: {
      list: () => Promise<ApiResponse<PlanAIJob[]>>;
      get: (id: string) => Promise<ApiResponse<PlanAIJob>>;
    };
    planning: {
      generate: (data: {
        businessName: string;
        industry: string;
        description: string;
        goals?: string[];
        templateId?: string;
      }) => Promise<ApiResponse<BusinessPlan>>;
      pitchDeck: (data: {
        businessPlanId?: string;
        slides?: number;
        theme?: string;
      }) => Promise<ApiResponse<PlanAIJob>>;
      myJobs: () => Promise<ApiResponse<PlanAIJob[]>>;
      getJob: (id: string) => Promise<ApiResponse<PlanAIJob>>;
      downloadJob: (id: string) => string;
      templates: () => Promise<ApiResponse<unknown[]>>;
    };
    finance: {
      forecast: (data: {
        revenue: number;
        expenses: number;
        months: number;
        currency?: string;
      }) => Promise<ApiResponse<FinancialForecast>>;
      scenario: (data: {
        baseRevenue: number;
        scenarios: string[];
      }) => Promise<ApiResponse<unknown>>;
      breakEven: (data: {
        fixedCosts: number;
        variableCosts: number;
        pricePerUnit: number;
      }) => Promise<ApiResponse<{
        breakEvenUnits: number;
        breakEvenRevenue: number;
      }>>;
      myForecasts: () => Promise<ApiResponse<FinancialForecast[]>>;
      getForecast: (id: string) => Promise<ApiResponse<FinancialForecast>>;
      exchangeRate: () => Promise<ApiResponse<{
        usdToNgn: number;
        updatedAt: string;
      }>>;
    };
    branding: {
      logo: (data: {
        businessName: string;
        industry?: string;
        style?: string;
        colors?: string[];
      }) => Promise<ApiResponse<BrandingJob>>;
      brandKit: (data: {
        businessName: string;
        industry?: string;
        tone?: string;
      }) => Promise<ApiResponse<BrandingJob>>;
      flyer: (data: {
        title: string;
        content: string;
        style?: string;
        imageUrl?: string;
      }) => Promise<ApiResponse<BrandingJob>>;
      colorPalette: (data: {
        industry?: string;
        mood?: string;
        baseColor?: string;
      }) => Promise<ApiResponse<{
        colors: string[];
        names: string[];
      }>>;
      myJobs: () => Promise<ApiResponse<BrandingJob[]>>;
    };
    marketing: {
      createEmailCampaign: (data: {
        subject: string;
        body: string;
        audienceIds?: string[];
      }) => Promise<ApiResponse<{
        campaignId: string;
      }>>;
      sendCampaign: (id: string) => Promise<ApiResponse<void>>;
      generateSubjectLines: (data: {
        topic: string;
        tone?: string;
        count?: number;
      }) => Promise<ApiResponse<string[]>>;
      generateEmailCopy: (data: {
        purpose: string;
        tone?: string;
        productName?: string;
      }) => Promise<ApiResponse<{
        subject: string;
        body: string;
      }>>;
      whatsappBroadcast: (data: {
        message: string;
        phones: string[];
      }) => Promise<ApiResponse<{
        sent: number;
        failed: number;
      }>>;
      campaignAnalytics: (campaignId: string) => Promise<ApiResponse<unknown>>;
    };
    credibility: {
      createPortfolio: (data: unknown) => Promise<ApiResponse<unknown>>;
      getPortfolio: (userId: string) => Promise<ApiResponse<unknown>>;
      linkedinOptimize: (data: {
        headline?: string;
        summary?: string;
        industry?: string;
      }) => Promise<ApiResponse<{
        optimized: string;
        tips: string[];
      }>>;
      generateResume: (data: unknown) => Promise<ApiResponse<{
        pdfUrl: string;
      }>>;
    };
    investor: {
      safeAgreement: (data: {
        investorName: string;
        amount: number;
        valuation: number;
      }) => Promise<ApiResponse<{
        pdfUrl: string;
      }>>;
      dataRoom: (data: unknown) => Promise<ApiResponse<unknown>>;
      dueDiligence: (data?: unknown) => Promise<ApiResponse<unknown>>;
      investorUpdate: (data: {
        month: string;
        highlights: string[];
        metrics: Record<string, number>;
      }) => Promise<ApiResponse<{
        html: string;
      }>>;
    };
    analytics: {
      overview: () => Promise<ApiResponse<unknown>>;
      report: (data: unknown) => Promise<ApiResponse<unknown>>;
      revenue: () => Promise<ApiResponse<unknown>>;
      growthInsights: () => Promise<ApiResponse<unknown>>;
    };
    hr: (data: unknown) => Promise<ApiResponse<unknown>>;
    legal: (data: unknown) => Promise<ApiResponse<unknown>>;
    operations: (data: unknown) => Promise<ApiResponse<unknown>>;
    emailScraper: {
      search: (data: {
        domain?: string;
        company?: string;
        role?: string;
        limit?: number;
      }) => Promise<ApiResponse<{
        leads: unknown[];
        jobId: string;
      }>>;
      verify: (email: string) => Promise<ApiResponse<{
        email: string;
        isValid: boolean;
        score: number;
      }>>;
      bulkVerify: (emails: string[]) => Promise<ApiResponse<{
        jobId: string;
      }>>;
      leads: (params?: {
        page?: number;
        limit?: number;
        listId?: string;
      }) => Promise<PaginatedResponse<unknown>>;
      exportLeads: (params?: {
        listId?: string;
        format?: "csv" | "json";
      }) => string;
      createList: (data: {
        name: string;
      }) => Promise<ApiResponse<unknown>>;
      lists: () => Promise<ApiResponse<unknown[]>>;
      jobs: () => Promise<ApiResponse<unknown[]>>;
    };
  };
  readonly receptionist: {
    setup: (data: Partial<ReceptionistConfig>) => Promise<ApiResponse<ReceptionistConfig>>;
    getConfig: () => Promise<ApiResponse<ReceptionistConfig>>;
    updateConfig: (data: Partial<ReceptionistConfig>) => Promise<ApiResponse<ReceptionistConfig>>;
    toggle: () => Promise<ApiResponse<{
      isActive: boolean;
    }>>;
    conversations: {
      list: () => Promise<ApiResponse<Conversation[]>>;
      get: (phone: string) => Promise<ApiResponse<Conversation>>;
      reply: (phone: string, message: string) => Promise<ApiResponse<void>>;
      resolve: (phone: string) => Promise<ApiResponse<void>>;
    };
    knowledge: {
      add: (data: {
        content: string;
        source?: string;
      }) => Promise<ApiResponse<KnowledgeBase>>;
      list: () => Promise<ApiResponse<KnowledgeBase[]>>;
      delete: (id: string) => Promise<void>;
    };
    analytics: () => Promise<ApiResponse<unknown>>;
    admin: {
      all: () => Promise<ApiResponse<ReceptionistConfig[]>>;
      suspend: (id: string) => Promise<void>;
    };
  };
  readonly storefronts: {
    get: (slug: string) => Promise<ApiResponse<Storefront>>;
    products: (slug: string) => Promise<ApiResponse<StoreProduct[]>>;
    getProduct: (productId: string) => Promise<ApiResponse<StoreProduct>>;
    placeOrder: (slug: string, data: {
      productId: string;
      buyerEmail: string;
      buyerName?: string;
    }) => Promise<ApiResponse<{
      orderId: string;
      paymentUrl: string;
    }>>;
    owner: {
      create: (data: Partial<Storefront>) => Promise<ApiResponse<Storefront>>;
      myStores: () => Promise<ApiResponse<Storefront[]>>;
      update: (storeId: string, data: Partial<Storefront>) => Promise<ApiResponse<Storefront>>;
      delete: (storeId: string) => Promise<void>;
      dashboard: (storeId: string) => Promise<ApiResponse<unknown>>;
      addProduct: (storeId: string, data: Partial<StoreProduct>) => Promise<ApiResponse<StoreProduct>>;
      updateProduct: (storeId: string, productId: string, data: Partial<StoreProduct>) => Promise<ApiResponse<StoreProduct>>;
      deleteProduct: (storeId: string, productId: string) => Promise<void>;
      orders: (storeId: string) => Promise<ApiResponse<StoreOrder[]>>;
      updateOrder: (storeId: string, orderId: string, data: {
        status: StoreOrder["status"];
      }) => Promise<ApiResponse<StoreOrder>>;
    };
  };
  readonly fitness: {
    getProfile: () => Promise<ApiResponse<FitnessProfile>>;
    updateProfile: (data: Partial<FitnessProfile>) => Promise<ApiResponse<FitnessProfile>>;
    plans: {
      generate: (data: {
        goal: string;
        level?: string;
        daysPerWeek?: number;
      }) => Promise<ApiResponse<WorkoutPlan>>;
      list: () => Promise<ApiResponse<WorkoutPlan[]>>;
      get: (id: string) => Promise<ApiResponse<WorkoutPlan>>;
    };
    workouts: {
      log: (data: {
        planId?: string;
        exercises: unknown[];
        duration?: number;
      }) => Promise<ApiResponse<unknown>>;
      list: () => Promise<ApiResponse<unknown[]>>;
    };
    meals: {
      log: (data: {
        meal: string;
        calories?: number;
        mealTime?: string;
      }) => Promise<ApiResponse<MealLog>>;
      list: () => Promise<ApiResponse<MealLog[]>>;
      analyze: (data: {
        meal: string;
        quantity?: string;
      }) => Promise<ApiResponse<{
        calories: number;
        macros: Record<string, number>;
      }>>;
    };
    metrics: {
      log: (data: Partial<BodyMetric>) => Promise<ApiResponse<BodyMetric>>;
      list: () => Promise<ApiResponse<BodyMetric[]>>;
    };
    dashboard: () => Promise<ApiResponse<FitnessDashboard>>;
  };
  readonly os: {
    workspaces: {
      create: (data: {
        name: string;
        description?: string;
      }) => Promise<ApiResponse<Workspace>>;
      list: () => Promise<ApiResponse<Workspace[]>>;
      get: (id: string) => Promise<ApiResponse<Workspace>>;
      update: (id: string, data: Partial<Workspace>) => Promise<ApiResponse<Workspace>>;
      delete: (id: string) => Promise<void>;
      members: {
        add: (workspaceId: string, data: {
          userId: string;
          role?: string;
        }) => Promise<ApiResponse<Workspace>>;
        remove: (workspaceId: string, targetUserId: string) => Promise<void>;
        updateRole: (workspaceId: string, targetUserId: string, role: string) => Promise<ApiResponse<void>>;
      };
      projects: {
        create: (workspaceId: string, data: {
          name: string;
          description?: string;
        }) => Promise<ApiResponse<OsProject>>;
        list: (workspaceId: string) => Promise<ApiResponse<OsProject[]>>;
      };
      tasks: {
        create: (workspaceId: string, data: Partial<OsTask>) => Promise<ApiResponse<OsTask>>;
        list: (workspaceId: string) => Promise<ApiResponse<OsTask[]>>;
      };
    };
    tasks: {
      update: (taskId: string, data: Partial<OsTask>) => Promise<ApiResponse<OsTask>>;
      delete: (taskId: string) => Promise<void>;
    };
    dashboard: () => Promise<ApiResponse<OsDashboard>>;
  };
  readonly media: {
    upload: (file: File, folder?: string) => Promise<ApiResponse<MediaFile>>;
    uploadBatch: (files: File[], folder?: string) => Promise<ApiResponse<MediaFile[]>>;
    presign: (data: {
      fileName: string;
      mimeType: string;
      folder?: string;
    }) => Promise<ApiResponse<PresignedUrl>>;
    list: () => Promise<ApiResponse<MediaFile[]>>;
    delete: (id: string) => Promise<void>;
    admin: {
      all: () => Promise<ApiResponse<MediaFile[]>>;
    };
  };
  readonly notifications: {
    list: (params?: {
      page?: number;
      limit?: number;
    }) => Promise<PaginatedResponse<Notification>>;
    markRead: (ids?: string[]) => Promise<void>;
    delete: (id: string) => Promise<void>;
    push: {
      subscribe: (subscription: PushSubscription) => Promise<void>;
      unsubscribe: (endpoint: string) => Promise<void>;
    };
    admin: {
      broadcastPush: (data: {
        title: string;
        body: string;
        url?: string;
      }) => Promise<ApiResponse<void>>;
      broadcastEmail: (data: {
        subject: string;
        html: string;
        userIds?: string[];
      }) => Promise<ApiResponse<void>>;
    };
  };
  readonly automation: {
    social: {
      schedule: (data: {
        content: string;
        platforms: string[];
        scheduledAt: string;
        mediaUrls?: string[];
      }) => Promise<ApiResponse<AutomationJob>>;
      calendar: (data: {
        month?: number;
        year?: number;
        topics?: string[];
      }) => Promise<ApiResponse<unknown>>;
      captions: (data: {
        topic: string;
        tone?: string;
        platforms?: string[];
        count?: number;
      }) => Promise<ApiResponse<string[]>>;
    };
    email: {
      campaign: (data: {
        subject: string;
        html: string;
        scheduledAt?: string;
        tags?: string[];
      }) => Promise<ApiResponse<AutomationJob>>;
    };
    scraper: {
      run: (data: {
        urls: string[];
        selectors?: Record<string, string>;
      }) => Promise<ApiResponse<AutomationJob>>;
      verify: (data: {
        emails: string[];
      }) => Promise<ApiResponse<AutomationJob>>;
    };
    trigger: (data: {
      workflow: string;
      payload?: Record<string, unknown>;
    }) => Promise<ApiResponse<{
      triggered: boolean;
      jobId?: string;
    }>>;
    queues: () => Promise<ApiResponse<QueueStats[]>>;
  };
  readonly admin: {
    stats: () => Promise<ApiResponse<AdminStats>>;
    users: {
      list: (params?: {
        page?: number;
        limit?: number;
        role?: string;
        search?: string;
      }) => Promise<PaginatedResponse<AdminUser>>;
      updateRole: (id: string, role: string) => Promise<ApiResponse<AdminUser>>;
    };
    revenue: () => Promise<ApiResponse<unknown>>;
    waitlist: {
      list: (params?: {
        productSlug?: string;
        page?: number;
      }) => Promise<PaginatedResponse<WaitlistEntry>>;
      invite: (productSlug: string, emails: string[]) => Promise<ApiResponse<{
        invited: number;
      }>>;
    };
    logs: (params?: {
      page?: number;
      limit?: number;
      level?: string;
    }) => Promise<PaginatedResponse<unknown>>;
  };
};
//#endregion
export { AdminStats, AdminUser, type AiTutorPayload, ApiError, ApiResponse, Article, ArticleCategory, ArticleComment, type ArticleListParams, AuthTokenResponse, AuthUser, AutomationJob, BodyMetric, BrandingJob, BusinessPlan, CbtResult, CbtSession, type ChangePasswordPayload, Conversation, ConversationMessage, type CourseProgressPayload, type CreateArticlePayload, CreatorStats, EduCourse, EduDashboard, EduQuestion, EduStreak, EmailLead, ExamType, Exercise, FinancialForecast, FitnessDashboard, FitnessProfile, type ForgotPasswordPayload, type InitializePaymentPayload, KnowledgeBase, LeadList, LeaderboardEntry, type LoginPayload, MealLog, MediaFile, Notification, OsDashboard, OsProject, OsTask, PaginatedResponse, PaymentVerification, PaystackInit, PlanAIJob, PresignedUrl, ProductAccess, QueueStats, ReceptionistConfig, type RegisterPayload, type ResetPasswordPayload, type StartCbtPayload, StoreOrder, StoreProduct, Storefront, type StudyPlanPayload, type SubmitCbtPayload, Subscription, TokenPair, type UpdateProfilePayload, type UserListParams, UserRole, type VerifyEmailPayload, WaitlistEntry, WorkoutDay, WorkoutPlan, Workspace, WorkspaceMember, adminAPI, amebogistAPI, apiFetch, apiUpload, authAPI, automationAPI, boldMindAPI, configure, educenterAPI, fitnessAPI, getAccessToken, mediaAPI, notificationsAPI, osAPI, paymentAPI, planaiAPI, qs, receptionistAPI, setAccessToken, storefrontsAPI, usersAPI };
//# sourceMappingURL=index.d.ts.map