// ─────────────────────────────────────────────────────────────────────────────
// packages/api-client/src/client.ts
// Base fetch client with:
//   - Automatic JWT attach from cookie or in-memory token store
//   - 401 auto-refresh via POST /auth/refresh
//   - Type-safe ApiError class
//   - Multipart upload helper
// ─────────────────────────────────────────────────────────────────────────────

export class ApiError extends Error {
  constructor(
    public readonly status:  number,
    public readonly code:    string,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// ─── Token store (in-memory fallback when cookies aren't accessible) ──────────

let _accessToken: string | null = null;

export function setAccessToken(token: string | null) { _accessToken = token; }
export function getAccessToken(): string | null       { return _accessToken;  }

// ─── Config ───────────────────────────────────────────────────────────────────

export interface ClientConfig {
  baseUrl:     string;
  /** Called when a 401 response cannot be recovered with refresh. */
  onUnauthorized?: () => void;
}

let _config: ClientConfig = {
  baseUrl: (typeof process !== 'undefined'
    ? process.env['NEXT_PUBLIC_API_URL']
    : undefined)?.replace(/\/$/, '') ?? 'http://localhost:4001/api/v1',
};

export function configure(config: Partial<ClientConfig>) {
  _config = { ..._config, ...config };
}

// ─── Core fetch ───────────────────────────────────────────────────────────────

type FetchOptions = RequestInit & {
  /** Next.js 15 cache config for Server Components */
  next?: { revalidate?: number | false; tags?: string[] };
  /** Skip the 401-refresh retry (used internally to avoid loops) */
  _skipRefresh?: boolean;
};

export async function apiFetch<T>(
  path:    string,
  options: FetchOptions = {},
): Promise<T> {
  const { _skipRefresh, next, ...rest } = options;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept:         'application/json',
    ...(options.headers as Record<string, string> ?? {}),
  };

  // Attach Bearer token if available in memory (SSR or mobile)
  if (_accessToken) headers['Authorization'] = `Bearer ${_accessToken}`;

  const res = await fetch(`${_config.baseUrl}${path}`, {
    ...rest,
    credentials: 'include',   // always send HttpOnly cookie
    headers,
    ...(next ? { next } : {}),
  });

  // ── 401: attempt token refresh then retry ─────────────────────────────────
  if (res.status === 401 && !_skipRefresh) {
    const refreshed = await tryRefresh();
    if (refreshed) {
      return apiFetch<T>(path, { ...options, _skipRefresh: true });
    }
    _config.onUnauthorized?.();
    throw new ApiError(401, 'UNAUTHORIZED', 'Session expired');
  }

  if (!res.ok) {
    let code = 'UNKNOWN_ERROR';
    let message = `Request failed: ${res.status}`;
    try {
      const body = await res.json();
      code    = body.code    ?? body.error ?? code;
      message = body.message ?? message;
    } catch { /* ignore parse error */ }
    throw new ApiError(res.status, code, message);
  }

  if (res.status === 204) return undefined as unknown as T;
  return res.json() as Promise<T>;
}

// ─── Multipart upload (bypasses JSON Content-Type) ────────────────────────────

export async function apiUpload<T>(
  path:    string,
  form:    FormData,
  method = 'POST',
): Promise<T> {
  const headers: Record<string, string> = { Accept: 'application/json' };
  if (_accessToken) headers['Authorization'] = `Bearer ${_accessToken}`;

  const res = await fetch(`${_config.baseUrl}${path}`, {
    method,
    credentials: 'include',
    headers,
    body: form,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({})) as Record<string, string>;
    throw new ApiError(res.status, body['code'] ?? 'UPLOAD_FAILED', body['message'] ?? 'Upload failed');
  }
  return res.json() as Promise<T>;
}

// ─── Internal: refresh ────────────────────────────────────────────────────────

async function tryRefresh(): Promise<boolean> {
  try {
    const res = await fetch(`${_config.baseUrl}/auth/refresh`, {
      method:      'POST',
      credentials: 'include',
      headers:     { 'Content-Type': 'application/json' },
    });
    if (!res.ok) return false;
    const body = await res.json() as { data?: { accessToken?: string }; accessToken?: string };
    const token = body.data?.accessToken ?? body.accessToken;
    if (token) setAccessToken(token);
    return true;
  } catch {
    return false;
  }
}

// ─── Query-string helper ──────────────────────────────────────────────────────

export function qs(params: Record<string, string | number | boolean | undefined | null>): string {
  const p = new URLSearchParams();
  for (const [key, val] of Object.entries(params)) {
    if (val !== undefined && val !== null && val !== '') {
      p.set(key, String(val));
    }
  }
  const str = p.toString();
  return str ? `?${str}` : '';
}