"use client";

import { motion } from "framer-motion";
import {
  SuperNavbar,
  SuperFooter,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  ParticleBackground,
  TypewriterEffect,
} from "@boldmind/ui";
import {
  ShoppingBag,
  Smartphone,
  CreditCard,
  TrendingUp,
  QrCode,
  Globe,
} from "lucide-react";

export default function Home() {

  const features = [
    {
      icon: <Globe className="w-8 h-8 text-[#E91E63]" />,
      title: "Custom Domain & SEO",
      description: "Get a professional .com.ng or .ng domain with built-in SEO tools to help customers find you on Google."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-[#E91E63]" />,
      title: "Mobile-First Design",
      description: "Your store looks perfect on every device. 85% of Nigerian shoppers buy on mobile—we make sure you capture them."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-[#E91E63]" />,
      title: "Instant Payments",
      description: "Accept card transfers, USSD, and bank payments instantly through Paystack & Flutterwave integration."
    },
    {
      icon: <QrCode className="w-8 h-8 text-[#E91E63]" />,
      title: "WhatsApp Integration",
      description: "Orders go straight to your WhatsApp. Chat with customers and close sales in real-time."
    }
  ];

  const templates = [
    { name: "Fashion Boutique", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80", category: "Retail" },
    { name: "Tech Gadgets", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80", category: "Electronics" },
    { name: "Fresh Foods", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80", category: "Groceries" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans text-gray-900 dark:text-white selection:bg-[#E91E63]/30">
      <SuperNavbar
        logoSrc="/logo.png"
        cta={{ label: "Create Your Store", href: "/register" }}
        sticky={true}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[#0F0518] z-0">
          <ParticleBackground className="opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63]/20 via-[#0F0518] to-[#0F0518]"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E91E63]/10 border border-[#E91E63]/20 mb-8 backdrop-blur-sm">
                <span className="text-[#E91E63] text-sm font-bold tracking-wide uppercase">Launch in 5 Minutes</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
                Turn Your Passion Into A <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] to-[#FF4081]">
                  Digital Empire
                </span>
              </h1>

              <div className="h-16 mb-8">
                <TypewriterEffect
                  texts={[
                    "Sell on Instagram automatically.",
                    "Accept payments instantly.",
                    "Manage inventory easily.",
                    "Grow your brand globally."
                  ]}
                  className="text-xl md:text-2xl text-gray-300 font-medium"
                  cursorClassName="bg-[#E91E63]"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#E91E63] text-white hover:bg-[#C2185B] text-lg px-8 py-6 rounded-xl font-bold shadow-lg shadow-[#E91E63]/30"
                  onClick={() => window.location.href = '/register'}
                >
                  Create Store - Free Trial
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl"
                >
                  View Examples
                </Button>
              </div>
            </motion.div>

            {/* Hero Image/Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 w-full aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white/5 shadow-2xl shadow-[#E91E63]/20 bg-gray-900">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&q=80"
                  alt="Dashboard"
                  className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Cards */}
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: -10 }}
                  transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
                  className="absolute bottom-10 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <ShoppingBag className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">New Order • 2m ago</p>
                      <p className="font-bold text-gray-900 dark:text-white">₦25,000.00 received</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: 10 }}
                  transition={{ repeat: Infinity, repeatType: "reverse", duration: 4 }}
                  className="absolute top-10 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#E91E63]/10 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-[#E91E63]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Sales Growth</p>
                      <p className="font-bold text-gray-900 dark:text-white">+145% this week</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Background Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#E91E63]/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TEMPLATES SHOWCASE */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Stunning Templates. <br />
              <span className="text-[#E91E63]">Zero Coding Required.</span>
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Choose a design that matches your brand. Customize it in minutes with our drag-and-drop builder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {templates.map((template, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={template.image} alt={template.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-24">
                    <span className="text-xs font-bold text-[#E91E63] bg-white/10 backdrop-blur px-2 py-1 rounded mb-2 inline-block border border-white/20">
                      {template.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1">{template.name}</h3>
                    <p className="text-white/80 text-sm">View Demo →</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Everything You Need To Sell
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Powerful tools to manage your products, customers, and payments in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <Card key={i} className="border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl hover:shadow-[#E91E63]/5 transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="mb-4 p-4 bg-[#E91E63]/5 w-fit rounded-2xl group-hover:bg-[#E91E63] transition-colors duration-300">
                    <div className="text-[#E91E63] group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#E91E63] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute rotate-12 -right-20 -top-40 w-[600px] h-[600px] bg-white rounded-3xl blur-3xl"></div>
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Start Your Business Today
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
            Join thousands of Nigerian entrepreneurs who trust Digital Storefronts to power their online sales.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#E91E63] hover:bg-gray-100 text-xl px-12 py-8 rounded-2xl font-black shadow-2xl transition-all transform hover:-translate-y-1"
            onClick={() => window.location.href = '/register'}
          >
            Launch My Store
          </Button>
        </div>
      </section>

      <SuperFooter
        logoSrc="/logo.png"
        sections={[
          { title: "Product", links: [{ label: "Templates", href: "#" }, { label: "Features", href: "#" }] },
          { title: "Resources", links: [{ label: "Help Center", href: "#" }, { label: "Blog", href: "#" }] },
          { title: "Legal", links: [{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }] }
        ]}
      />
    </div>
  );
}