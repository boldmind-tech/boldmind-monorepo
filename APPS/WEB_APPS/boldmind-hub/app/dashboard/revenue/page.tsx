import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, ArrowUpRight } from 'lucide-react';
import { Sidebar } from '../Sidebar';
import { SuperNavbar } from '@boldmind/ui';
import { hubAPIAdapter } from '../../../lib/hub-api-adapter';
import { StatCard } from '../StatCard';

export default function RevenueDashboard() {
    const [revenueData, setRevenueData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadRevenueData();
    }, []);

    const loadRevenueData = async () => {
        try {
            setLoading(true);
            const data = await hubAPIAdapter.getRevenueAnalytics();
            setRevenueData(data);
        } catch (error) {
            console.error('Failed to load revenue data:', error);
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

    const totalRevenue = revenueData?.totalRevenue || 0;
    const growth = revenueData?.growthMoM || '0%';
    const arr = totalRevenue * 12;
    const topProducts = revenueData?.topProducts || [];

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
                            <StatCard icon={DollarSign} label="Monthly Revenue" value={`₦${totalRevenue.toLocaleString()}`} color="green" />
                            <StatCard icon={TrendingUp} label="MoM Growth" value={growth} color="emerald" />
                            <StatCard icon={ArrowUpRight} label="ARR" value={`₦${arr.toLocaleString()}`} color="blue" />
                        </div>

                        <div className="bg-white dark:bg-gray-900 rounded-2xl border shadow-lg p-6">
                            <h2 className="text-xl font-semibold mb-6">Top Performing Products</h2>
                            <div className="space-y-4">
                                {topProducts.map((product: any) => (
                                    <div key={product.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                        <div>
                                            <p className="font-medium">{product.name}</p>
                                            <p className="text-sm text-gray-500">{product.status}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold">₦{(product.revenue || 0).toLocaleString()}</p>
                                            <p className="text-xs text-gray-500">
                                                {totalRevenue > 0 ? (((product.revenue || 0) / totalRevenue) * 100).toFixed(1) : 0}%
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                {topProducts.length === 0 && (
                                    <p className="text-center text-gray-500 py-4">No revenue data available for products.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

