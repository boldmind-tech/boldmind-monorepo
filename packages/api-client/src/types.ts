// ─────────────────────────────────────────────────────────────────────────────
// packages/api-client/src/types.ts
// ─────────────────────────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T;
  message?: string;
  statusCode?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: { total: number; page: number; limit: number; totalPages: number };
}

export type UserRole = 'user' | 'admin' | 'super_admin' | 'moderator' | 'support' | 'analyst' | 'manager';

export interface AuthUser {
  id: string; email: string; firstName?: string; lastName?: string; fullName?: string;
  role: UserRole; isActive: boolean; isSuperAdmin?: boolean; avatar?: string;
  createdAt: string; onboardingComplete?: boolean;
}

export interface TokenPair { accessToken: string; refreshToken?: string; }
export interface AuthTokenResponse { user: AuthUser; tokens: TokenPair; }

export interface PaystackInit { authorizationUrl: string; reference: string; accessCode: string; }
export interface PaymentVerification { status: 'success' | 'failed' | 'pending'; reference: string; amount: number; productSlug: string; plan: string; paidAt?: string; }
export interface Subscription { id: string; productSlug: string; productName?: string; plan: string; status: 'active' | 'expired' | 'cancelled'; expiresAt?: string; renewsAt?: string; amount?: number; }
export interface ProductAccess { hasAccess: boolean; plan?: string; expiresAt?: string; }

export interface Article { id: string; slug: string; title: string; content?: string; excerpt?: string; coverImage?: string; category?: string; tags?: string[]; status: 'draft' | 'published' | 'archived'; isFeatured?: boolean; viewCount?: number; reactions?: Record<string, number>; commentCount?: number; author?: { id: string; fullName?: string; email: string; avatar?: string }; createdAt: string; publishedAt?: string; updatedAt: string; }
export interface ArticleComment { id: string; content: string; reactions?: Record<string, number>; isFlagged?: boolean; author?: { id: string; fullName?: string; avatar?: string }; createdAt: string; }
export interface ArticleCategory { id: string; name: string; slug: string; count?: number; }
export interface CreatorStats { totalArticles: number; totalViews: number; totalReactions: number; totalComments: number; publishedCount: number; }

export type ExamType = 'JAMB' | 'WAEC' | 'NECO' | 'GCE';
export interface EduQuestion { id: string; question: string; options: Record<string, string>; answer?: string; explanation?: string; subject: string; examType: ExamType; year?: string; topic?: string; }
export interface CbtSession { id: string; examType: ExamType; subject: string; questions: EduQuestion[]; startedAt: string; expiresAt?: string; status: 'active' | 'submitted' | 'abandoned'; }
export interface CbtResult { sessionId: string; score: number; total: number; percentage: number; timeTaken?: number; answers: Record<string, string>; review?: Array<{ questionId: string; correct: boolean; correctAnswer: string }>; }
export interface EduDashboard { totalSessions: number; avgScore: number; questionsAnswered: number; subjectBreakdown?: Record<string, number>; }
export interface EduStreak { currentStreak: number; bestStreak: number; dailyGoal: number; todayCompleted: number; lastActive?: string; }
export interface LeaderboardEntry { rank: number; userId: string; fullName?: string; avatar?: string; score: number; sessions: number; }
export interface EduCourse { id: string; slug: string; title: string; description?: string; category?: string; level?: string; isPublished: boolean; enrollCount?: number; createdAt: string; }

export interface PlanAIJob { id: string; type: string; status: 'pending' | 'processing' | 'completed' | 'failed'; result?: unknown; createdAt: string; completedAt?: string; }
export interface BusinessPlan { jobId: string; status: string; plan?: string; sections?: Record<string, string>; }
export interface FinancialForecast { id: string; revenue: number[]; expenses: number[]; profit: number[]; breakEven?: { month: number; amount: number }; currency: string; period: 'monthly' | 'annual'; }
export interface BrandingJob { jobId: string; type: 'logo' | 'flyer' | 'brand-kit' | 'color-palette'; status: string; imageUrl?: string; assets?: string[]; }

export interface ReceptionistConfig { id: string; businessName: string; greeting?: string; isActive: boolean; whatsappPhone?: string; }
export interface ConversationMessage { role: 'user' | 'assistant'; content: string; timestamp: string; }
export interface Conversation { phone: string; messages: ConversationMessage[]; isResolved: boolean; lastMessage: string; updatedAt: string; }
export interface KnowledgeBase { id: string; content: string; source?: string; createdAt: string; }

export interface Storefront { id: string; slug: string; name: string; description?: string; logo?: string; isActive: boolean; ownerId: string; createdAt: string; }
export interface StoreProduct { id: string; name: string; description?: string; price: number; currency: string; imageUrl?: string; stock?: number; isActive: boolean; }
export interface StoreOrder { id: string; productId: string; buyerEmail: string; amount: number; status: 'pending' | 'paid' | 'fulfilled' | 'cancelled'; createdAt: string; }

export interface FitnessProfile { id: string; userId: string; age?: number; weight?: number; height?: number; goal?: string; activityLevel?: string; updatedAt: string; }
export interface Exercise { name: string; sets?: number; reps?: number; duration?: number; notes?: string; }
export interface WorkoutDay { day: number; exercises: Exercise[]; }
export interface WorkoutPlan { id: string; title: string; weeks: number; days: WorkoutDay[]; createdAt: string; }
export interface MealLog { id: string; meal: string; calories?: number; protein?: number; carbs?: number; fat?: number; loggedAt: string; }
export interface BodyMetric { id: string; weight?: number; bmi?: number; notes?: string; loggedAt: string; }
export interface FitnessDashboard { currentWeight?: number; weeklyWorkouts: number; caloriesThisWeek: number; streakDays: number; }

export interface WorkspaceMember { userId: string; role: 'owner' | 'admin' | 'member'; joinedAt: string; }
export interface Workspace { id: string; name: string; description?: string; ownerId: string; members?: WorkspaceMember[]; createdAt: string; }
export interface OsProject { id: string; name: string; description?: string; workspaceId: string; createdAt: string; }
export interface OsTask { id: string; title: string; description?: string; status: 'todo' | 'in_progress' | 'done'; assigneeId?: string; dueDate?: string; priority?: 'low' | 'medium' | 'high'; workspaceId: string; projectId?: string; createdAt: string; }
export interface OsDashboard { totalTasks: number; completedToday: number; activeWorkspaces: number; upcomingDeadlines: OsTask[]; }

export interface Notification { id: string; title?: string; message: string; type?: string; isRead: boolean; link?: string; createdAt: string; }
export interface MediaFile { id: string; url: string; key: string; mimeType: string; size: number; folder?: string; createdAt: string; }
export interface PresignedUrl { url: string; key: string; fields?: Record<string, string>; }

export interface EmailLead { id: string; email: string; firstName?: string; lastName?: string; company?: string; domain?: string; verified: boolean; score?: number; source?: string; createdAt: string; }
export interface LeadList { id: string; name: string; count: number; createdAt: string; }

export interface AdminStats { totalUsers: number; activeUsers: number; totalRevenue: number; newUsersToday: number; productBreakdown: Record<string, number>; }
export interface AdminUser { id: string; email: string; fullName?: string; role: UserRole; isActive: boolean; createdAt: string; lastLoginAt?: string; }
export interface WaitlistEntry { id: string; email: string; productSlug: string; position: number; createdAt: string; }

export interface AutomationJob { id: string; type: string; status: string; payload?: unknown; result?: unknown; createdAt: string; }
export interface QueueStats { name: string; waiting: number; active: number; delayed: number; failed: number; }