// packages/utils/src/admin/index.ts
import { BOLDMIND_PRODUCTS } from '../constants/products';

export interface Permission {
    category: string;
    name: string;
    description: string;
}

export const ADMIN_PERMISSIONS: Record<string, Permission[]> = {
    // User permissions
    users: [
        { category: 'users', name: 'users:read', description: 'View users' },
        { category: 'users', name: 'users:create', description: 'Create users' },
        { category: 'users', name: 'users:update', description: 'Update users' },
        { category: 'users', name: 'users:delete', description: 'Delete users' },
        { category: 'users', name: 'users:reset_password', description: 'Reset passwords' },
        { category: 'users', name: 'users:manage_super_admin', description: 'Manage super admins' },
        { category: 'users', name: 'users:impersonate', description: 'Impersonate users' },
    ],

    // Product permissions
    products: [
        { category: 'products', name: 'products:read', description: 'View products' },
        { category: 'products', name: 'products:create', description: 'Create products' },
        { category: 'products', name: 'products:update', description: 'Update products' },
        { category: 'products', name: 'products:delete', description: 'Delete products' },
        { category: 'products', name: 'products:publish', description: 'Publish products' },
        { category: 'products', name: 'products:archive', description: 'Archive products' },
    ],

    // Analytics permissions
    analytics: [
        { category: 'analytics', name: 'analytics:read', description: 'View analytics' },
        { category: 'analytics', name: 'analytics:export', description: 'Export analytics' },
        { category: 'analytics', name: 'analytics:configure', description: 'Configure analytics' },
    ],

    // Billing permissions
    billing: [
        { category: 'billing', name: 'billing:read', description: 'View billing' },
        { category: 'billing', name: 'billing:update', description: 'Update billing' },
        { category: 'billing', name: 'billing:refund', description: 'Process refunds' },
        { category: 'billing', name: 'billing:manage_subscriptions', description: 'Manage subscriptions' },
    ],

    // Content permissions
    content: [
        { category: 'content', name: 'content:read', description: 'View content' },
        { category: 'content', name: 'content:create', description: 'Create content' },
        { category: 'content', name: 'content:update', description: 'Update content' },
        { category: 'content', name: 'content:delete', description: 'Delete content' },
        { category: 'content', name: 'content:publish', description: 'Publish content' },
        { category: 'content', name: 'content:moderate', description: 'Moderate content' },
    ],
};

export interface RoleDefinition {
    id: string;
    name: string;
    description: string;
    level: number;
    permissions: string[];
    isSystemRole: boolean;
}

export const ADMIN_ROLES: RoleDefinition[] = [
    {
        id: 'super_admin',
        name: 'Super Admin',
        description: 'Full system access',
        level: 1,
        permissions: ['*'],
        isSystemRole: true,
    },
    {
        id: 'admin',
        name: 'Admin',
        description: 'Administrative access to most features',
        level: 2,
        permissions: [
            'users:read', 'users:create', 'users:update', 'users:delete',
            'products:read', 'products:update', 'products:publish',
            'analytics:read', 'analytics:export',
            'billing:read', 'billing:update',
            'content:read', 'content:create', 'content:update', 'content:delete', 'content:publish',
        ],
        isSystemRole: true,
    },
    {
        id: 'manager',
        name: 'Manager',
        description: 'Management access to assigned products',
        level: 3,
        permissions: [
            'users:read',
            'products:read', 'products:update',
            'analytics:read',
            'content:read', 'content:create', 'content:update',
        ],
        isSystemRole: false,
    },
    {
        id: 'editor',
        name: 'Editor',
        description: 'Content editing access',
        level: 4,
        permissions: [
            'content:read', 'content:create', 'content:update',
        ],
        isSystemRole: false,
    },
    {
        id: 'support',
        name: 'Support',
        description: 'Customer support access',
        level: 5,
        permissions: [
            'users:read',
            'billing:read',
        ],
        isSystemRole: false,
    },
    {
        id: 'analyst',
        name: 'Analyst',
        description: 'Analytics and reporting access',
        level: 6,
        permissions: [
            'analytics:read', 'analytics:export',
        ],
        isSystemRole: false,
    },
];

export function hasAdminPermission(user: any, permission: string): boolean {
    if (!user) return false;

    // Super admin has all permissions
    if (user.isSuperAdmin) return true;

    // Check if user is admin
    if (!user.isAdmin) return false;

    // Check for wildcard permission
    if (user.permissions?.includes('*')) return true;

    // Check specific permission
    if (user.permissions?.includes(permission)) return true;

    // Check role-based permissions
    const userRole = ADMIN_ROLES.find(role => role.name === user.role);
    if (userRole?.permissions.includes('*')) return true;
    if (userRole?.permissions.includes(permission)) return true;

    return false;
}

export function getUserRoleDisplay(role: string): string {
    const roleNames: Record<string, string> = {
        'super_admin': 'Super Admin',
        'admin': 'Admin',
        'manager': 'Manager',
        'editor': 'Editor',
        'user': 'User',
        'guest': 'Guest',
        'support': 'Support',
        'analyst': 'Analyst',
    };

    return roleNames[role] || role.replace('_', ' ').toUpperCase();
}

export function getPermissionsForRole(roleId: string): string[] {
    const role = ADMIN_ROLES.find(r => r.id === roleId);
    return role?.permissions || [];
}

export function canManageRole(currentUser: any, targetRole: string): boolean {
    if (!currentUser) return false;

    // Super admin can manage all roles
    if (currentUser.isSuperAdmin) return true;

    // Get current user's role level
    const currentUserRole = ADMIN_ROLES.find(r =>
        r.id === currentUser.role?.toLowerCase() ||
        r.name === currentUser.role
    );

    // Get target role level
    const targetUserRole = ADMIN_ROLES.find(r =>
        r.id === targetRole.toLowerCase() ||
        r.name === targetRole
    );

    // Can only manage roles at lower levels
    if (!currentUserRole || !targetUserRole) return false;
    return currentUserRole.level < targetUserRole.level;
}

export function formatAuditAction(action: string): string {
    return action
        .replace(/_/g, ' ')
        .toLowerCase()
        .replace(/\b\w/g, l => l.toUpperCase());
}

export function getAuditActionIcon(action: string): string {
    const icons: Record<string, string> = {
        'CREATE': '➕',
        'UPDATE': '✏️',
        'DELETE': '🗑️',
        'LOGIN': '🔑',
        'LOGOUT': '🚪',
        'PASSWORD_RESET': '🔄',
        'ROLE_ASSIGN': '👑',
        'PRODUCT_ASSIGN': '📦',
        'INVITATION': '📧',
    };

    return icons[action] || '📝';
}

export function filterProductsByScope(products: any[], scope: string[] | null): any[] {
    if (!scope || scope.length === 0) return products;

    return products.filter(product =>
        scope.includes(product.slug) || scope.includes('*')
    );
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
        const priorityGroup = p.priority <= 10 ? 'high' :
            p.priority <= 20 ? 'medium' : 'low';
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
        upcoming: products.filter(p =>
            p.status === 'BUILDING' || p.status === 'PLANNED'
        ).length,
    };
}

export default {
    ADMIN_PERMISSIONS,
    ADMIN_ROLES,
    hasAdminPermission,
    getUserRoleDisplay,
    canManageRole,
    formatAuditAction,
    getAuditActionIcon,
    filterProductsByScope,
    calculateProductMetrics,
};