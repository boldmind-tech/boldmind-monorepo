import { api } from '../client';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: string;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateUserData {
  name?: string;
  avatar?: string;
  phone?: string;
  bio?: string;
  website?: string;
}

export const usersApi = {
  getUsers: (params?: { limit?: number; offset?: number; search?: string }) => 
    api.get<{ users: User[]; total: number }>('/users', { params }),
  
  getUser: (userId: string) => 
    api.get<User>(`/users/${userId}`),
  
  updateUser: (userId: string, data: UpdateUserData) => 
    api.put<User>(`/users/${userId}`, data),
  
  deleteUser: (userId: string) => 
    api.delete(`/users/${userId}`),
  
  updateUserRole: (userId: string, role: string) => 
    api.put(`/users/${userId}/role`, { role }),
  
  getUserStats: () => 
    api.get<{ total: number; active: number; verified: number }>('/users/stats'),
  
  searchUsers: (query: string, params?: { limit?: number }) => 
    api.get<User[]>(`/users/search?q=${query}`, { params })
};