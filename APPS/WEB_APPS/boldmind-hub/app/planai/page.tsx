// apps/planai/app/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Video, 
  Briefcase, 
  TrendingUp, 
  BarChart3,
  Palette,
  Store,
  Mail,
  Zap,
  Shield,
  CheckCircle,
//   PlayCircle,
//   Clock
} from 'lucide-react';
import { SuperFooter, SuperNavbar } from '@boldmind/ui';

const planaiProducts = [
  {
    id: 'receptionist',
    name: 'AI Receptionist',
    description: 'Automated lead capture & appointment booking',
    status: '✅ LIVE',
    icon: MessageSquare,
    color: 'from-green-500 to-emerald-500',
    features: ['Meta API', 'WhatsApp', 'Auto-reply', 'Lead scoring'],
    revenue: '₦20k-₦50k/client',
    link: '/receptionist',
  },
  {
    id: 'social-factory',
    name: 'Social Media Content Factory',
    description: 'AI video generation & multi-platform publishing',
    status: '🔨 BUILDING',
    icon: Video,
    color: 'from-blue-500 to-cyan-500',
    features: ['Pictory AI', 'n8n', 'Multi-platform', 'Analytics'],
    revenue: '₦15k-₦30k/month',
    link: '/social-factory',
  },
  {
    id: 'credibility-hubs',
    name: 'Professional Credibility Hubs',
    description: 'AI-powered personal branding & portfolios',
    status: '📋 PLANNED',
    icon: Briefcase,
    color: 'from-purple-500 to-pink-500',
    features: ['Portfolio builder', 'LinkedIn optimizer', 'Resume generator'],
    revenue: '₦5k-₦15k setup',
    link: '/credibility-hubs',
  },
  {
    id: 'business-planning',
    name: 'AI Business Planning',
    description: 'Dynamic business plans & market analysis',
    status: '📋 PLANNED',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-500',
    features: ['Business plans', 'Pitch decks', 'Market analysis'],
    revenue: '₦10k/plan',
    link: '/business-planning',
  },
  {
    id: 'financial-forecasting',
    name: 'Financial Forecasting',
    description: 'AI cashflow modeling & revenue projections',
    status: '📋 PLANNED',
    icon: BarChart3,
    color: 'from-yellow-500 to-amber-500',
    features: ['Cashflow projections', 'Revenue forecasting', 'Break-even'],
    revenue: '₦8k/month',
    link: '/financial-forecasting',
  },
  {
    id: 'investor-readiness',
    name: 'Investor Readiness Suite',
    description: 'Funding documentation & cap table management',
    status: '📋 PLANNED',
    icon: Shield,
    color: 'from-indigo-500 to-violet-500',
    features: ['SAFE generator', 'Data room', 'Pitch templates', 'Cap table'],
    revenue: '₦50k setup + ₦10k/month',
    link: '/investor-readiness',
  },
  {
    id: 'branding-design',
    name: 'Branding & Design Tools',
    description: 'AI logo creation & marketing visuals',
    status: '📋 PLANNED',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    features: ['Logo generator', 'Color palettes', 'Marketing visuals'],
    revenue: '₦3k/design',
    link: '/branding-design',
  },
  {
    id: 'digital-storefronts',
    name: 'Digital Storefronts',
    description: 'Instant e-commerce stores for SMEs',
    status: '📋 PLANNED',
    icon: Store,
    color: 'from-teal-500 to-emerald-500',
    features: ['Paystack integration', 'Inventory', 'Order tracking'],
    revenue: '₦5k setup + ₦2k/month',
    link: '/digital-storefronts',
  },
  {
    id: 'marketing-automation',
    name: 'Marketing Automation',
    description: 'AI-driven campaigns & lead nurturing',
    status: '📋 PLANNED',
    icon: Mail,
    color: 'from-blue-500 to-indigo-500',
    features: ['Email campaigns', 'Segmentation', 'Personalization'],
    revenue: '₦10k/month',
    link: '/marketing-automation',
  },
  {
    id: 'analytics-dashboard',
    name: 'Analytics Dashboard',
    description: 'Cross-platform business intelligence',
    status: '📋 PLANNED',
    icon: Zap,
    color: 'from-purple-500 to-blue-500',
    features: ['Unified analytics', 'Customer insights', 'Growth opportunities'],
    revenue: '₦8k/month',
    link: '/analytics-dashboard',
  },
];

export default function PlanAIPage() {
  const [activeProduct, setActiveProduct] = useState('receptionist');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero */}
      <SuperNavbar
        logoSrc="/logo.png"
        links={[
          { href: '#hero', label: 'Home', icon: '🏠' },
          { href: '#products', label: 'Products', icon: '🧩' },
          { href: '#features', label: 'Features', icon: '✨' },
          { href: '#pricing', label: 'Pricing', icon: '💰' },
        ]}
        cta={{ href: '/signup', label: 'Get Started', icon: '🚀' }}
        onLinkClick={{href: '/register', label: 'Register', icon: '📝'}}
      />
      <section className="pt-32 pb-24 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="block">Your Complete</span>
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Business Stack
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            10 AI-powered tools to automate and scale your Nigerian business
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-xl transition-all"
            >
              🚀 Start with AI Receptionist
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
            >
              📺 Watch All Demos
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            All 10 PlanAI Tools
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planaiProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setActiveProduct(product.id)}
                className={`relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border-2 ${
                  activeProduct === product.id 
                    ? 'border-blue-500/50' 
                    : 'border-white/10'
                } transition-all`}
              >
                {/* Status Badge */}
                <div className="absolute -top-3 left-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    product.status.includes('LIVE') ? 'bg-green-500/20 text-green-400' :
                    product.status.includes('BUILDING') ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {product.status}
                  </span>
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-white/5 rounded text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Revenue */}
                <div className="text-sm text-gray-300 mb-4">
                  <span className="font-bold">Revenue:</span> {product.revenue}
                </div>
                
                {/* Action */}
                <Link
                  href={product.link}
                  className={`block w-full py-3 text-center rounded-lg transition-all ${
                    product.status.includes('LIVE') 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {product.status.includes('LIVE') ? 'Try Now →' : 'Coming Soon'}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Choose Your Automation Level
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '₦15k',
                period: '/month',
                color: 'from-blue-500 to-cyan-500',
                tools: ['AI Receptionist', '1 Social Account'],
                bestFor: 'Solo entrepreneurs',
              },
              {
                name: 'Professional',
                price: '₦50k',
                period: '/month',
                color: 'from-purple-500 to-pink-500',
                tools: ['All 10 Tools', '5 Social Accounts', 'API Access'],
                bestFor: 'Small businesses',
                popular: true,
              },
              {
                name: 'Enterprise',
                price: '₦200k',
                period: '/month',
                color: 'from-orange-500 to-red-500',
                tools: ['All 10 Tools', 'Unlimited Accounts', 'Custom Development', 'Priority Support'],
                bestFor: 'Agencies & Corporates',
              },
            ].map((plan, index) => (
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
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full">
                      ⚡ MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <div className="text-4xl font-black">{plan.price}</div>
                    <div className="text-gray-400">{plan.period}</div>
                  </div>
                  <p className="text-gray-300">Perfect for {plan.bestFor}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.tools.map((tool, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 font-bold rounded-xl transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
            
          </div>
          <SuperFooter
        logoSrc="/logo.png"
        sections={[]}
        contactInfo={{}}
        newsletter={false}
        showStats={false}
        animated={false}
        copyright={`@ ${new Date().getFullYear()} BoldMind `}
      />
        </div>
      </section>
    </div>
  );
}