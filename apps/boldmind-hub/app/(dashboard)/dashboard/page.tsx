 
'use client';
 
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@boldmind/auth';
import { hubAPI } from '../../../lib/api'; // apps/boldmind-hub/lib/api-adapters.ts
import {
  Users, Package, BarChart3, DollarSign,
  Activity, Zap, TrendingUp, Settings, ArrowRight,
} from 'lucide-react';
 
function StatCard({ icon: Icon, label, value, sub, accent = false }: {
  icon: React.ElementType; label: string; value: string | number;
  sub?: string; accent?: boolean;
}) {
  return (
    <div
      className="rounded-2xl p-5 border-2 transition-all hover:shadow-md"
      style={{
        backgroundColor: accent ? 'var(--product-primary)' : 'var(--product-background)',
        borderColor:     accent ? 'var(--product-primary)' : 'var(--product-muted)',
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center"
             style={{
               backgroundColor: accent ? 'rgba(255,255,255,0.2)' : 'var(--product-highlight)',
               color: accent ? 'white' : 'var(--product-primary)',
             }}>
          <Icon size={18} />
        </div>
        <span className="text-xs font-black uppercase tracking-widest"
              style={{ color: accent ? 'rgba(255,255,255,0.7)' : 'var(--product-foreground)', opacity: accent ? 1 : 0.5 }}>
          {label}
        </span>
      </div>
      <p className="text-3xl font-black" style={{ color: accent ? 'white' : 'var(--product-foreground)' }}>
        {value}
      </p>
      {sub && (
        <p className="text-xs mt-1"
           style={{ color: accent ? 'rgba(255,255,255,0.6)' : 'var(--product-foreground)', opacity: accent ? 1 : 0.5 }}>
          {sub}
        </p>
      )}
    </div>
  );
}
 
export default function HubDashboardPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    hubAPI.getDashboardStats()
      .then(setStats)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
 
  const displayName = (user as any)?.firstName || user?.email?.split('@')[0] || 'Founder';
 
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 rounded-full border-2 animate-spin"
             style={{ borderTopColor: 'var(--product-primary)', borderColor: 'var(--product-muted)' }} />
      </div>
    );
  }
 
  return (
    <div className="space-y-8">
      {/* Greeting */}
      <div
        className="rounded-2xl p-7 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--product-primary), color-mix(in srgb, var(--product-primary) 75%, black))' }}
      >
        <div className="absolute top-0 right-0 w-48 h-48 opacity-10 rounded-full blur-3xl"
             style={{ backgroundColor: 'var(--product-secondary)', transform: 'translate(30%, -30%)' }} />
        <h1 className="text-2xl font-black text-white mb-1">
          Welcome back, {displayName} 🚀
        </h1>
        <p className="text-white/70 text-sm">BoldMind Ecosystem — 32+ products, one hub.</p>
      </div>
 
      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <StatCard icon={Users}       label="Total Users"    value={stats?.userStats?.totals?.users?.toLocaleString() ?? 0} sub="All ecosystem users" />
        <StatCard icon={Package}     label="Active Products" value={stats?.userStats?.totals?.activeProducts ?? 0} />
        <StatCard icon={BarChart3}   label="Admins"         value={stats?.userStats?.totals?.admins ?? 0} />
        <StatCard icon={DollarSign}  label="Monthly Revenue" value={`₦${(stats?.ecosystemOverview?.totalMonthlyRevenue ?? 0).toLocaleString()}`} accent />
      </div>
 
      {/* Quick links */}
      <div>
        <h2 className="text-lg font-black mb-4" style={{ color: 'var(--product-foreground)' }}>
          Quick Actions
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { href: '/dashboard/products', emoji: '📦', label: 'Products', sub: 'Manage your subscriptions' },
            { href: '/dashboard/revenue',  emoji: '💰', label: 'Revenue',  sub: 'View earnings & payouts' },
            { href: '/dashboard/team',     emoji: '👥', label: 'Team',     sub: 'Manage team members' },
            { href: '/dashboard/settings', emoji: '⚙️', label: 'Settings', sub: 'Profile & preferences' },
          ].map(q => (
            <Link key={q.href} href={q.href}
              className="flex items-center gap-3 p-4 rounded-xl border-2 transition-all hover:shadow-md group"
              style={{ borderColor: 'var(--product-muted)', backgroundColor: 'var(--product-background)' }}
              onMouseEnter={(e: { currentTarget: HTMLElement; }) => (e.currentTarget as HTMLElement).style.borderColor = 'var(--product-primary)'}
              onMouseLeave={(e: { currentTarget: HTMLElement; }) => (e.currentTarget as HTMLElement).style.borderColor = 'var(--product-muted)'}>
              <span className="text-2xl">{q.emoji}</span>
              <div>
                <p className="font-bold text-sm" style={{ color: 'var(--product-foreground)' }}>{q.label}</p>
                <p className="text-xs" style={{ color: 'var(--product-foreground)', opacity: 0.5 }}>{q.sub}</p>
              </div>
              <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--product-primary)' }} />
            </Link>
          ))}
        </div>
      </div>
 
      {/* Recent activity */}
      {stats?.recentActivity && stats.recentActivity.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-black" style={{ color: 'var(--product-foreground)' }}>
              Recent Activity
            </h2>
            <Link href="/admin/activity" className="text-sm font-bold" style={{ color: 'var(--product-primary)' }}>
              View all →
            </Link>
          </div>
          <div className="rounded-2xl border-2 overflow-hidden"
               style={{ borderColor: 'var(--product-muted)', backgroundColor: 'var(--product-background)' }}>
            {stats.recentActivity.slice(0, 5).map((act: any, i: number) => (
              <div key={act.id ?? i}
                className="flex items-center gap-4 px-5 py-3.5 transition-colors"
                style={{ borderBottom: i < 4 ? '1px solid var(--product-muted)' : undefined }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--product-muted)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = ''}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                     style={{ backgroundColor: 'var(--product-primary)' }}>
                  {act.user?.fullName?.[0] || act.user?.email?.[0]?.toUpperCase() || 'S'}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate" style={{ color: 'var(--product-foreground)' }}>
                    <strong>{act.user?.fullName || 'System'}</strong> {act.action}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--product-foreground)', opacity: 0.4 }}>
                    {new Date(act.createdAt).toLocaleTimeString()} · {act.entityType}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}