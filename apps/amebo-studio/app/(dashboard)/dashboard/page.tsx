// ─────────────────────────────────────────────────────────────────────────────
// apps/amebo-studio/app/(dashboard)/dashboard/page.tsx  [Server Component]
// GET /api/v1/amebogist/creator/stats
// GET /api/v1/amebogist/creator/my-articles
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next';
import Link from 'next/link';
import { PenSquare, Eye, Heart, MessageCircle, TrendingUp, FileText, DollarSign, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Creator Dashboard — Amebo Studio',
  robots: { index: false },
};

const API = process.env['NEXT_PUBLIC_API_URL']?.replace(/\/$/, '') ?? 'http://localhost:4001/api/v1';

interface CreatorStats {
  totalArticles: number;
  publishedArticles: number;
  draftArticles: number;
  totalViews: number;
  totalReactions: number;
  totalComments: number;
  monthlyViews: number;
  estimatedRevenue: number;
}

interface Article {
  _id: string;
  title: string;
  status: 'draft' | 'published' | 'archived';
  views: number;
  createdAt: string;
  slug: string;
}

async function getCreatorStats(): Promise<CreatorStats | null> {
  try {
    const res = await fetch(`${API}/amebogist/creator/stats`, {
      credentials: 'include',
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data ?? json;
  } catch { return null; }
}

async function getMyArticles(): Promise<Article[]> {
  try {
    const res = await fetch(`${API}/amebogist/creator/my-articles?limit=5`, {
      credentials: 'include',
      cache: 'no-store',
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data ?? json;
  } catch { return []; }
}

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  accent = false,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  sub?: string;
  accent?: boolean;
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
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{
            backgroundColor: accent ? 'rgba(255,255,255,0.2)' : 'var(--product-highlight)',
            color: accent ? 'white' : 'var(--product-primary)',
          }}
        >
          <Icon size={18} />
        </div>
        <span
          className="text-xs font-black uppercase tracking-widest"
          style={{ color: accent ? 'rgba(255,255,255,0.7)' : 'var(--product-foreground)', opacity: accent ? 1 : 0.5 }}
        >
          {label}
        </span>
      </div>
      <p
        className="text-3xl font-black"
        style={{ color: accent ? 'white' : 'var(--product-foreground)' }}
      >
        {value}
      </p>
      {sub && (
        <p
          className="text-xs mt-1"
          style={{ color: accent ? 'rgba(255,255,255,0.6)' : 'var(--product-foreground)', opacity: accent ? 1 : 0.5 }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default async function StudioOverviewPage() {
  const [stats, articles] = await Promise.all([getCreatorStats(), getMyArticles()]);

  const s = stats ?? {
    totalArticles: 0, publishedArticles: 0, draftArticles: 0,
    totalViews: 0, totalReactions: 0, totalComments: 0,
    monthlyViews: 0, estimatedRevenue: 0,
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-black" style={{ color: 'var(--product-primary)' }}>
            Creator Overview
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--product-foreground)', opacity: 0.6 }}>
            Your content performance across AmeboGist.ng
          </p>
        </div>
        <Link
          href="/dashboard/write"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
          style={{ backgroundColor: 'var(--product-primary)' }}
        >
          <PenSquare size={16} />
          Write New Article
        </Link>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <StatCard icon={FileText}     label="Total Articles"  value={s.totalArticles}                      sub={`${s.draftArticles} drafts`} />
        <StatCard icon={Eye}          label="Total Views"     value={s.totalViews.toLocaleString()}         sub={`${s.monthlyViews.toLocaleString()} this month`} />
        <StatCard icon={Heart}        label="Reactions"       value={s.totalReactions.toLocaleString()} />
        <StatCard icon={MessageCircle}label="Comments"        value={s.totalComments.toLocaleString()} />
        <StatCard icon={TrendingUp}   label="Published"       value={s.publishedArticles} />
        <StatCard icon={Sparkles}     label="Monthly Views"   value={s.monthlyViews.toLocaleString()} />
        <StatCard icon={DollarSign}   label="Est. Revenue"    value={`₦${s.estimatedRevenue.toLocaleString()}`} sub="Based on engagement" accent />
      </div>

      {/* Recent articles */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-black" style={{ color: 'var(--product-foreground)' }}>
            Recent Articles
          </h2>
          <Link
            href="/dashboard/articles"
            className="text-sm font-bold"
            style={{ color: 'var(--product-primary)' }}
          >
            View all →
          </Link>
        </div>

        {articles.length === 0 ? (
          <div
            className="rounded-2xl border-2 border-dashed p-10 text-center"
            style={{ borderColor: 'var(--product-muted)' }}
          >
            <p className="text-5xl mb-4">✍️</p>
            <h3 className="font-black text-lg mb-2" style={{ color: 'var(--product-foreground)' }}>
              No articles yet
            </h3>
            <p className="text-sm mb-6" style={{ color: 'var(--product-foreground)', opacity: 0.5 }}>
              Share your gist with Nigeria — write your first article.
            </p>
            <Link
              href="/dashboard/write"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white"
              style={{ backgroundColor: 'var(--product-primary)' }}
            >
              <PenSquare size={15} /> Start Writing
            </Link>
          </div>
        ) : (
          <div
            className="rounded-2xl border-2 overflow-hidden"
            style={{ borderColor: 'var(--product-muted)', backgroundColor: 'var(--product-background)' }}
          >
            {articles.map((article, i) => (
              <div
                key={article._id}
                className="flex items-center justify-between px-5 py-4 transition-colors"
                style={{ borderBottom: i < articles.length - 1 ? '1px solid var(--product-muted)' : undefined }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--product-muted)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = ''}
              >
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm truncate" style={{ color: 'var(--product-foreground)' }}>
                    {article.title}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <span
                      className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: article.status === 'published' ? 'var(--color-success-light)' : 'var(--product-muted)',
                        color: article.status === 'published' ? 'var(--color-success)' : 'var(--product-foreground)',
                      }}
                    >
                      {article.status}
                    </span>
                    <span className="text-xs flex items-center gap-1" style={{ color: 'var(--product-foreground)', opacity: 0.5 }}>
                      <Eye size={11} /> {article.views.toLocaleString()} views
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Link
                    href={`/dashboard/articles/${article._id}/edit`}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all border"
                    style={{ borderColor: 'var(--product-muted)', color: 'var(--product-foreground)' }}
                  >
                    Edit
                  </Link>
                  <a
                    href={`https://amebogist.ng/article/${article.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg text-xs font-bold text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: 'var(--product-primary)' }}
                  >
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick actions */}
      <div
        className="grid sm:grid-cols-3 gap-4 p-6 rounded-2xl border-2"
        style={{ borderColor: 'var(--product-muted)', backgroundColor: 'var(--product-muted)' }}
      >
        {[
          { href: '/dashboard/write', icon: '✍️', label: 'Write Article', sub: 'Share a new gist' },
          { href: '/dashboard/analytics', icon: '📊', label: 'View Analytics', sub: 'See what performs' },
          { href: '/dashboard/revenue', icon: '💰', label: 'Revenue', sub: 'Your monetization' },
        ].map(action => (
          <Link
            key={action.href}
            href={action.href}
            className="flex items-center gap-3 p-4 rounded-xl transition-all hover:shadow-sm"
            style={{ backgroundColor: 'var(--product-background)' }}
          >
            <span className="text-2xl">{action.icon}</span>
            <div>
              <p className="font-bold text-sm" style={{ color: 'var(--product-foreground)' }}>{action.label}</p>
              <p className="text-xs" style={{ color: 'var(--product-foreground)', opacity: 0.5 }}>{action.sub}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}