# 🏗️ BoldMind Monorepo

**One Codebase. 31+ Products. 1 Million Entrepreneurs by 2030.**

## 🎯 Mission
Empower 1 million Nigerian entrepreneurs by 2030 through innovative technology solutions that solve fundamental problems in the Nigerian ecosystem.

## 📊 Product Ecosystem

### ✅ Live Products (4)
1. **BoldMind Hub** - Main ecosystem hub (boldmind.ng)
2. **AmeboGist.ng** - Pidgin news & AI/Tech education platform
3. **EduCenter.com.ng** - JAMB/WAEC exam prep & career development
4. **AI Receptionist** - Meta API automation for lead capture

### 🔨 Building (2)
5. **BoldMind OS** - Productivity system for neurodivergent entrepreneurs
6. **Social Factory** - AI content generation & multi-platform publishing

### 🆕 New (3)
7. **Naija FitHer** - Weight loss platform for Nigerian women
8. **EmailScraper Pro** - B2B lead generation tool
9. **SAFE AI** - Police intelligence & crime prevention platform

### 📋 PlanAI Suite (8)
10 AI-powered business tools for entrepreneurs

### 💡 Concept Apps (10)
Future products in planning stage

### 📱 Mobile Apps (6)
Trusted Web Activities + React Native apps

**Total: 33 Products**

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- PNPM 8.15.0 or higher
- Git

### Installation
`bash` 
# Clone repository
git clone <https://github.com/boldmind-tech/boldmind-monorepo>
cd boldmind-monorepo

# Install dependencies
pnpm install

# Start development

BoldMind Hub: http://localhost:3000

AmeboGist: http://localhost:3001

EduCenter: http://localhost:3002


## Development Commands
 # Development
`bash`
pnpm dev:live     # Start live products
pnpm dev:building # Start building products
pnpm dev:planai   # Start PlanAI suite
pnpm dev:concepts # Start concept apps
pnpm dev:all      # Start all apps (be careful!)
Building
`bash`
pnpm build        # Build everything
pnpm build:live   # Build live products
pnpm build:shared # Build shared packages
Testing & Quality
`bash`
pnpm lint         # Lint all code
pnpm test         # Run tests
pnpm type-check   # TypeScript checking
pnpm format       # Format code
Dependency Management
`bash`
pnpm install:all  # Install all dependencies
pnpm update:deps  # Update all dependencies
pnpm check:deps   # Check for outdated dependencies
pnpm audit:deps   # Security audit
Cleanup
`bash` pnpm clean        # Clean everything


# 🔧  Technology Stack
## Frontend


## Framework: Next.js 14 (App Router)

Language: TypeScript 5.x

Styling: Tailwind CSS 3.x

Animations: Framer Motion 11.x

UI Components: Radix UI, Shadcn/ui

State Management: Zustand + React Query

# Backend
Framework: NestJS 10.x

Database: MongoDB, PostgreSQL

Authentication: JWT + OAuth 2.0, supabase

Payments: Paystack, Flutterwave

# Mobile
Cross-platform: React Native 0.74

Web Apps: Trusted Web Activities (TWA)

# Infrastructure
Hosting: Vercel (Web Apps), Railway (Services)

DNS/CDN: Cloudflare

CI/CD: GitHub Actions

Monitoring: Sentry, LogRocket

## 🌐 Domains

# Primary Domains
boldmind.ng - Main ecosystem hub

amebogist.ng - News & content platform

educenter.com.ng - Education platform

# Subdomains
os.boldmind.ng - BoldMind OS

planai.boldmind.ng - PlanAI Suite

fit.boldmind.ng - Naija FitHer

email.boldmind.ng - EmailScraper Pro

safe.boldmind.ng - SAFE AI

📚 Documentation

Architecture Overview

Getting Started Guide

Adding New Products

API Documentation

Product Specifications

🤝 ## Contributing
We welcome contributions! Please see our Contributing Guidelines.

Development Workflow
Fork the repository

Create a feature branch

Make your changes

Run tests and linting

Submit a pull request

Code Standards
Follow TypeScript strict mode

Use ESLint and Prettier configuration

Write meaningful commit messages

Add tests for new features

📞 Contact & Support
Website: https://boldmind.ng

Email: info@boldmind.ng

Github: https://github.com/boldmindtech

WhatsApp: +234 813 834 9271

Facebook: +234 813 670 5908

Twitter: @bobbycuc2025

🎯 Core Values (B.E.R.A.G)
Boldness - Courage to tackle Nigeria's biggest problems

Excellence - Delivering quality and measurable impact

Relevance - Solutions built for Nigerian context

Authenticity - True to our culture and community voice

Growth - Continuous improvement and empowerment

📄 License
This project is proprietary and confidential. All rights reserved.

# 🙏 Acknowledgments
Built with 💛 by BoldMind Technology Solution Enterprise for Nigerian entrepreneurs.

"Building Systems That Shift Nations"

text

Now restart your development:

``bash
# Stop all running processes (Ctrl+C in each terminal)
# Then restart
pnpm dev:live
You should now have all 4 live products running on different ports without conflicts! 🚀