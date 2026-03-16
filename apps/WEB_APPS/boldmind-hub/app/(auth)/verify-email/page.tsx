'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle2, Inbox } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function VerifyEmailPage() {
    const searchParams = useSearchParams();
    const email = searchParams.get('email') || 'your email';

    return (
        <div className="w-full max-w-md mx-auto">
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
                    We've sent a confirmation link to <span className="font-bold text-gray-900 dark:text-white">{email}</span>
                </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl shadow-blue-900/5 mb-8">
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Next Steps</h2>

                <div className="space-y-6">
                    <Step
                        icon={<Inbox className="text-blue-500" />}
                        title="Open your inbox"
                        description="Look for an email from BoldMind with the subject 'Confirm your email'."
                    />
                    <Step
                        icon={<CheckCircle2 className="text-green-500" />}
                        title="Click the link"
                        description="Hit the confirmation button in the email to verify your account."
                    />
                    <Step
                        icon={<ArrowRight className="text-purple-500" />}
                        title="Start building"
                        description="You'll be redirected to your dashboard to start your entrepreneurial journey."
                    />
                </div>
            </div>

            <div className="text-center space-y-4">
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                    Didn't receive the email? Check your spam folder or try again.
                </p>

                <div className="flex flex-col gap-3">
                    <Link
                        href="/login"
                        className="w-full py-4 px-6 bg-[#00143C] text-white font-bold rounded-2xl hover:bg-[#00256B] transition-all flex items-center justify-center gap-2"
                    >
                        Back to Login
                    </Link>

                    <button
                        onClick={() => window.location.reload()}
                        className="text-[#00143C] dark:text-[#FFC800] font-bold hover:underline"
                    >
                        Resend Email
                    </button>
                </div>
            </div>
        </div>
    );
}

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
