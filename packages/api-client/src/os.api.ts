// ─────────────────────────────────────────────────────────────────────────────
// packages/api-client/src/os.api.ts
// Routes: /api/v1/os/*
// ─────────────────────────────────────────────────────────────────────────────

import { apiFetch } from './client';
import type { ApiResponse, Workspace, OsProject, OsTask, OsDashboard } from './types';

export const osAPI = {
  workspaces: {
    /** POST /os/workspaces */
    create: (data: { name: string; description?: string }) =>
      apiFetch<ApiResponse<Workspace>>('/os/workspaces', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** GET /os/workspaces */
    list: () =>
      apiFetch<ApiResponse<Workspace[]>>('/os/workspaces'),

    /** GET /os/workspaces/:id */
    get: (id: string) =>
      apiFetch<ApiResponse<Workspace>>(`/os/workspaces/${id}`),

    /** PATCH /os/workspaces/:id */
    update: (id: string, data: Partial<Workspace>) =>
      apiFetch<ApiResponse<Workspace>>(`/os/workspaces/${id}`, {
        method: 'PATCH', body: JSON.stringify(data),
      }),

    /** DELETE /os/workspaces/:id */
    delete: (id: string) =>
      apiFetch<void>(`/os/workspaces/${id}`, { method: 'DELETE' }),

    members: {
      /** POST /os/workspaces/:id/members */
      add: (workspaceId: string, data: { userId: string; role?: string }) =>
        apiFetch<ApiResponse<Workspace>>(`/os/workspaces/${workspaceId}/members`, {
          method: 'POST', body: JSON.stringify(data),
        }),

      /** DELETE /os/workspaces/:id/members/:targetUserId */
      remove: (workspaceId: string, targetUserId: string) =>
        apiFetch<void>(`/os/workspaces/${workspaceId}/members/${targetUserId}`, { method: 'DELETE' }),

      /** PATCH /os/workspaces/:id/members/:targetUserId/role */
      updateRole: (workspaceId: string, targetUserId: string, role: string) =>
        apiFetch<ApiResponse<void>>(`/os/workspaces/${workspaceId}/members/${targetUserId}/role`, {
          method: 'PATCH', body: JSON.stringify({ role }),
        }),
    },

    projects: {
      /** POST /os/workspaces/:id/projects */
      create: (workspaceId: string, data: { name: string; description?: string }) =>
        apiFetch<ApiResponse<OsProject>>(`/os/workspaces/${workspaceId}/projects`, {
          method: 'POST', body: JSON.stringify(data),
        }),

      /** GET /os/workspaces/:id/projects */
      list: (workspaceId: string) =>
        apiFetch<ApiResponse<OsProject[]>>(`/os/workspaces/${workspaceId}/projects`),
    },

    tasks: {
      /** POST /os/workspaces/:id/tasks */
      create: (workspaceId: string, data: Partial<OsTask>) =>
        apiFetch<ApiResponse<OsTask>>(`/os/workspaces/${workspaceId}/tasks`, {
          method: 'POST', body: JSON.stringify(data),
        }),

      /** GET /os/workspaces/:id/tasks */
      list: (workspaceId: string) =>
        apiFetch<ApiResponse<OsTask[]>>(`/os/workspaces/${workspaceId}/tasks`),
    },
  },

  tasks: {
    /** PATCH /os/tasks/:taskId */
    update: (taskId: string, data: Partial<OsTask>) =>
      apiFetch<ApiResponse<OsTask>>(`/os/tasks/${taskId}`, {
        method: 'PATCH', body: JSON.stringify(data),
      }),

    /** DELETE /os/tasks/:taskId */
    delete: (taskId: string) =>
      apiFetch<void>(`/os/tasks/${taskId}`, { method: 'DELETE' }),
  },

  /** GET /os/dashboard */
  dashboard: () =>
    apiFetch<ApiResponse<OsDashboard>>('/os/dashboard', { next: { revalidate: 0 } }),
};