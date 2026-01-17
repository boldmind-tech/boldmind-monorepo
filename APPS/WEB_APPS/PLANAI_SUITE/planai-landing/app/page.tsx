"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
  ArrowRight,
  PlayCircle,
  Clock,
  Sparkles,
  Rocket,
  Target,
  Users,
  BarChart,
  CreditCard,
  Globe,
  Lock,
} from "lucide-react";
import { SuperFooter, SuperNavbar } from '@boldmind/ui';

const PlanAIProducts = [
  {
    id: "receptionist",
    name: "AI Receptionist",
    description: "24/7 automated lead capture & appointment booking",
    status: "🚀 LIVE",
    icon: MessageSquare,
    color: "from-green-500 to-emerald-600",
    features: [
      "Meta API Integration",
      "WhatsApp Automation",
      "Smart Auto-reply",
      "Lead Qualification",
    ],
    revenue: "₦20k-₦50k/month",
    link: "/receptionist",
    stats: { clients: 12, responseTime: "2s", successRate: "94%" },
  },
  {
    id: "social-factory",
    name: "Social Media Factory",
    description: "AI video generation & multi-platform publishing",
    status: "🔨 BUILDING",
    icon: Video,
    color: "from-blue-500 to-cyan-600",
    features: [
      "AI Video Generation",
      "Multi-platform Sync",
      "Content Calendar",
      "Analytics Dashboard",
    ],
    revenue: "₦15k-₦30k/month",
    link: "social.boldmind.ng",
    stats: { videos: "500+", platforms: 6, engagement: "+300%" },
  },
  {
    id: "credibility-hubs",
    name: "Professional Credibility Hubs",
    description: "AI-powered personal branding & professional portfolios",
    status: "📋 BUILDING",
    icon: Briefcase,
    color: "from-purple-500 to-pink-600",
    features: [
      "Portfolio Builder",
      "LinkedIn Optimizer",
      "Resume Generator",
      "Personal Branding",
    ],
    revenue: "₦5k-₦15k/setup",
    link: "/credibility",
    stats: { templates: 25, users: "1k+", rating: "4.8/5" },
  },
  {
    id: "business-planning",
    name: "AI Business Planning",
    description:
      "Dynamic business plans & market analysis for Nigerian startups",
    status: "📋 PLANNED",
    icon: TrendingUp,
    color: "from-orange-500 to-red-600",
    features: [
      "Business Plan Generator",
      "Pitch Deck Creator",
      "Market Analysis",
      "Financial Projections",
    ],
    revenue: "₦10k/plan",
    link: "/planning",
    stats: { plans: "200+", industries: 15, fundingRate: "68%" },
  },
  {
    id: "financial-forecasting",
    name: "Financial Forecasting",
    description: "AI cashflow modeling & revenue projections for SMEs",
    status: "📋 PLANNED",
    icon: BarChart3,
    color: "from-yellow-500 to-amber-600",
    features: [
      "Cashflow Projections",
      "Revenue Forecasting",
      "Break-even Analysis",
      "Scenario Planning",
    ],
    revenue: "₦8k/month",
    link: "/finance",
    stats: { accuracy: "92%", clients: "50+", savings: "₦2M+" },
  },
  {
    id: "investor-readiness",
    name: "Investor Readiness",
    description: "Complete funding documentation & cap table management",
    status: "📋 PLANNED",
    icon: Shield,
    color: "from-indigo-500 to-violet-600",
    features: [
      "SAFE Generator",
      "Data Room Setup",
      "Pitch Templates",
      "Cap Table Management",
    ],
    revenue: "₦50k setup + ₦10k/month",
    link: "/investor",
    stats: { funded: "₦500M+", startups: 75, successRate: "81%" },
  },
  {
    id: "branding-design",
    name: "Branding & Design Tools",
    description: "AI logo creation & marketing visuals",
    status: "📋 PLANNED",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    features: ["Logo generator", "Color palettes", "Marketing visuals"],
    revenue: "₦3k/design",
    link: "/branding-design",
    stats: { designs: "1k+", users: "500+", satisfaction: "96%" },
  },
  {
    id: "digital-storefronts",
    name: "Digital Storefronts",
    description: "Instant e-commerce stores for SMEs",
    status: "📋 PLANNED",
    icon: Store,
    color: "from-teal-500 to-emerald-500",
    features: ["Paystack integration", "Inventory", "Order tracking"],
    revenue: "₦5k setup + ₦2k/month",
    link: "/digital-storefronts",
    stats: { stores: "50+", products: "5k+", transactions: "₦10M+" },
  },
  {
    id: "marketing-automation",
    name: "Marketing Automation",
    description: "AI-driven campaigns & lead nurturing",
    status: "📋 PLANNED",
    icon: Mail,
    color: "from-blue-500 to-indigo-500",
    features: ["Email campaigns", "Segmentation", "Personalization"],
    revenue: "₦10k/month",
    link: "/marketing-automation",
    stats: { campaigns: "200+", openRate: "42%", conversion: "18%" },
  },
  {
    id: "analytics-dashboard",
    name: "Analytics Dashboard",
    description: "Cross-platform business intelligence",
    status: "📋 PLANNED",
    icon: Zap,
    color: "from-purple-500 to-blue-500",
    features: [
      "Unified analytics",
      "Customer insights",
      "Growth opportunities",
    ],
    revenue: "₦8k/month",
    link: "/analytics-dashboard",
    stats: { dashboards: "75+", dataPoints: "1M+", accuracy: "99%" },
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "₦15,000",
    period: "/month",
    description: "Perfect for solo entrepreneurs",
    color: "from-blue-500 to-cyan-500",
    features: [
      "1 AI Receptionist license",
      "Connect 2 social accounts",
      "Basic analytics",
      "Email support",
      "5GB storage",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "₦50,000",
    period: "/month",
    description: "For growing businesses",
    color: "from-purple-500 to-pink-500",
    features: [
      "3 AI Receptionist licenses",
      "Connect 5 social accounts",
      "Advanced analytics",
      "Priority support",
      "50GB storage",
      "API access",
      "Custom workflows",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₦200,000",
    period: "/month",
    description: "For agencies & corporates",
    color: "from-orange-500 to-red-500",
    features: [
      "Unlimited licenses",
      "Connect unlimited accounts",
      "Custom AI models",
      "24/7 phone support",
      "500GB storage",
      "Full API access",
      "White-label option",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PlanAIPage() {
  const [activeProduct, setActiveProduct] = useState("receptionist");

  const handleNavClick = (href: string) => {
    console.log("Navigating to:", href);
  };

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Navigation */}
      <SuperNavbar
        logoSrc="/logo.png"
        links={[
          { href: "#products", label: "Products", icon: "✨" },
          { href: "#features", label: "Features", icon: "🚀" },
          { href: "#pricing", label: "Pricing", icon: "💰" },
          { href: "#testimonials", label: "Success Stories", icon: "🌟" },
          { href: "/contact", label: "Contact", icon: "📞" },
        ]}
        cta={{
          href: "/onboarding",
          label: "Start Free Trial",
          icon: "🎯",
          variant: "glow",
        }}
        onLinkClick={handleNavClick}
        sticky={true}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-gray-300">
                🎯 Trusted by 100+ Nigerian Businesses
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              Automate Your Business with
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI-Powered Precision
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              The complete AI business stack built for Nigerian entrepreneurs.
              From lead capture to financial forecasting - automate everything.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/onboarding"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all flex items-center gap-3"
              >
                <Rocket className="w-5 h-5" />
                Start Free 14-Day Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProducts}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all flex items-center gap-3"
              >
                <PlayCircle className="w-5 h-5" />
                Watch Product Demo
              </motion.button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { label: "Active Clients", value: "100+", icon: Users },
                { label: "AI Tools", value: "10", icon: Sparkles },
                { label: "Revenue Generated", value: "₦50M+", icon: BarChart },
                { label: "Success Rate", value: "94%", icon: Target },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm"
                >
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Complete{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                AI Business Stack
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              10 specialized AI tools working together to automate every aspect
              of your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PlanAIProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onMouseEnter={() => setActiveProduct(product.id)}
                className={`relative group cursor-pointer ${
                  activeProduct === product.id ? "ring-2 ring-blue-500/50" : ""
                }`}
              >
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-500/30 transition-all h-full">
                  {/* Status Badge */}
                  <div className="absolute -top-3 left-6">
                    <span
                      className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                        product.status.includes("LIVE")
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : product.status.includes("BUILDING")
                            ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                            : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      }`}
                    >
                      {product.status.includes("LIVE") && "🚀"}
                      {product.status.includes("BUILDING") && "🔨"}
                      {product.status.includes("COMING SOON") && "📋"}
                      {product.status}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <product.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-6">{product.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-800/50 rounded-lg mb-6">
                    {product.stats &&
                      Object.entries(product.stats).map(([key, value], i) => (
                        <div key={i} className="text-center">
                          <div className="text-lg font-bold text-white">
                            {value}
                          </div>
                          <div className="text-xs text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, " $1")}
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div>
                      <div className="text-sm text-gray-400">Starting at</div>
                      <div className="text-xl font-bold text-white">
                        {product.revenue}
                      </div>
                    </div>
                    <Link
                      href={product.link}
                      className={`px-6 py-2.5 rounded-lg font-bold transition-all ${
                        product.status.includes("LIVE")
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                          : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                      }`}
                    >
                      {product.status.includes("LIVE")
                        ? "Try Now"
                        : "Get Notified"}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 px-4 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that fits your business. All plans include 14-day
              free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative rounded-3xl p-8 ${
                  plan.popular
                    ? "bg-gradient-to-b from-gray-800 to-gray-900 border-2 border-purple-500/50 shadow-2xl shadow-purple-500/20"
                    : "bg-gray-800/50 border border-gray-700"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full text-sm whitespace-nowrap">
                      ⚡ MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-5xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle
                        className={`w-5 h-5 ${plan.popular ? "text-green-400" : "text-blue-400"}`}
                      />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 font-bold rounded-xl transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl"
                      : "bg-gray-700 text-white hover:bg-gray-600"
                  }`}
                >
                  {plan.cta}
                </motion.button>

                {plan.popular && (
                  <div className="text-center mt-4 text-sm text-gray-400">
                    <Lock className="w-4 h-4 inline mr-1" />
                    30-day money back guarantee
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Enterprise CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block p-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl border border-gray-700 max-w-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Custom Enterprise Solution?
              </h3>
              <p className="text-gray-400 mb-6">
                We build custom AI workflows for large teams and agencies with
                specific requirements.
              </p>
              <button className="px-8 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all">
                Schedule Enterprise Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl p-12 border border-white/10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 100+ Nigerian businesses already growing with PlanAI. Start
              your 14-day free trial today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/onboarding"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all"
              >
                🚀 Start Free Trial
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/demo"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
              >
                📺 Book Live Demo
              </motion.a>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <Clock className="w-4 h-4 inline mr-1" />
              Average setup time: 24 hours • No credit card required
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <SuperFooter
        logoSrc="/logo.png"
        sections={[
          {
            title: "Products",
            links: [
              { href: "/receptionist", label: "AI Receptionist" },
              { href: "/social-factory", label: "Social Media Factory" },
              { href: "/credibility", label: "Credibility Hubs" },
              { href: "/planning", label: "Business Planning" },
            ],
          },
          {
            title: "Company",
            links: [
              {
                href: "https://boldmind.ng",
                label: "BoldMind",
                isExternal: true,
              },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
              { href: "/careers", label: "Careers" },
            ],
          },
          {
            title: "Resources",
            links: [
              { href: "/blog", label: "Blog" },
              { href: "/docs", label: "Documentation" },
              { href: "/api", label: "API" },
              { href: "/status", label: "System Status" },
            ],
          },
        ]}
        contactInfo={{
          email: "hello@planai.boldmind.ng",
          phone: "+234 913 834 9271",
          address: "Lagos, Nigeria",
        }}
        newsletter={true}
        showStats={true}
        animated={true}
        copyright={`© ${new Date().getFullYear()} PlanAI by BoldMind. All rights reserved.`}
        // socialLinks={[
        //   { platform: "twitter", url: "https://twitter.com/boldmindtech" },
        //   {
        //     platform: "linkedin",
        //     url: "https://linkedin.com/company/boldmind",
        //   },
        //   { platform: "instagram", url: "https://instagram.com/boldmindtech" },
        //   { platform: "youtube", url: "https://youtube.com/@boldmindtech" },
        // ]}
      />
    </div>
  );
}
