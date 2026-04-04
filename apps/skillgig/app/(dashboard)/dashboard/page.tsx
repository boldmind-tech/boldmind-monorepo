'use client';

import Link from 'next/link';
import { Plus, Briefcase, Calendar, DollarSign, Star, ArrowRight, Package } from 'lucide-react';

const STATS = [
  { label: 'My Gigs', value: '0', icon: Package, sub: 'Active listings' },
  { label: 'Bookings', value: '0', icon: Calendar, sub: 'This month' },
  { label: 'Earned', value: '₦0', icon: DollarSign, sub: 'Total earnings' },
  { label: 'Rating', value: '—', icon: Star, sub: 'Avg review' },
];

const QUICK_ACTIONS = [
  { href: '/post/new', emoji: '✍️', label: 'Post a Gig', sub: 'List your skill or service' },
  { href: '/browse', emoji: '🔍', label: 'Browse Gigs', sub: 'Find skills you need' },
  { href: '/book', emoji: '📅', label: 'My Bookings', sub: 'Manage your appointments' },
  { href: '/escrow', emoji: '💳', label: 'Payments', sub: 'View escrow & earnings' },
];

export default function SkillGigDashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="rounded-2xl p-7 bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <h1 className="text-2xl font-black mb-1">Welcome to SkillGig 🎯</h1>
        <p className="text-white/70 text-sm">Your skill marketplace — post gigs, book services, get paid.</p>
        <Link href="/post/new" className="mt-4 inline-flex items-center gap-2 bg-white text-[#7c3aed] px-4 py-2 rounded-xl text-sm font-bold hover:bg-white/90 transition-colors">
          <Plus size={16} /> Post Your First Gig
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map(s => (
          <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-[#7c3aed]/20 flex items-center justify-center">
                <s.icon size={16} className="text-[#7c3aed]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-white/40">{s.label}</span>
            </div>
            <p className="text-2xl font-black">{s.value}</p>
            <p className="text-xs text-white/40 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-black mb-4">Quick Actions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {QUICK_ACTIONS.map(q => (
            <Link key={q.href} href={q.href} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#7c3aed] transition-all group">
              <span className="text-2xl">{q.emoji}</span>
              <div className="flex-1">
                <p className="font-bold text-sm">{q.label}</p>
                <p className="text-xs text-white/40">{q.sub}</p>
              </div>
              <ArrowRight size={14} className="text-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </div>

      {/* My Gigs */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-black">My Gigs</h2>
          <Link href="/post/new" className="text-sm font-bold text-[#7c3aed] flex items-center gap-1"><Plus size={14} /> New Gig</Link>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
          <Briefcase size={32} className="mx-auto mb-3 text-white/20" />
          <p className="text-white/40 text-sm">No gigs yet. Post your first skill!</p>
          <Link href="/post/new" className="mt-4 inline-block bg-[#7c3aed] text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-[#6d28d9] transition-colors">
            Post a Gig
          </Link>
        </div>
      </div>

      {/* Recent Bookings */}
      <div>
        <h2 className="text-lg font-black mb-4">Recent Bookings</h2>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
          <Calendar size={32} className="mx-auto mb-3 text-white/20" />
          <p className="text-white/40 text-sm">No bookings yet.</p>
        </div>
      </div>
    </div>
  );
}
