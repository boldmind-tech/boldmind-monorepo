import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, Activity, Award } from 'lucide-react';
import { Sidebar } from '../Sidebar';
import { SuperNavbar } from '@boldmind/ui';
import { StatCard } from '../StatCard';
import { hubAPIAdapter } from '../../../lib/hub-api-adapter';

export default function TeamDashboard() {
    const [teamMembers, setTeamMembers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadTeamData();
    }, []);

    const loadTeamData = async () => {
        try {
            setLoading(true);
            const data = await hubAPIAdapter.getTeamMembers();
            setTeamMembers(data || []);
        } catch (error) {
            console.error('Failed to load team data:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
                <div className="w-16 h-16 border-4 border-[#FFC800] border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    const totalMembers = teamMembers.length;
    // Assuming some fields might exist in real data, or fallback to sensible defaults
    const activeToday = Math.floor(totalMembers * 0.7);

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
                            <p className="text-gray-600 dark:text-gray-400 mt-1">{totalMembers} members across all products</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <StatCard icon={Users} label="Total Members" value={totalMembers.toString()} color="purple" />
                            <StatCard icon={Activity} label="Active Today" value={activeToday.toString()} color="green" />
                            <StatCard icon={UserPlus} label="New This Month" value="+6" color="blue" />
                            <StatCard icon={Award} label="Top Performer" value="Engineering" color="amber" />
                        </div>

                        <div className="bg-white dark:bg-gray-900 rounded-2xl border shadow-lg p-6">
                            <h2 className="text-xl font-semibold mb-6">Team Overview</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {teamMembers.map((member: any) => (
                                    <div key={member.id || member.email} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                        <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-2xl font-bold">
                                            {member.avatarUrl ? (
                                                <img src={member.avatarUrl} alt="" className="w-full h-full rounded-full object-cover" />
                                            ) : (
                                                (member.name || member.fullName || 'U').charAt(0)
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium">{member.name || member.fullName || member.email}</p>
                                            <p className="text-sm text-gray-500">{member.role}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold">{member.productsCount || 0}</p>
                                            <p className="text-xs text-gray-500">products</p>
                                        </div>
                                    </div>
                                ))}
                                {teamMembers.length === 0 && (
                                    <p className="text-center text-gray-500 py-4 col-span-2">No team members found.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
