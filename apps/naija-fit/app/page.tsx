'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  CheckCircle,
  Star,
  Heart,
  Activity,
  Play,
} from 'lucide-react';
import Link from 'next/link';
import { SuperNavbar, SuperFooter } from '@boldmind/ui';
export default function NaijaFitHerHome() {
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  // Navbar Links
  const navLinks = [
    { href: '/#features', label: 'How It Works', icon: '🎯' },
    { href: '/#foods', label: 'Nigerian Foods', icon: '🍲' },
    { href: '/#testimonials', label: 'Success Stories', icon: '👑' },
    { href: '/#pricing', label: 'Plans', icon: '💰' },
    { href: '/login', label: 'Login', icon: '🔐' },
  ];

  const testimonials = [
    {
      name: 'Blessing Okafor',
      location: 'Lagos',
      weight: '15kg lost',
      image: 'https://i.pravatar.cc/150?img=1',
      text: 'I don chop jollof, fried rice, and still lose weight! This app na waya!',
      rating: 5,
    },
    {
      name: 'Chioma Eze',
      location: 'Abuja',
      weight: '12kg lost',
      image: 'https://i.pravatar.cc/150?img=5',
      text: 'No gym, no wahala. Just follow the plan and your body go change!',
      rating: 5,
    },
    {
      name: 'Fatima Musa',
      location: 'Kano',
      weight: '18kg lost',
      image: 'https://i.pravatar.cc/150?img=9',
      text: 'Best thing wey don happen to me this year. I fit wear any cloth now!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-pink-500 selection:text-white">
      {/* Navbar */}
      <SuperNavbar
        logoSrc="/logo.png"
        links={navLinks}
        cta={{
          label: 'Start Free',
          href: '/login',
          variant: 'gradient',
          icon: <Heart className="w-4 h-4 fill-current" />,
        }}
        theme="light"
        className="shadow-sm"
      />

      <main className="pt-20">
        {/* --- HERO SECTION --- */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          {/* Background Blobs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-bold mb-6 hover:scale-105 transition-transform cursor-default">
                <span className="animate-pulse">🎉</span> Join 25,000+ Nigerian Women
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] text-gray-900">
                Lose Weight,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                  Naija Style
                </span> 🍛
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
                Eat <span className="font-semibold text-pink-600">jollof</span>, <span className="font-semibold text-pink-600">moi moi</span>, and <span className="font-semibold text-pink-600">plantain</span>—and still lose weight! AI meal plans tailored for our local foods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/login">
                  <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full text-lg font-bold hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                    Get Free Meal Plan
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </Link>
                <button className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-full text-lg font-bold hover:bg-gray-50 hover:border-pink-300 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Play className="w-5 h-5 fill-pink-600 text-pink-600" /> See Success Stories
                </button>
              </div>

              <div className="mt-12 flex items-center gap-8 border-t border-gray-200 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-gray-900">25K+</div>
                  <div className="text-sm text-gray-500 font-medium">Active Queens</div>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <div className="text-3xl font-black text-gray-900">10kg</div>
                  <div className="text-sm text-gray-500 font-medium">Avg. Weight Loss</div>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <div className="text-3xl font-black text-gray-900 flex items-center justify-center gap-1">4.9 <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /></div>
                  <div className="text-sm text-gray-500 font-medium">User Rating</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                  alt="Fit Nigerian woman smiling"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Floating Card 1 */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute bottom-8 left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs"
                >
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">🥗</div>
                  <div>
                    <p className="font-bold text-gray-900">Today's Lunch</p>
                    <p className="text-sm text-gray-500">Jollof Rice & Grilled Chicken</p>
                  </div>
                </motion.div>

                {/* Floating Card 2 */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute top-12 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Activity className="w-5 h-5 text-pink-600" />
                    <span className="font-bold text-gray-900">Calories Burned</span>
                  </div>
                  <p className="text-2xl font-black text-pink-600">450 kcal</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- HOW IT WORKS --- */}
        <section id="features" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-pink-600 font-bold tracking-wider uppercase text-sm">Simple Process</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-6">
                How E Dey Work? 🎯
              </h2>
              <p className="text-xl text-gray-600">
                No complex calculations. No starving yourself. Just follow the plan customized for our Nigerian lifestyle.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Tell Us About You',
                  description: 'Your age, weight, goals, and favorite foods. Our AI learns what you need.',
                  icon: '📝',
                  color: 'bg-blue-50'
                },
                {
                  step: '02',
                  title: 'Get Naija Meal Plan',
                  description: 'Receive weekly plans with foods you love—Rice, Beans, Yam, Soup, and more.',
                  icon: '🍛',
                  color: 'bg-pink-50'
                },
                {
                  step: '03',
                  title: 'Track & Transform',
                  description: 'Track your meals, follow simple home workouts, and watch the magic happen.',
                  icon: '💃',
                  color: 'bg-purple-50'
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className={`${item.color} p-8 rounded-[2rem] relative group border border-transparent hover:border-gray-200 transition-all`}
                >
                  <div className="text-6xl font-black text-gray-200 absolute top-4 right-8 select-none">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-6 relative z-10 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- NIGERIAN FOODS --- */}
        <section id="foods" className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-black text-gray-900 mb-4">
                  Eat Your Favorites 🍲
                </h2>
                <p className="text-xl text-gray-600">
                  We calculate the portions so you don't have to stop eating what you love.
                </p>
              </div>
              <Link href="/login">
                <button className="px-6 py-3 bg-white border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-colors">
                  View Full Menu
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Jollof Rice', cal: '350 cal', img: '🍚' },
                { name: 'Moi Moi', cal: '185 cal', img: '🫘' },
                { name: 'Grilled Fish', cal: '250 cal', img: '🐟' },
                { name: 'Plantain', cal: '122 cal', img: '🍌' },
                { name: 'Egusi Soup', cal: '280 cal', img: '🥣' },
                { name: 'Beans & Dodo', cal: '320 cal', img: '🫘' },
                { name: 'Pepper Soup', cal: '120 cal', img: '🍲' },
                { name: 'Pap & Akara', cal: '250 cal', img: '🥛' },
              ].map((food, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-pink-200 text-center transition-all cursor-default"
                >
                  <div className="text-6xl mb-4 transform hover:scale-110 transition-transform duration-300">{food.img}</div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">{food.name}</h4>
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                    {food.cal}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS --- */}
        <section id="testimonials" className="py-24 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/40 to-purple-900/40" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl font-black text-center mb-16">
              See Wetin Our Queens Dey Talk! 👑
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((person, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-16 h-16 rounded-full border-2 border-pink-500"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{person.name}</h4>
                      <p className="text-sm text-gray-300">{person.location}</p>
                      <div className="flex gap-1 mt-1">
                        {[...Array(person.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-200 italic mb-6 leading-relaxed">"{person.text}"</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600/20 border border-pink-500/30 text-pink-300 rounded-full text-sm font-bold">
                    🎉 {person.weight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PRICING --- */}
        <section id="pricing" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                Start Your Journey Today 💪
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                Choose the plan wey fit you nicely.
              </p>

              <div className="inline-flex bg-gray-100 p-1 rounded-full relative">
                <button
                  onClick={() => setSelectedPlan('monthly')}
                  className={`px-8 py-3 rounded-full font-bold transition-all ${selectedPlan === 'monthly'
                    ? 'bg-white text-gray-900 shadow-md'
                    : 'text-gray-500 hover:text-gray-900'
                    }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setSelectedPlan('yearly')}
                  className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${selectedPlan === 'yearly'
                    ? 'bg-white text-gray-900 shadow-md'
                    : 'text-gray-500 hover:text-gray-900'
                    }`}
                >
                  Yearly <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Save 40%</span>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: 'Basic',
                  price: selectedPlan === 'monthly' ? '₦1,500' : '₦12,000',
                  period: selectedPlan === 'monthly' ? '/month' : '/year',
                  features: ['AI Meal Plans', 'Basic Workouts', 'Progress Tracking', 'Email Support'],
                  cta: 'Start Basic',
                  highlight: false
                },
                {
                  name: 'Premium',
                  price: selectedPlan === 'monthly' ? '₦3,500' : '₦30,000',
                  period: selectedPlan === 'monthly' ? '/month' : '/year',
                  features: ['All Basic Features', 'WhatsApp Community', 'Weekly Live Sessions', 'Recipe Videos', 'Priority Support'],
                  cta: 'Get Premium',
                  highlight: true
                },
                {
                  name: 'VIP',
                  price: selectedPlan === 'monthly' ? '₦8,000' : '₦75,000',
                  period: selectedPlan === 'monthly' ? '/month' : '/year',
                  features: ['All Premium Features', '1-on-1 Coaching', 'Custom Meal Plans', 'Exclusive Events'],
                  cta: 'Go VIP',
                  highlight: false
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`relative p-8 rounded-3xl border transition-all duration-300 ${plan.highlight
                    ? 'bg-gray-900 text-white border-gray-900 ring-8 ring-gray-100 scale-105 shadow-2xl z-10'
                    : 'bg-white text-gray-900 border-gray-200 hover:border-pink-300 hover:shadow-xl'
                    }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2 opacity-90">{plan.name}</h3>
                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className="opacity-60 text-sm">{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? 'text-pink-400' : 'text-green-500'}`} />
                        <span className="text-sm font-medium opacity-80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/login" className="block">
                    <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlight
                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 hover:shadow-lg hover:shadow-pink-500/25'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}>
                      {plan.cta}
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="py-24 bg-gradient-to-r from-pink-600 to-purple-800 text-white text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Ready to Transform? 🦋
            </h2>
            <p className="text-2xl text-pink-100 mb-10 max-w-2xl mx-auto">
              Join 25,000+ Nigerian women who have changed their lives. It's your turn now.
            </p>
            <Link href="/login">
              <button className="px-12 py-5 bg-white text-pink-600 rounded-full text-xl font-black hover:shadow-2xl hover:scale-105 transition-all shadow-xl">
                Start For Free
              </button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SuperFooter
        variant="default"
        product="naija-fither"
        className="bg-gray-900 border-t border-gray-800"
      />
    </div>
  );
}