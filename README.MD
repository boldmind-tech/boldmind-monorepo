# 🏗️ BoldMind Technology Monorepo

**One codebase. 31 products. 1 million entrepreneurs.**

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start all apps in development
pnpm dev

# Start specific app
pnpm --filter @boldmind/boldmind-hub dev

# Build all apps
pnpm build

# Deploy all apps
pnpm deploy:all
```

## 📦 Products

### ✅ Live (3)
- **AmeboGist.ng** - Pidgin news & lifestyle
- **EduCenter.com.ng** - JAMB/WAEC exam prep
- **AI Receptionist** - Meta API automation

### 🔨 Building (2)
- **BoldMind OS** - Productivity for neurodivergent entrepreneurs
- **Social Factory** - AI content generation

### 🆕 New (3)
- **Naija FitHer** - Nigerian women's weight loss
- **EmailScraper Pro** - Lead generation
- **SAFE AI** - Police intelligence platform

### 📋 Planned (8 PlanAI products)
Professional Credibility, Business Planning, Financial Forecasting, Investor Readiness, Branding & Design, Digital Storefronts, Marketing Automation, Analytics Dashboard

### 💡 Concepts (10)
AfroHustle OS, NaijaGig Matcher, KoloAI, BorderlessRemit, ReceiptGenius, PowerAlert, FarmGate, AfroCopy AI, Skill2Cash, AnonTruth Mic

## 📁 Structure

```
apps/
├── web/          # Web applications
├── planai/       # PlanAI Suite
└── mobile/       # Mobile apps (TWA + React Native)

packages/         # Shared code
├── ui/           # Components
├── utils/        # Utilities
├── database/     # DB models
└── ai/           # AI integrations

services/         # Backend services
└── api-gateway/  # NestJS API
```

## 🔧 Development

```bash
# Run tests
pnpm test

# Lint all code
pnpm lint

# Format all code
pnpm format

# Clean all node_modules
pnpm clean

# Generate icons for all apps
pnpm icons:generate
```

## 🌐 Domains

- **boldmind.ng** - Main site
- **amebogist.ng** - News site
- **educenter.com.ng** - Education platform
- **os.boldmind.ng** - BoldMind OS
- **planai.boldmind.ng** - PlanAI Suite
- **fit.boldmind.ng** - Naija FitHer
- **email.boldmind.ng** - EmailScraper Pro
- **safe.boldmind.ng** - SAFE AI

## 📚 Documentation

See `/docs` folder for:
- Architecture overview
- Setup guide
- Deployment guide
- API documentation
- Adding new products

## 🎯 Mission

**Empower 1 million Nigerian entrepreneurs by 2030.**

---

Built with 💛 by BoldMind Technology Solution Enterprise