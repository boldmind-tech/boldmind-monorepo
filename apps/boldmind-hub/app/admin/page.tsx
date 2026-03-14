// APPS/WEB_APPS/boldmind-hub/app/admin/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@boldmind/auth';
import { hubAPIAdapter } from '../../lib/hub-api-adapter';
import {
  Users,
  Package,
  BarChart3,
  // TrendingUp,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Activity,
  Shield,
  Zap,
  ChevronRight
} from 'lucide-react';
import { User } from '@boldmind/utils';

interface DashboardStats {
  userStats: {
    totals: {
      users: number;
      admins: number;
      activeProducts: number;
    };
    growth: {
      currentMonth: number;
      previousMonth: number;
      percentage: number;
      trend: 'up' | 'down' | 'stable';
    };
    recentUsers: Array<{
      id: string;
      email: string;
      fullName?: string;
      role: string;
      createdAt: string;
    }>;
    userGrowth: Array<{
      date: string;
      count: number;
    }>;
    topProducts: Array<{
      productSlug: string;
      userCount: number;
      productName: string;
    }>;
  };
  productStats: {
    total: number;
    byStatus: Record<string, number>;
    byCategory: Record<string, number>;
    projectedRevenue: number;
    upcomingReleases: number;
  };
  systemHealth: Array<{
    name: string;
    status: 'healthy' | 'unhealthy' | 'unknown';
    responseTime?: number;
    error?: string;
    lastChecked: string;
  }>;
  recentActivity: Array<{
    id: string;
    userId: string;
    action: string;
    entityType: string;
    entityId?: string;
    createdAt: string;
    user?: {
      id: string;
      email: string;
      fullName?: string;
    };
  }>;
  ecosystemOverview: {
    totalTeamSize: number;
    totalDevelopmentCost: number;
    totalMonthlyRevenue: number;
    avgProductPriority: number;
    topPriorityProducts: Array<{
      name: string;
      priority: number;
      status: string;
      monthlyRevenue: number;
    }>;
  };
}

