// ─────────────────────────────────────────────────────────────────────────────
// packages/api-client/src/amebogist.api.ts
// Routes: /api/v1/amebogist/*
// ─────────────────────────────────────────────────────────────────────────────

import { apiFetch, qs } from './client';
import type { ApiResponse, PaginatedResponse, Article, ArticleComment, ArticleCategory, CreatorStats } from './types';

export interface ArticleListParams {
  page?:     number;
  limit?:    number;
  category?: string;
  search?:   string;
  featured?: boolean;
  status?:   string;
}

export interface CreateArticlePayload {
  title:       string;
  content:     string;
  excerpt?:    string;
  coverImage?: string;
  category?:   string;
  tags?:       string[];
  status?:     'draft' | 'published';
}

export const amebogistAPI = {
  /** GET /amebogist/articles */
  list: (params?: ArticleListParams) =>
    apiFetch<PaginatedResponse<Article>>(`/amebogist/articles${qs({ ...params })}`, {
      next: { revalidate: 60, tags: ['amebo-articles'] },
    }),

  /** GET /amebogist/search */
  search: (query: string, page = 1) =>
    apiFetch<PaginatedResponse<Article>>(`/amebogist/search${qs({ q: query, page })}`, {
      next: { revalidate: 30 },
    }),

  /** GET /amebogist/articles/trending */
  trending: (limit = 8) =>
    apiFetch<ApiResponse<Article[]>>(`/amebogist/articles/trending${qs({ limit })}`, {
      next: { revalidate: 300, tags: ['amebo-trending'] },
    }),

  /** GET /amebogist/articles/featured */
  featured: () =>
    apiFetch<ApiResponse<Article[]>>('/amebogist/articles/featured', {
      next: { revalidate: 300 },
    }),

  /** GET /amebogist/categories */
  categories: () =>
    apiFetch<ApiResponse<ArticleCategory[]>>('/amebogist/categories', {
      next: { revalidate: 3600, tags: ['amebo-categories'] },
    }),

  /** GET /amebogist/articles/trends */
  trends: () =>
    apiFetch<ApiResponse<unknown>>('/amebogist/articles/trends', {
      next: { revalidate: 600 },
    }),

  /** GET /amebogist/articles/:slug */
  getBySlug: (slug: string) =>
    apiFetch<ApiResponse<Article>>(`/amebogist/articles/${slug}`, {
      next: { revalidate: 60, tags: [`amebo-article-${slug}`] },
    }),

  /** POST /amebogist/articles */
  create: (payload: CreateArticlePayload) =>
    apiFetch<ApiResponse<Article>>('/amebogist/articles', {
      method: 'POST', body: JSON.stringify(payload),
    }),

  /** PATCH /amebogist/articles/:id */
  update: (id: string, payload: Partial<CreateArticlePayload>) =>
    apiFetch<ApiResponse<Article>>(`/amebogist/articles/${id}`, {
      method: 'PATCH', body: JSON.stringify(payload),
    }),

  /** DELETE /amebogist/articles/:id */
  delete: (id: string) =>
    apiFetch<void>(`/amebogist/articles/${id}`, { method: 'DELETE' }),

  /** PATCH /amebogist/articles/:id/publish */
  publish: (id: string) =>
    apiFetch<ApiResponse<Article>>(`/amebogist/articles/${id}/publish`, { method: 'PATCH' }),

  /** PATCH /amebogist/articles/:id/archive */
  archive: (id: string) =>
    apiFetch<ApiResponse<Article>>(`/amebogist/articles/${id}/archive`, { method: 'PATCH' }),

  /** PATCH /amebogist/articles/:id/feature */
  feature: (id: string) =>
    apiFetch<ApiResponse<Article>>(`/amebogist/articles/${id}/feature`, { method: 'PATCH' }),

  /** POST /amebogist/articles/:id/react */
  react: (id: string, reaction: string) =>
    apiFetch<ApiResponse<{ reactions: Record<string, number> }>>(`/amebogist/articles/${id}/react`, {
      method: 'POST', body: JSON.stringify({ reaction }),
    }),

  /** POST /amebogist/articles/:slug/view */
  recordView: (slug: string) =>
    apiFetch<void>(`/amebogist/articles/${slug}/view`, { method: 'POST' }),

  /** POST /amebogist/articles/generate-ai */
  generateAI: (prompt: string) =>
    apiFetch<ApiResponse<{ content: string; title: string }>>('/amebogist/articles/generate-ai', {
      method: 'POST', body: JSON.stringify({ prompt }),
    }),

  /** POST /amebogist/articles/:id/video-factory */
  videoFactory: (id: string) =>
    apiFetch<ApiResponse<{ jobId: string }>>(`/amebogist/articles/${id}/video-factory`, {
      method: 'POST',
    }),

  comments: {
    /** GET /amebogist/articles/:id/comments */
    list: (articleId: string, page = 1) =>
      apiFetch<PaginatedResponse<ArticleComment>>(`/amebogist/articles/${articleId}/comments${qs({ page })}`),

    /** POST /amebogist/articles/:id/comments */
    create: (articleId: string, content: string) =>
      apiFetch<ApiResponse<ArticleComment>>(`/amebogist/articles/${articleId}/comments`, {
        method: 'POST', body: JSON.stringify({ content }),
      }),

    /** DELETE /amebogist/comments/:id */
    delete: (commentId: string) =>
      apiFetch<void>(`/amebogist/comments/${commentId}`, { method: 'DELETE' }),

    /** PATCH /amebogist/comments/:id/react */
    react: (commentId: string, reaction: string) =>
      apiFetch<ApiResponse<unknown>>(`/amebogist/comments/${commentId}/react`, {
        method: 'PATCH', body: JSON.stringify({ reaction }),
      }),

    /** PATCH /amebogist/comments/:id/flag */
    flag: (commentId: string) =>
      apiFetch<void>(`/amebogist/comments/${commentId}/flag`, { method: 'PATCH' }),
  },

  creator: {
    /** GET /amebogist/creator/my-articles */
    myArticles: (params?: ArticleListParams) =>
      apiFetch<PaginatedResponse<Article>>(`/amebogist/creator/my-articles${qs({ ...params })}`),

    /** GET /amebogist/creator/stats */
    stats: () =>
      apiFetch<ApiResponse<CreatorStats>>('/amebogist/creator/stats'),

    /** GET /amebogist/me/stats */
    meStats: () =>
      apiFetch<ApiResponse<CreatorStats>>('/amebogist/me/stats'),
  },

  rss: {
    /** GET /amebogist/rss */
    feed: () => `${(typeof process !== 'undefined' ? process.env['NEXT_PUBLIC_API_URL'] : '') ?? ''}/amebogist/rss`,
    /** GET /amebogist/rss/:category */
    categoryFeed: (category: string) => `${(typeof process !== 'undefined' ? process.env['NEXT_PUBLIC_API_URL'] : '') ?? ''}/amebogist/rss/${category}`,
  },
};