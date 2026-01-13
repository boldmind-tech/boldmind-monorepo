'use client';

import { MailCheck } from 'lucide-react';
import Link from 'next/link';

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-xl shadow p-8 text-center">
        <MailCheck className="w-14 h-14 text-blue-600 mx-auto mb-4" />

        <h1 className="text-2xl font-bold mb-2">
          Confirm your email
        </h1>

        <p className="text-gray-600 mb-6">
          We’ve sent a confirmation link to your email address.
          Please confirm your email to continue.
        </p>

        <div className="space-y-3">
          <Link
            href="/login"
            className="block w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            I’ve confirmed — Login
          </Link>

          <Link
            href="/resend-confirmation"
            className="block w-full text-sm text-gray-500"
          >
            Didn’t get the email?
          </Link>
        </div>
      </div>
    </div>
  );
}
