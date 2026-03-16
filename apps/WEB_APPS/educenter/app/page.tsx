// apps/web/educenter/app/(home)/page.tsx
"use client";

import { motion } from "framer-motion";
import { SuperNavbar, SuperFooter } from "@boldmind/ui";
import {
  BookOpen,
  Award,
  TrendingUp,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  PlayCircle,
  Brain,
  Video,
  Zap,
  MessageSquare,
  BarChart3,
  Target,
  Shield,
  Globe,
  Smartphone,
  Clock,
  Bookmark,
  FileText,
  Rocket,
  GraduationCap,
  Calculator,
  Bot,
  Palette,
  Store,
  Mail,
  Users2,
  HelpCircle,
  TrendingUp as TrendingUpIcon,
  Sparkles,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function EduCenterHomePage() {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex(
        (prev) => (prev + 1) % coreFeatures.flatMap((f) => f.features).length,
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { href: "/", label: "Home",  },
    { href: "/courses", label: "Courses", },
    {
      href: "/jamb",
      label: "JAMB Prep",
      badge: " Hot",
      icon: "🎯",
      description: "2026 Syllabus",
    },
    { href: "/waec-neco", label: "WAEC/NECO",  },
    { href: "/business", label: "Business", },
    { href: "/ai-tools", label: "AI Tools",  },
    { href: "/pricing", label: "Pricing",  },
    { href: "/community", label: "Community",  },
  ];

  const footerSections = [
    {
      title: "📚 EXAM PREP",
      links: [
        { href: "/jamb/practice", label: "JAMB Practice (10K+ Qs)" },
        { href: "/jamb/past-questions", label: "Past Questions (2010-2025)" },
        { href: "/waec", label: "WAEC Subjects" },
        { href: "/neco", label: "NECO Subjects" },
        { href: "/cbt-simulator", label: "CBT Simulator", badge: "NEW" },
        { href: "/performance-analytics", label: "Performance Analytics" },
      ],
    },
    {
      title: "💼 BUSINESS",
      links: [
        {
          href: "/courses/digital-business",
          label: "Digital Business Courses",
        },
        { href: "/sales-funnels", label: "Sales Funnel Templates" },
        { href: "/whatsapp-automation", label: "WhatsApp Automation" },
        { href: "/marketing-playbooks", label: "Marketing Playbooks" },
        { href: "/masterclasses", label: "Expert Masterclasses" },
        { href: "/community/entrepreneurs", label: "Entrepreneur Community" },
      ],
    },
    {
      title: "🤖 AI TOOLS",
      links: [
        { href: "/ai/video-generation", label: "AI Video Generation" },
        { href: "/ai/prompt-engineering", label: "Prompt Engineering Course" },
        { href: "/ai/whatsapp-automation", label: "WhatsApp AI Automation" },
        { href: "/ai/content-suite", label: "Content Creation Suite" },
        { href: "/ai/marketplace", label: "AI Tools Marketplace" },
        { href: "/ai/learning-path", label: "AI Skills Learning Path" },
      ],
    },
    {
      title: "🏫 RESOURCES",
      links: [
        { href: "/blog", label: "Study Tips Blog" },
        { href: "/faq", label: "FAQ & Help Center" },
        { href: "/career-guidance", label: "Career Guidance" },
        { href: "/scholarships", label: "Scholarship Opportunities" },
        { href: "/downloads", label: "Free Downloads" },
        {
          href: "https://boldmind.ng",
          label: "BoldMind Ecosystem",
          isExternal: true,
        },
      ],
    },
  ];

  const coreFeatures = [
    {
      category: "📚 Exam Excellence",
      features: [
        { text: "JAMB/WAEC/NECO Past Questions (10,000+)", icon: BookOpen },
        { text: "Subject-Based Practice & Mock Exams", icon: FileText },
        {
          text: "CBT Simulation Mode (Real Exam Experience)",
          icon: Calculator,
        },
        { text: "Performance Tracking & Analytics Dashboard", icon: BarChart3 },
        { text: "Study Streak System & Daily Goals", icon: Target },
        { text: "Random Practice (5 free attempts daily)", icon: Zap },
        { text: "National Leaderboard & Competition", icon: TrendingUpIcon },
      ],
    },
    {
      category: "💼 Business Mastery",
      features: [
        { text: "Course Library (Free & Premium)", icon: BookOpen },
        { text: "Sales Funnel Templates", icon: TrendingUp },
        { text: "WhatsApp Automation Guides", icon: MessageSquare },
        { text: "Marketing Playbooks & Strategies", icon: Award },
        { text: "Expert-Led Masterclasses", icon: GraduationCap },
        { text: "Business Community Access", icon: Users2 },
      ],
    },
    {
      category: "🤖 AI-Powered Learning",
      features: [
        { text: "AI Video Generation Tool", icon: Video },
        { text: "Prompt Engineering Course", icon: Brain },
        { text: "WhatsApp AI Automation", icon: Bot },
        { text: "Content Creation Suite", icon: Palette },
        { text: "AI Tools Marketplace", icon: Store },
        { text: "AI Skills Certification", icon: Shield },
      ],
    },
  ];

  const learningPaths = [
    {
      title: "JAMB Aspirant",
      icon: "🎯",
      description: "Score 300+ in JAMB 2026",
      steps: [
        "Diagnostic Test",
        "Personalized Plan",
        "Daily Practice",
        "Mock Exams",
        "Final Prep",
      ],
      duration: "3-6 months",
      students: "25K+",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Business Builder",
      icon: "💼",
      description: "Start & Scale Digital Business",
      steps: [
        "Idea Validation",
        "Sales Funnels",
        "Automation",
        "Marketing",
        "Scaling",
      ],
      duration: "2-4 months",
      students: "8K+",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "AI Specialist",
      icon: "🤖",
      description: "Master AI Tools for Career",
      steps: [
        "AI Fundamentals",
        "Prompt Engineering",
        "Automation",
        "Content Creation",
        "Portfolio",
      ],
      duration: "1-3 months",
      students: "12K+",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "WAEC Excellence",
      icon: "🏆",
      description: "Ace All WAEC Subjects",
      steps: [
        "Weakness Analysis",
        "Topic Mastery",
        "Past Papers",
        "Time Management",
        "Exam Strategy",
      ],
      duration: "4-8 months",
      students: "18K+",
      color: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    {
      value: "50K+",
      label: "Active Students",
      icon: Users,
      trend: "+35% this month",
    },
    {
      value: "10K+",
      label: "Practice Questions",
      icon: BookOpen,
      trend: "Updated Weekly",
    },
    {
      value: "95%",
      label: "Exam Success Rate",
      icon: Award,
      trend: "Of our students",
    },
    {
      value: "4.8/5",
      label: "Student Rating",
      icon: Star,
      trend: "Based on 2K reviews",
    },
    {
      value: "₦60M+",
      label: "Revenue Generated",
      icon: TrendingUp,
      trend: "For our partners",
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: Clock,
      trend: "Via WhatsApp",
    },
  ];

  const testimonials = [
    {
      name: "Chinyere Okafor",
      score: "298/400",
      image: "👩‍⚕️",
      text: "EduCenter helped me score 298 and get into Medicine! The CBT simulator was exactly like the real exam.",
      subject: "Medicine & Surgery, UNILAG",
      feature: "JAMB CBT Simulator",
    },
    {
      name: "Olumide Adeyemi",
      score: "315/400",
      image: "👨‍💻",
      text: "From 180 to 315! The performance analytics showed me exactly where to improve. Best ₦3k I ever spent.",
      subject: "Computer Science, UI",
      feature: "Performance Analytics",
    },
    {
      name: "Fatima Abubakar",
      score: "285/400",
      image: "👩‍⚖️",
      text: "The WhatsApp AI automation course helped me start a digital business while preparing for Law school.",
      subject: "Law, ABU",
      feature: "Business + AI Tools",
    },
    {
      name: "Emeka Nwosu",
      score: "305/400",
      image: "👨‍🔬",
      text: "10,000+ past questions with detailed explanations. I practiced every topic until I mastered it.",
      subject: "Engineering, FUTA",
      feature: "Question Bank",
    },
  ];

  const techStack = [
    { name: "Next.js 14", icon: "⚡", purpose: "Blazing Fast Performance" },
    { name: "MongoDB", icon: "🗄️", purpose: "Real-time Analytics" },
    { name: "Paystack", icon: "💳", purpose: "Secure Payments" },
    { name: "PWA", icon: "📱", purpose: "Mobile App Experience" },
    { name: "WhatsApp API", icon: "💬", purpose: "Instant Support" },
    { name: "AI APIs", icon: "🧠", purpose: "Smart Learning" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <SuperNavbar
        links={navLinks}
        cta={{
          href: "/register",
          label: "Start Free Trial",
          variant: "primary",
        }}
        logoSrc="/logo.png"
      />

      {/* Hero Section - Redesigned */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] via-[#2A4A6E] to-[#0F2744] text-white overflow-hidden pt-24 pb-32">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-2xl" />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 animate-float">
          <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center">
            <div className="text-2xl">🎯</div>
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float-delayed">
          <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center">
            <div className="text-xl">📈</div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Trust badge */}
              <div className="inline-flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-lg rounded-2xl mb-8 border border-white/20">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="font-bold">LIVE Platform</span>
                </div>
                <div className="h-6 w-px bg-white/30" />
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="font-bold">50K+ Students</span>
                </div>
                <div className="h-6 w-px bg-white/30" />
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span className="font-bold">₦60M+ Revenue</span>
                </div>
              </div>

              {/* Main headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Ace Exams.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-gradient">
                  Build Business.
                </span>
                <br />
                Master AI.
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Nigeria's most comprehensive ed-tech platform. From JAMB
                excellence to digital business mastery and AI skills -
                everything you need for 21st century success.
              </p>

              {/* Dynamic feature highlight */}
              <motion.div
                key={currentFeatureIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium">
                    Featured:{" "}
                    {
                      coreFeatures.flatMap((f) => f.features)[
                        currentFeatureIndex
                      ]?.text
                    }
                  </span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/register"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl transition-all shadow-lg"
                >
                  Start Free Trial (₦0)
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/demo"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  <PlayCircle className="w-5 h-5" />
                  Watch 3-min Demo
                </motion.a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>7-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </motion.div>

            {/* Right side - Interactive dashboard preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <div className="text-2xl">🎓</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Student Dashboard</h3>
                      <p className="text-sm text-gray-300">Live Preview</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-bold">
                    LIVE
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {stats.slice(0, 4).map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="bg-white/5 p-4 rounded-xl border border-white/10"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <stat.icon className="w-4 h-4" />
                        <div className="text-2xl font-black">{stat.value}</div>
                      </div>
                      <div className="text-xs text-gray-300">{stat.label}</div>
                      <div className="text-xs text-green-400 mt-1">
                        {stat.trend}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>JAMB Progress</span>
                    <span className="font-bold">78%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "78%" }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </div>
                </div>

                {/* Quick actions */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="/jamb/practice"
                    className="p-3 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-center text-sm transition-colors"
                  >
                    Practice Now
                  </a>
                  <a
                    href="/courses"
                    className="p-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg text-center text-sm transition-colors"
                  >
                    Explore Courses
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-3xl md:text-4xl font-black text-[#2A4A6E] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
                <div className="text-xs text-green-600 font-medium mt-1">
                  {stat.trend}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#2A4A6E] mb-6">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From exam prep to business skills and AI mastery - we've got you
              covered
            </p>
          </div>

          {coreFeatures.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="text-3xl">
                  {category.category.split(" ")[0]}
                </div>
                <h3 className="text-3xl font-bold text-[#2A4A6E]">
                  {category.category.slice(2)}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: featureIndex * 0.05 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 group-hover:from-blue-200 group-hover:to-blue-100 flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          {feature.text}
                        </h4>
                        <a
                          href="#"
                          className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center gap-1"
                        >
                          Learn more
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#2A4A6E] mb-6">
              Choose Your Success Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured learning journeys designed for specific goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${path.color} flex items-center justify-center text-3xl mb-6`}
                >
                  {path.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {path.title}
                </h3>
                <p className="text-gray-600 mb-6">{path.description}</p>

                <div className="space-y-3 mb-6">
                  {path.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                        {stepIndex + 1}
                      </div>
                      <span className="text-sm text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{path.duration}</span>
                  <span className="font-bold text-blue-600">
                    {path.students} students
                  </span>
                </div>

                <a
                  href={`/path/${path.title.toLowerCase().replace(" ", "-")}`}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  Start This Path
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#2A4A6E] mb-6">
              Real Students, Real Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of students who transformed their future with
              EduCenter
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-colors"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-[#2A4A6E]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.subject}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-1">
                    Used feature:
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    <Zap className="w-3 h-3" />
                    {testimonial.feature}
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-bold text-sm">
                  <Award className="w-4 h-4" />
                  JAMB: {testimonial.score}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">
              Powered by Modern Technology
            </h3>
            <p className="text-gray-400">
              Built for performance, scale, and security
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <div className="font-bold mb-1">{tech.name}</div>
                <div className="text-sm text-gray-400">{tech.purpose}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Start Your Journey Today
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Join 50,000+ students transforming their academic and professional
              futures. Get access to everything for just ₦3,000/month after your
              free trial.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/register"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all shadow-2xl min-w-[200px]"
              >
                <Rocket className="w-5 h-5" />
                Start Free Trial
              </a>

              <div className="text-center">
                <div className="text-white text-sm mb-2">Got questions?</div>
                <a
                  href="https://wa.me/2349138349271"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-8 text-blue-100 text-sm">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>7-day money back guarantee</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SuperFooter
        logoSrc="/logo.png"
        sections={footerSections}
        contactInfo={{
          email: "support@educenter.com.ng",
          phone: "+2349138349271",
          whatsapp: "+2349138349271",
          address: "Lagos, Nigeria",
        }}
        // newsletter={{
        //   title: "📚 Get Study Tips",
        //   description: "Weekly exam strategies & business insights",
        //   placeholder: "Enter your email",
        //   buttonText: "Subscribe",
        // }}
        socialLinks={[
          {
            platform: "Twitter",
            url: "https://twitter.com/educenter_ng",
            icon: <Twitter className="w-5 h-5" />,
          },
          {
            platform: "Facebook",
            url: "https://facebook.com/educenterng",
            icon: <Facebook className="w-5 h-5" />,
          },
          {
            platform: "Instagram",
            url: "https://instagram.com/educenter_ng",
            icon: <Instagram className="w-5 h-5" />,
          },
          // { platform: 'LinkedIn', url: 'https://linkedin.com/company/educenter-ng', icon: <LinkedIn className="w-5 h-5" /> },
        ]}
        newsletter={true}
        copyright={`© ${new Date().getFullYear()} EduCenter.com.ng - A BoldMind Ecosystem Product`}
        // additionalLinks={[
        //   { href: "/terms", label: "Terms of Service" },
        //   { href: "/privacy", label: "Privacy Policy" },
        //   { href: "/refund", label: "Refund Policy" },
        // ]}
      />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2349138349271"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </a>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
