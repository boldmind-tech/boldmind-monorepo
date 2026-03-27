'use client';

/**
 * BoldMind Hub — Register Page
 * File: apps/boldmind-hub/app/(auth)/register/page.tsx
 *
 * Wired to useRegister hook. Replaces direct useAuth().signUp call so the
 * page uses the same typed authAPI path as the login page.
 * Social signup still goes through useAuth().signInWithOAuth (OAuth redirect —
 * no JSON API call needed).
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Link from 'next/link';
import { useAuth } from '@boldmind/auth';
import { useRegister } from '../../../lib/hooks';

// ─── Password strength ────────────────────────────────────────────────────────

function getPasswordStrength(password: string) {
  let strength = 0;
  if (password.length >= 8)          strength++;
  if (/[A-Z]/.test(password))        strength++;
  if (/[a-z]/.test(password))        strength++;
  if (/[0-9]/.test(password))        strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;
  return {
    score: strength,
    label:
      strength === 0 ? '' :
      strength <= 2  ? 'Weak' :
      strength <= 3  ? 'Fair' :
      strength <= 4  ? 'Good' : 'Strong',
    color:
      strength === 0 ? 'bg-gray-200'  :
      strength <= 2  ? 'bg-red-500'   :
      strength <= 3  ? 'bg-yellow-500':
      strength <= 4  ? 'bg-blue-500'  : 'bg-green-500',
  };
}

// ─── Eye icons ────────────────────────────────────────────────────────────────

function EyeOff() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
  );
}
function EyeOn() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RegisterPage() {
  const router = useRouter();
  const { loginWithGoogle, isLoading: authLoading } = useAuth();
  const registerMutation = useRegister();

  const [formData, setFormData] = useState({
    fullName:           '',
    email:              '',
    password:           '',
    confirmPassword:    '',
    agreeTerms:         false,
    subscribeNewsletter: true,
  });
  const [showPassword,        setShowPassword]        = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors,              setErrors]              = useState<Record<string, string>>({});

  const passwordStrength = getPasswordStrength(formData.password);

  // ── Handlers ────────────────────────────────────────────────────────────

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    // Clear API error on any field change
    registerMutation.reset();
  };

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    if (!formData.fullName.trim())                    next['fullName']        = 'Full name is required';
    if (!formData.email.trim())                       next['email']           = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))   next['email']           = 'Please enter a valid email';
    if (!formData.password)                           next['password']        = 'Password is required';
    else if (formData.password.length < 8)            next['password']        = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) next['confirmPassword'] = 'Passwords do not match';
    if (!formData.agreeTerms)                         next['agreeTerms']      = 'You must agree to the terms';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Split fullName → firstName / lastName for the API payload
    const [firstName, ...rest] = formData.fullName.trim().split(' ');
    const lastName = rest.join(' ') || undefined;

    const result = await registerMutation.execute({
      email:    formData.email,
      password: formData.password,
      firstName,
      lastName,
    });

    if (result) {
      toast.success('Account created! Please check your email.');
      router.push(`/verify-email?email=${encodeURIComponent(formData.email)}`);
    } else if (registerMutation.error) {
      toast.error(registerMutation.error.message || 'Something went wrong.');
    }
  };

  const handleSocialSignup = async (provider: 'google' | 'github' | 'twitter' | 'facebook') => {
    try {
      if (provider === 'google') {
        loginWithGoogle();
      } else {
        toast.error(`${provider} signup is not yet supported`);
      }
    } catch (error: any) {
      toast.error(error.message || `Failed to connect with ${provider}`);
    }
  };

  const isLoading = registerMutation.loading || authLoading;

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-white mb-2 leading-tight">Create Account</h1>
        <p className="text-gray-400 text-sm">Join 10,000+ Nigerian entrepreneurs</p>
      </div>

      {/* Google */}
      <motion.button
        onClick={() => handleSocialSignup('google')}
        disabled={isLoading}
        whileHover={{ scale: isLoading ? 1 : 1.01 }}
        whileTap={{ scale: isLoading ? 1 : 0.99 }}
        className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl font-medium transition-all bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 disabled:opacity-70 disabled:cursor-not-allowed mb-6"
      >
        <GoogleSVG />
        Continue with Google
      </motion.button>

      {/* Divider */}
      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        <span className="text-gray-500 text-sm font-medium">or</span>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Full Name */}
        <Field label="Full Name" id="fullName" name="fullName" type="text"
          value={formData.fullName} onChange={handleChange}
          placeholder="Charles Okonkwo" error={errors['fullName']} />

        {/* Email */}
        <Field label="Email Address" id="email" name="email" type="email"
          value={formData.email} onChange={handleChange}
          placeholder="you@example.com" error={errors['email']} />

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            Password
          </label>
          <div className="relative">
            <input id="password" name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password} onChange={handleChange}
              placeholder="Create a strong password"
              className={inputCls(!!errors['password'])} />
            <ToggleEye show={showPassword} onToggle={() => setShowPassword(v => !v)} />
          </div>
          {formData.password && (
            <div className="mt-2">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(bar => (
                  <div key={bar}
                    className={`h-1 flex-1 rounded-full transition-colors ${bar <= passwordStrength.score ? passwordStrength.color : 'bg-gray-200'}`}
                  />
                ))}
              </div>
              <p className={`text-xs mt-1 ${
                passwordStrength.score <= 2 ? 'text-red-500' :
                passwordStrength.score <= 3 ? 'text-yellow-600' : 'text-green-600'
              }`}>
                {passwordStrength.label}
              </p>
            </div>
          )}
          {errors['password'] && <p className="text-red-500 text-sm mt-1">{errors['password']}</p>}
        </div>

        {/* Confirm password */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            Confirm Password
          </label>
          <div className="relative">
            <input id="confirmPassword" name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword} onChange={handleChange}
              placeholder="Confirm your password"
              className={inputCls(!!errors['confirmPassword'])} />
            <ToggleEye show={showConfirmPassword} onToggle={() => setShowConfirmPassword(v => !v)} />
          </div>
          {errors['confirmPassword'] && (
            <p className="text-red-500 text-sm mt-1">{errors['confirmPassword']}</p>
          )}
        </div>

        {/* Checkboxes */}
        <div className="space-y-3">
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange}
              className="w-4 h-4 mt-0.5 rounded border-gray-300 text-[#FFC800] focus:ring-[#FFC800]" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              I agree to the{' '}
              <Link href="/terms" className="text-[#00143C] dark:text-[#FFC800] font-medium hover:underline">Terms of Service</Link>
              {' '}and{' '}
              <Link href="/privacy" className="text-[#00143C] dark:text-[#FFC800] font-medium hover:underline">Privacy Policy</Link>
            </span>
          </label>
          {errors['agreeTerms'] && <p className="text-red-500 text-sm -mt-1">{errors['agreeTerms']}</p>}

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" name="subscribeNewsletter" checked={formData.subscribeNewsletter} onChange={handleChange}
              className="w-4 h-4 rounded border-gray-300 text-[#FFC800] focus:ring-[#FFC800]" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Send me tips and product updates via email
            </span>
          </label>
        </div>

        {/* API error */}
        {registerMutation.error && (
          <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            {registerMutation.error.message}
          </p>
        )}

        {/* Submit */}
        <motion.button type="submit" disabled={isLoading}
          whileHover={{ scale: isLoading ? 1 : 1.01 }}
          whileTap={{ scale: isLoading ? 1 : 0.99 }}
          className="w-full py-3.5 px-6 bg-gradient-to-r from-[#00143C] to-[#2A4A6E] hover:from-[#001F5C] hover:to-[#3A5A8E] text-white font-bold rounded-xl shadow-lg shadow-[#00143C]/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Creating your account…
            </>
          ) : 'Create Account'}
        </motion.button>
      </form>

      {/* Sign-in link */}
      <p className="text-center mt-6 text-gray-600 dark:text-gray-400 text-sm">
        Already have an account?{' '}
        <Link href="/login" className="font-bold text-[#00143C] dark:text-[#FFC800] hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}

// ─── Small helpers ────────────────────────────────────────────────────────────

const inputCls = (hasError: boolean) =>
  `w-full px-4 py-3 rounded-xl border-2 ${
    hasError ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
  } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-[#FFC800] focus:ring-2 focus:ring-[#FFC800]/20 outline-none transition-all`;

function Field({
  label, id, name, type, value, onChange, placeholder, error,
}: {
  label: string; id: string; name: string; type: string;
  value: string; onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string; error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
        {label}
      </label>
      <input id={id} name={name} type={type} value={value} onChange={onChange}
        placeholder={placeholder} className={inputCls(!!error)} />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

function ToggleEye({ show, onToggle }: { show: boolean; onToggle: () => void }) {
  return (
    <button type="button" onClick={onToggle}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
      {show ? <EyeOff /> : <EyeOn />}
    </button>
  );
}

function GoogleSVG() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}