"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SuperNavbar, SuperFooter } from "@boldmind/ui";
import { 
  getLiveProducts, 
  getBuildingProducts, 
  getPlannedProducts, 
  getConceptProducts,
  type Product 
} from "@boldmind/utils";

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "BoldMind Technology Solution Enterprise";

export default function HomePage() {
  const [entrepreneurs, setEntrepreneurs] = useState(0);

  useEffect(() => {
    const target = 1000000;
    const duration = 4000;
    const increment = target / (duration / 16);

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setEntrepreneurs(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, []);

  // Get ALL products from utils
  const liveProducts = getLiveProducts();
  const buildingProducts = getBuildingProducts();
  const plannedProducts = getPlannedProducts();
  const conceptProducts = getConceptProducts();

  // Get PlanAI products (from ai category)
  const planAIProducts = plannedProducts.filter(p => 
    p.category === 'ai' || p.dependencies?.includes('PlanAI Suite')
  );

  // Helper function to get product color
  const getProductColor = (product: Product): string => {
    const colorMap: Record<string, string> = {
      'amebogist': '#00A859',
      'educenter': '#2A4A6E',
      'ai-receptionist': '#FFC800',
      'social-factory': '#9C27B0',
      'boldmind-os': '#E63946',
      'emailscraper-pro': '#2196F3',
      'safe-ai': '#FF5722',
      'naija-fither': '#FF4081',
      'credibility-hubs': '#3F51B5',
      'business-planning': '#009688',
      'financial-forecasting': '#8BC34A',
      'investor-readiness': '#795548',
      'branding-design': '#FF9800',
      'digital-storefronts': '#E91E63',
      'marketing-automation': '#673AB7',
      'analytics-dashboard': '#00BCD4',
      'boldmind-hub': '#00143C',
    };
    
    return colorMap[product.slug] || '#00143C';
  };

  // Navigation configuration
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "#products", label: "Products" }, 
    { href: "/planai", label: "PlanAI" },
    { href: "/contact", label: "Contact" },
  ];

  // Footer configuration - FIXED: Added actual links instead of #
  const footerSections = [
    {
      title: "Products",
      links: [
        { href: "https://amebogist.ng", label: "AmeboGist", isExternal: true },
        { href: "https://educenter.com.ng", label: "EduCenter", isExternal: true },
        { href: "/planai", label: "PlanAI Suite" },
        { href: "/products/boldmind-os", label: "BoldMind OS" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/#ecosystem", label: "Ecosystem" },
        { href: "/#products", label: "Products" },
        { href: "https://amebogist.ng", label: "Blog", isExternal: true },
        { href: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/cookies", label: "Cookie Policy" },
        { href: "/gdpr", label: "GDPR" },
      ],
    },
  ];

  // Flywheel steps - using your live products
  const flywheelSteps = [
    {
      title: "Awareness",
      product: "AmeboGist.ng",
      description: "Building mass audience through authentic media",
      color: "#00A859",
      icon: "📰",
      link: "https://amebogist.ng",
      isExternal: true,
    },
    {
      title: "Education",
      product: "EduCenter.com.ng",
      description: "Converting audience through structured knowledge",
      color: "#2A4A6E",
      icon: "🎓",
      link: "https://educenter.com.ng",
      isExternal: true,
    },
    {
      title: "Enablement",
      product: "PlanAI Suite",
      description: "Providing high-leverage tools for entrepreneurs",
      color: "#FFC800",
      icon: "🤖",
      link: "/planai",
    },
  ];

  const values = [
    {
      letter: "B",
      word: "Boldness",
      description: "Courage to tackle Nigeria's biggest problems",
    },
    {
      letter: "E",
      word: "Excellence",
      description: "Delivering quality and measurable impact",
    },
    {
      letter: "R",
      word: "Relevance",
      description: "Solutions built for Nigerian context",
    },
    {
      letter: "A",
      word: "Authenticity",
      description: "True to our culture and community voice",
    },
    {
      letter: "G",
      word: "Growth",
      description: "Continuous improvement and empowerment",
    },
  ];

  const handleNavClick = (href: string) => {
    // Log navigation for analytics
    if (process.env.NODE_ENV === 'development') {
      console.log("Navigating to:", href);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <SuperNavbar
        links={navLinks}
        cta={{
          href: "https://wa.me/2349138349271",
          label: "Join Movement",
          variant: "glow",
          icon: "🚀",
        }}
        logoSrc="/logo.png"
        // theme="transparent"
        sticky={true}
        animated={true}
        showThemeControls={true}
        onLinkClick={handleNavClick}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00143C] via-[#0A1F4F] to-[#2A4A6E] text-white overflow-hidden pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#FFC800]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#00A859]/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FFC800] rounded-full animate-pulse" />
                <span className="text-[#FFC800] font-bold text-sm sm:text-base">
                  EMPOWERING 1M NIGERIAN ENTREPRENEURS BY 2030
                </span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight tracking-tight">
              Building Systems That
              <br />
              <span className="text-[#FFC800] bg-clip-text bg-gradient-to-r from-[#FFC800] to-[#FFD700]">
                Shift Nations
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
              Welcome to <span className="font-bold">{SITE_NAME}</span> - a
              Nigerian tech ecosystem creating impact-driven products that solve
              fundamental problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#products"
                className="px-6 sm:px-10 py-3 sm:py-4 bg-[#FFC800] text-[#00143C] font-bold text-base sm:text-lg rounded-lg hover:bg-[#FFD700] transition-all shadow-xl w-full sm:w-auto text-center"
              >
                Explore Our Ecosystem
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/planai"
                className="px-6 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-bold text-base sm:text-lg rounded-lg hover:bg-white/10 transition-all w-full sm:w-auto text-center"
              >
                Discover PlanAI Suite
              </motion.a>
            </div>

            {/* Live Products Badges */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 px-4">
              {liveProducts.map((product) => (
                <a
                  key={product.id}
                  href={product.links?.website || `/products/${product.slug}`}
                  target={product.links?.website ? "_blank" : undefined}
                  rel={product.links?.website ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg hover:border-[#FFC800]/30 transition-colors group max-w-xs sm:max-w-none"
                >
                  <span className="text-xl sm:text-2xl">{product.icon}</span>
                  <div className="text-left">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <span className="font-bold text-white text-sm sm:text-base">
                        {product.name}
                      </span>
                      <span className="text-xs bg-green-900/30 text-green-400 px-2 py-0.5 sm:py-1 rounded">
                        🚀 LIVE
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 line-clamp-2 max-w-[140px] sm:max-w-[200px]">
                      {product.description.substring(0, 80)}...
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Flywheel Section */}
      <section id="ecosystem" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#00143C] mb-4 sm:mb-6">
              The <span className="text-[#FFC800]">BoldMind Flywheel</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our strategy creates a value loop where each part strengthens the others
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {flywheelSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-b from-white to-gray-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.icon}
                    </div>
                  </div>

                  <div className="pt-8 sm:pt-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-gray-100 mb-3 sm:mb-4">
                      <span
                        className="text-xs sm:text-sm font-bold"
                        style={{ color: step.color }}
                      >
                        STEP {index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#00143C] mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <h4
                      className="text-base sm:text-lg font-bold mb-3 sm:mb-4"
                      style={{ color: step.color }}
                    >
                      {step.product}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">{step.description}</p>

                    <a
                      href={step.link}
                      target={step.isExternal ? "_blank" : undefined}
                      rel={step.isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-[#00143C] font-semibold hover:gap-3 transition-all text-sm sm:text-base"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products Showcase */}
      <section id="products" className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#00143C] mb-4 sm:mb-6">
              Our <span className="text-[#FFC800]">31+ Product</span> Ecosystem
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From media and education to AI-powered business tools
            </p>
          </div>

          {/* Live Products */}
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="w-2 sm:w-3 h-6 sm:h-8 bg-green-500 rounded" />
              <h3 className="text-xl sm:text-2xl font-bold text-[#00143C]">✅ LIVE PRODUCTS</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {liveProducts.map((product) => (
                <motion.a
                  key={product.id}
                  href={product.links?.website || `/products/${product.slug}`}
                  target={product.links?.website ? "_blank" : undefined}
                  rel={product.links?.website ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl"
                        style={{ backgroundColor: getProductColor(product) }}
                      >
                        {product.icon}
                      </div>
                      <span className="text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 bg-green-100 text-green-800 rounded-full">
                        🚀 LIVE
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#00143C] mb-2">
                    {product.name}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <div className="flex items-center text-[#00143C] font-semibold text-sm sm:text-base group-hover:gap-2 transition-all">
                    <span>Visit Product</span>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Building & New Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <div className="w-2 sm:w-3 h-6 sm:h-8 bg-yellow-500 rounded" />
                <h3 className="text-xl sm:text-2xl font-bold text-[#00143C]">🔨 BUILDING & 🆕 NEW</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {buildingProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl border border-gray-200 hover:border-[#FFC800] transition-colors"
                  >
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-lg sm:text-xl"
                      style={{ backgroundColor: getProductColor(product) }}
                    >
                      {product.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1 sm:gap-2 mb-1">
                        <h4 className="font-bold text-[#00143C] text-sm sm:text-base">{product.name}</h4>
                        <span className="text-xs font-bold px-1.5 sm:px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded">
                          🔨 BUILDING
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Planned Products (PlanAI Suite) */}
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <div className="w-2 sm:w-3 h-6 sm:h-8 bg-blue-500 rounded" />
                <h3 className="text-xl sm:text-2xl font-bold text-[#00143C]">📋 PLANAI SUITE (PLANNED)</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {planAIProducts.length > 0 ? (
                  planAIProducts.slice(0, 8).map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-200 hover:border-blue-300 transition-colors"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-base sm:text-lg"
                          style={{ backgroundColor: getProductColor(product) }}
                        >
                          {product.icon}
                        </div>
                        <h5 className="font-semibold text-[#00143C] text-xs sm:text-sm">{product.name}</h5>
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {product.description}
                      </p>
                    </motion.div>
                  ))
                ) : (
                  plannedProducts.slice(0, 8).map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-200 hover:border-blue-300 transition-colors"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-base sm:text-lg"
                          style={{ backgroundColor: getProductColor(product) }}
                        >
                          {product.icon}
                        </div>
                        <h5 className="font-semibold text-[#00143C] text-xs sm:text-sm">{product.name}</h5>
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {product.description}
                      </p>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Concept Products */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="w-2 sm:w-3 h-6 sm:h-8 bg-purple-500 rounded" />
              <h3 className="text-xl sm:text-2xl font-bold text-[#00143C]">💡 CONCEPT PRODUCTS</h3>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {conceptProducts.slice(0, 10).map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-200 rounded-lg sm:rounded-xl hover:border-purple-300 transition-colors"
                >
                  <span className="text-base sm:text-lg">{product.icon}</span>
                  <span className="font-medium text-gray-800 text-sm sm:text-base">{product.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B.E.R.A.G Values */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#00143C] to-[#2A4A6E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              Our Core Values
            </h2>
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-6 sm:mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-1 sm:gap-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FFC800] rounded-full flex items-center justify-center">
                    <span className="text-[#00143C] font-black text-sm sm:text-lg">
                      {value.letter}
                    </span>
                  </div>
                  {index < values.length - 1 && (
                    <div className="w-4 h-0.5 sm:w-6 sm:h-0.5 bg-gray-500" />
                  )}
                </div>
              ))}
            </div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              The principles that guide every product we build
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-[#FFC800] to-[#FFD700] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl">
                  <span className="text-2xl sm:text-4xl font-black text-[#00143C]">
                    {value.letter}
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3">{value.word}</h3>
                <p className="text-gray-300 text-sm sm:text-base px-2">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 1M Entrepreneurs Counter */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-[#FFC800] to-[#FFD700] text-[#00143C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 sm:mb-8">
            Empowering Nigerian Entrepreneurs
          </h2>
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 sm:mb-6 font-mono tracking-tight">
            {entrepreneurs.toLocaleString()}
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl font-bold mb-6 sm:mb-10">
            Nigerian Entrepreneurs by 2030
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://wa.me/2349138349271"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 bg-[#00143C] text-white font-bold text-base sm:text-lg rounded-lg hover:bg-[#00255C] transition-all shadow-xl"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Join the Movement on WhatsApp
            </a>
            <a
              href="/planai"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 bg-white text-[#00143C] font-bold text-base sm:text-lg rounded-lg hover:bg-gray-100 transition-all"
            >
              Explore Business Tools
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SuperFooter
        variant="default"
        showStats={true}
        animated={true}
        newsletter={true}
        sections={footerSections}
      />
    </div>
  );
}