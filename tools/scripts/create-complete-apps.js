const fs = require('fs');
const path = require('path');

const apps = [
  // Main Apps (with detailed pages)
  { path: 'apps/web/boldmind-hub', type: 'detailed' },
  { path: 'apps/web/amebogist', type: 'detailed' },
  { path: 'apps/web/educenter', type: 'detailed' },
  { path: 'apps/web/boldmind-os', type: 'detailed' },
  { path: 'apps/web/naija-fither', type: 'detailed' },
  { path: 'apps/web/emailscraper-pro', type: 'detailed' },
  { path: 'apps/web/safe-naija', type: 'detailed' },
  { path: 'apps/planai/receptionist', type: 'detailed' },
  { path: 'apps/planai/social-factory', type: 'detailed' },
  
  // PlanAI Apps (basic)
  { path: 'apps/planai/credibility-hubs', type: 'basic' },
  { path: 'apps/planai/business-planning', type: 'basic' },
  { path: 'apps/planai/financial-forecasting', type: 'basic' },
  { path: 'apps/planai/investor-readiness', type: 'basic' },
  { path: 'apps/planai/branding-design', type: 'basic' },
  { path: 'apps/planai/digital-storefronts', type: 'basic' },
  { path: 'apps/planai/marketing-automation', type: 'basic' },
  { path: 'apps/planai/analytics-dashboard', type: 'basic' },
  
  // Concept Apps (basic)
  { path: 'apps/web/afrohustle-os', type: 'basic' },
  { path: 'apps/web/naijagig-matcher', type: 'basic' },
  { path: 'apps/web/kolo-ai', type: 'basic' },
  { path: 'apps/web/borderless-remit', type: 'basic' },
  { path: 'apps/web/receipt-genius', type: 'basic' },
  { path: 'apps/web/power-alert', type: 'basic' },
  { path: 'apps/web/farmgate-direct', type: 'basic' },
  { path: 'apps/web/afrocopy-ai', type: 'basic' },
  { path: 'apps/web/skill2cash', type: 'basic' },
  { path: 'apps/web/anontruth-mic', type: 'basic' },
];

