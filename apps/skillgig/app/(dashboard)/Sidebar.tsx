import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Gig Dashboard — SkillGig', robots: { index: false } };
 
const SKILLGIG_NAV = [
  { href: '/dashboard',            label: 'Overview',   icon: '🏠' },
  { href: '/dashboard/my-gigs',    label: 'My Gigs',    icon: '🎭' },
  { href: '/dashboard/bookings',   label: 'Bookings',   icon: '📅' },
  { href: '/dashboard/earnings',   label: 'Earnings',   icon: '💰' },
  { href: '/dashboard/profile',    label: 'Profile',    icon: '👤' },
  { href: '/dashboard/settings',   label: 'Settings',   icon: '⚙️' },
];
 
export default async function SkillGigDashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-black" style={{ color: 'var(--product-primary)' }}>Gig Dashboard</h1>
          <p className="text-sm mt-1" style={{ color: 'var(--product-foreground)', opacity: 0.6 }}>
            Manage your skills, bookings, and earnings
          </p>
        </div>
        <Link href="/dashboard/my-gigs/create"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white hover:opacity-90"
          style={{ backgroundColor: 'var(--product-primary)' }}>
          + Post a Gig
        </Link>
      </div>
 
      <div className="rounded-2xl border-2 border-dashed p-12 text-center"
           style={{ borderColor: 'var(--product-muted)' }}>
        <p className="text-5xl mb-4">🎭</p>
        <h3 className="font-black text-lg mb-2" style={{ color: 'var(--product-foreground)' }}>Post your first gig</h3>
        <p className="text-sm mb-6" style={{ color: 'var(--product-foreground)', opacity: 0.5 }}>
          Show Nigeria your skill. Every gig starts with one post.
        </p>
        <Link href="/dashboard/my-gigs/create"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white"
          style={{ backgroundColor: 'var(--product-primary)' }}>
          Create Gig →
        </Link>
      </div>
 
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { emoji: '🎭', label: 'Active Gigs',   value: '0' },
          { emoji: '📅', label: 'Total Bookings', value: '0' },
          { emoji: '💰', label: 'Total Earned',   value: '₦0' },
          { emoji: '⭐', label: 'Avg Rating',     value: '—' },
        ].map(s => (
          <div key={s.label} className="rounded-2xl p-4 border-2"
               style={{ backgroundColor: 'var(--product-background)', borderColor: 'var(--product-muted)' }}>
            <span className="text-2xl block mb-2">{s.emoji}</span>
            <p className="text-xl font-black" style={{ color: 'var(--product-foreground)' }}>{s.value}</p>
            <p className="text-xs" style={{ color: 'var(--product-foreground)', opacity: 0.5 }}>{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
