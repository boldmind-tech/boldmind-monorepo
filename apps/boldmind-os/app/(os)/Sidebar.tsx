'use client';
 
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@boldmind/auth';
import { cn } from '@boldmind/ui';
import { toast } from 'sonner';
import {
  LayoutGrid, CheckSquare, Focus, StickyNote, GitBranch,
  Users, Settings, X, LogOut,
} from 'lucide-react';
 
// ── BoldMind OS sidebar ───────────────────────────────────────────────────────
 
const OS_NAV = [
  { href: '/os',              label: 'Dashboard',    icon: LayoutGrid  },
  { href: '/os/workspaces',   label: 'Workspaces',   icon: GitBranch   },
  { href: '/os/tasks',        label: 'Tasks',        icon: CheckSquare },
  { href: '/os/focus',        label: 'Focus Mode',   icon: Focus       },
  { href: '/os/notes',        label: 'Notes',        icon: StickyNote  },
  { href: '/os/team',         label: 'Team',         icon: Users       },
  { href: '/os/settings',     label: 'Settings',     icon: Settings    },
];
 
interface OsSidebarProps { open?: boolean; onClose?: () => void; }
 
export function OsSidebar({ open = false, onClose }: OsSidebarProps) {
  const pathname = usePathname();
  const router   = useRouter();
  const { user, signOut } = useAuth();
  const initials = [(user as any)?.firstName?.[0], (user as any)?.lastName?.[0]]
    .filter(Boolean).join('').toUpperCase() || 'U';
 
  return (
    <aside
      className={cn(
        'flex flex-col h-screen border-r z-40 transition-transform duration-300',
        'md:sticky md:top-0 md:w-64 md:translate-x-0',
        'fixed top-0 left-0 bottom-0 w-72',
        open ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0',
      )}
      style={{ backgroundColor: 'var(--product-background)', borderColor: 'var(--product-muted)' }}
    >
      <div className="flex items-center justify-between h-16 px-5 flex-shrink-0"
           style={{ background: 'linear-gradient(135deg, var(--product-primary), color-mix(in srgb, var(--product-primary) 75%, black))' }}>
        <Link href="/os" className="flex items-center gap-2.5 no-underline">
          <div className="relative w-8 h-8"><Image src="/logo.png" alt="BoldMind OS" fill className="object-contain" /></div>
          <span className="font-black text-white text-sm tracking-tight">BoldMind OS</span>
        </Link>
        <button onClick={onClose} className="md:hidden p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/15"><X size={16} /></button>
      </div>
 
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
        {OS_NAV.map(item => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link key={item.href} href={item.href} onClick={onClose}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
              style={{ backgroundColor: isActive ? 'var(--product-highlight)' : undefined, color: isActive ? 'var(--product-primary)' : 'var(--product-foreground)', opacity: isActive ? 1 : 0.65 }}
              onMouseEnter={e => { if (!isActive) { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--product-muted)'; (e.currentTarget as HTMLElement).style.opacity = '1'; } }}
              onMouseLeave={e => { if (!isActive) { (e.currentTarget as HTMLElement).style.backgroundColor = ''; (e.currentTarget as HTMLElement).style.opacity = '0.65'; } }}>
              <item.icon size={17} />{item.label}
            </Link>
          );
        })}
      </nav>
 
      <div className="flex-shrink-0 border-t px-3 pb-3 pt-2 space-y-1" style={{ borderColor: 'var(--product-muted)' }}>
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl" style={{ backgroundColor: 'var(--product-muted)' }}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white"
               style={{ backgroundColor: 'var(--product-primary)' }}>{initials}</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold truncate" style={{ color: 'var(--product-foreground)' }}>
              {(user as any)?.firstName || user?.email?.split('@')[0]}
            </p>
            <p className="text-[11px]" style={{ color: 'var(--product-foreground)', opacity: 0.5 }}>Founder</p>
          </div>
        </div>
        <button onClick={async () => { try { await signOut(); router.push('/'); } catch { toast.error('Sign out failed'); } }}
          className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm font-medium"
          style={{ color: 'var(--color-error)', opacity: 0.75 }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-error-light)'; (e.currentTarget as HTMLElement).style.opacity = '1'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ''; (e.currentTarget as HTMLElement).style.opacity = '0.75'; }}>
          <LogOut size={17} />Sign Out
        </button>
      </div>
    </aside>
  );
}