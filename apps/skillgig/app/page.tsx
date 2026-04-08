"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Star, CheckCircle, ArrowRight, Briefcase, Shield, Zap, Users, Award, MessageSquare, TrendingUp, ChevronRight } from "lucide-react";
import { SuperNavbar, SuperFooter } from "@boldmind/ui";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#categories", label: "Categories" },
  { href: "#pricing", label: "Pricing" },
  { href: "https://boldmind.ng", label: "Ecosystem", isExternal: true },
];

const footerSections = [
  {
    title: "For Freelancers",
    links: [
      { href: "/signup/freelancer", label: "Create Profile" },
      { href: "/browse-gigs", label: "Browse Gigs" },
      { href: "/success-stories", label: "Success Stories" },
      { href: "/resources", label: "Resources" },
    ],
  },
  {
    title: "For Clients",
    links: [
      { href: "/signup/client", label: "Post a Gig" },
      { href: "/find-talent", label: "Find Talent" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/enterprise", label: "Enterprise" },
    ],
  },
  {
    title: "BoldMind Ecosystem",
    links: [
      { href: "https://amebogist.ng", label: "AmeboGist", isExternal: true },
      { href: "https://educenter.com.ng", label: "EduCenter", isExternal: true },
      { href: "https://planai.boldmind.ng", label: "PlanAI", isExternal: true },
      { href: "https://boldmind.ng", label: "All Products", isExternal: true },
    ],
  },
];

const categories = [
  { icon: "💻", name: "Web Development", count: "2,500+ gigs", color: "bg-purple-50 hover:bg-purple-100 border-purple-100" },
  { icon: "🎨", name: "Graphic Design", count: "3,200+ gigs", color: "bg-amber-50 hover:bg-amber-100 border-amber-100" },
  { icon: "✍️", name: "Content Writing", count: "1,800+ gigs", color: "bg-blue-50 hover:bg-blue-100 border-blue-100" },
  { icon: "📱", name: "Mobile Apps", count: "950+ gigs", color: "bg-green-50 hover:bg-green-100 border-green-100" },
  { icon: "🎬", name: "Video Editing", count: "1,200+ gigs", color: "bg-pink-50 hover:bg-pink-100 border-pink-100" },
  { icon: "📊", name: "Data Analysis", count: "680+ gigs", color: "bg-indigo-50 hover:bg-indigo-100 border-indigo-100" },
  { icon: "🎙️", name: "Voice Over", count: "420+ gigs", color: "bg-orange-50 hover:bg-orange-100 border-orange-100" },
  { icon: "🔐", name: "Cybersecurity", count: "290+ gigs", color: "bg-red-50 hover:bg-red-100 border-red-100" },
];

const features = [
  { icon: Zap, title: "Smart AI Matching", description: "AI-powered system connects you with the right freelancers or gigs based on skills, budget, and requirements.", color: "text-purple-600 bg-purple-100" },
  { icon: Shield, title: "Secure Escrow Payments", description: "Funds are held safely until work is delivered. Multiple payment options including bank transfer and card.", color: "text-green-600 bg-green-100" },
  { icon: Star, title: "Verified Rating System", description: "Build your reputation with verified reviews. Top-rated freelancers get priority visibility and better rates.", color: "text-amber-600 bg-amber-100" },
  { icon: MessageSquare, title: "Dispute Resolution", description: "Fair mediation process protects both parties. Our support team ensures every dispute is resolved professionally.", color: "text-blue-600 bg-blue-100" },
  { icon: TrendingUp, title: "Growth Analytics", description: "Track earnings, profile views, and proposal success rates. Data-driven insights to grow your freelance career.", color: "text-pink-600 bg-pink-100" },
  { icon: Award, title: "Skill Certification", description: "Access free courses and earn certificates. Stay competitive and showcase your expertise to clients.", color: "text-indigo-600 bg-indigo-100" },
];

const gigs = [
  {
    title: "Full-Stack Web Developer Needed",
    budget: "₦150,000 – ₦250,000",
    category: "Web Development",
    client: "TechStart Lagos",
    rating: 4.9,
    reviews: 127,
    tags: ["React", "Node.js", "MongoDB"],
    description: "Looking for an experienced developer to build a modern e-commerce platform for a growing Nigerian retail brand.",
    avatar: "💻",
  },
  {
    title: "Brand Identity Design Package",
    budget: "₦80,000 – ₦120,000",
    category: "Graphic Design",
    client: "Naija Foods Co.",
    rating: 5.0,
    reviews: 89,
    tags: ["Logo", "Brand Guide", "Packaging"],
    description: "Need a complete brand identity for our new food delivery startup — logo, colours, typography and packaging.",
    avatar: "🎨",
  },
  {
    title: "SEO Content Writer for Tech Blog",
    budget: "₦50,000 / month",
    category: "Content Writing",
    client: "Digital Hub NG",
    rating: 4.8,
    reviews: 203,
    tags: ["SEO", "Tech Writing", "Research"],
    description: "Seeking a skilled writer to produce 8–10 well-researched articles per month on AI, tech, and entrepreneurship.",
    avatar: "✍️",
  },
];

const stats = [
  { icon: Users, number: "25,000+", label: "Active Freelancers" },
  { icon: Briefcase, number: "15,000+", label: "Gigs Posted" },
  { icon: TrendingUp, number: "₦2.5B+", label: "Total Paid Out" },
  { icon: Star, number: "4.8 / 5", label: "Average Rating" },
];

const popularSearches = ["Web Designer", "Content Writer", "Video Editor", "Mobile Developer", "Virtual Assistant", "Logo Design"];

export default function SkillGigPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"freelancers" | "clients">("freelancers");

  return (
    <div className="min-h-screen bg-white text-gray-900" data-product="skillgig">

      {/* ── Navbar ── */}
      <SuperNavbar
        links={navLinks}
        cta={{ href: "/register", label: "Get Started Free", variant: "primary" }}
        logoSrc="/logo-skillgig.png"
        sticky
        animated
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#4C1D95] via-[#7C3AED] to-[#A78BFA] pt-28 pb-24 px-4">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-900/40 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold mb-8"
          >
            <Briefcase className="w-4 h-4 text-amber-400" />
            Nigeria&apos;s #1 Freelance Marketplace
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6"
          >
            Find the Perfect Gig
            <br />
            <span className="text-amber-400">Or Top Nigerian Talent</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto mb-10"
          >
            Connect with skilled Nigerian freelancers or find your next opportunity.
            SkillGig makes hiring, getting hired, and growing easy.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto mb-6"
          >
            <div className="flex bg-white rounded-2xl shadow-2xl overflow-hidden p-2 gap-2">
              <div className="flex items-center pl-3 text-gray-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="What service are you looking for?"
                className="flex-1 px-3 py-3 text-gray-900 text-base outline-none bg-transparent placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="px-6 py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold rounded-xl transition-colors text-sm whitespace-nowrap">
                Search Gigs
              </button>
            </div>
          </motion.div>

          {/* Popular tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            <span className="text-purple-200 text-sm">Popular:</span>
            {popularSearches.map((term) => (
              <button
                key={term}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm rounded-full transition-colors"
              >
                {term}
              </button>
            ))}
          </motion.div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { icon: "✅", text: "Verified Freelancers" },
              { icon: "🔒", text: "Secure Escrow Payments" },
              { icon: "🛡️", text: "Money-Back Guarantee" },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <span className="text-base">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[#4C1D95] py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl font-black text-amber-400 mb-1">{stat.number}</div>
              <div className="text-purple-200 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Categories ── */}
      <section id="categories" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#7C3AED] font-bold text-sm tracking-widest uppercase mb-3">Explore Work</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Browse by <span className="text-[#7C3AED]">Category</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Thousands of gigs across every digital skill. Find the exact expertise you need.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className={`flex flex-col items-center text-center p-6 rounded-2xl border-2 transition-all cursor-pointer ${cat.color}`}
              >
                <span className="text-4xl mb-3">{cat.icon}</span>
                <span className="font-bold text-gray-900 text-sm mb-1">{cat.name}</span>
                <span className="text-xs text-gray-500 font-medium">{cat.count}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Gigs ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#7C3AED] font-bold text-sm tracking-widest uppercase mb-3">Live Opportunities</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Featured <span className="text-[#7C3AED]">Gigs</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Latest gigs posted by Nigerian businesses looking for skilled talent.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-gray-100 p-1 rounded-xl gap-1">
              {(["freelancers", "clients"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all capitalize ${
                    activeTab === tab
                      ? "bg-[#7C3AED] text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  For {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {gigs.map((gig, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border-2 border-gray-100 hover:border-[#7C3AED] rounded-2xl p-6 transition-all hover:shadow-xl group"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-2xl flex-shrink-0">
                    {gig.avatar}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-gray-900 text-base leading-snug mb-1 group-hover:text-[#7C3AED] transition-colors">
                      {gig.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{gig.client}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        {gig.rating} ({gig.reviews})
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{gig.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {gig.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="font-black text-gray-900 text-base">{gig.budget}</div>
                    <div className="text-xs text-gray-400">{gig.category}</div>
                  </div>
                  <Link href="/register">
                    <button className="px-4 py-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-bold rounded-xl transition-colors">
                      Apply Now
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/browse-gigs">
              <button className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white font-bold rounded-xl transition-all">
                View All Gigs <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#7C3AED] font-bold text-sm tracking-widest uppercase mb-3">Platform</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Why Choose <span className="text-[#7C3AED]">SkillGig</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Built specifically for the Nigerian freelance market — we understand your needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feat.color}`}>
                  <feat.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{feat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works Steps ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#7C3AED] font-bold text-sm tracking-widest uppercase mb-3">Simple Process</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Get Started in <span className="text-[#7C3AED]">3 Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[calc(33%+2rem)] right-[calc(33%+2rem)] h-px bg-gradient-to-r from-[#7C3AED] to-[#A78BFA]" />

            {[
              { step: "01", icon: "📝", title: "Create Your Profile", description: "Sign up, showcase your skills, portfolio, and set your rates. Verification takes under 24 hours." },
              { step: "02", icon: "🔍", title: "Browse & Match", description: "Search gigs or let our AI match you with the perfect opportunities based on your skill set." },
              { step: "03", icon: "💰", title: "Work & Get Paid", description: "Deliver great work, collect your payment through secure escrow. Build your reputation over time." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 relative z-10 border-2 border-purple-100">
                  {item.icon}
                </div>
                <div className="text-xs font-black text-purple-300 tracking-widest mb-2">{item.step}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#7C3AED] font-bold text-sm tracking-widest uppercase mb-3">Success Stories</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              What Our <span className="text-[#7C3AED]">Members</span> Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Emeka Okafor", role: "Full-Stack Developer", city: "Lagos", text: "SkillGig helped me land 3 long-term clients in my first month. The escrow system gives me full confidence I'll always get paid.", earned: "₦450,000 earned" },
              { name: "Aisha Bello", role: "Brand Designer", city: "Abuja", text: "I left my 9-5 after 6 months on SkillGig. The quality of clients here is unmatched — they respect your work and pay fairly.", earned: "₦320,000 earned" },
              { name: "Chike Nwachukwu", role: "Content Strategist", city: "Port Harcourt", text: "Finally a platform that understands the Nigerian market. No forex stress, straight Naira payments, quick and reliable.", earned: "₦280,000 earned" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role} · {t.city}</div>
                  </div>
                  <div className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-100">
                    {t.earned}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#4C1D95] to-[#7C3AED] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.15),transparent_60%)] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
              Ready to Start Your<br />Freelance Journey?
            </h2>
            <p className="text-purple-200 text-lg mb-10 max-w-xl mx-auto">
              Join 25,000+ Nigerian freelancers and businesses already succeeding on SkillGig.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup/freelancer">
                <button className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-gray-900 font-black rounded-xl text-base transition-colors flex items-center gap-2 justify-center">
                  Sign Up as Freelancer <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/signup/client">
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-xl text-base transition-colors">
                  Post a Gig
                </button>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-purple-200">
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Free to join</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> No subscription fees</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Verified talent only</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <SuperFooter
        logoSrc="/logo-skillgig.png"
        sections={footerSections}
        contactInfo={{
          email: "support@skillgig.ng",
          phone: "+2349138349271",
          whatsapp: "+2349138349271",
          address: "No 5 Olusoji Imole Street, Ikosi Ketu, Lagos Nigeria",
        }}
        copyright={`© ${new Date().getFullYear()} SkillGig — Part of BoldMind Ecosystem. All rights reserved.`}
      />
    </div>
  );
}
