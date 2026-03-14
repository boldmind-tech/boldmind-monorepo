# BoldMind Technology — Complete Monorepo Structure
# Sprint Start: 2 March 2026 | Stack: Turborepo + Next.js + NestJS Monolith + Railway

```
boldmind-monorepo/                                        ← Turborepo root
├── package.json                                 ← root workspace config
├── pnpm-workspace.yaml                          ← pnpm workspaces
├── turbo.json                                   ← Turborepo pipeline
├── tsconfig.base.json                           ← shared TS base config
├── .env.example                                 ← all env vars template
├── .gitignore
├── README.md
│
├── apps/                                        ← 10 Next.js frontend apps
│   ├── boldmind-hub/                            → boldmind.ng
│   │   ├── app/
│   │   │   ├── layout.tsx                       ← root layout + SSO check
│   │   │   ├── page.tsx                         ← ecosystem home
│   │   │   ├── (auth)/
│   │   │   │   ├── login/page.tsx
│   │   │   │   └── register/page.tsx
│   │   │   ├── dashboard/page.tsx               ← user product dashboard
│   │   │   ├── admin/
│   │   │   │   ├── page.tsx                     ← admin command (your existing file ✓)
│   │   │   │   ├── users/page.tsx
│   │   │   │   └── products/page.tsx
│   │   │   ├── directory/page.tsx               ← business directory
│   │   │   ├── community/page.tsx               ← founder community feed
│   │   │   └── api/
│   │   │       └── [...route]/route.ts          ← proxy to api.boldmind.ng
│   │   ├── lib/
│   │   │   └── hub-api-adapter.ts               ← your existing file ✓
│   │   ├── public/
│   │   │   ├── manifest.json                    ← TWA (ng.boldmind.hub)
│   │   │   └── .well-known/assetlinks.json
│   │   ├── next.config.ts
│   │   ├── tailwind.config.ts
│   │   └── package.json
│   │
│   ├── planai-suite/                            → planai.boldmind.ng
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx                         ← PlanAI landing/tool picker
│   │   │   ├── (tools)/
│   │   │   │   ├── receptionist/page.tsx        ← AI Receptionist
│   │   │   │   ├── analytics/page.tsx           ← Analytics Dashboard
│   │   │   │   ├── branding/page.tsx            ← Branding & Design
│   │   │   │   ├── planning/page.tsx            ← AI Business Planning
│   │   │   │   ├── credibility/page.tsx         ← Credibility Hubs
│   │   │   │   ├── store/page.tsx               ← Digital Storefronts
│   │   │   │   ├── finance/page.tsx             ← Financial Forecasting
│   │   │   │   ├── investor/page.tsx            ← Investor Readiness
│   │   │   │   ├── marketing/page.tsx           ← Marketing Automation
│   │   │   │   ├── hr/page.tsx                  ← HR Tools
│   │   │   │   ├── legal/page.tsx               ← Legal Templates
│   │   │   │   └── operations/page.tsx          ← Operations
│   │   │   └── api/[...route]/route.ts
│   │   ├── public/manifest.json                 ← TWA (ng.boldmind.planai)
│   │   ├── next.config.ts
│   │   └── package.json
│   │
│   ├── boldmind-os/                             → os.boldmind.ng
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx                         ← OS dashboard
│   │   │   ├── focus/page.tsx                   ← ADHD focus mode
│   │   │   ├── pomodoro/page.tsx                ← Pomodoro timer
│   │   │   ├── graph/page.tsx                   ← Knowledge graph
│   │   │   ├── notes/page.tsx                   ← Quick capture
│   │   │   └── settings/page.tsx                ← Dyslexia mode toggle
│   │   ├── public/manifest.json                 ← TWA (ng.boldmind.os)
│   │   ├── next.config.ts
│   │   └── package.json
│   │
│   ├── boldmind-tools/                          → tools.boldmind.ng
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx                         ← tools landing
│   │   │   ├── emailscraper/                    ← EmailScraper Pro
│   │   │   │   ├── page.tsx
│   │   │   │   ├── results/page.tsx
│   │   │   │   └── export/page.tsx
│   │   │   └── social/                          ← Social Content Factory
│   │   │       ├── page.tsx
│   │   │       ├── calendar/page.tsx
│   │   │       ├── generate/page.tsx
│   │   │       └── accounts/page.tsx
│   │   ├── public/manifest.json                 ← TWA (ng.boldmind.tools)
│   │   ├── next.config.ts
│   │   └── package.json
│   │
│   ├── naija-fit/                               → fit.boldmind.ng
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx                         ← app landing
│   │   │   ├── workout/page.tsx                 ← workout plans
│   │   │   ├── nutrition/page.tsx               ← Nigerian meal tracker
│   │   │   ├── track/page.tsx                   ← body tracking
│   │   │   ├── community/page.tsx               ← challenges + leaderboard
│   │   │   └── coach/page.tsx                   ← AI coach chat
│   │   ├── public/manifest.json                 ← TWA (ng.boldmind.fit)
│   │   ├── next.config.ts
│   │   └── package.json
│   │
│   ├── boldmind-concepts/                       → concept.boldmind.ng
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx                         ← concept hub grid
│   │   │   ├── kolo/page.tsx                    ← KoloAI
│   │   │   ├── safe/page.tsx                    ← SAFE AI
│   │   │   ├── afrohustle/page.tsx              ← AfroHustle OS
│   │   │   ├── naijagig/page.tsx                ← NaijaGig Matcher
│   │   │   ├── remit/page.tsx                   ← Borderless Remit
│   │   │   ├── farmgate/page.tsx                ← FarmGate Direct
│   │   │   ├── power/page.tsx                   ← PowerAlert NG
│   │   │   ├── receipt/page.tsx                 ← ReceiptGenius NG
│   │   │   ├── skill2cash/page.tsx              ← Skill2Cash
│   │   │   ├── afrocopy/page.tsx                ← AfroCopy AI
│   │   │   └── anon/page.tsx                    ← AnonTruth Mic
│   │   ├── public/manifest.json                 ← TWA (ng.boldmind.concept)
│   │   ├── next.config.ts
│   │   └── package.json
│   │
│   ├── amebogist/                               → amebogist.ng
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx                         ← news feed
│   │   │   ├── [slug]/page.tsx                  ← article page (SSG)
│   │   │   ├── category/[cat]/page.tsx
│   │   │   ├── trending/page.tsx
│   │   │   └── api/
│   │   │       ├── articles/route.ts
│   │   │       └── rss/route.ts
│   │   ├── public/manifest.json                 ← TWA (ng.amebogist.app)
│   │   ├── next.config.ts
│   │   └── package.json
│   │
│   ├── amebo-studio/                            → studio.amebogist.ng
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx                         ← creator dashboard
│   │   │   ├── write/page.tsx                   ← article editor
│   │   │   ├── anon/page.tsx                    ← AnonTruth Mic (media context)
│   │   │   ├── revenue/page.tsx                 ← earnings dashboard
│   │   │   └── analytics/page.tsx
│   │   ├── public/manifest.json                 ← TWA (bundled with amebogist)
│   │   ├── next.config.ts
│   │   └── package.json
│   │
│   ├── educenter/                               → educenter.com.ng
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx                         ← landing
│   │   │   ├── dashboard/page.tsx               ← student dashboard
│   │   │   ├── cbt/
│   │   │   │   ├── page.tsx                     ← subject picker
│   │   │   │   └── [subject]/page.tsx           ← JAMB simulator
│   │   │   ├── study/page.tsx                   ← study materials
│   │   │   ├── leaderboard/page.tsx
│   │   │   └── certificate/[id]/page.tsx
│   │   ├── public/manifest.json                 ← TWA (ng.educenter.app) HIGH PRIORITY
│   │   ├── next.config.ts
│   │   └── package.json
│   │
│   └── skillgig/                               → skills.educenter.com.ng
│       ├── app/
│       │   ├── layout.tsx
│       │   ├── page.tsx                         ← skill marketplace
│       │   ├── profile/[id]/page.tsx
│       │   ├── post/page.tsx                    ← post a gig
│       │   ├── book/[id]/page.tsx
│       │   └── escrow/page.tsx
│       ├── public/manifest.json                 ← TWA (ng.educenter.skills)
│       ├── next.config.ts
│       └── package.json
│
├── packages/                                    ← shared internal packages
│   │
│   ├── ui/                                      ← @boldmind/ui
│   │   ├── src/
│   │   │   ├── index.ts                         ← barrel export
│   │   │   ├── components/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Badge.tsx
│   │   │   │   ├── Avatar.tsx
│   │   │   │   ├── Skeleton.tsx
│   │   │   │   ├── Toast.tsx
│   │   │   │   ├── Spinner.tsx
│   │   │   │   ├── Tabs.tsx
│   │   │   │   ├── Dropdown.tsx
│   │   │   │   ├── DataTable.tsx
│   │   │   │   ├── Chart.tsx                    ← recharts wrapper
│   │   │   │   ├── PaystackButton.tsx           ← shared payment button
│   │   │   │   ├── OfflineBanner.tsx            ← PWA offline indicator
│   │   │   │   └── DyslexiaToggle.tsx           ← OpenDyslexic font toggle
│   │   │   ├── layouts/
│   │   │   │   ├── AppShell.tsx                 ← sidebar + header shell
│   │   │   │   ├── AuthLayout.tsx
│   │   │   │   └── AdminLayout.tsx
│   │   │   └── primitives/
│   │   │       ├── ThemeProvider.tsx            ← per-product color theme
│   │   │       └── FontProvider.tsx             ← OpenDyslexic loader
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── auth/                                    ← @boldmind/auth
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   ├── useAuth.ts                       ← React hook (JWT, no Supabase)
│   │   │   ├── AuthProvider.tsx                 ← context provider
│   │   │   ├── withAuth.tsx                     ← HOC for protected pages
│   │   │   ├── middleware.ts                    ← Next.js middleware JWT check
│   │   │   ├── types.ts                         ← User, Session, Role types
│   │   │   └── sso.ts                           ← cross-app SSO cookie logic
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── utils/                                   ← @boldmind/utils
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   ├── constants/
│   │   │   │   ├── products.ts                  ← BOLDMIND_PRODUCTS array ✓
│   │   │   │   ├── colors.ts                    ← your colors.ts ✓
│   │   │   │   └── database-config.ts           ← your database-config.ts ✓
│   │   │   ├── styles/
│   │   │   │   └── theme.ts                     ← your theme.ts ✓
│   │   │   ├── formatters/
│   │   │   │   ├── currency.ts                  ← formatNGN(), ngnToUsd()
│   │   │   │   ├── date.ts                      ← Nigerian timezone helpers
│   │   │   │   └── text.ts                      ← Pidgin text utils
│   │   │   ├── validators/
│   │   │   │   ├── phone.ts                     ← Nigerian phone validation
│   │   │   │   └── bvn.ts                       ← BVN format check
│   │   │   ├── hooks/
│   │   │   │   ├── useLocalStorage.ts
│   │   │   │   ├── useOffline.ts                ← PWA offline detection
│   │   │   │   └── usePaystack.ts               ← Paystack hook
│   │   │   └── types/
│   │   │       ├── index.ts
│   │   │       ├── product.ts                   ← Product, ProductStatus types
│   │   │       ├── user.ts                      ← User, Role, Subscription types
│   │   │       └── api.ts                       ← ApiResponse<T>, PaginatedResponse<T>
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── config/                                  ← @boldmind/config
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   ├── shared/
│   │   │   │   └── env-config.ts                ← your env-config.ts ✓ (updated)
│   │   │   └── pricing.ts                       ← pricing config for all 32 products ✓
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── api-client/                              ← @boldmind/api-client
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   ├── client.ts                        ← base fetch client with JWT attach
│   │   │   ├── auth.api.ts                      ← /auth/* endpoints
│   │   │   ├── user.api.ts                      ← /users/* endpoints
│   │   │   ├── payment.api.ts                   ← /payment/* endpoints
│   │   │   ├── planai.api.ts                    ← /planai/* all 12 tools
│   │   │   ├── content.api.ts                   ← /content/* AmeboGist
│   │   │   ├── educenter.api.ts                 ← /educenter/* CBT questions
│   │   │   ├── media.api.ts                     ← /media/* R2 uploads
│   │   │   └── admin.api.ts                     ← /admin/* dashboard stats
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── pwa/                                     ← @boldmind/pwa
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   ├── sw-register.ts                   ← service worker registration
│   │   │   ├── offline-cache.ts                 ← cache strategy per app
│   │   │   └── twa-config.ts                    ← TWA_CONFIG re-export
│   │   ├── templates/
│   │   │   ├── manifest.template.json           ← base manifest template
│   │   │   └── assetlinks.template.json         ← base Digital Asset Links template
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── analytics/                               ← @boldmind/analytics
│       ├── src/
│       │   ├── index.ts
│       │   ├── meta-pixel.ts                    ← Meta Pixel + GTM events
│       │   ├── tiktok-pixel.ts                  ← TikTok Pixel events
│       │   ├── posthog.ts                       ← PostHog product analytics
│       │   └── paystack-events.ts               ← track payment conversions
│       ├── package.json
│       └── tsconfig.json
│
├── service/                                     ← NestJS Monolith (Railway Service #1)
│   ├── src/
│   │   ├── main.ts                              ← bootstrap, listen on PORT
│   │   ├── app.module.ts                        ← root module, imports all below
│   │   │
│   │   ├── modules/
│   │   │   │
│   │   │   ├── auth/                            ← AuthModule
│   │   │   │   ├── auth.module.ts
│   │   │   │   ├── auth.controller.ts           ← POST /auth/login, /register, /refresh, /me
│   │   │   │   ├── auth.service.ts              ← JWT sign/verify, bcrypt
│   │   │   │   ├── auth.guard.ts                ← JwtAuthGuard
│   │   │   │   ├── roles.guard.ts               ← RolesGuard
│   │   │   │   ├── sso.service.ts               ← cross-app SSO cookie
│   │   │   │   └── dto/
│   │   │   │       ├── login.dto.ts
│   │   │   │       └── register.dto.ts
│   │   │   │
│   │   │   ├── user/                            ← UserModule
│   │   │   │   ├── user.module.ts
│   │   │   │   ├── user.controller.ts           ← GET/PATCH /users/:id
│   │   │   │   ├── user.service.ts
│   │   │   │   ├── user.entity.ts               ← Prisma schema User model
│   │   │   │   └── dto/
│   │   │   │       └── update-user.dto.ts
│   │   │   │
│   │   │   ├── payment/                         ← PaymentModule
│   │   │   │   ├── payment.module.ts
│   │   │   │   ├── payment.controller.ts        ← POST /payment/initialize, /webhook
│   │   │   │   ├── payment.service.ts           ← Paystack SDK wrapper
│   │   │   │   ├── subscription.service.ts      ← manage user subscriptions
│   │   │   │   └── dto/
│   │   │   │       └── initialize-payment.dto.ts
│   │   │   │
│   │   │   ├── ai/                              ← AIModule
│   │   │   │   ├── ai.module.ts
│   │   │   │   ├── ai.controller.ts             ← POST /ai/chat, /ai/generate
│   │   │   │   ├── ai.service.ts                ← OpenAI + fal.ai + CF Workers AI
│   │   │   │   ├── ai-cache.service.ts          ← Redis cache for AI responses
│   │   │   │   └── ai-queue.service.ts          ← BullMQ async AI jobs
│   │   │   │
│   │   │   ├── notification/                    ← NotificationModule
│   │   │   │   ├── notification.module.ts
│   │   │   │   ├── notification.controller.ts
│   │   │   │   ├── email.service.ts             ← Resend email sender
│   │   │   │   ├── whatsapp.service.ts          ← WhatsApp Business API
│   │   │   │   └── push.service.ts              ← Web push notifications
│   │   │   │
│   │   │   ├── media/                           ← MediaModule
│   │   │   │   ├── media.module.ts
│   │   │   │   ├── media.controller.ts          ← POST /media/upload, DELETE /media/:key
│   │   │   │   ├── r2.service.ts                ← Cloudflare R2 S3-compatible upload
│   │   │   │   └── dto/
│   │   │   │       └── upload.dto.ts
│   │   │   │
│   │   │   ├── content/                         ← ContentModule (AmeboGist)
│   │   │   │   ├── content.module.ts
│   │   │   │   ├── content.controller.ts        ← CRUD /content/articles
│   │   │   │   ├── content.service.ts           ← Mongoose ArticleModel
│   │   │   │   ├── article.schema.ts            ← Mongoose schema
│   │   │   │   └── rss.service.ts               ← RSS feed generator
│   │   │   │
│   │   │   ├── planai/                          ← PlanAIModule (all 12 tools)
│   │   │   │   ├── planai.module.ts
│   │   │   │   ├── receptionist/
│   │   │   │   │   ├── receptionist.controller.ts   ← /planai/receptionist/*
│   │   │   │   │   ├── receptionist.service.ts      ← Meta Webhook + AI replies
│   │   │   │   │   └── meta-webhook.service.ts      ← Facebook Graph API
│   │   │   │   ├── business-planning/
│   │   │   │   │   ├── planning.controller.ts       ← /planai/planning/*
│   │   │   │   │   └── planning.service.ts          ← GPT-4o business plan gen
│   │   │   │   ├── financial/
│   │   │   │   │   ├── financial.controller.ts      ← /planai/finance/*
│   │   │   │   │   └── financial.service.ts         ← cashflow models
│   │   │   │   ├── branding/
│   │   │   │   │   ├── branding.controller.ts       ← /planai/branding/*
│   │   │   │   │   └── branding.service.ts          ← fal.ai + CF Workers AI images
│   │   │   │   ├── storefronts/
│   │   │   │   │   ├── storefronts.controller.ts    ← /planai/store/*
│   │   │   │   │   └── storefronts.service.ts
│   │   │   │   ├── marketing/
│   │   │   │   │   ├── marketing.controller.ts      ← /planai/marketing/*
│   │   │   │   │   └── marketing.service.ts
│   │   │   │   ├── analytics/
│   │   │   │   │   ├── analytics.controller.ts      ← /planai/analytics/*
│   │   │   │   │   └── analytics.service.ts
│   │   │   │   ├── credibility/
│   │   │   │   │   ├── credibility.controller.ts    ← /planai/credibility/*
│   │   │   │   │   └── credibility.service.ts
│   │   │   │   ├── investor/
│   │   │   │   │   ├── investor.controller.ts       ← /planai/investor/*
│   │   │   │   │   └── investor.service.ts
│   │   │   │   └── emailscraper/
│   │   │   │       ├── emailscraper.controller.ts   ← /planai/emailscraper/*
│   │   │   │       └── emailscraper.service.ts      ← Hunter.io + custom scraper
│   │   │   │
│   │   │   ├── educenter/                       ← EduCenterModule
│   │   │   │   ├── educenter.module.ts
│   │   │   │   ├── questions.controller.ts      ← GET /educenter/questions (JAMB/WAEC/NECO)
│   │   │   │   ├── questions.service.ts
│   │   │   │   ├── progress.controller.ts       ← POST /educenter/progress
│   │   │   │   ├── progress.service.ts
│   │   │   │   └── question.entity.ts           ← Prisma Question model
│   │   │   │
│   │   │   ├── automation/                      ← AutomationModule (n8n coordinator)
│   │   │   │   ├── automation.module.ts
│   │   │   │   ├── automation.controller.ts     ← POST /automation/trigger
│   │   │   │   ├── automation.service.ts        ← triggers n8n webhooks
│   │   │   │   ├── social-factory.service.ts    ← Social Content Factory logic
│   │   │   │   └── queue/
│   │   │   │       ├── email.queue.ts           ← BullMQ email queue
│   │   │   │       ├── ai-jobs.queue.ts         ← BullMQ async AI queue
│   │   │   │       └── social-post.queue.ts     ← BullMQ social scheduling
│   │   │   │
│   │   │   └── admin/                           ← AdminModule
│   │   │       ├── admin.module.ts
│   │   │       ├── admin.controller.ts          ← GET /admin/stats (feeds your admin page ✓)
│   │   │       ├── admin.service.ts             ← getDashboardStats() ✓
│   │   │       └── health.controller.ts         ← GET /health (Railway healthcheck)
│   │   │
│   │   ├── database/
│   │   │   ├── prisma.service.ts                ← PrismaClient singleton
│   │   │   ├── mongoose.service.ts              ← Mongoose connection
│   │   │   └── redis.service.ts                 ← Upstash Redis client
│   │   │
│   │   └── common/
│   │       ├── filters/
│   │       │   └── http-exception.filter.ts
│   │       ├── interceptors/
│   │       │   ├── response.interceptor.ts      ← wrap all responses in ApiResponse<T>
│   │       │   └── logging.interceptor.ts
│   │       └── decorators/
│   │           ├── user.decorator.ts            ← @CurrentUser()
│   │           └── roles.decorator.ts           ← @Roles('admin', 'super_admin')
│   │
│   ├── prisma/
│   │   ├── schema.prisma                        ← ALL postgres models in one schema
│   │   └── migrations/
│   │
│   ├── railway.toml                             ← Railway deploy config
│   ├── Dockerfile                               ← optional: for Railway docker deploy
│   ├── nest-cli.json
│   ├── tsconfig.json
│   └── package.json
│
├── n8n/                                         ← Railway Service #2 (sleep-on-idle)
│   ├── Dockerfile                               ← n8n:latest with custom entrypoint
│   ├── railway.toml
│   └── workflows/
│       ├── social-factory-post.json             ← auto social posting workflow
│       ├── ai-receptionist-webhook.json         ← Meta webhook handler
│       ├── amebogist-rss-ingest.json            ← RSS content ingestion
│       └── email-campaigns.json                 ← Resend email automation
│
├── infrastructure/
│   ├── cloudflare/
│   │   ├── dns-records.md                       ← all CF DNS records to add
│   │   ├── workers/
│   │   │   └── api-proxy.js                     ← CF Worker: boldmind.ng/api/* → api.boldmind.ng
│   │   └── cache-rules.md
│   └── scripts/
│       ├── twa-generate.sh                      ← run Bubblewrap for all 10 apps
│       ├── seed-db.ts                           ← seed 500 dummy users on launch
│       └── deploy-all.sh                        ← deploy all 10 apps to Vercel
│
└── tooling/
    ├── eslint-config/                           ← shared ESLint config
    │   ├── index.js
    │   └── package.json
    └── tailwind-config/                         ← shared Tailwind base config
        ├── index.ts                             ← boldmind Tailwind preset
        └── package.json
```