const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
};`;

const layoutContent = `import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BoldMind App',
  description: 'Part of the BoldMind ecosystem',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}`;

const globalsCss = `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 255, 255, 255;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}`;

function createApp(appInfo) {
  const appPath = appInfo.path;
  const appName = appPath.split('/').pop();
  const isDetailed = appInfo.type === 'detailed';
  
  console.log(`\n📁 Creating ${isDetailed ? 'detailed' : 'basic'} app: ${appName}`);
  
  // Create directories
  const dirs = [
    `${appPath}/app`,
    `${appPath}/components`,
    `${appPath}/lib`,
    `${appPath}/public`,
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
  
  // Create Tailwind config
  fs.writeFileSync(`${appPath}/tailwind.config.js`, tailwindConfig);
  
  // Create postcss config
  fs.writeFileSync(`${appPath}/postcss.config.js`, `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`);
  
  // Create layout.tsx
  fs.writeFileSync(`${appPath}/app/layout.tsx`, layoutContent);
  
  // Create globals.css
  fs.writeFileSync(`${appPath}/app/globals.css`, globalsCss);
  
  // Create page.tsx based on type
  if (isDetailed) {
    createDetailedPage(appPath, appName);
  } else {
    createBasicPage(appPath, appName);
  }
  
  // Create next.config.js
  fs.writeFileSync(`${appPath}/next.config.js`, `/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;`);
  
  // Create tsconfig.json if not exists
  if (!fs.existsSync(`${appPath}/tsconfig.json`)) {
    fs.writeFileSync(`${appPath}/tsconfig.json`, `{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    },
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}`);
  }
  
  console.log(`  ✓ Created ${appName}`);
}

function createDetailedPage(appPath, appName) {
  const pageContent = getDetailedPageContent(appName);
  fs.writeFileSync(`${appPath}/app/page.tsx`, pageContent);
}

function createBasicPage(appPath, appName) {
  const formattedName = appName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  fs.writeFileSync(`${appPath}/app/page.tsx`, `export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <span className="text-2xl">🚀</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ${formattedName}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Part of the BoldMind ecosystem. This product is currently in development.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold">
            Coming Soon
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">Innovation</div>
              <p className="text-gray-600">Built with cutting-edge technology</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-2">Quality</div>
              <p className="text-gray-600">Enterprise-grade solutions</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-purple-600 mb-2">Support</div>
              <p className="text-gray-600">24/7 customer support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`);
}

function getDetailedPageContent(appName) {
  const pages = {
    'boldmind-hub': `import { Rocket, Users, Zap, Shield, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">BoldMind</span>
            <br />
            The Complete Product Ecosystem
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            31+ products revolutionizing education, AI, fintech, health, and more for the Nigerian market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg font-semibold flex items-center justify-center"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-lg font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
              <Rocket className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI & Automation</h3>
            <p className="text-gray-600">PlanAI Suite with 10+ AI products</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <p className="text-gray-600">EduCenter & learning platforms</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 bg-purple-100 rounded-lg w-fit mb-4">
              <Zap className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Health & Wellness</h3>
            <p className="text-gray-600">Naija FitHer for Nigerian women</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 bg-yellow-100 rounded-lg w-fit mb-4">
              <Shield className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Security</h3>
            <p className="text-gray-600">SAFE AI for law enforcement</p>
          </div>
        </div>
      </div>
    </div>
  );
}`,

    'educenter': `import { BookOpen, CheckCircle, Users, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Ace Your Exams with
            <span className="text-blue-600"> Nigeria's #1</span>
            <br />
            Online Learning Platform
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Join 15,000+ Nigerian students preparing for JAMB, WAEC, and NECO with 
            interactive lessons, past questions, and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg font-semibold flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="px-8 py-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-lg font-semibold">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Excel
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">JAMB Past Questions</h3>
            <p className="text-gray-600">10+ years of past questions with solutions</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">WAEC/NECO Syllabus</h3>
            <p className="text-gray-600">Full coverage of SSCE syllabus</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Users className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Live Classes</h3>
            <p className="text-gray-600">Interactive sessions with certified teachers</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Award className="h-8 w-8 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Certificates</h3>
            <p className="text-gray-600">Earn verifiable certificates</p>
          </div>
        </div>
      </div>
    </div>
  );
}`,

    'boldmind-os': `'use client';
