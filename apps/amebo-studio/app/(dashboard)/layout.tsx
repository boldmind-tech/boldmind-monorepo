'use client';
import { ReactNode, useState } from 'react';
import { StudioSidebar } from './Sidebar';

export default function StudioDashboardLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: 'var(--product-background)' }}>
      <StudioSidebar open={open} onClose={() => setOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="md:hidden sticky top-0 z-20 flex items-center h-14 px-4 border-b"
                style={{ backgroundColor: 'var(--product-background)', borderColor: 'var(--product-muted)' }}>
          <button onClick={() => setOpen(true)} className="p-2 mr-3" aria-label="Open menu">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="font-black text-sm" style={{ color: 'var(--product-primary)' }}>Amebo Studio</span>
        </header>
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">{children}</div>
        </main>
      </div>
      {open && <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={() => setOpen(false)} />}
    </div>
  );
}