'use client';

/**
 * BoldMind Hub — Verify Email Page
 * File: apps/boldmind-hub/app/(auth)/verify-email/page.tsx
 *
 * Wired to:
 *   POST /auth/verify-email  → verify the 6-digit code
 *   POST /auth/resend-verification → resend the code
 *
 * Replaced useAuth().verifyEmailCode / resendVerification (Supabase-style)
 * with direct calls to the NestJS authAPI. These endpoints are not yet in
 * lib/api.ts so they are added here as lightweight inline fetchers with the
 * same credential + error pattern as the rest of the codebase.
 *
 * TODO: add verifyEmail / resendVerification to authAPI in lib/api.ts when
 * the endpoints are confirmed in your NestJS server startup log.
 */

import { motion } from 'framer-motion';
import { Mail, ArrowRight, Inbox, Loader2, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';

// ─── API helpers ──────────────────────────────────────────────────────────────

const BASE = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') ?? 'http://localhost:4000/api/v1';

async function apiPost<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    method:      'POST',
    credentials: 'include',
    headers:     { 'Content-Type': 'application/json', Accept: 'application/json' },
    body:        JSON.stringify(body),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.message ?? `Request failed: ${res.status}`);
  }
  if (res.status === 204) return undefined as unknown as T;
  return res.json();
}

// ─── Step component ───────────────────────────────────────────────────────────

function Step({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-gray-900 dark:text-white text-base">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// ─── Resend cooldown ──────────────────────────────────────────────────────────

function useResendCooldown(seconds = 60) {
  const [remaining, setRemaining] = useState(0);
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    setRemaining(seconds);
    ref.current = setInterval(() => {
      setRemaining(r => {
        if (r <= 1) { clearInterval(ref.current!); return 0; }
        return r - 1;
      });
    }, 1000);
  };

  useEffect(() => () => { if (ref.current) clearInterval(ref.current); }, []);

  return { remaining, start, canResend: remaining === 0 };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const router       = useRouter();

  const email = searchParams.get('email') ?? '';

  const [code,        setCode]        = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [verifyError, setVerifyError] = useState('');

  const cooldown = useResendCooldown(60);

  // ── Verify ───────────────────────────────────────────────────────────────
  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setVerifyError('');

    if (!email) {
      toast.error('Email is missing. Please register again.');
      return;
    }
    if (code.length < 6) {
      setVerifyError('Please enter the full 6-digit code');
      return;
    }

    setIsVerifying(true);
    try {
      await apiPost('/auth/verify-email', { email, code });
      toast.success('Email verified successfully!');
      router.push('/dashboard');
    } catch (err: any) {
      setVerifyError(err.message || 'Verification failed. Check the code and try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  // ── Resend ───────────────────────────────────────────────────────────────
  const handleResend = async () => {
    if (!email) { toast.error('Email is missing.'); return; }
    if (!cooldown.canResend) return;

    setIsResending(true);
    try {
      await apiPost('/auth/resend-verification', { email });
      toast.success('Verification email sent!');
      cooldown.start();
    } catch (err: any) {
      toast.error(err.message || 'Failed to resend email');
    } finally {
      setIsResending(false);
    }
  };

  // Auto-submit when 6 digits entered
  useEffect(() => {
    if (code.length === 6) {
      handleVerify(new Event('submit') as any);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Icon */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6"
        >
          <Mail size={40} />
        </motion.div>

        <h1 className="text-3xl font-black text-[#00143C] dark:text-white mb-3">
          Check Your Email
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          We sent a verification code to{' '}
          <span className="font-bold text-gray-900 dark:text-white">
            {email || 'your email'}
          </span>
        </p>
      </div>

      {/* Card */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl shadow-blue-900/5 mb-8">
        <form onSubmit={handleVerify}>
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
            Verification Code
          </label>

          {/* Single 6-digit input */}
          <input
            type="text"
            inputMode="numeric"
            maxLength={6}
            value={code}
            onChange={e => {
              setVerifyError('');
              setCode(e.target.value.replace(/\D/g, ''));
            }}
            placeholder="123456"
            className="w-full mb-2 py-4 px-6 bg-gray-50 dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-2xl text-center text-2xl font-black tracking-[0.5em] focus:border-[#00143C] dark:focus:border-[#FFC800] outline-none transition-all placeholder:tracking-normal placeholder:font-normal placeholder:text-gray-300"
          />

          {verifyError && (
            <p className="text-red-500 text-sm mb-4 text-center">{verifyError}</p>
          )}

          <button
            type="submit"
            disabled={isVerifying || code.length < 6}
            className="w-full py-4 px-6 bg-[#00143C] text-white font-bold rounded-2xl hover:bg-[#00256B] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 mt-2"
          >
            {isVerifying
              ? <><Loader2 size={20} className="animate-spin" /> Verifying…</>
              : 'Verify Account'
            }
          </button>
        </form>

        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-6 mb-5">
          Alternatively
        </p>

        <div className="space-y-5">
          <Step
            icon={<Inbox className="text-blue-500" size={18} />}
            title="Click the magic link"
            description="You can also click the button in the email to verify instantly."
          />
          <Step
            icon={<ArrowRight className="text-purple-500" size={18} />}
            title="Start building"
            description="Once verified, you'll be redirected to your dashboard automatically."
          />
        </div>
      </div>

      {/* Footer actions */}
      <div className="text-center space-y-4">
        <p className="text-gray-500 dark:text-gray-500 text-sm">
          Didn't receive the email? Check your spam folder or try again.
        </p>

        <div className="flex flex-col items-center gap-3">
          <button
            onClick={handleResend}
            disabled={isResending || !cooldown.canResend}
            className="flex items-center gap-2 text-[#00143C] dark:text-[#FFC800] font-bold hover:underline disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            {isResending
              ? <><Loader2 size={14} className="animate-spin" /> Sending…</>
              : cooldown.remaining > 0
                ? <><RefreshCw size={14} /> Resend in {cooldown.remaining}s</>
                : 'Resend Verification Email'
            }
          </button>

          <Link href="/login" className="text-gray-500 dark:text-gray-400 text-sm hover:underline transition-colors">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}