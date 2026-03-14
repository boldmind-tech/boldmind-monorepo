'use client';

import { SuperNavbar, SuperFooter } from '@boldmind/ui';
import { motion } from 'framer-motion';
import {
  BarChart, Activity, TrendingUp, Zap, ArrowRight, CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import logo from '../public/logo.png';

export default function AnalyticsLandingPage() {
  const features = [
    {
      title: 'Real-time Analytics',
      description: 'Monitor your business performance as it happens with live data streams.',
      icon: <Activity className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Custom Dashboards',
      description: 'Create personalized views that matter most to your specific role.',
      icon: <BarChart className="w-6 h-6 text-emerald-500" />
    },
    {
      title: 'Predictive Insights',
      description: 'AI-driven forecasting to help you make smarter decisions ahead of time.',
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-purple-500/30">
      <SuperNavbar
        logoSrc={logo.src}
      />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-slate-950 to-slate-950" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-1 text-center lg:text-left"
              >
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                  <Zap className="w-4 h-4" />
                  <span>Now in Beta Access</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Intelligence for <br />
                  <span className="text-purple-400">Modern Business</span>
                </h1>

                <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Unify your data, uncover hidden trends, and drive growth with the most advanced analytics platform built for Nigerian enterprises.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <Link href="/register" className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-semibold transition-all hover:scale-105 flex items-center gap-2">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/demo" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all border border-slate-700">
                    View Demo
                  </Link>
                </div>

                <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-slate-500 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>14-day free trial</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex-1 relative"
              >
                <div className="relative z-10 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
                  {/* Abstract Chart Visualization */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-800/50 p-4 rounded-xl">
                      <div className="text-slate-400 text-xs mb-2">Total Revenue</div>
                      <div className="text-2xl font-bold text-white mb-2">₦42.5M</div>
                      <div className="h-10 bg-gradient-to-r from-purple-500/20 to-transparent rounded-lg relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-full bg-purple-500/20 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-xl">
                      <div className="text-slate-400 text-xs mb-2">Active Users</div>
                      <div className="text-2xl font-bold text-white mb-2">2,841</div>
                      <div className="h-10 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-lg relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-full bg-emerald-500/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-xl h-48 flex items-end gap-2">
                    {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                      <div key={i} className="flex-1 bg-purple-500/20 rounded-t-lg relative group overflow-hidden" style={{ height: `${h}%` }}>
                        <div className="absolute bottom-0 left-0 w-full bg-purple-500 h-0 transition-all duration-1000 group-hover:h-full" style={{ height: `${h}%` }}></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-emerald-600/20 rounded-full blur-3xl -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-6 bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Everything you need to grow</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive tools designed to give you complete control over your business data.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-purple-500/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SuperFooter product="analytics-dashboard" logoSrc={logo.src} />
    </div>
  );
}