'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Video,
  Calendar,
  TrendingUp,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Sparkles,
  Bot,
  Play,
  Clock,
  ArrowRight,
  CheckCircle,
  Wand2,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { SuperNavbar, SuperFooter } from '@boldmind/ui';

export default function Home() {
  const [activePlatform, setActivePlatform] = useState('all');

  const navLinks = [
    { href: '/#features', label: 'Features', icon: '✨' },
    { href: '/#platforms', label: 'Platforms', icon: '🌐' },
    { href: '/#pricing', label: 'Pricing', icon: '💰' },
    { href: '/login', label: 'Access Studio', icon: '🔐' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-purple-500 selection:text-white font-sans">
      <SuperNavbar
        logoSrc="/logo.png"
        links={navLinks}
        cta={{
          label: 'Generate Video',
          href: '/login',
          variant: 'glow',
          icon: <Wand2 className="w-4 h-4" />,
        }}
        theme="dark"
        showParticles={true}
        className="border-b border-white/5 bg-gray-950/80 backdrop-blur-xl"
      />

      <main className="pt-20">
        {/* --- HERO SECTION --- */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          {/* Dynamic Background */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-bold mb-8 animate-fade-in-up">
                <Bot className="w-4 h-4" />
                AI-Powered Content Creation
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                Turn Ideas into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                  Viral Videos Instantly
                </span> 🚀
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                The world's first AI Content Factory. Generate, Edit, Schedule, and Post content across all social platforms in seconds.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/login" className="w-full sm:w-auto">
                  <button className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-lg font-bold hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-3">
                    <Sparkles className="w-5 h-5 fill-white" />
                    Start Creating Free
                  </button>
                </Link>
                <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl text-lg font-bold hover:bg-white/10 hover:border-purple-500/30 transition-all flex items-center justify-center gap-3">
                  <Play className="w-5 h-5 fill-current" />
                  Watch Demo
                </button>
              </div>
            </motion.div>

            {/* Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, type: "spring" }}
              className="mt-20 relative mx-auto max-w-5xl"
            >
              <div className="relative bg-gray-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/10 group">
                {/* Fake UI Header */}
                <div className="h-12 bg-gray-800/50 border-b border-white/10 flex items-center justify-between px-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 h-2 bg-white/10 rounded-full" />
                    <div className="w-8 h-8 rounded-full bg-purple-500/20" />
                  </div>
                </div>

                <div className="p-8 grid md:grid-cols-12 gap-6 bg-gray-900/95 backdrop-blur">
                  {/* Sidebar */}
                  <div className="hidden md:block col-span-2 space-y-4">
                    {[Wand2, Calendar, TrendingUp, Users].map((Icon, i) => (
                      <div key={i} className={`h-10 w-10 flex items-center justify-center rounded-lg ${i === 0 ? 'bg-purple-600 text-white' : 'text-gray-500 hover:bg-white/5'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    ))}
                  </div>

                  {/* Main Content Area */}
                  <div className="col-span-12 md:col-span-6 bg-black/40 rounded-xl p-4 border border-white/5">
                    <div className="aspect-video bg-gray-800 rounded-lg mb-4 relative overflow-hidden group/video">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 fill-white text-white ml-1" />
                        </div>
                      </div>
                      {/* Floating Elements on Video */}
                      <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded text-xs font-mono">00:59</div>
                      <div className="absolute bottom-2 left-2 flex gap-1">
                        <span className="w-1 h-3 bg-purple-500 rounded-full animate-pulse" />
                        <span className="w-1 h-5 bg-purple-500 rounded-full animate-pulse delay-75" />
                        <span className="w-1 h-2 bg-purple-500 rounded-full animate-pulse delay-150" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 w-3/4 bg-white/10 rounded" />
                      <div className="h-4 w-1/2 bg-white/10 rounded" />
                    </div>
                  </div>

                  {/* Right Panel */}
                  <div className="col-span-12 md:col-span-4 space-y-4">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                      <h4 className="text-sm font-bold text-gray-400 mb-3">AI Suggestions</h4>
                      <div className="space-y-2">
                        {['Add energetic intro music', 'Generate subtitles', 'Auto-crop for TikTok'].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-300 p-2 bg-white/5 rounded cursor-pointer hover:bg-purple-500/20 transition-colors">
                            <Sparkles className="w-3 h-3 text-purple-400" /> {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-sm font-bold hover:shadow-lg transition-all">
                      Generate Variations
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- STATS GRID --- */}
        <section className="py-12 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '1.2M+', label: 'Videos Generated', icon: <Video className="w-5 h-5" />, color: 'text-purple-400' },
              { value: '89%', label: 'Avg. Engagement', icon: <TrendingUp className="w-5 h-5" />, color: 'text-green-400' },
              { value: '324k', label: 'Hours Saved', icon: <Clock className="w-5 h-5" />, color: 'text-blue-400' },
              { value: '500+', label: 'Happy Brands', icon: <Users className="w-5 h-5" />, color: 'text-pink-400' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className={`flex items-center justify-center gap-2 mb-2 group-hover:scale-110 transition-transform ${stat.color}`}>
                  {stat.icon}
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{stat.label}</span>
                </div>
                <div className="text-4xl md:text-5xl font-black text-white">{stat.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* --- PLATFORMS SECTION --- */}
        <section id="platforms" className="py-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-12">Create Once, Post Everywhere</h2>

            {/* Platform Tabs */}
            <div className="flex justify-center mb-16 overflow-x-auto pb-4 scrollbar-hide">
              <div className="inline-flex bg-white/5 rounded-2xl p-2 border border-white/10">
                {[
                  { id: 'all', label: 'All Platforms', icon: null },
                  { id: 'youtube', label: 'YouTube', icon: Youtube, color: 'text-red-500' },
                  { id: 'instagram', label: 'Instagram', icon: Instagram, color: 'text-pink-500' },
                  { id: 'facebook', label: 'Facebook', icon: Facebook, color: 'text-blue-500' },
                  { id: 'twitter', label: 'Twitter', icon: Twitter, color: 'text-sky-400' }
                ].map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => setActivePlatform(platform.id)}
                    className={`px-6 py-3 rounded-xl flex items-center gap-2 transition-all font-medium whitespace-nowrap ${activePlatform === platform.id
                      ? 'bg-white text-gray-900 shadow-lg scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {platform.icon && <platform.icon className={`w-4 h-4 ${activePlatform === platform.id ? platform.color : ''}`} />}
                    {platform.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {[
                { title: 'YouTube Shorts', desc: 'Auto-captioned vertical videos optimized for retention.', icon: Youtube },
                { title: 'Instagram Reels', desc: 'Trendy editing styles with popular audio integration.', icon: Instagram },
                { title: 'Twitter Media', desc: 'High-engagement clips perfectly sized for the feed.', icon: Twitter },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FEATURES CTA --- */}
        <section id="features" className="py-24 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2">
                <span className="text-purple-400 font-bold uppercase tracking-widest text-sm mb-2 block">AI Magic</span>
                <h2 className="text-4xl md:text-5xl font-black mb-6">Stop Editing. Start Creating.</h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Our AI analyzes your raw footage, picks the best moments, adds captions, transitions, and music automatically. What took hours now takes minutes.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Auto-Correction & Color Grading',
                    'Smart Silence Removal',
                    'Multi-Language Subtitles',
                    'Copyright-Safe Music Library'
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-200">{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/login">
                  <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 flex items-center gap-2">
                    Generate Your First Video <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-[100px] opacity-20" />
                <div className="relative bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80" alt="Video Timeline" className="w-full opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center animate-pulse">
                      <Wand2 className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PRICING CTA --- */}
        <section className="py-32 text-center">
          <h2 className="text-4xl font-black mb-8">Ready to go viral?</h2>
          <Link href="/login">
            <button className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xl font-black hover:shadow-2xl hover:scale-105 transition-all shadow-[0_0_50px_rgba(168,85,247,0.4)]">
              Create Free Account
            </button>
          </Link>
          <p className="mt-6 text-gray-500 text-sm">No credit card required • 10 videos/month free</p>
        </section>
      </main>

      {/* Footer */}
      <SuperFooter
        variant="default"
        product="social-factory"
        className="bg-black border-t border-white/10"
        newsletter={true}
      />
    </div>
  );
}