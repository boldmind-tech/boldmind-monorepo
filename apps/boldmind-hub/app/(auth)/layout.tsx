// ─────────────────────────────────────────────────────────────────────────────
// apps/boldmind-hub/app/(auth)/layout.tsx  [Client Component]
// ─────────────────────────────────────────────────────────────────────────────
// Auth shell for /login and /register pages.
// - Clean, minimal layout (no navbar, no footer)
// - Handles ?return_url= param so after login hub redirects user back
// - Shows BoldMind branding + ecosystem products in split layout
// ─────────────────────────────────────────────────────────────────────────────

'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@boldmind/auth';
// import { storeToken } from '@boldmind/auth';
import { motion } from 'framer-motion';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get('return_url');

  // If already logged in, redirect to return_url or dashboard
  useEffect(() => {
    if (!isLoading && user) {
      const destination = returnUrl ?? '/dashboard';
      // Validate return_url to prevent open redirect
      if (returnUrl && !isSafeBoldMindUrl(returnUrl)) {
        router.replace('/dashboard');
      } else {
        router.replace(destination);
      }
    }
  }, [user, isLoading, router, returnUrl]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center"
           style={{ backgroundColor: 'var(--product-background)' }}>
        <div className="w-8 h-8 rounded-full border-2 border-t-[var(--product-primary)] border-[var(--product-muted)] animate-spin"
             style={{ borderTopColor: 'var(--product-primary)', borderColor: 'var(--product-muted)' }} />
      </div>
    );
  }

  // Don't render if already logged in (redirect is happening)
  if (user) return null;

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: 'var(--product-background)' }}>

      {/* ── Left panel — branding (hidden on mobile) ─────────────────────── */}
      <div
        className="hidden lg:flex lg:flex-col lg:w-[480px] lg:flex-shrink-0 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--product-primary) 0%, color-mix(in srgb, var(--product-primary) 75%, black) 100%)',
        }}
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 40%)`,
          }}
        />

        <div className="relative z-10 flex flex-col h-full p-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 mb-16 no-underline">
            <div className="relative w-10 h-10">
              <Image src="/logo.webp" alt="BoldMind" fill className="object-contain" />
            </div>
            <span className="text-white font-black text-xl tracking-tight">BoldMind</span>
          </Link>

          {/* Hero copy */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-black text-white leading-tight mb-6"
            >
              One account.
              <br />
              <span style={{ color: 'var(--product-secondary)' }}>
                32+ products.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70 leading-relaxed mb-10"
            >
              Sign in once, access every BoldMind product — AmeboGist, EduCenter,
              PlanAI Suite, BoldMind OS and more.
            </motion.p>

            {/* Ecosystem pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {ECOSYSTEM_PRODUCTS.map((p) => (
                <span
                  key={p.slug}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.85)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  <span>{p.icon}</span>
                  {p.name}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Footer */}
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} BoldMind Technology Solution Enterprise
          </p>
        </div>
      </div>

      {/* ── Right panel — auth form ──────────────────────────────────────── */}
      <div className="flex-1 flex flex-col">
        {/* Mobile logo */}
        <div className="lg:hidden p-6 border-b" style={{ borderColor: 'var(--product-muted)' }}>
          <Link href="/" className="flex items-center gap-2 no-underline">
            <div className="relative w-8 h-8">
              <Image src="/logo.webp" alt="BoldMind" fill className="object-contain" />
            </div>
            <span className="font-black text-base" style={{ color: 'var(--product-primary)' }}>
              BoldMind
            </span>
          </Link>
        </div>

        {/* Form area — centred */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            {/* Show return context if present */}
            {returnUrl && (
              <div
                className="mb-6 px-4 py-3 rounded-xl text-sm"
                style={{
                  backgroundColor: 'var(--product-highlight)',
                  color: 'var(--product-primary)',
                  border: '1px solid var(--product-primary)',
                }}
              >
                <strong>Sign in</strong> to continue to{' '}
                <span className="font-bold">{getAppNameFromUrl(returnUrl)}</span>
              </div>
            )}

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const BOLDMIND_DOMAINS = [
  'boldmind.ng', 'amebogist.ng', 'educenter.com.ng',
  'localhost', '127.0.0.1',
];

function isSafeBoldMindUrl(url: string): boolean {
  try {
    const { hostname } = new URL(url);
    return BOLDMIND_DOMAINS.some(
      (d) => hostname === d || hostname.endsWith(`.${d}`),
    );
  } catch {
    return false;
  }
}

function getAppNameFromUrl(url: string): string {
  try {
    const { hostname } = new URL(url);
    if (hostname.includes('amebogist'))  return 'AmeboGist';
    if (hostname.includes('educenter'))  return 'EduCenter';
    if (hostname.includes('planai'))     return 'PlanAI Suite';
    if (hostname.includes('fit'))        return 'NaijaFit';
    if (hostname.includes('os.'))        return 'BoldMind OS';
    if (hostname.includes('studio'))     return 'Amebo Studio';
    if (hostname.includes('tools'))      return 'BoldMind Tools';
    if (hostname.includes('skills'))     return 'SkillGig';
    return 'BoldMind';
  } catch {
    return 'BoldMind';
  }
}

const ECOSYSTEM_PRODUCTS = [
  { slug: 'amebogist',  name: 'AmeboGist',   icon: '📰' },
  { slug: 'educenter',  name: 'EduCenter',   icon: '🎓' },
  { slug: 'planai',     name: 'PlanAI',      icon: '🧠' },
  { slug: 'fit',        name: 'NaijaFit',    icon: '💪' },
  { slug: 'os',         name: 'BoldMind OS', icon: '🖥️' },
  { slug: 'studio',     name: 'Studio',      icon: '✍️' },
];