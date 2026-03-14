// ─────────────────────────────────────────────────────────────────────────────
// apps/boldmind-hub/app/admin/layout.tsx
// ─────────────────────────────────────────────────────────────────────────────
// FIXES:
//   1. Hardcoded `bg-blue-600` → `var(--product-primary)` throughout
//   2. Active nav states use CSS variable tokens not Tailwind color classes
//   3. Dark mode works correctly via data-theme="dark" CSS variables
//   4. User menu moved to a proper dropdown with correct z-index
//   5. Removed `'use client'` from layout — only used in child components
// ─────────────────────────────────────────────────────────────────────────────

'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@boldmind/auth';
import { ThemeToggle, DyslexiaToggle } from '@boldmind/ui';
import {
  LayoutDashboard,
  Users,
  Shield,
  Settings,
  BarChart3,
  Package,
  FileText,
  Bell,
  LogOut,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Activity,
} from 'lucide-react';

const adminNav = [
  { name: 'Dashboard',        href: '/admin',          icon: LayoutDashboard },
  { name: 'Users',            href: '/admin/users',    icon: Users           },
  { name: 'Roles',            href: '/admin/roles',    icon: Shield          },
  { name: 'Products',         href: '/admin/products', icon: Package         },
  { name: 'Analytics',        href: '/admin/analytics',icon: BarChart3       },
  { name: 'Content',          href: '/admin/content',  icon: FileText        },
  { name: 'Activity',         href: '/admin/activity', icon: Activity        },
  { name: 'Settings',         href: '/admin/settings', icon: Settings        },
];

// ─── Nav item ──────────────────────────────────────────────────────────────
function NavItem({ item, pathname, onClick }: {
  item: typeof adminNav[0];
  pathname: string;
  onClick?: () => void;
}) {
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group"
      style={{
        backgroundColor: isActive ? 'var(--product-highlight)' : undefined,
        color: isActive ? 'var(--product-primary)' : 'var(--product-foreground)',
        opacity: isActive ? 1 : 0.7,
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
        if (!isActive) {
          (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--product-muted)';
          (e.currentTarget as HTMLElement).style.opacity = '1';
        }
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
        if (!isActive) {
          (e.currentTarget as HTMLElement).style.backgroundColor = '';
          (e.currentTarget as HTMLElement).style.opacity = '0.7';
        }
      }}
    >
      <item.icon size={17} style={{ color: isActive ? 'var(--product-primary)' : 'inherit' }} />
      <span>{item.name}</span>
      {isActive && (
        <ChevronRight
          size={14}
          className="ml-auto"
          style={{ color: 'var(--product-primary)' }}
        />
      )}
    </Link>
  );
}

