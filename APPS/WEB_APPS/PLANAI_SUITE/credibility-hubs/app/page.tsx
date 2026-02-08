"use client";

import { motion } from "framer-motion";
import {
  SuperNavbar,
  SuperFooter,
  Button,
  Card,
  CardContent,

} from "@boldmind/ui";
import {
  ShieldCheck,
  Star,
  CheckCircle,
} from "lucide-react";

export default function Home() {

  const reviews = [
    {
      name: "Dr. Adewale O.",
      role: "Cardiologist",
      text: "Credibility Hubs completely transformed my practice. Patients trust me before they even walk in.",
      rating: 5
    },
    {
      name: "Ngozi E.",
      role: "Financial Advisor",
      text: "The easiest way to showcase my portfolio and client testimonials. It's like a digital business card on steroids.",
      rating: 5
    },
    {
      name: "TechPoint Africa",
      role: "Media Outlet",
      text: "A game-changer for Nigerian professionals building personal brands.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans text-gray-900 dark:text-white selection:bg-[#3F51B5]/30">
      <SuperNavbar
        logoSrc="/logo.png"
        cta={{ label: "Claim Your Hub", href: "/register" }}
        sticky={true}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 bg-slate-50 dark:bg-[#0A0E17]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-[#3F51B5]/5 skew-x-12"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3F51B5]/10 border border-[#3F51B5]/20 mb-8">
              <ShieldCheck className="w-4 h-4 text-[#3F51B5]" />
              <span className="text-[#3F51B5] text-sm font-bold tracking-wide uppercase">The New Standard of Trust</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#0F172A] dark:text-white mb-6">
              Build Trust Before <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F51B5] to-[#7986CB]">
                They Even Call.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
              Aggregate your reviews, portfolio, and credentials into one verified profile.
              Convert skepticism into confidence instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#3F51B5] text-white hover:bg-[#303F9F] text-lg px-10 py-6 rounded-xl font-bold shadow-xl shadow-[#3F51B5]/20"
                onClick={() => window.location.href = '/register'}
              >
                Create My Hub
              </Button>
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-900 bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-900 bg-[#3F51B5] flex items-center justify-center text-white text-xs font-bold">
                  +2k
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Professionals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <Card key={i} className="bg-gray-50 dark:bg-gray-800 border-none shadow-sm hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, r) => (
                      <Star key={r} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt={review.name} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">{review.name}</p>
                      <p className="text-xs text-[#3F51B5] font-semibold">{review.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 bg-[#3F51B5] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <ShieldCheck className="w-96 h-96" />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Your Reputation, <br /> Centralized.
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Stop sending clients to five different links. Give them one hub that proves you're the best choice.
              </p>

              <ul className="space-y-6">
                {[
                  "Verified Reviews Aggregation",
                  "Portfolio & Case Study Showcase",
                  "Trust Badges & Certifications",
                  "Direct Messaging & Booking",
                  "SEO-Optimized Profile"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="p-1 bg-white/20 rounded-full">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-6 md:p-8 max-w-md mx-auto transform rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gray-200 border-4 border-white shadow-lg overflow-hidden">
                    <img src="https://i.pravatar.cc/200?img=33" alt="Profile" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Sarah Jenkins</h3>
                    <p className="text-gray-500">Legal Consultant</p>
                    <div className="flex items-center gap-1 mt-1 text-sm text-[#3F51B5] font-bold">
                      <ShieldCheck className="w-4 h-4" /> Verified Pro
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mb-6">
                  <div className="flex-1 bg-gray-50 rounded-lg p-3 text-center border border-gray-100">
                    <div className="text-2xl font-bold text-[#3F51B5]">4.9</div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-lg p-3 text-center border border-gray-100">
                    <div className="text-2xl font-bold text-[#3F51B5]">150+</div>
                    <div className="text-xs text-gray-500">Clients</div>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-lg p-3 text-center border border-gray-100">
                    <div className="text-2xl font-bold text-[#3F51B5]">100%</div>
                    <div className="text-xs text-gray-500">Success</div>
                  </div>
                </div>

                <Button className="w-full bg-[#3F51B5] hover:bg-[#303F9F] text-white font-bold py-6 rounded-xl">
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SuperFooter
        logoSrc="/logo.png"
        sections={[
          { title: "Product", links: [{ label: "How it Works", href: "#" }, { label: "Features", href: "#" }] },
          { title: "Community", links: [{ label: "Success Stories", href: "#" }, { label: "Blog", href: "#" }] },
          { title: "Legal", links: [{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }] }
        ]}
      />
    </div>
  );
}