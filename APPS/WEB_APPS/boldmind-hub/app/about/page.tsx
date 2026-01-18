// apps/web/boldmind-hub/app/about/page.tsx
'use client';

import { motion } from 'framer-motion';
import { SuperNavbar, SuperFooter } from '@boldmind/ui';
import { Users, Target, Heart, Zap, Globe, Rocket, Award, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#ecosystem', label: 'Ecosystem' },
    { href: '/products', label: 'Products' },
    // { href: '/planai', label: 'PlanAI' },
    { href: '/contact', label: 'Contact' },
  ];

  const footerSections = [
    {
      title: '🚀 Products',
      links: [
        { href: 'https://amebogist.ng', label: 'AmeboGist', isExternal: true },
        { href: 'https://educenter.com.ng', label: 'EduCenter', isExternal: true },
        { href: '/planai', label: 'PlanAI Suite' },
        { href: '/products', label: 'All Products', badge: '31+' },
      ],
    },
    {
      title: '🏢 Company',
      links: [
        { href: '/about', label: 'About Us' },
        { href: '/#ecosystem', label: 'Our Ecosystem' },
        { href: '/#impact', label: 'Impact' },
        { href: '/contact', label: 'Contact' },
      ],
    },
    {
      title: '🔗 Connect',
      links: [
        { href: 'https://twitter.com/', label: 'Twitter', isExternal: true },
        { href: 'https://linkedin.com', label: 'LinkedIn', isExternal: true },
        { href: 'https://instagram.com', label: 'Instagram', isExternal: true },
        { href: '/contact', label: 'Contact' },
      ],
    },
  ];

  const team = [
    {
      name: 'Charles Uche Chijuka',
      role: 'Founder & CEO',
      bio: 'Visionary entrepreneur building technology solutions for Africa',
      image: '👨‍💼',
      linkedin: 'https://linkedin.com/in/charliedotcom',
      twitter: 'https://twitter.com/charlesuchech',
    },
  ];

  const values = [
    {
      icon: Zap,
      title: 'Boldness',
      description: "We tackle Nigeria's biggest problems with courage and innovation",
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver quality products that create measurable impact',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Heart,
      title: 'Relevance',
      description: 'Solutions built specifically for the Nigerian context',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Authenticity',
      description: 'True to our culture and community voice',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Continuous improvement and entrepreneur empowerment',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const milestones = [
    { year: '2024', event: 'BoldMind Technology Solution Enterprise Founded', icon: Rocket },
    { year: '2024', event: 'AmeboGist.ng Launched - Building Mass Audience', icon: Globe },
    { year: '2024', event: 'EduCenter.com.ng Goes Live - Education Platform', icon: Award },
    { year: '2025', event: 'PlanAI Suite Launch - AI Business Tools', icon: Zap },
    { year: '2030', event: 'Goal: 1 Million Entrepreneurs Empowered', icon: Target },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SuperNavbar
        links={navLinks}
        cta={{ href: 'https://wa.me/2349138349271', label: 'Get Started' }}
        logoSrc="/logo.png"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00143C] via-[#0A1F4F] to-[#2A4A6E] text-white overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#FFC800]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#00A859]/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8">
              About <span className="text-[#FFC800]">BoldMind</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to empower 1 million Nigerian entrepreneurs by 2030 
              through innovative technology solutions that solve fundamental problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-[#00143C] mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  BoldMind Technology Solution Enterprise was born from a simple observation: 
                  Nigerian entrepreneurs face systemic barriers that technology can solve.
                </p>
                <p>
                  We're not just building apps – we're creating an ecosystem. Each product 
                  strengthens the others, creating a flywheel effect that amplifies impact.
                </p>
                <p>
                  From <span className="font-bold text-[#00A859]">AmeboGist</span> (mass awareness) 
                  to <span className="font-bold text-[#2A4A6E]">EduCenter</span> (education) 
                  to <span className="font-bold text-[#FFC800]">PlanAI</span> (enablement), 
                  we're building the complete infrastructure for entrepreneurial success.
                </p>
                <p className="text-2xl font-bold text-[#00143C]">
                  31+ products. 1 mission. Infinite impact.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#00143C] to-[#2A4A6E] p-12 rounded-3xl text-white">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-xl text-gray-300 mb-8">
                  To become Africa's leading technology ecosystem, 
                  empowering entrepreneurs to build the future they deserve.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-black text-[#FFC800]">31+</div>
                    <p className="text-gray-400">Products</p>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-[#FFC800]">1M</div>
                    <p className="text-gray-400">Target by 2030</p>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-[#FFC800]">75K+</div>
                    <p className="text-gray-400">Active Users</p>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-[#FFC800]">3</div>
                    <p className="text-gray-400">Live Products</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#00143C] mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every product we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#00143C] mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#00143C] mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From inception to impact – the BoldMind story
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#FFC800] to-[#00143C]" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg inline-block">
                      <div className="text-[#FFC800] font-black text-2xl mb-2">{milestone.year}</div>
                      <p className="text-gray-700 font-medium">{milestone.event}</p>
                    </div>
                  </div>

                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#FFC800] to-[#00143C] rounded-full flex items-center justify-center shadow-xl">
                    <milestone.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#00143C] mb-6">
              Meet Our Founder
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The visionary behind BoldMind's mission
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-3xl shadow-2xl text-center"
              >
                <div className="text-8xl mb-6">{member.image}</div>
                <h3 className="text-3xl font-black text-[#00143C] mb-2">{member.name}</h3>
                <p className="text-xl text-[#FFC800] font-bold mb-6">{member.role}</p>
                <p className="text-lg text-gray-600 mb-8">{member.bio}</p>
                <div className="flex justify-center gap-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    💼
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                  >
                    🐦
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#00143C] to-[#2A4A6E] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Join the Movement
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Be part of the ecosystem empowering 1 million Nigerian entrepreneurs by 2030
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/2349138349271"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#FFC800] text-[#00143C] font-bold text-lg rounded-lg hover:bg-[#FFD700] transition-all shadow-xl"
              >
                <span className="text-2xl">💬</span>
                Connect on WhatsApp
              </a>
              <a
                href="/#products"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white/10 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white/20 transition-all"
              >
                <span className="text-2xl">🚀</span>
                Explore Products
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <SuperFooter
        logoSrc="/logo.png"
        sections={footerSections}
        contactInfo={{
          email: 'hello@boldmind.ng',
          phone: '+2349138349271',
          whatsapp: '+2349138349271',
          address: 'No 5 Olusoji imole str ikosi ketu Lagos Nigeria',
        }}
        copyright={`© ${new Date().getFullYear()} BoldMind Technology Solution Enterprise. All rights reserved.`}
      />
    </div>
  );
}