
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Dashboard — PlanAI Suite',
  robots: { index: false },
};


 
const API = process.env['NEXT_PUBLIC_API_URL']?.replace(/\/$/, '') ?? 'http://localhost:4000';
 
async function getRecentJobs() {
  try {
    const res = await fetch(`${API}/planai/jobs?limit=6`, {
      credentials: 'include', cache: 'no-store',
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data ?? json;
  } catch { return []; }
}
 
export default async function PlanaiDashboardPage() {
  const jobs: any[] = await getRecentJobs();
 
  const JOB_STATUS_COLORS: Record<string, string> = {
    completed: 'var(--color-success)',
    pending:   'var(--color-warning)',
    failed:    'var(--color-error)',
    processing:'var(--product-primary)',
  };
 
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-black" style={{ color: 'var(--product-primary)' }}>PlanAI Suite</h1>
        <p className="text-sm mt-1" style={{ color: 'var(--product-foreground)', opacity: 0.6 }}>
          Your AI-powered business command centre
        </p>
      </div>
 
      {/* 12 tool cards */}
      <div>
        <h2 className="text-lg font-black mb-4" style={{ color: 'var(--product-foreground)' }}>Choose a Tool</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {TOOLS.map(tool => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all hover:shadow-md text-center"
              style={{ borderColor: 'var(--product-muted)', backgroundColor: 'var(--product-background)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--product-primary)';
                (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--product-highlight)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--product-muted)';
                (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--product-background)';
              }}
            >
              <span className="text-2xl">{tool.emoji}</span>
              <span className="text-xs font-bold leading-tight" style={{ color: 'var(--product-foreground)' }}>
                {tool.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
 
      {/* Recent jobs */}
      {jobs.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-black" style={{ color: 'var(--product-foreground)' }}>Recent Jobs</h2>
            <Link href="/dashboard/jobs" className="text-sm font-bold" style={{ color: 'var(--product-primary)' }}>
              View all →
            </Link>
          </div>
          <div className="rounded-2xl border-2 overflow-hidden"
               style={{ borderColor: 'var(--product-muted)', backgroundColor: 'var(--product-background)' }}>
            {jobs.map((job: any, i: number) => (
              <div key={job.id ?? i}
                className="flex items-center justify-between px-5 py-3 transition-colors"
                style={{ borderBottom: i < jobs.length - 1 ? '1px solid var(--product-muted)' : undefined }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--product-muted)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = ''}>
                <div>
                  <p className="font-bold text-sm" style={{ color: 'var(--product-foreground)' }}>
                    {job.type ?? job.toolType ?? 'AI Job'}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--product-foreground)', opacity: 0.5 }}>
                    {job.createdAt ? new Date(job.createdAt).toLocaleString() : '—'}
                  </p>
                </div>
                <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: `${JOB_STATUS_COLORS[job.status] ?? 'var(--product-primary)'}20`,
                        color: JOB_STATUS_COLORS[job.status] ?? 'var(--product-primary)',
                      }}>
                  {job.status ?? 'pending'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}