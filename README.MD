# 🏗️ BoldMind Technology Monorepo

**One codebase. 31 products. 1 million entrepreneurs.**

## 🚀 Quick Start


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


# 🏗 BOLDMIND COMPLETE MONOREPO - ALL 31 PRODUCTS

boldmind-monorepo/
│
├── .github/
│ └── workflows/
│ ├── deploy-amebogist.yml # Auto-deploy AmeboGist
│ ├── deploy-educenter.yml # Auto-deploy EduCenter
│ ├── deploy-boldmind-hub.yml # Auto-deploy main site
│ ├── deploy-boldmind-os.yml # Auto-deploy BoldMind OS
│ ├── deploy-naija-fither.yml # Auto-deploy Naija FitHer
│ ├── deploy-emailscraper.yml # Auto-deploy EmailScraper Pro
│ ├── deploy-safe-naija.yml # Auto-deploy SAFE AI
│ ├── deploy-planai-receptionist.yml # Auto-deploy AI Receptionist
│ ├── deploy-planai-social.yml # Auto-deploy Social Factory
│ ├── test-all.yml # Run tests on all apps
│ └── shared-checks.yml # Lint, type-check, format
│
├── apps/
│ │
│ ├── web/ # 🌐 WEB APPLICATIONS
│ │ │
│ │ ├── boldmind-hub/ # Main landing page (boldmind.ng)
│ │ │ ├── app/
│ │ │ │ ├── page.tsx # Homepage
│ │ │ │ ├── about/page.tsx # About page
│ │ │ │ ├── products/page.tsx # Products showcase
│ │ │ │ ├── contact/page.tsx # Contact form
│ │ │ │ ├── planai/page.tsx # PlanAI Suite page
│ │ │ │ ├── layout.tsx # Root layout
│ │ │ │ ├── globals.css # Global styles
│ │ │ │ ├── sitemap.ts # SEO sitemap
│ │ │ │ └── robots.ts # Robots.txt
│ │ │ ├── public/
│ │ │ │ ├── logo.png # BoldMind logo
│ │ │ │ ├── favicon.ico
│ │ │ │ └── og-image.png # Social media preview
│ │ │ ├── components/
│ │ │ │ ├── Navbar.tsx
│ │ │ │ ├── Footer.tsx
│ │ │ │ └── Hero.tsx
│ │ │ ├── next.config.js
│ │ │ ├── package.json
│ │ │ ├── tailwind.config.js
│ │ │ ├── tsconfig.json
│ │ │ └── .env.local.example
│ │ │
│ │ ├── amebogist/ # AmeboGist.ng (LIVE ✅)
│ │ │ ├── app/
│ │ │ │ ├── (home)/
│ │ │ │ │ └── page.tsx # Homepage with latest gist
│ │ │ │ ├── news/
│ │ │ │ │ ├── [slug]/page.tsx # Individual news article
│ │ │ │ │ └── page.tsx # All news
│ │ │ │ ├── tech/page.tsx # Tech category
│ │ │ │ ├── lifestyle/page.tsx # Lifestyle category
│ │ │ │ ├── search/page.tsx # Search results
│ │ │ │ ├── api/
│ │ │ │ │ ├── posts/route.ts # CRUD for posts
│ │ │ │ │ └── adsense/route.ts # AdSense tracking
│ │ │ │ └── layout.tsx
│ │ │ ├── components/
│ │ │ │ ├── ArticleCard.tsx
│ │ │ │ ├── CategoryNav.tsx
│ │ │ │ └── AdUnit.tsx # AdSense component
│ │ │ ├── lib/
│ │ │ │ ├── mongodb.ts # DB connection
│ │ │ │ └── seo.ts # SEO utilities
│ │ │ ├── public/
│ │ │ ├── package.json
│ │ │ └── .env.local.example
│ │ │
│ │ ├── educenter/ # EduCenter.com.ng (LIVE ✅)
│ │ │ ├── app/
│ │ │ │ ├── (auth)/
│ │ │ │ │ ├── login/page.tsx
│ │ │ │ │ ├── register/page.tsx
│ │ │ │ │ └── reset-password/page.tsx
│ │ │ │ ├── (dashboard)/
│ │ │ │ │ ├── dashboard/page.tsx # Student dashboard
│ │ │ │ │ ├── courses/
│ │ │ │ │ │ ├── [id]/page.tsx # Course detail
│ │ │ │ │ │ └── page.tsx # All courses
│ │ │ │ │ ├── jamb/
│ │ │ │ │ │ ├── practice/page.tsx # JAMB practice
│ │ │ │ │ │ └── results/page.tsx # Past results
│ │ │ │ │ ├── subscription/page.tsx # Manage subscription
│ │ │ │ │ └── layout.tsx # Dashboard layout
│ │ │ │ ├── api/
│ │ │ │ │ ├── auth/
│ │ │ │ │ │ ├── login/route.ts
│ │ │ │ │ │ └── register/route.ts
│ │ │ │ │ ├── payments/
│ │ │ │ │ │ ├── paystack/route.ts # Paystack webhook
│ │ │ │ │ │ └── verify/route.ts
│ │ │ │ │ ├── courses/route.ts
│ │ │ │ │ └── questions/route.ts
│ │ │ │ └── layout.tsx
│ │ │ ├── components/
│ │ │ │ ├── QuestionCard.tsx
│ │ │ │ ├── PaymentButton.tsx
│ │ │ │ └── ProgressTracker.tsx
│ │ │ ├── lib/
│ │ │ │ ├── paystack.ts # Paystack integration
│ │ │ │ ├── supabase.ts # Auth
│ │ │ │ └── mongodb.ts
│ │ │ ├── package.json
│ │ │ └── .env.local.example
│ │ │
│ │ ├── boldmind-os/ # BoldMind OS (BUILDING 🔨)
│ │ │ ├── app/
│ │ │ │ ├── (auth)/
│ │ │ │ │ └── login/page.tsx
│ │ │ │ ├── (dashboard)/
│ │ │ │ │ ├── dashboard/page.tsx
│ │ │ │ │ ├── capture/page.tsx # Capture Brain
│ │ │ │ │ ├── focus/page.tsx # Focus Brain (Pomodoro)
│ │ │ │ │ ├── connect/page.tsx # Connect Brain (Knowledge graph)
│ │ │ │ │ ├── create/page.tsx # Create Brain (Content pipeline)
│ │ │ │ │ ├── reflect/page.tsx # Reflect Brain (Analytics)
│ │ │ │ │ └── settings/
│ │ │ │ │ ├── page.tsx
│ │ │ │ │ ├── dyslexia/page.tsx # Dyslexia mode settings
│ │ │ │ │ └── adhd/page.tsx # ADHD settings
│ │ │ │ ├── api/
│ │ │ │ │ ├── tasks/route.ts
│ │ │ │ │ ├── notes/route.ts
│ │ │ │ │ ├── ai/
│ │ │ │ │ │ ├── transcribe/route.ts # Whisper API
│ │ │ │ │ │ └── summarize/route.ts # OpenAI API
│ │ │ │ │ └── n8n/
│ │ │ │ │ └── trigger/route.ts
│ │ │ │ └── layout.tsx
│ │ │ ├── components/
│ │ │ │ ├── PomodoroTimer.tsx
│ │ │ │ ├── VoiceRecorder.tsx
│ │ │ │ ├── KnowledgeGraph.tsx
│ │ │ │ └── DyslexiaMode.tsx
│ │ │ ├── lib/
│ │ │ │ ├── openai.ts
│ │ │ │ ├── whisper.ts
│ │ │ │ └── n8n.ts
│ │ │ ├── package.json
│ │ │ └── .env.local.example
│ │ │
│ │ ├── naija-fither/ # Naija FitHer (NEW 🆕)
│ │ │ ├── app/
│ │ │ │ ├── (auth)/
│ │ │ │ │ ├── login/page.tsx
│ │ │ │ │ └── register/page.tsx
│ │ │ │ ├── (dashboard)/
│ │ │ │ │ ├── dashboard/page.tsx
│ │ │ │ │ ├── meal-plans/
│ │ │ │ │ │ ├── page.tsx # All meal plans
│ │ │ │ │ │ ├── [id]/page.tsx # Individual meal plan
│ │ │ │ │ │ └── create/page.tsx # AI meal plan generator
│ │ │ │ │ ├── workouts/
│ │ │ │ │ │ ├── page.tsx
│ │ │ │ │ │ └── [id]/page.tsx
│ │ │ │ │ ├── progress/page.tsx # Weight tracking
│ │ │ │ │ ├── community/page.tsx # WhatsApp groups
│ │ │ │ │ └── premium/page.tsx # Subscription page
│ │ │ │ ├── api/
│ │ │ │ │ ├── meal-plans/route.ts
│ │ │ │ │ ├── workouts/route.ts
│ │ │ │ │ ├── progress/route.ts
│ │ │ │ │ ├── ai/
│ │ │ │ │ │ └── generate-plan/route.ts # OpenAI meal planning
│ │ │ │ │ └── payments/route.ts
│ │ │ │ └── layout.tsx
│ │ │ ├── components/
│ │ │ │ ├── MealCard.tsx
│ │ │ │ ├── WorkoutVideo.tsx
│ │ │ │ ├── ProgressChart.tsx
│ │ │ │ └── NigerianFoodDatabase.tsx
│ │ │ ├── lib/
│ │ │ │ ├── nigerian-foods.json # 500+ Nigerian dishes
│ │ │ │ └── openai.ts
│ │ │ ├── package.json
│ │ │ └── .env.local.example
│ │ │
│ │ ├── emailscraper-pro/ # EmailScraper Pro (NEW 🆕)
│ │ │ ├── app/
│ │ │ │ ├── (auth)/
│ │ │ │ │ └── login/page.tsx
│ │ │ │ ├── (dashboard)/
│ │ │ │ │ ├── dashboard/page.tsx
│ │ │ │ │ ├── finder/
│ │ │ │ │ │ ├── page.tsx # Email finder UI
│ │ │ │ │ │ └── results/page.tsx
│ │ │ │ │ ├── verifier/page.tsx # Email verifier
│ │ │ │ │ ├── enrichment/page.tsx # Lead enrichment
│ │ │ │ │ ├── bulk/page.tsx # Bulk operations
│ │ │ │ │ ├── api-keys/page.tsx # API key management
│ │ │ │ │ └── subscription/page.tsx
│ │ │ │ ├── api/
│ │ │ │ │ ├── find/route.ts # Email finder API
│ │ │ │ │ ├── verify/route.ts # Email verifier API
│ │ │ │ │ ├── enrich/route.ts # Lead enrichment API
│ │ │ │ │ ├── bulk/route.ts # Bulk processing
│ │ │ │ │ └── webhook/
│ │ │ │ │ └── hunter/route.ts # Hunter.io fallback
│ │ │ │ └── layout.tsx
│ │ │ ├── components/
│ │ │ │ ├── EmailFinderForm.tsx
│ │ │ │ ├── VerificationResults.tsx
│ │ │ │ └── CsvUpload.tsx
│ │ │ ├── lib/
│ │ │ │ ├── scraper.ts # Custom email scraper
│ │ │ │ ├── verifier.ts
│ │ │ │ └── hunter.ts # Hunter.io integration
│ │ │ ├── package.json
│ │ │ └── .env.local.example
│ │ │
│ │ ├── safe-naija/ # SAFE AI (NEW 🆕)
│ │ │ ├── app/
│ │ │ │ ├── (auth)/
│ │ │ │ │ └── login/page.tsx
│ │ │ │ ├── (dashboard)/
│ │ │ │ │ ├── dashboard/page.tsx
│ │ │ │ │ ├── incidents/
│ │ │ │ │ │ ├── page.tsx # All incidents
│ │ │ │ │ │ ├── [id]/page.tsx # Incident detail
│ │ │ │ │ │ └── report/page.tsx # New incident
│ │ │ │ │ ├── cases/page.tsx # Case management
│ │ │ │ │ ├── analytics/page.tsx # Crime analytics
│ │ │ │ │ ├── map/page.tsx # Real-time crime map
│ │ │ │ │ └── officers/page.tsx # Officer management
│ │ │ │ ├── api/
│ │ │ │ │ ├── incidents/route.ts
│ │ │ │ │ ├── cases/route.ts
│ │ │ │ │ ├── analytics/route.ts
│ │ │ │ │ ├── ai/
│ │ │ │ │ │ ├── facial-recognition/route.ts
│ │ │ │ │ │ ├── pattern-detection/route.ts
│ │ │ │ │ │ └── predict-hotspot/route.ts
│ │ │ │ │ └── voice-to-text/route.ts # Whisper API (Pidgin)
│ │ │ │ └── layout.tsx
│ │ │ ├── components/
│ │ │ │ ├── IncidentForm.tsx
│ │ │ │ ├── CrimeMap.tsx
│ │ │ │ ├── VoiceRecorder.tsx
│ │ │ │ └── EvidenceUpload.tsx
│ │ │ ├── lib/
│ │ │ │ ├── tensorflow.ts # ML models
│ │ │ │ ├── postgres.ts # Secure DB
│ │ │ │ └── encryption.ts
│ │ │ ├── package.json
│ │ │ └── .env.local.example
│ │ │
│ │ ├── afrohustle-os/ # AfroHustle OS (CONCEPT 💡)
│ │ │ ├── app/
│ │ │ │ ├── dashboard/page.tsx
│ │ │ │ ├── blueprints/page.tsx # 100 side hustle blueprints
│ │ │ │ ├── tracker/page.tsx # Income tracker
│ │ │ │ └── community/page.tsx
│ │ │ ├── package.json
│ │ │ └── README.md
│ │ │
│ │ ├── naijagig-matcher/ # NaijaGig Matcher (CONCEPT 💡)
│ │ │ ├── app/
│ │ │ │ ├── gigs/page.tsx
│ │ │ │ ├── workers/page.tsx
│ │ │ │ └── api/route.ts
│ │ │ ├── package.json
│ │ │ └── README.md
│ │ │
│ │ ├── kolo-ai/ # KoloAI (CONCEPT 💡)
│ │ │ ├── app/
│ │ │ │ ├── groups/page.tsx # Thrift groups
│ │ │ │ ├── ai-predictor/page.tsx # Default prediction
│ │ │ │ └── api/route.ts
│ │ │ ├── package.json
│ │ │ └── README.md
│ │ │
│ │ ├── borderless-remit/ # BorderlessRemit Tracker (CONCEPT 💡)
│ │ │ ├── app/
│ │ │ │ ├── compare/page.tsx
│ │ │ │ └── api/route.ts
│ │ │ ├── package.json
│ │ │ └── README.md
│ │ │
│ │ ├── receipt-genius/ # ReceiptGenius NG (CONCEPT 💡)
│ │ │ ├── app/
│ │ │ │ ├── generator/page.tsx
│ │ │ │ └── api/route.ts
│ │ │ ├── package.json
│ │ │ └── README.md
│ │ │
│ │ ├── power-alert/ # PowerAlert NG (CONCEPT 💡)
│ │ │ ├── app/
│ │ │ │ ├── map/page.tsx # NEPA status map
│ │ │ │ ├── solar-calc/page.tsx
│ │ │ │ └── api/route.ts
│ │ │ ├── package.json
│ │ │ └── README.md
│ │ │
│ │ ├── farmgate-direct/ # FarmGate Direct (CONCEPT 💡)
│ │ │ ├── app/
│ │ │ │ ├── marketplace/page.tsx
│ │ │ │ └── api/route.ts
│ │ │ ├── package.json
│ │ │ └── README.md
│ │ │
│ │ ├── afrocopy-ai/ # AfroCopy AI (CONCEPT 💡)
│ │ │ ├── app/
│ │ │ │ ├── generate/page.tsx
│ │ │ │ └── api/route.ts
│ │ │ ├── package.json
│ │ │ └── README.md
│ │ │
│ │ ├── skill2cash/ # Skill2Cash Board (CONCEPT 💡)
│ │ │ ├── app/
│ │ │ │ ├── jobs/page.tsx
│ │ │ │ └── api/route.ts
│ │ │ ├── package.json
│ │ │ └── README.md
│ │ │
│ │ └── anontruth-mic/ # AnonTruth Mic (CONCEPT 💡)
│ │ ├── app/
│ │ │ ├── drops/page.tsx
│ │ │ └── api/route.ts
│ │ ├── package.json
│ │ └── README.md
│ │
│ ├── planai/ # 🤖 PLANAI SUITE (10 PRODUCTS)
│ │ │
│ │ ├── receptionist/ # AI Receptionist (LIVE ✅)
│ │ │ ├── app/
│ │ │ │ ├── (auth)/
│ │ │ │ │ └── login/page.tsx
│ │ │ │ ├── (dashboard)/
│ │ │ │ │ ├── dashboard/page.tsx
│ │ │ │ │ ├── clients/
│ │ │ │ │ │ ├── page.tsx # All clients
│ │ │ │ │ │ └── [id]/page.tsx # Client dashboard
│ │ │ │ │ ├── leads/page.tsx # Lead management
│ │ │ │ │ ├── conversations/page.tsx # Chat history
│ │ │ │ │ ├── automation/page.tsx # Auto-reply rules
│ │ │ │ │ └── settings/page.tsx
│ │ │ │ ├── api/
│ │ │ │ │ ├── meta/
│ │ │ │ │ │ ├── webhook/route.ts # Meta webhook
│ │ │ │ │ │ ├── reply/route.ts # Auto-reply logic
│ │ │ │ │ │ └── comments/route.ts
│ │ │ │ │ ├── leads/route.ts
│ │ │ │ │ ├── appointments/route.ts
│ │ │ │ │ └── clients/route.ts
│ │ │ │ └── layout.tsx
│ │ │ ├── components/
│ │ │ │ ├── ChatInterface.tsx
│ │ │ │ ├── LeadCard.tsx
│ │ │ │ └── AutoReplyRules.tsx
│ │ │ ├── lib/
│ │ │ │ ├── meta-api.ts # Meta Graph API
│ │ │ │ ├── whatsapp.ts
│ │ │ │ └── openai.ts
│ │ │ ├── package.json
│ │ │ └── .env.local.example
│ │ │
│ │ ├── social-factory/ # Social Media Content Factory (BUILDING 🔨)
│ │ │ ├── app/
│ │ │ │ ├── dashboard/page.tsx
│ │ │ │ ├── generate/page.tsx # AI video generator
│ │ │ │ ├── calendar/page.tsx # Content calendar
│ │ │ │ ├── analytics/page.tsx # Multi-platform analytics
│ │ │ │ └── api/
│ │ │ │ ├── pictory/route.ts # Pictory AI integration
│ │ │ │ ├── n8n/route.ts # n8n workflows
│ │ │ │ └── publish/route.ts # Multi-platform publish
│ │ │ ├── components/
│ │ │ │ ├── VideoGenerator.tsx
│ │ │ │ ├── ContentCalendar.tsx
│ │ │ │ └── PlatformSelector.tsx
│ │ │ ├── workflows/
│ │ │ │ ├── youtube-publish.json # n8n workflow
│ │ │ │ ├── instagram-publish.json
│ │ │ │ └── multi-platform.json
│ │ │ ├── lib/
│ │ │ │ ├── pictory.ts
│ │ │ │ ├── n8n.ts
│ │ │ │ └── social-apis.ts
│ │ │ ├── package.json
│ │ │ └── .env.local.example
│ │ │
│ │ ├── credibility-hubs/ # Professional Credibility Hubs (PLANNED 📋)
│ │ │ ├── app/
│ │ │ │ ├── builder/page.tsx # Portfolio builder
│ │ │ │ ├── templates/page.tsx
│ │ │ │ └── api/route.ts
│ │ │ ├── package.json
│ │ │ └── README.md
│ │ │
│ │ ├── business-planning/ # AI Business Planning (PLANNED 📋)
│ │ │ ├── app/
│ │ │ │ ├── generator/page.tsx
│ │ │ │ ├── pitch-deck/page.tsx
│ │ │ │ └── api/route.ts
│ │ │ ├── package.json
│ │ │ └── README.md
│ │ │
│ │ ├── financial-forecasting/ # Financial Forecasting (PLANNED 📋)
│ │ │ ├── app/
│ │ │ │ ├── dashboard/page.tsx
│ │ │ │ ├── projections/page.tsx
│ │ │ │ └── api/route.ts
│ │ │ ├── package.json
│ │ │ └── README.md
│ │ │
│ │ ├── investor-readiness/ # Investor Readiness Suite (PLANNED 📋)
│ │ │ ├── app/
│ │ │ │ ├── dashboard/page.tsx
│ │ │ │ ├── data-room/page.tsx
│ │ │ │ ├── cap-table/page.tsx
│ │ │ │ └── api/route.ts
│ │ │ ├── package.json
│ │ │ └── README.md
│ │ │
│ │ ├── branding-design/ # Branding & Design Tools (PLANNED 📋)
│ │ │ ├── app/
│ │ │ │ ├── logo-generator/page.tsx
│ │ │ │ ├── palette/page.tsx
│ │ │ │ └── api/route.ts
│ │ │ ├── package.json
│ │ │ └── README.md
│ │ │
│ │ ├── digital-storefronts/ # Digital Storefronts (PLANNED 📋)
│ │ │ ├── app/
│ │ │ │ ├── builder/page.tsx
│ │ │ │ ├── products/page.tsx
│ │ │ │ └── api/route.ts
│ │ │ ├── package.json
│ │ │ └── README.md
│ │ │
│ │ ├── marketing-automation/ # Marketing Automation (PLANNED 📋)
│ │ │ ├── app/
│ │ │ │ ├── campaigns/page.tsx
│ │ │ │ ├── segments/page.tsx
│ │ │ │ └── api/route.ts
│ │ │ ├── package.json
│ │ │ └── README.md
│ │ │
│ │ └── analytics-dashboard/ # Analytics Dashboard (PLANNED 📋)
│ │ ├── app/
│ │ │ ├── dashboard/page.tsx
│ │ │ ├── reports/page.tsx
│ │ │ └── api/route.ts
│ │ ├── package.json
│ │ └── README.md
│ │
│ └── mobile/ # 📱 MOBILE APPLICATIONS
│ │
│ ├── amebogist-twa/ # AmeboGist TWA
│ │ ├── android/
│ │ ├── package.json
│ │ └── README.md
│ │
│ ├── educenter-twa/ # EduCenter TWA
│ │ ├── android/
│ │ ├── package.json
│ │ └── README.md
│ │
│ ├── boldmind-os-twa/ # BoldMind OS TWA
│ │ ├── android/
│ │ ├── package.json
│ │ └── README.md
│ │
│ ├── naija-fither-twa/ # Naija FitHer TWA
│ │ ├── android/
│ │ ├── package.json
│ │ └── README.md
│ │
├── emailscraper-twa/ # EmailScraper TWA
│ │ ├── android/
│ │ ├── package.json
│ │ └── README.md
│ │
│ └── safe-naija-native/ # SAFE AI (Full React Native)
│ ├── android/
│ ├── ios/
│ ├── src/
│ │ ├── screens/
│ │ ├── components/
│ │ └── navigation/
│ ├── package.json
│ └── README.md
│
├── packages/ # 📦 SHARED LIBRARIES
│ │
│ ├── ui/ # Shared UI components
│ │ ├── src/
│ │ │ ├── components/
│ │ │ │ ├── Button.tsx
│ │ │ │ ├── Input.tsx
│ │ │ │ ├── Card.tsx
│ │ │ │ ├── Modal.tsx
│ │ │ │ ├── Navbar.tsx
│ │ │ │ ├── Footer.tsx
│ │ │ │ ├── Logo.tsx
│ │ │ │ ├── SocialLinks.tsx
│ │ │ │ ├── StatusBadge.tsx
│ │ │ │ ├── LoadingSpinner.tsx
│ │ │ │ ├── ErrorBoundary.tsx
│ │ │ │ └── index.ts
│ │ │ ├── styles/
│ │ │ │ └── globals.css
│ │ │ └── index.ts
│ │ ├── tailwind.config.js
│ │ ├── package.json
│ │ └── tsconfig.json
│ │
│ ├── config/ # Shared configurations
│ │ ├── eslint/
│ │ │ └── index.js
│ │ ├── typescript/
│ │ │ └── tsconfig.json
│ │ ├── tailwind/
│ │ │ └── tailwind.config.js
│ │ ├── next/
│ │ │ └── next.config.js
│ │ └── package.json
│ │
│ ├── utils/ # Shared utilities
│ │ ├── src/
│ │ │ ├── helpers/
│ │ │ │ ├── date.ts # Date formatting
│ │ │ │ ├── currency.ts # ₦ formatting
│ │ │ │ ├── string.ts # String utils
│ │ │ │ ├── array.ts # Array utils
│ │ │ │ └── validation.ts # Input validation
│ │ │ ├── hooks/
│ │ │ │ ├── useDebounce.ts
│ │ │ │ ├── useLocalStorage.ts
│ │ │ │ ├── useMediaQuery.ts
│ │ │ │ └── useClickOutside.ts
│ │ │ ├── constants/
│ │ │ │ ├── routes.ts
│ │ │ │ ├── colors.ts
│ │ │ │ └── products.ts # Product registry
│ │ │ ├── types/
│ │ │ │ ├── user.ts
│ │ │ │ ├── product.ts
│ │ │ │ ├── subscription.ts
│ │ │ │ └── index.ts
│ │ │ └── index.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ │
│ ├── api-client/ # Shared API clients
│ │ ├── src/
│ │ │ ├── client.ts # Axios instance
│ │ │ ├── interceptors.ts # Request/Response interceptors
│ │ │ ├── endpoints/
│ │ │ │ ├── auth.ts
│ │ │ │ ├── users.ts
│ │ │ │ ├── products.ts
│ │ │ │ ├── payments.ts
│ │ │ │ ├── analytics.ts
│ │ │ │ └── index.ts
│ │ │ ├── types/
│ │ │ │ └── api.ts
│ │ │ └── index.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ │
│ ├── database/ # Database utilities
│ │ ├── src/
│ │ │ ├── mongodb/
│ │ │ │ ├── client.ts # MongoDB connection
│ │ │ │ ├── models/
│ │ │ │ │ ├── User.ts
│ │ │ │ │ ├── Product.ts
│ │ │ │ │ ├── Subscription.ts
│ │ │ │ │ ├── Lead.ts
│ │ │ │ │ └── index.ts
│ │ │ │ └── schemas/
│ │ │ │ └── user.schema.ts
│ │ │ ├── postgres/
│ │ │ │ ├── client.ts # PostgreSQL connection (SAFE AI)
│ │ │ │ └── migrations/
│ │ │ │ └── 001_initial.sql
│ │ │ ├── prisma/
│ │ │ │ ├── schema.prisma # Unified Prisma schema
│ │ │ │ └── migrations/
│ │ │ └── index.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ │
│ ├── auth/
│ │   ├── domain/
│ │   │   ├── entities/
│ │   │   │   ├── User.ts
│ │   │   │   ├── Session.ts
│ │   │   │   ├── Role.ts
│ │   │   │   ├── Permission.ts
│ │   │   │   └── Subscription.ts
│ │   │   ├── value-objects/
│ │   │   │   ├── Email.ts
│ │   │   │   ├── UserId.ts
│ │   │   │   └── Provider.ts
│ │   │   └── policies/
│ │   │       ├── canAccessFeature.ts
│ │   │       └── isSubscriptionActive.ts
│ │   │
│ │   ├── application/
│ │   │   ├── login/
│ │   │   │   ├── loginWithEmail.ts
│ │   │   │   ├── loginWithOAuth.ts
│ │   │   │   └── refreshSession.ts
│ │   │   ├── register/
│ │   │   │   ├── registerUser.ts
│ │   │   │   └── verifyEmail.ts
│ │   │   ├── session/
│ │   │   │   ├── getSession.ts
│ │   │   │   └── revokeSession.ts
│ │   │   ├── subscription/
│ │   │   │   ├── attachSubscription.ts
│ │   │   │   ├── hasActiveSubscription.ts
│ │   │   │   └── getUserPlan.ts
│ │   │   └── index.ts
│ │   │
│ │   ├── infrastructure/
│ │   │   ├── supabase/
│ │   │   │   ├── client.ts
│ │   │   │   ├── auth-repository.ts
│ │   │   │   └── session-adapter.ts
│ │   │   ├── providers/
│ │   │   │   ├── google.provider.ts
│ │   │   │   ├── facebook.provider.ts
│ │   │   │   └── email.provider.ts
│ │   │   ├── repositories/
│ │   │   │   ├── user.repository.ts
│ │   │   │   └── subscription.repository.ts
│ │   │   └── index.ts
│ │   │
│ │   ├── delivery/
│ │   │   ├── nextjs/
│ │   │   │   ├── middleware.ts
│ │   │   │   ├── server-auth.ts
│ │   │   │   └── route-handlers.ts
│ │   │   ├── react/
│ │   │   │   ├── hooks/
│ │   │   │   │   ├── useAuth.ts
│ │   │   │   │   ├── useUser.ts
│ │   │   │   │   └── useSession.ts
│ │   │   │   └── AuthProvider.tsx
│ │   │   └── api/
│ │   │       └── auth.controller.ts
│ │   │
│ │   ├── types/
│ │   │   └── auth.ts
│ │   ├── index.ts
│ │   ├── package.json
│ │   └── tsconfig.json
│ │
│ ├── payments/ # Payment utilities
│ │ ├── src/
│ │ │ ├── paystack/
│ │ │ │ ├── client.ts # Paystack client
│ │ │ │ ├── verify.ts # Payment verification
│ │ │ │ ├── webhook.ts # Webhook handler
│ │ │ │ └── subscriptions.ts
│ │ │ ├── types/
│ │ │ │ └── payment.ts
│ │ │ └── index.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ │
│ ├── ai/ # AI utilities
│ │ ├── src/
│ │ │ ├── openai/
│ │ │ │ ├── client.ts # OpenAI client
│ │ │ │ ├── chat.ts # Chat completions
│ │ │ │ ├── embeddings.ts
│ │ │ │ └── assistants.ts
│ │ │ ├── whisper/
│ │ │ │ ├── transcribe.ts # Voice-to-text
│ │ │ │ └── translate.ts
│ │ │ ├── pictory/
│ │ │ │ └── video-generation.ts # Pictory AI
│ │ │ ├── prompts/
│ │ │ │ ├── meal-planning.ts # Naija FitHer prompts
│ │ │ │ ├── business-plan.ts # Business planning prompts
│ │ │ │ ├── content-generation.ts
│ │ │ │ └── index.ts
│ │ │ ├── cache/
│ │ │ │ └── response-cache.ts # Cache AI responses
│ │ │ └── index.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ │
│ ├── email/ # Email templates
│ │ ├── src/
│ │ │ ├── templates/
│ │ │ │ ├── Welcome.tsx # React Email component
│ │ │ │ ├── PasswordReset.tsx
│ │ │ │ ├── PaymentSuccess.tsx
│ │ │ │ ├── SubscriptionReminder.tsx
│ │ │ │ ├── LeadNotification.tsx
│ │ │ │ └── index.ts
│ │ │ ├── send.ts # Resend integration
│ │ │ └── index.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ │
│ ├── analytics/ # Analytics utilities
│ │ ├── src/
│ │ │ ├── google-analytics.ts
│ │ │ ├── mixpanel.ts
│ │ │ ├── posthog.ts
│ │ │ ├── events/
│ │ │ │ ├── user-events.ts
│ │ │ │ ├── product-events.ts
│ │ │ │ └── payment-events.ts
│ │ │ └── index.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ │
│ ├── seo/ # SEO utilities
│ │ ├── src/
│ │ │ ├── metadata.ts # Generate metadata
│ │ │ ├── sitemap.ts # Generate sitemaps
│ │ │ ├── robots.ts # Generate robots.txt
│ │ │ ├── schema.ts # JSON-LD schema
│ │ │ └── index.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ │
│ └── types/ # Global TypeScript types
│ ├── src/
│ │ ├── user.ts
│ │ ├── product.ts
│ │ ├── subscription.ts
│ │ ├── payment.ts
│ │ ├── analytics.ts
│ │ └── index.ts
│ ├── package.json
│ └── tsconfig.json
│
├── services/ # 🔧 BACKEND SERVICES
│ │
│ ├── api-gateway/ # NestJS API Gateway
│ │ ├── src/
│ │ │ ├── main.ts
│ │ │ ├── app.module.ts
│ │ │ ├── auth/
│ │ │ │ ├── auth.module.ts
│ │ │ │ ├── auth.service.ts
│ │ │ │ ├── auth.controller.ts
│ │ │ │ ├── jwt.strategy.ts
│ │ │ │ └── guards/
│ │ │ ├── proxy/
│ │ │ │ ├── proxy.module.ts
│ │ │ │ └── proxy.service.ts # Route to product APIs
│ │ │ ├── webhooks/
│ │ │ │ ├── webhooks.module.ts
│ │ │ │ ├── paystack.controller.ts
│ │ │ │ ├── meta.controller.ts
│ │ │ │ └── n8n.controller.ts
│ │ │ ├── analytics/
│ │ │ │ ├── analytics.module.ts
│ │ │ │ └── analytics.service.ts
│ │ │ ├── health/
│ │ │ │ └── health.controller.ts
│ │ │ └── config/
│ │ │ └── configuration.ts
│ │ ├── test/
│ │ ├── nest-cli.json
│ │ ├── package.json
│ │ ├── tsconfig.json
│ │ └── .env.example
│ │
│ ├── notification-service/ # Email/SMS/Push notifications
│ │ ├── src/
│ │ │ ├── email/
│ │ │ │ ├── resend.service.ts
│ │ │ │ └── templates/
│ │ │ ├── sms/
│ │ │ │ └── termii.service.ts # Termii SMS (Nigerian)
│ │ │ ├── push/
│ │ │ │ └── fcm.service.ts # Firebase Cloud Messaging
│ │ │ └── main.ts
│ │ ├── package.json
│ │ └── .env.example
│ │
│ ├── media-service/ # Media processing
│ │ ├── src/
│ │ │ ├── upload/
│ │ │ │ └── cloudinary.service.ts
│ │ │ ├── video/
│ │ │ │ └── ffmpeg.service.ts
│ │ │ ├── image/
│ │ │ │ └── sharp.service.ts # Image optimization
│ │ │ └── main.ts
│ │ ├── package.json
│ │ └── .env.example
│ │
│ └── analytics-service/ # Analytics aggregation
│ ├── src/
│ │ ├── collectors/
│ │ │ ├── google-analytics.ts
│ │ │ ├── mixpanel.ts
│ │ │ └── posthog.ts
│ │ ├── aggregators/
│ │ │ └── unified-analytics.ts
│ │ └── main.ts
│ ├── package.json
│ └── .env.example
│
├── infrastructure/ # 🚀 DEVOPS
│ │
│ ├── docker/
│ │ ├── Dockerfile.web # For Next.js apps
│ │ ├── Dockerfile.api # For NestJS services
│ │ ├── Dockerfile.n8n # For n8n workflows
│ │ └── docker-compose.yml
│ │
│ ├── kubernetes/
│ │ ├── deployments/
│ │ │ ├── web.yaml
│ │ │ └── api.yaml
│ │ ├── services/
│ │ │ └── loadbalancer.yaml
│ │ └── ingress/
│ │ └── ingress.yaml
│ │
│ ├── nginx/
│ │ └── nginx.conf
│ │
│ └── scripts/
│ ├── deploy-production.sh
│ ├── deploy-staging.sh
│ └── rollback.sh
│
├── tools/ # 🛠 DEVELOPMENT TOOLS
│ │
│ ├── scripts/
│ │ ├── generate-icons.sh # Generate all icons
│ │ ├── migrate-db.ts # Database migrations
│ │ ├── seed-database.ts # Seed test data
│ │ ├── generate-sitemap.ts # Generate sitemaps
│ │ ├── deploy-all.sh # Deploy all apps
│ │ ├── test-all.sh # Run all tests
│ │ └── clean-node-modules.sh # Clean dependencies
│ │
│ ├── generators/
│ │ ├── new-product/ # Scaffold new product
│ │ │ ├── template/
│ │ │ └── generate.js
│ │ ├── new-component/
│ │ │ └── generate.js
│ │ └── new-api-route/
│ │ └── generate.js
│ │
│ └── migrations/
│ ├── mongodb/
│ │ └── 001_initial_collections.js
│ └── postgres/
│ └── 001_initial_schema.sql
│
├── docs/ # 📚 DOCUMENTATION
│ │
│ ├── architecture/
│ │ ├── overview.md
│ │ ├── monorepo-structure.md
│ │ ├── database-schema.md
│ │ ├── api-gateway.md
│ │ └── deployment-architecture.md
│ │
│ ├── guides/
│ │ ├── getting-started.md
│ │ ├── setup-development.md
│ │ ├── deployment.md
│ │ ├── adding-new-product.md
│ │ ├── shared-packages.md
│ │ ├── authentication.md
│ │ ├── payments.md
│ │ └── testing.md
│ │
│ ├── api/
│ │ ├── openapi.yaml # OpenAPI spec
│ │ ├── auth-endpoints.md
│ │ ├── payment-endpoints.md
│ │ └── webhook-endpoints.md
│ │
│ └── product-specs/
│ ├── amebogist.md
│ ├── educenter.md
│ ├── boldmind-os.md
│ ├── naija-fither.md
│ ├── emailscraper-pro.md
│ ├── safe-naija.md
│ └── planai-suite.md
│
├── .github/ # 🤖 GITHUB WORKFLOWS (already listed above)
│
├── turbo.json # Turborepo configuration
├── package.json # Root package.json
├── pnpm-workspace.yaml # PNPM workspaces
├── .gitignore
├── .prettierrc
├── .eslintrc.js
├── tsconfig.json # Root TypeScript config
├── .env.example # All env vars documented
├── README.md # Getting started guide
├── CONTRIBUTING.md # Contribution guidelines
├── LICENSE
└── CHANGELOG.md # Version history


