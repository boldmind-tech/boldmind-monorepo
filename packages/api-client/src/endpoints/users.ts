
// PACKAGES/api-client/src/endpoints/users.ts

import APIClient from '../client';
import { User, UserProfile } from '../types';

export interface CreateUserRequest {
  id: string;
  email: string;
  fullName?: string | undefined;
  phone?: string | undefined;
  timezone?: string | undefined;
  locale?: string | undefined;
}

export interface UpdateUserRequest {
  fullName?: string;
  phone?: string;
  avatarUrl?: string;
  timezone?: string;
  locale?: string;
  metadata?: Record<string, any>;
}

export interface CreateProfileRequest {
  productSlug: string;
  profileData?: Record<string, any>;
  preferences?: Record<string, any>;
}

export class UsersEndpoints {
  constructor(private client: APIClient) { }

  async getMe() {
    return this.client.get<User>('/users/me');
  }

  async getUserById(userId: string) {
    return this.client.get<User>(`/users/${userId}`);
  }

  async createUser(data: CreateUserRequest) {
    return this.client.post<User>('/users', data);
  }

  async updateUser(userId: string, data: UpdateUserRequest) {
    return this.client.patch<User>(`/users/${userId}`, data);
  }

  async deleteUser(userId: string) {
    return this.client.delete(`/users/${userId}`);
  }

  // User Profiles
  async getMyProfiles() {
    return this.client.get<UserProfile[]>('/users/me/profiles');
  }

  async getProfileByProduct(productSlug: string) {
    return this.client.get<UserProfile>(`/users/me/profiles/${productSlug}`);
  }

  async createProfile(data: CreateProfileRequest) {
    return this.client.post<UserProfile>('/users/me/profiles', data);
  }

  async updateProfile(productSlug: string, data: Partial<CreateProfileRequest>) {
    return this.client.patch<UserProfile>(`/users/me/profiles/${productSlug}`, data);
  }

  async deleteProfile(productSlug: string) {
    return this.client.delete(`/users/me/profiles/${productSlug}`);
  }

  // Organizations
  async getMyOrganizations() {
    return this.client.get<any[]>('/users/me/organizations');
  }

  async createOrganization(data: {
    name: string;
    slug: string;
    industry?: string;
    size?: string;
    location?: string;
  }) {
    return this.client.post<any>('/users/me/organizations', data);
  }
}