import { Brain, Target, Zap, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [activeBrain, setActiveBrain] = useState('capture');

  const brains = [
    {
      id: 'capture',
      title: 'Capture Brain',
      icon: <Brain className="h-8 w-8" />,
      description: 'Capture ideas in any format - voice, text, image, or email.',
      color: 'bg-blue-500',
    },
    {
      id: 'focus',
      title: 'Focus Brain',
      icon: <Target className="h-8 w-8" />,
      description: 'ADHD-friendly Pomodoro timer with distraction blocking.',
      color: 'bg-green-500',
    },
    {
      id: 'connect',
      title: 'Connect Brain',
      icon: <Zap className="h-8 w-8" />,
      description: 'Visual knowledge graph that connects your ideas.',
      color: 'bg-purple-500',
    },
    {
      id: 'create',
      title: 'Create Brain',
      icon: <Sparkles className="h-8 w-8" />,
      description: 'Content pipeline manager for YouTube, blog, and social media.',
      color: 'bg-yellow-500',
    },
    {
      id: 'reflect',
      title: 'Reflect Brain',
      icon: <Shield className="h-8 w-8" />,
      description: 'Progress tracking with ADHD-friendly analytics.',
      color: 'bg-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Your Personal Operating System
          </h1>
          <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Finally, a productivity system that works WITH your ADHD/dyslexia, not against it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 text-lg font-semibold flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-8 py-4 border border-gray-700 rounded-lg hover:bg-gray-800 text-lg font-semibold">
              Watch Demo Video
            </button>
          </div>
        </div>
      </div>

      {/* The 5 Brains */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet Your 5 AI-Powered Brains</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {brains.map((brain) => (
            <button
              key={brain.id}
              onClick={() => setActiveBrain(brain.id)}
              className={\`p-6 rounded-xl transition-all \${activeBrain === brain.id ? \`\${brain.color} text-white scale-105\` : 'bg-gray-800 hover:bg-gray-700'}\`}
            >
              <div className="flex flex-col items-center">
                <div className="mb-4">{brain.icon}</div>
                <h3 className="font-semibold">{brain.title}</h3>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-gray-800 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <div className={\`p-4 rounded-lg \${brains.find(b => b.id === activeBrain)?.color}\`}>
              {brains.find(b => b.id === activeBrain)?.icon}
            </div>
            <div className="ml-6">
              <h3 className="text-3xl font-bold">
                {brains.find(b => b.id === activeBrain)?.title}
              </h3>
              <p className="text-gray-300 text-lg mt-2">
                {brains.find(b => b.id === activeBrain)?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`,

    'naija-fither': `import { Heart, Apple, Users, TrendingDown } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Weight Loss & Wellness
            <br />
            <span className="text-pink-600">For Nigerian Women</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Personalized meal plans, NEPA-proof workouts, and a supportive community 
            designed specifically for Nigerian women's health and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="px-8 py-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 text-lg font-semibold"
            >
              Start 7-Day Free Trial
            </Link>
            <button className="px-8 py-4 border border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 text-lg font-semibold">
              Watch Success Stories
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Built for Nigerian Women, by Nigerian Women
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="p-3 bg-pink-100 rounded-lg w-fit mb-4">
              <Apple className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Nigerian Food Database</h3>
            <p className="text-gray-600">500+ authentic Nigerian dishes with accurate calorie counts</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">NEPA-Proof Workouts</h3>
            <p className="text-gray-600">Home workouts that don't require electricity</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="p-3 bg-purple-100 rounded-lg w-fit mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">WhatsApp Community</h3>
            <p className="text-gray-600">Join supportive WhatsApp groups</p>
          </div>
        </div>
      </div>
    </div>
  );
}`,

    'emailscraper-pro': `'use client';
import { Mail, Search, CheckCircle, Download } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find & Verify Email Addresses
            <br />
            <span className="text-blue-600">For Nigerian Businesses</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Advanced email discovery and verification tool built specifically for the Nigerian B2B market.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter name and company (e.g., 'CTO Tech Solutions Ltd')"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
              <Search className="h-5 w-5 inline mr-2" />
              Find Emails
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Search Results</h2>
              <button className="flex items-center text-sm text-blue-600">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="font-semibold text-gray-900">John Doe</h3>
                      <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                    </div>
                    <p className="text-sm text-gray-600 mb-1">CTO • Tech Solutions Ltd</p>
                    <p className="text-blue-600 font-medium">john.doe@techsolutions.ng</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900 mb-2">Score: 98%</div>
                    <button className="px-3 py-1 bg-blue-50 text-blue-600 rounded text-sm">
                      Verify
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`,

    'safe-naija': `import { Shield, AlertTriangle, Users, Map } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/50 border border-blue-700 mb-6">
            <Shield className="h-5 w-5 mr-2" />
            <span>Security Analytics & Forensics Engine AI</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            SAFE <span className="text-blue-400">AI</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI-powered security intelligence platform for Nigerian police and private security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="p-3 bg-blue-900/50 rounded-lg w-fit mb-4">
              <AlertTriangle className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Incident Reporting</h3>
            <p className="text-gray-400">Real-time incident reporting with GPS tagging</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="p-3 bg-green-900/50 rounded-lg w-fit mb-4">
              <Users className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Criminal Database</h3>
            <p className="text-gray-400">Facial recognition and pattern detection</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="p-3 bg-purple-900/50 rounded-lg w-fit mb-4">
              <Map className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Predictive Policing</h3>
            <p className="text-gray-400">Crime hotspot prediction and resource optimization</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="p-3 bg-red-900/50 rounded-lg w-fit mb-4">
              <Shield className="h-6 w-6 text-red-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure Communication</h3>
            <p className="text-gray-400">End-to-end encrypted officer communication</p>
          </div>
        </div>
      </div>
    </div>
  );
}`,

    'receptionist': `import { MessageSquare, Calendar, Users, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your AI-Powered 24/7
            <span className="text-blue-600"> Receptionist</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Never miss a lead again. Our AI receptionist manages your social media DMs,
            qualifies leads, and books appointments automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg font-semibold flex items-center justify-center"
            >
              Start 14-Day Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="px-8 py-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-lg font-semibold">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <MessageSquare className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">24/7 AI Receptionist</h3>
            <p className="text-gray-600">Instant replies to DMs on Facebook, Instagram, WhatsApp</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Calendar className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Smart Booking</h3>
            <p className="text-gray-600">Clients book appointments directly from social media</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Users className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Lead Qualification</h3>
            <p className="text-gray-600">AI asks qualifying questions and scores leads</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Zap className="h-8 w-8 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Multi-Platform</h3>
            <p className="text-gray-600">Manage multiple clients from one dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}`,

    'social-factory': `'use client';
import { Video, Calendar, TrendingUp, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [activePlatform, setActivePlatform] = useState('all');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Social Media Content Factory
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AI-powered video generation and multi-platform publishing automation.
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setActivePlatform('all')}
              className={\`px-4 py-2 rounded-md \${activePlatform === 'all' ? 'bg-blue-600 text-white' : 'text-gray-600'}\`}
            >
              All Platforms
            </button>
            <button
              onClick={() => setActivePlatform('youtube')}
              className={\`px-4 py-2 rounded-md flex items-center \${activePlatform === 'youtube' ? 'bg-red-600 text-white' : 'text-gray-600'}\`}
            >
              <Youtube className="h-4 w-4 mr-2" />
              YouTube
            </button>
            <button
              onClick={() => setActivePlatform('instagram')}
              className={\`px-4 py-2 rounded-md flex items-center \${activePlatform === 'instagram' ? 'bg-pink-600 text-white' : 'text-gray-600'}\`}
            >
              <Instagram className="h-4 w-4 mr-2" />
              Instagram
            </button>
            <button
              onClick={() => setActivePlatform('facebook')}
              className={\`px-4 py-2 rounded-md flex items-center \${activePlatform === 'facebook' ? 'bg-blue-700 text-white' : 'text-gray-600'}\`}
            >
              <Facebook className="h-4 w-4 mr-2" />
              Facebook
            </button>
            <button
              onClick={() => setActivePlatform('twitter')}
              className={\`px-4 py-2 rounded-md flex items-center \${activePlatform === 'twitter' ? 'bg-blue-400 text-white' : 'text-gray-600'}\`}
            >
              <Twitter className="h-4 w-4 mr-2" />
              Twitter
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
                <Video className="h-6 w-6" />
              </div>
              <span className="text-green-600 text-sm font-semibold">+24%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">1,247</div>
            <div className="text-gray-500 text-sm">Videos Generated</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                <Calendar className="h-6 w-6" />
              </div>
              <span className="text-green-600 text-sm font-semibold">+12%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">324</div>
            <div className="text-gray-500 text-sm">Posts Scheduled</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-green-50 text-green-600">
                <TrendingUp className="h-6 w-6" />
              </div>
              <span className="text-green-600 text-sm font-semibold">+18%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">89%</div>
            <div className="text-gray-500 text-sm">Engagement Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-yellow-50 text-yellow-600">
                <Video className="h-6 w-6" />
              </div>
              <span className="text-green-600 text-sm font-semibold">-15%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">2.4h</div>
            <div className="text-gray-500 text-sm">Time Saved/Day</div>
          </div>
        </div>

        {/* Generate Button */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700">
            Generate AI Video Content
          </button>
        </div>
      </div>
    </div>
  );
}`
  };
  
  return pages[appName] || pages['boldmind-hub'];
}

// Run the script
console.log('🚀 Creating complete app structures...');
apps.forEach(createApp);
console.log('\n✅ All apps created successfully!');
console.log('\n🎉 Now you can run: pnpm dev:all');