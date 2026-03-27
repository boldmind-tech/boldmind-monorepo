'use client';

/**
 * BoldMind Hub — Change Password Page
 * File: apps/boldmind-hub/app/(auth)/change-password/page.tsx
 *
 * Wired to useResetPassword hook → POST /auth/reset-password.
 * Replaced useAuth().updatePassword (Supabase-style) with the NestJS endpoint
 * that accepts { token, password }.
 * Token is read from ?token= query param set by the reset email link.
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import Link from 'next/link';
import { useResetPassword } from '../../../lib/hooks';

// ─── Password rules ───────────────────────────────────────────────────────────

function validatePassword(pwd: string): string | null {
  if (pwd.length < 8)          return 'Password must be at least 8 characters';
  if (!/[A-Z]/.test(pwd))      return 'Must contain at least one uppercase letter';
  if (!/[a-z]/.test(pwd))      return 'Must contain at least one lowercase letter';
  if (!/[0-9]/.test(pwd))      return 'Must contain at least one number';
  return null;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ChangePasswordPage() {
  const router       = useRouter();
  const searchParams = useSearchParams();
  const token        = searchParams.get('token') ?? '';

  const [password,        setPassword]        = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword,        setShowPassword]        = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fieldError, setFieldError] = useState('');
  const [success,    setSuccess]    = useState(false);

  const resetMutation = useResetPassword();

  // Warn immediately if token is missing (broken link)
  useEffect(() => {
    if (!token) setFieldError('Invalid or missing reset token. Please request a new link.');
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldError('');
    resetMutation.reset();

    const pwdError = validatePassword(password);
    if (pwdError) { setFieldError(pwdError); return; }
    if (password !== confirmPassword) { setFieldError('Passwords do not match'); return; }
    if (!token) { setFieldError('Missing reset token'); return; }

    await resetMutation.execute(token, password);

    if (resetMutation.error) {
      toast.error(resetMutation.error.message || 'Failed to change password');
    } else {
      setSuccess(true);
      toast.success('Password changed successfully!');
      setTimeout(() => router.push('/login'), 2000);
    }
  };

  // ── Success ───────────────────────────────────────────────────────────────
  if (success) {
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Password Changed!</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Your password has been successfully updated. You can now log in with your new password.
          </p>
          <p className="text-sm text-gray-400">Redirecting to login…</p>
        </motion.div>
      </div>
    );
  }

  const error = fieldError || resetMutation.error?.message || '';

  // ── Form ──────────────────────────────────────────────────────────────────
  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Change Your Password</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Enter your new password below</p>
        </div>

        {/* Error alert */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* New password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              New Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => { setPassword(e.target.value); setFieldError(''); resetMutation.reset(); }}
                required
                placeholder="Enter new password"
                className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#00143C] dark:focus:ring-[#FFC800] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all"
              />
              <button type="button" onClick={() => setShowPassword(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            <p className="mt-1.5 text-xs text-gray-400">
              Min 8 characters with uppercase, lowercase, and a number
            </p>
          </div>

          {/* Confirm password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={e => { setConfirmPassword(e.target.value); setFieldError(''); }}
                required
                placeholder="Confirm new password"
                className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#00143C] dark:focus:ring-[#FFC800] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all"
              />
              <button type="button" onClick={() => setShowConfirmPassword(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={resetMutation.loading || !token}
            className="w-full bg-[#00143C] hover:bg-[#00143C]/90 dark:bg-[#FFC800] dark:hover:bg-[#FFC800]/90 text-white dark:text-[#00143C] py-3 rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {resetMutation.loading && (
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            )}
            {resetMutation.loading ? 'Changing Password…' : 'Change Password'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/login" className="text-gray-500 dark:text-gray-400 hover:text-[#00143C] dark:hover:text-white transition-colors text-sm">
            Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}