// app/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard, Users, Target, TrendingUp,
    Zap, DollarSign, BookOpen, Settings, BarChart3
} from 'lucide-react';
import { SuperNavbar } from '@boldmind/ui';
import { userAPIAdapter } from '../../../lib/user-api-adapter';
import { DashboardSidebar } from '../Sidebar';
import { IdentitySection } from '../components/IdentitySection';
import { CommunityFeed } from '../components/CommunityFeed';
import { FlywheelMetrics } from '../components/FlywheelMetrics';
import { BusinessDiscovery } from '../components/BusinessDiscovery';
import { User } from '@boldmind/utils';

export default function Dashboard() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            setLoading(true);
            const userData = await userAPIAdapter.getMe();
            // Cast through unknown to bypass strict type incompatibility with @boldmind/auth User
            setUser(userData as unknown as User);
        } catch (error) {
            console.error('Failed to load dashboard data:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50/40 dark:bg-gray-950">
                <div className="w-16 h-16 border-4 border-[#FFC800] border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    const userRole = user?.ecosystemRole || user?.role || 'founder';

    return (
        <div className="flex min-h-screen bg-gray-50/40 dark:bg-gray-950">
            <DashboardSidebar active="dashboard" />

            <div className="flex-1 flex flex-col">
                <SuperNavbar
                    logoSrc="/logo.png"
                    links={[
                        { href: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
                        { href: '/dashboard/revenue', label: 'Revenue', icon: <TrendingUp size={18} /> },
                        { href: '/dashboard/team', label: 'Team', icon: <Users size={18} /> },
                        { href: '/dashboard/roadmap', label: 'Target', icon: <Target size={18} /> },
                    ]}
                />

                <main className="flex-1 p-6 lg:p-10 overflow-auto">
                    <div className="max-w-7xl mx-auto space-y-12">

                        {/* Layer 1: Identity + Status */}
                        <IdentitySection user={user} />

                        {/* Layer 2: Ecosystem Layout (Feed + Role Emphasis) */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Role Emphasis Area */}
                            <div className="lg:col-span-8 space-y-8">
                                <RoleEmphasis userRole={userRole} />

                                {/* Layer 3: Flywheel Metrics */}
                                <FlywheelMetrics />
                            </div>

                            {/* Live Feed Sidebar */}
                            <div className="lg:col-span-4 h-full">
                                <CommunityFeed />
                            </div>
                        </div>

                        {/* Layer 4: Business Discovery */}
                        <BusinessDiscovery />

                    </div>
                </main>
            </div>
        </div>
    );
}

/**
 * Dynamic module based on user role "Emphasis"
 */
function RoleEmphasis({ userRole }: { userRole: string }) {
    const emphasisMap: Record<string, { title: string; subtitle: string; icon: any; color: string; content: string[] }> = {
        hustler: {
            title: "Growth Lab",
            subtitle: "Tips to scale your presence this week",
            icon: Zap,
            color: "amber",
            content: [
                "Share your product on AmeboGist to gain 200+ views",
                "Update your business bio for better SEO",
                "Connect with 2 Founders in your niche"
            ]
        },
        founder: {
            title: "Performance Hub",
            subtitle: "Revenue and product health overview",
            icon: BarChart3,
            color: "emerald",
            content: [
                "Your average LTV is up 12% across 3 products",
                "Review revenue leakage in 'PlanAI' billing",
                "2 products need optimization (Health < 80%)"
            ]
        },
        creator: {
            title: "Content Studio",
            subtitle: "Engagement and distribution metrics",
            icon: DollarSign,
            color: "purple",
            content: [
                "Your latest post hit 5k organic reach",
                "Trending topic: 'AI in Lagos' — write about this",
                "New collaboration request from 'AmeboGist'"
            ]
        },
        student: {
            title: "Learning Path",
            subtitle: "New opportunities and skill paths",
            icon: BookOpen,
            color: "blue",
            content: [
                "Complete 'Scale 101' to unlock Founder rank",
                "New internship opportunity at PlanAI",
                "Your digital maturity score increased by 5%"
            ]
        },
        operator: {
            title: "Operations Centre",
            subtitle: "Task and product management",
            icon: Settings,
            color: "gray",
            content: [
                "3 pending team invitations require approval",
                "System update scheduled for Sunday 2 AM",
                "API usage is at 85% of monthly limit"
            ]
        }
    };

    const emphasis = emphasisMap[userRole] || emphasisMap['founder'];
    if (!emphasis) return null;

    const Icon = emphasis.icon;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border shadow-sm p-8"
        >
            <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-${emphasis.color}-500/10 flex items-center justify-center`}>
                    <Icon className={`text-${emphasis.color}-600`} size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-black text-[#00143C] dark:text-white uppercase tracking-tight">
                        {emphasis.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">{emphasis.subtitle}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {emphasis.content.map((item, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800 flex items-start gap-3">
                        <div className="w-5 h-5 bg-[#FFC800] rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center text-[10px] font-bold">
                            {idx + 1}
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-tight">
                            {item}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

