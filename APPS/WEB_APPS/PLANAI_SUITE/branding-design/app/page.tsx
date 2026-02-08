'use client';

import { SuperNavbar, SuperFooter } from '@boldmind/ui';
import { motion } from 'framer-motion';
import {
  Palette, Grid, Layout, Image as ImageIcon, ArrowRight, Wand2, Download
} from 'lucide-react';
import Link from 'next/link';
import logo from '../public/logo.png';

export default function BrandingLandingPage() {
  const features = [
    {
      title: 'AI Logo Generator',
      description: 'Create unique, professional logos in seconds based on your industry and values.',
      icon: <Wand2 className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Brand Guidelines',
      description: 'Automatically generate color palettes, typography, and usage rules.',
      icon: <Palette className="w-6 h-6 text-pink-500" />
    },
    {
      title: 'Marketing Assets',
      description: 'Get ready-to-use social media templates, business cards, and letterheads.',
      icon: <Layout className="w-6 h-6 text-indigo-500" />
    }
  ];

  const galleryImages = [
    { color: 'bg-rose-500', aspect: 'aspect-[4/3]' },
    { color: 'bg-indigo-500', aspect: 'aspect-square' },
    { color: 'bg-emerald-500', aspect: 'aspect-[3/4]' },
    { color: 'bg-amber-500', aspect: 'aspect-square' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-pink-500/30">
      <SuperNavbar theme="light" logoSrc={logo.src} />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6">
                  <Wand2 className="w-4 h-4" />
                  <span>AI-Powered Design Studio</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-slate-900">
                  Design your brand <br />
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">in minutes, not days.</span>
                </h1>

                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Create professional logos, brand identities, and marketing materials instantly with our advanced AI design engine.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/create" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold transition-all hover:scale-105 flex items-center gap-2">
                    Start Designing
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/gallery" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-xl font-semibold transition-all">
                    View Gallery
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className={`${img.aspect} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative group`}
                >
                  <div className={`absolute inset-0 ${img.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Background Blobs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pink-200/50 rounded-full blur-[100px] mix-blend-multiply animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-200/50 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-yellow-200/50 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-4000"></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SuperFooter product="branding-design" />
    </div>
  );
}