// apps/web/boldmind-hub/app/planai/page.tsx
import Link from 'next/link'
import { Navbar, Footer } from '../../../../../packages/ui/src';


const products = [
  {
    name: 'AI Receptionist',
    slug: 'receptionist',
    tagline: 'Never miss a lead again',
    description: 'Multi-tenant AI-powered lead capture and booking system. Auto-reply to comments and DMs on Facebook, Instagram, and WhatsApp.',
    status: '✅ LIVE',
    statusColor: 'text-green-400',
    features: [
      'Meta API integration (FB/IG/WhatsApp)',
      'Auto-reply to comments and DMs',
      'Lead generation and qualification',
      'Appointment booking automation',
      'Multi-tenant dashboard'
    ],
    pricing: '₦20k-₦50k/month per client',
    comingSoon: false,
  },
  {
    name: 'Social Media Content Factory',
    slug: 'social-factory',
    tagline: 'Content on autopilot',
    description: 'Automated video content generation and multi-channel publishing. Turn one idea into 10+ pieces of content across all platforms.',
    status: '🔨 BUILDING',
    statusColor: 'text-yellow-400',
    features: [
      'Pictory AI integration for video generation',
      'n8n automation workflows',
      'Multi-platform publishing (YouTube, IG, FB, Twitter, TikTok)',
      'Content calendar management',
      'Analytics aggregation'
    ],
    pricing: '₦30k-₦100k/month',
    comingSoon: true,
  },
  {
    name: 'Professional Credibility Hubs',
    slug: 'credibility-hubs',
    tagline: 'Your digital presence, elevated',
    description: 'AI-assisted personal branding and professional portfolio websites. Build credibility in minutes, not months.',
    status: '📋 PLANNED',
    statusColor: 'text-blue-400',
    features: [
      'Professional portfolio websites',
      'LinkedIn profile optimizer',
      'Personal branding AI coach',
      'Resume/CV generator',
      'Custom domain support'
    ],
    pricing: '₦5k-₦15k one-time',
    comingSoon: true,
  },
  {
    name: 'AI Business Planning',
    slug: 'business-planning',
    tagline: 'Business plans in minutes',
    description: 'Generate dynamic business plans and market analysis tailored to African startups. Investor-ready documents in 15 minutes.',
    status: '📋 PLANNED',
    statusColor: 'text-blue-400',
    features: [
      'AI-generated business plans',
      'Pitch deck creator',
      'Market analysis (Nigerian-focused)',
      'Financial projections',
      'Competitor analysis'
    ],
    pricing: '₦10k per business plan',
    comingSoon: true,
  },
  {
    name: 'Financial Forecasting',
    slug: 'financial-forecasting',
    tagline: 'See the future of your business',
    description: 'AI-driven cashflow modeling, revenue forecasting, and investor-ready financial projections.',
    status: '📋 PLANNED',
    statusColor: 'text-blue-400',
    features: [
      'Cashflow projections',
      'Revenue forecasting',
      'Break-even analysis',
      'Investor-ready financial models',
      'Scenario planning'
    ],
    pricing: '₦8k/month subscription',
    comingSoon: true,
  },
  {
    name: 'Investor Readiness Suite',
    slug: 'investor-readiness',
    tagline: 'Raise capital with confidence',
    description: 'Automated funding documentation and workflows. SAFEs, term sheets, data rooms, and cap table management.',
    status: '📋 PLANNED',
    statusColor: 'text-blue-400',
    features: [
      'SAFE/term sheet generator',
      'Data room scaffolding',
      'Investor pitch deck templates',
      'Cap table management',
      'Due diligence checklists'
    ],
    pricing: '₦50k one-time + ₦10k/month',
    comingSoon: true,
  },
  {
    name: 'Branding & Design Tools',
    slug: 'branding-design',
    tagline: 'Professional design, zero design skills',
    description: 'AI-powered logo creation, color palettes, and marketing visuals. Brand guidelines in minutes.',
    status: '📋 PLANNED',
    statusColor: 'text-blue-400',
    features: [
      'Logo generator',
      'Color palette creator',
      'Marketing visual templates',
      'Brand guidelines generator',
      'Social media asset packs'
    ],
    pricing: '₦3k per design package',
    comingSoon: true,
  },
  {
    name: 'Digital Storefronts',
    slug: 'digital-storefronts',
    tagline: 'From idea to sales in 1 hour',
    description: 'Instant e-commerce stores for SMEs and creators. Paystack integration, inventory management, order tracking.',
    status: '📋 PLANNED',
    statusColor: 'text-blue-400',
    features: [
      'Paystack integration',
      'Inventory management',
      'Order tracking',
      'Customer management',
      'Mobile-optimized checkout'
    ],
    pricing: '₦5k setup + ₦2k/month',
    comingSoon: true,
  },
  {
    name: 'Marketing Automation',
    slug: 'marketing-automation',
    tagline: 'Marketing that runs itself',
    description: 'AI-driven marketing campaigns, customer segmentation, and lead nurturing. Set it and forget it.',
    status: '📋 PLANNED',
    statusColor: 'text-blue-400',
    features: [
      'Email campaign automation',
      'Customer segmentation',
      'Personalized campaigns',
      'Lead scoring',
      'A/B testing automation'
    ],
    pricing: '₦10k/month',
    comingSoon: true,
  },
  {
    name: 'Analytics Dashboard',
    slug: 'analytics-dashboard',
    tagline: 'Know your business, inside out',
    description: 'Cross-platform business intelligence. Unified analytics, customer insights, growth opportunities.',
    status: '📋 PLANNED',
    statusColor: 'text-blue-400',
    features: [
      'Unified analytics (all platforms)',
      'Customer behavior insights',
      'Growth opportunity identification',
      'Custom reports',
      'Real-time dashboards'
    ],
    pricing: '₦8k/month',
    comingSoon: true,
  },
]

