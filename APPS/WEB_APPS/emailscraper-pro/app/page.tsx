'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  CheckCircle,
  Download,
  Zap,
  Globe,
  Shield,
  ArrowRight,
  Database,
  Filter,
  Users
} from 'lucide-react';
import Link from 'next/link';
import { SuperNavbar, SuperFooter } from '@boldmind/ui';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  // Navbar Links
  const navLinks = [
    { href: '/#features', label: 'Features', icon: '✨' },
    { href: '/#how-it-works', label: 'How it Works', icon: '⚙️' },
    { href: '/#pricing', label: 'Pricing', icon: '💰' },
    { href: '/login', label: 'Login', icon: '🔐' }, // Direct login link as requested
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white selection:bg-blue-500 selection:text-white">
      {/* Navbar */}
      <SuperNavbar
        logoSrc="/logo.png" // Ensure this path is valid or handled by the component's fallback
        links={navLinks}
        cta={{
          label: 'Get Started',
          href: '/login', // CTA directs to login
          variant: 'glow',
          icon: <Zap className="w-4 h-4" />
        }}
        theme="dark"
        showParticles={true}
        className="border-b border-white/10"
      />

      <main className="pt-20">
        {/* --- HERO SECTION --- */}
        <section className="relative overflow-hidden pt-20 pb-32">
          {/* Background Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                🚀 #1 B2B Lead Gen Tool in Nigeria
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                Find Verified <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Nigerian Business Emails
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                Unlock direct access to decision-makers. Scrape, verify, and export leads instantly with our AI-powered discovery engine built for the Nigerian market.
              </p>

              {/* Search Demo Input */}
              <div className="max-w-3xl mx-auto mb-12 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative flex items-center bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-xl p-2 gap-2 shadow-2xl">
                  <Search className="w-6 h-6 text-gray-500 ml-3" />
                  <input
                    type="text"
                    placeholder="Enter company domain (e.g., paystack.com)"
                    className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 px-2 py-3"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Link href="/login">
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold transition-all flex items-center gap-2">
                      Find Leads <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Stats/Mockup Area */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-16 relative mx-auto max-w-5xl"
            >
              <div className="bg-gray-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-gray-800/50">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="flex-1 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/40 rounded-full text-xs text-gray-500 font-mono">
                      <Shield className="w-3 h-3 text-green-500" />
                      Secure Connection
                    </div>
                  </div>
                </div>

                {/* Simulated Results Table */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-white">Search Results: <span className="text-blue-400">Tech Solutions Ltd</span></h3>
                    <div className="flex gap-3">
                      <button className="text-xs px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded border border-white/10 flex items-center gap-2 transition-colors">
                        <Filter className="w-3 h-3" /> Filter
                      </button>
                      <button className="text-xs px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded border border-blue-500/20 flex items-center gap-2 transition-colors">
                        <Download className="w-3 h-3" /> Export CSV
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all hover:border-blue-500/30">
                        <div className="flex items-center gap-4 mb-3 md:mb-0">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white">
                            {['JD', 'AS', 'MK'][i]}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-white">{['John Doe', 'Sarah Aminu', 'Musa K.'][i]}</h4>
                              <CheckCircle className="w-4 h-4 text-green-500 fill-green-500/20" />
                            </div>
                            <p className="text-sm text-gray-400">
                              {['CTO', 'Head of Marketing', 'Sales Director'][i]} • Tech Solutions Ltd
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
                          <div className="text-right">
                            <p className="text-xs text-gray-500 mb-1">Confidence</p>
                            <div className="flex items-center gap-1.5">
                              <div className="h-1.5 w-16 bg-gray-700 rounded-full overflow-hidden">
                                <div className={`h-full bg-green-500 w-[${[98, 95, 89][i]}%]`} />
                              </div>
                              <span className="text-sm font-mono text-green-400">{[98, 95, 89][i]}%</span>
                            </div>
                          </div>
                          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors">
                            Reveal
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500">
                      + 24 more results found. <Link href="/login" className="text-blue-400 hover:underline">Log in to see all</Link>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- FEATURES GRID --- */}
        <section id="features" className="py-24 bg-black/20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Precision Tools for Growth</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Everything you need to build your ideal prospect list and scale your outreach efforts.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="w-8 h-8 text-blue-400" />,
                  title: 'Domain Search',
                  desc: 'Find all email addresses associated with a specific company domain instantly.'
                },
                {
                  icon: <Users className="w-8 h-8 text-purple-400" />,
                  title: 'Bulk Verification',
                  desc: 'Verify thousands of emails in minutes with our 99% accuracy guarantee.'
                },
                {
                  icon: <Database className="w-8 h-8 text-green-400" />,
                  title: 'Lead Enrichment',
                  desc: 'Get full profiles including job titles, social links, and company details.'
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all group"
                >
                  <div className="p-3 bg-white/5 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PRICING CTA --- */}
        <section id="pricing" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/10" />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6">Start Finding Leads for Free</h2>
            <p className="text-xl text-gray-300 mb-10">
              Get 50 free credits every month. No credit card required. Upgrade as you scale.
            </p>
            <Link href="/login">
              <button className="px-8 py-4 bg-white text-blue-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-2xl hover:shadow-xl hover:-translate-y-1 transform">
                Create Free Account
              </button>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Trusted by over 500+ Nigerian businesses
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SuperFooter
        variant="default"
        product="emailscraper-pro"
        newsletter={true}
        className="border-t border-white/10"
      />
    </div>
  );
}