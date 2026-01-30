// PACKAGES/utils/src/constants/auth.ts

export type UserRole = 'admin' | 'editor' | 'viewer' | 'guest';
export type AuthProvider = 'email' | 'google' | 'github' | 'twitter' | 'facebook';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
  permissions: string[];
}

export interface AuthConfig {
  enabled: boolean;
  providers: AuthProvider[];
  requireEmailVerification: boolean;
  allowRegistration: boolean;
  sessionDuration: number; // in hours
  maxLoginAttempts: number;
  passwordMinLength: number;
}

export const DEFAULT_AUTH_CONFIG: AuthConfig = {
  enabled: true,
  providers: ['email', 'google', 'facebook'],
  requireEmailVerification: true,
  allowRegistration: true,
  sessionDuration: 24,
  maxLoginAttempts: 5,
  passwordMinLength: 8
};

export const USER_ROLES: Record<UserRole, string[]> = {
  admin: ['*'], // All permissions
  editor: [
    'products:read',
    'products:write',
    'analytics:read',
    'content:write',
    'users:read'
  ],
  viewer: [
    'products:read',
    'analytics:read'
  ],
  guest: [] // No permissions
};

export const PRODUCT_PERMISSIONS = {
  // Product Management
  'products:read': 'View products',
  'products:write': 'Create/edit products',
  'products:delete': 'Delete products',
  'products:publish': 'Publish products',

  // User Management
  'users:read': 'View users',
  'users:write': 'Create/edit users',
  'users:delete': 'Delete users',

  // Analytics
  'analytics:read': 'View analytics',
  'analytics:write': 'Export analytics',

  // Content
  'content:read': 'View content',
  'content:write': 'Create/edit content',
  'content:delete': 'Delete content',

  // Settings
  'settings:read': 'View settings',
  'settings:write': 'Edit settings',

  // Billing
  'billing:read': 'View billing',
  'billing:write': 'Manage billing'
};

export function hasPermission(user: User, permission: string): boolean {
  if (user.role === 'admin') return true;

  return user.permissions.includes(permission) ||
    user.permissions.includes('*') ||
    USER_ROLES[user.role]?.includes(permission) ||
    USER_ROLES[user.role]?.includes('*');
}

export function getRolePermissions(role: UserRole): string[] {
  return USER_ROLES[role] || [];
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password: string): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }

  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}