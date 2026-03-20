import type { Metadata } from 'next';
import Link from 'next/link';
const API = process.env['NEXT_PUBLIC_API_URL']?.replace(/\/$/, '') ?? 'http://localhost:4000';
 
export const metadata: Metadata = { title: 'OS Dashboard — BoldMind OS', robots: { index: false } };
 
async function getOsDashboard() {
  try {
    const res = await fetch(`${API}/os/dashboard`, { credentials: 'include', cache: 'no-store' });
    if (!res.ok) return null;
    return (await res.json()).data ?? await res.json();
  } catch { return null; }
}
async function getWorkspaces() {
  try {
    const res = await fetch(`${API}/os/workspaces`, { credentials: 'include', cache: 'no-store' });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data ?? json;
  } catch { return []; }
}
 
export default async function OsDashboardPage() {
  const [dashboard, workspaces] = await Promise.all([getOsDashboard(), getWorkspaces()]);
 
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black" style={{ color: 'var(--product-primary)' }}>BoldMind OS</h1>
          <p className="text-sm mt-1" style={{ color: 'var(--product-foreground)', opacity: 0.6 }}>
            Your focus-first productivity workspace
          </p>
        </div>
        <Link href="/os/focus"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white hover:opacity-90"
          style={{ backgroundColor: 'var(--product-primary)' }}>
          🎯 Start Focus Session
        </Link>
      </div>
 
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { href: '/os/focus', emoji: '🍅', label: 'Pomodoro Focus', sub: '25min work blocks' },
          { href: '/os/tasks', emoji: '✅', label: 'Task Capture', sub: 'Quick brain dump' },
          { href: '/os/notes', emoji: '📝', label: 'Knowledge Graph', sub: 'Connected notes' },
        ].map(q => (
          <Link key={q.href} href={q.href}
            className="flex items-center gap-3 p-5 rounded-2xl border-2 transition-all hover:shadow-md"
            style={{ borderColor: 'var(--product-muted)', backgroundColor: 'var(--product-background)' }}
            onMouseEnter={(e: { currentTarget: HTMLElement; }) => (e.currentTarget as HTMLElement).style.borderColor = 'var(--product-primary)'}
            onMouseLeave={(e: { currentTarget: HTMLElement; }) => (e.currentTarget as HTMLElement).style.borderColor = 'var(--product-muted)'}>
            <span className="text-3xl">{q.emoji}</span>
            <div>
              <p className="font-bold" style={{ color: 'var(--product-foreground)' }}>{q.label}</p>
              <p className="text-xs" style={{ color: 'var(--product-foreground)', opacity: 0.5 }}>{q.sub}</p>
            </div>
          </Link>
        ))}
      </div>
 
      {workspaces.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-black" style={{ color: 'var(--product-foreground)' }}>Workspaces</h2>
            <Link href="/os/workspaces" className="text-sm font-bold" style={{ color: 'var(--product-primary)' }}>Manage →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {workspaces.map((ws: any) => (
              <Link key={ws.id} href={`/os/workspaces/${ws.id}`}
                className="p-4 rounded-xl border-2 transition-all hover:shadow-sm"
                style={{ borderColor: 'var(--product-muted)', backgroundColor: 'var(--product-background)' }}
                onMouseEnter={(e: { currentTarget: HTMLElement; }) => (e.currentTarget as HTMLElement).style.borderColor = 'var(--product-primary)'}
                onMouseLeave={(e: { currentTarget: HTMLElement; }) => (e.currentTarget as HTMLElement).style.borderColor = 'var(--product-muted)'}>
                <p className="font-bold text-sm" style={{ color: 'var(--product-foreground)' }}>{ws.name}</p>
                <p className="text-xs mt-1" style={{ color: 'var(--product-foreground)', opacity: 0.5 }}>
                  {ws._count?.members ?? 0} members · {ws._count?.tasks ?? 0} tasks
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}