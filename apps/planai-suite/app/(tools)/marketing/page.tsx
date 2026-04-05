'use client';

import { SuperNavbar, SuperFooter } from '@boldmind/ui';
import { motion } from 'framer-motion';
import {
  Mail, Users, Zap, BarChart, ArrowRight, MessageSquare, Repeat
} from 'lucide-react';
import Link from 'next/link';

export default function MarketingAutomationPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-500/30">

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                  <Zap className="w-4 h-4" />
                  <span>AI-Powered Campaigns</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-slate-900">
                  Automate growth. <br />
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Personalize scale.</span>
                </h1>

                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Engage customers with hyper-personalized email sequences, SMS campaigns, and lead scoring—all on autopilot.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/start" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-all hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-purple-500/25">
                    Start Automating
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/features" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-xl font-semibold transition-all">
                    Explore Features
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-20 relative mx-auto max-w-5xl"
              >
                {/* Automation Flow Visual */}
                <div className="relative">
                  {/* Nodes */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border border-slate-100">
                    <Users className="w-8 h-8 text-slate-600" />
                  </div>
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 h-16 w-0.5 bg-slate-200"></div>

                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 relative z-0">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-8 relative">
                      {/* Connection Lines */}
                      <div className="hidden md:block absolute top-12 left-[20%] w-[60%] border-t-2 border-dashed border-slate-200 -z-10"></div>

                      {[
                        { icon: <Mail className="text-purple-500" />, title: 'Welcome Series', status: 'Active', count: '2,450 sent' },
                        { icon: <Repeat className="text-blue-500" />, title: 'Nurture Flow', status: 'Active', count: '1,200 engaged' },
                        { icon: <MessageSquare className="text-pink-500" />, title: 'Win-back SMS', status: 'paused', count: '850 pending' }
                      ].map((flow, i) => (
                        <div key={i} className="flex-1 bg-slate-50 rounded-xl p-6 w-full relative group hover:shadow-md transition-shadow">
                          <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4">
                            {flow.icon}
                          </div>
                          <div className="font-bold text-slate-900 mb-1">{flow.title}</div>
                          <div className="flex items-center justify-between text-xs">
                            <span className={`px-2 py-0.5 rounded-full ${flow.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-600'}`}>
                              {flow.status}
                            </span>
                            <span className="text-slate-500">{flow.count}</span>
                          </div>
                          {/* Animated Dot */}
                          {flow.status === 'Active' && (
                            <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: '300%', label: 'Increase in Engagement' },
                { value: '20hrs', label: 'Saved per Week' },
                { value: '2.5x', label: 'Higher Conversion Rate' }
              ].map((stat, i) => (
                <div key={i} className="text-center p-8">
                  <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">{stat.value}</div>
                  <div className="text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SuperFooter product="marketing-automation" />
    </div>
  );
}