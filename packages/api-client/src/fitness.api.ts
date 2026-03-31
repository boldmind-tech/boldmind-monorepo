// ─────────────────────────────────────────────────────────────────────────────
// packages/api-client/src/fitness.api.ts
// Routes: /api/v1/fitness/*
// ─────────────────────────────────────────────────────────────────────────────

import { apiFetch } from './client';
import type { ApiResponse, FitnessProfile, WorkoutPlan, MealLog, BodyMetric, FitnessDashboard } from './types';

export const fitnessAPI = {
  /** GET /fitness/profile */
  getProfile: () =>
    apiFetch<ApiResponse<FitnessProfile>>('/fitness/profile', { next: { revalidate: 0 } }),

  /** PATCH /fitness/profile */
  updateProfile: (data: Partial<FitnessProfile>) =>
    apiFetch<ApiResponse<FitnessProfile>>('/fitness/profile', {
      method: 'PATCH', body: JSON.stringify(data),
    }),

  plans: {
    /** POST /fitness/plans/generate */
    generate: (data: { goal: string; level?: string; daysPerWeek?: number }) =>
      apiFetch<ApiResponse<WorkoutPlan>>('/fitness/plans/generate', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** GET /fitness/plans */
    list: () =>
      apiFetch<ApiResponse<WorkoutPlan[]>>('/fitness/plans'),

    /** GET /fitness/plans/:id */
    get: (id: string) =>
      apiFetch<ApiResponse<WorkoutPlan>>(`/fitness/plans/${id}`),
  },

  workouts: {
    /** POST /fitness/workouts */
    log: (data: { planId?: string; exercises: unknown[]; duration?: number }) =>
      apiFetch<ApiResponse<unknown>>('/fitness/workouts', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** GET /fitness/workouts */
    list: () =>
      apiFetch<ApiResponse<unknown[]>>('/fitness/workouts'),
  },

  meals: {
    /** POST /fitness/meals */
    log: (data: { meal: string; calories?: number; mealTime?: string }) =>
      apiFetch<ApiResponse<MealLog>>('/fitness/meals', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** GET /fitness/meals */
    list: () =>
      apiFetch<ApiResponse<MealLog[]>>('/fitness/meals'),

    /** POST /fitness/meals/analyze */
    analyze: (data: { meal: string; quantity?: string }) =>
      apiFetch<ApiResponse<{ calories: number; macros: Record<string, number> }>>('/fitness/meals/analyze', {
        method: 'POST', body: JSON.stringify(data),
      }),
  },

  metrics: {
    /** POST /fitness/metrics */
    log: (data: Partial<BodyMetric>) =>
      apiFetch<ApiResponse<BodyMetric>>('/fitness/metrics', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** GET /fitness/metrics */
    list: () =>
      apiFetch<ApiResponse<BodyMetric[]>>('/fitness/metrics'),
  },

  /** GET /fitness/dashboard */
  dashboard: () =>
    apiFetch<ApiResponse<FitnessDashboard>>('/fitness/dashboard', { next: { revalidate: 0 } }),
};