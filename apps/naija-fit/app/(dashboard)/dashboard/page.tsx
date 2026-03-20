import type { Metadata } from 'next';
import Link from 'next/link';
const API = process.env['NEXT_PUBLIC_API_URL']?.replace(/\/$/, '') ?? 'http://localhost:4000';
 
export const metadata: Metadata = { title: 'Fitness Dashboard — NaijaFit', robots: { index: false } };
 
async function getFitnessDashboard() {
  try {
    const res = await fetch(`${API}/fitness/dashboard`, { credentials: 'include', cache: 'no-store' });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data ?? json;
  } catch { return null; }
}
async function getActivePlans() {
  try {
    const res = await fetch(`${API}/fitness/plans?limit=3`, { credentials: 'include', cache: 'no-store' });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data ?? json;
  } catch { return []; }
}
 
export default async function FitDashboardPage() {
  const [dashboard, plans] = await Promise.all([getFitnessDashboard(), getActivePlans()]);
  const d = dashboard ?? { totalWorkouts: 0, totalCaloriesBurned: 0, currentWeightKg: 0, targetWeightKg: 0, weeklyProgress: 0 };
 
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-black" style={{ color: 'var(--product-primary)' }}>Fitness Dashboard</h1>
          <p className="text-sm mt-1" style={{ color: 'var(--product-foreground)', opacity: 0.6 }}>
            Your health journey, tracked and supported
          </p>
        </div>
        <Link href="/dashboard/workout"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white hover:opacity-90"
          style={{ backgroundColor: 'var(--product-primary)' }}>
          💪 Log Workout
        </Link>
      </div>
 
      {d.currentWeightKg > 0 && d.targetWeightKg > 0 && (
        <div className="p-5 rounded-2xl border-2" style={{ borderColor: 'var(--product-muted)' }}>
          <div className="flex justify-between text-sm font-bold mb-3">
            <span>Current: {d.currentWeightKg}kg</span>
            <span style={{ color: 'var(--product-primary)' }}>Target: {d.targetWeightKg}kg</span>
          </div>
          <div className="h-3 rounded-full" style={{ backgroundColor: 'var(--product-muted)' }}>
            <div className="h-3 rounded-full transition-all"
                 style={{ width: `${Math.min((d.currentWeightKg / d.targetWeightKg) * 100, 100)}%`, backgroundColor: 'var(--product-primary)' }} />
          </div>
        </div>
      )}
 
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { emoji: '🏋️', label: 'Workouts', value: d.totalWorkouts },
          { emoji: '🔥', label: 'Calories Burned', value: `${(d.totalCaloriesBurned ?? 0).toLocaleString()} kcal` },
          { emoji: '📅', label: 'This Week', value: `${d.weeklyWorkouts ?? 0} sessions` },
          { emoji: '💪', label: 'Weekly Progress', value: `${d.weeklyProgress ?? 0}%` },
        ].map(s => (
          <div key={s.label} className="rounded-2xl p-4 border-2"
               style={{ backgroundColor: 'var(--product-background)', borderColor: 'var(--product-muted)' }}>
            <span className="text-2xl block mb-2">{s.emoji}</span>
            <p className="text-xl font-black" style={{ color: 'var(--product-foreground)' }}>{s.value}</p>
            <p className="text-xs" style={{ color: 'var(--product-foreground)', opacity: 0.5 }}>{s.label}</p>
          </div>
        ))}
      </div>
 
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { href: '/dashboard/workout',   emoji: '🏃', label: 'Log Workout',   sub: 'Track your session' },
          { href: '/dashboard/nutrition', emoji: '🥗', label: 'Log Meal',       sub: 'Track calories & macros' },
          { href: '/dashboard/track',     emoji: '📏', label: 'Body Check-In',  sub: 'Update measurements' },
          { href: '/dashboard/coach',     emoji: '🤖', label: 'Ask AI Coach',   sub: 'Personalised advice' },
        ].map(q => (
          <Link key={q.href} href={q.href}
            className="flex items-center gap-3 p-4 rounded-xl border-2 transition-all hover:shadow-sm"
            style={{ borderColor: 'var(--product-muted)', backgroundColor: 'var(--product-background)' }}
            onMouseEnter={(e: { currentTarget: HTMLElement; }) => (e.currentTarget as HTMLElement).style.borderColor = 'var(--product-primary)'}
            onMouseLeave={(e: { currentTarget: HTMLElement; }) => (e.currentTarget as HTMLElement).style.borderColor = 'var(--product-muted)'}>
            <span className="text-2xl">{q.emoji}</span>
            <div>
              <p className="font-bold text-sm" style={{ color: 'var(--product-foreground)' }}>{q.label}</p>
              <p className="text-xs" style={{ color: 'var(--product-foreground)', opacity: 0.5 }}>{q.sub}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
