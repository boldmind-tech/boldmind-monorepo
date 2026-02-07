'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  AlertTriangle,
  Map,
  BarChart3,
  Camera,
  Lock,
  Users,
  Zap,
  CheckCircle,
  Siren,
} from 'lucide-react';
import Link from 'next/link';
import { SuperNavbar, SuperFooter } from '@boldmind/ui';

export default function SafeNaijaHome() {

  const navLinks = [
    { href: '/#features', label: 'Features', icon: '⚡' },
    { href: '/#map', label: 'Live Map', icon: '🗺️' },
    { href: '/#analytics', label: 'Analytics', icon: '📊' },
    { href: '/login', label: 'Agency Login', icon: '🔒' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-orange-500 selection:text-white font-sans">
      <SuperNavbar
        logoSrc="/logo.png"
        links={navLinks}
        cta={{
          label: 'Report Incident',
          href: '/login',
          variant: 'gradient',
          icon: <AlertTriangle className="w-4 h-4" />,
        }}
        theme="dark"
        className="border-b border-white/5 bg-gray-950/80 backdrop-blur-xl"
      />

      <main className="pt-20">
        {/* --- HERO SECTION --- */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          {/* Dynamic Background */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-sm font-bold mb-8 animate-fade-in-up">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                </span>
                AI-Powered Crime Intelligence System
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                Predict. Prevent. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-purple-600">
                  Protect Nigeria.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                Connect police stations, security agencies, and citizens with the first <span className="text-white font-semibold">Real-Time Crime Analytics Platform</span> built for Nigerian security challenges.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/login" className="w-full sm:w-auto">
                  <button className="w-full px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl text-lg font-bold hover:shadow-[0_0_40px_rgba(234,88,12,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-3 group">
                    <AlertTriangle className="w-5 h-5 group-hover:animate-pulse" />
                    Report Incident Now
                  </button>
                </Link>
                <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl text-lg font-bold hover:bg-white/10 hover:border-orange-500/30 transition-all flex items-center justify-center gap-3">
                  <Map className="w-5 h-5 text-orange-400" />
                  View Live Heatmap
                </button>
              </div>
            </motion.div>

            {/* Dashboard Mockup - Floating 3D Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ delay: 0.4, duration: 1, type: "spring" }}
              className="mt-20 relative mx-auto max-w-6xl perspective-1000"
            >
              <div className="relative bg-gray-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/10 group">
                {/* Fake UI Header */}
                <div className="h-12 bg-gray-800/50 border-b border-white/10 flex items-center justify-between px-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-xs text-gray-500 font-mono flex items-center gap-2">
                    <Lock className="w-3 h-3" /> ENCRYPTED CONNECTION
                  </div>
                </div>

                {/* Fake Map Interface */}
                <div className="relative h-[400px] md:h-[600px] bg-gray-900 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/8.6753,9.0820,5,0/1280x800')] bg-cover bg-center opacity-40 mix-blend-luminosity grayscale" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

                  {/* Floating UI Elements */}
                  <div className="absolute top-8 left-8 bg-gray-900/90 backdrop-blur border border-white/10 p-4 rounded-xl shadow-2xl">
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-2">Live Incident Feed</p>
                    <div className="space-y-3">
                      {[
                        { type: 'Thief Apprehended', loc: 'Lagos, Ikeja', time: '2m ago', color: 'text-green-400' },
                        { type: 'Suspicious Activity', loc: 'Abuja, CBD', time: '5m ago', color: 'text-yellow-400' },
                        { type: 'Emergency Call', loc: 'PH, GRA', time: '12m ago', color: 'text-red-400' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm">
                          <div className={`w-2 h-2 rounded-full ${item.color.replace('text', 'bg animate-pulse')}`} />
                          <div>
                            <p className="font-bold text-white">{item.type}</p>
                            <p className="text-xs text-gray-500">{item.loc} • {item.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-8 right-8 bg-gray-900/90 backdrop-blur border border-white/10 p-6 rounded-xl shadow-2xl max-w-xs card-hover">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                        <Siren className="w-6 h-6 text-orange-500 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Station Alert</h4>
                        <p className="text-xs text-gray-400">Unit 42 - Responding</p>
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden mb-2">
                      <div className="h-full bg-orange-500 w-[70%]" />
                    </div>
                    <p className="text-xs text-right text-orange-400">ETA: 4 mins</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- STATS --- */}
        <section className="py-12 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '2,450+', label: 'Incidents Solved', icon: <CheckCircle className="w-5 h-5" /> },
              { value: '156', label: 'Police Stations', icon: <Shield className="w-5 h-5" /> },
              { value: '45min', label: 'Response Time', icon: <Zap className="w-5 h-5" /> },
              { value: 'Lag/Abj', label: 'Coverage Areas', icon: <Map className="w-5 h-5" /> },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="flex items-center justify-center gap-2 text-orange-500 mb-2 group-hover:scale-110 transition-transform">
                  {stat.icon}
                  <span className="text-xs font-bold uppercase tracking-wider">{stat.label}</span>
                </div>
                <div className="text-4xl md:text-5xl font-black text-white">{stat.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* --- FEATURES GRID --- */}
        <section id="features" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Military-Grade Tech</span>
              <h2 className="text-4xl font-black text-white mt-2 mb-6">Security Meets Intelligence</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                We equip Nigerian security agencies with next-generation tools to fight crime effectively.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: 'Predictive AI',
                  desc: 'Our algorithms analyze historical data to predict potential crime hotspots before incidents occur.',
                  bg: 'from-blue-500/20 to-blue-900/20',
                  border: 'border-blue-500/20'
                },
                {
                  icon: <Camera className="w-8 h-8" />,
                  title: 'Facial Recognition',
                  desc: 'Integrates with public CCTV to identify wanted suspects and missing persons in real-time.',
                  bg: 'from-purple-500/20 to-purple-900/20',
                  border: 'border-purple-500/20'
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Force Coordination',
                  desc: 'Seamless communication between police, civil defense, and private security units.',
                  bg: 'from-orange-500/20 to-orange-900/20',
                  border: 'border-orange-500/20'
                },
                {
                  icon: <Lock className="w-8 h-8" />,
                  title: 'Secure Evidence',
                  desc: 'Blockchain-backed evidence logging eliminates tampering and ensures chain of custody.',
                  bg: 'from-emerald-500/20 to-emerald-900/20',
                  border: 'border-emerald-500/20'
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: 'Instant Alerts',
                  desc: 'Emergency notifications sent to nearest patrol units and registered citizens within seconds.',
                  bg: 'from-red-500/20 to-red-900/20',
                  border: 'border-red-500/20'
                },
                {
                  icon: <Map className="w-8 h-8" />,
                  title: 'Tactical Mapping',
                  desc: '3D tactical maps for SWAT teams and incident response planning.',
                  bg: 'from-gray-500/20 to-gray-800/20',
                  border: 'border-gray-500/20'
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-8 rounded-2xl bg-gradient-to-br ${feature.bg} backdrop-blur border ${feature.border} hover:scale-[1.02] transition-all group`}
                >
                  <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                    <div className="text-white opacity-80 group-hover:opacity-100">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- HOW IT WORKS STEPS --- */}
        <section className="py-24 bg-white/5 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-16">Rapid Response Workflow</h2>
            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

              {[
                { step: '01', title: 'Report', desc: 'Incident reported via App, SMS, or Voice.' },
                { step: '02', title: 'Verify', desc: 'AI verifies authenticity & location.' },
                { step: '03', title: 'Dispatch', desc: 'Nearest unit receives tactical data.' },
                { step: '04', title: 'Resolve', desc: 'Action taken & case updated live.' },
              ].map((item, i) => (
                <div key={i} className="relative z-10">
                  <div className="w-16 h-16 mx-auto bg-gray-900 border-2 border-orange-500 rounded-full flex items-center justify-center text-xl font-black text-orange-500 mb-6 shadow-[0_0_20px_rgba(234,88,12,0.3)]">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* --- CTA SECTION --- */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-orange-600/10" />
          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <Shield className="w-20 h-20 text-orange-500 mx-auto mb-8 animate-pulse" />
            <h2 className="text-5xl font-black mb-6">Make Nigeria Safer. Together.</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join the network of stations, private security firms, and gated communities using Safe Naija.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/login">
                <button className="px-10 py-5 bg-white text-gray-900 rounded-xl font-black text-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-3">
                  <Lock className="w-5 h-5" /> Agency Login
                </button>
              </Link>
              <button className="px-10 py-5 bg-transparent border-2 border-orange-600 text-orange-500 rounded-xl font-black text-lg hover:bg-orange-600/10 transition-all">
                Request Demo
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <SuperFooter
        variant="default"
        product="safe-ai"
        className="border-t border-white/10 bg-black"
        newsletter={true}
      />
    </div>
  );
}