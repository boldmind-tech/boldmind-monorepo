// app/dashboard/roadmap/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Target, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { Sidebar } from '../Sidebar';
import { SuperNavbar, cn } from '@boldmind/ui';
import { StatCard } from '../StatCard';

const upcoming = [
    { name: 'EmailScraper Pro', quarter: 'Q2 2026', progress: 65, status: 'building' },
    { name: 'Naija FitHer', quarter: 'Q2 2026', progress: 45, status: 'building' },
    { name: 'PlanAI Suite', quarter: 'Q3 2026', progress: 20, status: 'planned' },
    { name: 'SAFE AI', quarter: 'Q4 2026', progress: 10, status: 'concept' },
];

export default function RoadmapDashboard() {
    return (
        <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
            <Sidebar active="roadmap" />

            <div className="flex-1 flex flex-col">
                <SuperNavbar logoSrc="/logo.png" user={{ name: 'Bobby', role: 'Founder' }} links={[
                    { href: '/dashboard', label: 'Dashboard' },
                    { href: '/dashboard/revenue', label: 'Revenue' },
                    { href: '/dashboard/roadmap', label: 'Roadmap' },
                ]} />

                <main className="flex-1 p-6 lg:p-10 overflow-auto">
                    <div className="max-w-7xl mx-auto space-y-10">
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">
                                Upcoming launches and development progress
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <StatCard icon={Target} label="Total Planned" value="31" color="blue" />
                            <StatCard icon={Calendar} label="Q2 2026" value="8" color="amber" />
                            <StatCard icon={Clock} label="In Progress" value="12" color="green" />
                            <StatCard icon={CheckCircle2} label="Completed" value="5" color="emerald" />
                        </div>

                        <div className="bg-white dark:bg-gray-900 rounded-2xl border shadow-lg p-6">
                            <h2 className="text-xl font-semibold mb-6">Upcoming Launches</h2>
                            <div className="space-y-6">
                                {upcoming.map(item => (
                                    <div key={item.name} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="font-medium">{item.name}</p>
                                                <p className="text-sm text-gray-500">{item.quarter}</p>
                                            </div>
                                            <span className={cn(
                                                "px-3 py-1 rounded-full text-xs font-medium",
                                                item.status === 'building' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400' :
                                                    item.status === 'planned' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                                                        'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                                            )}>
                                                {item.status}
                                            </span>
                                        </div>
                                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-green-500 rounded-full transition-all duration-500"
                                                style={{ width: `${item.progress}%` }}
                                            />
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