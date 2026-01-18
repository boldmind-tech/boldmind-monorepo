// apps/web/boldmind-hub/app/contact/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SuperNavbar, SuperFooter } from '@boldmind/ui';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/planai', label: 'PlanAI' },
    { href: '/contact', label: 'Contact' },
  ];

  const footerSections = [
    {
      title: '🚀 Products',
      links: [
        { href: 'https://amebogist.ng', label: 'AmeboGist', isExternal: true },
        { href: 'https://educenter.com.ng', label: 'EduCenter', isExternal: true },
        { href: '/planai', label: 'PlanAI Suite' },
      ],
    },
    {
      title: '🏢 Company',
      links: [
        { href: '/about', label: 'About Us' },
        { href: '/products', label: 'Products' },
        { href: '/contact', label: 'Contact' },
      ],
    },
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Get instant responses',
      value: '+234 913 834 9271',
      link: 'https://wa.me/2349138349271',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us a message',
      value: 'hello@boldmind.ng',
      link: 'mailto:hello@boldmind.ng',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      description: 'Call us directly',
      value: '+234 913 834 9271',
      link: 'tel:+2349138349271',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: MapPin,
      title: 'Office',
      description: 'Visit us',
      value: 'Lagos, Nigeria',
      link: '#',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const faqs = [
    {
      q: 'How can I get started with BoldMind products?',
      a: 'Simply reach out via WhatsApp or email, and our team will guide you through the onboarding process for any of our products.',
    },
    {
      q: 'Do you offer custom solutions?',
      a: 'Yes! We can customize our existing products or build new solutions tailored to your specific business needs.',
    },
    {
      q: 'What is the PlanAI Suite?',
      a: 'PlanAI is our comprehensive suite of 10 AI-powered business tools designed to help Nigerian entrepreneurs scale their businesses.',
    },
    {
      q: 'How do I become a partner?',
      a: 'We\'re always looking for strategic partnerships. Contact us with your proposal and let\'s discuss how we can collaborate.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SuperNavbar
        links={navLinks}
        cta={{ href: 'https://wa.me/2349138349271', label: 'WhatsApp Us' }}
        logoSrc="/logo.png"
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#00143C] via-[#0A1F4F] to-[#2A4A6E] text-white overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#FFC800]/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8">
              Get in <span className="text-[#FFC800]">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Let's discuss how we can help transform your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white p-8 rounded-2xl border-2 border-gray-200 hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-[#00143C] mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="font-bold text-[#00143C] flex items-center gap-2">
                  {method.value}
                  {method.link.startsWith('http') && (
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-[#00143C] mb-6">
                Send us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border-2 border-green-500 rounded-2xl p-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700">
                    We'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us more about your needs..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-lg hover:shadow-xl transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Info & FAQs */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Links */}
              <div className="bg-gradient-to-br from-[#00143C] to-[#2A4A6E] p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-black mb-6">Prefer Direct Contact?</h3>
                
                <div className="space-y-4">
                  <a
                    href="https://wa.me/2349138349271"
                    target="_blank"
                    className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold">Chat on WhatsApp</div>
                      <div className="text-sm text-gray-300">Fastest response</div>
                    </div>
                  </a>

                  <a
                    href="mailto:hello@boldmind.ng"
                    className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold">Send an Email</div>
                      <div className="text-sm text-gray-300">hello@boldmind.ng</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold">Office Hours</div>
                      <div className="text-sm text-gray-300">Mon-Fri, 9AM-6PM WAT</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h3 className="text-2xl font-black text-[#00143C] mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl border-2 border-gray-200"
                    >
                      <h4 className="font-bold text-[#00143C] mb-2">{faq.q}</h4>
                      <p className="text-gray-600">{faq.a}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#FFC800] to-[#FFD700]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#00143C] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-12">
            Join thousands of entrepreneurs transforming their businesses with BoldMind
          </p>
          <a
            href="https://wa.me/2349138349271"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#00143C] text-white font-bold text-lg rounded-lg hover:bg-[#00255C] transition-all shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            Start a Conversation
          </a>
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
      />
    </div>
  );
}