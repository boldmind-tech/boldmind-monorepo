'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Video,
    Calendar,
    Settings,
    PlusCircle,
    TrendingUp,
    Clock,
    MoreVertical,
    Search,
    Users,
    Bell,
    LogOut
} from 'lucide-react';
import { SuperNavbar, SuperFooter } from '@boldmind/ui';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
    const router = useRouter();

    const handleLogout = () => {
        // Assume auth logic here
        router.push('/login');
    };

    const dashboardLinks = [
        { href: '/dashboard', label: 'Overview', icon: '📊' },
        { href: '/dashboard/create', label: 'Create', icon: '✨' },
        { href: '/dashboard/schedule', label: 'Schedule', icon: '📅' },
        { href: '/dashboard/settings', label: 'Settings', icon: '⚙️' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-white transition-colors duration-300">
            {/* Helper Navbar for Dashboard Context */}
            <SuperNavbar
                logoSrc="/logo.png"
                links={dashboardLinks}
                cta={{
                    label: 'Create Content',
                    href: '/dashboard/create',
                    variant: 'gradient',
                    icon: <PlusCircle className="w-4 h-4" />
                }}
                theme="dark"
                className="border-b border-white/10"
                user={{ name: 'Creator', role: 'Pro Plan' }}
            />

            <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-12 gap-8">

                    {/* Main Content */}
                    <div className="md:col-span-12">

                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                            <div>
                                <h1 className="text-3xl font-black mb-1">Creation Studio</h1>
                                <p className="text-gray-500 dark:text-gray-400">Welcome back! You have 3 pending drafts.</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                    <input
                                        type="text"
                                        placeholder="Search projects..."
                                        className="pl-9 pr-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                                <button className="p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <Bell className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>
                        </div>

                        {/* Stats Overview */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                            {[
                                { label: 'Videos Created', val: '124', icon: Video, color: 'text-purple-500' },
                                { label: 'Views (Total)', val: '1.2M', icon: Users, color: 'text-blue-500' },
                                { label: 'Engagement', val: '+24%', icon: TrendingUp, color: 'text-green-500' },
                                { label: 'Saved Time', val: '42hr', icon: Clock, color: 'text-orange-500' },
                            ].map((stat, i) => (
                                <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`p-2 rounded-lg bg-gray-50 dark:bg-gray-800 ${stat.color}`}>
                                            <stat.icon className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <div className="text-3xl font-black mb-1">{stat.val}</div>
                                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Recent Projects */}
                        <div className="mb-12">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold">Recent Projects</h2>
                                <button className="text-sm text-purple-500 hover:text-purple-400 font-bold">View All</button>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[1, 2, 3].map((_, i) => (
                                    <div key={i} className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all cursor-pointer">
                                        <div className="h-40 bg-gray-100 dark:bg-gray-800 relative">
                                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:text-purple-500 transition-colors">
                                                <Video className="w-10 h-10" />
                                            </div>
                                            <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 text-white text-xs rounded font-mono">
                                                00:45
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <h3 className="font-bold text-lg mb-1">Project Alpha {i + 1}</h3>
                                            <p className="text-sm text-gray-500 mb-4">Last edited 2h ago</p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-xs px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full font-bold">
                                                    Ready
                                                </span>
                                                <button className="text-gray-400 hover:text-white">
                                                    <MoreVertical className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Footer in Dashboard? Optional, but good for completeness */}
            <SuperFooter
                variant="compact"
                product="social-factory"
                className="border-t border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950"
            />
        </div>
    );
}
