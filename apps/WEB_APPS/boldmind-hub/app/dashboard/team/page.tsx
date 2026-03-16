// app/dashboard/team/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Users, UserPlus, Activity, Award } from 'lucide-react';
import { Sidebar } from '../Sidebar';
import { SuperNavbar } from '@boldmind/ui';
import { StatCard } from '../StatCard';

const teamMembers = [
    { name: 'Bobby', role: 'Founder', products: 31, avatar: '👑', status: 'online' },
    { name: 'Design Team', role: 'UI/UX Lead', products: 12, avatar: '🎨', status: 'online' },
    { name: 'Dev Team', role: 'Engineering', products: 25, avatar: '💻', status: 'busy' },
    { name: 'Content Team', role: 'Marketing', products: 8, avatar: '📝', status: 'offline' },
];

export default function TeamDashboard() {
    return (
        <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
            <Sidebar active="team" />

            <div className="flex-1 flex flex-col">
                <SuperNavbar logoSrc="/logo.png" user={{ name: 'Bobby', role: 'Founder' }} links={
                    [
                        { href: '/dashboard', label: 'Dashboard' },
                        { href: '/dashboard/revenue', label: 'Revenue' },
                        { href: '/dashboard/roadmap', label: 'Roadmap' },
                    ]
                } />

                <main className="flex-1 p-6 lg:p-10 overflow-auto">
                    <div className="max-w-7xl mx-auto space-y-10">
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                            <h1 className="text-3xl font-bold">Team Management</h1>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">47 members across all products</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <StatCard icon={Users} label="Total Members" value="47" color="purple" />
                            <StatCard icon={Activity} label="Active Today" value="34" color="green" />
                            <StatCard icon={UserPlus} label="New This Month" value="+6" color="blue" />
                            <StatCard icon={Award} label="Top Performer" value="Dev Team" color="amber" />
                        </div>

                        <div className="bg-white dark:bg-gray-900 rounded-2xl border shadow-lg p-6">
                            <h2 className="text-xl font-semibold mb-6">Team Overview</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {teamMembers.map(member => (
                                    <div key={member.name} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                        <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-2xl">
                                            {member.avatar}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium">{member.name}</p>
                                            <p className="text-sm text-gray-500">{member.role}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold">{member.products}</p>
                                            <p className="text-xs text-gray-500">products</p>
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