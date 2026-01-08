// apps/planai/receptionist/app/(dashboard)/dashboard/page.tsx
'use client';

import { useState } from 'react';
import { 
  MessageCircle, Users, TrendingUp, Clock, CheckCircle2,
  AlertCircle, Phone, Mail, Calendar, Filter, Download,
  Search, MoreVertical, Zap, Bot, Settings, Bell
} from 'lucide-react';

export default function ReceptionistDashboard() {
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedConversation, setSelectedConversation] = useState(null);

  const stats = [
    {
      label: 'Total Conversations',
      value: '2,847',
      change: '+12.5%',
      trend: 'up',
      icon: <MessageCircle className="w-5 h-5" />,
      color: 'blue'
    },
    {
      label: 'Response Rate',
      value: '98.2%',
      change: '+2.1%',
      trend: 'up',
      icon: <CheckCircle2 className="w-5 h-5" />,
      color: 'green'
    },
    {
      label: 'Avg Response Time',
      value: '< 30s',
      change: '-15s',
      trend: 'up',
      icon: <Clock className="w-5 h-5" />,
      color: 'purple'
    },
    {
      label: 'Active Leads',
      value: '184',
      change: '+23',
      trend: 'up',
      icon: <Users className="w-5 h-5" />,
      color: 'orange'
    }
  ];

  const recentConversations = [
    {
      id: 1,
      customer: 'Adebayo Johnson',
      platform: 'WhatsApp',
      message: 'Do you have this product in stock?',
      time: '2 min ago',
      status: 'active',
      avatar: '👨🏿‍💼',
      unread: 2
    },
    {
      id: 2,
      customer: 'Chioma Nwosu',
      platform: 'Facebook',
      message: 'What are your business hours?',
      time: '15 min ago',
      status: 'responded',
      avatar: '👩🏿',
      unread: 0
    },
    {
      id: 3,
      customer: 'Tunde Ibrahim',
      platform: 'Instagram',
      message: 'Can I get a price quote?',
      time: '1 hour ago',
      status: 'pending',
      avatar: '👨🏿',
      unread: 1
    },
    {
      id: 4,
      customer: 'Fatima Ahmed',
      platform: 'WhatsApp',
      message: 'Thank you for the quick response!',
      time: '2 hours ago',
      status: 'closed',
      avatar: '👩🏿‍🦱',
      unread: 0
    }
  ];

  const automationRules = [
    {
      name: 'Business Hours Auto-Reply',
      trigger: 'After hours message',
      action: 'Send hours + callback offer',
      active: true,
      triggered: 247
    },
    {
      name: 'Product Inquiry',
      trigger: 'Keywords: price, cost, buy',
      action: 'Send product catalog',
      active: true,
      triggered: 532
    },
    {
      name: 'Appointment Booking',
      trigger: 'Keywords: book, appointment',
      action: 'Send calendar link',
      active: true,
      triggered: 189
    },
    {
      name: 'FAQ Responder',
      trigger: 'Common questions',
      action: 'Instant answer from KB',
      active: false,
      triggered: 0
    }
  ];

  const platformStats = [
    { platform: 'WhatsApp', messages: 1842, color: 'bg-green-500', percentage: 65 },
    { platform: 'Facebook', messages: 621, color: 'bg-blue-500', percentage: 22 },
    { platform: 'Instagram', messages: 384, color: 'bg-pink-500', percentage: 13 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'responded': return 'bg-blue-500';
      case 'pending': return 'bg-yellow-500';
      case 'closed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">AI Receptionist</h1>
                <p className="text-sm text-slate-400">Your business, always available</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition">
                <Settings className="w-5 h-5" />
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                BM
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 bg-${stat.color}-500/10 rounded-lg text-${stat.color}-400`}>
                  {stat.icon}
                </div>
                <span className={`text-sm font-semibold ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Conversations */}
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl">
            <div className="p-6 border-b border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">Recent Conversations</h2>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition">
                    <Filter className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="divide-y divide-slate-800">
              {recentConversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedConversation(conv)}
                  className="p-4 hover:bg-slate-800/50 transition cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center text-2xl">
                        {conv.avatar}
                      </div>
                      {conv.unread > 0 && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                          {conv.unread}
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-white font-semibold truncate">{conv.customer}</h3>
                        <span className="text-xs text-slate-400 whitespace-nowrap ml-2">{conv.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs text-slate-400">{conv.platform}</span>
                        <span className={`w-2 h-2 ${getStatusColor(conv.status)} rounded-full`} />
                      </div>
                      <p className="text-sm text-slate-400 truncate">{conv.message}</p>
                    </div>

                    <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-slate-800">
              <button className="w-full py-2 text-blue-400 hover:text-blue-300 font-semibold text-sm">
                View All Conversations →
              </button>
            </div>
          </div>

          {/* Platform Distribution */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Platform Distribution</h2>
            
            <div className="space-y-6 mb-8">
              {platformStats.map((platform, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{platform.platform}</span>
                    <span className="text-slate-400 text-sm">{platform.messages}</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div
                      className={`${platform.color} h-full rounded-full transition-all duration-500`}
                      style={{ width: `${platform.percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{platform.percentage}% of total</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <Zap className="w-10 h-10 text-blue-400" />
                <div>
                  <div className="text-white font-semibold mb-1">98.2% Response Rate</div>
                  <div className="text-xs text-slate-400">Your AI is crushing it! 🚀</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Automation Rules */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl">
          <div className="p-6 border-b border-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">Automation Rules</h2>
                <p className="text-sm text-slate-400">Manage your AI's automatic responses</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">
                + New Rule
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {automationRules.map((rule, i) => (
                <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-white font-semibold">{rule.name}</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={rule.active} />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="text-slate-400">Trigger:</span>
                      <span className="text-slate-300">{rule.trigger}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="text-slate-400">Action:</span>
                      <span className="text-slate-300">{rule.action}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-700">
                    <span className="text-xs text-slate-400">Triggered {rule.triggered}× today</span>
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl hover:border-blue-500/40 transition text-left">
            <Calendar className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="text-white font-semibold mb-1">View Calendar</h3>
            <p className="text-sm text-slate-400">Manage appointments and bookings</p>
          </button>

          <button className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition text-left">
            <Download className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="text-white font-semibold mb-1">Export Report</h3>
            <p className="text-sm text-slate-400">Download conversation analytics</p>
          </button>

          <button className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl hover:border-green-500/40 transition text-left">
            <Users className="w-8 h-8 text-green-400 mb-3" />
            <h3 className="text-white font-semibold mb-1">Manage Leads</h3>
            <p className="text-sm text-slate-400">View and organize your leads</p>
          </button>
        </div>
      </div>
    </div>
  );
}