// tools/generators/planai-product/generate.js
const fs = require('fs');
const path = require('path');

console.log('🚀 PlanAI Product Generator');
console.log('===========================\n');

const planaiProducts = [
  {
    id: 'receptionist',
    name: 'AI Receptionist',
    description: 'Multi-tenant AI-powered lead capture and booking system',
    status: 'LIVE',
    tech: ['NestJS', 'Meta Graph API', 'Webhooks'],
  },
  {
    id: 'social-factory',
    name: 'Social Media Content Factory',
    description: 'Automated video content generation and multi-channel publishing',
    status: 'BUILDING',
    tech: ['n8n', 'Pictory API', 'Meta API', 'Twitter API'],
  },
  {
    id: 'credibility-hubs',
    name: 'Professional Credibility Hubs',
    description: 'AI-assisted personal branding and one-pager sites',
    status: 'PLANNED',
    tech: ['Next.js', 'OpenAI', 'Supabase'],
  },
  {
    id: 'business-planning',
    name: 'AI Business Planning',
    description: 'Generate dynamic business plans and market analysis',
    status: 'PLANNED',
    tech: ['OpenAI', 'Next.js', 'MongoDB'],
  },
  {
    id: 'financial-forecasting',
    name: 'Financial Forecasting',
    description: 'AI-driven cashflow modeling and revenue forecasting',
    status: 'PLANNED',
    tech: ['Python', 'TensorFlow', 'Next.js'],
  },
  {
    id: 'investor-readiness',
    name: 'Investor Readiness Suite',
    description: 'Automated funding documentation and workflows',
    status: 'PLANNED',
    tech: ['Next.js', 'PDF generation', 'Database'],
  },
  {
    id: 'branding-design',
    name: 'Branding & Design Tools',
    description: 'AI-powered logo creation and marketing visuals',
    status: 'PLANNED',
    tech: ['Canvas API', 'AI Image Generation', 'Next.js'],
  },
  {
    id: 'digital-storefronts',
    name: 'Digital Storefronts',
    description: 'Instant e-commerce stores for SMEs and creators',
    status: 'PLANNED',
    tech: ['Next.js', 'Paystack', 'MongoDB'],
  },
  {
    id: 'marketing-automation',
    name: 'Marketing Automation',
    description: 'AI-driven marketing campaigns and lead nurturing',
    status: 'PLANNED',
    tech: ['Email API', 'Segment.io', 'Next.js'],
  },
  {
    id: 'analytics-dashboard',
    name: 'Analytics Dashboard',
    description: 'Cross-platform business intelligence',
    status: 'PLANNED',
    tech: ['Data visualization', 'API aggregation', 'Next.js'],
  },
];

// Generate each product
planaiProducts.forEach((product, index) => {
  const productPath = path.join(__dirname, '../../../apps/planai', product.id);
  
  // Create directory structure
  const directories = [
    'app',
    'app/api',
    'public',
    'components',
    'lib',
  ];
  
  directories.forEach(dir => {
    fs.mkdirSync(path.join(productPath, dir), { recursive: true });
  });
  
  // Create package.json
  const packageJson = {
    name: `@boldmind/planai-${product.id}`,
    version: "1.0.0",
    private: true,
    scripts: {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "next lint"
    },
    dependencies: {
      "@boldmind/ui": "workspace:*",
      "@boldmind/auth": "workspace:*",
      "next": "14.2.5",
      "react": "^18",
      "react-dom": "^18",
      "framer-motion": "^10.0.0"
    }
  };
  
  fs.writeFileSync(
    path.join(productPath, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
  
  // Create layout.tsx
  const layoutContent = `import { ProductLayout } from '@boldmind/ui';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '${product.name} - PlanAI Suite',
  description: '${product.description}',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ProductLayout
          product="planai-${product.id}"
          navLinks={[
            { href: '/', label: 'Dashboard' },
            { href: '/features', label: 'Features' },
            { href: '/pricing', label: 'Pricing' },
            { href: '/docs', label: 'Documentation' },
            { href: '/support', label: 'Support' },
          ]}
          cta={{
            href: '/try',
            label: 'Try Free',
            variant: '${product.status === 'LIVE' ? 'gradient' : 'secondary'}',
          }}
          theme="dark"
          showParticles={false}
        >
          {children}
        </ProductLayout>
      </body>
    </html>
  );
}`;
  
  fs.writeFileSync(path.join(productPath, 'app/layout.tsx'), layoutContent);
  
  // Create page.tsx
  const pageContent = `'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Zap, Clock } from 'lucide-react';

export default function ${product.name.replace(/\s+/g, '')}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <section className="pt-32 pb-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8"
          >
            <span className="text-yellow-400">${product.status}</span>
            <span>•</span>
            <span>Part of PlanAI Suite</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            ${product.name}
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ${product.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {${JSON.stringify(product.tech)}.map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-xl transition-all"
            >
              ${product.status === 'LIVE' ? '🚀 Start Free Trial' : '📋 Join Waitlist'}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
            >
              📺 Watch Demo
            </motion.button>
          </div>
        </div>
      </section>
      
      {/* Status Message */}
      <div className="max-w-3xl mx-auto px-4 pb-24">
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-yellow-500/20">
              <Clock className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Current Status</h3>
              <p className="text-gray-300">
                ${product.status === 'LIVE' 
                  ? 'This product is live and accepting customers. Start your free trial today!' 
                  : product.status === 'BUILDING' 
                  ? 'This product is currently in active development. Join the waitlist for early access.' 
                  : 'This product is planned for future development. Follow our roadmap for updates.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;
  
  fs.writeFileSync(path.join(productPath, 'app/page.tsx'), pageContent);
  
  console.log(`✅ ${index + 1}. ${product.name} (${product.status})`);
});

console.log('\n🎉 All PlanAI products generated!');
console.log('\n🚀 Next steps:');
console.log('1. Install dependencies in each product:');
console.log('   cd apps/planai/receptionist && npm install');
console.log('2. Generate icons:');
console.log('   npm run generate-icons');
console.log('3. Start development:');
console.log('   cd apps/planai && npm run dev');