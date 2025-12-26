import { api } from '../client';

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  phone?: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
  tokens: {
    access_token: string;
    refresh_token: string;
  };
}

export const authApi = {
  login: (data: LoginData) => 
    api.post<AuthResponse>('/auth/login', data),
  
  register: (data: RegisterData) => 
    api.post<AuthResponse>('/auth/register', data),
  
  logout: () => 
    api.post('/auth/logout'),
  
  refreshToken: (refreshToken: string) => 
    api.post<{ access_token: string }>('/auth/refresh', { refresh_token: refreshToken }),
  
  forgotPassword: (email: string) => 
    api.post('/auth/forgot-password', { email }),
  
  resetPassword: (token: string, password: string) => 
    api.post('/auth/reset-password', { token, password }),
  
  verifyEmail: (token: string) => 
    api.post('/auth/verify-email', { token }),
  
  getProfile: () => 
    api.get('/auth/profile'),
  
  updateProfile: (data: Partial<RegisterData>) => 
    api.put('/auth/profile', data),
  
  changePassword: (data: { currentPassword: string; newPassword: string }) => 
    api.post('/auth/change-password', data)
};