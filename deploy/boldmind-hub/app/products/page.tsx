// apps/web/boldmind-hub/app/products/page.tsx
'use client';

import { motion } from 'framer-motion';
import { SuperNavbar, SuperFooter } from '@boldmind/ui';
import { ExternalLink, CheckCircle, Clock, Lightbulb, Rocket } from 'lucide-react';

export default function ProductsPage() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/planai', label: 'PlanAI' },
    { href: '/contact', label: 'Contact' },
  ];

  const footerSections = [
    {
      title: '🚀 Products',
      links: [
        { href: 'https://amebogist.ng', label: 'AmeboGist', isExternal: true },
        { href: 'https://educenter.com.ng', label: 'EduCenter', isExternal: true },
        { href: '/planai', label: 'PlanAI Suite' },
        { href: '/products', label: 'All Products', badge: '31+' },
      ],
    },
    {
      title: '🏢 Company',
      links: [
        { href: '/about', label: 'About Us' },
        { href: '/#ecosystem', label: 'Our Ecosystem' },
        { href: '/contact', label: 'Contact' },
      ],
    },
    {
      title: '🔗 Connect',
      links: [
        { href: 'https://twitter.com/', label: 'Twitter', isExternal: true },
        { href: 'https://linkedin.com', label: 'LinkedIn', isExternal: true },
        { href: 'https://instagram.com', label: 'Instagram', isExternal: true },
      ],
    },
  ];

  const products = {
    live: [
      {
        name: 'AmeboGist.ng',
        tagline: 'Authentic Nigerian Media',
        description: 'Pidgin news & lifestyle platform building mass audience for the BoldMind ecosystem',
        link: 'https://amebogist.ng',
        color: '#00A859',
        icon: '📰',
        status: 'LIVE',
        features: ['Daily Nigerian News', 'Pidgin Content', 'AdSense Monetization', 'SEO Optimized'],
      },
      {
        name: 'EduCenter.com.ng',
        tagline: 'Education Excellence',
        description: 'JAMB/WAEC exam preparation and career development platform',
        link: 'https://educenter.com.ng',
        color: '#2A4A6E',
        icon: '🎓',
        status: 'LIVE',
        features: ['JAMB Practice', 'WAEC Prep', 'Progress Tracking', 'Paystack Integration'],
      },
      {
        name: 'AI Receptionist',
        tagline: 'Automated Lead Management',
        description: 'Meta API automation for lead capture, booking, and customer engagement',
        link: '/planai',
        color: '#FFC800',
        icon: '🤖',
        status: 'LIVE',
        features: ['Auto-Reply', 'Lead Capture', 'Appointment Booking', 'WhatsApp Integration'],
      },
    ],
    building: [
      {
        name: 'BoldMind OS',
        tagline: 'Productivity for Neurodivergent Minds',
        description: 'Comprehensive productivity system designed for ADHD and dyslexic entrepreneurs',
        color: '#E63946',
        icon: '⚡',
        status: 'BUILDING',
        features: ['Capture Brain', 'Focus Brain', 'Connect Brain', 'Create Brain', 'Reflect Brain'],
      },
      {
        name: 'Social Factory',
        tagline: 'AI Content Automation',
        description: 'AI-powered video generation and multi-platform content publishing',
        color: '#9C27B0',
        icon: '🎬',
        status: 'BUILDING',
        features: ['Pictory AI', 'Multi-Platform', 'Content Calendar', 'n8n Workflows'],
      },
    ],
    new: [
      {
        name: 'Naija FitHer',
        tagline: "Women's Health Platform",
        description: 'Weight loss platform specifically for Nigerian women with local meal plans',
        color: '#FF4081',
        icon: '💪',
        status: 'NEW',
        features: ['Nigerian Meals', 'AI Meal Plans', 'Workout Videos', 'Progress Tracking'],
      },
      {
        name: 'EmailScraper Pro',
        tagline: 'B2B Lead Generation',
        description: 'Powerful email finding and verification tool for sales teams',
        color: '#2196F3',
        icon: '📧',
        status: 'NEW',
        features: ['Email Finding', 'Verification', 'Bulk Operations', 'Lead Enrichment'],
      },
      {
        name: 'SAFE AI',
        tagline: 'Police Intelligence Platform',
        description: 'AI-powered crime prevention and incident management system',
        color: '#FF5722',
        icon: '🛡️',
        status: 'NEW',
        features: ['Facial Recognition', 'Pattern Detection', 'Crime Analytics', 'Evidence Management'],
      },
    ],
    planai: [
      { name: 'Professional Credibility Hubs', description: 'Portfolio websites and personal branding', icon: '💼', color: '#3F51B5' },
      { name: 'AI Business Planning', description: 'Business plan and market analysis generation', icon: '📊', color: '#009688' },
      { name: 'Financial Forecasting', description: 'Cashflow modeling and revenue projections', icon: '💰', color: '#8BC34A' },
      { name: 'Investor Readiness Suite', description: 'Funding docs and cap table management', icon: '📈', color: '#795548' },
      { name: 'Branding & Design Tools', description: 'Logo creation and marketing visuals', icon: '🎨', color: '#FF9800' },
      { name: 'Digital Storefronts', description: 'Instant e-commerce stores for SMEs', icon: '🛒', color: '#E91E63' },
      { name: 'Marketing Automation', description: 'AI-driven campaigns and lead nurturing', icon: '🚀', color: '#673AB7' },
      { name: 'Analytics Dashboard', description: 'Cross-platform business intelligence', icon: '📊', color: '#00BCD4' },
    ],
    concepts: [
      { name: 'AfroHustle OS', description: '100 side hustle blueprints', icon: '💡' },
      { name: 'NaijaGig Matcher', description: 'Gig economy marketplace', icon: '👷' },
      { name: 'KoloAI', description: 'Thrift group default predictor', icon: '🤝' },
      { name: 'BorderlessRemit', description: 'Remittance rate tracker', icon: '💱' },
      { name: 'ReceiptGenius NG', description: 'Receipt generator', icon: '🧾' },
      { name: 'PowerAlert NG', description: 'NEPA status tracker', icon: '⚡' },
      { name: 'FarmGate Direct', description: 'Farm-to-consumer marketplace', icon: '🌱' },
      { name: 'AfroCopy AI', description: 'Nigerian-context copywriting', icon: '📝' },
      { name: 'Skill2Cash Board', description: 'Freelance job marketplace', icon: '🎯' },
      { name: 'AnonTruth Mic', description: 'Anonymous truth platform', icon: '🎤' },
    ],
  };

  const statusIcons = {
    LIVE: <CheckCircle className="w-5 h-5" />,
    BUILDING: <Clock className="w-5 h-5" />,
    NEW: <Rocket className="w-5 h-5" />,
    PLANNED: <Lightbulb className="w-5 h-5" />,
  };

  return (
    <div className="min-h-screen bg-white">
      <SuperNavbar
        links={navLinks}
        cta={{ href: 'https://wa.me/2349138349271', label: 'Get Started' }}
        logoSrc="/logo.png"
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#00143C] via-[#0A1F4F] to-[#2A4A6E] text-white overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#FFC800]/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8">
              Our <span className="text-[#FFC800]">Product</span> Ecosystem
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              31+ innovative solutions transforming Nigerian entrepreneurship
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-green-400 font-bold">✅ 3 Live</span>
              <span className="text-gray-400">•</span>
              <span className="text-yellow-400 font-bold">🔨 2 Building</span>
              <span className="text-gray-400">•</span>
              <span className="text-blue-400 font-bold">📋 26 Planned</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-8 bg-green-500 rounded"></div>
              <h2 className="text-3xl md:text-4xl font-black text-[#00143C]">
                ✅ Live Products
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {products.live.map((product, index) => (
                <motion.a
                  key={index}
                  href={product.link}
                  target="_blank"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-white border-2 border-gray-200 rounded-3xl overflow-hidden hover:border-green-500 hover:shadow-2xl transition-all"
                >
                  <div className="p-8" style={{ backgroundColor: `${product.color}15` }}>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                        style={{ backgroundColor: product.color }}
                      >
                        {product.icon}
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full font-bold text-sm">
                        {statusIcons.LIVE}
                        {product.status}
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-[#00143C] mb-2">{product.name}</h3>
                    <p className="text-sm font-bold mb-4" style={{ color: product.color }}>
                      {product.tagline}
                    </p>
                    <p className="text-gray-600 mb-6">{product.description}</p>

                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-[#00143C] font-bold group-hover:gap-3 transition-all">
                      <span>Visit Product</span>
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Building & New */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Building */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-8 bg-yellow-500 rounded"></div>
                <h2 className="text-3xl md:text-4xl font-black text-[#00143C]">
                  🔨 Building
                </h2>
              </div>

              <div className="space-y-6">
                {products.building.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-yellow-500 transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                        style={{ backgroundColor: product.color }}
                      >
                        {product.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-black text-[#00143C]">{product.name}</h3>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded">
                            {product.status}
                          </span>
                        </div>
                        <p className="text-sm font-bold mb-2" style={{ color: product.color }}>
                          {product.tagline}
                        </p>
                        <p className="text-gray-600 mb-3">{product.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {product.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* New */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-8 bg-blue-500 rounded"></div>
                <h2 className="text-3xl md:text-4xl font-black text-[#00143C]">
                  🆕 New Products
                </h2>
              </div>

              <div className="space-y-6">
                {products.new.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: -10 }}
                    className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-500 transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                        style={{ backgroundColor: product.color }}
                      >
                        {product.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-black text-[#00143C]">{product.name}</h3>
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">
                            {product.status}
                          </span>
                        </div>
                        <p className="text-sm font-bold mb-2" style={{ color: product.color }}>
                          {product.tagline}
                        </p>
                        <p className="text-gray-600 mb-3">{product.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {product.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PlanAI Suite */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-8 bg-purple-500 rounded"></div>
            <h2 className="text-3xl md:text-4xl font-black text-[#00143C]">
              📋 PlanAI Suite (8 Products)
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.planai.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-xl transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: product.color }}
                >
                  {product.icon}
                </div>
                <h3 className="text-lg font-bold text-[#00143C] mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/planai"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-xl transition-all"
            >
              <Rocket className="w-5 h-5" />
              Explore PlanAI Suite
            </a>
          </div>
        </div>
      </section>

      {/* Concept Products */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-8 bg-orange-500 rounded"></div>
            <h2 className="text-3xl md:text-4xl font-black text-[#00143C]">
              💡 Concept Products (10+)
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.concepts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-orange-500 transition-all text-center"
              >
                <div className="text-3xl mb-2">{product.icon}</div>
                <h4 className="font-bold text-[#00143C] mb-1 text-sm">{product.name}</h4>
                <p className="text-xs text-gray-600">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#00143C] to-[#2A4A6E] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Join thousands of entrepreneurs already using our ecosystem
          </p>
          <a
            href="https://wa.me/2349138349271"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#FFC800] text-[#00143C] font-bold text-lg rounded-lg hover:bg-[#FFD700] transition-all shadow-xl"
          >
            <span className="text-2xl">💬</span>
            Get Started Now
          </a>
        </div>
      </section>

      <SuperFooter
        logoSrc="/logo.png"
        sections={footerSections}
        contactInfo={{
          email: 'hello@boldmind.ng',
          phone: '+2349138349271',
          whatsapp: '+2349138349271',
          address: 'No 5 Olusoji imole str ikosi ketu Lagos Nigeria',
        }}
      />
    </div>
  );
}