'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  School,
  TrendingUp,
  Sparkles,
  BookOpen,
  Video,
  MessageSquare,
  BarChart3,
  Rocket,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Sun,
  Moon,
} from 'lucide-react';

export default function LandingPage() {
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    setIsDark(theme === 'dark');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  const pillars = [
    {
      icon: School,
      title: 'Study Hub',
      description: 'JAMB/WAEC/NECO past questions + CBT mastery tools',
      features: [
        '10,000+ Past Questions',
        'Real-time CBT Simulation',
        'Performance Analytics',
        'Study Plans & Reminders',
      ],
      color: 'from-blue-500 to-cyan-500',
      link: '/study-hub',
    },
    {
      icon: TrendingUp,
      title: 'Digital Business School',
      description: 'Content funnels, automation & sales playbooks for Nigerian SMEs',
      features: [
        'Sales Funnel Templates',
        'WhatsApp Business Automation',
        'Content Marketing Playbooks',
        'Expert-Led Masterclasses',
      ],
      color: 'from-purple-500 to-pink-500',
      link: '/business-school',
    },
    {
      icon: Sparkles,
      title: 'AI Skills Lab',
      description: 'Practical AI tools for creators and entrepreneurs',
      features: [
        'AI Video Generation',
        'Prompt Engineering Course',
        'WhatsApp AI Automation',
        'Content Creation Suite',
      ],
      color: 'from-orange-500 to-red-500',
      link: '/ai-lab',
    },
  ];

  const stats = [
    { label: 'Active Students', value: '50,000+' },
    { label: 'Courses & Resources', value: '500+' },
    { label: 'Success Stories', value: '10,000+' },
    { label: 'Expert Instructors', value: '100+' },
  ];

  const pricing = [
    {
      name: 'Study Hub',
      price: '₦700',
      period: '6 months',
      yearlyPrice: '₦1,000',
      yearlyPeriod: '1 year',
      features: [
        'All past questions',
        'CBT practice tests',
        'Performance tracking',
        'Study plans',
        'Offline access',
      ],
    },
    {
      name: 'Business School',
      price: '₦1,000',
      period: 'lifetime access',
      features: [
        'Platform access',
        'Free courses',
        'Community access',
        'Premium courses (paid separately)',
        'Expert-led content',
      ],
      popular: true,
    },
    {
      name: 'AI Skills Lab',
      price: '₦1,000',
      period: 'lifetime access',
      features: [
        'Platform access',
        'Free AI tools',
        'Basic tutorials',
        'Premium tools (paid separately)',
        'Weekly updates',
      ],
    },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? isDark
              ? 'bg-gray-900/95 backdrop-blur-lg border-b border-gray-800'
              : 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm'
            : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <School className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                EduCenter
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>
                Features
              </a>
              <a href="#pricing" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>
                Pricing
              </a>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'}`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Link
                href="/login"
                className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={isDark ? 'text-white' : 'text-gray-900'} />
              ) : (
                <Menu className={isDark ? 'text-white' : 'text-gray-900'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${isDark ? 'bg-gray-800' : 'bg-white'} border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Features
              </a>
              <a href="#pricing" className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Pricing
              </a>
              <Link href="/login" className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Login
              </Link>
              <Link
                href="/register"
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Africa's Practical{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learning Engine
            </span>
          </h1>
          <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            From exam mastery to digital business and AI skills. We help you turn attention into skills,
            credentials, and income.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
            >
              Start Learning Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="#features"
              className={`border-2 ${isDark ? 'border-gray-600 text-white hover:bg-gray-800' : 'border-gray-300 text-gray-900 hover:bg-gray-50'} px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300`}
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {stat.value}
                </div>
                <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Three Pillars of Success
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Everything you need to succeed in modern Africa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-xl hover:shadow-2xl transition-all duration-300 border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {pillar.title}
                </h3>
                <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {pillar.description}
                </p>
                <ul className="space-y-3">
                  {pillar.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className={`w-5 h-5 mr-2 flex-shrink-0 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                      <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={`py-20 px-4 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Simple, Transparent Pricing
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Choose the plan that fits your learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl ${plan.popular ? 'ring-4 ring-purple-500 scale-105' : ''} ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-xl relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>/{plan.period}</span>
                  {plan.yearlyPrice && (
                    <div className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      or {plan.yearlyPrice}/{plan.yearlyPeriod}
                    </div>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className={`w-5 h-5 mr-2 flex-shrink-0 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                      <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/register"
                  className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                      : isDark
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Ready to Transform Your Future?
          </h2>
          <p className={`text-xl mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Join thousands of Africans already building skills, credentials, and income with EduCenter
          </p>
          <Link
            href="/register"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
          >
            Start Your Journey Today
            <Rocket className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDark ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-50 border-t border-gray-200'} py-12 px-4`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <School className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  EduCenter
                </span>
              </div>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Africa's practical learning engine for the modern world.
              </p>
            </div>
            <div>
              <h4 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className={isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>Study Hub</a></li>
                <li><a href="#" className={isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>Business School</a></li>
                <li><a href="#" className={isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>AI Skills Lab</a></li>
              </ul>
            </div>
            <div>
              <h4 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className={isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>About Us</a></li>
                <li><a href="#" className={isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>Contact</a></li>
                <li><a href="#" className={isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className={isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>Privacy Policy</a></li>
                <li><a href="#" className={isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className={`text-center pt-8 border-t ${isDark ? 'border-gray-800 text-gray-400' : 'border-gray-200 text-gray-600'}`}>
            <p>&copy; {new Date().getFullYear()} EduCenter. A BoldMind Product. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}