'use client';

import { SuperNavbar, SuperFooter } from '@boldmind/ui';
import { motion } from 'framer-motion';
import {
  TrendingUp, CircleDollarSign, LineChart, PieChart, ArrowRight, ShieldCheck, Calculator
} from 'lucide-react';
import Link from 'next/link';
import logo from '../public/logo.png';

export default function FinanceLandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-500/30">
      <SuperNavbar theme="light" logoSrc={logo.src} />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                  <Calculator className="w-4 h-4" />
                  <span>Automated Financial Modeling</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-slate-900">
                  Predict your financial <br />
                  <span className="text-emerald-600">future with AI.</span>
                </h1>

                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Stop guessing. Start knowing. Generate accurate cashflow projections, revenue forecasts, and scenario analyses in minutes.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/forecast" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-emerald-500/25">
                    Start Forecasting
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/pricing" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-xl font-semibold transition-all">
                    View Pricing
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-16 relative mx-auto max-w-5xl"
              >
                <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 p-2 overflow-hidden">
                  <div className="bg-slate-900 rounded-xl overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-purple-500 to-blue-500"></div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { label: 'Projected Revenue (2026)', value: '₦145.2M', change: '+24%', color: 'text-emerald-400' },
                        { label: 'Operating Margin', value: '32.5%', change: '+5%', color: 'text-blue-400' },
                        { label: 'Burn Rate', value: '₦2.1M/mo', change: '-12%', color: 'text-emerald-400' }
                      ].map((stat, i) => (
                        <div key={i} className="bg-slate-800/50 p-4 rounded-lg">
                          <div className="text-slate-400 text-sm mb-1">{stat.label}</div>
                          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                          <div className={`text-sm ${stat.color} flex items-center gap-1`}>
                            <TrendingUp className="w-3 h-3" />
                            {stat.change} vs last year
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="h-64 bg-slate-800/30 p-6 flex items-end justify-between gap-2">
                      {[30, 45, 35, 60, 50, 75, 65, 90, 80, 100, 95, 110].map((h, i) => (
                        <div key={i} className="w-full bg-emerald-500/20 rounded-t hover:bg-emerald-500/40 transition-colors relative group" style={{ height: `${h * 0.8}%` }}>
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Month {i + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Scenario Planning', icon: <LineChart className="text-blue-500" />, desc: 'Simulate "Best Case", "Worst Case", and "Likely" financial outcomes.' },
                { title: 'Cashflow Management', icon: <CircleDollarSign className="text-emerald-500" />, desc: 'Track inflows and outflows to avoid liquidity crunches.' },
                { title: 'Bank-Ready Reports', icon: <ShieldCheck className="text-purple-500" />, desc: 'Export compliant financial statements for loans and investors.' }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SuperFooter product="financial-forecasting" />
    </div>
  );
}