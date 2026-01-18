'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  TrendingUp,
  Users,
  Calendar,
  BookOpen,
  Globe,
  PieChart,
  Target,
  Clock,
  DollarSign
} from 'lucide-react';
import { SuperNavbar } from '@boldmind/ui';
import { BOLDMIND_PRODUCTS, calculateTotalMonthlyRevenue } from '@boldmind/utils';

export default function EcosystemFeatures() {
  const [activeFeature, setActiveFeature] = useState('dashboard');

  const features = [
    {
      id: 'dashboard',
      title: 'Product Ecosystem Dashboard',
      description: 'Real-time overview of all 31+ products',
      icon: LayoutDashboard,
      color: 'from-blue-500 to-cyan-500',
      components: ['Product status grid', 'Revenue waterfall', 'Team allocation', 'Health scores']
    },
    {
      id: 'revenue',
      title: 'Real-time Revenue Tracking',
      description: 'Consolidated financial dashboard across all products',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      components: ['Monthly/Annual trends', 'Product contribution', 'Payment integrations', 'Forecasting']
    },
    {
      id: 'team',
      title: 'Team Management Tools',
      description: 'Coordinate your distributed team across products',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      components: ['Role-based access', 'Task assignment', 'Performance metrics', 'Communication hub']
    },
    {
      id: 'roadmap',
      title: 'Product Launch Roadmap',
      description: 'Strategic planning for new product releases',
      icon: Calendar,
      color: 'from-orange-500 to-red-500',
      components: ['Timeline visualization', 'Resource planning', 'Market analysis', 'Launch checklist']
    },
    {
      id: 'resources',
      title: 'Entrepreneur Resources',
      description: 'Library of tools and knowledge for founders',
      icon: BookOpen,
      color: 'from-indigo-500 to-violet-500',
      components: ['Documentation', 'Templates', 'Case studies', 'Community forum']
    }
  ];

  const activeFeatureData = features.find(f => f.id === activeFeature);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SuperNavbar
        logoSrc="/logo.png"
        links={[
          { href: '/dashboard', label: 'Main Dashboard', icon: '📊' },
          { href: '/dashboard/features', label: 'Features', icon: '✨' },
          { href: '/dashboard/analytics', label: 'Analytics', icon: '📈' },
          { href: '/dashboard/team', label: 'Team', icon: '👥' },
        ]}
        cta={{ href: '/dashboard/settings', label: 'Customize', icon: '⚙️' }}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ecosystem Management Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five powerful features to manage your 31+ product portfolio
          </p>
        </div>

        {/* Feature Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`p-6 rounded-xl border-2 transition-all text-left ${
                activeFeature === feature.id
                  ? `border-blue-500 bg-gradient-to-br ${feature.color} text-white`
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <feature.icon className={`w-8 h-8 mb-4 ${
                activeFeature === feature.id ? 'text-white' : 'text-gray-700'
              }`} />
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className={`text-sm ${
                activeFeature === feature.id ? 'text-white/90' : 'text-gray-600'
              }`}>
                {feature.description}
              </p>
            </button>
          ))}
        </div>

        {/* Active Feature Display */}
        {activeFeatureData && (
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${activeFeatureData.color} flex items-center justify-center`}>
                <activeFeatureData.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{activeFeatureData.title}</h2>
                <p className="text-gray-600">{activeFeatureData.description}</p>
              </div>
            </div>

            {/* Feature Components */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {activeFeatureData.components.map((component, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeFeatureData.color}`} />
                    <span className="font-medium">{component}</span>
                  </div>
                  <p className="text-sm text-gray-600">Active • Updated today</p>
                </div>
              ))}
            </div>

            {/* Live Demo */}
            <div className="border-t pt-8">
              <h3 className="text-lg font-bold mb-4">Live Preview</h3>
              {activeFeature === 'dashboard' && <EcosystemDashboardPreview />}
              {activeFeature === 'revenue' && <RevenueTrackingPreview />}
              {activeFeature === 'team' && <TeamManagementPreview />}
              {activeFeature === 'roadmap' && <RoadmapPreview />}
              {activeFeature === 'resources' && <ResourcesPreview />}
            </div>
          </motion.div>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow border">
            <div className="flex items-center gap-4">
              <Globe className="w-10 h-10 text-blue-500" />
              <div>
                <div className="text-2xl font-bold">{BOLDMIND_PRODUCTS.length}</div>
                <div className="text-gray-600">Total Products</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border">
            <div className="flex items-center gap-4">
              <DollarSign className="w-10 h-10 text-green-500" />
              <div>
                <div className="text-2xl font-bold">₦{calculateTotalMonthlyRevenue().toLocaleString()}</div>
                <div className="text-gray-600">Monthly Revenue</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border">
            <div className="flex items-center gap-4">
              <Users className="w-10 h-10 text-purple-500" />
              <div>
                <div className="text-2xl font-bold">47</div>
                <div className="text-gray-600">Team Members</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border">
            <div className="flex items-center gap-4">
              <Target className="w-10 h-10 text-orange-500" />
              <div>
                <div className="text-2xl font-bold">83%</div>
                <div className="text-gray-600">Target Achievement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EcosystemDashboardPreview() {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold">Live Ecosystem Dashboard</h4>
        <span className="text-green-400 text-sm">🟢 Live</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {['LIVE', 'BUILDING', 'PLANNED'].map((status) => (
          <div key={status} className="p-4 bg-gray-800 rounded-lg">
            <div className="text-2xl font-bold mb-2">
              {BOLDMIND_PRODUCTS.filter(p => p.status === status).length}
            </div>
            <div className="text-gray-400">{status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RevenueTrackingPreview() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span>AmeboGist</span>
        <span className="font-bold">₦15,000</span>
      </div>
      <div className="flex justify-between items-center">
        <span>EduCenter</span>
        <span className="font-bold">₦60,000</span>
      </div>
      <div className="flex justify-between items-center">
        <span>PlanAI Receptionist</span>
        <span className="font-bold">₦20,000</span>
      </div>
    </div>
  );
}

function TeamManagementPreview() {
  const teamMembers = [
    { name: 'Charles Chijuka', role: 'Founder', products: 31, avatar: '👑' },
    { name: 'Design Team', role: 'UI/UX', products: 12, avatar: '🎨' },
    { name: 'Dev Team', role: 'Engineering', products: 25, avatar: '💻' },
    { name: 'Content Team', role: 'Marketing', products: 8, avatar: '📝' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold">Team Allocation</h4>
        <span className="text-sm text-gray-500">4 teams • 31 products</span>
      </div>
      
      <div className="space-y-3">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-lg">{member.avatar}</span>
              </div>
              <div>
                <div className="font-medium">{member.name}</div>
                <div className="text-sm text-gray-500">{member.role}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold">{member.products}</div>
              <div className="text-sm text-gray-500">products</div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full py-2 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400">
        + Add Team Member
      </button>
    </div>
  );
}

function RoadmapPreview() {
  const upcomingLaunches = [
    { product: 'EmailScraper Pro', date: 'Q2 2026', status: 'building', progress: 60 },
    { product: 'Naija FitHer', date: 'Q2 2026', status: 'building', progress: 40 },
    { product: 'PlanAI Suite', date: 'Q3 2026', status: 'planned', progress: 20 },
    { product: 'SAFE AI', date: 'Q4 2026', status: 'concept', progress: 10 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold">Product Launch Timeline</h4>
        <span className="text-sm text-blue-600">View Full Roadmap →</span>
      </div>
      
      <div className="space-y-4">
        {upcomingLaunches.map((launch, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="font-medium">{launch.product}</span>
                <span className={`px-2 py-1 rounded text-xs ${
                  launch.status === 'building' ? 'bg-yellow-100 text-yellow-800' :
                  launch.status === 'planned' ? 'bg-blue-100 text-blue-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {launch.status}
                </span>
              </div>
              <span className="text-sm text-gray-500">{launch.date}</span>
            </div>
            
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 rounded-full"
                style={{ width: `${launch.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-4 border-t">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>Building: 8 products</span>
          <span className="w-2 h-2 bg-blue-500 rounded-full ml-4"></span>
          <span>Planned: 15 products</span>
          <span className="w-2 h-2 bg-purple-500 rounded-full ml-4"></span>
          <span>Concept: 8 products</span>
        </div>
      </div>
    </div>
  );
}

function ResourcesPreview() {
  const resources = [
    { title: 'Product Launch Template', type: '📋 Template', downloads: 128 },
    { title: 'Funding Pitch Deck', type: '📊 Presentation', downloads: 89 },
    { title: 'SaaS Pricing Guide', type: '📚 Guide', downloads: 256 },
    { title: 'Growth Hacking Case Study', type: '📈 Case Study', downloads: 73 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold">Entrepreneur Resources</h4>
        <span className="text-sm text-blue-600">Browse Library →</span>
      </div>
      
      <div className="space-y-3">
        {resources.map((resource, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
            <div>
              <div className="font-medium">{resource.title}</div>
              <div className="text-sm text-gray-500">{resource.type}</div>
            </div>
            <div className="text-right">
              <div className="font-bold">{resource.downloads}</div>
              <div className="text-sm text-gray-500">downloads</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-4 border-t">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">42</div>
            <div className="text-sm text-gray-600">Templates</div>
          </div>
          <div>
            <div className="text-2xl font-bold">18</div>
            <div className="text-sm text-gray-600">Case Studies</div>
          </div>
          <div>
            <div className="text-2xl font-bold">7</div>
            <div className="text-sm text-gray-600">Courses</div>
          </div>
        </div>
      </div>
    </div>
  );
}