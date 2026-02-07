// app/dashboard/analytics/page.tsx
'use client';

import { motion } from 'framer-motion';
import {
    BarChart3, LineChart, PieChart, TrendingUp, ArrowUpRight,
    Download, CalendarDays, ArrowDownRight
} from 'lucide-react';
import { Sidebar } from '../Sidebar';
import { SuperNavbar } from '@boldmind/ui';
import { BOLDMIND_PRODUCTS } from '@boldmind/utils';

export default function AnalyticsPage() {
    return (
        <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
            <Sidebar active="analytics" />

            <div className="flex-1 flex flex-col">
                <SuperNavbar logoSrc="/logo.png" user={{ name: 'Bobby', role: 'Founder' }} links={[
                    { href: '/dashboard', label: 'Dashboard' },
                    { href: '/dashboard/revenue', label: 'Revenue' },
                    { href: '/dashboard/roadmap', label: 'Roadmap' },
                ]} />

                <main className="flex-1 p-6 lg:p-10 overflow-auto">
                    <div className="max-w-7xl mx-auto space-y-10">
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
                                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                                        Deep insights across products, revenue, users & performance
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <CalendarDays size={18} />
                                        <span>Last 30 days</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <Download size={18} />
                                        <span>Export</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* KPI Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <KpiCard icon={BarChart3} label="Total Revenue" value="₦2,847,500" change="+18.4%" color="green" />
                            <KpiCard icon={LineChart} label="Active Users" value="12,430" change="+9.2%" color="blue" />
                            <KpiCard icon={PieChart} label="Avg. Churn" value="4.8%" change="-1.1%" color="orange" isNegative />
                            <KpiCard icon={TrendingUp} label="Conversion Rate" value="7.3%" change="+2.6%" color="emerald" />
                        </div>

                        {/* Main Chart Area (placeholder) */}
                        <div className="bg-white dark:bg-gray-900 rounded-2xl border shadow-xl p-6 lg:p-8">
                            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                                <h2 className="text-xl font-semibold">Revenue Trend & Product Breakdown</h2>
                                <div className="flex gap-3">
                                    <button className="px-3 py-1.5 text-sm border rounded-lg bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400">
                                        Revenue
                                    </button>
                                    <button className="px-3 py-1.5 text-sm border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                        Users
                                    </button>
                                </div>
                            </div>

                            <div className="h-80 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
                                <p className="text-gray-500 dark:text-gray-400 italic">
                                    [ Recharts / ApexCharts / Tremor chart would render here ]
                                </p>
                            </div>
                        </div>

                        {/* Bottom Tables / Breakdowns */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-white dark:bg-gray-900 rounded-2xl border shadow-lg p-6">
                                <h3 className="text-lg font-semibold mb-5">Top Products by Revenue</h3>
                                <div className="space-y-4">
                                    {BOLDMIND_PRODUCTS.slice(0, 6).map((p, i) => (
                                        <div key={i} className="flex justify-between items-center py-2 border-b dark:border-gray-800 last:border-0">
                                            <div className="font-medium">{p.name || `Product ${i + 1}`}</div>
                                            <div className="text-right">
                                                <div>₦{(Math.random() * 80000 + 20000).toFixed(0).toLocaleString()}</div>
                                                <div className="text-xs text-gray-500">{(Math.random() * 30 + 5).toFixed(1)}%</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-900 rounded-2xl border shadow-lg p-6">
                                <h3 className="text-lg font-semibold mb-5">Recent Activity</h3>
                                <div className="space-y-4">
                                    {[
                                        { text: "New subscription from Lagos", time: "12 min ago" },
                                        { text: "EduCenter churn rate dropped -2.1%", time: "47 min ago" },
                                        { text: "PlanAI Suite reached 1,200 MAU", time: "2 hours ago" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex justify-between items-center py-2 border-b dark:border-gray-800 last:border-0">
                                            <div>{item.text}</div>
                                            <div className="text-sm text-gray-500">{item.time}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

function KpiCard({ icon: Icon, label, value, change, color, isNegative = false }: any) {
    return (
        <div className={`
      bg-gradient-to-br from-${color}-50 to-${color}-100 dark:from-${color}-950/30 dark:to-${color}-900/20
      border border-${color}-200 dark:border-${color}-800 rounded-2xl p-6
    `}>
            <div className="flex items-center justify-between mb-4">
                <div className={`p-3 bg-${color}-500/10 rounded-xl`}>
                    <Icon className={`text-${color}-600 dark:text-${color}-400`} size={24} />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${isNegative ? 'text-red-600' : 'text-green-600'}`}>
                    {isNegative ? <ArrowDownRight size={16} /> : <ArrowUpRight size={16} />}
                    {change}
                </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
    );
}