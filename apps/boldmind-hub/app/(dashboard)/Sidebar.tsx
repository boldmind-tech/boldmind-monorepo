// ─────────────────────────────────────────────────────────────────────────────
// apps/boldmind-hub/app/(dashboard)/Sidebar.tsx
// ─────────────────────────────────────────────────────────────────────────────
// FIXES from original:
//   1. `bg-blue-600` hardcoded → `var(--product-primary)` CSS variable
//   2. `bg-blue-50 text-blue-700` active states → CSS variable tokens
//   3. `hidden md:flex` → controlled by `open` prop for mobile overlay mode
//   4. Logo uses the actual BoldMind palette instead of generic blue
//   5. Added useAuth user display name + avatar initials
// ─────────────────────────────────────────────────────────────────────────────

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@boldmind/ui';
import { useAuth } from '@boldmind/auth';
import { toast } from 'sonner';
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Target,
  Settings,
  LogOut,
  Package,
  X,
} from 'lucide-react';

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
  active?: string;
}

const navItems = [
  { href: '/dashboard',          label: 'Overview',  icon: LayoutDashboard, id: 'dashboard' },
  { href: '/dashboard/products', label: 'Products',  icon: Package,         id: 'products'  },
  { href: '/dashboard/revenue',  label: 'Revenue',   icon: BarChart3,       id: 'revenue'   },
  { href: '/dashboard/team',     label: 'Team',      icon: Users,           id: 'team'      },
  { href: '/dashboard/roadmap',  label: 'Roadmap',   icon: Target,          id: 'roadmap'   },
  { href: '/dashboard/settings', label: 'Settings',  icon: Settings,        id: 'settings'  },
];

export function DashboardSidebar({ open = false, onClose, active }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Signed out successfully');
      router.push('/login');
    } catch (err: unknown) {
      toast.error('Failed to sign out');
      console.error(err);
    }
  };

  const userInitials = [
    (user as any)?.firstName?.[0],
    (user as any)?.lastName?.[0],
  ]
    .filter(Boolean)
    .join('')
    .toUpperCase() || (user?.email?.[0] ?? 'U').toUpperCase();

  const displayName =
    [(user as any)?.firstName, (user as any)?.lastName].filter(Boolean).join(' ') ||
    user?.email?.split('@')[0] ||
    'User';

  return (
    <>
      {/*
        Desktop: always visible as a fixed left column (hidden below md via class).
        Mobile: slides in as overlay, controlled by `open` prop.
      */}
      <aside
        className={cn(
          // Base styles
          'flex flex-col h-screen',
          'border-r transition-transform duration-300 z-40',
          // Desktop — always shown
          'md:sticky md:top-0 md:w-64 md:translate-x-0',
          // Mobile — full-height overlay
          'fixed top-0 left-0 bottom-0 w-72',
          open ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
        )}
        style={{
          backgroundColor: 'var(--product-background)',
          borderColor: 'var(--product-muted)',
        }}
      >
        {/* Brand header */}
        <div
          className="flex items-center justify-between h-16 px-5 border-b flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, var(--product-primary), color-mix(in srgb, var(--product-primary) 80%, black))`,
            borderColor: 'rgba(255,255,255,0.1)',
          }}
        >
          <Link href="/dashboard" className="flex items-center gap-2.5 no-underline">
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image src="/logo.webp" alt="BoldMind" fill className="object-contain" />
            </div>
            <span className="font-black text-white text-base tracking-tight">
              BoldMind
            </span>
          </Link>

          {/* Mobile close button */}
          <button
            onClick={onClose}
            className="md:hidden p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          {navItems.map((item) => {
            const isActive =
              active === item.id ||
              pathname === item.href ||
              pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all',
                  'group',
                )}
                style={{
                  backgroundColor: isActive ? 'var(--product-highlight)' : undefined,
                  color: isActive ? 'var(--product-primary)' : 'var(--product-foreground)',
                  opacity: isActive ? 1 : 0.7,
                }}
                onMouseEnter={(e: any) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--product-muted)';
                    (e.currentTarget as HTMLElement).style.opacity = '1';
                  }
                }}
                onMouseLeave={(e: any) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.backgroundColor = '';
                    (e.currentTarget as HTMLElement).style.opacity = '0.7';
                  }
                }}
              >
                <item.icon
                  className="flex-shrink-0"
                  size={17}
                  style={{ color: isActive ? 'var(--product-primary)' : 'inherit' }}
                />
                {item.label}
                {isActive && (
                  <div
                    className="ml-auto w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--product-primary)' }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* User footer */}
        <div
          className="flex-shrink-0 border-t p-3 space-y-1"
          style={{ borderColor: 'var(--product-muted)' }}
        >
          {/* User info */}
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
               style={{ backgroundColor: 'var(--product-muted)' }}>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-white"
              style={{ backgroundColor: 'var(--product-primary)' }}
            >
              {userInitials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate" style={{ color: 'var(--product-foreground)' }}>
                {displayName}
              </p>
              <p className="text-xs truncate" style={{ color: 'var(--product-foreground)', opacity: 0.5 }}>
                {user?.email}
              </p>
            </div>
          </div>

          {/* Sign out */}
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm font-medium transition-all"
            style={{ color: 'var(--color-error)', opacity: 0.8 }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-error-light)';
              (e.currentTarget as HTMLElement).style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '';
              (e.currentTarget as HTMLElement).style.opacity = '0.8';
            }}
          >
            <LogOut size={17} />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}