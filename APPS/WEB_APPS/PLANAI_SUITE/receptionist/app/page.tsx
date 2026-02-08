"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  SuperNavbar,
  SuperFooter,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  ParticleBackground,
  TypewriterEffect,
} from "@boldmind/ui";
import {
  MessageSquare,
  Calendar,
  Users,
  CheckCircle2,
  PhoneCall,

} from "lucide-react";
import logo from "../public/logo.png";

export default function Home() {
  const [_scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const features = [
    {
      icon: <MessageSquare className="w-8 h-8 text-[#FFC800]" />,
      title: "Omnichannel Responses",
      description: "Instantly replies to DMs on WhatsApp, Instagram, Facebook, and your website chat."
    },
    {
      icon: <Calendar className="w-8 h-8 text-[#FFC800]" />,
      title: "Smart Scheduling",
      description: "Qualifies leads and books appointments directly into your calendar without human intervention."
    },
    {
      icon: <Users className="w-8 h-8 text-[#FFC800]" />,
      title: "CRM Integration",
      description: "Automatically syncs customer details, conversation history, and booking data to your CRM."
    },
    {
      icon: <PhoneCall className="w-8 h-8 text-[#FFC800]" />,
      title: "Voice Handling",
      description: "Handles inbound calls, answers FAQs, and routes urgent matters to human staff."
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "₦15,000",
      period: "/month",
      description: "Perfect for solo entrepreneurs and small clinics.",
      features: ["1 AI Receptionist", "WhatsApp & Instagram", "100 Conversations/mo", "Basic Booking", "Email Support"]
    },
    {
      name: "Professional",
      price: "₦35,000",
      period: "/month",
      featured: true,
      description: "For growing businesses needing 24/7 coverage.",
      features: ["3 AI Receptionists", "All Channels Included", "Unlimited Conversations", "Form Integration", "Priority Support", "CRM Sync"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations.",
      features: ["Unlimited Receptionists", "Custom Voice Models", "Dedicated Account Manager", "API Access", "SLA Guarantee", "On-premise Deployment"]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans selection:bg-[#FFC800]/30 text-gray-900 dark:text-white">
      <SuperNavbar
        logoSrc={logo.src}
        cta={{ label: "Get Started", href: "/register" }}
        sticky={true}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[#000814] z-0">
          <ParticleBackground className="opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000814]/80 to-[#000814]"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC800]/10 border border-[#FFC800]/20 mb-8 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC800] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FFC800]"></span>
              </span>
              <span className="text-[#FFC800] text-sm font-bold tracking-wide uppercase">AI Active 24/7</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6">
              Never Miss A <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC800] to-[#FFD700]">
                Client Opportunity
              </span>
            </h1>

            <div className="h-24 md:h-16 mb-8 flex items-center justify-center">
              <TypewriterEffect
                texts={[
                  "Auto-book appointments while you sleep.",
                  "Answer customer FAQs instantly.",
                  "Qualify leads on WhatsApp & IG.",
                  "Your business never closes."
                ]}
                className="text-xl md:text-2xl text-gray-400 font-medium"
                cursorClassName="bg-[#FFC800]"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button
                size="lg"
                className="bg-[#FFC800] text-black hover:bg-[#FFD700] text-lg px-8 py-6 rounded-xl font-bold"
                onClick={() => window.location.href = '/register'}
              >
                Start Your Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl"
              >
                View Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="relative py-20 bg-[#000814] overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 md:p-8 shadow-2xl shadow-[#FFC800]/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left: Chat Interface */}
              <div className="md:col-span-1 bg-gray-900 rounded-2xl border border-white/10 p-4 flex flex-col h-[500px]">
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFC800] to-yellow-600 flex items-center justify-center text-black font-bold">
                    AI
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Receptionist</h3>
                    <p className="text-xs text-[#FFC800]">Online • Replying now</p>
                  </div>
                </div>
                <div className="flex-1 py-4 space-y-4 overflow-y-auto">
                  <div className="bg-white/10 rounded-tl-xl rounded-tr-xl rounded-br-xl p-3 text-sm text-white max-w-[85%]">
                    Hello! How can I help you today?
                  </div>
                  <div className="bg-[#FFC800] text-black rounded-tl-xl rounded-tr-xl rounded-bl-xl p-3 text-sm ml-auto max-w-[85%]">
                    I'd like to book an appointment for a dental checkup.
                  </div>
                  <div className="bg-white/10 rounded-tl-xl rounded-tr-xl rounded-br-xl p-3 text-sm text-white max-w-[85%]">
                    I can help with that! We have openings this Thursday at 2 PM or Friday at 10 AM. Which works best for you?
                  </div>
                  <div className="bg-[#FFC800] text-black rounded-tl-xl rounded-tr-xl rounded-bl-xl p-3 text-sm ml-auto max-w-[85%]">
                    Friday at 10 AM works.
                  </div>
                  <div className="bg-white/10 rounded-tl-xl rounded-tr-xl rounded-br-xl p-3 text-sm text-white max-w-[85%]">
                    Great! I've booked you for Friday at 10 AM. You will receive a confirmation email shortly.
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <div className="h-10 bg-white/5 rounded-full w-full"></div>
                </div>
              </div>

              {/* Right: Stats & Info */}
              <div className="md:col-span-2 flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Human-like conversations at <span className="text-[#FFC800]">machine speed</span>.
                  </h2>
                  <p className="text-gray-400 text-lg">
                    Our AI understands context, nuance, and intent. It doesn't just answer questions—it drives conversions and manages your schedule while you focus on high-value work.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <div className="text-3xl font-black text-[#FFC800] mb-1">24/7</div>
                    <div className="text-sm text-gray-400">Availability</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <div className="text-3xl font-black text-[#FFC800] mb-1">&lt; 2s</div>
                    <div className="text-sm text-gray-400">Response Time</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <div className="text-3xl font-black text-[#FFC800] mb-1">3x</div>
                    <div className="text-sm text-gray-400">More Bookings</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <div className="text-3xl font-black text-[#FFC800] mb-1">0</div>
                    <div className="text-sm text-gray-400">Missed Leads</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              More Than Just A Chatbot
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              A complete front-desk automation system designed for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 p-3 bg-[#FFC800]/10 w-fit rounded-xl">
                    {feature.icon}
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

      {/* PRICING */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Start for free, upgrade as you grow. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, i) => (
              <Card
                key={i}
                className={`relative border-2 ${plan.featured ? 'border-[#FFC800] shadow-2xl scale-105 z-10' : 'border-gray-100 dark:border-gray-800'} transition-all`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FFC800] text-black font-bold px-4 py-1 rounded-full text-sm">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {plan.features.map((feat, k) => (
                      <li key={k} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#FFC800]" />
                        <span className="text-gray-600 dark:text-gray-300">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full py-6 text-lg font-bold rounded-xl ${plan.featured ? 'bg-[#FFC800] text-black hover:bg-[#FFD700]' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                  >
                    Choose {plan.name}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#000814] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute -right-20 -top-20 w-[600px] h-[600px] bg-[#FFC800]/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-[600px] h-[600px] bg-[#FFC800]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join 500+ Nigerian businesses saving 20 hours a week with AI Receptionist.
          </p>
          <Button
            size="lg"
            className="bg-[#FFC800] text-black hover:bg-[#FFD700] text-xl px-12 py-8 rounded-2xl font-black shadow-lg shadow-[#FFC800]/20 hover:shadow-[#FFC800]/40 transition-all transform hover:-translate-y-1"
            onClick={() => window.location.href = '/register'}
          >
            Get Started for Free
          </Button>
          <p className="mt-6 text-sm text-gray-500">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      <SuperFooter
        logoSrc={logo.src}
        sections={[
          { title: "Product", links: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }] },
          { title: "Company", links: [{ label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] },
          { title: "Legal", links: [{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }] }
        ]}
      />
    </div>
  );
}