//APPS/WEB_APPS/boldmind-hub/app/dashboard/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@boldmind/utils';
import { useAuth } from '@boldmind/auth';
import { toast } from 'sonner';
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Target,
  Settings,
  LogOut,
  Package
} from 'lucide-react';

interface SidebarProps {
  active?: string;
}

export function Sidebar({ active }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Signed out successfully');
      router.push('/login');
    } catch (error: any) {
      toast.error('Failed to sign out: ' + error.message);
    }
  };

  const links = [
    { href: '/dashboard', label: 'Overview', icon: LayoutDashboard, id: 'dashboard' },
    { href: '/dashboard/products', label: 'Products', icon: Package, id: 'products' },
    { href: '/dashboard/revenue', label: 'Revenue', icon: BarChart3, id: 'revenue' },
    { href: '/dashboard/team', label: 'Team', icon: Users, id: 'team' },
    { href: '/dashboard/roadmap', label: 'Roadmap', icon: Target, id: 'roadmap' },
    { href: '/dashboard/settings', label: 'Settings', icon: Settings, id: 'settings' },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-800 hidden md:flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-2 font-bold text-xl text-blue-600 dark:text-blue-400">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">B</div>
          BoldMind
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = active === link.id || pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              )}
            >
              <Icon size={18} />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t dark:border-gray-800">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
