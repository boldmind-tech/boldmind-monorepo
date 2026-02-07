'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@boldmind/auth';
import { hubAPI } from '../../lib/api-adapters';
import {
  Users,
  Package,
  BarChart3,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Activity,
  Shield,
} from 'lucide-react';

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
  const { user } = useAuth();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.isAdmin) {
      fetchDashboardData();
    }
  }, [user]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const data = await hubAPI.getDashboardStats();
      setStats(data);
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome back, {user?.firstName}!
        </h1>
        <p className="text-gray-600">
          Here's what's happening in your BoldMind ecosystem today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats?.userStats.totals.users.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>{stats?.userStats.growth.percentage}% increase from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Admin Users</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats?.userStats.totals.admins}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Active
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Products</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats?.userStats.totals.activeProducts}
              </p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Package className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <span>{stats?.productStats.total} total products</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Ecosystem Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                ₦{stats?.ecosystemOverview.totalMonthlyRevenue.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm text-gray-600">
              Across all products
            </span>
          </div>
        </div>
      </div>

      {/* System Health */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            System Health
          </h2>
          <div className="space-y-4">
            {stats?.systemHealth.map((service) => (
              <div key={service.name} className="flex items-center justify-between">
                <div className="flex items-center">
                  {service.status === 'healthy' ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  )}
                  <span className="text-sm font-medium text-gray-700">
                    {service.name}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  {service.responseTime}ms
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {stats?.recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <Activity className="h-4 w-4 text-gray-600" />
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.action}
                  </p>
                  <p className="text-sm text-gray-600">
                    by {activity.user?.fullName || 'System'}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(activity.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button className="text-sm text-blue-600 hover:text-blue-800">
              View all activity
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg p-4 text-center">
            <div className="flex flex-col items-center">
              <Users className="h-6 w-6 mb-2" />
              <span className="text-sm font-medium">Add User</span>
            </div>
          </button>
          <button className="bg-green-50 hover:bg-green-100 text-green-700 rounded-lg p-4 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-6 w-6 mb-2" />
              <span className="text-sm font-medium">Create Role</span>
            </div>
          </button>
          <button className="bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg p-4 text-center">
            <div className="flex flex-col items-center">
              <Package className="h-6 w-6 mb-2" />
              <span className="text-sm font-medium">Manage Products</span>
            </div>
          </button>
          <button className="bg-yellow-50 hover:bg-yellow-100 text-yellow-700 rounded-lg p-4 text-center">
            <div className="flex flex-col items-center">
              <BarChart3 className="h-6 w-6 mb-2" />
              <span className="text-sm font-medium">View Reports</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}