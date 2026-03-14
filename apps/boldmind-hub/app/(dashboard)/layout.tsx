// ─────────────────────────────────────────────────────────────────────────────
// apps/boldmind-hub/app/(dashboard)/layout.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Dashboard shell: sidebar + topbar + content area.
// Uses CSS variables throughout — no hardcoded colors.
// Auth guard via middleware (not repeated here).
// ─────────────────────────────────────────────────────────────────────────────

'use client';

import { ReactNode, useState } from 'react';
import { DashboardSidebar } from './Sidebar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="flex min-h-screen"
      style={{ backgroundColor: 'var(--product-background)', color: 'var(--product-foreground)' }}
    >
      {/* Sidebar */}
      <DashboardSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar — mobile only */}
        <header
          className="md:hidden flex items-center justify-between h-14 px-4 border-b"
          style={{
            backgroundColor: 'var(--product-background)',
            borderColor: 'var(--product-muted)',
          }}
        >
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-[var(--product-muted)] transition-colors"
            aria-label="Open sidebar"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="font-bold text-sm" style={{ color: 'var(--product-primary)' }}>
            BoldMind Hub
          </span>
          <div className="w-9" /> {/* spacer */}
        </header>

        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}