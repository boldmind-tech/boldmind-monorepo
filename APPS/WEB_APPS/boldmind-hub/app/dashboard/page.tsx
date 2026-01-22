// app/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard, DollarSign, Users, Target, Globe, TrendingUp, AlertCircle
} from 'lucide-react';
import { SuperNavbar } from '@boldmind/ui';
import { BOLDMIND_PRODUCTS, calculateTotalMonthlyRevenue } from '@boldmind/utils';
import { Sidebar } from './Sidebar';

export default function Dashboard() {
    const [greeting, setGreeting] = useState('Welcome back');

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good morning');
        else if (hour < 18) setGreeting('Good afternoon');
        else setGreeting('Good evening');
    }, []);

    const totalProducts = BOLDMIND_PRODUCTS.length;
    const liveCount = BOLDMIND_PRODUCTS.filter(p => p.status === 'LIVE').length;
    const revenue = calculateTotalMonthlyRevenue();

    return (
        <div className="flex min-h-screen bg-gray-50/40 dark:bg-gray-950">
            <Sidebar active="dashboard" />

            <div className="flex-1 flex flex-col">
                <SuperNavbar
                    logoSrc="/logo.png"
                    links={[
                        { href: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
                        { href: '/dashboard/revenue', label: 'Revenue', icon: <TrendingUp size={18} /> },
                        { href: '/dashboard/team', label: 'Team', icon: <Users size={18} /> },
                        { href: '/dashboard/roadmap', label: 'Roadmap', icon: <Target size={18} /> },
                    ]}
                />

                <main className="flex-1 p-6 lg:p-10 overflow-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-7xl mx-auto space-y-10"
                    >
                        {/* Hero Greeting + Quick Stats */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h1 className="text-3xl font-bold tracking-tight">{greeting}, Founder</h1>
                                <p className="text-muted-foreground mt-1">
                                    Here's what's happening with your {totalProducts}+ product ecosystem today
                                </p>
                            </div>
                            <div className="flex gap-4 flex-wrap">
                                <QuickStat icon={Globe} label="Products" value={totalProducts.toString()} color="blue" />
                                <QuickStat icon={DollarSign} label="Monthly Revenue" value={`₦${revenue.toLocaleString()}`} color="green" />
                                <QuickStat icon={Users} label="Team Size" value="47" color="purple" />
                                <QuickStat icon={Target} label="Target Progress" value="83%" color="orange" />
                            </div>
                        </div>

                        {/* Status Overview Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatusCard title="Live Products" count={liveCount} total={totalProducts} color="emerald" />
                            <StatusCard title="Building" count={BOLDMIND_PRODUCTS.filter(p => p.status === 'BUILDING').length} color="amber" />
                            <StatusCard title="Planned / Concept" count={BOLDMIND_PRODUCTS.filter(p => ['PLANNED', 'CONCEPT'].includes(p.status)).length} color="violet" />
                        </div>

                        {/* Alerts / Quick Actions */}
                        <div className="bg-white dark:bg-gray-900 rounded-xl border shadow-sm p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertCircle className="text-amber-500" size={20} />
                                <h2 className="text-lg font-semibold">Quick Actions & Alerts</h2>
                            </div>
                            <div className="space-y-3">
                                <ActionItem label="2 products need attention (health score < 70%)" href="/dashboard/products?filter=low-health" />
                                <ActionItem label="Upcoming launch: EmailScraper Pro – Q2 2026" href="/dashboard/roadmap" />
                                <ActionItem label="Revenue is up 18% this month – view details" href="/dashboard/revenue" />
                            </div>
                        </div>
                    </motion.div>
                </main>
            </div>
        </div>
    );
}

// ── Reusable small components ──────────────────────────────────────
function QuickStat({ icon: Icon, label, value, color }: { icon: any; label: string; value: string; color: string }) {
    return (
        <div className={`bg-gradient-to-br from-${color}-50 to-${color}-100 dark:from-${color}-950/30 dark:to-${color}-900/20 border border-${color}-200 dark:border-${color}-800 rounded-xl p-4 flex-1 min-w-[140px]`}>
            <div className="flex items-center gap-3">
                <div className={`p-2 bg-${color}-500/10 rounded-lg`}>
                    <Icon className={`text-${color}-600 dark:text-${color}-400`} size={20} />
                </div>
                <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-xl font-bold">{value}</p>
                </div>
            </div>
        </div>
    );
}

function StatusCard({ title, count, total, color = 'blue' }: { title: string; count: number; total?: number; color?: string }) {
    return (
        <div className="bg-white dark:bg-gray-900 rounded-xl border shadow-sm p-6">
            <h3 className="font-medium text-muted-foreground mb-2">{title}</h3>
            <div className="text-4xl font-bold">{count}</div>
            {total && <p className="text-sm text-muted-foreground mt-1">out of {total}</p>}
        </div>
    );
}

function ActionItem({ label, href }: { label: string; href: string }) {
    return (
        <a href={href} className="block p-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            {label}
        </a>
    );
}