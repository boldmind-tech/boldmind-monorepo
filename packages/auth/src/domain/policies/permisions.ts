// PACKAGES/auth/src/domain/policies/permissions.ts

import { User } from '../models/User';

export type Permission =
    | 'users:read'
    | 'users:write'
    | 'users:delete'
    | 'products:read'
    | 'products:write'
    | 'products:delete'
    | 'analytics:read'
    | 'analytics:write'
    | 'billing:read'
    | 'billing:write'
    | 'settings:read'
    | 'settings:write'
    | 'admin:all';

export type Role = 'admin' | 'manager' | 'user' | 'guest';

export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
    admin: ['admin:all'],
    manager: [
        'users:read',
        'users:write',
        'products:read',
        'products:write',
        'analytics:read',
        'analytics:write',
        'billing:read',
        'settings:read',
    ],
    user: [
        'products:read',
        'products:write',
        'analytics:read',
        'settings:read',
    ],
    guest: ['products:read'],
};

export function hasPermission(user: User | null, permission: Permission): boolean {
    if (!user) {
        return false;
    }

    const role: Role = (user.metadata?.['role'] as Role) || 'user';
    const rolePermissions = ROLE_PERMISSIONS[role];

    // Admin has all permissions
    if (rolePermissions.includes('admin:all')) {
        return true;
    }

    return rolePermissions.includes(permission);
}

export function hasAnyPermission(user: User | null, permissions: Permission[]): boolean {
    return permissions.some(permission => hasPermission(user, permission));
}

export function hasAllPermissions(user: User | null, permissions: Permission[]): boolean {
    return permissions.every(permission => hasPermission(user, permission));
}