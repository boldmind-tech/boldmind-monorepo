# Monorepo Structure

## Directory Organization

boldmind-monorepo/
├── APPS/ # All applications
│ ├── WEB_APPS/ # Next.js applications
│ │ ├── boldmind-hub/ # boldmind.ng
│ │ │ ├── app/ # App Router
│ │ │ ├── public/ # Static assets
│ │ │ ├── package.json # App dependencies
│ │ │ └── next.config.js # Next.js config
│ │ ├── amebogist/ # amebogist.ng
│ │ ├── educenter/ # educenter.com.ng
│ │ ├── boldmind-os/ # os.boldmind.ng
│ │ ├── naija-fither/ # fit.boldmind.ng
│ │ ├── emailscraper-pro/ # email.boldmind.ng
│ │ ├── safe-ai/ # safe.boldmind.ng
│ │ ├── social-factory/ # social.boldmind.ng
│ │ └── PLANAI_SUITE/ # planai.boldmind.ng/\*
│ │ ├── receptionist/ # AI Receptionist
│ │ ├── credibility-hubs/ # Professional portfolios
│ │ ├── business-planning/ # Business plan generator
│ │ ├── financial-forecasting/ # Cashflow modeling
│ │ ├── investor-readiness/ # Funding documentation
│ │ ├── branding-design/ # Logo & design tools
│ │ ├── digital-storefronts/ # E-commerce stores
│ │ ├── marketing-automation/ # Campaign automation
│ │ └── analytics-dashboard/ # Business intelligence
│ │
│ ├── MOBILE/ # Mobile applications
│ │ ├── native/ # React Native apps
│ │ │ └── safe-ai/ # Police app (needs native)
│ │ └── twa/ # Trusted Web Activities
│ │ ├── amebogist/ # AmeboGist mobile
│ │ ├── educenter/ # EduCenter mobile
│ │ ├── boldmind-os/ # BoldMind OS mobile
│ │ ├── naija-fither/ # Naija FitHer mobile
│ │ └── emailscraper-pro/ # EmailScraper mobile
│ │
│ └── CONCEPT_APPS/ # building the products aLONG SIDE
│ ├── afrohustle-os/ # hustle.boldmind.ng
│ ├── naijagig-matcher/ # gig.educenter.com.ng
│ ├── kolo-ai/ # kolo.boldmind.ng
│ ├── borderless-remit/ # border.boldmind.ng
│ ├── receipt-genius/ # receipt.boldmind.ng
│ ├── power-alert/ # power.boldmind.ng
│ ├── farmgate-direct/ # farm.boldmind.ng
│ ├── afrocopy-ai/ # copy.amebogist.ng
│ ├── skill2cash/ # skills.educenter.com.ng
│ └── anontruth-mic/ # anon.amebogist.ng
│
├── PACKAGES/ # Shared libraries
│ ├── ui/ # UI components & design system
│ │ ├── src/
│ │ │ ├── components/ # React components
│ │ │ ├── styles/ # Global styles & themes
│ │ │ └── index.ts # Public exports
│ │ └── package.json
│ ├── config/ # Shared configurations
│ │ ├── eslint/ # ESLint config
│ │ ├── typescript/ # TypeScript config
│ │ ├── tailwind/ # Tailwind config
│ │ └── next/ # Next.js config
│ ├── utils/ # Utility functions
│ │ ├── src/
│ │ │ ├── constants/ # Product catalog, routes
│ │ │ ├── helpers/ # Helper functions
│ │ │ ├── hooks/ # Custom React hooks
│ │ │ └── social/ # Social media integrations
│ │ └── package.json
│ ├── api-client/ # API client utilities
│ ├── auth/ # Authentication system
│ ├── payments/ # Payment integrations
│ ├── ai/ # AI utilities
│ ├── email/ # Email templates
│ ├── analytics/ # Analytics utilities
│ ├── seo/ # SEO utilities
│ └── database/ # Database clients
│
├── SERVICES/ # Backend services
│ ├── api-gateway/ # NestJS API gateway
│ ├── payment-service/ # Paystack & Flutterwave
│ ├── notification-service/ # Email, SMS, Push notifications
│ ├── media-service/ # Image & video processing
│ ├── analytics-service/ # Data aggregation
│ ├── ai-service/ # AI model serving
│ ├── user-service/ # Central user management
│ └── product-specific-services/
│ ├── educenter-service/ # EduCenter backend
│ └── naija-fither-service/ # Naija FitHer backend
│
├── INFRASTRUCTURE/ # DevOps configuration
│ ├── docker/ # Docker configurations
│ ├── kubernetes/ # K8s manifests
│ ├── nginx/ # Nginx configurations
│ └── scripts/ # Deployment scripts
│
├── TOOLS/ # Development tools
│ ├── scripts/ # Automation scripts
│ │ ├── generate-icons.sh # Icon generation
│ │ ├── migrate-db.ts # Database migrations
│ │ ├── seed-database.ts # Seed test data
│ │ └── deploy-all.sh # Deploy all apps
│ ├── generators/ # Code generators
│ │ ├── new-web-app/ # Web app scaffold
│ │ ├── new-concept-app/ # Concept app scaffold
│ │ └── new-service/ # Service scaffold
│ └── migrations/ # Database migrations
│
├── DOCS/ # Documentation
│ ├── architecture/ # System architecture
│ ├── guides/ # How-to guides
│ ├── api/ # API documentation
│ └── product-specs/ # Product specifications
│
├── CONFIGURATION/
| └── ports.md # port mapping
├── .github/ # GitHub workflows
│ ├── workflows/
│ │ ├── ci.yml # Continuous integration
│ │ ├── deploy-live.yml # Deploy live products
│ │ ├── deploy-planai.yml # Deploy PlanAI suite
│ │ └── security.yml # Security scans
├── turbo.json # Turborepo configuration
├── pnpm-workspace.yaml # PNPM workspace config
├── package.json # Root dependencies
├──tsconfig.json # Root TypeScript config
├── .eslintrc.js # ESLint configuration
├── .prettierrc # Prettier configuration
├── tailwind.config.js # Root Tailwind config
└── .env.example # Environment variables

## Workspace Management

- **Package Manager**: PNPM 8.15.0
- **Build System**: Turborepo
- **Workspace Configuration**: `pnpm-workspace.yaml`

## Dependency Management

- Shared dependencies in root `package.json`
- App-specific dependencies in each app's `package.json`
- Internal packages use `workspace:*`
- External packages use exact versions

## Development Workflow

1. Clone repository
2. `pnpm install` - Install dependencies
3. `pnpm dev:live` - Start live products
4. `pnpm build` - Build all applications
5. `pnpm test` - Run tests

## Deployment Strategy

- Each app deployed independently to Vercel
- Shared packages built and published internally
- CI/CD via GitHub Actions
- Canary deployments for major changes
