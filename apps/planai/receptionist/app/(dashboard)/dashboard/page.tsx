'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
  BarChart3,
  MessageSquare,
  Users,
  Calendar,
  Settings,
  Bell,
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState({
    totalClients: 0,
    activeConversations: 0,
    pendingLeads: 0,
    appointmentsToday: 0,
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  // Mock data - replace with actual API calls
  useEffect(() => {
    if (status === 'authenticated') {
      // Simulate API call
      setTimeout(() => {
        setStats({
          totalClients: 124,
          activeConversations: 23,
          pendingLeads: 15,
          appointmentsToday: 7,
        });
      }, 1000);
    }
  }, [status]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total Clients',
      value: stats.totalClients,
      icon: Users,
      color: 'bg-blue-500',
      textColor: 'text-blue-500',
    },
    {
      title: 'Active Conversations',
      value: stats.activeConversations,
      icon: MessageSquare,
      color: 'bg-green-500',
      textColor: 'text-green-500',
    },
    {
      title: 'Pending Leads',
      value: stats.pendingLeads,
      icon: Bell,
      color: 'bg-yellow-500',
      textColor: 'text-yellow-500',
    },
    {
      title: 'Appointments Today',
      value: stats.appointmentsToday,
      icon: Calendar,
      color: 'bg-purple-500',
      textColor: 'text-purple-500',
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome back, {session?.user?.name || 'User'}! Here's what's happening with your AI receptionist.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.color} bg-opacity-10`}>
                  <Icon className={`h-6 w-6 ${stat.textColor}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800">
              View all
            </button>
          </div>
          <div className="space-y-4">
            {[
              { time: '10:30 AM', action: 'New lead from Facebook', client: 'John Doe' },
              { time: '9:45 AM', action: 'Appointment confirmed', client: 'Sarah Smith' },
              { time: 'Yesterday', action: 'Follow-up sent', client: 'Mike Johnson' },
              { time: 'Yesterday', action: 'New client onboarded', client: 'Tech Solutions Inc.' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.client}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => router.push('/clients')}
              className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <Users className="h-8 w-8 text-gray-400 mb-2" />
              <span className="text-sm font-medium text-gray-900">Manage Clients</span>
            </button>
            <button
              onClick={() => router.push('/conversations')}
              className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors"
            >
              <MessageSquare className="h-8 w-8 text-gray-400 mb-2" />
              <span className="text-sm font-medium text-gray-900">View Conversations</span>
            </button>
            <button
              onClick={() => router.push('/automation')}
              className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition-colors"
            >
              <BarChart3 className="h-8 w-8 text-gray-400 mb-2" />
              <span className="text-sm font-medium text-gray-900">Automation Rules</span>
            </button>
            <button
              onClick={() => router.push('/settings')}
              className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors"
            >
              <Settings className="h-8 w-8 text-gray-400 mb-2" />
              <span className="text-sm font-medium text-gray-900">Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}