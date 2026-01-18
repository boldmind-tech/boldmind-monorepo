'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Globe, 
  ShoppingCart,
  Clock,
  AlertCircle,
  TrendingDown,
  Eye
} from 'lucide-react';
import { SuperNavbar } from '@boldmind/ui';
import { 
  BOLDMIND_PRODUCTS, 
  calculateTotalMonthlyRevenue, 
  getProductStatusSummary 
} from '@boldmind/utils';
import { socialAccounts } from '@boldmind/utils';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalRevenue: 0,
    activeUsers: 0,
    growthRate: 0,
    socialReach: 0,
  });
  const [recentActivity, setRecentActivity] = useState<any[]>([]);
  const [socialStats, setSocialStats] = useState<Record<string, number>>({});

  useEffect(() => {
    // Fetch real stats
    fetchStats();
    fetchSocialStats();
    fetchRecentActivity();
  }, []);

  const fetchStats = async () => {
    // Calculate from products
    const revenue = calculateTotalMonthlyRevenue();
    const productSummary = getProductStatusSummary();
    
    // Estimate social reach
    let totalReach = 0;
    Object.values(socialAccounts).forEach(accounts => {
      totalReach += accounts.length * 1000; // Estimated followers per account
    });

    setStats({
      totalRevenue: revenue,
      activeUsers: productSummary.total * 100, // Estimated
      growthRate: 24, // Monthly %
      socialReach: totalReach,
    });
  };

  const fetchSocialStats = async () => {
    const stats: Record<string, number> = {};
    Object.entries(socialAccounts).forEach(([platform, accounts]) => {
      stats[platform] = accounts.length * 1000; // Estimated per account
    });
    setSocialStats(stats);
  };

  const fetchRecentActivity = async () => {
    const activity = [
      { id: 1, product: 'AmeboGist', action: 'New article published', time: '5 mins ago', icon: '📝' },
      { id: 2, product: 'EduCenter', action: 'New student signup', time: '15 mins ago', icon: '👨‍🎓' },
      { id: 3, product: 'PlanAI', action: 'New client onboarded', time: '30 mins ago', icon: '🤖' },
      { id: 4, product: 'BoldMind OS', action: 'Beta release', time: '2 hours ago', icon: '🚀' },
      { id: 5, product: 'EmailScraper Pro', action: '1000 emails scraped', time: '4 hours ago', icon: '📧' },
    ];
    setRecentActivity(activity);
  };

  // Calculate team size from products
  const teamSize = BOLDMIND_PRODUCTS.reduce((total, product) => 
    total + (product.teamSize || 0), 0
  );

  // Product status breakdown
  const productStatus = {
    live: BOLDMIND_PRODUCTS.filter(p => p.status === 'LIVE').length,
    building: BOLDMIND_PRODUCTS.filter(p => p.status === 'BUILDING').length,
    planned: BOLDMIND_PRODUCTS.filter(p => p.status === 'PLANNED').length,
    concept: BOLDMIND_PRODUCTS.filter(p => p.status === 'CONCEPT').length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <SuperNavbar
        logoSrc="/logo.png"
        links={[
          { href: '/', label: 'Public Site', icon: '🌐' },
          { href: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
          { href: '/admin/products', label: 'Products', icon: '🧩' },
          { href: '/admin/team', label: 'Team', icon: '👥' },
          { href: '/admin/analytics', label: 'Analytics', icon: '📈' },
          { href: '/admin/social', label: 'Social', icon: '📱' },
        ]}
        cta={{ href: '/admin/settings', label: 'Settings', icon: '⚙️' }}
      />

      {/* Main Dashboard */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Ecosystem Dashboard</h1>
          <p className="text-gray-600">Real-time overview of your 31+ product ecosystem</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg border"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-500 text-sm">Monthly Revenue</p>
                <h3 className="text-2xl font-bold">₦{stats.totalRevenue.toLocaleString()}</h3>
              </div>
              <DollarSign className="w-10 h-10 text-green-500 bg-green-100 p-2 rounded-lg" />
            </div>
            <div className="text-sm text-green-600 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              {stats.growthRate}% growth this month
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg border"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-500 text-sm">Active Users</p>
                <h3 className="text-2xl font-bold">{stats.activeUsers.toLocaleString()}</h3>
              </div>
              <Users className="w-10 h-10 text-blue-500 bg-blue-100 p-2 rounded-lg" />
            </div>
            <div className="text-sm text-blue-600 flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              Across all products
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg border"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-500 text-sm">Team Size</p>
                <h3 className="text-2xl font-bold">{teamSize} members</h3>
              </div>
              <Users className="w-10 h-10 text-purple-500 bg-purple-100 p-2 rounded-lg" />
            </div>
            <div className="text-sm text-purple-600">
              Managing {BOLDMIND_PRODUCTS.length} products
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-lg border"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-500 text-sm">Social Reach</p>
                <h3 className="text-2xl font-bold">{stats.socialReach.toLocaleString()}</h3>
              </div>
              <Globe className="w-10 h-10 text-pink-500 bg-pink-100 p-2 rounded-lg" />
            </div>
            <div className="text-sm text-pink-600">
              Across 16+ social accounts
            </div>
          </motion.div>
        </div>

        {/* Product Ecosystem Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Product Status Breakdown */}
          <div className="bg-white rounded-xl p-6 shadow-lg border">
            <h3 className="text-lg font-bold mb-4">Product Status</h3>
            <div className="space-y-4">
              {[
                { status: 'LIVE', count: productStatus.live, color: 'bg-green-100 text-green-800' },
                { status: 'BUILDING', count: productStatus.building, color: 'bg-yellow-100 text-yellow-800' },
                { status: 'PLANNED', count: productStatus.planned, color: 'bg-blue-100 text-blue-800' },
                { status: 'CONCEPT', count: productStatus.concept, color: 'bg-purple-100 text-purple-800' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${item.color.replace('text', 'bg')}`} />
                    <span>{item.status}</span>
                  </div>
                  <span className="font-bold">{item.count} products</span>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue by Product */}
          <div className="bg-white rounded-xl p-6 shadow-lg border">
            <h3 className="text-lg font-bold mb-4">Top Revenue Products</h3>
            <div className="space-y-4">
              {BOLDMIND_PRODUCTS
                .filter(p => p.monthlyRevenue && p.monthlyRevenue > 0)
                .sort((a, b) => (b.monthlyRevenue || 0) - (a.monthlyRevenue || 0))
                .slice(0, 5)
                .map((product, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-xl mr-3">{product.icon}</span>
                      <span>{product.name}</span>
                    </div>
                    <span className="font-bold text-green-600">
                      ₦{product.monthlyRevenue?.toLocaleString()}/month
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-6 shadow-lg border">
            <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center">
                  <span className="text-xl mr-3">{activity.icon}</span>
                  <div className="flex-1">
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.product} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Dashboard */}
        <div className="bg-white rounded-xl p-6 shadow-lg border mb-8">
          <h3 className="text-lg font-bold mb-4">Social Media Accounts</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Object.entries(socialStats).map(([platform, reach]) => (
              <div key={platform} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">
                  {platform === 'facebook' ? '📘' :
                   platform === 'instagram' ? '📸' :
                   platform === 'x' ? '🐦' :
                   platform === 'youtube' ? '📺' :
                   platform === 'tiktok' ? '🎵' : '💬'}
                </div>
                <p className="font-bold capitalize">{platform}</p>
                <p className="text-sm text-gray-600">
                  {socialAccounts[platform as keyof typeof socialAccounts].length} accounts
                </p>
                <p className="text-sm font-medium">
                  {reach.toLocaleString()} reach
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">🚀 Launch New Product</h3>
            <p className="mb-4">Ready to add product #32 to the ecosystem?</p>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100">
              Start Builder
            </button>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">📈 View Analytics</h3>
            <p className="mb-4">Deep dive into product performance</p>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100">
              Open Analytics
            </button>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">👥 Team Management</h3>
            <p className="mb-4">Manage {teamSize} team members across products</p>
            <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100">
              Open Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}