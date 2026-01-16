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


# Project Structure
boldmind-monorepo/
├── APPS/                                   # All applications
│   ├── WEB_APPS/                           # Next.js applications
│   │   ├── boldmind-hub/                      # boldmind.ng               
│   │   ├── amebogist/                         # amebogist.ng
│   │   ├── educenter/                         # educenter.com.ng
│   │   ├── boldmind-os/                       # os.boldmind.ng
│   │   ├── naija-fither/                      # fit.boldmind.ng
│   │   ├── emailscraper-pro/                  # email.boldmind.ng
│   │   ├── safe-ai/                           # safe.boldmind.ng
│   │   ├── social-factory/                    # social.boldmind.ng
│   │   └── PLANAI_SUITE/                      # planai.boldmind.ng/*
│   │       ├── receptionist/                   # AI Receptionist
│   │       ├── credibility-hubs/               # Professional portfolios
│   │       ├── business-planning/              # Business plan generator
│   │       ├── financial-forecasting/          # Cashflow modeling
│   │       ├── investor-readiness/             # Funding documentation
│   │       ├── branding-design/                # Logo & design tools
│   │       ├── digital-storefronts/            # E-commerce stores
│   │       ├── marketing-automation/           # Campaign automation
│   │       └── analytics-dashboard/            # Business intelligence
│   │
│   ├── MOBILE/                             # Mobile applications
│   │   ├── native/                            # React Native apps
│   │   │   └── safe-ai/                       # Police app (needs native)
│   │   └── twa/                               # Trusted Web Activities
│   │       ├── amebogist/                     # AmeboGist mobile
│   │       ├── educenter/                     # EduCenter mobile
│   │       ├── boldmind-os/                   # BoldMind OS mobile
│   │       ├── naija-fither/                  # Naija FitHer mobile
│   │       └── emailscraper-pro/              # EmailScraper mobile
│   │
│   └── CONCEPT_APPS/                          # building the products aLONGSIDE
│       ├── afrohustle-os/                     # hustle.boldmind.ng
│       ├── naijagig-matcher/                  # gig.educenter.com.ng
│       ├── kolo-ai/                           # kolo.boldmind.ng
│       ├── borderless-remit/                  # border.boldmind.ng
│       ├── receipt-genius/                    # receipt.boldmind.ng
│       ├── power-alert/                       # power.boldmind.ng
│       ├── farmgate-direct/                   # farm.boldmind.ng
│       ├── afrocopy-ai/                       # copy.amebogist.ng
│       ├── skill2cash/                        # skills.educenter.com.ng
│       └── anontruth-mic/                     # anon.amebogist.ng
│
├── PACKAGES/                               # Shared libraries
│   ├── ui/                                    # UI components & design system
│   │   ├── src/
│   │   │   ├── components/                    # React components
│   │   │   ├── styles/                        # Global styles & themes
│   │   │   └── index.ts                       # Public exports
│   │   └── package.json
│   ├── config/                                # Shared configurations
│   │   ├── eslint/                            # ESLint config
│   │   ├── typescript/                        # TypeScript config
│   │   ├── tailwind/                          # Tailwind config
│   │   └── next/                              # Next.js config
│   ├── utils/                                 # Utility functions
│   │   ├── src/
│   │   │   ├── constants/                     # Product catalog, routes
│   │   │   ├── helpers/                       # Helper functions
│   │   │   ├── hooks/                         # Custom React hooks
│   │   │   └── social/                        # Social media integrations
│   │   └── package.json
│   ├── api-client/                            # API client utilities
│   ├── auth/                                  # Authentication system
│   ├── payments/                              # Payment integrations
│   ├── ai/                                    # AI utilities
│   ├── email/                                 # Email templates
│   ├── analytics/                             # Analytics utilities
│   ├── seo/                                   # SEO utilities
│   └── database/                              # Database clients
│
├── SERVICES/                               # Backend services
│   ├── api-gateway/                           # NestJS API gateway
│   ├── payment-service/                       # Paystack & Flutterwave
│   ├── notification-service/                  # Email, SMS, Push notifications
│   ├── media-service/                         # Image & video processing
│   ├── analytics-service/                     # Data aggregation
│   ├── ai-service/                            # AI model serving
│   ├── user-service/                          # Central user management
│   └── product-specific-services/
│       ├── educenter-service/                 # EduCenter backend
│       └── naija-fither-service/              # Naija FitHer backend
│
├── INFRASTRUCTURE/                         # DevOps configuration
│   ├── docker/                                # Docker configurations
│   ├── kubernetes/                            # K8s manifests
│   ├── nginx/                                 # Nginx configurations
│   └── scripts/                               # Deployment scripts
│
├── TOOLS/                                  # Development tools
│   ├── scripts/                               # Automation scripts
│   │   ├── generate-icons.sh                  # Icon generation
│   │   ├── migrate-db.ts                      # Database migrations
│   │   ├── seed-database.ts                   # Seed test data
│   │   └── deploy-all.sh                      # Deploy all apps
│   ├── generators/                            # Code generators
│   │   ├── new-web-app/                       # Web app scaffold
│   │   ├── new-concept-app/                   # Concept app scaffold
│   │   └── new-service/                       # Service scaffold
│   └── migrations/                            # Database migrations
│
├── DOCS/                                   # Documentation
│   ├── architecture/                          # System architecture
│   ├── guides/                                # How-to guides
│   ├── api/                                   # API documentation
│   └── product-specs/                         # Product specifications
│
├── CONFIGURATION/ 
|          └── ports.md                    # port mapping
├── .github/                               # GitHub workflows
│   ├── workflows/
│   │   ├── ci.yml                         # Continuous integration
│   │   ├── deploy-live.yml                # Deploy live products
│   │   ├── deploy-planai.yml              # Deploy PlanAI suite
│   │   └── security.yml                   # Security scans
├── turbo.json                             # Turborepo configuration
├── pnpm-workspace.yaml                    # PNPM workspace config
├── package.json                           # Root dependencies
├──tsconfig.json                          # Root TypeScript config
├── .eslintrc.js                           # ESLint configuration
├── .prettierrc                            # Prettier configuration
├── tailwind.config.js                     # Root Tailwind config
└── .env.example                           # Environment variables


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