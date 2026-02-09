'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';

import { useAuth, logout } from '@boldmind/auth';
import { educenterAPI } from '../../../lib/api';

import {
  School,
  TrendingUp,
  Sparkles,
  LogOut,
  CreditCard,
  CheckCircle,
  Lock,
  Trophy,
  BookOpen,
  ArrowRight,
  Flame,
  LayoutDashboard,
  Timer,
  ChevronRight,
} from 'lucide-react';

interface UserProgress {
  questionsAttempted: number;
  correctAnswers: number;
  accuracy?: number;
}

interface Subscription {
  active: boolean;
  plan?: string;
  expiresAt?: string;
}

interface UserData {
  progress?: UserProgress;
  subscription?: Subscription;
}

interface TrendingQuestion {
  id: string;
  question: string;
  subject: string;
  examtype: string;
  examyear: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const { user, isLoading: authLoading } = useAuth();
  const [userData, setUserData] = useState<UserData>({});
  const [trendingQuestions, setTrendingQuestions] = useState<TrendingQuestion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only redirect if auth check is complete and no user found
    if (!authLoading && !user) {
      router.push('/login');
      return;
    }

    if (user) {
      loadDashboardData();
    }
  }, [user, authLoading, router]);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      // Load user progress and subscription in parallel
      const [progressResponse, subscriptionResponse, trendingResponse] = await Promise.all([
        educenterAPI.getProgress(),
        educenterAPI.getMySubscription(),
        educenterAPI.getTopQuestions(3)
      ]);

      setUserData({
        progress: progressResponse.data,
        subscription: subscriptionResponse.data,
      });

      if (trendingResponse.data) {
        setTrendingQuestions(trendingResponse.data);
      }
    } catch (err) {
      console.error('Error loading user data:', err);
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
      router.push('/');
    } catch {
      toast.error('Logout failed');
    }
  };

  const pillars = [
    {
      icon: School,
      title: 'Study Hub',
      description: 'Master JAMB, WAEC & NECO with thousands of past questions and CBT simulations.',
      link: '/study-hub',
      color: 'blue',
      gradient: 'from-blue-600 to-indigo-600',
      shadow: 'shadow-blue-200 dark:shadow-blue-900/20',
      subscribed: userData?.subscription?.active,
      features: ['20k+ Past Questions', 'Real CBT Mode', 'Performance Analytics'],
    },
    {
      icon: TrendingUp,
      title: 'Business School',
      description: 'Launch your digital career with practical marketing and business strategies.',
      link: '/business-school',
      color: 'purple',
      gradient: 'from-purple-600 to-pink-600',
      shadow: 'shadow-purple-200 dark:shadow-purple-900/20',
      subscribed: userData?.subscription?.active && userData.subscription.plan?.toLowerCase() === 'pro',
      features: ['Sales Automation', 'Digital Marketing', 'Wealth Creation'],
    },
    {
      icon: Sparkles,
      title: 'AI Skills Lab',
      description: 'Harness the power of Artificial Intelligence to boost your productivity.',
      link: '/ai-lab',
      color: 'orange',
      gradient: 'from-orange-500 to-red-600',
      shadow: 'shadow-orange-200 dark:shadow-orange-900/20',
      subscribed: userData?.subscription?.active && userData.subscription.plan?.toLowerCase() === 'pro',
      features: ['AI Video Magic', 'Prompt Engineering', 'AI Coding Tools'],
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] dark:bg-[#0f172a]">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
          <School className="w-6 h-6 text-blue-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] pb-12 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg shadow-blue-500/20">
              <School className="w-6 h-6" />
            </div>
            <span className="text-xl font-black tracking-tight text-gray-900 dark:text-white">
              EDU<span className="text-blue-600">CENTER</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/subscription"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all border border-transparent hover:border-gray-300 dark:hover:border-gray-600"
            >
              <CreditCard className="w-4 h-4" />
              Upgrade
            </Link>

            <button
              onClick={handleLogout}
              className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>

            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              {user?.firstName?.[0] || 'U'}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-8 relative z-10">
        {/* Welcome Section */}
        <section className="mb-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2 leading-tight">
            Hi, {user?.firstName || 'Learner'}! 👋
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl font-medium">
            Your daily goal is 80% complete. Ready to master your subjects today?
          </p>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Areas */}
          <div className="lg:col-span-2 space-y-8">

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-slide-in">
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-2xl w-fit mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Attempted</p>
                <p className="text-4xl font-black text-gray-900 dark:text-white mt-1">
                  {userData.progress?.questionsAttempted || 0}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-2xl w-fit mb-4">
                  <Trophy className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Correct</p>
                <p className="text-4xl font-black text-gray-900 dark:text-white mt-1">
                  {userData.progress?.correctAnswers || 0}
                </p>
              </div>

              <div className="col-span-2 md:col-span-1 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden relative group">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-2xl w-fit mb-4">
                  <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Accuracy</p>
                <p className="text-4xl font-black text-gray-900 dark:text-white mt-1">
                  {userData.progress?.accuracy
                    ? `${userData.progress.accuracy.toFixed(1)}%`
                    : userData.progress?.questionsAttempted
                      ? `${((userData.progress.correctAnswers / userData.progress.questionsAttempted) * 100).toFixed(1)}%`
                      : '0%'
                  }
                </p>
                {/* Sparkle background element */}
                <Sparkles className="absolute -bottom-4 -right-4 w-24 h-24 text-purple-500/10 rotate-12 group-hover:scale-125 transition-transform" />
              </div>
            </div>

            {/* Learning Paths */}
            <section className="space-y-6">
              <div className="flex justify-between items-end">
                <h2 className="text-2xl font-black text-gray-900 dark:text-white">Your Learning Paths</h2>
                <Link href="/paths" className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                  View All Paths <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pillars.map((pillar, i) => (
                  <div key={i} className={`group bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-[2rem] border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl ${pillar.shadow} transition-all duration-500`}>
                    <div className={`p-8 bg-gradient-to-br ${pillar.gradient} relative overflow-hidden`}>
                      <pillar.icon className="w-12 h-12 text-white/90 relative z-10" />
                      <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/20 blur-3xl rounded-full" />
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 font-medium mb-6 leading-relaxed">
                        {pillar.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {pillar.features.map((f, idx) => (
                          <div key={idx} className="flex items-center text-sm font-bold text-gray-700 dark:text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                            {f}
                          </div>
                        ))}
                      </div>

                      {pillar.subscribed || pillar.title === 'Study Hub' ? (
                        <Link
                          href={pillar.link}
                          className={`flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black hover:scale-[1.02] active:scale-95 transition-all shadow-lg`}
                        >
                          Continue
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      ) : (
                        <Link
                          href="/subscription"
                          className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 text-gray-500 font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all group"
                        >
                          <Lock className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                          Unlock with Pro
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 animate-fade-in delay-300">
            {/* Daily Streak Card */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-[2.5rem] p-8 text-white shadow-xl shadow-orange-500/20 relative overflow-hidden">
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <p className="text-orange-100 font-black text-sm uppercase tracking-widest mb-1">Current Streak</p>
                  <p className="text-5xl font-black">5 Days</p>
                </div>
                <Flame className="w-12 h-12 text-orange-200 animate-pulse" />
              </div>
              <div className="mt-8 flex gap-2 relative z-10">
                {[1, 2, 3, 4, 5, 6, 7].map(d => (
                  <div key={d} className={`h-2 flex-1 rounded-full ${d <= 5 ? 'bg-white' : 'bg-white/30'}`} />
                ))}
              </div>
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 blur-[60px] rounded-full" />
            </div>

            {/* Trending Questions */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-[2.5rem] p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <LayoutDashboard className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-black text-gray-900 dark:text-white">Now Trending</h3>
              </div>

              <div className="space-y-4">
                {trendingQuestions.map((q, idx) => (
                  <Link
                    key={q.id}
                    href={`/study-hub/practice/${q.subject.toLowerCase()}?questionId=${q.id}`}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-800 group"
                  >
                    <div className="bg-blue-100 dark:bg-blue-900/30 w-10 h-10 rounded-xl flex items-center justify-center font-black text-blue-600 dark:text-blue-400 shrink-0">
                      {idx + 1}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {q.question.replace(/<[^>]*>?/gm, '').substring(0, 80)}...
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-tighter bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-md">
                          {q.subject}
                        </span>
                        <span className="text-[10px] font-bold text-gray-400">
                          {q.examtype} {q.examyear}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}

                <button className="w-full py-4 text-sm font-black text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors">
                  Refresh Feed
                </button>
              </div>
            </div>

            {/* Study Timer Card (Simplified Mock) */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-[2.5rem] p-8 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col items-center text-center">
              <Timer className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2">Focus Mode</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-6">Start a 25-minute study session to boost concentration.</p>
              <button className="px-8 py-3 rounded-2xl bg-blue-600 text-white font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
                Start Timer
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
