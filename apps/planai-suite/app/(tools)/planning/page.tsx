'use client';

import { SuperNavbar, SuperFooter } from '@boldmind/ui';
import { motion } from 'framer-motion';
import {
  FileText, TrendingUp, Target, Rocket, ArrowRight, Check
} from 'lucide-react';
import Link from 'next/link';

export default function BusinessPlanningPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-500/30">
      <SuperNavbar theme="light" logoSrc="/logo.png" />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-slate-50">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-1"
              >
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
                  <Rocket className="w-4 h-4" />
                  <span>For Startups & SMEs</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-slate-900 leading-tight">
                  Turn your vision into <br />
                  <span className="text-indigo-600">a viable strategy.</span>
                </h1>

                <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
                  Generate comprehensive, investor-ready business plans in minutes. Powered by AI trained on Nigerian market data.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link href="/start" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-indigo-500/25">
                    Create Business Plan
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/samples" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-xl font-semibold transition-all">
                    View Samples
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-500">
                  {['Export to PDF/Word', 'Nigerian Market Data', 'Financial Models'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex-1 relative"
              >
                <div className="relative z-10 bg-white rounded-2xl shadow-xl border border-slate-200 p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">Strategic Plan 2026</div>
                          <div className="text-xs text-slate-500">Generated 2 mins ago</div>
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                        Ready for Export
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        { title: 'Executive Summary', width: 'w-full' },
                        { title: 'Market Analysis', width: 'w-3/4' },
                        { title: 'Financial Projections', width: 'w-5/6' },
                        { title: 'Marketing Strategy', width: 'w-4/5' }
                      ].map((section, i) => (
                        <div key={i} className="group cursor-pointer">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-slate-700">{section.title}</span>
                            <Check className="w-3 h-3 text-emerald-500" />
                          </div>
                          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-full bg-indigo-500 rounded-full ${section.width} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                          </div>
                          <div className="mt-2 space-y-1">
                            <div className="h-1.5 bg-slate-100 rounded w-full"></div>
                            <div className="h-1.5 bg-slate-100 rounded w-2/3"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Stack Effect */}
                <div className="absolute top-4 left-4 w-full h-full bg-slate-900/5 rounded-2xl -z-10 transform rotate-2"></div>
                <div className="absolute top-8 left-8 w-full h-full bg-slate-900/5 rounded-2xl -z-20 transform rotate-3"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">How it works</h2>
              <p className="text-slate-500">From idea to execution in three simple steps</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: <Target />, title: '1. Define Vision', desc: 'Answer simple questions about your business goals and target market.' },
                { icon: <FileText />, title: '2. Generate Plan', desc: 'Our AI drafts a comprehensive business plan tailored to your industry.' },
                { icon: <TrendingUp />, title: '3. Download & Pitch', desc: 'Export as professional PDF or editable Word document.' }
              ].map((step, i) => (
                <div key={i} className="text-center relative">
                  <div className="w-16 h-16 mx-auto bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed max-w-xs mx-auto">
                    {step.desc}
                  </p>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-slate-200 -z-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SuperFooter product="business-planning" />
    </div>
  );
}