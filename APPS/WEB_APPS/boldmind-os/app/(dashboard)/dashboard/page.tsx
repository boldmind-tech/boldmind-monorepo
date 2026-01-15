// apps/web/boldmind-os/app/(dashboard)/dashboard/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SuperNavbar } from '@boldmind/ui';
import {
  Brain,
  Zap,
  Target,
  Link2,
  Sparkles,
  BarChart3,
  Calendar,
  Clock,
  CheckCircle,
  TrendingUp,
  Activity,
  Award,
  Settings,
  LogOut,
} from 'lucide-react';

export default function BoldMindOSDashboard() {
  const [selectedBrain, setSelectedBrain] = useState<string | null>(null);

  const navLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: <Activity className="w-4 h-4" /> },
    { href: '/capture', label: 'Capture', icon: <Brain className="w-4 h-4" />, badge: '3' },
    { href: '/focus', label: 'Focus', icon: <Target className="w-4 h-4" /> },
    { href: '/connect', label: 'Connect', icon: <Link2 className="w-4 h-4" /> },
    { href: '/create', label: 'Create', icon: <Sparkles className="w-4 h-4" /> },
    { href: '/reflect', label: 'Reflect', icon: <BarChart3 className="w-4 h-4" /> },
  ];

  const brains = [
    {
      id: 'capture',
      name: 'Capture Brain',
      icon: Brain,
      description: 'Quick capture for all your thoughts and ideas',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      stats: { captured: 47, thisWeek: 12 },
      link: '/capture',
    },
    {
      id: 'focus',
      name: 'Focus Brain',
      icon: Zap,
      description: 'Pomodoro timer and deep work sessions',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      stats: { sessions: 23, hours: 42 },
      link: '/focus',
    },
    {
      id: 'connect',
      name: 'Connect Brain',
      icon: Link2,
      description: 'Build your knowledge graph and connections',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      stats: { nodes: 156, connections: 234 },
      link: '/connect',
    },
    {
      id: 'create',
      name: 'Create Brain',
      icon: Sparkles,
      description: 'Transform ideas into content',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      stats: { created: 34, published: 28 },
      link: '/create',
    },
    {
      id: 'reflect',
      name: 'Reflect Brain',
      icon: BarChart3,
      description: 'Analytics and insights on your productivity',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      stats: { streak: 14, productivity: '87%' },
      link: '/reflect',
    },
  ];

  const todaysTasks = [
    { id: 1, title: 'Review Q4 financials', priority: 'high', completed: false, brain: 'capture' },
    { id: 2, title: 'Write blog post on productivity', priority: 'medium', completed: true, brain: 'create' },
    { id: 3, title: 'Team standup meeting', priority: 'high', completed: true, brain: 'focus' },
    { id: 4, title: 'Update knowledge graph', priority: 'low', completed: false, brain: 'connect' },
    { id: 5, title: 'Review weekly analytics', priority: 'medium', completed: false, brain: 'reflect' },
  ];

  const recentActivity = [
    { type: 'capture', action: 'Captured new idea', time: '5 min ago', icon: Brain },
    { type: 'focus', action: 'Completed 25min session', time: '1 hour ago', icon: Zap },
    { type: 'create', action: 'Published new article', time: '2 hours ago', icon: Sparkles },
    { type: 'connect', action: 'Added 3 new connections', time: '3 hours ago', icon: Link2 },
  ];

  const stats = [
    { label: 'Productivity Score', value: '87%', change: '+12%', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Tasks Completed', value: '142', change: '+23', icon: CheckCircle, color: 'text-blue-600' },
    { label: 'Focus Hours', value: '42h', change: '+8h', icon: Clock, color: 'text-purple-600' },
    { label: 'Current Streak', value: '14 days', change: '+2', icon: Award, color: 'text-orange-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SuperNavbar
        links={navLinks}
        cta={{ href: '/settings', label: 'Settings', icon: <Settings className="w-4 h-4" /> }}
        logoSrc="/logo.png"
        theme="light"
               onLinkClick={() => { window.open('https://wa.me/2349138349271', '_blank') }}

      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-[#00143C] mb-2">
                Welcome back! 👋
              </h1>
              <p className="text-xl text-gray-600">
                Here's your productivity overview for today
              </p>
            </div>
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-xl transition-all"
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                {new Date().toLocaleDateString('en-NG', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </motion.button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                    stat.color === 'text-green-600' ? 'from-green-500 to-emerald-500' :
                    stat.color === 'text-blue-600' ? 'from-blue-500 to-cyan-500' :
                    stat.color === 'text-purple-600' ? 'from-purple-500 to-pink-500' :
                    'from-orange-500 to-red-500'
                  } flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-sm font-bold ${stat.color}`}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-3xl font-black text-[#00143C] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 5 Brains Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-black text-[#00143C] mb-6">
            Your 5 Brains
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brains.map((brain, index) => (
              <motion.a
                key={brain.id}
                href={brain.link}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onMouseEnter={() => setSelectedBrain(brain.id)}
                onMouseLeave={() => setSelectedBrain(null)}
                className={`${brain.bgColor} p-8 rounded-3xl border-2 ${
                  selectedBrain === brain.id ? 'border-blue-500 shadow-2xl' : 'border-gray-200'
                } transition-all cursor-pointer group`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${brain.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <brain.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-black text-[#00143C] mb-3">{brain.name}</h3>
                <p className="text-gray-600 mb-6">{brain.description}</p>
                
                <div className="flex items-center gap-6 text-sm">
                  {Object.entries(brain.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="font-black text-[#00143C] text-lg">{value}</div>
                      <div className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Today's Tasks & Activity */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Today's Tasks */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-3xl border-2 border-gray-200"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-[#00143C]">Today's Tasks</h2>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 font-bold rounded-full text-sm">
                {todaysTasks.filter(t => !t.completed).length} remaining
              </span>
            </div>
            
            <div className="space-y-4">
              {todaysTasks.map((task, index) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-center gap-4 p-4 rounded-xl ${
                    task.completed ? 'bg-gray-50 opacity-60' : 'bg-white border-2 border-gray-200'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                      task.completed 
                        ? 'bg-green-500 border-green-500' 
                        : 'border-gray-300 hover:border-blue-500'
                    }`}
                  >
                    {task.completed && <CheckCircle className="w-5 h-5 text-white" />}
                  </div>
                  
                  <div className="flex-1">
                    <div className={`font-bold ${task.completed ? 'line-through text-gray-500' : 'text-[#00143C]'}`}>
                      {task.title}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        task.priority === 'high' ? 'bg-red-100 text-red-700' :
                        task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {task.priority}
                      </span>
                      <span className="text-xs text-gray-500 capitalize">{task.brain}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 font-bold hover:border-blue-500 hover:text-blue-500 transition-colors">
              + Add New Task
            </button>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-3xl border-2 border-gray-200"
          >
            <h2 className="text-2xl font-black text-[#00143C] mb-6">Recent Activity</h2>
            
            <div className="space-y-6">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <activity.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-[#00143C]">{activity.action}</div>
                    <div className="text-sm text-gray-500">{activity.time}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-blue-600" />
                <span className="font-black text-[#00143C]">Achievement Unlocked!</span>
              </div>
              <p className="text-gray-700">
                🎉 You've maintained a 14-day streak! Keep up the great work.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-[#00143C] to-[#2A4A6E] p-12 rounded-3xl text-white text-center"
        >
          <h2 className="text-3xl font-black mb-4">Ready to be productive?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose a brain to start your focused work session
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {brains.slice(0, 3).map((brain) => (
              <motion.a
                key={brain.id}
                href={brain.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 border-2 border-white/20 rounded-lg font-bold hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <brain.icon className="w-5 h-5" />
                {brain.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}