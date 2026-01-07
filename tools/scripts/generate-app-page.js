const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const appPages = {
  'boldmind-hub': 'Main landing page',
  'amebogist': 'News portal homepage',
  'educenter': 'Education platform',
  'boldmind-os': 'Productivity OS',
  'naija-fither': 'Health & wellness',
  'emailscraper-pro': 'Email finder tool',
  'safe-naija': 'Security AI platform',
  'receptionist': 'AI receptionist',
  'social-factory': 'Content generator',
  'credibility-hubs': 'Portfolio builder',
  'business-planning': 'Business plan AI',
  'financial-forecasting': 'Financial tools',
  'investor-readiness': 'Investor tools',
  'branding-design': 'Design tools',
  'digital-storefronts': 'E-commerce',
  'marketing-automation': 'Marketing tools',
  'analytics-dashboard': 'Analytics',
  'afrohustle-os': 'Side hustle platform',
  'naijagig-matcher': 'Gig marketplace',
  'kolo-ai': 'Thrift collector AI',
  'borderless-remit': 'Remittance tracker',
  'receipt-genius': 'Receipt generator',
  'power-alert': 'NEPA tracker',
  'farmgate-direct': 'Farm marketplace',
  'afrocopy-ai': 'Copywriting AI',
  'skill2cash': 'Skill marketplace',
  'anontruth-mic': 'Anonymous platform'
};

console.log('📱 Available apps to generate pages for:\n');
Object.keys(appPages).forEach((app, index) => {
  console.log(`${index + 1}. ${app} - ${appPages[app]}`);
});

rl.question('\nEnter app name (or number): ', (answer) => {
  let appName = answer;
  
  // If user entered a number
  if (!isNaN(answer) && answer >= 1 && answer <= Object.keys(appPages).length) {
    appName = Object.keys(appPages)[parseInt(answer) - 1];
  }
  
  if (!appPages[appName]) {
    console.log(`❌ App "${appName}" not found`);
    rl.close();
    return;
  }
  
  // Determine app path
  let appPath;
  if (appName.includes('-')) {
    if (appName.includes('planai') || ['receptionist', 'social-factory'].includes(appName)) {
      appPath = `apps/planai/${appName}`;
    } else {
      appPath = `apps/web/${appName}`;
    }
  } else {
    appPath = `apps/web/${appName}`;
  }
  
  // Check if app exists
  if (!fs.existsSync(appPath)) {
    console.log(`❌ App directory not found: ${appPath}`);
    rl.close();
    return;
  }
  
  // Create the page
  const pageContent = generatePageContent(appName);
  fs.writeFileSync(`${appPath}/app/page.tsx`, pageContent);
  
  console.log(`\n✅ Generated page for ${appName} at: ${appPath}/app/page.tsx`);
  console.log(`🌐 Run with: pnpm dev:${appName}`);
  
  rl.close();
});

function generatePageContent(appName) {
  const formattedName = appName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return `import { Rocket, Users, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Rocket className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">${formattedName}</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="#features" className="text-gray-700 hover:text-blue-600">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-blue-600">
                Pricing
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
              <Link
                href="/login"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">${formattedName}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Transform your business with our innovative solution designed for the Nigerian market.
            Join thousands of satisfied customers who have achieved remarkable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg font-semibold flex items-center justify-center"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/demo"
              className="px-8 py-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-lg font-semibold"
            >
              Request Demo
            </Link>
          </div>
          <p className="mt-4 text-gray-500 text-sm">
            No credit card required • 14-day free trial
          </p>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose ${formattedName}?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform offers everything you need to succeed in today's competitive market.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
              <Rocket className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p className="text-gray-600">
              Experience blazing fast performance and real-time updates that keep you ahead of the competition.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">User Friendly</h3>
            <p className="text-gray-600">
              Intuitive interface designed for both beginners and experts. Get started in minutes, not hours.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 bg-purple-100 rounded-lg w-fit mb-4">
              <Zap className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Powerful Features</h3>
            <p className="text-gray-600">
              Advanced tools and analytics that give you insights and control over your business operations.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join the revolution and experience the future of business management.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 text-lg font-semibold"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Rocket className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold">${formattedName}</span>
          </div>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Part of the BoldMind ecosystem. Building innovative solutions for Nigeria and beyond.
          </p>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ${formattedName}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}`;
}