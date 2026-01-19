// apps/web/boldmind-hub/app/about/page.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  SuperNavbar, 
  SuperFooter, 
  Card, 
  Button, 
  ParticleBackground,
  StatusBadge
} from '@boldmind/ui';
import { Users, Target, Heart, Zap, Globe, Rocket, Award, TrendingUp, Linkedin, Twitter, ExternalLink } from 'lucide-react';

export default function AboutPage() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#ecosystem', label: 'Ecosystem' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ];

  const footerSections = [
    {
      title: '🚀 Products',
      links: [
        { href: 'https://amebogist.ng', label: 'AmeboGist', isExternal: true },
        { href: 'https://educenter.com.ng', label: 'EduCenter', isExternal: true },
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
        { href: 'https://twitter.com/charlesuchech', label: 'Twitter', isExternal: true },
        { href: 'https://linkedin.com/in/charliedotcom', label: 'LinkedIn', isExternal: true },
        { href: '/contact', label: 'Contact' },
      ],
    },
  ];

  const team = [
    {
      name: 'Charles Uche Chijuka',
      role: 'Founder & CEO',
      bio: 'Visionary entrepreneur building technology solutions for Africa. With over a decade of experience in software engineering and business strategy, Charles is dedicated to bridging the digital divide in Nigeria.',
      image: '👨‍💼',
      linkedin: 'https://linkedin.com/in/charliedotcom',
      twitter: 'https://twitter.com/charlesuchech',
    },
  ];

  const values = [
    {
      icon: Zap,
      title: 'Boldness',
      description: "We tackle Nigeria's biggest problems with courage and innovation, never settling for the status quo.",
      color: 'gold',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver premium quality products that create measurable impact and exceed expectations.',
      color: 'blue',
    },
    {
      icon: Heart,
      title: 'Relevance',
      description: 'Solutions built specifically for the Nigerian context, addressing real-world needs.',
      color: 'red',
    },
    {
      icon: Users,
      title: 'Authenticity',
      description: 'True to our culture and community voice, building trust through transparency and integrity.',
      color: 'purple',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Continuous improvement for ourselves and empowering entrepreneur growth across the nation.',
      color: 'green',
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
    <div className="min-h-screen bg-white dark:bg-[#000B21] transition-colors duration-500">
      <SuperNavbar
        links={navLinks}
        cta={{ href: '/register', label: 'Join the Movement' }}
        logoSrc="/logo.png"
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-[#00143C] text-white overflow-hidden pt-20">
        <ParticleBackground density={40} className="opacity-40" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00143C]/50 to-[#00143C]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC800] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FFC800]"></span>
              </span>
              <span className="text-sm font-medium text-white/80">Empowering Nigeria's Future</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC800] to-[#E5B600]">BoldMind</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              We're on a mission to empower <span className="text-white font-bold">1 million</span> Nigerian entrepreneurs by 2030 
              through innovative technology solutions that solve fundamental local problems.
            </p>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 bg-[#FFC800] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white dark:bg-[#000B21] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-[#00143C] dark:text-white mb-8">
                The <span className="text-[#FFC800]">Genesis</span> of BoldMind
              </h2>
              <div className="space-y-6 text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                <p>
                  BoldMind Technology Solution Enterprise was born from a simple but powerful observation: 
                  Nigerian entrepreneurs face unique, systemic barriers that technology can and should solve.
                </p>
                <p>
                  We recognized that building isolated applications wasn't enough. We needed to create a 
                  <span className="text-[#00143C] dark:text-white font-bold"> comprehensive ecosystem</span>. 
                  Each of our products is designed to strengthen the others, creating a powerful flywheel effect 
                  that amplifies impact for every business we touch.
                </p>
                <p>
                  From <span className="font-bold text-[#00A859]">AmeboGist</span> (mass awareness) 
                  to <span className="font-bold text-[#2A4A6E]">EduCenter</span> (education) 
                  to <span className="font-bold text-[#FFC800]">PlanAI</span> (enablement), 
                  we're building the complete digital infrastructure for Nigerian entrepreneurial success.
                </p>
                <div className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-0.5 w-12 bg-[#FFC800]" />
                    <p className="text-2xl font-black text-[#00143C] dark:text-white">
                      31+ products. 1 mission. Infinite impact.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Card variant="premium" className="p-12 border-none">
                <div className="relative z-10">
                  <div className="text-6xl mb-8">🚀</div>
                  <h3 className="text-3xl font-black text-white mb-6">Our Vision</h3>
                  <p className="text-xl text-gray-100 mb-12 leading-relaxed">
                    To become Africa's leading technology ecosystem, 
                    uniquely positioned to empower entrepreneurs to build the resilient, 
                    high-impact businesses they deserve.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <div className="text-4xl font-black text-[#FFC800]">31+</div>
                      <p className="text-sm uppercase tracking-widest text-gray-400 font-bold">Proprietary Products</p>
                    </div>
                    <div className="space-y-1">
                      <div className="text-4xl font-black text-[#FFC800]">1M</div>
                      <p className="text-sm uppercase tracking-widest text-gray-500 font-bold">Target Impact 2030</p>
                    </div>
                    <div className="space-y-1">
                      <div className="text-4xl font-black text-[#FFC800]">75K+</div>
                      <p className="text-sm uppercase tracking-widest text-gray-500 font-bold">Growing Community</p>
                    </div>
                    <div className="space-y-1">
                      <div className="text-4xl font-black text-[#FFC800]">3</div>
                      <p className="text-sm uppercase tracking-widest text-gray-500 font-bold">High-Growth Verticals</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC800]/10 rounded-full blur-3xl -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl -ml-12 -mb-12" />
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gray-50 dark:bg-[#020D26]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#00143C] dark:text-white mb-6">
              Our Core <span className="text-[#FFC800]">Values</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              The foundational principles that guide every strategic decision we make and every line of code we write
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card 
                  className="h-full p-8 border-none hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                  variant="glass"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
                    value.color === 'gold' ? 'from-[#FFC800] to-[#E5B600]' : 
                    value.color === 'blue' ? 'from-blue-600 to-blue-400' :
                    value.color === 'red' ? 'from-red-600 to-red-400' :
                    value.color === 'purple' ? 'from-purple-600 to-purple-400' :
                    'from-green-600 to-green-400'
                  } flex items-center justify-center mb-8 shadow-lg`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-[#00143C] dark:text-white mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-white dark:bg-[#000B21]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#00143C] dark:text-white mb-6">
              Our <span className="text-[#FFC800]">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From inception to nation-wide impact – tracking the BoldMind milestones
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#FFC800] to-[#00143C] hidden md:block" />

            <div className="space-y-20 relative">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 w-full">
                    <Card 
                      className={`p-8 border-none ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} relative`}
                      variant="glass"
                    >
                      <div className="inline-block px-4 py-1 rounded-full bg-[#FFC800]/20 text-[#FFC800] font-black text-sm mb-4">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-bold text-[#00143C] dark:text-white mb-2">{milestone.event}</h4>
                      {/* Decorative arrow for desktop */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-inherit transform rotate-45 ${
                        index % 2 === 0 ? '-left-2' : '-right-2'
                      }`} />
                    </Card>
                  </div>

                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#FFC800] to-[#E5B600] rounded-full flex items-center justify-center shadow-xl border-4 border-white dark:border-[#000B21] flex-shrink-0">
                    <milestone.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50 dark:bg-[#020D26]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#00143C] dark:text-white mb-6">
              The <span className="text-[#FFC800]">Visionary</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Behind every great mission is a dedicated leadership driving innovation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card variant="premium" className="overflow-hidden p-0 border-none group">
                  <div className="grid md:grid-cols-5 items-stretch">
                    <div className="md:col-span-2 bg-gradient-to-br from-[#00143C] to-[#0A1F4F] flex items-center justify-center p-12 relative overflow-hidden">
                      <div className="text-9xl z-10 filter drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500">{member.image}</div>
                      <div className="absolute top-0 left-0 w-full h-full bg-[#FFC800]/5 animate-pulse" />
                    </div>
                    <div className="md:col-span-3 p-12 flex flex-col justify-center bg-white/5 backdrop-blur-3xl">
                      <StatusBadge variant="builder" className="mb-4">LEADERSHIP</StatusBadge>
                      <h3 className="text-4xl font-black text-white mb-2">{member.name}</h3>
                      <p className="text-xl text-[#FFC800] font-bold mb-8 uppercase tracking-widest">{member.role}</p>
                      <p className="text-lg text-gray-300 mb-10 leading-relaxed italic">"{member.bio}"</p>
                      <div className="flex gap-4">
                        <Button 
                          variant="outline" 
                          className="px-6 border-white/20 text-white hover:bg-white/10"
                          onClick={() => window.open(member.linkedin, '_blank')}
                        >
                          <Linkedin className="w-5 h-5 mr-2" />
                          Connect
                        </Button>
                        <Button 
                          variant="outline" 
                          className="px-6 border-white/20 text-white hover:bg-white/10"
                          onClick={() => window.open(member.twitter, '_blank')}
                        >
                          <Twitter className="w-5 h-5 mr-2" />
                          Follow
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#00143C] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFC800]/10 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -ml-64 -mb-64" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Crafting the <span className="text-[#FFC800]">Future</span> <br className="hidden md:block"/> of African Tech
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Join the movement that's transforming how business is done in Nigeria and across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button 
                size="lg" 
                className="px-12 py-8 text-xl bg-[#FFC800] text-[#00143C] hover:bg-[#E5B600] font-black group"
                onClick={() => window.open('https://wa.me/2349138349271', '_blank')}
              >
                Join Our WhatsApp Community
                <ExternalLink className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                className="px-12 py-8 text-xl border-white/20 text-white hover:bg-white/5 font-bold"
                onClick={() => window.location.href = '/products'}
              >
                See All 31+ Products
              </Button>
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