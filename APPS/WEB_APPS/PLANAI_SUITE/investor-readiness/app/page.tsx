'use client';

import { SuperNavbar, SuperFooter } from '@boldmind/ui';
import { motion } from 'framer-motion';
import {
  Briefcase, ShieldCheck, FileText, PieChart, ArrowRight, Lock, Users
} from 'lucide-react';
import Link from 'next/link';
import logo from '../public/logo.png';

export default function InvestorReadinessPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-500/30">
      <SuperNavbar theme="light" logoSrc={logo.src} />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-6">
                  <Lock className="w-4 h-4" />
                  <span>Secure Data Room Included</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-slate-900">
                  Fundraise with <br />
                  <span className="text-amber-500">absolute confidence.</span>
                </h1>

                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                  Organize your due diligence, generate SAFE agreements, and manage your cap table in one secure platform.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link href="/start" className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition-all hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-amber-500/25">
                    Start Fundraising
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/investors" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-xl font-semibold transition-all">
                    For Investors
                  </Link>
                </div>

                <div className="mt-8 flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                        {i === 4 ? '+500' : ''}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-slate-500">
                    <span className="font-bold text-slate-900">₦2.5B+</span> raised by startups using PlanAI
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 bg-slate-900 rounded-2xl shadow-2xl p-8 border border-slate-800">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">Series A Round</div>
                        <div className="text-slate-400 text-sm">Target: $2,000,000</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-400 font-bold text-lg">75% Committed</div>
                      <div className="text-slate-500 text-xs">Closing in 14 days</div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="bg-slate-800 p-4 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="text-slate-400 w-5 h-5" />
                        <span className="text-slate-200">Term Sheet.pdf</span>
                      </div>
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded">Signed</span>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <PieChart className="text-slate-400 w-5 h-5" />
                        <span className="text-slate-200">Cap Table Layout</span>
                      </div>
                      <span className="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs rounded">Reviewing</span>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <ShieldCheck className="text-slate-400 w-5 h-5" />
                        <span className="text-slate-200">IP Assessment</span>
                      </div>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">Verified</span>
                    </div>
                  </div>

                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-amber-500 to-orange-500"></div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl -z-10"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Due Diligence Checklist', icon: <ShieldCheck className="text-blue-500" />, desc: 'Automated checklist to ensure you have every document investors expect.' },
                { title: 'Cap Table Management', icon: <PieChart className="text-purple-500" />, desc: 'Real-time equity management that updates as you raise funds.' },
                { title: 'Data Room', icon: <Lock className="text-amber-500" />, desc: 'Bank-grade security for sharing sensitive documents with investors.' }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
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

      <SuperFooter product="investor-readiness" />
    </div>
  );
}