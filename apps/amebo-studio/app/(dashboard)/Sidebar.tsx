'use client';
 
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@boldmind/auth';
import { cn } from '@boldmind/ui';
import { toast } from 'sonner';
import {
  LayoutDashboard, PenSquare, FileText, BarChart2,
  DollarSign, Settings, X, LogOut, ExternalLink,
} from 'lucide-react';
 
const NAV = [
  { href: '/dashboard',          label: 'Overview',    icon: LayoutDashboard },
  { href: '/dashboard/write',    label: 'Write',       icon: PenSquare       },
  { href: '/dashboard/articles', label: 'My Articles', icon: FileText        },
  { href: '/dashboard/analytics',label: 'Analytics',   icon: BarChart2       },
  { href: '/dashboard/revenue',  label: 'Revenue',     icon: DollarSign      },
  { href: '/dashboard/settings', label: 'Settings',    icon: Settings        },
];
 
interface StudioSidebarProps { open?: boolean; onClose?: () => void; }
 
export function StudioSidebar({ open = false, onClose }: StudioSidebarProps) {
  const pathname = usePathname();
  const router   = useRouter();
  const { user, signOut } = useAuth();
 
  const initials = [(user as any)?.firstName?.[0], (user as any)?.lastName?.[0]]
    .filter(Boolean).join('').toUpperCase() || user?.email?.[0]?.toUpperCase() || 'C';
 
  const handleSignOut = async () => {
    try { await signOut(); router.push('/'); }
    catch { toast.error('Sign out failed'); }
  };
 
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
      {/* Brand */}
      <div className="flex items-center justify-between h-16 px-5 flex-shrink-0"
           style={{ background: 'linear-gradient(135deg, var(--product-primary), color-mix(in srgb, var(--product-primary) 75%, black))' }}>
        <Link href="/dashboard" className="flex items-center gap-2.5 no-underline">
          <div className="relative w-8 h-8">
            <Image src="/logo.webp" alt="Amebo Studio" fill className="object-contain" />
          </div>
          <span className="font-black text-white text-sm tracking-tight">Amebo Studio</span>
        </Link>
        <button onClick={onClose} className="md:hidden p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/15 transition-colors">
          <X size={16} />
        </button>
      </div>
 
      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
        {NAV.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link key={item.href} href={item.href} onClick={onClose}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
              style={{ backgroundColor: isActive ? 'var(--product-highlight)' : undefined, color: isActive ? 'var(--product-primary)' : 'var(--product-foreground)', opacity: isActive ? 1 : 0.65 }}
              onMouseEnter={e => { if (!isActive) { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--product-muted)'; (e.currentTarget as HTMLElement).style.opacity = '1'; } }}
              onMouseLeave={e => { if (!isActive) { (e.currentTarget as HTMLElement).style.backgroundColor = ''; (e.currentTarget as HTMLElement).style.opacity = '0.65'; } }}
            >
              <item.icon size={17} />
              {item.label}
              {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--product-primary)' }} />}
            </Link>
          );
        })}
 
        {/* Read articles on main site */}
        <div className="pt-4">
          <p className="px-3 pb-2 text-[10px] font-black uppercase tracking-widest"
             style={{ color: 'var(--product-foreground)', opacity: 0.35 }}>Quick Links</p>
          <a href="https://amebogist.ng" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs transition-all"
             style={{ color: 'var(--product-foreground)', opacity: 0.55 }}
             onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--product-muted)'; (e.currentTarget as HTMLElement).style.opacity = '1'; }}
             onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ''; (e.currentTarget as HTMLElement).style.opacity = '0.55'; }}>
            <span>📰</span>
            <span className="font-medium">AmeboGist.ng</span>
            <ExternalLink size={11} className="ml-auto opacity-40" />
          </a>
          <a href="https://boldmind.ng/dashboard" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs transition-all"
             style={{ color: 'var(--product-foreground)', opacity: 0.55 }}
             onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--product-muted)'; (e.currentTarget as HTMLElement).style.opacity = '1'; }}
             onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ''; (e.currentTarget as HTMLElement).style.opacity = '0.55'; }}>
            <span>🚀</span>
            <span className="font-medium">BoldMind Hub</span>
            <ExternalLink size={11} className="ml-auto opacity-40" />
          </a>
        </div>
      </nav>
 
      {/* User */}
      <div className="flex-shrink-0 border-t px-3 pb-3 pt-2 space-y-1" style={{ borderColor: 'var(--product-muted)' }}>
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl" style={{ backgroundColor: 'var(--product-muted)' }}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
               style={{ backgroundColor: 'var(--product-primary)' }}>{initials}</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold truncate" style={{ color: 'var(--product-foreground)' }}>
              {(user as any)?.firstName || user?.email?.split('@')[0]}
            </p>
            <p className="text-[11px] truncate" style={{ color: 'var(--product-foreground)', opacity: 0.5 }}>Creator</p>
          </div>
        </div>
        <button onClick={handleSignOut}
          className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm font-medium transition-all"
          style={{ color: 'var(--color-error)', opacity: 0.75 }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-error-light)'; (e.currentTarget as HTMLElement).style.opacity = '1'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ''; (e.currentTarget as HTMLElement).style.opacity = '0.75'; }}>
          <LogOut size={17} />Sign Out
        </button>
      </div>
    </aside>
  );
}