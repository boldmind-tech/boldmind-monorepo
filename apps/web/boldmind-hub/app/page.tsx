// app/page.tsx - WITH REAL LOGO
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0A1D37] text-white overflow-x-hidden">
      {/* Grain texture overlay */}
      <div className="fixed inset-0 opacity-10 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXhpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHBhdGggZD0iTTAgMGgzMDB2MzAwSDB6IiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')]" />

      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1D37]/90 backdrop-blur-lg border-b border-[#FFC107]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/boldmind-logo.png" 
              alt="BoldMind Logo" 
              width={40} 
              height={40}
              className="rounded-full"
            />
            <span className="font-black text-xl hidden md:block">BoldMind</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#products" className="text-[#E0E0E0] hover:text-[#FFC107] transition-colors font-semibold">Products</Link>
            <Link href="#about" className="text-[#E0E0E0] hover:text-[#FFC107] transition-colors font-semibold">About</Link>
            <Link href="#contact" className="text-[#E0E0E0] hover:text-[#FFC107] transition-colors font-semibold">Contact</Link>
            <a href="https://wa.me/2349138349271" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#FFC107] text-[#0A1D37] font-bold rounded-lg hover:bg-[#FFCC00] transition-all">
              Get Started
            </a>
          </div>

          <button className="md:hidden text-[#FFC107]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 pt-32">
        <div className="relative mb-12">
          <Image 
            src="/boldmind-logo.png" 
            alt="BoldMind Logo" 
            width={256} 
            height={256}
            className="rounded-full animate-pulse-slow"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-center mb-6 max-w-5xl leading-tight">
          BoldMind Technology Solution Enterprise
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-[#E0E0E0] text-center max-w-4xl mb-12 leading-relaxed">
          Naija-authentic. AI-first. Execution-focused.<br />
          <span className="text-[#FFC107] font-semibold">Empowering 1M Nigerian entrepreneurs by 2030.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-12">
          <Link href="#products" className="px-10 py-4 bg-[#FFC107] text-[#0A1D37] font-bold text-lg rounded-lg hover:bg-[#FFCC00] transition-all hover:scale-105">
            Explore Products
          </Link>
          <a href="https://x.com/VillageCircle" target="_blank" rel="noopener noreferrer" className="px-10 py-4 border-2 border-[#FFC107] text-[#FFC107] font-bold text-lg rounded-lg hover:bg-[#FFC107] hover:text-[#0A1D37] transition-all hover:scale-105">
            See the Daily Fire
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mb-8">
          <a href="https://www.facebook.com/BoldMindTech" target="_blank" rel="noopener noreferrer" className="text-[#E0E0E0] hover:text-[#FFC107] transition-colors" aria-label="Facebook">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/boldmind-technology-solution-enterprise" target="_blank" rel="noopener noreferrer" className="text-[#E0E0E0] hover:text-[#FFC107] transition-colors" aria-label="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://www.instagram.com/boldmindtech/" target="_blank" rel="noopener noreferrer" className="text-[#E0E0E0] hover:text-[#FFC107] transition-colors" aria-label="Instagram">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://wa.me/2349138349271" target="_blank" rel="noopener noreferrer" className="text-[#E0E0E0] hover:text-[#FFC107] transition-colors" aria-label="WhatsApp">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          </a>
          <a href="https://github.com/boldmind-tech" target="_blank" rel="noopener noreferrer" className="text-[#E0E0E0] hover:text-[#FFC107] transition-colors" aria-label="GitHub">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <svg className="w-6 h-6 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="relative py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-lg md:text-xl text-[#FFC107] font-semibold mb-4">Awareness → Education → Enablement</p>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">The BoldMind Flywheel</h2>
            <p className="text-lg md:text-xl text-[#E0E0E0] max-w-3xl mx-auto">
              Three engines turning attention into wealth, knowledge into action, and leads into gold.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="https://amebogist.ng" target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-br from-[#1a3a5c] to-[#0A1D37] p-8 rounded-2xl border-2 border-[#FFC107]/20 hover:border-[#FFC107] transition-all hover:scale-105">
              <h3 className="text-2xl font-black text-white mb-2">AmeboGist</h3>
              <p className="text-[#FFC107] text-sm font-semibold mb-4">AWARENESS</p>
              <p className="text-[#E0E0E0]">Pidgin news, lifestyle, and tech stories for the Nigerian audience.</p>
            </a>

            <a href="https://educenter.com.ng" target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-br from-[#1a3a5c] to-[#0A1D37] p-8 rounded-2xl border-2 border-[#FFC107]/20 hover:border-[#FFC107] transition-all hover:scale-105">
              <h3 className="text-2xl font-black text-white mb-2">EduCenter</h3>
              <p className="text-[#FFC107] text-sm font-semibold mb-4">EDUCATION</p>
              <p className="text-[#E0E0E0]">Africa's practical learning engine. JAMB, WAEC, Digital Business School.</p>
            </a>

            <Link href="/planai" className="group relative bg-gradient-to-br from-[#1a3a5c] to-[#0A1D37] p-8 rounded-2xl border-2 border-[#FFC107]/20 hover:border-[#FFC107] transition-all hover:scale-105">
              <h3 className="text-2xl font-black text-white mb-2">PlanAI</h3>
              <p className="text-[#FFC107] text-sm font-semibold mb-4">ENABLEMENT</p>
              <p className="text-[#E0E0E0]">AI automation suite. Turn leads into gold with WhatsApp + Meta.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative py-20 px-6 bg-[#1a3a5c]/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">About <span className="text-[#FFC107]">BoldMind</span></h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-black mb-4 text-[#FFC107]">Our Mission</h3>
              <p className="text-lg text-[#E0E0E0] leading-relaxed mb-6">
                Building the tech infrastructure for 1 million Nigerian entrepreneurs by 2030. Naija-authentic solutions, zero corporate fluff.
              </p>
              <h3 className="text-2xl font-black mb-4 text-[#FFC107]">Our Approach</h3>
              <p className="text-lg text-[#E0E0E0] leading-relaxed">
                Built by Africans, for Africa. We understand NEPA, Paystack, and the hustle. We build for reality, not theory.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#1a3a5c] to-[#0A1D37] p-6 rounded-xl border-2 border-[#FFC107]/20">
                <h4 className="font-black text-xl mb-2">31 Products</h4>
                <p className="text-[#E0E0E0]">One complete ecosystem</p>
              </div>
              <div className="bg-gradient-to-br from-[#1a3a5c] to-[#0A1D37] p-6 rounded-xl border-2 border-[#FFC107]/20">
                <h4 className="font-black text-xl mb-2">3 Live Products</h4>
                <p className="text-[#E0E0E0]">Generating revenue today</p>
              </div>
              <div className="bg-gradient-to-br from-[#1a3a5c] to-[#0A1D37] p-6 rounded-xl border-2 border-[#FFC107]/20">
                <h4 className="font-black text-xl mb-2">1M Goal</h4>
                <p className="text-[#E0E0E0]">Entrepreneurs by 2030</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">Get In <span className="text-[#FFC107]">Touch</span></h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-[#FFC107]">Let's Build Together</h3>
              <p className="text-lg text-[#E0E0E0]">
                Entrepreneur, student, or partner — we're here to help you win.
              </p>
              
              <div className="space-y-4">
                <a href="https://wa.me/2349138349271" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[#E0E0E0] hover:text-[#FFC107] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  <span className="font-semibold">+234 913 834 9271</span>
                </a>
                
                <div className="pt-6">
                  <p className="text-sm text-[#E0E0E0] mb-4">Follow our journey:</p>
                  <div className="flex gap-4">
                    <a href="https://x.com/VillageCircle" target="_blank" rel="noopener noreferrer" className="text-[#E0E0E0] hover:text-[#FFC107]">Twitter</a>
                    <a href="https://www.linkedin.com/company/boldmind-technology-solution-enterprise" target="_blank" rel="noopener noreferrer" className="text-[#E0E0E0] hover:text-[#FFC107]">LinkedIn</a>
                    <a href="https://www.instagram.com/boldmindtech/" target="_blank" rel="noopener noreferrer" className="text-[#E0E0E0] hover:text-[#FFC107]">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1a3a5c] to-[#0A1D37] p-8 rounded-2xl border-2 border-[#FFC107]/20">
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-[#0A1D37] border-2 border-[#FFC107]/20 rounded-lg text-white placeholder-[#E0E0E0]/50 focus:border-[#FFC107] focus:outline-none" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-[#0A1D37] border-2 border-[#FFC107]/20 rounded-lg text-white placeholder-[#E0E0E0]/50 focus:border-[#FFC107] focus:outline-none" />
                <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 bg-[#0A1D37] border-2 border-[#FFC107]/20 rounded-lg text-white placeholder-[#E0E0E0]/50 focus:border-[#FFC107] focus:outline-none"></textarea>
                <button type="submit" className="w-full px-6 py-3 bg-[#FFC107] text-[#0A1D37] font-bold rounded-lg hover:bg-[#FFCC00]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-12 px-6 border-t border-[#FFC107]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image 
                src="/boldmind-logo.png" 
                alt="BoldMind Logo" 
                width={60} 
                height={60}
                className="rounded-full mb-4"
              />
              <p className="text-[#E0E0E0] text-sm">
                Empowering 1 million Nigerian entrepreneurs by 2030.
              </p>
            </div>

            <div>
              <h4 className="font-black text-white mb-4">Products</h4>
              <ul className="space-y-2 text-[#E0E0E0] text-sm">
                <li><a href="https://amebogist.ng" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC107] transition-colors">AmeboGist</a></li>
                <li><a href="https://educenter.com.ng" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC107] transition-colors">EduCenter</a></li>
                <li><Link href="/planai" className="hover:text-[#FFC107] transition-colors">PlanAI</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-black text-white mb-4">Company</h4>
              <ul className="space-y-2 text-[#E0E0E0] text-sm">
                <li><Link href="#about" className="hover:text-[#FFC107] transition-colors">About Us</Link></li>
                <li><Link href="#contact" className="hover:text-[#FFC107] transition-colors">Contact</Link></li>
                <li><a href="https://x.com/VillageCircle" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC107] transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-black text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-[#E0E0E0] text-sm">
                <li><a href="/privacy-policy" className="hover:text-[#FFC107] transition-colors">
                  Privacy Policy
                </a></li>
                <li><a href="/terms-of-service" className="hover:text-[#FFC107] transition-colors">
                  Terms of Service
                </a></li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-[#E0E0E0]/50">
            &copy; {new Date().getFullYear()} BoldMind Technology Solution Enterprise. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}