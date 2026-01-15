// apps/web/boldmind-os/app/page.tsx
'use client';

import { useState, useEffect } from 'react';
// import Link from 'next/link';
import { motion } from 'framer-motion';
import { SuperNavbar, SuperFooter, ParticleBackground, TypewriterEffect } from '@boldmind/ui';
import {
  Brain,
  Zap,
  Target,
  Clock,
  Sparkles,
  Rocket,
  // Coffee,
  // Gamepad2,
  // BookOpen,
  // TrendingUp,
  // Users,
  // Award,
  Shield,
  Lock,
  Cloud,
  Smartphone,
  ChevronRight,
  CheckCircle,
  // PlayCircle,
  // BarChart3,
  // MessageSquare,
  // Video,
  // Cpu,
  // Database,
} from 'lucide-react';

// const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://boldmindos.com';

export default function BoldMindOSPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [usersCount, setUsersCount] = useState(0);

  // Animated counter
  useEffect(() => {
    const target = 7500;
    const duration = 3000;
    const steps = 50;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setUsersCount(Math.floor(current));
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  // Navigation for BoldMind OS
  const navLinks = [
    { href: '#hero', label: 'Home', icon: '🏠' },
    { href: '#features', label: 'Features', icon: '✨' },
    { href: '#for-you', label: 'For You', icon: '🎯' },
    { href: '#modules', label: 'Modules', icon: '🧩' },
    { href: '#pricing', label: 'Pricing', icon: '💰' },
    { href: '#community', label: 'Community', icon: '👥' },
  ];

  // Footer sections
  const footerSections = [
    {
      title: '🚀 Products',
      links: [
        { href: 'https://boldmind.ng', label: 'BoldMind Hub', isExternal: true },
        { href: 'https://amebogist.ng', label: 'AmeboGist', isExternal: true },
        { href: 'https://educenter.com.ng', label: 'EduCenter', isExternal: true },
        { href: '#', label: 'PlanAI Suite' },
        { href: '/products', label: 'All 31+ Products', badge: '31+' },
      ],
    },
    {
      title: '🧠 OS Modules',
      links: [
        { href: '#capture', label: 'Capture Brain', icon: '🎯' },
        { href: '#focus', label: 'Focus Brain', icon: '🎯' },
        { href: '#connect', label: 'Connect Brain', icon: '🎯' },
        { href: '#create', label: 'Create Brain', icon: '🎯' },
        { href: '#reflect', label: 'Reflect Brain', icon: '🎯' },
      ],
    },
    {
      title: '🏢 Company',
      links: [
        { href: '/about', label: 'About Us' },
        { href: '/mission', label: 'Our Mission' },
        { href: '/team', label: 'Team' },
        { href: '/careers', label: 'Careers', badge: 'Hiring' },
        { href: '/contact', label: 'Contact' },
      ],
    },
  ];

  const contactInfo = {
    email: 'hello@boldmind.ng',
    phone: '+234 913 834 9271',
    address: 'Lagos, Nigeria',
    whatsapp: 'https://wa.me/2349138349271',
  };

  // const socialLinks = [
  //   { platform: 'Twitter', url: 'https://twitter.com/boldmindtech', icon: '🐦' },
  //   { platform: 'LinkedIn', url: 'https://linkedin.com/company/boldmind-tech', icon: '💼' },
  //   { platform: 'Instagram', url: 'https://instagram.com/boldmindtech', icon: '📸' },
  //   { platform: 'GitHub', url: 'https://github.com/boldmind-tech', icon: '💻' },
  // ];

  // Features for neurodivergent entrepreneurs
  const neurodivergentFeatures = [
    {
      icon: Brain,
      title: 'ADHD-Friendly Design',
      description: 'Built for time blindness, dopamine needs, and executive function support',
      color: 'from-purple-500 to-pink-500',
      benefits: ['Visual time tracking', 'Gamified tasks', 'Focus modes'],
    },
    {
      icon: Zap,
      title: 'Dyslexia Accommodations',
      description: 'OpenDyslexic font, text-to-speech, visual summaries',
      color: 'from-blue-500 to-cyan-500',
      benefits: ['Font switching', 'Audio playback', 'Visual organization'],
    },
    {
      icon: Target,
      title: 'Priority Clarity',
      description: 'AI-powered task prioritization that understands neurodivergent brain',
      color: 'from-green-500 to-emerald-500',
      benefits: ['Auto-prioritization', 'Energy-based scheduling', 'Context awareness'],
    },
    {
      icon: Clock,
      title: 'Time Blindness Support',
      description: 'Visual time tracking, progress indicators, gentle nudges',
      color: 'from-orange-500 to-red-500',
      benefits: ['Time visualization', 'Progress tracking', 'Smart reminders'],
    },
  ];

  // Five Brain Modules
  const brainModules = [
    {
      name: 'Capture Brain',
      description: 'Multi-modal input for your chaotic thoughts',
      icon: '🎯',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Voice notes (Pidgin/English)',
        'Quick text capture',
        'Email forwarding',
        'Screenshot to task',
        'WhatsApp integration',
      ],
    },
    {
      name: 'Focus Brain',
      description: 'ADHD-friendly Pomodoro & distraction blocking',
      icon: '🎯',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Custom Pomodoro timers',
        'Website/app blocking',
        'Focus music player',
        'Body doubling sessions',
        'Progress visualization',
      ],
    },
    {
      name: 'Connect Brain',
      description: 'Visual knowledge graph for your ideas',
      icon: '🎯',
      color: 'from-green-500 to-emerald-500',
      features: [
        'Mind mapping',
        'Idea connections',
        'Visual organization',
        'Tag-based system',
        'Search across everything',
      ],
    },
    {
      name: 'Create Brain',
      description: 'Content pipeline manager for creators',
      icon: '🎯',
      color: 'from-orange-500 to-red-500',
      features: [
        'YouTube content calendar',
        'Blog post scheduler',
        'Social media planning',
        'Cross-platform publishing',
        'Analytics dashboard',
      ],
    },
    {
      name: 'Reflect Brain',
      description: 'Progress tracking with ADHD-friendly analytics',
      icon: '🎯',
      color: 'from-yellow-500 to-amber-500',
      features: [
        'Daily/weekly reviews',
        'Progress visualization',
        'Achievement tracking',
        'Pattern recognition',
        'Personalized insights',
      ],
    },
  ];

  // Pricing plans
  const pricingPlans = [
    {
      name: 'Solo Founder',
      description: 'Perfect for individual entrepreneurs',
      price: '₦5,000',
      period: 'per month',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'All 5 Brain Modules',
        'Unlimited projects',
        'Basic AI assistance',
        'Email support',
        '1GB storage',
      ],
      cta: 'Start Building',
      popular: false,
    },
    {
      name: 'Power Builder',
      description: 'For serious entrepreneurs scaling fast',
      price: '₦15,000',
      period: 'per month',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Everything in Solo',
        'Advanced AI features',
        'Priority support',
        'Team collaboration',
        '10GB storage',
        'Custom workflows',
        'API access',
      ],
      cta: 'Scale Faster',
      popular: true,
    },
    {
      name: 'Ecosystem',
      description: 'Complete BoldMind ecosystem access',
      price: '₦30,000',
      period: 'per month',
      color: 'from-orange-500 to-red-500',
      features: [
        'Everything in Power',
        'All 31+ BoldMind products',
        'Dedicated success manager',
        'Custom development',
        'Unlimited storage',
        'White-label options',
        'Training & workshops',
      ],
      cta: 'Join Ecosystem',
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Particle Background */}
      <ParticleBackground 
        particleCount={80}
        particleColor="#8B5CF6"
        mouseInteraction={true}
      />

      {/* SuperNavbar */}
      <SuperNavbar
        logoSrc="/logo.png"
        links={navLinks}
        cta={{
          href: '/waitlist',
          label: 'Join Waitlist',
          variant: 'glow',
          icon: <Rocket className="w-4 h-4" />,
        }}
        theme="dark"
        sticky={true}
        animated={true}
        showParticles={true}
        onLinkClick={() => window.scrollTo(0, 0)}
      />

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-bold">FOR NEURODIVERGENT ENTREPRENEURS</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8">
              <span className="block">Your Personal</span>
              <TypewriterEffect
                texts={['Operating System', 'Productivity Engine', 'Success Machine', 'Brain Extension'] as string[]}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent"
                speed={100}
                delay={2000}
                onComplete={() => console.log('Typewriter animation completed')}
              />
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Built for ADHD, dyslexia, and neurodivergent minds. Finally, a system that works 
              <span className="text-yellow-400 font-bold"> WITH</span> your brain, not against it.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all"
              >
                <span className="flex items-center gap-3">
                  🧠 Join Private Beta
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-lg rounded-2xl hover:bg-white/20 transition-all"
              >
                🎬 Watch Demo
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { value: `${usersCount}+`, label: 'Waitlist Signups' },
                { value: '31+', label: 'Integrated Products' },
                { value: '5', label: 'Brain Modules' },
                { value: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                >
                  <div className="text-3xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neurodivergent Features */}
      <section id="for-you" className="py-24 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Built for the{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Neurodivergent Brain
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Finally, a system that understands how YOUR brain works
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {neurodivergentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setActiveFeature(index)}
                className="relative group"
              >
                <div className={`p-8 rounded-3xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-white/10 backdrop-blur-sm`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {activeFeature === index && (
                  <motion.div
                    layoutId="feature-glow"
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl -z-10"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Brain Modules */}
      <section id="modules" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Your Complete{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Brain Stack
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              5 integrated modules that work together seamlessly
            </p>
          </div>

          <div className="space-y-6">
            {brainModules.map((module, index) => (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="lg:w-1/3">
                  <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${module.color} flex items-center justify-center text-4xl mb-6 mx-auto lg:mx-0`}>
                    {module.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-3 text-center lg:text-left">{module.name}</h3>
                  <p className="text-gray-300 text-center lg:text-left">{module.description}</p>
                </div>
                
                <div className="lg:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {module.features.map((feature, i) => (
                      <div
                        key={i}
                        className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${module.color} bg-opacity-20 flex items-center justify-center`}>
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                Growth Path
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start building your empire today
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative rounded-3xl p-8 border-2 ${
                  plan.popular
                    ? 'border-purple-500 bg-gradient-to-b from-purple-500/10 to-pink-500/10'
                    : 'border-white/10 bg-white/5'
                } backdrop-blur-sm`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full">
                      ⚡ MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-5xl font-black">{plan.price}</div>
                    <div className="text-gray-400">{plan.period}</div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 font-bold rounded-xl transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl'
                      : 'bg-white text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Money Back Guarantee */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <Shield className="w-12 h-12 text-green-500" />
              <div className="text-left">
                <h4 className="text-xl font-bold">30-Day Money-Back Guarantee</h4>
                <p className="text-gray-400">If BoldMind OS doesn't transform your productivity, we'll refund you. No questions asked.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Build Your Empire?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the waitlist for early access and exclusive launch pricing
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-white text-gray-900 font-bold text-lg rounded-2xl hover:shadow-2xl transition-all"
            >
              <span className="flex items-center gap-3">
                🚀 Join Waitlist Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-lg rounded-2xl hover:bg-white/20 transition-all"
            >
              📞 Book Discovery Call
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <Lock className="w-4 h-4" />
                <span className="text-sm">No credit card required</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <Cloud className="w-4 h-4" />
                <span className="text-sm">Works offline-first</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm">PWA - no app store needed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SuperFooter */}
      <SuperFooter
        logoSrc="/logo.png"
        sections={footerSections}
        contactInfo={contactInfo}
        newsletter={true}
        showStats={true}
        animated={true}
        copyright={`© ${new Date().getFullYear()} BoldMind OS. Your personal operating system for success.`}
      />
    </div>
  );
}