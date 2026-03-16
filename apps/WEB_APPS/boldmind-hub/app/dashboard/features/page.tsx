// app/dashboard/features/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, TrendingUp, Users, Calendar, BookOpen,
  Globe, PieChart, Target, Clock, DollarSign
} from 'lucide-react';
import { SuperNavbar } from '@boldmind/ui';
import { BOLDMIND_PRODUCTS, calculateTotalMonthlyRevenue } from '@boldmind/utils';
import { Sidebar } from '../Sidebar';

export default function FeaturesPage() {
  const [activeFeature, setActiveFeature] = useState('dashboard');

  const features = [
    {
      id: 'dashboard',
      title: 'Product Ecosystem Dashboard',
      description: 'Real-time overview of all 31+ products',
      icon: LayoutDashboard,
      color: 'blue',
      components: ['Product status grid', 'Revenue waterfall', 'Team allocation', 'Health scores']
    },
    {
      id: 'revenue',
      title: 'Real-time Revenue Tracking',
      description: 'Consolidated financial dashboard across all products',
      icon: TrendingUp,
      color: 'green',
      components: ['Monthly/Annual trends', 'Product contribution', 'Payment integrations', 'Forecasting']
    },
    {
      id: 'team',
      title: 'Team Management Tools',
      description: 'Coordinate your distributed team across products',
      icon: Users,
      color: 'purple',
      components: ['Role-based access', 'Task assignment', 'Performance metrics', 'Communication hub']
    },
    {
      id: 'roadmap',
      title: 'Product Launch Roadmap',
      description: 'Strategic planning for new product releases',
      icon: Calendar,
      color: 'orange',
      components: ['Timeline visualization', 'Resource planning', 'Market analysis', 'Launch checklist']
    },
    {
      id: 'resources',
      title: 'Entrepreneur Resources',
      description: 'Library of tools and knowledge for founders',
      icon: BookOpen,
      color: 'indigo',
      components: ['Documentation', 'Templates', 'Case studies', 'Community forum']
    }
  ];

  const active = features.find(f => f.id === activeFeature)!;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <Sidebar active="features" />

      <div className="flex-1 flex flex-col">
        <SuperNavbar logoSrc="/logo.png" user={{ name: 'Bobby', role: 'Founder' }} links={[
          { href: '/dashboard', label: 'Dashboard' },
          { href: '/dashboard/revenue', label: 'Revenue' },
          { href: '/dashboard/roadmap', label: 'Roadmap' },
        ]} />

        <main className="flex-1 p-6 lg:p-10 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-3xl font-bold tracking-tight">Ecosystem Features</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Five powerful modules to manage your 31+ product portfolio
              </p>
            </motion.div>

            {/* Feature Cards Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {features.map(f => (
                <button
                  key={f.id}
                  onClick={() => setActiveFeature(f.id)}
                  className={`
                    p-6 rounded-2xl border-2 text-left transition-all duration-300
                    ${activeFeature === f.id
                      ? `border-${f.color}-500 bg-gradient-to-br from-${f.color}-600 to-${f.color}-400 text-white shadow-xl scale-[1.03]`
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-900'}
                  `}
                >
                  <f.icon className={`w-9 h-9 mb-4 ${activeFeature === f.id ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`} />
                  <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                  <p className={`text-sm ${activeFeature === f.id ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'}`}>
                    {f.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Active Feature Detail */}
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border shadow-xl p-8"
            >
              <div className="flex items-start gap-5 mb-8">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-${active.color}-500 to-${active.color}-600 flex items-center justify-center flex-shrink-0`}>
                  <active.icon className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{active.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{active.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                {active.components.map((comp, i) => (
                  <div key={i} className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r from-${active.color}-400 to-${active.color}-600`} />
                      <span className="font-medium">{comp}</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Active • Updated recently</p>
                  </div>
                ))}
              </div>

              {/* Placeholder for live preview / demo component */}
              <div className="border-t pt-8 mt-6">
                <h3 className="text-xl font-semibold mb-5">Module Preview</h3>
                <div className="bg-gray-900 text-white p-6 rounded-xl">
                  <p className="text-center text-gray-400 italic py-12">
                    [ Interactive preview / chart / table would appear here ]
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats Footer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
              <QuickStat icon={Globe} label="Products" value={BOLDMIND_PRODUCTS.length.toString()} color="blue" />
              <QuickStat icon={DollarSign} label="Monthly Revenue" value={`₦${calculateTotalMonthlyRevenue().toLocaleString()}`} color="green" />
              <QuickStat icon={Users} label="Team Members" value="47" color="purple" />
              <QuickStat icon={Target} label="Target Achievement" value="83%" color="orange" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// ── Reusable small component ───────────────────────────────────────
function QuickStat({ icon: Icon, label, value, color }: any) {
  return (
    <div className={`
      bg-gradient-to-br from-${color}-50 to-${color}-100 dark:from-${color}-950/30 dark:to-${color}-900/20
      border border-${color}-200 dark:border-${color}-800 rounded-2xl p-6
    `}>
      <div className="flex items-center gap-4">
        <div className={`p-3 bg-${color}-500/10 rounded-xl`}>
          <Icon className={`text-${color}-600 dark:text-${color}-400`} size={24} />
        </div>
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}