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

export interface PasswordResetRequest {
  email: string;
}

export interface UpdatePasswordRequest {
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

  async requestPasswordReset(data: PasswordResetRequest) {
    return this.client.post('/auth/password-reset/request', data);
  }

  async updatePassword(data: UpdatePasswordRequest) {
    return this.client.post('/auth/password-reset/update', data);
  }

  async verifyEmail(token: string) {
    return this.client.post('/auth/verify-email', { token });
  }
}