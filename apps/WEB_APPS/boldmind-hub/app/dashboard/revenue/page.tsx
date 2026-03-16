// app/dashboard/revenue/page.tsx
'use client';

import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Sidebar } from '../Sidebar';
import { SuperNavbar } from '@boldmind/ui';
import { BOLDMIND_PRODUCTS, calculateTotalMonthlyRevenue } from '@boldmind/utils';
import { StatCard } from '../StatCard';

export default function RevenueDashboard() {
    const revenue = calculateTotalMonthlyRevenue();
    const topProducts = [...BOLDMIND_PRODUCTS]
        .sort((a, b) => (b.monthlyRevenue ?? 0) - (a.monthlyRevenue ?? 0))
        .slice(0, 5);

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
            <Sidebar active="revenue" />

            <div className="flex-1 flex flex-col">
                <SuperNavbar logoSrc="/logo.png" user={{ name: 'Bobby', role: 'Founder' }} links={[
                    { href: '/dashboard', label: 'Dashboard' },
                    { href: '/dashboard/revenue', label: 'Revenue' },
                    { href: '/dashboard/roadmap', label: 'Roadmap' },
                ]} />

                <main className="flex-1 p-6 lg:p-10 overflow-auto">
                    <div className="max-w-7xl mx-auto space-y-10">
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                            <h1 className="text-3xl font-bold">Revenue Overview</h1>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">
                                Consolidated financials across all products
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatCard icon={DollarSign} label="Monthly Revenue" value={`₦${revenue.toLocaleString()}`} color="green" />
                            <StatCard icon={TrendingUp} label="MoM Growth" value="+18.2%" color="emerald" />
                            <StatCard icon={ArrowUpRight} label="ARR" value={`₦${(revenue * 12).toLocaleString()}`} color="blue" />
                        </div>

                        <div className="bg-white dark:bg-gray-900 rounded-2xl border shadow-lg p-6">
                            <h2 className="text-xl font-semibold mb-6">Top Performing Products</h2>
                            <div className="space-y-4">
                                {topProducts.map(product => (
                                    <div key={product.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                        <div>
                                            <p className="font-medium">{product.name}</p>
                                            <p className="text-sm text-gray-500">{product.status}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold">₦{(product.monthlyRevenue ?? 0).toLocaleString()}</p>
                                            <p className="text-xs text-gray-500">{(((product.monthlyRevenue ?? 0) / revenue) * 100).toFixed(1)}%</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

