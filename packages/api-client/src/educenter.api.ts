// ─────────────────────────────────────────────────────────────────────────────
// packages/api-client/src/educenter.api.ts
// Routes: /api/v1/educenter/*
// ─────────────────────────────────────────────────────────────────────────────

import { apiFetch, qs } from './client';
import type { ApiResponse, PaginatedResponse, ExamType, EduQuestion, CbtSession, CbtResult, EduDashboard, EduStreak, LeaderboardEntry, EduCourse } from './types';

export interface StartCbtPayload {
  examType:           ExamType;
  subject:            string;
  numberOfQuestions?: number;
  year?:              string;
}

export interface MockCbtPayload extends StartCbtPayload {
  isMock: true;
}

export interface SubmitCbtPayload {
  answers:     Record<string, string>;   // { questionId: selectedOption }
  timeTaken?:  number;
}

export interface AiTutorPayload {
  question:   string;
  subject?:   string;
  examType?:  ExamType;
  context?:   string;
}

export interface StudyPlanPayload {
  examType:    ExamType;
  subjects:    string[];
  examDate:    string;
  dailyHours?: number;
}

export interface CourseProgressPayload {
  progressPercentage: number;
  completedAt?:       string;
}

export const educenterAPI = {
  /** GET /educenter/subjects/:examType */
  subjects: (examType: ExamType) =>
    apiFetch<ApiResponse<string[]>>(`/educenter/subjects/${examType}`, {
      next: { revalidate: 3600 },
    }),

  /** GET /educenter/questions/preview */
  questionsPreview: (params?: { examType?: ExamType; subject?: string; limit?: number }) =>
    apiFetch<ApiResponse<EduQuestion[]>>(`/educenter/questions/preview${qs({ ...params })}`, {
      next: { revalidate: 300 },
    }),

  cbt: {
    /** POST /educenter/cbt/start */
    start: (payload: StartCbtPayload) =>
      apiFetch<ApiResponse<CbtSession>>('/educenter/cbt/start', {
        method: 'POST', body: JSON.stringify(payload),
      }),

    /** POST /educenter/cbt/mock */
    mock: (payload: MockCbtPayload) =>
      apiFetch<ApiResponse<CbtSession>>('/educenter/cbt/mock', {
        method: 'POST', body: JSON.stringify(payload),
      }),

    /** POST /educenter/cbt/:sessionId/submit */
    submit: (sessionId: string, payload: SubmitCbtPayload) =>
      apiFetch<ApiResponse<CbtResult>>(`/educenter/cbt/${sessionId}/submit`, {
        method: 'POST', body: JSON.stringify(payload),
      }),

    /** POST /educenter/cbt/:sessionId/abandon */
    abandon: (sessionId: string) =>
      apiFetch<void>(`/educenter/cbt/${sessionId}/abandon`, { method: 'POST' }),

    /** GET /educenter/cbt/:sessionId/review */
    review: (sessionId: string) =>
      apiFetch<ApiResponse<CbtResult>>(`/educenter/cbt/${sessionId}/review`),
  },

  /** GET /educenter/sessions */
  sessions: (params?: { page?: number; limit?: number }) =>
    apiFetch<PaginatedResponse<CbtResult>>(`/educenter/sessions${qs({ ...params })}`),

  /** GET /educenter/dashboard */
  dashboard: () =>
    apiFetch<ApiResponse<EduDashboard>>('/educenter/dashboard', { next: { revalidate: 0 } }),

  /** GET /educenter/analytics/:examType/:subject */
  analytics: (examType: ExamType, subject: string) =>
    apiFetch<ApiResponse<unknown>>(`/educenter/analytics/${examType}/${subject}`),

  streak: {
    /** GET /educenter/streak */
    get: () =>
      apiFetch<ApiResponse<EduStreak>>('/educenter/streak', { next: { revalidate: 0 } }),

    /** PATCH /educenter/streak/goal */
    setGoal: (dailyGoal: number) =>
      apiFetch<ApiResponse<EduStreak>>('/educenter/streak/goal', {
        method: 'PATCH', body: JSON.stringify({ dailyGoal }),
      }),
  },

  leaderboard: {
    /** GET /educenter/leaderboard */
    global: (params?: { examType?: ExamType; subject?: string; page?: number }) =>
      apiFetch<PaginatedResponse<LeaderboardEntry>>(`/educenter/leaderboard${qs({ ...params })}`),

    /** GET /educenter/leaderboard/my-rank */
    myRank: (params?: { examType?: ExamType; subject?: string }) =>
      apiFetch<ApiResponse<LeaderboardEntry>>(`/educenter/leaderboard/my-rank${qs({ ...params })}`),
  },

  /** POST /educenter/ai-tutor */
  aiTutor: (payload: AiTutorPayload) =>
    apiFetch<ApiResponse<{ answer: string; sources?: string[] }>>('/educenter/ai-tutor', {
      method: 'POST', body: JSON.stringify(payload),
    }),

  /** POST /educenter/study-plan */
  studyPlan: (payload: StudyPlanPayload) =>
    apiFetch<ApiResponse<unknown>>('/educenter/study-plan', {
      method: 'POST', body: JSON.stringify(payload),
    }),

  courses: {
    /** GET /educenter/courses */
    list: (params?: { category?: string; level?: string }) =>
      apiFetch<PaginatedResponse<EduCourse>>(`/educenter/courses${qs({ ...params })}`, {
        next: { revalidate: 300 },
      }),

    /** GET /educenter/courses/:slug */
    get: (slug: string) =>
      apiFetch<ApiResponse<EduCourse>>(`/educenter/courses/${slug}`, {
        next: { revalidate: 300 },
      }),

    /** GET /educenter/courses/marketing-playbooks */
    marketingPlaybooks: () =>
      apiFetch<ApiResponse<EduCourse[]>>('/educenter/courses/marketing-playbooks', {
        next: { revalidate: 3600 },
      }),

    /** GET /educenter/courses/ai-tools-training */
    aiToolsTraining: () =>
      apiFetch<ApiResponse<EduCourse[]>>('/educenter/courses/ai-tools-training', {
        next: { revalidate: 3600 },
      }),

    /** POST /educenter/courses — admin: create */
    create: (data: Partial<EduCourse>) =>
      apiFetch<ApiResponse<EduCourse>>('/educenter/courses', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** POST /educenter/courses/:courseId/enroll */
    enroll: (courseId: string) =>
      apiFetch<ApiResponse<{ enrollmentId: string }>>(`/educenter/courses/${courseId}/enroll`, {
        method: 'POST',
      }),

    /** PATCH /educenter/courses/:courseId/progress */
    updateProgress: (courseId: string, payload: CourseProgressPayload) =>
      apiFetch<ApiResponse<unknown>>(`/educenter/courses/${courseId}/progress`, {
        method: 'PATCH', body: JSON.stringify(payload),
      }),

    /** PATCH /educenter/courses/:courseId/publish */
    publish: (courseId: string) =>
      apiFetch<ApiResponse<EduCourse>>(`/educenter/courses/${courseId}/publish`, {
        method: 'PATCH',
      }),
  },
};