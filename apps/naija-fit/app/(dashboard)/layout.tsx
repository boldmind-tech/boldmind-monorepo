import { ReactNode } from 'react';

export default function NaijaFitDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <span className="font-black text-[#16a34a] text-lg">NaijaFit 💪</span>
        <div className="flex items-center gap-4 text-sm">
          <a href="/dashboard" className="text-white/60 hover:text-white transition-colors">Dashboard</a>
          <a href="/workout" className="text-white/60 hover:text-white transition-colors">Workouts</a>
          <a href="/nutrition" className="text-white/60 hover:text-white transition-colors">Nutrition</a>
          <a href="/progress" className="text-white/60 hover:text-white transition-colors">Progress</a>
          <a href="/profile" className="text-white/60 hover:text-white transition-colors">Profile</a>
        </div>
      </nav>
      <main className="max-w-6xl mx-auto p-6">{children}</main>
    </div>
  );
}
