// ─────────────────────────────────────────────────────────────────────────────
// packages/api-client/src/index.ts
// Single barrel export for @boldmind/api-client
//
// Usage in any app:
//   import { boldMindAPI, configure, ApiError } from '@boldmind/api-client';
//   configure({ baseUrl: process.env.NEXT_PUBLIC_API_URL });
//   const { data } = await boldMindAPI.auth.login({ email, password });
//
// Or import individual APIs:
//   import { authAPI, educenterAPI } from '@boldmind/api-client';
// ─────────────────────────────────────────────────────────────────────────────

export { configure, ApiError, setAccessToken, getAccessToken, apiFetch, apiUpload, qs } from './client';

export { authAPI }          from './auth.api';
export { usersAPI }         from './users.api';
export { paymentAPI }       from './payment.api';
export { amebogistAPI }     from './amebogist.api';
export { educenterAPI }     from './educenter.api';
export { planaiAPI, receptionistAPI, storefrontsAPI } from './planai.api';
export { fitnessAPI }       from './fitness.api';
export { osAPI }            from './os.api';
export { mediaAPI }         from './media.api';
export { notificationsAPI } from './notifications.api';
export { automationAPI }    from './automation.api';
export { adminAPI }         from './admin.api';

export type * from './types';
export type { RegisterPayload, LoginPayload, VerifyEmailPayload, ForgotPasswordPayload, ResetPasswordPayload, ChangePasswordPayload } from './auth.api';
export type { UserListParams, UpdateProfilePayload }   from './users.api';
export type { InitializePaymentPayload }               from './payment.api';
export type { ArticleListParams, CreateArticlePayload } from './amebogist.api';
export type { StartCbtPayload, SubmitCbtPayload, AiTutorPayload, StudyPlanPayload, CourseProgressPayload } from './educenter.api';

// ─── Unified client object (compatible with existing boldMindAPI usage) ────────

import { authAPI }          from './auth.api';
import { usersAPI }         from './users.api';
import { paymentAPI }       from './payment.api';
import { amebogistAPI }     from './amebogist.api';
import { educenterAPI }     from './educenter.api';
import { planaiAPI, receptionistAPI, storefrontsAPI } from './planai.api';
import { fitnessAPI }       from './fitness.api';
import { osAPI }            from './os.api';
import { mediaAPI }         from './media.api';
import { notificationsAPI } from './notifications.api';
import { automationAPI }    from './automation.api';
import { adminAPI }         from './admin.api';

/**
 * Unified API client — mirrors the shape apps already use via boldMindAPI.*
 *
 * @example
 * const { data } = await boldMindAPI.auth.login({ email, password });
 * const { data } = await boldMindAPI.educenter.dashboard();
 * const { data } = await boldMindAPI.payments.verify('txn_ref');
 */
export const boldMindAPI = {
  auth:          authAPI,
  users:         usersAPI,
  payments:      paymentAPI,
  amebogist:     amebogistAPI,
  educenter:     educenterAPI,
  planai:        planaiAPI,
  receptionist:  receptionistAPI,
  storefronts:   storefrontsAPI,
  fitness:       fitnessAPI,
  os:            osAPI,
  media:         mediaAPI,
  notifications: notificationsAPI,
  automation:    automationAPI,
  admin:         adminAPI,
} as const;