export default function PlanAIPage() {
const navLinks = [
    { href: "#products", label: "Products" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" }
  ];
 const navCta = { href: "https://wa.me/2349138349271", label: "Get Started" };
  const footerSections = [
    {
      title: "Products",
      links: [
        { href: "https://amebogist.ng", label: "AmeboGist" },
        { href: "https://educenter.com.ng", label: "EduCenter" },
        { href: "/planai", label: "PlanAI" }
      ]
    },
    {
      title: "Company",
      links: [
        { href: "#about", label: "About Us" },
        { href: "#contact", label: "Contact" },
        { href: "https://x.com/VillageCircle", label: "Blog" }
      ]
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms-of-service", label: "Terms of Service" }
      ]
    }
  ];
  return (
    <main className="relative min-h-screen bg-[#0A1D37] text-white">
      {/* Grain texture */}
      <div className="fixed inset-0 opacity-10 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXhpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHBhdGggZD0iTTAgMGgzMDB2MzAwSDB6IiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')]" />

      {/* HEADER - Matched home style */}
     <Navbar logoSrc="/logo.png" links={navLinks} cta={navCta} />

      {/* Hero */}
      <section className="relative py-20 px-6 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#FFC107] mb-8 animate-pulse-slow">
              <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-[#0A1D37]">
                <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor"/>
              </svg>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6">PlanAI Suite</h1>
            <p className="text-xl md:text-2xl text-[#E0E0E0] max-w-3xl mx-auto mb-4">
              The machine that turns leads into gold.
            </p>
            <p className="text-lg text-[#FFC107] font-semibold">
              AI-Powered Business Automation for Nigerian Entrepreneurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-6 bg-gradient-to-br from-[#1a3a5c] to-[#0A1D37] rounded-2xl border-2 border-[#FFC107]/20">
              <p className="text-4xl font-black text-[#FFC107] mb-2">10+</p>
              <p className="text-[#E0E0E0]">Automation Tools</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#1a3a5c] to-[#0A1D37] rounded-2xl border-2 border-[#FFC107]/20">
              <p className="text-4xl font-black text-[#FFC107] mb-2">1</p>
              <p className="text-[#E0E0E0]">Client Live (Sleepless)</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#1a3a5c] to-[#0A1D37] rounded-2xl border-2 border-[#FFC107]/20">
              <p className="text-4xl font-black text-[#FFC107] mb-2">₦20k-₦100k</p>
              <p className="text-[#E0E0E0]">Monthly Revenue per Client</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
            Complete Business <span className="text-[#FFC107]">Automation Suite</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Link 
                key={index} 
                href={product.comingSoon ? '#' : `/planai/${product.slug}`} 
                className={`group relative block ${product.comingSoon ? 'cursor-not-allowed' : ''}`}
              >
                <div className="bg-gradient-to-br from-[#1a3a5c] to-[#0A1D37] p-8 rounded-2xl border-2 border-[#FFC107]/20 hover:border-[#FFC107] transition-all hover:scale-105">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-black text-white mb-1">{product.name}</h3>
                      <p className="text-[#FFC107] text-sm font-semibold">{product.tagline}</p>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full bg-black/30 ${product.statusColor}`}>
                      {product.status}
                    </span>
                  </div>

                  <p className="text-[#E0E0E0] text-base leading-relaxed mb-6">{product.description}</p>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-[#E0E0E0]">
                        <svg className="w-5 h-5 text-[#FFC107] mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-[#FFC107]/20 flex justify-between items-center">
                    <p className="text-[#FFC107] font-bold text-lg">{product.pricing}</p>
                    {product.comingSoon && <span className="text-xs text-blue-400 font-bold">Coming Soon</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to <span className="text-[#FFC107]">Automate Your Business?</span>
          </h2>
          <p className="text-xl text-[#E0E0E0] mb-8">
            Join the waitlist for early access to PlanAI Suite. Limited slots available.
          </p>
          <a href="https://wa.me/2349138349271?text=I'm%20interested%20in%20PlanAI%20Suite" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-4 bg-[#FFC107] text-[#0A1D37] font-bold text-lg rounded-lg hover:bg-[#FFCC00] transition-all hover:scale-105">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Get Early Access on WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER - Dynamic year like home */}
    <Footer logoSrc="/logo.png" sections={footerSections} />
    </main>
  )
}