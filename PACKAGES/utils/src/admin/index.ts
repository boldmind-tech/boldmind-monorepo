// PACKAGES/utils/src/admin/index.ts

import {
    User,
    SystemRole,
    SYSTEM_ROLE_PERMISSIONS,
    PRODUCT_PERMISSIONS,
} from '../constants/auth';

import { BOLDMIND_PRODUCTS } from '../constants/products';

/* ============================================
   PERMISSION REGISTRY
   Derived from auth.ts PRODUCT_PERMISSIONS — single source of truth.
   Adds category + description metadata for admin UI display.
============================================ */

export type PermissionKey = keyof typeof PRODUCT_PERMISSIONS;

export interface Permission {
    category: string;
    name: PermissionKey;
    description: string;
}

/**
 * Groups all known permissions into categories for admin UI display.
 * The permission strings and descriptions come directly from PRODUCT_PERMISSIONS
 * in auth.ts — no duplication.
 */
export const ADMIN_PERMISSIONS: Record<string, Permission[]> = (
    Object.entries(PRODUCT_PERMISSIONS) as [PermissionKey, string][]
).reduce(
    (acc, [key, description]) => {
        const category = key.split(':')[0] ?? key;
        if (!acc[category]) acc[category] = [];
        acc[category].push({ category, name: key, description });
        return acc;
    },
    {} as Record<string, Permission[]>,
);

/* ============================================
   ROLE DEFINITIONS
   Permission arrays are derived from SYSTEM_ROLE_PERMISSIONS in auth.ts.
   Only admin-specific metadata (level, description, isSystemRole) is added here.
============================================ */

export interface RoleDefinition {
    id: SystemRole;
    name: string;
    description: string;
    level: number;
    isSystemRole: boolean;
    /** Derived from SYSTEM_ROLE_PERMISSIONS — do not set manually. */
    permissions: string[];
}

export const ADMIN_ROLES: RoleDefinition[] = [
    {
        id: 'super_admin',
        name: 'Super Admin',
        description: 'Full system access',
        level: 1,
        isSystemRole: true,
        permissions: SYSTEM_ROLE_PERMISSIONS.super_admin,
    },
    {
        id: 'admin',
        name: 'Admin',
        description: 'Administrative access to most features',
        level: 2,
        isSystemRole: true,
        permissions: SYSTEM_ROLE_PERMISSIONS.admin,
    },
    {
        id: 'manager',
        name: 'Manager',
        description: 'Management access to assigned products',
        level: 3,
        isSystemRole: false,
        permissions: SYSTEM_ROLE_PERMISSIONS.manager,
    },
    {
        id: 'editor',
        name: 'Editor',
        description: 'Content editing access',
        level: 4,
        isSystemRole: false,
        permissions: SYSTEM_ROLE_PERMISSIONS.editor,
    },
    {
        id: 'support',
        name: 'Support',
        description: 'Customer support access',
        level: 5,
        isSystemRole: false,
        permissions: SYSTEM_ROLE_PERMISSIONS.support,
    },
    {
        id: 'analyst',
        name: 'Analyst',
        description: 'Analytics and reporting access',
        level: 6,
        isSystemRole: false,
        permissions: SYSTEM_ROLE_PERMISSIONS.analyst,
    },
];

/* ============================================
   ADMIN PERMISSION HELPERS
============================================ */

/**
 * Checks if a user has a specific admin permission.
 * Matches role by `id` (snake_case), not `name` (display string).
 */
export function hasAdminPermission(user: User, permission: string): boolean {
    if (!user) return false;

    // Super admin has all permissions
    if (user.role === 'super_admin') return true;

    // Wildcard on direct permissions
    if (user.permissions?.includes('*')) return true;

    // Direct permission grant
    if (user.permissions?.includes(permission)) return true;

    // Role-based permissions — match by id (was previously matching name, which was a bug)
    const roleDefinition = ADMIN_ROLES.find(r => r.id === user.role);
    if (roleDefinition?.permissions.includes('*')) return true;
    if (roleDefinition?.permissions.includes(permission)) return true;

    return false;
}

/**
 * Returns the display name for a given role id.
 */
export function getUserRoleDisplay(role: string): string {
    const roleDefinition = ADMIN_ROLES.find(r => r.id === role);
    if (roleDefinition) return roleDefinition.name;
    return role.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

/**
 * Returns the permission strings for a given role id.
 */
export function getPermissionsForRole(roleId: SystemRole): string[] {
    return SYSTEM_ROLE_PERMISSIONS[roleId] ?? [];
}

/**
 * Returns true if `currentUser` has authority to manage `targetRole`.
 * Based on level: lower level number = higher authority.
 */
export function canManageRole(currentUser: User, targetRoleId: string): boolean {
    if (!currentUser) return false;

    if (currentUser.role === 'super_admin') return true;

    const currentRoleDef = ADMIN_ROLES.find(r => r.id === currentUser.role);
    const targetRoleDef = ADMIN_ROLES.find(r => r.id === targetRoleId);

    if (!currentRoleDef || !targetRoleDef) return false;
    return currentRoleDef.level < targetRoleDef.level;
}

/* ============================================
   AUDIT HELPERS
============================================ */

export function formatAuditAction(action: string): string {
    return action
        .replace(/_/g, ' ')
        .toLowerCase()
        .replace(/\b\w/g, l => l.toUpperCase());
}

export function getAuditActionIcon(action: string): string {
    const icons: Record<string, string> = {
        CREATE: '➕',
        UPDATE: '✏️',
        DELETE: '🗑️',
        LOGIN: '🔑',
        LOGOUT: '🚪',
        PASSWORD_RESET: '🔄',
        ROLE_ASSIGN: '👑',
        PRODUCT_ASSIGN: '📦',
        INVITATION: '📧',
    };
    return icons[action] ?? '📝';
}

/* ============================================
   PRODUCT SCOPE HELPERS
============================================ */

export function filterProductsByScope(products: any[], scope: string[] | null): any[] {
    if (!scope || scope.length === 0) return products;
    return products.filter(p => scope.includes(p.slug) || scope.includes('*'));
}

export function calculateProductMetrics() {
    const products = BOLDMIND_PRODUCTS;

    const totalRevenue = products.reduce((sum, p) => sum + (p.monthlyRevenue || 0), 0);
    const totalTeamSize = products.reduce((sum, p) => sum + (p.teamSize || 1), 0);

    const byStatus = products.reduce((acc, p) => {
        acc[p.status] = (acc[p.status] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const byCategory = products.reduce((acc, p) => {
        acc[p.category] = (acc[p.category] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const priorityDistribution = products.reduce((acc, p) => {
        const priorityGroup = p.priority <= 10 ? 'high' : p.priority <= 20 ? 'medium' : 'low';
        acc[priorityGroup] = (acc[priorityGroup] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    return {
        totals: {
            products: products.length,
            revenue: totalRevenue,
            teamSize: totalTeamSize,
        },
        distribution: {
            byStatus,
            byCategory,
            byPriority: priorityDistribution,
        },
        upcoming: products.filter(p => p.status === 'BUILDING' || p.status === 'PLANNED').length,
    };
}

export default {
    ADMIN_PERMISSIONS,
    ADMIN_ROLES,
    hasAdminPermission,
    getUserRoleDisplay,
    getPermissionsForRole,
    canManageRole,
    formatAuditAction,
    getAuditActionIcon,
    filterProductsByScope,
    calculateProductMetrics,
};