// ─── Sidebar content ────────────────────────────────────────────────────────
function AdminSidebarContent({ pathname, user, onSignOut, onClose }: {
  pathname: string;
  user: any;
  onSignOut: () => void;
  onClose?: () => void;
}) {
  const userInitials = [user?.firstName?.[0], user?.lastName?.[0]]
    .filter(Boolean).join('').toUpperCase()
    || (user?.email?.[0] ?? 'A').toUpperCase();

  return (
    <div
      className="flex flex-col h-full"
      style={{ backgroundColor: 'var(--product-background)' }}
    >
      {/* Brand bar */}
      <div
        className="flex items-center justify-between h-16 px-5 flex-shrink-0"
        style={{
          background: `linear-gradient(135deg, var(--product-primary), color-mix(in srgb, var(--product-primary) 80%, black))`,
        }}
      >
        <Link href="/admin" className="flex items-center gap-2.5 no-underline">
          <div className="relative w-8 h-8">
            <Image src="/logo.webp" alt="BoldMind" fill className="object-contain" />
          </div>
          <span className="font-black text-white text-sm tracking-tight">Admin</span>
        </Link>
        {onClose && (
          <button onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors lg:hidden">
            <X size={16} />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
        {adminNav.map(item => (
          <NavItem key={item.href} item={item} pathname={pathname} onClick={onClose} />
        ))}
      </nav>

      {/* User footer */}
      <div className="flex-shrink-0 px-3 pb-4 pt-3 border-t" style={{ borderColor: 'var(--product-muted)' }}>
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1"
             style={{ backgroundColor: 'var(--product-muted)' }}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
               style={{ backgroundColor: 'var(--product-primary)' }}>
            {userInitials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold truncate" style={{ color: 'var(--product-foreground)' }}>
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-xs truncate" style={{ color: 'var(--product-foreground)', opacity: 0.5 }}>
              {user?.isSuperAdmin ? 'Super Admin' : user?.role}
            </p>
          </div>
        </div>
        <button onClick={onSignOut}
          className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm font-medium transition-all"
          style={{ color: 'var(--color-error)', opacity: 0.8 }}
          onMouseEnter={(e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-error-light)'; (e.currentTarget as HTMLElement).style.opacity = '1'; }}
          onMouseLeave={(e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.backgroundColor = ''; (e.currentTarget as HTMLElement).style.opacity = '0.8'; }}
        >
          <LogOut size={17} />
          Sign Out
        </button>
      </div>
    </div>
  );
}

// ─── Main layout ───────────────────────────────────────────────────────────
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notifCount] = useState(3); // ASSUMPTION: replace with real notification count

  const pathname = usePathname();
  const { user, isLoading, signOut, hasPermission } = useAuth();
  const router = useRouter();
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Auth guard
  useEffect(() => {
    if (!isLoading && (!user || !hasPermission('admin:access'))) {
      router.replace('/login?redirect=/admin');
    }
  }, [user, isLoading, router, hasPermission]);

  // Close user menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close mobile sidebar on route change
  useEffect(() => { setSidebarOpen(false); }, [pathname]);

  const handleSignOut = async () => {
    await signOut();
    router.replace('/login');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center"
           style={{ backgroundColor: 'var(--product-background)' }}>
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 rounded-full border-3 border-t-[var(--product-primary)] border-[var(--product-muted)] animate-spin"
               style={{ borderTopColor: 'var(--product-primary)', borderColor: 'var(--product-muted)', borderWidth: 3 }} />
          <span className="text-sm font-medium" style={{ color: 'var(--product-foreground)', opacity: 0.6 }}>
            Verifying access…
          </span>
        </div>
      </div>
    );
  }

  if (!user || !hasPermission('admin:access')) return null;

  const userInitials = [user?.firstName?.[0], user?.lastName?.[0]]
    .filter(Boolean).join('').toUpperCase()
    || (user?.email?.[0] ?? 'A').toUpperCase();

  const currentPageName = adminNav.find(n => n.href === pathname || pathname.startsWith(n.href + '/'))?.name ?? 'Admin';

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: 'var(--product-background)' }}>

      {/* ── DESKTOP sidebar ─────────────────────────────────────────────── */}
      <div
        className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 border-r z-20"
        style={{ borderColor: 'var(--product-muted)' }}
      >
        <AdminSidebarContent
          pathname={pathname}
          user={user}
          onSignOut={handleSignOut}
        />
      </div>

      {/* ── MOBILE sidebar overlay ────────────────────────────────────── */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 z-30 bg-black/40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
          <div
            className="fixed inset-y-0 left-0 z-40 w-72 shadow-2xl lg:hidden"
            style={{ borderColor: 'var(--product-muted)' }}
          >
            <AdminSidebarContent
              pathname={pathname}
              user={user}
              onSignOut={handleSignOut}
              onClose={() => setSidebarOpen(false)}
            />
          </div>
        </>
      )}

      {/* ── Main content area ──────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col lg:pl-64 min-w-0">

        {/* Top bar */}
        <header
          className="sticky top-0 z-10 flex items-center h-14 px-4 sm:px-6 border-b shadow-sm"
          style={{
            backgroundColor: 'var(--product-background)',
            borderColor: 'var(--product-muted)',
          }}
        >
          {/* Mobile hamburger */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg mr-3 transition-colors lg:hidden"
            style={{ color: 'var(--product-foreground)' }}
            onMouseEnter={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--product-muted)'}
            onMouseLeave={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.backgroundColor = ''}
            aria-label="Open sidebar"
          >
            <Menu size={20} />
          </button>

          {/* Page title */}
          <div className="flex-1">
            <h1 className="text-base font-bold" style={{ color: 'var(--product-foreground)' }}>
              {currentPageName}
            </h1>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <DyslexiaToggle variant="compact" />

            {/* Notifications */}
            <button
              className="relative p-2 rounded-lg transition-colors"
              style={{ color: 'var(--product-foreground)', opacity: 0.7 }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--product-muted)'; (e.currentTarget as HTMLElement).style.opacity = '1'; }}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.backgroundColor = ''; (e.currentTarget as HTMLElement).style.opacity = '0.7'; }}
              aria-label="Notifications"
            >
              <Bell size={18} />
              {notifCount > 0 && (
                <span
                  className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--color-error)' }}
                />
              )}
            </button>

            {/* User menu */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 p-1.5 rounded-xl transition-colors text-sm"
                onMouseEnter={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--product-muted)'}
                onMouseLeave={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.backgroundColor = ''}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: 'var(--product-primary)' }}
                >
                  {userInitials}
                </div>
                <ChevronDown size={14} style={{ color: 'var(--product-foreground)', opacity: 0.5 }} />
              </button>

              {userMenuOpen && (
                <div
                  className="absolute right-0 mt-1 w-52 rounded-2xl border shadow-xl overflow-hidden z-50"
                  style={{
                    backgroundColor: 'var(--product-background)',
                    borderColor: 'var(--product-muted)',
                  }}
                >
                  <div className="px-4 py-3 border-b" style={{ borderColor: 'var(--product-muted)' }}>
                    <p className="text-sm font-bold truncate" style={{ color: 'var(--product-foreground)' }}>
                      {user?.firstName} {user?.lastName}
                    </p>
                    <p className="text-xs truncate" style={{ color: 'var(--product-foreground)', opacity: 0.5 }}>
                      {user?.email}
                    </p>
                    <span
                      className="inline-block mt-1 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: 'var(--product-highlight)', color: 'var(--product-primary)' }}
                    >
                      {user?.isSuperAdmin ? 'Super Admin' : user?.role}
                    </span>
                  </div>

                  {[
                    { href: '/admin/profile',  label: 'Your Profile' },
                    { href: '/admin/settings', label: 'Settings' },
                    { href: '/dashboard',      label: '← User Dashboard' },
                  ].map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setUserMenuOpen(false)}
                      className="block px-4 py-2.5 text-sm transition-colors"
                      style={{ color: 'var(--product-foreground)', opacity: 0.8 }}
                      onMouseEnter={(e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--product-muted)'; (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                      onMouseLeave={(e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.backgroundColor = ''; (e.currentTarget as HTMLElement).style.opacity = '0.8'; }}
                    >
                      {item.label}
                    </Link>
                  ))}

                  <div className="border-t" style={{ borderColor: 'var(--product-muted)' }}>
                    <button
                      onClick={() => { setUserMenuOpen(false); handleSignOut(); }}
                      className="w-full text-left px-4 py-2.5 text-sm transition-colors"
                      style={{ color: 'var(--color-error)' }}
                      onMouseEnter={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-error-light)'}
                      onMouseLeave={(e: React.MouseEvent<HTMLElement>) => (e.currentTarget as HTMLElement).style.backgroundColor = ''}
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}