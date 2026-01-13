boldmind-monorepo/
│
├── .github/
│ └── workflows/
│     ├── deploy-amebogist.yml
│     ├── deploy-educenter.yml
│     ├── deploy-boldmind-hub.yml
│     ├── deploy-boldmind-os.yml
│     ├── deploy-naija-fither.yml
│     ├── deploy-emailscraper.yml
│     ├── deploy-safe-naija.yml
│     ├── deploy-planai-receptionist.yml
│     ├── deploy-planai-social.yml
│     ├── test-all.yml
│     └── shared-checks.yml
│
├── apps/
│ │
│ ├── web/                                # 🌐 FRONTEND APPLICATIONS (Next.js 14+)
│ │ │
│ │ ├── boldmind-hub/                     # Main landing page
│ │ ├── amebogist/                        # News platform (LIVE)
│ │ ├── educenter/                        # Education platform (LIVE)
│ │ ├── boldmind-os/                      # Productivity OS (BUILDING)
│ │ ├── naija-fither/                     # Fitness app (NEW)
│ │ ├── emailscraper-pro/                 # Email tool (NEW)
│ │ ├── safe-naija/                       # Security app (NEW)
│ │ └── [10+ concept apps...]            # Concept applications
│ │
│ ├── planai/                             # 🤖 PLANAI SUITE
│ │ │
│ │ ├── receptionist/                     # AI Receptionist (LIVE)
│ │ ├── social-factory/                   # Content Factory (BUILDING)
│ │ └── [8+ PlanAI products...]          # Planned PlanAI tools
│ │
│ └── mobile/                             # 📱 MOBILE APPLICATIONS
│     │
│     ├── amebogist-twa/                  # TWA versions
│     ├── educenter-twa/
│     ├── boldmind-os-twa/
│     ├── naija-fither-twa/
│     ├── emailscraper-twa/
│     └── safe-naija-native/              # Full React Native app
│
├── packages/                             # 📦 SHARED PACKAGES (NO DB LOGIC)
│ │
│ ├── ui/                                 # Reusable UI components
│ │   ├── src/
│ │   │   ├── components/
│ │   │   │   ├── Button.tsx
│ │   │   │   ├── Input.tsx
│ │   │   │   ├── Card.tsx
│ │   │   │   ├── Modal.tsx
│ │   │   │   └── [10+ components...]
│ │   │   ├── styles/
│ │   │   │   └── globals.css
│ │   │   └── index.ts
│ │   ├── tailwind.config.js
│ │   ├── package.json
│ │   └── tsconfig.json
│ │
│ ├── utils/                              # Pure helper functions
│ │   ├── src/
│ │   │   ├── helpers/
│ │   │   │   ├── date.ts
│ │   │   │   ├── currency.ts
│ │   │   │   ├── validation.ts
│ │   │   │   └── [5+ helpers...]
│ │   │   ├── hooks/
│ │   │   │   ├── useDebounce.ts
│ │   │   │   ├── useLocalStorage.ts
│ │   │   │   ├── useMediaQuery.ts
│ │   │   │   └── [5+ hooks...]
│ │   │   ├── constants/
│ │   │   │   ├── routes.ts
│ │   │   │   ├── colors.ts
│ │   │   │   └── products.ts
│ │   │   ├── types/
│ │   │   │   ├── user.ts
│ │   │   │   ├── product.ts
│ │   │   │   ├── subscription.ts
│ │   │   │   └── index.ts
│ │   │   └── index.ts
│ │   ├── package.json
│ │   └── tsconfig.json
│ │
│ ├── config/                             # Shared tooling configurations
│ │   ├── eslint/
│ │   │   └── index.js
│ │   ├── typescript/
│ │   │   └── tsconfig.json
│ │   ├── tailwind/
│ │   │   └── tailwind.config.js
│ │   ├── next/
│ │   │   └── next.config.js
│ │   └── package.json
│ │
│ ├── api-client/                         # API SDK for all services
│ │   ├── src/
│ │   │   ├── client.ts                   # Axios/Fetch base client
│ │   │   ├── interceptors.ts             # Auth/error interceptors
│ │   │   ├── endpoints/
│ │   │   │   ├── auth.ts
│ │   │   │   ├── users.ts
│ │   │   │   ├── payments.ts
│ │   │   │   ├── products.ts
│ │   │   │   └── [5+ endpoints...]
│ │   │   └── index.ts
│ │   ├── package.json
│ │   └── tsconfig.json
│ │
│ ├── auth/                               # 🔐 AUTHENTICATION DOMAIN
│ │   ├── domain/
│ │   │   ├── entities/
│ │   │   │   ├── User.ts
│ │   │   │   ├── Session.ts
│ │   │   │   └── Subscription.ts
│ │   │   ├── value-objects/
│ │   │   │   ├── Email.ts
│ │   │   │   └── UserId.ts
│ │   │   └── policies/
│ │   │       ├── canAccessFeature.ts
│ │   │       └── isSubscriptionActive.ts
│ │   │
│ │   ├── application/
│ │   │   ├── login/
│ │   │   │   ├── loginWithEmail.ts
│ │   │   │   └── loginWithOAuth.ts
│ │   │   ├── register/
│ │   │   │   ├── registerUser.ts
│ │   │   │   └── verifyEmail.ts
│ │   │   ├── session/
│ │   │   │   └── getSession.ts
│ │   │   ├── subscription/
│ │   │   │   └── hasActiveSubscription.ts
│ │   │   └── index.ts
│ │   │
│ │   ├── infrastructure/
│ │   │   ├── supabase/
│ │   │   │   ├── client.ts
│ │   │   │   └── auth-repository.ts
│ │   │   ├── providers/
│ │   │   │   ├── google.provider.ts
│ │   │   │   └── email.provider.ts
│ │   │   └── repositories/
│ │   │       └── user.repository.ts
│ │   │
│ │   ├── delivery/
│ │   │   ├── nextjs/
│ │   │   │   ├── middleware.ts
│ │   │   │   └── server-auth.ts
│ │   │   ├── react/
│ │   │   │   ├── hooks/
│ │   │   │   │   ├── useAuth.ts
│ │   │   │   │   └── useUser.ts
│ │   │   │   └── AuthProvider.tsx
│ │   │   └── api/
│ │   │       └── auth.controller.ts
│ │   │
│ │   ├── package.json
│ │   └── tsconfig.json
│ │
│ ├── database/                           # DATABASE ADAPTERS ONLY
│ │   ├── src/
│ │   │   ├── mongodb/
│ │   │   │   ├── client.ts               # MongoDB connection
│ │   │   │   └── base.repository.ts      # Base CRUD operations
│ │   │   ├── postgres/
│ │   │   │   ├── client.ts               # PostgreSQL connection
│ │   │   │   └── migrations/
│ │   │   │       └── [migrations...]
│ │   │   ├── prisma/
│ │   │   │   ├── schema.prisma           # Unified schema
│ │   │   │   └── migrations/
│ │   │   │       └── [migrations...]
│ │   │   └── supabase/
│ │   │       └── client.ts               # Supabase client
│ │   ├── package.json
│ │   └── tsconfig.json
│ │
│ ├── payments/                           # 💳 PAYMENT INTEGRATIONS
│ │   ├── src/
│ │   │   ├── paystack/
│ │   │   │   ├── client.ts               # Paystack API client
│ │   │   │   ├── verify.ts               # Payment verification
│ │   │   │   ├── webhook.ts              # Webhook handler
│ │   │   │   └── subscriptions.ts        # Subscription management
│ │   │   ├── types/
│ │   │   │   └── payment.ts
│ │   │   └── index.ts
│ │   ├── package.json
│ │   └── tsconfig.json
│ │
│ ├── ai/                                 # 🤖 AI INTEGRATIONS
│ │   ├── src/
│ │   │   ├── openai/
│ │   │   │   ├── client.ts               # OpenAI client
│ │   │   │   ├── chat.ts                 # Chat completions
│ │   │   │   └── assistants.ts           # Assistants API
│ │   │   ├── whisper/
│ │   │   │   └── transcribe.ts           # Voice-to-text
│ │   │   ├── prompts/
│ │   │   │   ├── meal-planning.ts        # Naija FitHer prompts
│ │   │   │   ├── business-plan.ts        # Business planning
│ │   │   │   └── content-generation.ts   # Content creation
│ │   │   ├── cache/
│ │   │   │   └── response-cache.ts       # AI response caching
│ │   │   └── index.ts
│ │   ├── package.json
│ │   └── tsconfig.json
│ │
│ ├── email/                              # 📧 EMAIL TEMPLATES & SENDER
│ │   ├── src/
│ │   │   ├── templates/
│ │   │   │   ├── Welcome.tsx             # React Email component
│ │   │   │   ├── PasswordReset.tsx
│ │   │   │   ├── PaymentSuccess.tsx
│ │   │   │   └── [5+ templates...]
│ │   │   ├── providers/
│ │   │   │   └── resend.ts               # Resend integration
│ │   │   └── send.ts                     # Unified send function
│ │   ├── package.json
│ │   └── tsconfig.json
│ │
│ ├── analytics/                          # 📊 ANALYTICS & EVENTS
│ │   ├── src/
│ │   │   ├── events/
│ │   │   │   ├── user-events.ts
│ │   │   │   ├── product-events.ts
│ │   │   │   └── payment-events.ts
│ │   │   ├── trackers/
│ │   │   │   ├── google-analytics.ts
│ │   │   │   ├── mixpanel.ts
│ │   │   │   └── posthog.ts
│ │   │   └── index.ts
│ │   ├── package.json
│ │   └── tsconfig.json
│ │
│ ├── seo/                                # 🔍 SEO UTILITIES
│ │   ├── src/
│ │   │   ├── metadata.ts                 # Dynamic metadata
│ │   │   ├── sitemap.ts                  # Sitemap generation
│ │   │   ├── robots.ts                   # Robots.txt generation
│ │   │   ├── schema.ts                   # JSON-LD structured data
│ │   │   └── index.ts
│ │   ├── package.json
│ │   └── tsconfig.json
│ │
│ └── types/                              # 📝 GLOBAL TYPE DEFINITIONS
│     ├── src/
│     │   ├── user.ts
│     │   ├── product.ts
│     │   ├── subscription.ts
│     │   ├── payment.ts
│     │   ├── analytics.ts
│     │   └── index.ts
│     ├── package.json
│     └── tsconfig.json
│
├── services/                             # 🔧 BACKEND SERVICES (WITH DB)
│ │
│ ├── api-gateway/                        # 🚪 SINGLE ENTRY POINT (NestJS)
│ │   ├── src/
│ │   │   ├── main.ts
│ │   │   ├── app.module.ts
│ │   │   ├── auth/
│ │   │   │   ├── auth.module.ts
│ │   │   │   ├── auth.service.ts
│ │   │   │   └── auth.controller.ts
│ │   │   ├── proxy/
│ │   │   │   ├── proxy.module.ts
│ │   │   │   └── proxy.service.ts       # Routes to microservices
│ │   │   ├── webhooks/
│ │   │   │   ├── webhooks.module.ts
│ │   │   │   ├── paystack.controller.ts
│ │   │   │   └── meta.controller.ts
│ │   │   ├── health/
│ │   │   │   └── health.controller.ts
│ │   │   └── config/
│ │   │       └── configuration.ts
│ │   ├── package.json
│ │   └── .env.example
│ │
│ ├── user-service/                       # 🔑 USER SOURCE OF TRUTH
│ │   ├── src/
│ │   │   ├── users/
│ │   │   │   ├── user.schema.ts         # MongoDB schema
│ │   │   │   ├── users.service.ts       # Business logic
│ │   │   │   └── users.controller.ts    # REST endpoints
│ │   │   ├── subscriptions/
│ │   │   │   └── subscription.service.ts
│ │   │   ├── stats/
│ │   │   │   └── user-stats.service.ts
│ │   │   └── events/
│ │   │       └── user-events.service.ts
│ │   ├── package.json
│ │   └── .env.example
│ │
│ ├── payment-service/                    # 💳 PAYMENTS SERVICE
│ │   ├── src/
│ │   │   ├── paystack/
│ │   │   │   └── paystack.service.ts
│ │   │   ├── plans/
│ │   │   │   └── pricing-plans.service.ts
│ │   │   ├── billing/
│ │   │   │   └── billing.service.ts
│ │   │   └── webhooks/
│ │   │       └── payment-webhooks.service.ts
│ │   ├── package.json
│ │   └── .env.example
│ │
│ ├── educenter-service/                  # 🎓 EDUCATION SERVICE
│ │   ├── src/
│ │   │   ├── courses/
│ │   │   │   └── course.service.ts
│ │   │   ├── questions/
│ │   │   │   └── question.service.ts
│ │   │   ├── practice/
│ │   │   │   └── practice.service.ts
│ │   │   └── results/
│ │   │       └── result.service.ts
│ │   ├── package.json
│ │   └── .env.example
│ │
│ ├── naija-fither-service/               # 🏋️ FITNESS SERVICE
│ │   ├── src/
│ │   │   ├── meals/
│ │   │   │   └── meal-plan.service.ts
│ │   │   ├── workouts/
│ │   │   │   └── workout.service.ts
│ │   │   └── progress/
│ │   │       └── progress.service.ts
│ │   ├── package.json
│ │   └── .env.example
│ │
│ ├── safe-naija-service/                 # 🛡️ SECURITY SERVICE (PostgreSQL)
│ │   ├── src/
│ │   │   ├── incidents/
│ │   │   │   └── incident.service.ts
│ │   │   ├── analytics/
│ │   │   │   └── crime-analytics.service.ts
│ │   │   └── ai-detection/
│ │   │       └── ai-detection.service.ts
│ │   ├── package.json
│ │   └── .env.example
│ │
│ ├── planai-service/                     # 🤖 PLANAI SERVICE
│ │   ├── src/
│ │   │   ├── receptionist/
│ │   │   │   └── receptionist.service.ts
│ │   │   ├── leads/
│ │   │   │   └── lead.service.ts
│ │   │   ├── automation/
│ │   │   │   └── automation.service.ts
│ │   │   └── conversations/
│ │   │       └── conversation.service.ts
│ │   ├── package.json
│ │   └── .env.example
│ │
│ ├── emailscraper-service/               # 📧 EMAIL SCRAPER SERVICE
│ │   ├── src/
│ │   │   ├── finder/
│ │   │   │   └── email-finder.service.ts
│ │   │   ├── verifier/
│ │   │   │   └── email-verifier.service.ts
│ │   │   └── enrichment/
│ │   │       └── lead-enrichment.service.ts
│ │   ├── package.json
│ │   └── .env.example
│ │
│ └── notification-service/               # 🔔 NOTIFICATION SERVICE
│     ├── src/
│     │   ├── email/
│     │   │   └── email-notification.service.ts
│     │   ├── sms/
│     │   │   └── sms-notification.service.ts
│     │   └── push/
│     │       └── push-notification.service.ts
│     ├── package.json
│     └── .env.example
│
├── infrastructure/                       # 🚀 DEVOPS & DEPLOYMENT
│   ├── docker/
│   │   ├── Dockerfile.web
│   │   ├── Dockerfile.api
│   │   ├── Dockerfile.n8n
│   │   └── docker-compose.yml
│   ├── kubernetes/
│   │   ├── deployments/
│   │   │   ├── web.yaml
│   │   │   └── api.yaml
│   │   ├── services/
│   │   │   └── loadbalancer.yaml
│   │   └── ingress/
│   │       └── ingress.yaml
│   ├── nginx/
│   │   └── nginx.conf
│   └── scripts/
│       ├── deploy-production.sh
│       ├── deploy-staging.sh
│       └── rollback.sh
│
├── tools/                                # 🛠 DEVELOPMENT TOOLS
│   ├── scripts/
│   │   ├── generate-icons.sh
│   │   ├── migrate-db.ts
│   │   ├── seed-database.ts
│   │   ├── generate-sitemap.ts
│   │   ├── deploy-all.sh
│   │   ├── test-all.sh
│   │   └── clean-node-modules.sh
│   ├── generators/
│   │   ├── new-product/
│   │   │   ├── template/
│   │   │   └── generate.js
│   │   ├── new-component/
│   │   │   └── generate.js
│   │   └── new-api-route/
│   │       └── generate.js
│   └── migrations/
│       ├── mongodb/
│       │   └── 001_initial_collections.js
│       └── postgres/
│           └── 001_initial_schema.sql
│
├── docs/                                 # 📚 DOCUMENTATION
│   ├── architecture/
│   │   ├── overview.md
│   │   ├── monorepo-structure.md
│   │   ├── database-schema.md
│   │   └── deployment-architecture.md
│   ├── guides/
│   │   ├── getting-started.md
│   │   ├── setup-development.md
│   │   ├── deployment.md
│   │   ├── adding-new-product.md
│   │   └── shared-packages.md
│   ├── api/
│   │   ├── openapi.yaml
│   │   ├── auth-endpoints.md
│   │   └── payment-endpoints.md
│   └── product-specs/
│       ├── amebogist.md
│       ├── educenter.md
│       └── [10+ product specs...]
│
├── turbo.json                            # Turborepo configuration
├── package.json                          # Root package.json
├── pnpm-workspace.yaml                   # PNPM workspace config
├── .gitignore
├── .prettierrc
├── .eslintrc.js
├── tsconfig.json                         # Root TypeScript config
├── .env.example                          # Environment variables
└── README.md         