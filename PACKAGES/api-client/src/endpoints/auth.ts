// PACKAGES/api-client/src/endpoints/auth.ts

import APIClient from '../client';
import { Session } from '../types';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  fullName?: string;
  phone?: string;
  timezone?: string;
  locale?: string;
}

export interface UpdatePasswordRequest {
  newPassword: string;
}

export interface ResetPasswordRequest {
  email: string;
  code: string;
  newPassword: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface VerifyOtpRequest {
  email: string;
  code: string;
  purpose: 'email_verify' | 'phone_verify' | 'password_reset' | '2fa';
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}


export class AuthEndpoints {
  constructor(private client: APIClient) { }

  async login(data: LoginRequest) {
    return this.client.post<{ session: Session; user: any }>('/auth/login', data);
  }

  async register(data: RegisterRequest) {
    return this.client.post<{ session: Session; user: any }>('/auth/register', data);
  }

  async logout() {
    return this.client.post('/auth/logout');
  }

  async getSession() {
    return this.client.get<{ session: Session | null }>('/auth/session');
  }

  async refreshSession() {
    return this.client.post<{ session: Session }>('/auth/refresh');
  }

  async forgotPassword(data: ForgotPasswordRequest) {
    return this.client.post('/auth/forgot-password', data);
  }

  async resetPassword(data: ResetPasswordRequest) {
    return this.client.post('/auth/reset-password', data);
  }

  async changePassword(data: ChangePasswordRequest) {
    return this.client.patch('/auth/change-password', data);
  }

  async verifyOtp(data: VerifyOtpRequest) {
    return this.client.post('/auth/verify-email', data);
  }

  async resendVerification(email: string) {
    return this.client.post('/auth/resend-verification', { email });
  }
}