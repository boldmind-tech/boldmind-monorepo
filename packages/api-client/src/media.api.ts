// ─────────────────────────────────────────────────────────────────────────────
// packages/api-client/src/media.api.ts
// Routes: /api/v1/media/*
// ─────────────────────────────────────────────────────────────────────────────

import { apiFetch, apiUpload } from './client';
import type { ApiResponse, MediaFile, PresignedUrl } from './types';

export const mediaAPI = {
  /** POST /media/upload — single file multipart upload */
  upload: (file: File, folder?: string): Promise<ApiResponse<MediaFile>> => {
    const form = new FormData();
    form.append('file', file);
    if (folder) form.append('folder', folder);
    return apiUpload<ApiResponse<MediaFile>>('/media/upload', form);
  },

  /** POST /media/upload/batch — multiple files */
  uploadBatch: (files: File[], folder?: string): Promise<ApiResponse<MediaFile[]>> => {
    const form = new FormData();
    files.forEach(f => form.append('files', f));
    if (folder) form.append('folder', folder);
    return apiUpload<ApiResponse<MediaFile[]>>('/media/upload/batch', form);
  },

  /** POST /media/presign — get a presigned URL for direct S3/R2 upload */
  presign: (data: { fileName: string; mimeType: string; folder?: string }) =>
    apiFetch<ApiResponse<PresignedUrl>>('/media/presign', {
      method: 'POST', body: JSON.stringify(data),
    }),

  /** GET /media — list current user's media */
  list: () =>
    apiFetch<ApiResponse<MediaFile[]>>('/media'),

  /** DELETE /media/:id */
  delete: (id: string) =>
    apiFetch<void>(`/media/${id}`, { method: 'DELETE' }),

  admin: {
    /** GET /media/admin/all */
    all: () => apiFetch<ApiResponse<MediaFile[]>>('/media/admin/all'),
  },
};
