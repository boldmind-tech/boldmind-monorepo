// PACKAGES/utils/src/constants/auth.ts

/* ============================================
   ROLE TYPES
============================================ */

export type SystemRole =
  | 'super_admin'
  | 'admin'
  | 'manager'
  | 'editor'
  | 'support'
  | 'analyst';

export type EcosystemRole =
  | 'hustler'
  | 'founder'
  | 'creator'
  | 'student'
  | 'business_owner'
  | 'operator'
  | 'partner';

export type UserRole = SystemRole | EcosystemRole | 'guest';

export type AuthProvider =
  | 'email'
  | 'google'
  | 'github'
  | 'twitter'
  | 'facebook';

/* ============================================
   USER MODEL
============================================ */

export interface User {
  id: string;
  email: string;
  name: string;

  role: UserRole;

  // Persona layer
  ecosystemRole?: EcosystemRole;
  digitalMaturity?: 'low' | 'medium' | 'high';

  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;

  permissions: string[];
}

/* ============================================
   AUTH CONFIG
============================================ */

export interface AuthConfig {
  enabled: boolean;
  providers: AuthProvider[];
  requireEmailVerification: boolean;
  allowRegistration: boolean;
  sessionDuration: number;
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

/* ============================================
   PERMISSIONS MASTER LIST
============================================ */

export const PRODUCT_PERMISSIONS = {
  // Product
  'products:read': 'View products',
  'products:create': 'Create products',
  'products:update': 'Update products',
  'products:delete': 'Delete products',
  'products:publish': 'Publish products',
  'products:archive': 'Archive products',

  // Users
  'users:read': 'View users',
  'users:create': 'Create users',
  'users:update': 'Update users',
  'users:delete': 'Delete users',
  'users:reset_password': 'Reset passwords',
  'users:impersonate': 'Impersonate users',

  // Analytics
  'analytics:read': 'View analytics',
  'analytics:export': 'Export analytics',
  'analytics:configure': 'Configure analytics',

  // Content
  'content:read': 'View content',
  'content:create': 'Create content',
  'content:update': 'Update content',
  'content:delete': 'Delete content',
  'content:publish': 'Publish content',
  'content:moderate': 'Moderate content',

  // Billing
  'billing:read': 'View billing',
  'billing:update': 'Update billing',
  'billing:refund': 'Process refunds',
  'billing:manage_subscriptions': 'Manage subscriptions',

  // Settings
  'settings:read': 'View settings',
  'settings:update': 'Update settings'
} as const;

/* ============================================
   SYSTEM ROLE PERMISSIONS (Admin Layer)
============================================ */

export const SYSTEM_ROLE_PERMISSIONS: Record<SystemRole, string[]> = {
  super_admin: ['*'],

  admin: [
    'users:read', 'users:create', 'users:update', 'users:delete',
    'products:read', 'products:create', 'products:update', 'products:publish',
    'analytics:read', 'analytics:export',
    'billing:read', 'billing:update',
    'content:read', 'content:create', 'content:update', 'content:delete'
  ],

  manager: [
    'users:read',
    'products:read', 'products:update',
    'analytics:read',
    'content:read', 'content:create', 'content:update'
  ],

  editor: [
    'content:read', 'content:create', 'content:update'
  ],

  support: [
    'users:read',
    'billing:read'
  ],

  analyst: [
    'analytics:read', 'analytics:export'
  ]
};

/* ============================================
   ECOSYSTEM ROLE PERMISSIONS (Persona Layer)
============================================ */

export const ECOSYSTEM_ROLE_PERMISSIONS: Record<EcosystemRole, string[]> = {
  hustler: [
    'products:read',
    'analytics:read'
  ],

  founder: [
    'products:read',
    'products:create',
    'products:update',
    'analytics:read',
    'billing:read'
  ],

  creator: [
    'content:read',
    'content:create',
    'analytics:read'
  ],

  student: [
    'content:read'
  ],

  business_owner: [
    'products:read',
    'products:create',
    'products:update',
    'analytics:read',
    'billing:read'
  ],

  operator: [
    'products:read',
    'products:update'
  ],

  partner: [
    'analytics:read'
  ]
};

/* ============================================
   PERMISSION CHECK ENGINE
============================================ */

export function hasPermission(user: User, permission: string): boolean {
  if (!user) return false;

  // Super admin override
  if (user.role === 'super_admin') return true;

  // Direct permissions
  if (user.permissions?.includes('*')) return true;
  if (user.permissions?.includes(permission)) return true;

  // System role permissions
  if (SYSTEM_ROLE_PERMISSIONS[user.role as SystemRole]) {
    const rolePerms = SYSTEM_ROLE_PERMISSIONS[user.role as SystemRole];
    if (rolePerms.includes('*') || rolePerms.includes(permission)) return true;
  }

  // Ecosystem role permissions
  if (ECOSYSTEM_ROLE_PERMISSIONS[user.role as EcosystemRole]) {
    const ecoPerms = ECOSYSTEM_ROLE_PERMISSIONS[user.role as EcosystemRole];
    if (ecoPerms.includes(permission)) return true;
  }

  return false;
}

export function getRolePermissions(role: UserRole): string[] {
  if (SYSTEM_ROLE_PERMISSIONS[role as SystemRole]) {
    return SYSTEM_ROLE_PERMISSIONS[role as SystemRole];
  }

  if (ECOSYSTEM_ROLE_PERMISSIONS[role as EcosystemRole]) {
    return ECOSYSTEM_ROLE_PERMISSIONS[role as EcosystemRole];
  }

  return [];
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