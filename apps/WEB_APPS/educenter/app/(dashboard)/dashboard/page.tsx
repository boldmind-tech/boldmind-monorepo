'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link';

import { getSession, logout } from '@boldmind/auth';

import {
  School,
  TrendingUp,
  Sparkles,
  LogOut,
  CreditCard,
  BookOpen,
  CheckCircle,
  Lock,
} from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  subscriptions: {
    studyHub: { active: boolean; expiresAt: string | null };
    businessSchool: { active: boolean; expiresAt: string | null };
    aiLab: { active: boolean; expiresAt: string | null };
  };
  stats: {
    studyHub: { questionsAttempted: number; correctAnswers: number };
    businessSchool: { coursesCompleted: number; totalCourses: number };
    aiLab: { toolsUsed: number; projectsCreated: number };
  };
}

export default function DashboardPage() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const session = await getSession();

        if (!session) {
          router.push('/login');
          return;
        }

        const userId = session.user.id;

        const response = await axios.get(`${API_URL}/users/${userId}`);
        setUserData(response.data);
      } catch (err) {
        console.error(err);
        toast.error('Failed to load dashboard');
      } finally {
        setLoading(false);
      }
    }

    init();
  }, [router]);

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
      description: 'JAMB/WAEC/NECO Past Questions',
      link: '/study-hub',
      color: 'from-blue-500 to-cyan-500',
      subscribed: userData?.subscriptions.studyHub.active,
      features: [
        'Practice past questions',
        'CBT simulation',
        'Performance tracking',
        'Study plans',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Business School',
      description: 'Digital Marketing & Sales',
      link: '/business-school',
      color: 'from-purple-500 to-pink-500',
      subscribed: userData?.subscriptions.businessSchool.active,
      features: [
        'Sales funnel templates',
        'WhatsApp automation',
        'Expert masterclasses',
        'Marketing playbooks',
      ],
    },
    {
      icon: Sparkles,
      title: 'AI Skills Lab',
      description: 'Practical AI Tools',
      link: '/ai-lab',
      color: 'from-orange-500 to-red-500',
      subscribed: userData?.subscriptions.aiLab.active,
      features: [
        'AI video generation',
        'Prompt engineering',
        'WhatsApp AI bots',
        'Content creation',
      ],
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!userData) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
          <div className="flex items-center gap-3">
            <School className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold">
                Welcome, {userData.firstName}!
              </h1>
              <p className="text-sm text-gray-500">
                Continue your learning journey
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Link
              href="/subscription"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            >
              <CreditCard className="w-4 h-4" />
              Subscriptions
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Your Learning Paths</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border"
            >
              <div className={`h-28 bg-gradient-to-br ${pillar.color} p-5`}>
                <pillar.icon className="w-10 h-10 text-white" />
                <h3 className="text-white text-lg font-bold mt-2">
                  {pillar.title}
                </h3>
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500 mb-4">
                  {pillar.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {pillar.features.map((f, idx) => (
                    <li key={idx} className="flex text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {f}
                    </li>
                  ))}
                </ul>

                {pillar.subscribed ? (
                  <Link
                    href={pillar.link}
                    className={`block text-center py-2 rounded-lg text-white bg-gradient-to-r ${pillar.color}`}
                  >
                    Continue
                  </Link>
                ) : (
                  <Link
                    href="/subscription"
                    className="block text-center py-2 rounded-lg border"
                  >
                    <Lock className="inline w-4 h-4 mr-1" />
                    Subscribe to Access
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
