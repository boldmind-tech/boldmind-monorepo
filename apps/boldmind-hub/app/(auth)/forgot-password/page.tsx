'use client';

/**
 * BoldMind Hub — Reset Password Page
 * File: apps/boldmind-hub/app/(auth)/forgot-password/page.tsx
 *
 * Wired to useForgotPassword hook → POST /auth/forgot-password.
 * Replaced useAuth().resetPassword (Supabase-style) with the NestJS API hook.
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';
import { useForgotPassword } from '../../../lib/hooks';

export default function ResetPasswordPage() {
  const [email,     setEmail]     = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const forgotMutation = useForgotPassword();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const result = await forgotMutation.execute(email.trim());

    // execute() returns null on error (error is stored in mutation.error)
    if (forgotMutation.error) {
      toast.error(forgotMutation.error.message || 'Failed to send reset email');
    } else {
      setEmailSent(true);
      toast.success('Password reset email sent!');
    }
  };

  // ── Success state ─────────────────────────────────────────────────────────
  if (emailSent) {
    return (
      <div className="w-full max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Check Your Email
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            We've sent a password reset link to{' '}
            <strong className="text-gray-900 dark:text-white">{email}</strong>.
            Click the link in the email to reset your password.
          </p>

          <div className="space-y-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Didn't receive the email? Check your spam folder or{' '}
              <button
                onClick={() => { setEmailSent(false); forgotMutation.reset(); }}
                className="text-[#00143C] dark:text-[#FFC800] hover:underline font-medium"
              >
                try again
              </button>
            </p>

            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#00143C] dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // ── Form state ────────────────────────────────────────────────────────────
  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Reset Your Password
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Enter your email and we'll send you a link to reset your password
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); forgotMutation.reset(); }}
                required
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#00143C] dark:focus:ring-[#FFC800] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all"
              />
            </div>
          </div>

          {/* API error */}
          {forgotMutation.error && (
            <p className="text-sm text-red-600 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl px-4 py-3">
              {forgotMutation.error.message}
            </p>
          )}

          <button
            type="submit"
            disabled={forgotMutation.loading}
            className="w-full bg-[#00143C] hover:bg-[#00143C]/90 dark:bg-[#FFC800] dark:hover:bg-[#FFC800]/90 text-white dark:text-[#00143C] py-3 rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {forgotMutation.loading && (
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            )}
            {forgotMutation.loading ? 'Sending…' : 'Send Reset Link'}
          </button>
        </form>

        {/* Back to login */}
        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#00143C] dark:hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}