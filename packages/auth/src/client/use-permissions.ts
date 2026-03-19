 
'use client';
// packages/auth/src/client/use-permissions.ts
// Check permissions/roles directly in components.
//
// Usage:
//   const { can, isRole } = usePermissions();
//   if (can('content:publish')) { ... }
//   if (isRole('admin')) { ... }
 
import { useAuthStore } from '../store';
import { hasPermission } from '@boldmind/utils';
 
export function usePermissions() {
  const user = useAuthStore((s: { user: any }) => s.user);
 
  const can = (permission: string): boolean => {
    if (!user) return false;
    return hasPermission(
      { ...user, name: user.name ?? '', createdAt: new Date(), updatedAt: new Date() } as never,
      permission,
    );
  };
 
  const isRole = (...roles: string[]): boolean => {
    if (!user) return false;
    return roles.includes(user.role);
  };
 
  const isSystemRole = (): boolean => {
    if (!user) return false;
    return ['super_admin', 'admin', 'manager', 'editor', 'support', 'analyst'].includes(user.role);
  };
 
  const isEcosystemRole = (): boolean => {
    if (!user) return false;
    return ['hustler', 'founder', 'creator', 'student', 'business_owner', 'operator', 'partner'].includes(user.role);
  };
 
  return {
    user,
    can,
    isRole,
    isSystemRole,
    isEcosystemRole,
    permissions: user?.permissions ?? [],
  };
}