## Service railway.toml
```toml
[build]
  builder = "NIXPACKS"
  buildCommand = "pnpm install --frozen-lockfile && pnpm build"

[deploy]
  startCommand = "node dist/main"
  healthcheckPath = "/health"
  healthcheckTimeout = 30
  restartPolicyType = "ON_FAILURE"
  restartPolicyMaxRetries = 3

[[deploy.envs]]
  name = "NODE_ENV"
  value = "production"
```

## n8n railway.toml
```toml
[build]
  builder = "DOCKERFILE"
  dockerfilePath = "n8n/Dockerfile"

[deploy]
  startCommand = "n8n start"
  sleepApplication = true          # sleep when idle — saves cost
  restartPolicyType = "ON_FAILURE"
  healthcheckPath = "/healthz"
```

---

## Package Dependency Map
```
apps/boldmind-hub      → @boldmind/ui, @boldmind/auth, @boldmind/utils, @boldmind/config, @boldmind/api-client, @boldmind/analytics, @boldmind/pwa
apps/planai-suite      → @boldmind/ui, @boldmind/auth, @boldmind/utils, @boldmind/config, @boldmind/api-client, @boldmind/analytics, @boldmind/pwa
apps/boldmind-os       → @boldmind/ui, @boldmind/auth, @boldmind/utils, @boldmind/config, @boldmind/api-client, @boldmind/pwa
apps/boldmind-tools    → @boldmind/ui, @boldmind/auth, @boldmind/utils, @boldmind/config, @boldmind/api-client, @boldmind/pwa
apps/naija-fit         → @boldmind/ui, @boldmind/auth, @boldmind/utils, @boldmind/config, @boldmind/api-client, @boldmind/pwa
apps/boldmind-concepts → @boldmind/ui, @boldmind/auth, @boldmind/utils, @boldmind/config, @boldmind/pwa
apps/amebogist         → @boldmind/ui, @boldmind/utils, @boldmind/config, @boldmind/api-client, @boldmind/analytics, @boldmind/pwa
apps/amebo-studio      → @boldmind/ui, @boldmind/auth, @boldmind/utils, @boldmind/config, @boldmind/api-client, @boldmind/pwa
apps/educenter         → @boldmind/ui, @boldmind/auth, @boldmind/utils, @boldmind/config, @boldmind/api-client, @boldmind/analytics, @boldmind/pwa
apps/skillgig          → @boldmind/ui, @boldmind/auth, @boldmind/utils, @boldmind/config, @boldmind/api-client, @boldmind/pwa

packages/auth          → @boldmind/config, @boldmind/utils
packages/api-client    → @boldmind/config, @boldmind/utils
packages/analytics     → @boldmind/config
packages/pwa           → @boldmind/config
packages/ui            → @boldmind/utils (for theme/colors)
```
## clean up from cache
# 1. Clear Turbo cache
pnpm turbo run build --force
# or just delete it
rm -rf .turbo

# 2. Clear pnpm store cache
pnpm store prune

# 3. Nuke all node_modules
pnpm -r exec rm -rf node_modules
rm -rf node_modules

# 4. Reinstall everything clean
pnpm install

# 5. Regenerate Prisma client
pnpm prisma:generate
---
