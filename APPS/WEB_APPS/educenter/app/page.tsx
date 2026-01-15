// apps/web/educenter/app/(home)/page.tsx
'use client';

import { motion } from 'framer-motion';
import { SuperNavbar, SuperFooter } from '@boldmind/ui';
import { BookOpen, Award, TrendingUp, Users, CheckCircle, Star, ArrowRight, PlayCircle } from 'lucide-react';

export default function EduCenterHomePage() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/jamb', label: 'JAMB Prep', badge: 'Popular' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
  ];

  const footerSections = [
    {
      title: '📚 Learn',
      links: [
        { href: '/courses', label: 'All Courses' },
        { href: '/jamb/practice', label: 'JAMB Practice' },
        { href: '/jamb/results', label: 'Past Questions' },
        { href: '/dashboard', label: 'My Dashboard' },
      ],
    },
    {
      title: '🏢 Company',
      links: [
        { href: '/about', label: 'About Us' },
        { href: '/pricing', label: 'Pricing' },
        { href: 'https://boldmind.ng', label: 'BoldMind Ecosystem', isExternal: true },
        { href: '/contact', label: 'Contact' },
      ],
    },
    {
      title: '📖 Resources',
      links: [
        { href: '/blog', label: 'Study Tips' },
        { href: '/faq', label: 'FAQ' },
        { href: '/support', label: 'Support' },
        { href: '/careers', label: 'Career Guidance' },
      ],
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'JAMB & WAEC Prep',
      description: 'Comprehensive practice questions and past papers',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: 'Expert Tutors',
      description: 'Learn from Nigeria\'s best educators',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Monitor your improvement in real-time',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Study Community',
      description: 'Connect with fellow students nationwide',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const stats = [
    { value: '50K+', label: 'Students Enrolled', icon: Users },
    { value: '10K+', label: 'Practice Questions', icon: BookOpen },
    { value: '95%', label: 'Success Rate', icon: Award },
    { value: '4.8/5', label: 'Student Rating', icon: Star },
  ];

  const subjects = [
    { name: 'Mathematics', icon: '🔢', students: '12K+', color: '#3B82F6' },
    { name: 'English Language', icon: '📝', students: '15K+', color: '#EF4444' },
    { name: 'Physics', icon: '⚛️', students: '8K+', color: '#8B5CF6' },
    { name: 'Chemistry', icon: '🧪', students: '7K+', color: '#10B981' },
    { name: 'Biology', icon: '🧬', students: '9K+', color: '#F59E0B' },
    { name: 'Economics', icon: '💰', students: '6K+', color: '#EC4899' },
  ];

  const testimonials = [
    {
      name: 'Chinyere Okafor',
      score: '298/400',
      image: '👩‍🎓',
      text: 'EduCenter helped me score 298 in JAMB! The practice questions were exactly what I needed.',
      subject: 'Medicine & Surgery',
    },
    {
      name: 'Olumide Adeyemi',
      score: '315/400',
      image: '👨‍🎓',
      text: 'Best exam prep platform! I improved from 180 to 315. The progress tracking is amazing.',
      subject: 'Computer Science',
    },
    {
      name: 'Fatima Abubakar',
      score: '285/400',
      image: '👩‍🎓',
      text: 'Affordable and effective. The tutors are patient and the content is top-notch.',
      subject: 'Law',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SuperNavbar
        links={navLinks}
        cta={{ href: '/register', label: 'Start Free Trial', variant: 'primary' }}
        logoSrc="/logo.png"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2A4A6E] via-[#1E3A5F] to-[#0F2744] text-white overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-bold">Trusted by 50,000+ Students</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Ace Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  JAMB & WAEC
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Nigeria's #1 exam preparation platform. Get instant access to 10,000+ 
                practice questions, expert tutors, and proven study strategies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/register"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-lg hover:shadow-xl transition-all"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/demo"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white/20 transition-all"
                >
                  <PlayCircle className="w-5 h-5" />
                  Watch Demo
                </motion.a>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">7-day free trial</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
                <div className="text-6xl mb-6 text-center">🎓</div>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="bg-white/5 p-6 rounded-2xl text-center"
                    >
                      <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                      <div className="text-3xl font-black mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#2A4A6E] mb-6">
              Why Students Choose EduCenter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to excel in your exams, all in one place
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2A4A6E] mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#2A4A6E] mb-6">
              Popular Subjects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master every subject with our comprehensive question banks
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
                    style={{ backgroundColor: `${subject.color}20` }}
                  >
                    {subject.icon}
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-bold rounded-full">
                    {subject.students}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#2A4A6E] mb-2">{subject.name}</h3>
                <a
                  href={`/courses/${subject.name.toLowerCase().replace(' ', '-')}`}
                  className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-2"
                >
                  Start Learning
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#2A4A6E] mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how students are achieving their dreams with EduCenter
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-[#2A4A6E]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.subject}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full font-bold">
                  <Award className="w-4 h-4" />
                  JAMB Score: {testimonial.score}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Start Your Success Journey Today
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Join 50,000+ students who are already acing their exams with EduCenter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all shadow-xl"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white/10 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white/20 transition-all"
              >
                View Pricing
              </a>
            </div>
            <p className="mt-6 text-blue-100">
              No credit card required • 7-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      <SuperFooter
        logoSrc="/logo.png"
        sections={footerSections}
        contactInfo={{
          email: 'support@educenter.com.ng',
          phone: '+2349138349271',
          whatsapp: '+2349138349271',
          address: 'Lagos, Nigeria',
        }}
        copyright={`© ${new Date().getFullYear()} EduCenter.com.ng - Part of the BoldMind Ecosystem`}
      />
    </div>
  );
}