## 📊 PRODUCT STATUS SUMMARY
### **✅ LIVE (3 products)**
1. AmeboGist.ng - `apps/web/amebogist/`
2. EduCenter.com.ng - `apps/web/educenter/`
3. AI Receptionist - `apps/planai/receptionist/`
### **🔨 BUILDING (2 products)**
4. BoldMind OS - `apps/web/boldmind-os/`
5. Social Media Content Factory - `apps/planai/social-factory/`
### **🆕 NEW (3 products)**
6. Naija FitHer - `apps/web/naija-fither/`
7. EmailScraper Pro - `apps/web/emailscraper-pro/`
8. SAFE AI - `apps/web/safe-naija/`
### **📋 PLANNED (8 PlanAI products)**
9. Professional Credibility Hubs - `apps/planai/credibility-hubs/`
10. AI Business Planning - `apps/planai/business-planning/`
11. Financial Forecasting - `apps/planai/financial-forecasting/`
12. Investor Readiness Suite - `apps/planai/investor-readiness/`
13. Branding & Design Tools - `apps/planai/branding-design/`
14. Digital Storefronts - `apps/planai/digital-storefronts/`
15. Marketing Automation - `apps/planai/marketing-automation/`
16. Analytics Dashboard - `apps/planai/analytics-dashboard/`
### **💡 CONCEPTS (10 products)**
17. AfroHustle OS - `apps/web/afrohustle-os/`
18. NaijaGig Matcher - `apps/web/naijagig-matcher/`
19. KoloAI - `apps/web/kolo-ai/`
20. BorderlessRemit Tracker - `apps/web/borderless-remit/`
21. ReceiptGenius NG - `apps/web/receipt-genius/`
22. PowerAlert NG - `apps/web/power-alert/`
23. FarmGate Direct - `apps/web/farmgate-direct/`
24. AfroCopy AI - `apps/web/afrocopy-ai/`
25. Skill2Cash Board - `apps/web/skill2cash/`
26. AnonTruth Mic - `apps/web/anontruth-mic/`
### **📱 MOBILE (6 apps)**
27. AmeboGist TWA - `apps/mobile/amebogist-twa/`
28. EduCenter TWA - `apps/mobile/educenter-twa/`
29. BoldMind OS TWA - `apps/mobile/boldmind-os-twa/`
30. Naija FitHer TWA - `apps/mobile/naija-fither-twa/`
31. EmailScraper TWA - `apps/mobile/emailscraper-twa/`
32. SAFE AI Native - `apps/mobile/safe-naija-native/`
**TOTAL: 32 Products (31 web/concepts + 1 extra mobile)**



## 🔧 Development


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

# ALWAYS use these patterns:

# 1. Add to root (shared by all apps):
pnpm add -w react@^18.2.0

# 2. Add to specific app:
cd apps/web/boldmind-hub
pnpm add framer-motion@latest

# 3. Update everything consistently:
pnpm update --latest --recursive


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

See `/docs` folder for
- Architecture overview
- Setup guide
- Deployment guide
- API documentation
- Adding new products

## 🎯 Mission

**Empower 1 million Nigerian entrepreneurs by 2030.**
Built with 💛 by BoldMind Technology Solution Enterprise
## 4B08OZ3YbOUFrgUQ