export default function AdminDashboard() {
  const { user: authUser } = useAuth();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  // Cast through unknown to bypass strict type incompatibility with @boldmind/auth User
  const user = authUser as unknown as User;

  useEffect(() => {
    // Check for admin/super_admin role using the new canonical roles
    const hasAdminAccess = user?.role === 'admin' || user?.role === 'super_admin';
    if (hasAdminAccess) {
      fetchDashboardData();
    }
  }, [user]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const data = await hubAPIAdapter.getDashboardStats();
      setStats(data);
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50/40 dark:bg-gray-950 p-6">
        <div className="w-16 h-16 border-4 border-[#FFC800] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const userName = user?.name?.split(' ')[0] || user?.email?.split('@')[0] || 'Admin';

  return (
    <div className="max-w-7xl mx-auto space-y-10 p-6 lg:p-10">
      {/* Layer 1: Premium Greeting */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-[#00143C] to-[#00255C] rounded-2xl p-8 text-white relative overflow-hidden shadow-xl"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC800]/10 rounded-full -mr-20 -mt-20 blur-3xl" />
        <h1 className="text-3xl font-black mb-2 relative z-10">
          Admin Command, <span className="text-[#FFC800]">{userName}</span> 🚀
        </h1>
        <p className="text-blue-100 relative z-10">
          Managing the global product ecosystem and community vitality.
        </p>
      </motion.div>

      {/* Layer 2: Flywheel Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AdminStatCard
          icon={Users}
          label="Total Community"
          value={stats?.userStats.totals.users.toLocaleString() || '0'}
          change={`+${stats?.userStats.growth.percentage}%`}
          color="blue"
        />
        <AdminStatCard
          icon={Package}
          label="Active Products"
          value={stats?.userStats.totals.activeProducts.toString() || '0'}
          change={`${stats?.productStats.total} total`}
          color="purple"
        />
        <AdminStatCard
          icon={DollarSign}
          label="Global Revenue"
          value={`₦${stats?.ecosystemOverview.totalMonthlyRevenue.toLocaleString() || '0'}`}
          change="Eco-wide"
          color="amber"
        />
        <AdminStatCard
          icon={Shield}
          label="Admins"
          value={stats?.userStats.totals.admins.toString() || '0'}
          change="Active Staff"
          color="emerald"
        />
      </div>

      {/* Layer 3: System Health & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* System Health Area */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border shadow-sm p-6">
            <h2 className="text-lg font-black text-[#00143C] dark:text-white mb-6 flex items-center gap-2">
              <Activity size={20} className="text-emerald-500" />
              Service Status
            </h2>
            <div className="space-y-4">
              {stats?.systemHealth.map((service) => (
                <div key={service.name} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <div className="flex items-center gap-3">
                    {service.status === 'healthy' ? (
                      <CheckCircle className="text-emerald-500" size={18} />
                    ) : (
                      <AlertCircle className="text-red-500" size={18} />
                    )}
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-200">
                      {service.name}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-gray-500">
                    {service.responseTime}ms
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#00143C] rounded-2xl p-6 text-white relative overflow-hidden group hover:shadow-lg transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
              <Zap size={48} />
            </div>
            <h3 className="font-bold mb-2">System Update</h3>
            <p className="text-xs text-blue-200 mb-4 leading-relaxed">
              New identity layers are now live across boldmind-hub 1.2.0
            </p>
            <button className="text-xs font-bold text-[#FFC800] hover:underline flex items-center gap-1">
              View Changelog <ChevronRight size={12} />
            </button>
          </div>
        </div>

        {/* Recent Activity Area */}
        <div className="lg:col-span-8">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border shadow-sm h-full flex flex-col">
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-lg font-black text-[#00143C] dark:text-white flex items-center gap-2">
                <Activity size={20} className="text-blue-500" />
                Live Hub Activity
              </h2>
              <button className="text-sm font-bold text-[#00143C] dark:text-[#FFC800]">
                View Full Audit →
              </button>
            </div>
            <div className="flex-1 overflow-auto p-2">
              {stats?.recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold shrink-0">
                    {activity.user?.fullName?.[0] || 'S'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 dark:text-gray-100 font-medium">
                      <span className="font-bold">{activity.user?.fullName || 'System'}</span> {activity.action}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(activity.createdAt).toLocaleTimeString()} • {activity.entityType}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Layer 4: Quick Admin Controls */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border shadow-sm p-8">
        <h2 className="text-lg font-black text-[#00143C] dark:text-white mb-6">
          Global Controls
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <AdminControlButton icon={Users} label="Team Management" color="blue" />
          <AdminControlButton icon={Shield} label="Access Control" color="emerald" />
          <AdminControlButton icon={Package} label="Product Catalog" color="purple" />
          <AdminControlButton icon={BarChart3} label="Custom Reports" color="amber" />
        </div>
      </div>
    </div>
  );
}

function AdminStatCard({ icon: Icon, label, value, change, color }: { icon: any; label: string; value: string; change: string; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white dark:bg-gray-900 p-6 rounded-2xl border shadow-sm hover:border-[#FFC800] transition-all group"
    >
      <div className={`w-12 h-12 rounded-xl bg-${color}-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className={`text-${color}-600 dark:text-${color}-400`} size={24} />
      </div>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 capitalize">
        {label}
      </p>
      <p className="text-2xl font-black text-[#00143C] dark:text-white mt-1">
        {value}
      </p>
      <p className="text-[10px] font-bold text-[#FFC800] bg-[#00143C] px-2 py-0.5 rounded-full inline-block mt-3 uppercase tracking-tighter">
        {change}
      </p>
    </motion.div>
  );
}

function AdminControlButton({ icon: Icon, label, color }: { icon: any; label: string; color: string }) {
  return (
    <button className="flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-transparent hover:border-[#FFC800] hover:bg-white dark:hover:bg-gray-800 transition-all group">
      <div className={`p-4 rounded-xl bg-${color}-500/10 text-${color}-600 group-hover:scale-110 transition-transform`}>
        <Icon size={24} />
      </div>
      <span className="text-sm font-black text-[#00143C] dark:text-gray-300 uppercase tracking-tighter">
        {label}
      </span>
    </button>
  );
}
