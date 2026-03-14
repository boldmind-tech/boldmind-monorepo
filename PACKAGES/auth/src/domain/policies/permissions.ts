// PACKAGES/auth/src/domain/policies/permissions.ts

import { User } from '../models/User';
import {
    SystemRole,
    EcosystemRole,
    UserRole,
    PRODUCT_PERMISSIONS,
    SYSTEM_ROLE_PERMISSIONS,
    ECOSYSTEM_ROLE_PERMISSIONS,
    hasPermission as utilsHasPermission
} from '@boldmind/utils';

// Re-exporting types for local use if needed
export type Permission = keyof typeof PRODUCT_PERMISSIONS | 'admin:all' | '*';
export type Role = UserRole;

/**
 * Checks if a user has a specific permission.
 * This implementation bridges the local User model with the utility permission checker.
 */
export function hasPermission(user: User | null, permission: string): boolean {
    if (!user) {
        return false;
    }

    // Map local User model to the User model expected by hasPermission in utils
    // If they are already compatible, we can just cast or map.
    const mappedUser: any = {
        role: user.role || (user.metadata?.['role'] as string) || 'guest',
        permissions: user.permissions || [],
        // other fields if needed for advanced checks
    };

    // Special case for the legacy 'admin:all' permission
    if (permission === 'admin:all') {
        return mappedUser.role === 'super_admin' || mappedUser.role === 'admin';
    }

    return utilsHasPermission(mappedUser, permission);
}

export function hasAnyPermission(user: User | null, permissions: string[]): boolean {
    return permissions.some(permission => hasPermission(user, permission));
}

export function hasAllPermissions(user: User | null, permissions: string[]): boolean {
    return permissions.every(permission => hasPermission(user, permission));
}

export function getRolePermissions(role: Role): string[] {
    if (SYSTEM_ROLE_PERMISSIONS[role as SystemRole]) {
        return SYSTEM_ROLE_PERMISSIONS[role as SystemRole];
    }
    if (ECOSYSTEM_ROLE_PERMISSIONS[role as EcosystemRole]) {
        return ECOSYSTEM_ROLE_PERMISSIONS[role as EcosystemRole];
    }
    return [];
}