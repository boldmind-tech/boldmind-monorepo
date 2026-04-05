Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });
const require_database_config = require('./database-config.cjs');
const require_domains = require('./domains.cjs');

//#region src/constants/products.ts
const PRODUCT_CATEGORIES = [
	{
		id: "media",
		name: "Media & Content",
		count: 2
	},
	{
		id: "education",
		name: "Education",
		count: 3
	},
	{
		id: "ai",
		name: "AI Automation",
		count: 13
	},
	{
		id: "productivity",
		name: "Productivity",
		count: 5
	},
	{
		id: "lead-gen",
		name: "Lead Generation",
		count: 2
	},
	{
		id: "security",
		name: "Security",
		count: 2
	},
	{
		id: "health",
		name: "Health & Wellness",
		count: 2
	},
	{
		id: "marketplace",
		name: "Marketplaces",
		count: 6
	},
	{
		id: "fintech",
		name: "Fintech",
		count: 5
	},
	{
		id: "utilities",
		name: "Utilities",
		count: 2
	},
	{
		id: "marketing",
		name: "Marketing",
		count: 2
	},
	{
		id: "social",
		name: "Social",
		count: 2
	}
];
const BOLDMIND_PRODUCTS = [
	{
		id: "prod_000",
		name: "BoldMind Hub",
		description: "Central hub for the BoldMind ecosystem — unified auth, product directory, community, and founder dashboard for 32+ products empowering Nigerian entrepreneurs.",
		category: "ai",
		status: "LIVE",
		version: "1.0.0",
		slug: "boldmind-hub",
		domain: "boldmind.ng",
		app: "boldmind-hub",
		serviceModule: "AdminModule",
		icon: "🚀",
		revenueModel: "Ecosystem gateway — drives conversion to paid products",
		database: "postgres",
		monthlyRevenue: 0,
		users: "100+",
		techStack: [
			"Next.js 15",
			"TypeScript",
			"Tailwind CSS",
			"Framer Motion",
			"Prisma"
		],
		teamSize: 1,
		timeline: "Launched Q4 2025",
		priority: 0,
		tags: [
			"ecosystem",
			"hub",
			"portfolio",
			"sso",
			"admin"
		],
		links: { website: "https://boldmind.ng" },
		twa: {
			packageName: "ng.boldmind.hub",
			themeColor: "#00143C",
			backgroundColor: "#FAFAF9"
		},
		features: [
			"SSO — single login across all 10 apps",
			"Product ecosystem grid (32+ products)",
			"Personalized user dashboard",
			"Role-based access",
			"Cross-product subscription management",
			"Community feed for founders & entrepreneurs",
			"Verified business directory",
			"Founder circles & private groups",
			"Waitlist & early access management",
			"Business spotlight & featured listings",
			"Admin command center (stats, user mgmt, revenue)",
			"Real-time activity tracking"
		],
		suggestedFeatures: [
			"Referral program — earn % on products you refer",
			"BoldMind Points loyalty system (spend on any product)",
			"Founder leaderboard (revenue generated via ecosystem)",
			"API marketplace — sell BoldMind APIs to third parties",
			"Investor pitch deck auto-generator from your product stats",
			"BoldMind Wallet — unified balance across all 32 products (reduces Paystack fees via internal ledger)",
			"Cross-product AI assistant — \"Ask BoldMind\" chatbot that knows all your products, subscriptions, and data",
			"Affiliate hub — one dashboard to track referral revenue across every BoldMind product",
			"Open Graph preview cards per product — shareable social cards auto-generated per founder",
			"BoldMind Academy — free onboarding videos for each product, gated behind free signup"
		],
		challenges: ["Managing 32+ products", "SSO consistency across apps"],
		opportunities: ["Ecosystem network effects", "Investment showcase"],
		createdAt: "2025-01-01",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_001",
		name: "AmeboGist",
		description: "Nigeria's #1 Pidgin English platform — AI/Tech, Creator entrepreneurship, Sports, Politics, Entertainment, and Trending Gist. 12k+ users, AdSense monetized.",
		status: "LIVE",
		version: "1.0.0",
		slug: "amebogist",
		domain: "amebogist.ng",
		category: "media",
		app: "amebogist",
		serviceModule: "ContentModule",
		icon: "📰",
		database: "mongodb",
		revenueModel: "AdSense + Local Ads + Creator subscriptions (₦1k/month)",
		monthlyRevenue: 15e3,
		users: "12,000+",
		techStack: [
			"Next.js 15",
			"MongoDB",
			"Mongoose",
			"PWA",
			"Tailwind CSS"
		],
		teamSize: 2,
		timeline: "Launched Q2 2025",
		priority: 1,
		integrations: [
			"Google AdSense",
			"Meta API",
			"Paystack"
		],
		tags: [
			"news",
			"pidgin",
			"nigeria",
			"media",
			"content"
		],
		links: { website: "https://amebogist.ng" },
		twa: {
			packageName: "ng.amebogist.app",
			themeColor: "#065F46",
			backgroundColor: "#FFFBEB"
		},
		features: [
			"AI & Tech Amebo (Pidgin English)",
			"Creator Life guidance & entrepreneurship",
			"Sports coverage",
			"Politics analysis",
			"Entertainment & Celebrity gist",
			"Trending gists + viral content",
			"SEO-optimized Pidgin articles",
			"PWA (installable, offline reading)",
			"Creator dashboard & earnings",
			"RSS feed for content syndication"
		],
		suggestedFeatures: [
			"AmeboGist Premium — ad-free reading (₦500/month)",
			"Live Score widget for Nigerian football (embedded)",
			"Pidgin audio articles — text-to-speech in Pidgin accent",
			"Creator tipping — readers tip writers via Paystack",
			"AmeboGist TV — short video news clips (YouTube integration)",
			"Breaking news push notifications via Web Push API",
			"Local Ads — Nigerian SMEs advertise to specific states",
			"AI-generated Pidgin summaries — auto-summarize 3rd-party news into Pidgin (huge SEO traffic driver)",
			"AmeboGist Radio — livestream Pidgin commentary during big events (AFCON, elections)",
			"Gist Club membership — ₦200/month unlock exclusive investigative stories",
			"Pidgin SEO tool — suggests trending Pidgin keywords for creators to rank on Google",
			"Branded content studio — Nigerian brands pay ₦50k+ for native Pidgin advertorials"
		],
		challenges: ["Pidgin authenticity", "Monetization beyond AdSense"],
		opportunities: [
			"Video content",
			"Premium tier",
			"Local ad network"
		],
		createdAt: "2025-01-15",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_002",
		name: "EduCenter",
		description: "Nigerian ed-tech platform: JAMB/WAEC/NECO exam prep with 10k+ past questions, CBT simulator, AI tutoring, and business/digital skills courses.",
		category: "education",
		status: "LIVE",
		version: "1.0.0",
		slug: "educenter",
		domain: "educenter.com.ng",
		app: "educenter",
		serviceModule: "EduCenterModule",
		icon: "🎓",
		database: "postgres",
		revenueModel: "Subscription (₦3k/month) + Course packs (₦1k-₦5k)",
		monthlyRevenue: 6e4,
		users: "20",
		techStack: [
			"Next.js 15",
			"Prisma",
			"Neon",
			"Paystack",
			"PWA"
		],
		teamSize: 2,
		timeline: "Launched Q3 2025",
		priority: 2,
		integrations: [
			"Paystack",
			"WhatsApp API",
			"Google Analytics"
		],
		tags: [
			"education",
			"jamb",
			"waec",
			"neco",
			"nigeria",
			"exam-prep"
		],
		links: { website: "https://educenter.com.ng" },
		twa: {
			packageName: "ng.educenter.app",
			themeColor: "#1E40AF",
			backgroundColor: "#F8FAFC"
		},
		features: [
			"10,000+ JAMB/WAEC/NECO past questions ALOC API",
			"CBT simulation",
			"Performance analytics",
			"Study streaks",
			"Leaderboard",
			"Course library",
			"Marketing playbooks",
			"AI tools training"
		],
		suggestedFeatures: [
			"AI essay marking — WAEC essay practice with AI feedback",
			"Live group study sessions (video + whiteboard)",
			"School onboarding — license for 200+ students (B2B)",
			"Certificate courses (LinkedIn-shareable)",
			"Post-UTME practice for specific universities",
			"Teacher dashboard — set assignments, track class progress",
			"SMS result alerts to parents (₦50 per SMS)",
			"EduCenter Maths Clinic — AI step-by-step solver for WAEC maths (highest failure rate subject)",
			"Scholarship radar — auto-alert students about Nigerian/diaspora scholarships they qualify for",
			"Peer study rooms — 4-student virtual CBT rooms with live chat, massive retention driver",
			"School dashboard — subscribe schools per-student at ₦500/student/term (B2B goldmine)",
			"JAMB mock marathon — 24-hour live countdown mock exam, social sharing drives virality"
		],
		challenges: ["User acquisition", "Content freshness for new exam years"],
		opportunities: [
			"School B2B licensing",
			"Video tutorials",
			"Post-UTME niche"
		],
		createdAt: "2025-03-20",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_003",
		name: "AI Receptionist",
		description: "Multi-tenant AI that handles Instagram DMs and Comment, WhatsApp, and Facebook messages and Comment for Nigerian businesses — auto-qualifies leads, books appointments, answers FAQs 24/7.",
		category: "ai",
		status: "LIVE",
		version: "1.0.0",
		slug: "ai-receptionist",
		domain: "planai.boldmind.ng",
		subdomain: "/receptionist",
		app: "planai-suite",
		serviceModule: "PlanAIModule",
		icon: "🤖",
		database: "postgres",
		revenueModel: "Monthly retainer (₦20k-₦50k/client) + Setup fee (₦10k)",
		monthlyRevenue: 2e4,
		users: "1",
		techStack: [
			"Next.js 15",
			"NestJS",
			"Meta Graph API",
			"Webhooks",
			"OpenAI"
		],
		teamSize: 1,
		timeline: "Deployed Q4 2025",
		priority: 3,
		dependencies: ["planai-suite"],
		integrations: [
			"Meta API",
			"WhatsApp Business API",
			"Instagram Graph API",
			"Facebook Pages"
		],
		tags: [
			"ai",
			"automation",
			"customer-service",
			"whatsapp",
			"instagram"
		],
		links: { website: "https://planai.boldmind.ng/receptionist" },
		features: [
			"Auto-reply Instagram DMs & Comments",
			"WhatsApp Business 24/7 responses",
			"Facebook Page message handling and comment moderation",
			"WhatsApp Business API integration for Nigerian phone numbers",
			"Lead qualification & scoring",
			"Appointment booking (Google Calendar sync)",
			"FAQ knowledge base (per client)",
			"Multi-tenant (1 system, N clients)",
			"Client analytics dashboard",
			"Handoff to human (escalation triggers)",
			"Nigerian business context training"
		],
		suggestedFeatures: [
			"Voice note replies (AI generates WhatsApp voice notes)",
			"Payment collection via WhatsApp (Paystack link injection)",
			"Google My Business integration for restaurant bookings",
			"Multilingual: English + Pidgin + Yoruba + Igbo + Hausa",
			"CRM export (HubSpot, Google Sheets)",
			"AI sentiment analysis — alert owner when customer is angry",
			"Broadcast campaigns — send promotions to all past leads",
			"Abandoned cart recovery — AI follows up after 30 minutes if customer goes silent",
			"AI voice call answering — handles inbound phone calls via Twilio + Nigerian VoIP",
			"Product catalog bot — AI shows product photos + prices inline in WhatsApp chat",
			"Upsell engine — AI recommends add-ons based on customer inquiry context",
			"Competitor mention trigger — when a customer mentions a competitor, AI activates a counter-script"
		],
		challenges: ["Meta API policy changes", "Client onboarding complexity"],
		opportunities: [
			"Expand to 50+ clients",
			"Enterprise tier",
			"White-label reseller program"
		],
		createdAt: "2025-10-15",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_004",
		name: "Social Content Factory",
		description: "AI-powered content calendar, caption generator, and multi-platform scheduler. Automates posting to Instagram, TikTok, Facebook, Twitter/X, and LinkedIn.",
		category: "ai",
		status: "BUILDING",
		version: "0.5.0",
		slug: "social-factory",
		domain: "tools.boldmind.ng",
		subdomain: "/social",
		app: "boldmind-tools",
		serviceModule: "AutomationModule",
		icon: "🎬",
		database: "mongodb",
		revenueModel: "Subscription: ₦5k/month (Starter) | ₦10k (Pro) | ₦25k (Agency)",
		monthlyRevenue: 0,
		techStack: [
			"Next.js 15",
			"n8n",
			"OpenAI",
			"fal.ai",
			"Meta API",
			"BullMQ"
		],
		teamSize: 2,
		timeline: "Q2 2026 (12 weeks)",
		priority: 4,
		integrations: [
			"YouTube",
			"Instagram",
			"Facebook",
			"Twitter/X",
			"TikTok",
			"LinkedIn"
		],
		tags: [
			"content",
			"social-media",
			"automation",
			"scheduling",
			"ai"
		],
		links: { website: "https://tools.boldmind.ng/social" },
		features: [
			"AI Video generator",
			"AI caption generator (brand voice trained)",
			"Content calendar drag-and-drop",
			"Auto-schedule to 6 platforms",
			"AI image generation for posts (fal.ai)",
			"n8n workflow automation backend",
			"Best time to post (per platform)",
			"Hashtag research & optimization",
			"Analytics aggregation (all platforms in 1 dashboard)",
			"Bulk content creation (30 posts in one session)"
		],
		suggestedFeatures: [
			"Nigerian trending topics feed — auto-suggest content based on what's viral locally",
			"Pidgin caption mode — one-click convert English to Pidgin",
			"Reels/TikTok video script generator with on-screen text overlay",
			"Competitor analysis — track competitor posting patterns",
			"White-label — agencies resell under their own brand",
			"Content repurpose AI — turn one blog post into 10 social posts"
		],
		challenges: ["API rate limits per platform", "Quality control for AI output"],
		opportunities: [
			"Nigerian creator market (huge)",
			"Agency white-label",
			"BoldMind internal use"
		],
		createdAt: "2025-11-01",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_005",
		name: "BoldMind OS",
		description: "Personal operating system for neurodivergent Nigerian entrepreneurs — ADHD-friendly task management, Pomodoro, voice capture, knowledge graph, and Dyslexia Mode.",
		category: "productivity",
		status: "BUILDING",
		version: "0.1.0",
		slug: "boldmind-os",
		domain: "os.boldmind.ng",
		app: "boldmind-os",
		serviceModule: "UserModule",
		icon: "🧠",
		database: "postgres",
		revenueModel: "Freemium: Free | ₦5k/month (Pro) | ₦15k/month (Teams)",
		monthlyRevenue: 0,
		techStack: [
			"Next.js 15",
			"NestJS",
			"Prisma",
			"OpenAI Whisper",
			"Railway JWT"
		],
		teamSize: 3,
		timeline: "Q2 2026 MVP",
		priority: 5,
		integrations: [
			"n8n",
			"OpenAI Whisper",
			"Resend Email"
		],
		tags: [
			"productivity",
			"adhd",
			"dyslexia",
			"ai",
			"neurodivergent"
		],
		links: { website: "https://os.boldmind.ng" },
		twa: {
			packageName: "ng.boldmind.os",
			themeColor: "#9F1239",
			backgroundColor: "#FFF7ED"
		},
		features: [
			"ADHD-friendly Pomodoro timer (visual ring progress)",
			"One-task focus mode (hides everything else)",
			"Voice note capture → AI transcription (Whisper)",
			"Visual knowledge graph (mind map of all notes)",
			"Daily priority stack (max 3 tasks shown)",
			"Dopamine checkboxes (satisfying micro-animations)",
			"Dyslexia Mode (OpenDyslexic font, wider spacing)",
			"Content pipeline (capture → draft → publish)",
			"Weekly brain dump → AI organizes into tasks",
			"Offline-first PWA"
		],
		suggestedFeatures: [
			"Body doubling rooms — virtual co-working for ADHD users",
			"AI \"accountability partner\" — daily WhatsApp check-ins",
			"Time blindness alerts — vibrate/notify every 30 min during tasks",
			"Therapist dashboard — share progress with occupational therapist",
			"Impulse buy blocker — \"sleep on it\" reminder for spending decisions",
			"Energy tracker — log high/low energy times to schedule deep work",
			"Integration with NaijaFit — fitness affects cognitive performance"
		],
		challenges: ["Complex UI/UX (must be simple despite deep features)", "Nigerian ADHD awareness"],
		opportunities: ["Nigerian therapist partnerships", "Remote work productivity niche"],
		createdAt: "2025-12-01",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_006",
		name: "NaijaFit",
		description: "Nigerian fitness and wellness platform — workout plans (gym & outdoor), Nigerian meal tracking (jollof, egusi, suya calories), AI coach, and community challenges.",
		category: "health",
		status: "BUILDING",
		version: "0.1.0",
		slug: "naija-fit",
		domain: "fit.boldmind.ng",
		app: "naija-fit",
		serviceModule: "FitnessModule",
		icon: "💪",
		database: "postgres",
		revenueModel: "Freemium: Free | ₦3k/month (Pro) | ₦8k/month (Coaching)",
		monthlyRevenue: 0,
		techStack: [
			"Next.js 15",
			"NestJS",
			"Prisma",
			"OpenAI",
			"PWA"
		],
		teamSize: 4,
		timeline: "Q2 2026 MVP",
		priority: 6,
		integrations: ["WhatsApp Communities", "Paystack"],
		tags: [
			"health",
			"fitness",
			"nigeria",
			"wellness",
			"nutrition"
		],
		links: { website: "https://fit.boldmind.ng" },
		twa: {
			packageName: "ng.boldmind.fit",
			themeColor: "#065F46",
			backgroundColor: "#F0FFF4"
		},
		features: [
			"Nigerian meal database (500+ dishes with calories)",
			"Home & outdoor workout plans (no gym required)",
			"AI wellness coach (personalized daily plans)",
			"Body measurement tracker (waist, weight, BMI)",
			"Community challenges (30-day Naija fit challenge)",
			"Progress photos with side-by-side comparison",
			"Meal plan generator (budget-aware: ₦500-₦2k/day)",
			"Workout videos (Nigerian trainers)",
			"WhatsApp accountability group integration",
			"Leaderboard (challenge rankings)"
		],
		suggestedFeatures: [
			"Corporate wellness — sell to companies for employee fitness programs",
			"Suya & pepper soup macro calculator (very Nigerian, goes viral)",
			"AI personal trainer video analysis (form correction via phone camera)",
			"Trainer marketplace — certified Nigerian trainers offer 1:1 sessions",
			"Period tracking integration for female-specific workout adjustments",
			"Ramadan fitness mode — workout plans adapted for fasting schedule",
			"Connect with NaijaGig Matcher — hire local personal trainers"
		],
		challenges: ["Nigerian nutrition database accuracy", "User retention post-30-days"],
		opportunities: ["Corporate wellness B2B", "Instagram fitness creator partnerships"],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_007",
		name: "EmailScraper Pro",
		description: "Nigerian B2B email discovery — find verified contact emails from LinkedIn profiles, business directories, and company websites. Bulk export, API access.",
		category: "productivity",
		status: "BUILDING",
		version: "0.1.0",
		slug: "emailscraper-pro",
		domain: "tools.boldmind.ng",
		subdomain: "/emailscraper",
		app: "boldmind-tools",
		serviceModule: "PlanAIModule",
		icon: "🔍",
		database: "mongodb",
		revenueModel: "Tiered: Free (50 leads) | ₦5k (500/mo) | ₦15k (2000/mo) | ₦50k (API)",
		monthlyRevenue: 0,
		techStack: [
			"NestJS",
			"MongoDB",
			"Puppeteer",
			"Hunter.io",
			"BullMQ"
		],
		teamSize: 2,
		timeline: "Q2 2026",
		priority: 7,
		integrations: [
			"LinkedIn",
			"Hunter.io",
			"CRC Nigeria Business Registry"
		],
		tags: [
			"lead-gen",
			"sales",
			"email",
			"b2b",
			"nigeria"
		],
		links: { website: "https://tools.boldmind.ng/emailscraper" },
		features: [
			"Email discovery from LinkedIn profiles",
			"Nigerian business directory scraping (CAC, VConnect, ConnectNigeria)",
			"Real-time email verification (MX record + SMTP check)",
			"Lead enrichment (company, role, phone)",
			"Bulk CSV import & export",
			"Saved lead lists & folders",
			"API access (for developers)",
			"CRM-ready export (HubSpot, Google Sheets format)"
		],
		suggestedFeatures: [
			"Nigeria-specific verticals: lawyers, doctors, real estate agents",
			"WhatsApp number finder (complementary to email)",
			"Outreach sequence builder (send emails directly from tool)",
			"Duplicate detection across all your lists",
			"Intent signals — scrape companies that recently raised funding or posted job ads",
			"Chrome extension — one-click save while browsing LinkedIn"
		],
		challenges: ["Privacy regulation compliance", "LinkedIn rate limiting"],
		opportunities: [
			"Sales team subscriptions",
			"Recruitment agencies",
			"BoldMind internal use"
		],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_008",
		name: "Professional Credibility Hubs",
		description: "AI-assisted personal branding — instant portfolio site, LinkedIn profile optimizer, and resume generator designed for Nigerian professionals.",
		category: "ai",
		status: "BUILDING",
		version: "0.1.0",
		slug: "credibility-hubs",
		domain: "planai.boldmind.ng",
		subdomain: "/credibility",
		app: "planai-suite",
		serviceModule: "PlanAIModule",
		icon: "💼",
		database: "postgres",
		revenueModel: "One-time ₦5k (Starter) | ₦15k (Pro with custom domain)",
		monthlyRevenue: 0,
		techStack: [
			"Next.js 15",
			"OpenAI GPT-4o",
			"Tailwind CSS",
			"Cloudflare R2"
		],
		teamSize: 1,
		timeline: "Q2 2026",
		priority: 8,
		dependencies: ["planai-suite"],
		integrations: ["LinkedIn API", "Cloudflare R2"],
		tags: [
			"portfolio",
			"branding",
			"resume",
			"linkedin",
			"career"
		],
		links: { website: "https://planai.boldmind.ng/credibility" },
		features: [
			"Portfolio builder (drag & drop, 10+ templates)",
			"LinkedIn headline & summary optimizer (AI)",
			"Resume generator (ATS-friendly PDF)",
			"AI personal branding coach (feedback on your positioning)",
			"Custom domain support (e.g. name.ng)",
			"Social proof section (testimonials, metrics)"
		],
		suggestedFeatures: [
			"Nigerian recruiter database — share your profile directly",
			"Cold outreach email generator (personalized per company)",
			"Salary benchmarking tool (Nigerian market rates)",
			"Skills gap analyzer — \"to get this role, you need X\""
		],
		challenges: ["Nigerian market skepticism around personal branding", "Template diversity"],
		opportunities: ["University final-year students (huge TAM)", "Recruiter partnerships"],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_009",
		name: "AI Business Planning",
		description: "Generate bank-ready Nigerian business plans, pitch decks, and market analysis using AI — in under 10 minutes.",
		category: "ai",
		status: "PLANNED",
		version: "0.0.1",
		slug: "business-planning",
		domain: "planai.boldmind.ng",
		subdomain: "/planning",
		app: "planai-suite",
		serviceModule: "PlanAIModule",
		icon: "📊",
		database: "postgres",
		revenueModel: "Per plan: ₦10k | Bundle: ₦25k (plan + pitch + financial)",
		monthlyRevenue: 0,
		techStack: [
			"Next.js 15",
			"OpenAI GPT-4o",
			"Chart.js",
			"PDF generation"
		],
		teamSize: 2,
		timeline: "Q2 2026",
		priority: 9,
		dependencies: ["planai-suite"],
		integrations: ["CBN data APIs", "NBS (National Bureau of Statistics) data"],
		tags: [
			"business",
			"planning",
			"startups",
			"nigeria",
			"ai"
		],
		links: { website: "https://planai.boldmind.ng/planning" },
		features: [
			"AI business plan generator (Nigerian market context)",
			"Pitch deck creator (10-slide template)",
			"Nigerian market size & competitor analysis",
			"Financial projections (3-year model)",
			"SWOT analysis auto-generation",
			"Export to PDF & DOCX (bank/investor ready)"
		],
		suggestedFeatures: [
			"TON Bank-compatible format (meets Nigerian bank loan templates)",
			"SON/NAFDAC regulatory checklist per industry",
			"Investor match — connect plan to Nigerian VCs/angels",
			"Update-as-you-grow (re-generate plan with new data)"
		],
		challenges: ["Nigerian market data accuracy", "Keeping AI output legally compliant"],
		opportunities: ["Bank loan requirement pipeline", "Government grant applications"],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_010",
		name: "Financial Forecasting",
		description: "AI cashflow modeling and revenue forecasting for Nigerian SMEs — visualize your next 12 months, run scenarios, detect financial risks early.",
		category: "ai",
		status: "PLANNED",
		version: "0.0.1",
		slug: "financial-forecasting",
		domain: "planai.boldmind.ng",
		subdomain: "/finance",
		app: "planai-suite",
		serviceModule: "PlanAIModule",
		icon: "💰",
		database: "postgres",
		revenueModel: "Subscription: ₦8k/month | ₦20k/quarter",
		monthlyRevenue: 0,
		techStack: [
			"Next.js 15",
			"OpenAI",
			"Chart.js",
			"Recharts"
		],
		teamSize: 2,
		timeline: "Q3 2026",
		priority: 10,
		dependencies: ["planai-suite"],
		integrations: ["Paystack analytics", "CBN exchange rate API"],
		tags: [
			"finance",
			"forecasting",
			"cashflow",
			"sme",
			"nigeria"
		],
		links: { website: "https://planai.boldmind.ng/finance" },
		features: [
			"Cashflow projections (12-month visual)",
			"Revenue forecasting with AI",
			"Break-even analysis",
			"Scenario planning (best/worst/base case)",
			"Naira/Dollar FX impact modeling",
			"Burn rate calculator"
		],
		suggestedFeatures: [
			"Connect Paystack — auto-import real revenue data",
			"Expense categorization (AI classifies bank statement)",
			"Naira inflation adjustment mode",
			"WhatsApp alerts when cash is projected to run low"
		],
		challenges: ["FX volatility makes projections tricky", "Data import complexity"],
		opportunities: ["Accountant partnerships", "SME loan pre-qualification tool"],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_011",
		name: "Investor Readiness Suite",
		description: "Automated funding documentation for Nigerian startups — SAFE agreements, data room setup, cap table management, and due diligence checklists.",
		category: "ai",
		status: "PLANNED",
		version: "0.0.1",
		slug: "investor-readiness",
		domain: "planai.boldmind.ng",
		subdomain: "/investor",
		app: "planai-suite",
		serviceModule: "PlanAIModule",
		icon: "📈",
		database: "postgres",
		revenueModel: "Setup: ₦50k | Monthly: ₦10k",
		monthlyRevenue: 0,
		techStack: [
			"Next.js 15",
			"OpenAI",
			"DocuSign API",
			"Cloudflare R2"
		],
		teamSize: 3,
		timeline: "Q3 2026",
		priority: 11,
		dependencies: ["planai-suite"],
		integrations: ["DocuSign (e-signature)", "CAC online portal"],
		tags: [
			"investment",
			"funding",
			"legal",
			"startups",
			"venture"
		],
		links: { website: "https://planai.boldmind.ng/investor" },
		features: [
			"SAFE/Convertible note generator",
			"Data room setup & sharing",
			"Pitch deck templates (Nigerian startup context)",
			"Cap table management",
			"Due diligence checklist (SEC Nigeria compliant)",
			"Investor update email templates"
		],
		suggestedFeatures: [
			"Nigerian VC tracker — know which VCs are actively investing",
			"CAC incorporation wizard (built into the suite)",
			"SEC registration checklist for public offerings"
		],
		challenges: ["Legal compliance (SEC Nigeria)", "Lawyer partnership needed"],
		opportunities: ["VC partnerships", "Lagos tech ecosystem positioning"],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_012",
		name: "Branding & Design Tools",
		description: "AI logo generator, brand kit creator, and marketing visual maker — designed for Nigerian SMEs who need professional branding without a designer.",
		category: "ai",
		status: "BUILDING",
		version: "0.1.0",
		slug: "branding-design",
		domain: "planai.boldmind.ng",
		subdomain: "/design",
		app: "planai-suite",
		serviceModule: "PlanAIModule",
		icon: "🎨",
		database: "mongodb",
		revenueModel: "Per package: ₦3k (Logo) | ₦8k (Full Brand Kit)",
		monthlyRevenue: 0,
		techStack: [
			"Next.js 15",
			"fal.ai",
			"Cloudflare Workers AI",
			"Canvas API"
		],
		teamSize: 2,
		timeline: "Q2 2026",
		priority: 12,
		dependencies: ["planai-suite"],
		integrations: ["fal.ai (FLUX image generation)", "Cloudflare R2"],
		tags: [
			"design",
			"branding",
			"logo",
			"marketing",
			"nigerian-sme"
		],
		links: { website: "https://planai.boldmind.ng/design" },
		features: [
			"Logo generator (FLUX AI image model)",
			"Brand color palette generator",
			"Marketing flyer templates (WhatsApp-ready format)",
			"Brand guidelines PDF export",
			"Social media kit (profile pics, banners, post templates)",
			"Typography pairing suggestions"
		],
		suggestedFeatures: [
			"Nigerian cultural design motifs (Adire, Ankara patterns)",
			"Flyer maker — optimized for WhatsApp broadcast",
			"Business card designer (digital + printable PDF)",
			"Animation generator — looping logo for TikTok/Reels"
		],
		challenges: ["AI image quality consistency", "Nigerian market aesthetic preferences"],
		opportunities: ["Market stalls & informal businesses that can't afford designers"],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_013",
		name: "Digital Storefronts",
		description: "Launch an online store in 5 minutes — Paystack payments, inventory management, WhatsApp order notifications, and a shareable link for Nigerian SMEs.",
		category: "marketplace",
		status: "BUILDING",
		version: "0.1.0",
		slug: "digital-storefronts",
		domain: "planai.boldmind.ng",
		subdomain: "/store",
		app: "planai-suite",
		serviceModule: "PlanAIModule",
		icon: "🛍️",
		database: "postgres",
		revenueModel: "Setup: ₦5k | Monthly: ₦2k + 1% transaction fee",
		monthlyRevenue: 0,
		techStack: [
			"Next.js 15",
			"Paystack",
			"Prisma"
		],
		teamSize: 3,
		timeline: "Q3 2026",
		priority: 13,
		dependencies: ["planai-suite"],
		integrations: [
			"Paystack",
			"GIG Logistics API",
			"WhatsApp Business API"
		],
		tags: [
			"ecommerce",
			"store",
			"payments",
			"sme",
			"nigeria"
		],
		links: { website: "https://planai.boldmind.ng/store" },
		features: [
			"Store live in 5 minutes (no coding)",
			"Product catalog with photos (Cloudflare R2)",
			"Paystack payment collection",
			"Inventory management & low-stock alerts",
			"Order tracking & customer management",
			"WhatsApp order notification to seller",
			"Shareable store link (store.boldmind.ng/your-store)"
		],
		suggestedFeatures: [
			"Instagram Shop sync — products also appear on Instagram",
			"Bulk order management for wholesale",
			"Customer loyalty stamps (buy 5 get 1 free)",
			"Delivery cost calculator (GIG/DHL rates auto-fetched)",
			"Abandoned cart WhatsApp recovery message"
		],
		challenges: ["Delivery logistics complexity", "Payment disputes"],
		opportunities: ["Billions in informal Nigerian commerce moving online"],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_014",
		name: "Marketing Automation",
		description: "AI-driven email campaigns, WhatsApp broadcast sequences, and lead nurturing for Nigerian businesses — with local compliance built in.",
		category: "ai",
		status: "BUILDING",
		version: "0.1.0",
		slug: "marketing-automation",
		domain: "planai.boldmind.ng",
		subdomain: "/marketing",
		app: "planai-suite",
		serviceModule: "AutomationModule",
		icon: "📧",
		database: "postgres",
		revenueModel: "Subscription: ₦10k/month",
		monthlyRevenue: 0,
		techStack: [
			"Next.js 15",
			"Resend",
			"WhatsApp Business API",
			"BullMQ"
		],
		teamSize: 3,
		timeline: "Q3 2026",
		priority: 14,
		dependencies: ["planai-suite"],
		integrations: [
			"Resend (email)",
			"WhatsApp Business API",
			"Paystack"
		],
		tags: [
			"marketing",
			"automation",
			"email",
			"whatsapp",
			"crm"
		],
		links: { website: "https://planai.boldmind.ng/marketing" },
		features: [
			"Email automation sequences (drip campaigns)",
			"WhatsApp broadcast campaigns",
			"Customer segmentation by behavior",
			"Personalized campaigns (merge tags)",
			"Lead scoring",
			"A/B testing for subject lines"
		],
		suggestedFeatures: [
			"SMS campaigns via Nigerian SMS gateways (Termii)",
			"Campaign ROI tracker — see ₦ generated per campaign",
			"Pre-built Nigerian campaign templates (Ramadan, Christmas, back-to-school)"
		],
		challenges: ["Email deliverability", "WhatsApp Business API policy compliance"],
		opportunities: ["Nigerian SME market desperate for affordable CRM"],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_015",
		name: "Analytics Dashboard",
		description: "Cross-platform business intelligence — unify Instagram, TikTok, Paystack, and website analytics into one Nigerian entrepreneur-friendly dashboard.",
		category: "ai",
		status: "BUILDING",
		version: "0.1.0",
		slug: "analytics-dashboard",
		domain: "planai.boldmind.ng",
		subdomain: "/analytics",
		app: "planai-suite",
		serviceModule: "PlanAIModule",
		icon: "📊",
		database: "postgres",
		revenueModel: "Subscription: ₦8k/month",
		monthlyRevenue: 0,
		techStack: [
			"Next.js 15",
			"Recharts",
			"Neon",
			"PostHog"
		],
		teamSize: 3,
		timeline: "Q3 2026",
		priority: 15,
		dependencies: ["planai-suite"],
		integrations: [
			"Meta Insights API",
			"TikTok Analytics API",
			"Paystack",
			"Google Analytics 4"
		],
		tags: [
			"analytics",
			"bi",
			"dashboards",
			"instagram",
			"paystack"
		],
		links: { website: "https://planai.boldmind.ng/analytics" },
		features: [
			"Unified analytics across all channels",
			"Behavior insights & funnels",
			"Revenue tracking (Paystack integrated)",
			"Custom reports & exports",
			"Real-time monitoring",
			"AI-generated growth recommendations"
		],
		suggestedFeatures: [
			"Naira revenue dashboard (no dollar confusion)",
			"WhatsApp business metrics integration",
			"Competitor benchmarking for your industry in Nigeria"
		],
		challenges: ["API data freshness", "Multiple platform auth complexity"],
		opportunities: ["Nigerian agency market (they need this)"],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_016",
		name: "SAFE AI",
		description: "AI-powered security intelligence for Nigerian law enforcement — digital incident reporting, criminal pattern analysis, and officer communication platform.",
		category: "security",
		status: "CONCEPT",
		version: "0.0.1",
		slug: "safe-ai",
		domain: "concept.boldmind.ng",
		subdomain: "/safe",
		app: "boldmind-concepts",
		serviceModule: "ConceptModule",
		icon: "🛡️",
		database: "postgres",
		revenueModel: "Government contracts (₦5M+ deployment)",
		monthlyRevenue: 0,
		techStack: [
			"React Native",
			"NestJS",
			"PostgreSQL",
			"TensorFlow",
			"Offline-first"
		],
		teamSize: 5,
		timeline: "Q1 2027 (requires government partnership)",
		priority: 16,
		integrations: [
			"NIN database (NIMC)",
			"GIS/Mapping",
			"Body camera APIs"
		],
		tags: [
			"security",
			"law-enforcement",
			"ai",
			"government",
			"nigeria"
		],
		links: { website: "https://concept.boldmind.ng/safe" },
		features: [
			"Digital incident reporting (replaces paper)",
			"Criminal pattern analysis by AI",
			"Predictive crime hotspot mapping",
			"Officer communication & dispatch",
			"Evidence management (photos, GPS)",
			"Offline-first (works without internet)"
		],
		suggestedFeatures: [
			"Body camera footage tagging & storage",
			"Civilian tip line (anonymous reporting)",
			"Court case management integration",
			"Corruption alert system (anonymous officer reporting)"
		],
		challenges: [
			"Government bureaucracy",
			"Privacy & civil liberties concerns",
			"18-24 month sales cycle"
		],
		opportunities: ["₦100B+ Nigerian government tech spending", "Private security firms"],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_017",
		name: "AfroHustle OS",
		description: "Notion-style workspace with 100 proven side-hustle blueprints for Nigerian entrepreneurs — step-by-step guides to start, grow, and monetize.",
		category: "education",
		status: "CONCEPT",
		version: "0.0.1",
		slug: "afrohustle-os",
		domain: "concept.boldmind.ng",
		subdomain: "/afrohustle",
		app: "boldmind-concepts",
		serviceModule: "ConceptModule",
		icon: "💼",
		database: "mongodb",
		revenueModel: "One-time: ₦5k | Monthly: ₦2k",
		monthlyRevenue: 0,
		techStack: [
			"Next.js 15",
			"MongoDB",
			"Block editor (Tiptap)"
		],
		teamSize: 2,
		timeline: "Q3 2026",
		priority: 17,
		tags: [
			"side-hustle",
			"education",
			"templates",
			"entrepreneur",
			"nigeria"
		],
		links: { website: "https://concept.boldmind.ng/afrohustle" },
		features: [
			"100 Nigerian side-hustle blueprints",
			"Income tracker per hustle",
			"Community hustle circles",
			"Step-by-step launch guides",
			"Resource library (tools, vendors, platforms)"
		],
		suggestedFeatures: [
			"Hustle matchmaking — \"based on your skills, try these 5\"",
			"Revenue showcase — real users sharing actual income",
			"WhatsApp hustle mentor (AI-powered)",
			"Hustle bootcamp challenges (30 days to ₦100k)"
		],
		challenges: ["Content creation volume", "Keeping blueprints current"],
		opportunities: ["Nigeria has 40M+ informal entrepreneurs — massive TAM"],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_018",
		name: "NaijaGig Matcher",
		description: "Hyper-local gig marketplace for Nigerian artisans and service providers — plumbers, tailors, makeup artists, electricians — matched by location, same-day payout.",
		category: "marketplace",
		status: "CONCEPT",
		version: "0.0.1",
		slug: "naijagig-matcher",
		domain: "concept.boldmind.ng",
		subdomain: "/naijagig",
		app: "boldmind-concepts",
		serviceModule: "ConceptModule",
		icon: "🔧",
		database: "mongodb",
		revenueModel: "Commission: 10-15% per booking",
		monthlyRevenue: 0,
		techStack: [
			"Next.js 15",
			"Google Maps API",
			"Paystack",
			"BullMQ"
		],
		teamSize: 3,
		timeline: "Q3 2026",
		priority: 18,
		integrations: [
			"Google Maps",
			"Paystack",
			"WhatsApp notifications"
		],
		tags: [
			"marketplace",
			"gigs",
			"artisans",
			"local",
			"nigeria"
		],
		links: { website: "https://concept.boldmind.ng/naijagig" },
		features: [
			"Location-based gig worker matching",
			"Instant same-day wallet payout (Paystack)",
			"Worker profiles & portfolio photos",
			"Client reviews & ratings",
			"Job posting & bidding",
			"Dispute resolution system"
		],
		suggestedFeatures: [
			"Background verification (NIN check)",
			"Skills training integration (EduCenter courses → NaijaGig jobs)",
			"Corporate contracts — companies hire vetted artisan pools",
			"\"On my way\" real-time tracking"
		],
		challenges: ["Worker vetting & quality", "Payment disputes"],
		opportunities: ["Nigeria's informal sector is worth trillions"],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_019",
		name: "KoloAI",
		description: "Digital Ajo/Esusu thrift collector with AI default prediction — manage group savings, auto-pause risky members, send reminders, and track contributions.",
		category: "fintech",
		status: "CONCEPT",
		version: "0.0.1",
		slug: "kolo-ai",
		domain: "concept.boldmind.ng",
		subdomain: "/kolo",
		app: "boldmind-concepts",
		serviceModule: "ConceptModule",
		icon: "👥",
		database: "postgres",
		revenueModel: "Per group: ₦5k-₦10k/month",
		monthlyRevenue: 0,
		techStack: [
			"Next.js 15",
			"Prisma",
			"OpenAI",
			"Paystack"
		],
		teamSize: 3,
		timeline: "Q4 2026",
		priority: 19,
		integrations: [
			"Paystack",
			"WhatsApp notifications",
			"BVN verification"
		],
		tags: [
			"fintech",
			"thrift",
			"ajo",
			"esusu",
			"savings",
			"ai"
		],
		links: { website: "https://concept.boldmind.ng/kolo" },
		features: [
			"Digital Ajo/Esusu group management",
			"AI default risk prediction per member",
			"Auto-pause contributions for at-risk members",
			"Automated WhatsApp payment reminders",
			"Savings analytics per group",
			"Multiple payout rotation schedules"
		],
		suggestedFeatures: [
			"BVN-based member verification",
			"Interest generation on idle group funds (money market)",
			"Loan product — borrow against your Kolo contributions",
			"Family Kolo — savings goals for kids education, wedding, etc."
		],
		challenges: ["CBN regulation for fintech", "Trust & fraud prevention"],
		opportunities: ["₦500B+ informal thrift market in Nigeria", "Microfinance bank partnership"],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_020",
		name: "BorderlessRemit Tracker",
		description: "Real-time Nigerian remittance rate comparison — bank rates vs parallel market, receipt generator, affiliate links, and rate alerts for diaspora.",
		category: "fintech",
		status: "BUILDING",
		version: "0.1.0",
		slug: "borderless-remit",
		domain: "concept.boldmind.ng",
		subdomain: "/remit",
		app: "boldmind-concepts",
		serviceModule: "ConceptModule",
		icon: "💱",
		database: "mongodb",
		revenueModel: "Affiliate commissions (₦2k-₦10k per referred transfer)",
		monthlyRevenue: 0,
		techStack: [
			"Next.js 15",
			"Real-time rate APIs",
			"Resend (alerts)"
		],
		teamSize: 2,
		timeline: "Q4 2026",
		priority: 20,
		integrations: [
			"Remita",
			"Wise API",
			"WorldRemit affiliate"
		],
		tags: [
			"fintech",
			"remittance",
			"diaspora",
			"forex",
			"nigeria"
		],
		links: { website: "https://concept.boldmind.ng/remit" },
		features: [
			"Live rate comparison (bank vs parallel market vs remittance apps)",
			"Rate alert notifications (email + WhatsApp)",
			"Transfer receipt generator",
			"Affiliate links to transfer services",
			"Historical rate charts",
			"Estimated transfer time per service"
		],
		suggestedFeatures: [
			"Telegram bot for instant rate checks",
			"Chrome extension — auto-shows rate on remittance sites",
			"Collective group remittances (multiple senders, one receiver)"
		],
		challenges: ["Parallel market rate accuracy (changes hourly)", "CBN regulatory risk"],
		opportunities: ["$25B+ remittances to Nigeria annually — massive affiliate market"],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_021",
		name: "ReceiptGenius NG",
		description: "Instant VAT-compliant invoice and receipt generator for Nigerian SMEs — create, send via SMS/WhatsApp/email, and track all transactions in one place.",
		category: "fintech",
		status: "BUILDING",
		version: "0.1.0",
		slug: "receipt-genius",
		domain: "concept.boldmind.ng",
		subdomain: "/receipt",
		app: "boldmind-concepts",
		serviceModule: "ConceptModule",
		icon: "🧾",
		database: "postgres",
		revenueModel: "Subscription: ₦1k/month | ₦10k/year",
		monthlyRevenue: 0,
		techStack: [
			"Next.js 15",
			"Prisma",
			"Resend",
			"Termii SMS",
			"PDF generation"
		],
		teamSize: 2,
		timeline: "Q4 2026",
		priority: 21,
		integrations: [
			"Termii (SMS)",
			"Resend (email)",
			"FIRS TIN validation"
		],
		tags: [
			"fintech",
			"invoicing",
			"receipts",
			"vat",
			"nigeria",
			"sme"
		],
		links: { website: "https://concept.boldmind.ng/receipt" },
		features: [
			"VAT-compliant receipts (7.5% FIRS compliant)",
			"Professional invoice generation",
			"Customer database",
			"SMS + WhatsApp + email delivery",
			"Sales analytics & monthly reports",
			"Multi-currency (₦, $, £)"
		],
		suggestedFeatures: [
			"FIRS e-invoice integration (Nigeria moving to digital tax)",
			"POS agent receipt sync (₦50/receipt via API)",
			"Expense tracker (add bills, not just receipts you create)",
			"Accountant access (read-only sharing)"
		],
		challenges: ["FIRS e-invoicing regulation changes", "User adoption over WhatsApp screenshots"],
		opportunities: ["10M+ Nigerian SMEs that currently use hand-written receipts"],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_022",
		name: "PowerAlert NG",
		description: "Crowd-sourced NEPA/EKEDC light availability tracker by area + solar calculator — know when light is on near you before going home.",
		category: "utilities",
		status: "CONCEPT",
		version: "0.0.1",
		slug: "power-alert",
		domain: "concept.boldmind.ng",
		subdomain: "/power",
		app: "boldmind-concepts",
		serviceModule: "ConceptModule",
		icon: "⚡",
		database: "mongodb",
		revenueModel: "Lead gen to solar installers (₦2k-₦5k/lead)",
		monthlyRevenue: 0,
		techStack: [
			"Next.js 15",
			"Google Maps API",
			"MongoDB",
			"Push notifications"
		],
		teamSize: 2,
		timeline: "Q4 2026",
		priority: 22,
		integrations: [
			"Google Maps",
			"Solar installer directory",
			"Push notifications"
		],
		tags: [
			"utilities",
			"energy",
			"nepa",
			"solar",
			"nigeria",
			"crowdsource"
		],
		links: { website: "https://concept.boldmind.ng/power" },
		features: [
			"Real-time NEPA/EKEDC status by street/area",
			"Solar calculator (how much you need + cost)",
			"Installer directory (vetted solar companies)",
			"Energy cost tracker (generator vs solar comparison)",
			"Community outage reporting",
			"Push notifications when light returns to your area"
		],
		suggestedFeatures: [
			"Generator petrol cost tracker (how much you spend monthly)",
			"Predict outage duration by historical pattern per area",
			"Inverter & battery sizing calculator",
			"Group buy solar — neighborhoods pool to get bulk discount"
		],
		challenges: ["Crowdsourcing data accuracy at launch (cold start)", "Area granularity"],
		opportunities: ["Nigerian generator fuel cost ($10B+ market) → solar conversion"],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_023",
		name: "FarmGate Direct",
		description: "Direct farmer-to-buyer marketplace — cuts out middlemen, farmers post produce, buyers (hotels, restaurants, markets) buy directly with quality guarantee.",
		category: "marketplace",
		status: "CONCEPT",
		version: "0.0.1",
		slug: "farmgate-direct",
		domain: "concept.boldmind.ng",
		subdomain: "/farmgate",
		app: "boldmind-concepts",
		serviceModule: "ConceptModule",
		icon: "🌾",
		database: "mongodb",
		revenueModel: "Commission: 3-5% | Listing: ₦3k/season",
		monthlyRevenue: 0,
		techStack: [
			"Next.js 15",
			"MongoDB",
			"GIG Logistics API",
			"Paystack"
		],
		teamSize: 4,
		timeline: "Q4 2026",
		priority: 23,
		integrations: [
			"GIG Logistics",
			"Paystack",
			"WeatherAPI"
		],
		tags: [
			"agriculture",
			"marketplace",
			"farmers",
			"food-security",
			"nigeria"
		],
		links: { website: "https://concept.boldmind.ng/farmgate" },
		features: [
			"Farmers post produce listings with photos",
			"Direct buyer contact (restaurants, hotels, markets)",
			"Quality verification system",
			"Logistics coordination (GIG delivery)",
			"Market price tracking",
			"Seasonal crop calendar"
		],
		suggestedFeatures: [
			"AI crop disease detection via photo",
			"Farm input marketplace (seeds, fertilizer at wholesale prices)",
			"Export facilitation — connect to international buyers",
			"Farmer credit scoring based on sales history (KoloAI integration)"
		],
		challenges: ["Quality consistency", "Logistics last-mile in rural areas"],
		opportunities: ["$6B+ Nigerian agricultural trade, massive inefficiencies to fix"],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_024",
		name: "AfroCopy AI",
		description: "African-first AI copywriting tool — generates ads, captions, emails, and blog posts in Pidgin English, Yoruba, Igbo, Hausa, and local marketing voice.",
		category: "ai",
		status: "CONCEPT",
		version: "0.0.1",
		slug: "afrocopy-ai",
		domain: "concept.boldmind.ng",
		subdomain: "/afrocopy",
		app: "boldmind-concepts",
		serviceModule: "ConceptModule",
		icon: "✍️",
		database: "mongodb",
		revenueModel: "Subscription: ₦2k/month (Solo) | ₦5k (Agency)",
		monthlyRevenue: 0,
		techStack: [
			"Next.js 15",
			"OpenAI fine-tuned",
			"MongoDB"
		],
		teamSize: 3,
		timeline: "Q4 2026",
		priority: 24,
		tags: [
			"ai",
			"copywriting",
			"pidgin",
			"yoruba",
			"igbo",
			"african",
			"marketing"
		],
		links: { website: "https://concept.boldmind.ng/afrocopy" },
		features: [
			"Pidgin English copy generation",
			"Yoruba, Igbo, Hausa translations",
			"Social media captions (Instagram, TikTok, Twitter)",
			"WhatsApp broadcast messages",
			"Email marketing copy",
			"Nigerian cultural reference injection (\"Sapa,\" \"Japa\" etc)"
		],
		suggestedFeatures: [
			"AmeboGist article writer in Pidgin (internal use + sell)",
			"Nigerian proverb & idiom library for human-sounding copy",
			"Voice copy — script generator for TikTok voiceovers",
			"Agency mode — manage copy for multiple brand clients"
		],
		challenges: ["Training data quality for Nigerian languages", "Language accuracy validation"],
		opportunities: ["No good African-trained copywriting AI exists yet — first mover"],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_025",
		name: "Skill2Cash Board",
		description: "Anonymous skill marketplace for Gen-Z Nigerians — post a 30-second video of your skill (DJ, makeup, tailoring), get booked instantly, no CV required.",
		category: "marketplace",
		status: "CONCEPT",
		version: "0.0.1",
		slug: "skill2cash",
		domain: "concept.boldmind.ng",
		subdomain: "/skill2cash",
		app: "boldmind-concepts",
		serviceModule: "ConceptModule",
		icon: "🎭",
		database: "mongodb",
		revenueModel: "Listing: ₦500/month | Commission: 10% per booking",
		monthlyRevenue: 0,
		techStack: [
			"Next.js 15",
			"Cloudflare Stream (video)",
			"Paystack escrow",
			"MongoDB"
		],
		teamSize: 3,
		timeline: "Q4 2026",
		priority: 25,
		integrations: ["Cloudflare Stream", "Paystack (escrow)"],
		tags: [
			"marketplace",
			"gigs",
			"gen-z",
			"creative",
			"video",
			"nigeria"
		],
		links: { website: "https://concept.boldmind.ng/skill2cash" },
		features: [
			"30-second video skill showcase (no CV)",
			"Skills: DJ, makeup, tailoring, photography, catering",
			"Instant booking & scheduling",
			"Paystack escrow (safe payments)",
			"Optional anonymous profiles",
			"Skill categories & search"
		],
		suggestedFeatures: [
			"EduCenter integration — skill → course → job pipeline",
			"Skill verification challenges (prove you can do what you claim)",
			"Collab matching — DJ + photographer + makeup artist for an event",
			"Student income tracker for university financial aid proof"
		],
		challenges: ["Video hosting cost", "Safety/vetting of anonymous users"],
		opportunities: ["Nigeria's youth unemployment crisis — millions of skilled Gen-Z"],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_026",
		name: "AnonTruth Mic",
		description: "Temporary anonymous audio drops for whistleblowers — voice-distorted, auto-deleted, location-targeted truth drops that expire in 24-72 hours.",
		category: "social",
		status: "CONCEPT",
		version: "0.0.1",
		slug: "anontruth-mic",
		domain: "concept.boldmind.ng",
		subdomain: "/anon",
		app: "boldmind-concepts",
		serviceModule: "ConceptModule",
		icon: "🎤",
		database: "mongodb",
		revenueModel: "Boost feature (₦500-₦1k per boost)",
		monthlyRevenue: 0,
		techStack: [
			"Next.js 15",
			"Audio encryption",
			"Geolocation",
			"Auto-delete jobs (BullMQ)"
		],
		teamSize: 4,
		timeline: "Q4 2026 (HIGH RISK — requires legal review)",
		priority: 26,
		tags: [
			"social",
			"anonymous",
			"audio",
			"whistleblower",
			"journalism"
		],
		links: { website: "https://concept.boldmind.ng/anon" },
		features: [
			"Anonymous audio drop (no account required)",
			"Voice distortion (pitch shift + background noise removal)",
			"Auto-delete after 24-72 hours",
			"Location-targeted drops (by state/city)",
			"Boost feature to surface drops to top",
			"End-to-end encryption"
		],
		suggestedFeatures: [
			"AmeboGist integration — verified drops appear as news tips",
			"Journalist verification tier (access to raw drops)",
			"Text drops in addition to audio"
		],
		challenges: [
			"Nigerian cybercrime law (EFCC risk)",
			"Moderation of abuse",
			"Platform liability"
		],
		opportunities: ["Whistleblower journalism is underserved in Nigeria", "Partnership with investigative outlets"],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_027",
		name: "AmeboGist TWA",
		description: "Android app (Trusted Web Activity) — AmeboGist as a Play Store app with push notifications, offline reading, and mobile AdSense.",
		category: "media",
		status: "PLANNED",
		version: "0.1.0",
		slug: "amebogist-twa",
		domain: "amebogist.ng",
		app: "amebogist",
		serviceModule: "ContentModule",
		icon: "📱",
		database: "mongodb",
		revenueModel: "Mobile AdSense + in-app creator subscriptions",
		monthlyRevenue: 0,
		techStack: [
			"PWA",
			"Bubblewrap TWA",
			"Android"
		],
		teamSize: 1,
		timeline: "Q2 2026 — HIGH PRIORITY (12k users → app store)",
		priority: 27,
		dependencies: ["amebogist"],
		integrations: ["Google Play", "Mobile AdSense"],
		tags: [
			"mobile",
			"pwa",
			"android",
			"news",
			"twa"
		],
		features: [
			"Push notifications",
			"Offline reading cache",
			"Mobile-optimized UI",
			"App store listing"
		],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_028",
		name: "EduCenter TWA",
		description: "Android app for EduCenter — JAMB/WAEC practice on mobile with offline question packs, in-app subscriptions, and parent tracking.",
		category: "education",
		status: "BUILDING",
		version: "0.1.0",
		slug: "educenter-twa",
		domain: "educenter.com.ng",
		app: "educenter",
		serviceModule: "EduCenterModule",
		icon: "📚",
		database: "postgres",
		revenueModel: "In-app subscriptions (Google Play Billing)",
		monthlyRevenue: 0,
		techStack: [
			"PWA",
			"Bubblewrap TWA",
			"Android",
			"Google Play Billing"
		],
		teamSize: 1,
		timeline: "Q2 2026 — HIGH PRIORITY (students on mobile)",
		priority: 28,
		dependencies: ["educenter"],
		integrations: ["Google Play Billing", "Google Play Console"],
		tags: [
			"mobile",
			"education",
			"android",
			"jamb",
			"twa"
		],
		features: [
			"Offline question packs",
			"In-app subscriptions",
			"Push study reminders",
			"Progress sync"
		],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_029",
		name: "BoldMind OS TWA",
		description: "Android companion for BoldMind OS — mobile focus timer, voice capture, quick task add, and offline sync.",
		category: "productivity",
		status: "PLANNED",
		version: "0.1.0",
		slug: "boldmind-os-twa",
		domain: "os.boldmind.ng",
		app: "boldmind-os",
		serviceModule: "UserModule",
		icon: "🧠",
		database: "postgres",
		revenueModel: "Bundled with BoldMind OS Pro subscription",
		monthlyRevenue: 0,
		techStack: [
			"PWA",
			"Bubblewrap TWA",
			"Android"
		],
		teamSize: 2,
		timeline: "Q2 2026",
		priority: 29,
		dependencies: ["boldmind-os"],
		integrations: ["Mobile sensors", "Web Push API"],
		tags: [
			"mobile",
			"productivity",
			"adhd",
			"android",
			"twa"
		],
		features: [
			"Mobile Pomodoro",
			"Voice capture → sync to desktop",
			"Quick task add",
			"Offline mode"
		],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_030",
		name: "NaijaFit TWA",
		description: "Android app for NaijaFit — mobile workouts, Nigerian meal logging, progress photos, community challenges, and AI coach chat on mobile.",
		category: "health",
		status: "PLANNED",
		version: "0.1.0",
		slug: "naija-fit-twa",
		domain: "fit.boldmind.ng",
		app: "naija-fit",
		serviceModule: "FitnessModule",
		icon: "💪",
		database: "postgres",
		revenueModel: "Bundled with NaijaFit Pro subscription",
		monthlyRevenue: 0,
		techStack: [
			"PWA",
			"Bubblewrap TWA",
			"Android",
			"Camera API"
		],
		teamSize: 2,
		timeline: "Q3 2026",
		dependencies: ["naija-fit"],
		integrations: ["Mobile camera (progress photos)", "Health APIs"],
		tags: [
			"mobile",
			"health",
			"fitness",
			"android",
			"twa"
		],
		priority: 30,
		features: [
			"Mobile workouts",
			"Meal photo logging",
			"Progress photos",
			"Community challenges"
		],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_031",
		name: "EmailScraper TWA",
		description: "Android app for EmailScraper Pro — business card scanning, contact lookup, and lead list management on mobile.",
		category: "productivity",
		status: "PLANNED",
		version: "0.1.0",
		slug: "emailscraper-twa",
		domain: "tools.boldmind.ng",
		app: "boldmind-tools",
		serviceModule: "PlanAIModule",
		icon: "🔍",
		database: "mongodb",
		revenueModel: "Bundled with EmailScraper Pro subscription",
		monthlyRevenue: 0,
		techStack: [
			"PWA",
			"Bubblewrap TWA",
			"Android",
			"Camera/OCR API"
		],
		teamSize: 1,
		timeline: "Q3 2026",
		priority: 31,
		dependencies: ["emailscraper-pro"],
		integrations: ["Camera (business card scan)", "OCR"],
		tags: [
			"mobile",
			"sales",
			"lead-gen",
			"android",
			"twa"
		],
		features: [
			"Business card scanner (OCR)",
			"Lead list management",
			"Quick search"
		],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	},
	{
		id: "prod_032",
		name: "SAFE AI Native",
		description: "Full React Native app for police officers — offline-first incident reporting, GPS evidence tagging, voice-to-text (Pidgin + English), and photo evidence management.",
		category: "security",
		status: "PLANNED",
		version: "0.1.0",
		slug: "safe-ai-native",
		domain: "concept.boldmind.ng",
		app: "boldmind-concepts",
		serviceModule: "ConceptModule",
		icon: "📱",
		database: "postgres",
		revenueModel: "Government deployment contract",
		monthlyRevenue: 0,
		techStack: [
			"React Native",
			"iOS",
			"Android",
			"SQLite (offline)",
			"GPS"
		],
		teamSize: 4,
		timeline: "Q4 2026 (after government contract)",
		priority: 32,
		dependencies: ["safe-ai"],
		integrations: [
			"Mobile cameras",
			"GPS",
			"Offline SQLite",
			"Whisper (voice)"
		],
		tags: [
			"mobile",
			"security",
			"react-native",
			"ios",
			"android",
			"government"
		],
		features: [
			"Offline incident reporting (works without internet)",
			"Voice-to-text in Pidgin & English (Whisper)",
			"GPS-tagged evidence photos & videos",
			"Real-time officer dispatch",
			"Secure evidence chain of custody"
		],
		createdAt: "2025-12-26",
		updatedAt: "2026-02-27"
	}
];
/** O(1) lookup map built once at module load — never iterate the array for IDs */
const _byId = new Map(BOLDMIND_PRODUCTS.map((p) => [p.id, p]));
const _bySlug = new Map(BOLDMIND_PRODUCTS.map((p) => [p.slug, p]));
function getProductById(id) {
	return _byId.get(id);
}
function getProductBySlug(slug) {
	return _bySlug.get(slug);
}
function getProductByDomain(domain) {
	return BOLDMIND_PRODUCTS.find((p) => p.domain === domain);
}
function getProductByFullDomain(fullDomain) {
	return BOLDMIND_PRODUCTS.find((product) => {
		return (product.subdomain ? `${product.subdomain}.${product.domain}` : product.domain) === fullDomain;
	});
}
/** Returns the canonical URL for a product */
function getProductWebsiteUrl(product) {
	if (product.subdomain) return `https://${product.domain}${product.subdomain}`;
	return `https://${product.domain}`;
}
/** Lightweight card — safe for API responses and SSR props */
function toProductCard(p) {
	return {
		id: p.id,
		name: p.name,
		slug: p.slug,
		icon: p.icon,
		description: p.description,
		category: p.category,
		status: p.status,
		domain: p.domain,
		monthlyRevenue: p.monthlyRevenue ?? 0,
		priority: p.priority,
		tags: p.tags
	};
}
function toProductCards(products) {
	return products.map(toProductCard);
}
function getProductsByStatus(status) {
	return BOLDMIND_PRODUCTS.filter((p) => p.status === status);
}
const getLiveProducts = () => getProductsByStatus("LIVE");
const getBuildingProducts = () => getProductsByStatus("BUILDING");
const getPlannedProducts = () => getProductsByStatus("PLANNED");
const getConceptProducts = () => getProductsByStatus("CONCEPT");
/** Products that are actionable right now (LIVE or BUILDING) */
function getActiveProducts() {
	return BOLDMIND_PRODUCTS.filter((p) => p.status === "LIVE" || p.status === "BUILDING");
}
/** Products not yet in production (PLANNED or CONCEPT) */
function getInactiveProducts() {
	return BOLDMIND_PRODUCTS.filter((p) => p.status === "PLANNED" || p.status === "CONCEPT");
}
function getProductsByCategory(category) {
	return BOLDMIND_PRODUCTS.filter((p) => p.category === category);
}
/**
* Multi-category filter — returns products matching ANY of the supplied categories.
* @example getProductsByCategories(['ai', 'fintech'])
*/
function getProductsByCategories(categories) {
	const set = new Set(categories);
	return BOLDMIND_PRODUCTS.filter((p) => set.has(p.category));
}
/**
* Tag-based search — all supplied tags must be present (AND).
* @example getProductsByTags(['whatsapp', 'ai'])
*/
function getProductsByTags(tags) {
	const lower = tags.map((t) => t.toLowerCase());
	return BOLDMIND_PRODUCTS.filter((p) => lower.every((tag) => p.tags.some((t) => t.toLowerCase().includes(tag))));
}
/**
* Tag-based search — any supplied tag matches (OR).
*/
function getProductsByAnyTag(tags) {
	const lower = tags.map((t) => t.toLowerCase());
	return BOLDMIND_PRODUCTS.filter((p) => lower.some((tag) => p.tags.some((t) => t.toLowerCase().includes(tag))));
}
/** All unique tags across all products, sorted alphabetically */
function getAllTags() {
	const set = /* @__PURE__ */ new Set();
	BOLDMIND_PRODUCTS.forEach((p) => p.tags.forEach((t) => set.add(t)));
	return Array.from(set).sort();
}
/** Tag frequency map — tag → count of products using it */
function getTagFrequency() {
	const freq = {};
	BOLDMIND_PRODUCTS.forEach((p) => p.tags.forEach((t) => {
		freq[t] = (freq[t] ?? 0) + 1;
	}));
	return freq;
}
/** Top N most-used tags */
function getTopTags(n = 10) {
	return Object.entries(getTagFrequency()).map(([tag, count]) => ({
		tag,
		count
	})).sort((a, b) => b.count - a.count).slice(0, n);
}
function getProductsByPriority(minPriority, maxPriority) {
	return BOLDMIND_PRODUCTS.filter((p) => p.priority >= minPriority && (maxPriority === void 0 || p.priority <= maxPriority)).sort((a, b) => a.priority - b.priority);
}
function getHighPriorityProducts(threshold = 10) {
	return BOLDMIND_PRODUCTS.filter((p) => p.priority <= threshold).sort((a, b) => a.priority - b.priority);
}
function getLowPriorityProducts(threshold = 20) {
	return BOLDMIND_PRODUCTS.filter((p) => p.priority > threshold).sort((a, b) => a.priority - b.priority);
}
/**
* Sort any product array by an arbitrary key.
* @example sortProducts(getLiveProducts(), 'monthlyRevenue', 'desc')
*/
function sortProducts(products, key, direction = "asc") {
	return [...products].sort((a, b) => {
		const av = a[key] ?? 0;
		const bv = b[key] ?? 0;
		if (av < bv) return direction === "asc" ? -1 : 1;
		if (av > bv) return direction === "asc" ? 1 : -1;
		return 0;
	});
}
/**
* Full-text search across name, description, tags, category, and slug.
* Supports multi-word queries — all words must match (AND).
*/
function searchProducts(query) {
	const words = query.toLowerCase().split(/\s+/).filter(Boolean);
	if (!words.length) return [...BOLDMIND_PRODUCTS];
	return BOLDMIND_PRODUCTS.filter((p) => {
		const haystack = [
			p.name,
			p.description,
			p.category,
			p.slug,
			...p.tags,
			...p.techStack ?? []
		].join(" ").toLowerCase();
		return words.every((word) => haystack.includes(word));
	});
}
/**
* Fuzzy search — returns products with a relevance score.
* Score = number of matched fields (higher = more relevant).
*/
function fuzzySearchProducts(query) {
	const q = query.toLowerCase();
	return BOLDMIND_PRODUCTS.map((p) => {
		let score = 0;
		if (p.name.toLowerCase().includes(q)) score += 10;
		if (p.slug.toLowerCase().includes(q)) score += 8;
		if (p.description.toLowerCase().includes(q)) score += 5;
		if (p.category.toLowerCase().includes(q)) score += 4;
		p.tags.forEach((t) => {
			if (t.toLowerCase().includes(q)) score += 2;
		});
		p.techStack.forEach((t) => {
			if (t.toLowerCase().includes(q)) score += 1;
		});
		return {
			product: p,
			score
		};
	}).filter((s) => s.score > 0).sort((a, b) => b.score - a.score);
}
/**
* Paginated product list with optional pre-filter.
*/
function paginateProducts(products, page = 1, pageSize = 10) {
	const total = products.length;
	const totalPages = Math.ceil(total / pageSize);
	const start = (page - 1) * pageSize;
	return {
		data: products.slice(start, start + pageSize),
		total,
		page,
		pageSize,
		totalPages,
		hasNext: page < totalPages,
		hasPrev: page > 1
	};
}
function getProductsByTech(tech) {
	const q = tech.toLowerCase();
	return BOLDMIND_PRODUCTS.filter((p) => p.techStack.some((t) => t.toLowerCase().includes(q)));
}
function getProductsByDatabase(dbType) {
	return BOLDMIND_PRODUCTS.filter((p) => p.database === dbType);
}
/** All unique tech-stack entries across all products */
function getAllTechStack() {
	const set = /* @__PURE__ */ new Set();
	BOLDMIND_PRODUCTS.forEach((p) => p.techStack.forEach((t) => set.add(t)));
	return Array.from(set).sort();
}
/** Tech stack frequency map — technology → number of products using it */
function getTechStackFrequency() {
	const freq = {};
	BOLDMIND_PRODUCTS.forEach((p) => p.techStack.forEach((t) => {
		freq[t] = (freq[t] ?? 0) + 1;
	}));
	return freq;
}
/** Products that share at least one tech-stack item with the given product */
function getProductsBySimilarStack(slug) {
	const product = getProductBySlug(slug);
	if (!product) return [];
	const stackSet = new Set(product.techStack.map((t) => t.toLowerCase()));
	return BOLDMIND_PRODUCTS.filter((p) => p.slug !== slug && p.techStack.some((t) => stackSet.has(t.toLowerCase())));
}
function getAllDomains() {
	return Array.from(new Set(BOLDMIND_PRODUCTS.map((p) => p.domain)));
}
function getAllSubdomains() {
	return Array.from(new Set(BOLDMIND_PRODUCTS.filter((p) => p.subdomain).map((p) => p.subdomain)));
}
function getProductsByDomainName(domain) {
	return BOLDMIND_PRODUCTS.filter((p) => p.domain === domain);
}
function getProductsBySubdomain(subdomain) {
	return BOLDMIND_PRODUCTS.filter((p) => p.subdomain === subdomain);
}
function getProductsWithSubdomain() {
	return BOLDMIND_PRODUCTS.filter((p) => p.subdomain !== void 0);
}
function getProductsWithoutSubdomain() {
	return BOLDMIND_PRODUCTS.filter((p) => p.subdomain === void 0);
}
/** Detect which product a request belongs to from an incoming Host header */
function detectProductFromHost(host) {
	const clean = host.split(":")[0] ?? host;
	return getProductByDomain(clean) ?? BOLDMIND_PRODUCTS.find((p) => clean.endsWith(p.domain));
}
function getProductsWithIntegration(integration) {
	const q = integration.toLowerCase();
	return BOLDMIND_PRODUCTS.filter((p) => p.integrations?.some((i) => i.toLowerCase().includes(q)));
}
function getAllIntegrations() {
	const set = /* @__PURE__ */ new Set();
	BOLDMIND_PRODUCTS.forEach((p) => p.integrations?.forEach((i) => set.add(i)));
	return Array.from(set).sort();
}
/** Returns the direct dependency products for a given product slug */
function getProductDependencies(productSlug) {
	const product = getProductBySlug(productSlug);
	if (!product?.dependencies?.length) return [];
	return product.dependencies.map((dep) => getProductBySlug(dep)).filter((dep) => dep !== void 0);
}
/** Returns products that depend ON the given product slug (reverse deps) */
function getProductDependents(productSlug) {
	return BOLDMIND_PRODUCTS.filter((p) => p.dependencies?.includes(productSlug));
}
/**
* Full dependency tree for a product (recursive, cycle-safe).
* Returns a flat de-duplicated list of all transitive dependencies.
*/
function getTransitiveDependencies(productSlug, visited = /* @__PURE__ */ new Set()) {
	if (visited.has(productSlug)) return [];
	visited.add(productSlug);
	const directDeps = getProductDependencies(productSlug);
	const transitive = directDeps.flatMap((dep) => getTransitiveDependencies(dep.slug, visited));
	return [...directDeps, ...transitive].filter((p, i, arr) => arr.findIndex((x) => x.id === p.id) === i);
}
/**
* Products that live on the same app bundle (same `app` field).
*/
function getProductsByApp(app) {
	return BOLDMIND_PRODUCTS.filter((p) => p.app === app);
}
/**
* All unique app bundles across the ecosystem.
*/
function getAllApps() {
	return Array.from(new Set(BOLDMIND_PRODUCTS.map((p) => p.app))).sort();
}
function getPlanAISuiteProducts() {
	return getProductsByApp("planai-suite");
}
function calculateTotalMonthlyRevenue() {
	return BOLDMIND_PRODUCTS.reduce((sum, p) => sum + (p.monthlyRevenue ?? 0), 0);
}
function calculateAnnualRevenue() {
	return calculateTotalMonthlyRevenue() * 12;
}
function getRevenueGeneratingProducts() {
	return BOLDMIND_PRODUCTS.filter((p) => (p.monthlyRevenue ?? 0) > 0).sort((a, b) => (b.monthlyRevenue ?? 0) - (a.monthlyRevenue ?? 0));
}
function getTopRevenueProducts(limit = 5) {
	return getRevenueGeneratingProducts().slice(0, limit);
}
function getZeroRevenueProducts() {
	return BOLDMIND_PRODUCTS.filter((p) => (p.monthlyRevenue ?? 0) === 0);
}
/**
* Revenue by category — returns a sorted array.
*/
function getRevenueByCategory() {
	const map = /* @__PURE__ */ new Map();
	BOLDMIND_PRODUCTS.forEach((p) => {
		const existing = map.get(p.category) ?? {
			monthlyRevenue: 0,
			productCount: 0
		};
		map.set(p.category, {
			monthlyRevenue: existing.monthlyRevenue + (p.monthlyRevenue ?? 0),
			productCount: existing.productCount + 1
		});
	});
	return Array.from(map.entries()).map(([category, v]) => ({
		category,
		...v
	})).sort((a, b) => b.monthlyRevenue - a.monthlyRevenue);
}
/**
* Revenue CAGR estimate (compound annual growth rate) given a growth percentage.
* @param annualGrowthRate e.g. 0.5 = 50% YoY
*/
function projectRevenue(months, annualGrowthRate = .5) {
	const baseMonthly = calculateTotalMonthlyRevenue();
	const monthlyGrowthRate = Math.pow(1 + annualGrowthRate, 1 / 12) - 1;
	return baseMonthly * Math.pow(1 + monthlyGrowthRate, months);
}
/**
* Payback period (months) for a product — how long until revenue covers dev cost.
* Returns Infinity if the product has no revenue.
*/
function getPaybackPeriod(product) {
	const cost = estimateDevelopmentCost(product);
	const monthly = product.monthlyRevenue ?? 0;
	if (monthly === 0) return Infinity;
	return Math.ceil(cost / monthly);
}
/**
* Return on investment for a product as a percentage (annual revenue / dev cost).
*/
function calculateROI(product) {
	const cost = estimateDevelopmentCost(product);
	if (cost === 0) return 0;
	return (product.monthlyRevenue ?? 0) * 12 / cost * 100;
}
/**
* Average monthly revenue per live product.
*/
function getAverageRevenuePerLiveProduct() {
	const live = getLiveProducts();
	if (!live.length) return 0;
	return live.reduce((sum, p) => sum + (p.monthlyRevenue ?? 0), 0) / live.length;
}
function calculateTotalTeamSize() {
	const raw = BOLDMIND_PRODUCTS.reduce((sum, p) => sum + (p.teamSize ?? 0), 0);
	return Math.ceil(raw / 2);
}
function getProductsByTeamSize(minSize, maxSize) {
	return BOLDMIND_PRODUCTS.filter((p) => {
		const ts = p.teamSize ?? 0;
		return ts >= minSize && (maxSize === void 0 || ts <= maxSize);
	});
}
/**
* Solo-founder products (teamSize === 1).
*/
function getSoloProducts() {
	return BOLDMIND_PRODUCTS.filter((p) => p.teamSize === 1);
}
/** Monthly dev cost using configurable rate (default ₦500k/dev/month) */
function estimateDevelopmentCost(product, monthlyRatePerDev = 5e5) {
	return (product.teamSize ?? 1) * getTimelineMonths(product.timeline) * monthlyRatePerDev;
}
function calculateTotalDevelopmentCost(monthlyRatePerDev = 5e5) {
	return BOLDMIND_PRODUCTS.reduce((sum, p) => sum + estimateDevelopmentCost(p, monthlyRatePerDev), 0);
}
/** Parse a timeline string into a month count */
function getTimelineMonths(timeline) {
	if (!timeline) return 3;
	const weeks = timeline.match(/(\d+)\s*weeks?/);
	if (weeks) return parseInt(weeks[1]) / 4;
	const months = timeline.match(/(\d+)\s*months?/);
	if (months) return parseInt(months[1]);
	return 3;
}
function getUpcomingReleases(months = 6) {
	const now = /* @__PURE__ */ new Date();
	const cutoff = /* @__PURE__ */ new Date();
	cutoff.setMonth(cutoff.getMonth() + months);
	return BOLDMIND_PRODUCTS.filter((p) => {
		if (!p.timeline) return false;
		const m = p.timeline.match(/Q(\d)\s+(\d{4})/);
		if (!m) return false;
		const releaseDate = new Date(parseInt(m[2]), (parseInt(m[1]) - 1) * 3, 1);
		return releaseDate >= now && releaseDate <= cutoff;
	}).sort((a, b) => a.priority - b.priority);
}
function getProductsLaunchingThisYear(year = 2026) {
	return BOLDMIND_PRODUCTS.filter((p) => {
		if (!p.timeline) return false;
		const m = p.timeline.match(/Q\d\s+(\d{4})/);
		return m ? parseInt(m[1]) === year : false;
	});
}
/**
* Classify products by launch quarter.
* @returns Map of "Q1 2026" → Product[]
*/
function groupByQuarter() {
	const map = /* @__PURE__ */ new Map();
	BOLDMIND_PRODUCTS.forEach((p) => {
		if (!p.timeline) return;
		const m = p.timeline.match(/(Q\d\s+\d{4})/);
		const key = m ? m[1] : "Unknown";
		if (!map.has(key)) map.set(key, []);
		map.get(key).push(p);
	});
	return map;
}
function getProductStatusSummary() {
	return {
		total: BOLDMIND_PRODUCTS.length,
		live: getLiveProducts().length,
		building: getBuildingProducts().length,
		planned: getPlannedProducts().length,
		concept: getConceptProducts().length,
		revenue: calculateTotalMonthlyRevenue(),
		teamSize: calculateTotalTeamSize(),
		upcomingReleases: getUpcomingReleases(6).length
	};
}
function getCategorySummary() {
	const map = {};
	BOLDMIND_PRODUCTS.forEach((p) => {
		if (!map[p.category]) map[p.category] = {
			category: p.category,
			count: 0,
			live: 0,
			building: 0,
			planned: 0,
			concept: 0,
			revenue: 0
		};
		const s = map[p.category];
		s.count++;
		s[p.status.toLowerCase()]++;
		s.revenue += p.monthlyRevenue ?? 0;
	});
	return Object.values(map).sort((a, b) => b.count - a.count);
}
function getQuickStats() {
	const totalRevenue = calculateTotalMonthlyRevenue();
	const developmentCost = calculateTotalDevelopmentCost();
	return {
		totalProducts: BOLDMIND_PRODUCTS.length,
		totalRevenue: `₦${totalRevenue.toLocaleString()}/month`,
		annualRevenue: `₦${calculateAnnualRevenue().toLocaleString()}/year`,
		totalTeamSize: calculateTotalTeamSize(),
		upcomingReleases: getUpcomingReleases(6).length,
		developmentCost: `₦${developmentCost.toLocaleString()}`,
		averageROI: `${developmentCost > 0 ? (totalRevenue * 12 / developmentCost * 100).toFixed(1) : 0}%`,
		revenueGeneratingCount: getRevenueGeneratingProducts().length,
		zeroRevenueCount: getZeroRevenueProducts().length
	};
}
/**
* Calculates a 0-100 health score for each product based on:
* revenue, users, team size, tech stack diversity, and priority.
*/
function getProductHealthScore(product) {
	const maxRevenue = Math.max(...BOLDMIND_PRODUCTS.map((p) => p.monthlyRevenue ?? 0), 1);
	const revenueScore = Math.min(100, (product.monthlyRevenue ?? 0) / maxRevenue * 100);
	const rawUsers = typeof product.users === "string" ? parseInt(product.users.replace(/[^0-9]/g, ""), 10) || 0 : product.users ?? 0;
	const userScore = Math.min(100, rawUsers / 1e5 * 100);
	const teamScore = Math.min(100, (product.teamSize ?? 0) / 5 * 100);
	const techScore = Math.min(100, product.techStack.length / 8 * 100);
	const priorityScore = Math.max(0, 100 - product.priority * 3);
	const overall = Math.round(revenueScore * .35 + userScore * .25 + teamScore * .15 + techScore * .1 + priorityScore * .15);
	const rating = overall >= 75 ? "excellent" : overall >= 50 ? "good" : overall >= 25 ? "fair" : "needs-attention";
	const recommendations = [];
	if (revenueScore < 20) recommendations.push("Implement a paid tier or charge for setup");
	if (userScore < 10) recommendations.push("Run a WhatsApp/Instagram growth campaign");
	if (teamScore < 20) recommendations.push("Consider hiring a co-founder or contractor");
	if (product.status === "CONCEPT") recommendations.push("Validate with 5 paying customers before building");
	if (!product.integrations?.length) recommendations.push("Add at least one external integration");
	return {
		productId: product.id,
		productName: product.name,
		overall,
		breakdown: {
			revenueScore,
			userScore,
			teamScore,
			techScore,
			priorityScore
		},
		rating,
		recommendations
	};
}
/** Health scores for all products, sorted by overall score descending */
function getAllHealthScores() {
	return BOLDMIND_PRODUCTS.map(getProductHealthScore).sort((a, b) => b.overall - a.overall);
}
/** Products that need the most attention (health score below threshold) */
function getProductsNeedingAttention(threshold = 25) {
	return BOLDMIND_PRODUCTS.filter((p) => getProductHealthScore(p).overall < threshold);
}
/**
* Products related to a given product by category or shared tags.
* Sorted by relevance (shared tag count).
*/
function getRelatedProducts(slug, limit = 5) {
	const target = getProductBySlug(slug);
	if (!target) return [];
	const targetTags = new Set(target.tags);
	return BOLDMIND_PRODUCTS.filter((p) => p.slug !== slug).map((p) => ({
		product: p,
		score: (p.category === target.category ? 5 : 0) + p.tags.filter((t) => targetTags.has(t)).length
	})).filter((x) => x.score > 0).sort((a, b) => b.score - a.score).slice(0, limit).map((x) => x.product);
}
/**
* Recommended next product to build based on ecosystem gaps.
* Scores concepts by: market opportunity keywords, dependencies already live, and priority.
*/
function getRecommendedNextBuild() {
	const liveSlugs = new Set(getLiveProducts().map((p) => p.slug));
	return getConceptProducts().map((p) => {
		const depsReady = (p.dependencies ?? []).every((d) => liveSlugs.has(d));
		const opportunityScore = (p.opportunities?.join(" ").length ?? 0) / 100;
		return {
			product: p,
			score: (depsReady ? 30 : 0) + opportunityScore + (100 - p.priority)
		};
	}).sort((a, b) => b.score - a.score).map((x) => x.product);
}
/**
* Groups BUILDING + PLANNED products into sequential build waves.
* Wave 1 = products with no unresolved dependencies.
* Wave 2 = products whose dependencies are resolved by Wave 1.
* And so on.
*
* Returns an ordered array of BuildPlan objects.
*/
function generateBuildPlan() {
	const pending = [...getBuildingProducts(), ...getPlannedProducts()];
	const launched = new Set(getLiveProducts().map((p) => p.slug));
	const waves = [];
	let waveNumber = 1;
	while (pending.length > 0) {
		const readyThisWave = pending.filter((p) => (p.dependencies ?? []).every((d) => launched.has(d)));
		if (!readyThisWave.length) break;
		const sorted = readyThisWave.sort((a, b) => a.priority - b.priority);
		const estimatedCost = sorted.reduce((sum, p) => sum + estimateDevelopmentCost(p), 0);
		const estimatedRevenue = sorted.reduce((sum, p) => sum + (p.monthlyRevenue ?? 0), 0);
		const maxWeeks = Math.max(...sorted.map((p) => getTimelineMonths(p.timeline) * 4), 4);
		waves.push({
			wave: waveNumber++,
			products: sorted,
			estimatedCost,
			estimatedMonthlyRevenue: estimatedRevenue,
			durationWeeks: maxWeeks,
			dependencies: Array.from(new Set(sorted.flatMap((p) => p.dependencies ?? [])))
		});
		sorted.forEach((p) => {
			launched.add(p.slug);
			pending.splice(pending.indexOf(p), 1);
		});
	}
	return waves;
}
const CATEGORY_MARKET_SIZES = {
	ai: "₦500B+ (Nigerian AI services market)",
	fintech: "₦2T+ (Nigerian fintech market)",
	education: "₦300B+ (Nigerian EdTech market)",
	marketplace: "₦1T+ (Nigerian e-commerce)",
	health: "₦150B+ (Nigerian digital health)",
	media: "₦80B+ (Nigerian digital media)",
	productivity: "₦50B+ (Nigerian SaaS productivity)",
	security: "₦100B+ (Nigerian security tech)",
	utilities: "₦200B+ (Nigerian utilities disruption)",
	social: "₦30B+ (Nigerian creator economy)"
};
const CATEGORY_MISSING_FEATURES = {
	ai: [
		"AI voice agents in Pidgin/Yoruba",
		"Offline AI inference for low-data areas",
		"AI compliance checker for Nigerian regulations"
	],
	fintech: [
		"Crypto off-ramp to Naira",
		"BNPL (Buy Now Pay Later) for SMEs",
		"Group insurance pooling"
	],
	education: [
		"Tertiary institution CBT mock (OAU, UNILAG)",
		"Trade skills (plumbing, electrical) certification",
		"Scholarship tracker & application assistant"
	],
	marketplace: [
		"Logistics tracking API (GIG, DHL, Kwik)",
		"Escrow-first payments for high-value items",
		"Bulk wholesale ordering"
	],
	health: [
		"Mental health chatbot (Pidgin-aware)",
		"Telehealth appointments (NHIS-compatible)",
		"Malaria & typhoid symptom checker"
	],
	media: [
		"Nollywood streaming micro-payment layer",
		"Local language podcast hosting",
		"Creator NFT / digital collectibles for fans"
	],
	productivity: [
		"Offline-first document editor (no Google dependency)",
		"Multi-currency expense tracker",
		"Automated Nigerian tax filing"
	],
	security: [
		"Community safety reports (crowd-sourced)",
		"Digital identity vault (NIN + BVN secured)",
		"Fraud alert for Naira transactions"
	],
	utilities: [
		"Water availability tracker (similar to PowerAlert)",
		"Internet service comparison tool",
		"Fuel price aggregator near me"
	],
	social: [
		"Nigerian language keyboard + autocorrect",
		"Private family group photo/video sharing",
		"Local event discovery & ticketing"
	]
};
function getCompetitorGaps() {
	return Array.from(new Set(BOLDMIND_PRODUCTS.map((p) => p.category))).map((category) => {
		const products = getProductsByCategory(category);
		const liveCount = products.filter((p) => p.status === "LIVE").length;
		const opportunityScore = Math.min(100, 100 - liveCount * 15 + products.length * 5);
		return {
			category,
			boldmindCount: products.length,
			estimatedMarketSize: CATEGORY_MARKET_SIZES[category] ?? "Unknown",
			missingFeatureAreas: CATEGORY_MISSING_FEATURES[category] ?? [],
			opportunityScore
		};
	}).sort((a, b) => b.opportunityScore - a.opportunityScore);
}
/** Returns the single highest-opportunity category gap */
function getTopOpportunityGap() {
	return getCompetitorGaps()[0];
}
/**
* Products updated within the last N days.
*/
function getRecentlyUpdatedProducts(days = 30) {
	const cutoff = /* @__PURE__ */ new Date();
	cutoff.setDate(cutoff.getDate() - days);
	return BOLDMIND_PRODUCTS.filter((p) => new Date(p.updatedAt) >= cutoff).sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
}
/**
* Products created within the last N days.
*/
function getRecentlyCreatedProducts(days = 30) {
	const cutoff = /* @__PURE__ */ new Date();
	cutoff.setDate(cutoff.getDate() - days);
	return BOLDMIND_PRODUCTS.filter((p) => new Date(p.createdAt) >= cutoff).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}
/**
* Products that haven't been updated in more than N days — staleness alert.
*/
function getStaleProducts(days = 90) {
	const cutoff = /* @__PURE__ */ new Date();
	cutoff.setDate(cutoff.getDate() - days);
	return BOLDMIND_PRODUCTS.filter((p) => new Date(p.updatedAt) < cutoff);
}
function getProductsWithTWA() {
	return BOLDMIND_PRODUCTS.filter((p) => p.twa !== void 0);
}
function getTWAByPackageName(packageName) {
	return BOLDMIND_PRODUCTS.find((p) => p.twa?.packageName === packageName);
}
function getAllTWAPackageNames() {
	return BOLDMIND_PRODUCTS.filter((p) => p.twa).map((p) => p.twa.packageName);
}
function getProductsByServiceModule(module) {
	return BOLDMIND_PRODUCTS.filter((p) => p.serviceModule === module);
}
function getAllServiceModules() {
	return Array.from(new Set(BOLDMIND_PRODUCTS.map((p) => p.serviceModule))).sort();
}
/**
* Serializes the full product catalog to a JSON string.
* Use in getStaticProps or API routes.
*/
function serializeProducts(products) {
	return JSON.stringify(products);
}
/**
* Converts a product to a Next.js-safe static props shape
* (dates as ISO strings, no undefined values).
*/
function toStaticProps(product) {
	return JSON.parse(JSON.stringify(product));
}
/**
* Returns a map of slug → ProductCard for O(1) lookups in UI components.
*/
function buildProductCardMap() {
	return Object.fromEntries(BOLDMIND_PRODUCTS.map((p) => [p.slug, toProductCard(p)]));
}
/**
* Returns a sitemap-compatible array of all product URLs.
*/
function getAllProductUrls() {
	return BOLDMIND_PRODUCTS.map((p) => ({
		url: getProductWebsiteUrl(p),
		lastModified: p.updatedAt,
		changeFrequency: p.status === "LIVE" ? "daily" : "weekly",
		priority: p.status === "LIVE" ? 1 : .7
	}));
}
const BOLDMIND_FONT_CONFIG = {
	default: "OpenDyslexic, \"Comic Sans MS\", sans-serif",
	heading: "OpenDyslexic, \"Plus Jakarta Sans\", \"Inter\", sans-serif",
	mono: "\"JetBrains Mono\", \"Fira Code\", monospace",
	overrides: {
		"amebogist": "OpenDyslexic, \"Plus Jakarta Sans\", sans-serif",
		"educenter": "OpenDyslexic, \"Inter\", sans-serif",
		"boldmind-os": "OpenDyslexic, sans-serif",
		"naija-fit": "OpenDyslexic, \"Inter\", sans-serif",
		"boldmind-hub": "OpenDyslexic, \"Plus Jakarta Sans\", sans-serif"
	},
	cssVariable: "--font-body",
	dyslexiaSpacing: {
		letterSpacing: "0.12em",
		wordSpacing: "0.25em",
		lineHeight: "1.8"
	}
};
/**
* Returns the font family string for a given product slug.
* Falls back to the global OpenDyslexic default.
*/
function getProductFont(slug) {
	return BOLDMIND_FONT_CONFIG.overrides[slug] ?? BOLDMIND_FONT_CONFIG.default;
}
/**
* Generates a <style> tag string for injecting the product font into SSR.
* Use inside Next.js layout.tsx `<head>`.
*/
function generateFontCSS(slug) {
	const font = getProductFont(slug);
	return `
    :root { ${BOLDMIND_FONT_CONFIG.cssVariable}: ${font}; }
    body, * { font-family: var(${BOLDMIND_FONT_CONFIG.cssVariable}); }
  `.trim();
}
function calculateProjectedRevenue(months = 12) {
	const liveRevenue = getLiveProducts().reduce((sum, p) => sum + (p.monthlyRevenue ?? 0) * months, 0);
	const buildingRevenue = getBuildingProducts().length * 1e5 * months * .5;
	const plannedRevenue = getPlannedProducts().length * 5e4 * months * .3;
	const conceptRevenue = getConceptProducts().length * 25e3 * months * .1;
	return liveRevenue + buildingRevenue + plannedRevenue + conceptRevenue;
}

//#endregion
//#region src/constants/pricing.ts
const BOLDMIND_PRICING = [
	{
		productSlug: "amebogist",
		productName: "AmeboGist",
		tiers: [
			{
				name: "free",
				priceMonthly: 0,
				priceYearly: 0,
				currency: "NGN",
				features: [
					"Read unlimited articles",
					"Comment on posts",
					"Basic news alerts",
					"Ad-supported experience"
				]
			},
			{
				name: "basic",
				priceMonthly: 1e3,
				priceYearly: 1e4,
				currency: "NGN",
				features: [
					"All Free features",
					"Create and publish articles",
					"Priority trending alerts",
					"Reduced ads",
					"Creator analytics"
				],
				limits: { articlesPerMonth: 10 }
			},
			{
				name: "pro",
				priceMonthly: 3e3,
				priceYearly: 3e4,
				currency: "NGN",
				features: [
					"All Basic features",
					"Unlimited articles",
					"Ad-free experience",
					"Advanced analytics",
					"Revenue sharing (60%)",
					"Featured placement",
					"Custom author page"
				],
				limits: { articlesPerMonth: "unlimited" }
			}
		]
	},
	{
		productSlug: "educenter",
		productName: "EduCenter",
		tiers: [
			{
				name: "free",
				priceMonthly: 0,
				priceYearly: 0,
				currency: "NGN",
				features: [
					"50 practice questions/day",
					"Basic exam prep",
					"1 subject",
					"Weekly progress reports"
				],
				limits: {
					questionsPerDay: 50,
					subjects: 1
				}
			},
			{
				name: "basic",
				priceMonthly: 3e3,
				priceYearly: 3e4,
				currency: "NGN",
				features: [
					"Unlimited practice questions",
					"All subjects (JAMB/WAEC/NECO)",
					"CBT simulation",
					"Performance analytics",
					"Study streaks & leaderboard",
					"Downloadable notes"
				],
				limits: {
					questionsPerDay: "unlimited",
					subjects: "all"
				}
			},
			{
				name: "pro",
				priceMonthly: 5e3,
				priceYearly: 5e4,
				currency: "NGN",
				features: [
					"All Basic features",
					"Digital business courses",
					"AI tools training",
					"Marketing playbooks",
					"Live Q&A sessions",
					"Certificate of completion",
					"Priority support"
				]
			}
		]
	},
	{
		productSlug: "ai-receptionist",
		productName: "AI Receptionist",
		tiers: [
			{
				name: "basic",
				priceMonthly: 2e4,
				priceYearly: 2e5,
				currency: "NGN",
				features: [
					"Auto-reply on Instagram & Facebook",
					"500 leads/month",
					"Basic lead qualification",
					"Email notifications",
					"Monthly analytics"
				],
				limits: {
					leadsPerMonth: 500,
					platforms: 2
				}
			},
			{
				name: "pro",
				priceMonthly: 35e3,
				priceYearly: 35e4,
				currency: "NGN",
				features: [
					"All Basic features",
					"WhatsApp integration",
					"2,000 leads/month",
					"Advanced lead qualification",
					"Appointment booking",
					"CRM integration",
					"Real-time dashboard"
				],
				limits: {
					leadsPerMonth: 2e3,
					platforms: 3
				}
			},
			{
				name: "enterprise",
				priceMonthly: 5e4,
				priceYearly: 5e5,
				currency: "NGN",
				features: [
					"All Pro features",
					"Unlimited leads",
					"Multi-location support",
					"Custom AI training",
					"Priority support",
					"Dedicated account manager",
					"Custom integrations"
				],
				limits: {
					leadsPerMonth: "unlimited",
					platforms: "all"
				}
			}
		]
	},
	{
		productSlug: "social-factory",
		productName: "Social Media Content Factory",
		tiers: [
			{
				name: "free",
				priceMonthly: 0,
				priceYearly: 0,
				currency: "NGN",
				features: [
					"10 AI-generated videos/month",
					"2 social accounts",
					"Basic templates",
					"Manual publishing"
				],
				limits: {
					videosPerMonth: 10,
					accounts: 2
				}
			},
			{
				name: "basic",
				priceMonthly: 1e4,
				priceYearly: 1e5,
				currency: "NGN",
				features: [
					"50 AI-generated videos/month",
					"5 social accounts",
					"Premium templates",
					"Scheduled publishing",
					"Basic analytics"
				],
				limits: {
					videosPerMonth: 50,
					accounts: 5
				}
			},
			{
				name: "pro",
				priceMonthly: 25e3,
				priceYearly: 25e4,
				currency: "NGN",
				features: [
					"200 AI-generated videos/month",
					"Unlimited accounts",
					"Custom templates",
					"Advanced scheduling",
					"Detailed analytics",
					"Multi-platform publishing"
				],
				limits: {
					videosPerMonth: 200,
					accounts: "unlimited"
				}
			},
			{
				name: "enterprise",
				priceMonthly: 5e4,
				priceYearly: 5e5,
				currency: "NGN",
				features: [
					"Unlimited videos",
					"White-label option",
					"API access",
					"Custom AI training",
					"Priority support",
					"Team collaboration"
				]
			}
		]
	},
	{
		productSlug: "boldmind-os",
		productName: "BoldMind OS",
		tiers: [
			{
				name: "free",
				priceMonthly: 0,
				priceYearly: 0,
				currency: "NGN",
				features: [
					"Basic note capture",
					"Simple Pomodoro timer",
					"50 notes/month",
					"Basic knowledge graph"
				],
				limits: { notesPerMonth: 50 }
			},
			{
				name: "basic",
				priceMonthly: 5e3,
				priceYearly: 5e4,
				currency: "NGN",
				features: [
					"Multi-modal capture (text, voice, image)",
					"ADHD-friendly Pomodoro",
					"Unlimited notes",
					"Visual knowledge graph",
					"Basic analytics",
					"Dyslexia Mode"
				],
				limits: { notesPerMonth: "unlimited" }
			},
			{
				name: "pro",
				priceMonthly: 15e3,
				priceYearly: 15e4,
				currency: "NGN",
				features: [
					"All Basic features",
					"AI content pipeline",
					"Advanced analytics",
					"Team collaboration",
					"Custom workflows",
					"Priority support",
					"n8n integration"
				]
			}
		]
	},
	{
		productSlug: "naija-fit",
		productName: "Naija Fit",
		tiers: [
			{
				name: "free",
				priceMonthly: 0,
				priceYearly: 0,
				currency: "NGN",
				features: [
					"Basic workout plans",
					"Nigerian meal database",
					"Weight tracking",
					"Community access"
				]
			},
			{
				name: "basic",
				priceMonthly: 3e3,
				priceYearly: 3e4,
				currency: "NGN",
				features: [
					"All Free features",
					"Personalized meal plans",
					"Custom workout routines",
					"Progress tracking",
					"Weekly challenges"
				]
			},
			{
				name: "pro",
				priceMonthly: 8e3,
				priceYearly: 8e4,
				currency: "NGN",
				features: [
					"All Basic features",
					"AI wellness coach",
					"Video tutorials",
					"Live group sessions",
					"Nutritionist consultations",
					"Advanced analytics"
				]
			}
		]
	},
	{
		productSlug: "emailscraper-pro",
		productName: "EmailScraper Pro",
		tiers: [
			{
				name: "free",
				priceMonthly: 0,
				priceYearly: 0,
				currency: "NGN",
				features: [
					"100 email finds/month",
					"Basic verification",
					"Manual search"
				],
				limits: { emailFindsPerMonth: 100 }
			},
			{
				name: "basic",
				priceMonthly: 5e3,
				priceYearly: 5e4,
				currency: "NGN",
				features: [
					"1,000 email finds/month",
					"Real-time verification",
					"Bulk CSV operations",
					"Lead enrichment",
					"Export to CRM"
				],
				limits: { emailFindsPerMonth: 1e3 }
			},
			{
				name: "pro",
				priceMonthly: 15e3,
				priceYearly: 15e4,
				currency: "NGN",
				features: [
					"10,000 email finds/month",
					"Advanced verification",
					"API access",
					"Automated workflows",
					"LinkedIn scraping",
					"Priority support"
				],
				limits: { emailFindsPerMonth: 1e4 }
			},
			{
				name: "enterprise",
				priceMonthly: 5e4,
				priceYearly: 5e5,
				currency: "NGN",
				features: [
					"Unlimited email finds",
					"White-label option",
					"Custom integrations",
					"Dedicated support",
					"Team accounts"
				]
			}
		]
	},
	{
		productSlug: "credibility-hubs",
		productName: "Professional Credibility Hubs",
		oneTimePrices: [
			{
				name: "Basic Portfolio",
				price: 5e3,
				currency: "NGN",
				description: "Single-page portfolio with basic templates"
			},
			{
				name: "Pro Portfolio",
				price: 1e4,
				currency: "NGN",
				description: "Multi-page portfolio with custom design"
			},
			{
				name: "Premium Package",
				price: 15e3,
				currency: "NGN",
				description: "Portfolio + LinkedIn optimization + Resume"
			}
		],
		tiers: []
	},
	{
		productSlug: "business-planning",
		productName: "AI Business Planning",
		oneTimePrices: [
			{
				name: "Basic Plan",
				price: 1e4,
				currency: "NGN",
				description: "AI-generated business plan"
			},
			{
				name: "Pro Plan",
				price: 2e4,
				currency: "NGN",
				description: "Business plan + pitch deck + market analysis"
			},
			{
				name: "Complete Package",
				price: 35e3,
				currency: "NGN",
				description: "Everything + financial projections + consultation"
			}
		],
		tiers: []
	},
	{
		productSlug: "financial-forecasting",
		productName: "Financial Forecasting",
		tiers: [{
			name: "basic",
			priceMonthly: 8e3,
			priceYearly: 8e4,
			currency: "NGN",
			features: [
				"Cashflow projections",
				"Revenue forecasting",
				"Basic financial models",
				"3 scenarios"
			]
		}, {
			name: "pro",
			priceMonthly: 15e3,
			priceYearly: 15e4,
			currency: "NGN",
			features: [
				"All Basic features",
				"Break-even analysis",
				"Unlimited scenarios",
				"Bank integrations",
				"Monthly consultations"
			]
		}]
	},
	{
		productSlug: "branding-design",
		productName: "Branding & Design Tools",
		oneTimePrices: [
			{
				name: "Logo Package",
				price: 3e3,
				currency: "NGN",
				description: "3 logo concepts + color palette"
			},
			{
				name: "Branding Kit",
				price: 8e3,
				currency: "NGN",
				description: "Logo + brand guidelines + social templates"
			},
			{
				name: "Complete Package",
				price: 15e3,
				currency: "NGN",
				description: "Everything + marketing materials + stationery"
			}
		],
		tiers: []
	},
	{
		productSlug: "digital-storefronts",
		productName: "Digital Storefronts",
		tiers: [{
			name: "basic",
			priceMonthly: 2e3,
			priceYearly: 2e4,
			currency: "NGN",
			features: [
				"Instant store setup",
				"50 products",
				"Paystack integration",
				"Basic inventory",
				"Order management"
			],
			limits: { products: 50 }
		}, {
			name: "pro",
			priceMonthly: 5e3,
			priceYearly: 5e4,
			currency: "NGN",
			features: [
				"Unlimited products",
				"Advanced inventory",
				"WhatsApp commerce",
				"Customer CRM",
				"Analytics dashboard",
				"Custom domain"
			]
		}],
		oneTimePrices: [{
			name: "Setup Fee",
			price: 5e3,
			currency: "NGN",
			description: "One-time store setup and configuration"
		}]
	},
	{
		productSlug: "marketing-automation",
		productName: "Marketing Automation",
		tiers: [{
			name: "basic",
			priceMonthly: 1e4,
			priceYearly: 1e5,
			currency: "NGN",
			features: [
				"Email automation",
				"1,000 contacts",
				"Basic segmentation",
				"5 campaigns/month"
			],
			limits: {
				contacts: 1e3,
				campaignsPerMonth: 5
			}
		}, {
			name: "pro",
			priceMonthly: 2e4,
			priceYearly: 2e5,
			currency: "NGN",
			features: [
				"10,000 contacts",
				"Advanced segmentation",
				"Unlimited campaigns",
				"A/B testing",
				"CRM integration",
				"Lead scoring"
			],
			limits: {
				contacts: 1e4,
				campaignsPerMonth: "unlimited"
			}
		}]
	},
	{
		productSlug: "safe-ai",
		productName: "SAFE AI",
		tiers: [{
			name: "basic",
			priceMonthly: 1e5,
			priceYearly: 1e6,
			currency: "NGN",
			features: [
				"Basic incident reporting",
				"100 officers",
				"Criminal database access",
				"Monthly reports"
			],
			limits: { officers: 100 }
		}, {
			name: "enterprise",
			priceMonthly: 5e5,
			priceYearly: 5e6,
			currency: "NGN",
			features: [
				"Unlimited officers",
				"AI pattern recognition",
				"Predictive policing",
				"Real-time alerts",
				"Custom integrations",
				"Dedicated support"
			]
		}]
	},
	{
		productSlug: "kolo-ai",
		productName: "KoloAI",
		tiers: [{
			name: "basic",
			priceMonthly: 5e3,
			priceYearly: 5e4,
			currency: "NGN",
			features: [
				"Group thrift management",
				"Up to 20 members",
				"Basic AI predictions",
				"Payment reminders"
			],
			limits: { members: 20 }
		}, {
			name: "pro",
			priceMonthly: 1e4,
			priceYearly: 1e5,
			currency: "NGN",
			features: [
				"Up to 50 members",
				"Advanced AI predictions",
				"Auto-pause contributions",
				"Savings analytics",
				"Credit building"
			],
			limits: { members: 50 }
		}]
	}
];
function getProductPricing(productSlug) {
	return BOLDMIND_PRICING.find((p) => p.productSlug === productSlug);
}
function calculateYearlySavings(tier) {
	return tier.priceMonthly * 12 - tier.priceYearly;
}

//#endregion
//#region src/constants/auth.ts
const SYSTEM_ROLE_PERMISSIONS = {
	super_admin: ["*"],
	admin: [
		"users:read",
		"users:create",
		"users:update",
		"users:delete",
		"products:read",
		"products:create",
		"products:update",
		"products:publish",
		"analytics:read",
		"analytics:export",
		"billing:read",
		"billing:update",
		"content:read",
		"content:create",
		"content:update",
		"content:delete"
	],
	manager: [
		"users:read",
		"products:read",
		"products:update",
		"analytics:read",
		"content:read",
		"content:create",
		"content:update"
	],
	editor: [
		"content:read",
		"content:create",
		"content:update"
	],
	support: ["users:read", "billing:read"],
	analyst: ["analytics:read", "analytics:export"]
};
const ECOSYSTEM_ROLE_PERMISSIONS = {
	hustler: ["products:read", "analytics:read"],
	founder: [
		"products:read",
		"products:create",
		"products:update",
		"analytics:read",
		"billing:read"
	],
	creator: [
		"content:read",
		"content:create",
		"analytics:read"
	],
	student: ["content:read"],
	business_owner: [
		"products:read",
		"products:create",
		"products:update",
		"analytics:read",
		"billing:read"
	],
	operator: ["products:read", "products:update"],
	partner: ["analytics:read"]
};
function hasPermission(user, permission) {
	if (!user) return false;
	if (user.role === "super_admin") return true;
	if (user.permissions?.includes("*")) return true;
	if (user.permissions?.includes(permission)) return true;
	if (SYSTEM_ROLE_PERMISSIONS[user.role]) {
		const rolePerms = SYSTEM_ROLE_PERMISSIONS[user.role];
		if (rolePerms.includes("*") || rolePerms.includes(permission)) return true;
	}
	if (ECOSYSTEM_ROLE_PERMISSIONS[user.role]) {
		if (ECOSYSTEM_ROLE_PERMISSIONS[user.role].includes(permission)) return true;
	}
	return false;
}
function getRolePermissions(role) {
	if (SYSTEM_ROLE_PERMISSIONS[role]) return SYSTEM_ROLE_PERMISSIONS[role];
	if (ECOSYSTEM_ROLE_PERMISSIONS[role]) return ECOSYSTEM_ROLE_PERMISSIONS[role];
	return [];
}

//#endregion
//#region src/constants/colors.ts
function hexToRgba(hex, alpha) {
	return `rgba(${parseInt(hex.slice(1, 3), 16)}, ${parseInt(hex.slice(3, 5), 16)}, ${parseInt(hex.slice(5, 7), 16)}, ${alpha})`;
}
function buildShadows(primary) {
	return {
		sm: `0 2px 4px 0 ${hexToRgba(primary, .08)}`,
		md: `0 6px 12px -2px ${hexToRgba(primary, .12)}`,
		lg: `0 12px 24px -4px ${hexToRgba(primary, .15)}`,
		xl: `0 24px 48px -8px ${hexToRgba(primary, .18)}`
	};
}
function generateCSSVariables(scheme) {
	return `
    --product-primary: ${scheme.primary};
    --product-secondary: ${scheme.secondary};
    --product-accent: ${scheme.accent};
    --product-background: ${scheme.background};
    --product-foreground: ${scheme.foreground};
    --product-muted: ${scheme.muted};
    --product-highlight: ${hexToRgba(scheme.secondary, .12)};
    --product-glow: ${hexToRgba(scheme.secondary, .25)};
  `.trim();
}
function generateThemeClasses(scheme) {
	return {
		primary: `bg-[${scheme.primary}]`,
		secondary: `bg-[${scheme.secondary}]`,
		text: `text-[${scheme.foreground}]`,
		background: `bg-[${scheme.background}]`,
		border: `border-[${scheme.muted}]`
	};
}
const BOLDMIND_COLOR_SCHEMES = {
	"boldmind-hub": {
		name: "BoldMind Hub",
		slug: "boldmind-hub",
		category: "ecosystem",
		icon: "🚀",
		description: "Central ecosystem portal for all BoldMind products",
		primary: "#2B4D87",
		secondary: "#E9A825",
		accent: "#5B8ADE",
		background: "#FAFAF9",
		foreground: "#1A202C",
		muted: "#E7E5E4",
		success: "#38A169",
		warning: "#DD6B20",
		error: "#C53030",
		info: "#3182CE",
		gradients: {
			primary: ["#2B4D87", "#1E3A6E"],
			secondary: ["#E9A825", "#F5C242"],
			background: ["#FAFAF9", "#F5F5F4"]
		},
		shadows: buildShadows("#2B4D87")
	},
	"planai-suite": {
		name: "PlanAI Suite",
		slug: "planai-suite",
		category: "ai",
		icon: "🧠",
		description: "12 AI-powered business tools for Nigerian entrepreneurs",
		primary: "#6B21A8",
		secondary: "#059669",
		accent: "#BE185D",
		background: "#FAF5FF",
		foreground: "#1F2937",
		muted: "#F3E8FF",
		success: "#059669",
		warning: "#D97706",
		error: "#DC2626",
		info: "#0284C7",
		gradients: {
			primary: ["#6B21A8", "#7C3AED"],
			secondary: ["#059669", "#10B981"],
			background: ["#FAF5FF", "#F3E8FF"]
		},
		shadows: buildShadows("#6B21A8")
	},
	"ai-receptionist": {
		name: "AI Receptionist",
		slug: "ai-receptionist",
		category: "ai",
		icon: "🤖",
		description: "Multi-tenant AI for Instagram, WhatsApp, Facebook — auto-qualifies leads 24/7",
		primary: "#0C4A6E",
		secondary: "#7C2D12",
		accent: "#0891B2",
		background: "#F0F9FF",
		foreground: "#0F172A",
		muted: "#E0F2FE",
		success: "#059669",
		warning: "#D97706",
		error: "#DC2626",
		info: "#0284C7",
		gradients: {
			primary: ["#0C4A6E", "#0369A1"],
			secondary: ["#7C2D12", "#9A3412"],
			background: ["#F0F9FF", "#E0F2FE"]
		},
		shadows: buildShadows("#0C4A6E")
	},
	"credibility-hubs": {
		name: "Professional Credibility Hubs",
		slug: "credibility-hubs",
		category: "ai",
		icon: "💼",
		description: "AI-assisted personal branding — portfolio, LinkedIn optimizer, resume generator",
		primary: "#312E81",
		secondary: "#C2410C",
		accent: "#4F46E5",
		background: "#F5F3FF",
		foreground: "#1E1B4B",
		muted: "#EDE9FE",
		success: "#059669",
		warning: "#D97706",
		error: "#DC2626",
		info: "#6366F1",
		gradients: {
			primary: ["#312E81", "#4338CA"],
			secondary: ["#C2410C", "#EA580C"],
			background: ["#F5F3FF", "#EDE9FE"]
		},
		shadows: buildShadows("#312E81")
	},
	"business-planning": {
		name: "AI Business Planning",
		slug: "business-planning",
		category: "ai",
		icon: "📋",
		description: "Generate bank-ready Nigerian business plans in under 10 minutes",
		primary: "#1E3A5F",
		secondary: "#0D9488",
		accent: "#3B82F6",
		background: "#F0FDFA",
		foreground: "#134E4A",
		muted: "#CCFBF1",
		success: "#0D9488",
		warning: "#D97706",
		error: "#DC2626",
		info: "#3B82F6",
		gradients: {
			primary: ["#1E3A5F", "#2563EB"],
			secondary: ["#0D9488", "#14B8A6"],
			background: ["#F0FDFA", "#CCFBF1"]
		},
		shadows: buildShadows("#1E3A5F")
	},
	"financial-forecasting": {
		name: "Financial Forecasting",
		slug: "financial-forecasting",
		category: "ai",
		icon: "💰",
		description: "AI cashflow modeling and revenue forecasting for Nigerian SMEs",
		primary: "#064E3B",
		secondary: "#B45309",
		accent: "#10B981",
		background: "#ECFDF5",
		foreground: "#022C22",
		muted: "#D1FAE5",
		success: "#10B981",
		warning: "#B45309",
		error: "#DC2626",
		info: "#0284C7",
		gradients: {
			primary: ["#064E3B", "#047857"],
			secondary: ["#B45309", "#D97706"],
			background: ["#ECFDF5", "#D1FAE5"]
		},
		shadows: buildShadows("#064E3B")
	},
	"investor-readiness": {
		name: "Investor Readiness Suite",
		slug: "investor-readiness",
		category: "ai",
		icon: "📈",
		description: "Automated funding documentation — SAFE agreements, data room, cap table",
		primary: "#1E293B",
		secondary: "#CA8A04",
		accent: "#475569",
		background: "#F8FAFC",
		foreground: "#0F172A",
		muted: "#E2E8F0",
		success: "#059669",
		warning: "#CA8A04",
		error: "#DC2626",
		info: "#3B82F6",
		gradients: {
			primary: ["#1E293B", "#334155"],
			secondary: ["#CA8A04", "#EAB308"],
			background: ["#F8FAFC", "#F1F5F9"]
		},
		shadows: buildShadows("#1E293B")
	},
	"branding-design": {
		name: "Branding & Design Tools",
		slug: "branding-design",
		category: "ai",
		icon: "🎨",
		description: "AI logo generator, brand kit creator, marketing visual maker",
		primary: "#86198F",
		secondary: "#EA580C",
		accent: "#D946EF",
		background: "#FDF4FF",
		foreground: "#1F2937",
		muted: "#FAE8FF",
		success: "#059669",
		warning: "#D97706",
		error: "#DC2626",
		info: "#A855F7",
		gradients: {
			primary: ["#86198F", "#A21CAF"],
			secondary: ["#EA580C", "#F97316"],
			background: ["#FDF4FF", "#FAE8FF"]
		},
		shadows: buildShadows("#86198F")
	},
	"digital-storefronts": {
		name: "Digital Storefronts",
		slug: "digital-storefronts",
		category: "marketplace",
		icon: "🛍️",
		description: "Launch an online store in 5 minutes with Paystack payments",
		primary: "#7C2D12",
		secondary: "#059669",
		accent: "#F59E0B",
		background: "#FFFBEB",
		foreground: "#1C1917",
		muted: "#FEF3C7",
		success: "#059669",
		warning: "#D97706",
		error: "#DC2626",
		info: "#0284C7",
		gradients: {
			primary: ["#7C2D12", "#9A3412"],
			secondary: ["#059669", "#10B981"],
			background: ["#FFFBEB", "#FEF3C7"]
		},
		shadows: buildShadows("#7C2D12")
	},
	"marketing-automation": {
		name: "Marketing Automation",
		slug: "marketing-automation",
		category: "ai",
		icon: "📧",
		description: "AI-driven email campaigns, WhatsApp broadcast, lead nurturing",
		primary: "#7E22CE",
		secondary: "#E11D48",
		accent: "#A855F7",
		background: "#FAF5FF",
		foreground: "#1F2937",
		muted: "#F3E8FF",
		success: "#059669",
		warning: "#D97706",
		error: "#E11D48",
		info: "#8B5CF6",
		gradients: {
			primary: ["#7E22CE", "#9333EA"],
			secondary: ["#E11D48", "#F43F5E"],
			background: ["#FAF5FF", "#F3E8FF"]
		},
		shadows: buildShadows("#7E22CE")
	},
	"analytics-dashboard": {
		name: "Analytics Dashboard",
		slug: "analytics-dashboard",
		category: "ai",
		icon: "📊",
		description: "Cross-platform BI — unify Instagram, TikTok, Paystack analytics",
		primary: "#0F172A",
		secondary: "#2563EB",
		accent: "#06B6D4",
		background: "#F8FAFC",
		foreground: "#0F172A",
		muted: "#E2E8F0",
		success: "#10B981",
		warning: "#F59E0B",
		error: "#EF4444",
		info: "#2563EB",
		gradients: {
			primary: ["#0F172A", "#1E293B"],
			secondary: ["#2563EB", "#3B82F6"],
			background: ["#F8FAFC", "#F1F5F9"]
		},
		shadows: buildShadows("#0F172A")
	},
	"boldmind-os": {
		name: "BoldMind OS",
		slug: "boldmind-os",
		category: "productivity",
		icon: "🧠",
		description: "ADHD-friendly focus mode, pomodoro & knowledge graph",
		primary: "#9F1239",
		secondary: "#EA580C",
		accent: "#7C3AED",
		background: "#FFF7ED",
		foreground: "#1C1917",
		muted: "#FFEDD5",
		success: "#059669",
		warning: "#D97706",
		error: "#DC2626",
		info: "#0284C7",
		gradients: {
			primary: ["#9F1239", "#BE123C"],
			secondary: ["#EA580C", "#F97316"],
			background: ["#FFF7ED", "#FFEDD5"]
		},
		shadows: buildShadows("#9F1239")
	},
	"social-factory": {
		name: "Social Content Factory",
		slug: "social-factory",
		category: "ai",
		icon: "🎬",
		description: "AI social media content calendar, caption gen & auto-posting",
		primary: "#831843",
		secondary: "#EA580C",
		accent: "#DB2777",
		background: "#FFF1F2",
		foreground: "#1F2937",
		muted: "#FCE7F3",
		success: "#059669",
		warning: "#D97706",
		error: "#DC2626",
		info: "#EC4899",
		gradients: {
			primary: ["#831843", "#BE185D"],
			secondary: ["#EA580C", "#F97316"],
			background: ["#FFF1F2", "#FCE7F3"]
		},
		shadows: buildShadows("#831843")
	},
	"emailscraper-pro": {
		name: "EmailScraper Pro",
		slug: "emailscraper-pro",
		category: "productivity",
		icon: "🔍",
		description: "B2B email discovery and lead generation tool for Nigeria",
		primary: "#075985",
		secondary: "#B45309",
		accent: "#0891B2",
		background: "#FAFAFA",
		foreground: "#18181B",
		muted: "#E4E4E7",
		success: "#059669",
		warning: "#D97706",
		error: "#DC2626",
		info: "#0284C7",
		gradients: {
			primary: ["#075985", "#0369A1"],
			secondary: ["#B45309", "#D97706"],
			background: ["#FAFAFA", "#F4F4F5"]
		},
		shadows: buildShadows("#075985")
	},
	"naija-fit": {
		name: "NaijaFit",
		slug: "naija-fit",
		category: "health",
		icon: "💪",
		description: "Nigerian fitness — workout plans, meal tracking, AI coach, community challenges",
		primary: "#065F46",
		secondary: "#0891B2",
		accent: "#10B981",
		background: "#F0FFF4",
		foreground: "#1C1917",
		muted: "#D1FAE5",
		success: "#10B981",
		warning: "#D97706",
		error: "#DC2626",
		info: "#0891B2",
		gradients: {
			primary: ["#065F46", "#047857"],
			secondary: ["#0891B2", "#06B6D4"],
			background: ["#F0FFF4", "#D1FAE5"]
		},
		shadows: buildShadows("#065F46")
	},
	"amebogist": {
		name: "AmeboGist",
		slug: "amebogist",
		category: "media",
		icon: "📰",
		description: "Nigeria's #1 Pidgin English news & gist platform — 12k+ users",
		primary: "#065F46",
		secondary: "#DC2626",
		accent: "#0891B2",
		background: "#FFFBEB",
		foreground: "#1C1917",
		muted: "#FEF3C7",
		success: "#059669",
		warning: "#D97706",
		error: "#DC2626",
		info: "#0284C7",
		gradients: {
			primary: ["#065F46", "#047857"],
			secondary: ["#DC2626", "#EF4444"],
			background: ["#FFFBEB", "#FEF3C7"]
		},
		shadows: buildShadows("#065F46")
	},
	"educenter": {
		name: "EduCenter",
		slug: "educenter",
		category: "education",
		icon: "🎓",
		description: "JAMB, WAEC & NECO CBT simulator with AI tutoring",
		primary: "#1E40AF",
		secondary: "#F59E0B",
		accent: "#7C3AED",
		background: "#F8FAFC",
		foreground: "#0F172A",
		muted: "#E2E8F0",
		success: "#10B981",
		warning: "#F59E0B",
		error: "#EF4444",
		info: "#3B82F6",
		gradients: {
			primary: ["#1E40AF", "#3B82F6"],
			secondary: ["#F59E0B", "#FBBF24"],
			background: ["#F8FAFC", "#F1F5F9"]
		},
		shadows: buildShadows("#1E40AF")
	},
	"safe-ai": {
		name: "SAFE AI",
		slug: "safe-ai",
		category: "security",
		icon: "🛡️",
		description: "AI security intelligence for Nigerian law enforcement",
		primary: "#1E293B",
		secondary: "#DC2626",
		accent: "#475569",
		background: "#F1F5F9",
		foreground: "#0F172A",
		muted: "#E2E8F0",
		success: "#059669",
		warning: "#D97706",
		error: "#DC2626",
		info: "#3B82F6",
		gradients: {
			primary: ["#1E293B", "#334155"],
			secondary: ["#DC2626", "#EF4444"],
			background: ["#F1F5F9", "#E2E8F0"]
		},
		shadows: buildShadows("#1E293B")
	},
	"afrohustle-os": {
		name: "AfroHustle OS",
		slug: "afrohustle-os",
		category: "education",
		icon: "💼",
		description: "100 proven side-hustle blueprints for Nigerian entrepreneurs",
		primary: "#92400E",
		secondary: "#059669",
		accent: "#B45309",
		background: "#FFFBEB",
		foreground: "#1C1917",
		muted: "#FEF3C7",
		success: "#059669",
		warning: "#B45309",
		error: "#DC2626",
		info: "#0284C7",
		gradients: {
			primary: ["#92400E", "#B45309"],
			secondary: ["#059669", "#10B981"],
			background: ["#FFFBEB", "#FEF3C7"]
		},
		shadows: buildShadows("#92400E")
	},
	"naijagig-matcher": {
		name: "NaijaGig Matcher",
		slug: "naijagig-matcher",
		category: "marketplace",
		icon: "🔧",
		description: "Hyper-local gig marketplace for Nigerian artisans",
		primary: "#4338CA",
		secondary: "#EA580C",
		accent: "#6366F1",
		background: "#EEF2FF",
		foreground: "#1E1B4B",
		muted: "#E0E7FF",
		success: "#059669",
		warning: "#EA580C",
		error: "#DC2626",
		info: "#6366F1",
		gradients: {
			primary: ["#4338CA", "#6366F1"],
			secondary: ["#EA580C", "#F97316"],
			background: ["#EEF2FF", "#E0E7FF"]
		},
		shadows: buildShadows("#4338CA")
	},
	"kolo-ai": {
		name: "KoloAI",
		slug: "kolo-ai",
		category: "fintech",
		icon: "👥",
		description: "Digital Ajo/Esusu thrift collector with AI default prediction",
		primary: "#065F46",
		secondary: "#CA8A04",
		accent: "#0D9488",
		background: "#ECFDF5",
		foreground: "#022C22",
		muted: "#D1FAE5",
		success: "#0D9488",
		warning: "#CA8A04",
		error: "#DC2626",
		info: "#14B8A6",
		gradients: {
			primary: ["#065F46", "#047857"],
			secondary: ["#CA8A04", "#EAB308"],
			background: ["#ECFDF5", "#D1FAE5"]
		},
		shadows: buildShadows("#065F46")
	},
	"borderless-remit": {
		name: "BorderlessRemit",
		slug: "borderless-remit",
		category: "fintech",
		icon: "💱",
		description: "Real-time Nigerian remittance rate comparison",
		primary: "#1D4ED8",
		secondary: "#059669",
		accent: "#2563EB",
		background: "#EFF6FF",
		foreground: "#1E3A8A",
		muted: "#DBEAFE",
		success: "#059669",
		warning: "#D97706",
		error: "#DC2626",
		info: "#2563EB",
		gradients: {
			primary: ["#1D4ED8", "#3B82F6"],
			secondary: ["#059669", "#10B981"],
			background: ["#EFF6FF", "#DBEAFE"]
		},
		shadows: buildShadows("#1D4ED8")
	},
	"receipt-genius": {
		name: "ReceiptGenius NG",
		slug: "receipt-genius",
		category: "fintech",
		icon: "🧾",
		description: "VAT-compliant invoice & receipt generator for Nigerian SMEs",
		primary: "#374151",
		secondary: "#059669",
		accent: "#6B7280",
		background: "#F9FAFB",
		foreground: "#111827",
		muted: "#E5E7EB",
		success: "#059669",
		warning: "#D97706",
		error: "#DC2626",
		info: "#3B82F6",
		gradients: {
			primary: ["#374151", "#4B5563"],
			secondary: ["#059669", "#10B981"],
			background: ["#F9FAFB", "#F3F4F6"]
		},
		shadows: buildShadows("#374151")
	},
	"power-alert": {
		name: "PowerAlert NG",
		slug: "power-alert",
		category: "utilities",
		icon: "⚡",
		description: "Crowd-sourced NEPA/EKEDC light tracker + solar calculator",
		primary: "#B45309",
		secondary: "#059669",
		accent: "#F59E0B",
		background: "#FFFBEB",
		foreground: "#1C1917",
		muted: "#FEF3C7",
		success: "#059669",
		warning: "#B45309",
		error: "#DC2626",
		info: "#0284C7",
		gradients: {
			primary: ["#B45309", "#D97706"],
			secondary: ["#059669", "#10B981"],
			background: ["#FFFBEB", "#FEF3C7"]
		},
		shadows: buildShadows("#B45309")
	},
	"farmgate-direct": {
		name: "FarmGate Direct",
		slug: "farmgate-direct",
		category: "marketplace",
		icon: "🌾",
		description: "Direct farmer-to-buyer marketplace — cuts out middlemen",
		primary: "#166534",
		secondary: "#92400E",
		accent: "#16A34A",
		background: "#F0FDF4",
		foreground: "#14532D",
		muted: "#DCFCE7",
		success: "#16A34A",
		warning: "#92400E",
		error: "#DC2626",
		info: "#0284C7",
		gradients: {
			primary: ["#166534", "#15803D"],
			secondary: ["#92400E", "#B45309"],
			background: ["#F0FDF4", "#DCFCE7"]
		},
		shadows: buildShadows("#166534")
	},
	"afrocopy-ai": {
		name: "AfroCopy AI",
		slug: "afrocopy-ai",
		category: "ai",
		icon: "✍️",
		description: "African-first AI copywriting — Pidgin, Yoruba, Igbo, Hausa",
		primary: "#7C2D12",
		secondary: "#6B21A8",
		accent: "#C2410C",
		background: "#FFF7ED",
		foreground: "#1C1917",
		muted: "#FFEDD5",
		success: "#059669",
		warning: "#D97706",
		error: "#DC2626",
		info: "#A855F7",
		gradients: {
			primary: ["#7C2D12", "#9A3412"],
			secondary: ["#6B21A8", "#7C3AED"],
			background: ["#FFF7ED", "#FFEDD5"]
		},
		shadows: buildShadows("#7C2D12")
	},
	"skill2cash": {
		name: "Skill2Cash Board",
		slug: "skill2cash",
		category: "marketplace",
		icon: "🎭",
		description: "Anonymous skill marketplace for Gen-Z Nigerians — video showcase",
		primary: "#4C1D95",
		secondary: "#E11D48",
		accent: "#7C3AED",
		background: "#FAF5FF",
		foreground: "#1F2937",
		muted: "#EDE9FE",
		success: "#059669",
		warning: "#D97706",
		error: "#E11D48",
		info: "#8B5CF6",
		gradients: {
			primary: ["#4C1D95", "#6D28D9"],
			secondary: ["#E11D48", "#F43F5E"],
			background: ["#FAF5FF", "#EDE9FE"]
		},
		shadows: buildShadows("#4C1D95")
	},
	"anontruth-mic": {
		name: "AnonTruth Mic",
		slug: "anontruth-mic",
		category: "social",
		icon: "🎤",
		description: "Temporary anonymous audio drops — voice-distorted, auto-deleted",
		primary: "#18181B",
		secondary: "#EF4444",
		accent: "#3F3F46",
		background: "#FAFAFA",
		foreground: "#18181B",
		muted: "#E4E4E7",
		success: "#059669",
		warning: "#D97706",
		error: "#EF4444",
		info: "#3B82F6",
		gradients: {
			primary: ["#18181B", "#27272A"],
			secondary: ["#EF4444", "#F87171"],
			background: ["#FAFAFA", "#F4F4F5"]
		},
		shadows: buildShadows("#18181B")
	}
};
const MAIN_PRODUCTS = Object.values(BOLDMIND_COLOR_SCHEMES).filter((p) => p.slug !== "boldmind-hub");
function getColorScheme(slug) {
	return BOLDMIND_COLOR_SCHEMES[slug] || BOLDMIND_COLOR_SCHEMES["boldmind-hub"];
}
function getCategoryColorSchemes(category) {
	return Object.values(BOLDMIND_COLOR_SCHEMES).filter((s) => s.category === category);
}
function getContrastColor(hexColor) {
	const hex = hexColor.replace("#", "");
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);
	return (.299 * r + .587 * g + .114 * b) / 255 > .5 ? "#1A202C" : "#FAFAF9";
}

//#endregion
//#region src/styles/theme.ts
const boldmindTypography = {
	fonts: {
		heading: "'Plus Jakarta Sans', 'Inter', sans-serif",
		body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
		mono: "'JetBrains Mono', 'Fira Code', monospace",
		serif: "'Lora', Georgia, 'Times New Roman', serif",
		dyslexic: "'OpenDyslexic', 'Comic Sans MS', sans-serif"
	},
	sizes: {
		xs: "0.75rem",
		sm: "0.875rem",
		base: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
		"2xl": "1.5rem",
		"3xl": "1.875rem",
		"4xl": "2.25rem",
		"5xl": "3rem",
		"6xl": "3.75rem",
		"7xl": "4.5rem",
		"8xl": "6rem"
	}
};
const boldmindAnimations = {
	transitions: {
		fast: "150ms ease-in-out",
		normal: "300ms ease-in-out",
		slow: "500ms ease-in-out"
	},
	keyframes: {
		float: {
			"0%, 100%": { transform: "translateY(0)" },
			"50%": { transform: "translateY(-10px)" }
		},
		pulse: {
			"0%, 100%": { opacity: 1 },
			"50%": { opacity: .5 }
		},
		shimmer: {
			"0%": { backgroundPosition: "-200% 0" },
			"100%": { backgroundPosition: "200% 0" }
		},
		slideInRight: {
			"0%": {
				transform: "translateX(100%)",
				opacity: 0
			},
			"100%": {
				transform: "translateX(0)",
				opacity: 1
			}
		},
		fadeIn: {
			"0%": { opacity: 0 },
			"100%": { opacity: 1 }
		}
	}
};
const boldmindColors = Object.fromEntries(Object.entries(BOLDMIND_COLOR_SCHEMES).map(([slug, scheme]) => [slug.replace(/-/g, ""), {
	primary: scheme.primary,
	secondary: scheme.secondary,
	accent: scheme.accent,
	background: scheme.background,
	foreground: scheme.foreground,
	muted: scheme.muted
}]));
const productThemes = Object.fromEntries(Object.entries(BOLDMIND_COLOR_SCHEMES).map(([slug, scheme]) => [slug, {
	slug,
	name: scheme.name,
	primary: scheme.primary,
	secondary: scheme.secondary,
	accent: scheme.accent,
	background: scheme.background,
	foreground: scheme.foreground,
	muted: scheme.muted
}]));
function getProductTheme(slug) {
	const theme = productThemes[slug];
	if (!theme) return productThemes["boldmind-hub"];
	return theme;
}
function getProductColors(slug) {
	const theme = getProductTheme(slug);
	return {
		primary: theme.primary,
		secondary: theme.secondary,
		accent: theme.accent,
		background: theme.background,
		foreground: theme.foreground,
		muted: theme.muted
	};
}
function getProductThemeClass(slug) {
	return `theme-${slug}`;
}

//#endregion
//#region src/constants/social.ts
const crossPostingRules = {
	amebogist: {
		platforms: [
			"facebook",
			"twitter",
			"instagram",
			"whatsapp"
		],
		schedule: "immediate",
		templates: {
			facebook: "{title}\n\n{body}\n\nRead more: {url}",
			twitter: "{title}\n\n{excerpt}... {url}",
			instagram: "{title}\n\n{excerpt}\n\n{url}\n\n#AmeboGist #News",
			whatsapp: "📰 *{title}*\n\n{excerpt}\n\nRead full article: {url}"
		}
	},
	educenter: {
		platforms: [
			"facebook",
			"twitter",
			"linkedin",
			"whatsapp"
		],
		schedule: "immediate",
		templates: {
			facebook: "🎓 {title}\n\n{body}\n\nLearn more: {url}",
			twitter: "🎓 {title}\n\n{excerpt}... {url} #Education #EduCenter",
			linkedin: "{title}\n\n{body}\n\n🔗 {url}",
			whatsapp: "📚 *{title}*\n\n{excerpt}\n\nEnroll now: {url}"
		}
	},
	boldmind: {
		platforms: [
			"twitter",
			"linkedin",
			"youtube"
		],
		schedule: "scheduled",
		templates: {
			twitter: "💻 {title}\n\n{excerpt}... {url} #Tech #Boldmind",
			linkedin: "{title}\n\n{body}\n\n🔗 {url}\n\n#Technology #Innovation",
			youtube: "Check out our latest tech tutorial!\n\n{url}"
		}
	}
};
const socialAccounts = {
	youtube: [
		{
			id: "channel1",
			name: "Boldmind Technology Solution Enterprise",
			url: "https://youtube.com/@BoldMindTech",
			platform: "youtube"
		},
		{
			id: "channel2",
			name: "Code Fires",
			url: "https://youtube.com/@Codefires",
			platform: "youtube"
		},
		{
			id: "channel3",
			name: "Chains to Coins",
			url: "https://youtube.com/@ChainstoCoins",
			platform: "youtube"
		},
		{
			id: "channel4",
			name: "Echoes of the Elders",
			url: "https://youtube.com/@EchoesoftheElders-d68",
			platform: "youtube"
		}
	],
	facebook: [
		{
			id: "fb1",
			name: "BoldMind Technology Solution Enterprise",
			url: "https://facebook.com/BoldMindTech",
			platform: "facebook"
		},
		{
			id: "fb2",
			name: "Amebo Gist",
			url: "https://facebook.com/amebogistng",
			platform: "facebook"
		},
		{
			id: "fb3",
			name: "Educenter",
			url: "https://facebook.com/DevConectPage",
			platform: "facebook"
		},
		{
			id: "fb4",
			name: "Charles Uche Chijuka",
			url: "https://facebook.com/cuche3",
			platform: "facebook"
		}
	],
	instagram: [
		{
			id: "ig1",
			name: "@boldmindtech",
			url: "https://instagram.com/boldmindtech",
			platform: "instagram"
		},
		{
			id: "ig2",
			name: "@amebogist10",
			url: "https://instagram.com/amebogistng",
			platform: "instagram"
		},
		{
			id: "ig3",
			name: "@educenterc",
			url: "https://instagram.com/educenterc",
			platform: "instagram"
		},
		{
			id: "ig4",
			name: "@charleschijuka",
			url: "https://instagram.com/charleschijuka",
			platform: "instagram"
		},
		{
			id: "ig5",
			name: "@villagecircl",
			url: "https://instagram.com/villagecircl",
			platform: "instagram"
		}
	],
	twitter: [
		{
			id: "tw1",
			name: "VillageCircle",
			url: "https://x.com/bobbycuc2025",
			platform: "twitter"
		},
		{
			id: "tw2",
			name: "AmeboGist",
			url: "https://x.com/Amebo__Gist",
			platform: "twitter"
		},
		{
			id: "tw3",
			name: "ChainsToCoins",
			url: "https://x.com/ChainsToCoins",
			platform: "twitter"
		},
		{
			id: "tw4",
			name: "CodeFiresAfrica",
			url: "https://x.com/mediaman9ja",
			platform: "twitter"
		},
		{
			id: "tw5",
			name: "Charles Uche Chijuka",
			url: "https://x.com/CharlesUcheCh",
			platform: "twitter"
		}
	],
	tiktok: [
		{
			id: "tt1",
			name: "CodeFiresAfrica",
			url: "https://tiktok.com/@codesfiresafrica",
			platform: "tiktok"
		},
		{
			id: "tt2",
			name: "VillageCircle",
			url: "https://tiktok.com/@viilagecircle",
			platform: "tiktok"
		},
		{
			id: "tt3",
			name: "ChainsToCoins",
			url: "https://tiktok.com/@chainstocoins",
			platform: "tiktok"
		}
	],
	whatsapp: [{
		id: "wa1",
		name: "Charles",
		phone: "+2348136705908",
		platform: "whatsapp"
	}, {
		id: "wa2",
		name: "BoldMind Technology Solution Enterprises",
		phone: "+2349138349271",
		platform: "whatsapp"
	}],
	linkedin: [{
		id: "li1",
		name: "BoldMind Technology Solutions",
		url: "https://linkedin.com/company/boldmindtech",
		platform: "linkedin"
	}, {
		id: "li2",
		name: "Charles Uche Chijuka",
		url: "https://linkedin.com/in/charleschijuka",
		platform: "linkedin"
	}]
};
var SocialIntegration = class {
	constructor(config = {
		maxRetries: 3,
		delayBetweenPosts: 1e3,
		batchSize: 5,
		enableAnalytics: true
	}) {
		this.config = config;
		this.platformTokens = /* @__PURE__ */ new Map();
		this.postingQueue = [];
		this.isProcessingQueue = false;
	}
	async connectAllAccounts() {
		const results = {
			success: 0,
			failed: 0,
			errors: []
		};
		const connectionPromises = [];
		for (const [platform, accounts] of Object.entries(socialAccounts)) for (const account of accounts) connectionPromises.push(this.connectAccount(platform, account).then(() => results.success++, (error) => {
			results.failed++;
			results.errors.push(`Failed to connect ${account.name} on ${platform}: ${error.message}`);
		}));
		await Promise.allSettled(connectionPromises);
		console.log(`✅ Connected ${results.success} social accounts, ${results.failed} failed`);
		return results;
	}
	async crossPost(content) {
		const rules = crossPostingRules[content.product];
		if (!rules) {
			console.warn(`No cross-posting rules found for product: ${content.product}`);
			return [];
		}
		const results = [];
		for (const platform of rules.platforms) {
			const platformAccounts = socialAccounts[platform] || [];
			for (const account of platformAccounts) try {
				const result = await this.postToPlatform(platform, account.id);
				results.push({
					platform,
					accountId: account.id,
					accountName: account.name,
					success: true,
					messageId: result.messageId,
					timestamp: /* @__PURE__ */ new Date(),
					content: {
						title: content.title,
						excerpt: content.excerpt,
						url: content.url
					}
				});
				await this.delay(this.config.delayBetweenPosts);
			} catch (error) {
				results.push({
					platform,
					accountId: account.id,
					accountName: account.name,
					success: false,
					error: error instanceof Error ? error.message : "Unknown error",
					timestamp: /* @__PURE__ */ new Date()
				});
				console.error(`Failed to post to ${platform} (${account.name}):`, error);
			}
		}
		return results;
	}
	async postToPlatform(platform, accountId) {
		switch (platform) {
			case "facebook": return this.postToFacebook(accountId);
			case "instagram": return this.postToInstagram(accountId);
			case "twitter":
			case "x": return this.postToTwitter(accountId);
			case "youtube": return this.postToYouTube(accountId);
			case "tiktok": return this.postToTikTok(accountId);
			case "whatsapp": return this.postToWhatsApp(accountId);
			case "linkedin": return this.postToLinkedIn(accountId);
			default: throw new Error(`Unsupported platform: ${platform}`);
		}
	}
	async postToAllProducts(productPost) {
		const results = {};
		const posts = [];
		if (productPost.amebogist) posts.push(this.crossPost({
			...productPost.amebogist,
			body: productPost.amebogist.body || productPost.amebogist.excerpt,
			product: "amebogist"
		}).then((result) => {
			results["amebogist"] = result;
		}));
		if (productPost.educenter) posts.push(this.crossPost({
			...productPost.educenter,
			body: productPost.educenter.body || productPost.educenter.excerpt,
			product: "educenter"
		}).then((result) => {
			results["educenter"] = result;
		}));
		if (productPost.boldmind) posts.push(this.crossPost({
			...productPost.boldmind,
			body: productPost.boldmind.body || productPost.boldmind.excerpt,
			product: "boldmind"
		}).then((result) => {
			results["boldmind"] = result;
		}));
		await Promise.all(posts);
		return results;
	}
	async queuePost(postFn) {
		this.postingQueue.push(postFn);
		if (!this.isProcessingQueue) this.processQueue();
	}
	async processQueue() {
		if (this.isProcessingQueue || this.postingQueue.length === 0) return;
		this.isProcessingQueue = true;
		while (this.postingQueue.length > 0) {
			const batch = this.postingQueue.splice(0, this.config.batchSize);
			await Promise.all(batch.map(async (postFn, index) => {
				await this.delay(index * 500);
				await this.retryOperation(postFn, this.config.maxRetries);
			}));
			if (this.postingQueue.length > 0) await this.delay(this.config.delayBetweenPosts * 2);
		}
		this.isProcessingQueue = false;
	}
	async postToFacebook(accountId) {
		console.log(`Posting to Facebook account ${accountId}`);
		return {
			messageId: `fb_${Date.now()}`,
			platform: "facebook"
		};
	}
	async postToTwitter(accountId) {
		console.log(`Posting to Twitter account ${accountId}`);
		return {
			messageId: `tw_${Date.now()}`,
			platform: "twitter"
		};
	}
	async postToInstagram(accountId) {
		console.log(`Posting to Instagram account ${accountId}`);
		return {
			messageId: `ig_${Date.now()}`,
			platform: "instagram"
		};
	}
	async postToYouTube(accountId) {
		console.log(`Posting to YouTube account ${accountId}`);
		return {
			messageId: `yt_${Date.now()}`,
			platform: "youtube"
		};
	}
	async postToWhatsApp(accountId) {
		console.log(`Posting to WhatsApp account ${accountId}`);
		return {
			messageId: `wa_${Date.now()}`,
			platform: "whatsapp"
		};
	}
	async postToTikTok(accountId) {
		console.log(`Posting to TikTok account ${accountId}`);
		return {
			messageId: `tt_${Date.now()}`,
			platform: "tiktok"
		};
	}
	async postToLinkedIn(accountId) {
		console.log(`Posting to LinkedIn account ${accountId}`);
		return {
			messageId: `li_${Date.now()}`,
			platform: "linkedin"
		};
	}
	async connectAccount(platform, account) {
		console.log(`Connecting ${account.name} on ${platform}`);
		this.platformTokens.set(`${platform}:${account.id}`, "mock_token");
	}
	async delay(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
	async retryOperation(operation, maxRetries, delayMs = 1e3) {
		for (let attempt = 1; attempt <= maxRetries; attempt++) try {
			return await operation();
		} catch (error) {
			if (attempt === maxRetries) throw error;
			console.log(`Retry ${attempt}/${maxRetries} after error:`, error);
			await this.delay(delayMs * attempt);
		}
		throw new Error("Max retries exceeded");
	}
	async getUnifiedAnalytics(startDate, endDate) {
		const analytics = {
			totalFollowers: 0,
			engagement: 0,
			reach: 0,
			postsCount: 0,
			platformBreakdown: {},
			period: {
				start: startDate || /* @__PURE__ */ new Date(Date.now() - 720 * 60 * 60 * 1e3),
				end: endDate || /* @__PURE__ */ new Date()
			}
		};
		for (const [platform, accounts] of Object.entries(socialAccounts)) {
			let platformFollowers = 0;
			let platformEngagement = 0;
			let platformReach = 0;
			let platformPosts = 0;
			for (const account of accounts) try {
				const stats = await this.fetchPlatformStats(platform);
				platformFollowers += stats.followers || 0;
				platformEngagement += stats.engagement || 0;
				platformReach += stats.reach || 0;
				platformPosts += stats.postsCount || 0;
			} catch (error) {
				console.warn(`Failed to fetch stats for ${account.name} on ${platform}:`, error);
			}
			analytics.totalFollowers += platformFollowers;
			analytics.engagement += platformEngagement;
			analytics.reach += platformReach;
			analytics.postsCount += platformPosts;
			analytics.platformBreakdown[platform] = {
				followers: platformFollowers,
				engagement: platformEngagement,
				reach: platformReach,
				postsCount: platformPosts,
				accounts: accounts.length,
				avgEngagementRate: platformFollowers > 0 ? platformEngagement / platformFollowers * 100 : 0
			};
		}
		return analytics;
	}
	async fetchPlatformStats(platform) {
		return {
			followers: Math.floor(Math.random() * 1e4),
			engagement: Math.floor(Math.random() * 1e3),
			reach: Math.floor(Math.random() * 5e4),
			postsCount: Math.floor(Math.random() * 50),
			platform
		};
	}
};

//#endregion
//#region src/utils/detect-product.ts
/** hostname → product slug */
const HOSTNAME_MAP = {
	"boldmind.ng": "boldmind-hub",
	"www.boldmind.ng": "boldmind-hub",
	"amebogist.ng": "amebogist",
	"www.amebogist.ng": "amebogist",
	"educenter.com.ng": "educenter",
	"www.educenter.com.ng": "educenter",
	"os.boldmind.ng": "boldmind-os",
	"fit.boldmind.ng": "naija-fit",
	"tools.boldmind.ng": "boldmind-tools",
	"planai.boldmind.ng": "planai-suite",
	"concept.boldmind.ng": "boldmind-concepts",
	"localhost": "boldmind-hub",
	"127.0.0.1": "boldmind-hub"
};
/**
* hostname + pathname-prefix → product slug.
* Checked BEFORE the bare hostname fallback so subdomain paths win.
* Keys are  "hostname/path-prefix"  (no trailing slash).
*/
const HOST_PATH_MAP = {
	"planai.boldmind.ng/receptionist": "ai-receptionist",
	"planai.boldmind.ng/credibility": "credibility-hubs",
	"planai.boldmind.ng/planning": "business-planning",
	"planai.boldmind.ng/finance": "financial-forecasting",
	"planai.boldmind.ng/investor": "investor-readiness",
	"planai.boldmind.ng/design": "branding-design",
	"planai.boldmind.ng/store": "digital-storefronts",
	"planai.boldmind.ng/marketing": "marketing-automation",
	"planai.boldmind.ng/analytics": "analytics-dashboard",
	"tools.boldmind.ng/social": "social-factory",
	"tools.boldmind.ng/emailscraper": "emailscraper-pro",
	"concept.boldmind.ng/safe": "safe-ai",
	"concept.boldmind.ng/afrohustle": "afrohustle-os",
	"concept.boldmind.ng/naijagig": "naijagig-matcher",
	"concept.boldmind.ng/kolo": "kolo-ai",
	"concept.boldmind.ng/remit": "borderless-remit",
	"concept.boldmind.ng/receipt": "receipt-genius",
	"concept.boldmind.ng/power": "power-alert",
	"concept.boldmind.ng/farmgate": "farmgate-direct",
	"concept.boldmind.ng/afrocopy": "afrocopy-ai",
	"concept.boldmind.ng/skill2cash": "skill2cash",
	"concept.boldmind.ng/anon": "anontruth-mic"
};
/**
* First pathname segment → product slug.
* Used as last resort when running on localhost or an unknown domain
* (e.g. a monorepo dev server serving all apps under one port).
*/
const PATH_SEGMENT_MAP = {
	"boldmind-hub": "boldmind-hub",
	"amebogist": "amebogist",
	"educenter": "educenter",
	"boldmind-os": "boldmind-os",
	"naija-fit": "naija-fit",
	"social-factory": "social-factory",
	"emailscraper-pro": "emailscraper-pro",
	"ai-receptionist": "ai-receptionist",
	"credibility-hubs": "credibility-hubs",
	"business-planning": "business-planning",
	"financial-forecasting": "financial-forecasting",
	"investor-readiness": "investor-readiness",
	"branding-design": "branding-design",
	"digital-storefronts": "digital-storefronts",
	"marketing-automation": "marketing-automation",
	"analytics-dashboard": "analytics-dashboard",
	"safe-ai": "safe-ai",
	"afrohustle-os": "afrohustle-os",
	"naijagig-matcher": "naijagig-matcher",
	"kolo-ai": "kolo-ai",
	"borderless-remit": "borderless-remit",
	"receipt-genius": "receipt-genius",
	"power-alert": "power-alert",
	"farmgate-direct": "farmgate-direct",
	"afrocopy-ai": "afrocopy-ai",
	"skill2cash": "skill2cash",
	"anontruth-mic": "anontruth-mic",
	"planai": "planai-suite",
	"tools": "boldmind-tools",
	"os": "boldmind-os",
	"fit": "naija-fit",
	"concept": "boldmind-concepts"
};
const FALLBACK_SLUG = "boldmind-hub";
/**
* Detects the current BoldMind product slug from the browser's URL.
*
* @returns A product slug string, always. Never throws.
*
* @example
* // On https://planai.boldmind.ng/store
* detectCurrentProduct() // → 'digital-storefronts'
*
* // On https://amebogist.ng/article/something
* detectCurrentProduct() // → 'amebogist'
*
* // During SSR (no window)
* detectCurrentProduct() // → 'boldmind-hub'
*/
function detectCurrentProduct() {
	if (typeof window === "undefined") return FALLBACK_SLUG;
	const { hostname, pathname } = window.location;
	const path = pathname.replace(/^\//, "").toLowerCase();
	const firstSeg = path.split("/")[0] ?? "";
	const pathParts = path.split("/").filter(Boolean);
	for (let len = pathParts.length; len >= 1; len--) {
		const key = `${hostname}/${pathParts.slice(0, len).join("/")}`;
		if (HOST_PATH_MAP[key]) return HOST_PATH_MAP[key];
	}
	if (HOSTNAME_MAP[hostname]) return HOSTNAME_MAP[hostname];
	const subdomainMatch = hostname.match(/^([^.]+)\.boldmind\.ng$/);
	if (subdomainMatch) {
		const sub = subdomainMatch[1].toLowerCase();
		const subMap = {
			os: "boldmind-os",
			fit: "naija-fit",
			tools: "boldmind-tools",
			planai: "planai-suite",
			concept: "boldmind-concepts"
		};
		if (subMap[sub]) return subMap[sub];
	}
	if (firstSeg && PATH_SEGMENT_MAP[firstSeg]) return PATH_SEGMENT_MAP[firstSeg];
	return FALLBACK_SLUG;
}

//#endregion
//#region src/index.ts
/** Extract the first path segment as product slug (useful in middleware) */
function getProductFromPath(pathname) {
	return pathname.split("/").filter(Boolean)[0] ?? "boldmind-hub";
}
/** Format currency — defaults to Nigerian Naira */
function formatCurrency(amount, currency = "NGN") {
	if (currency === "NGN") return `₦${amount.toLocaleString("en-NG")}`;
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency
	}).format(amount);
}
/** Format a date to Nigerian locale */
function formatDate(date, format = "short") {
	return (typeof date === "string" ? new Date(date) : date).toLocaleDateString("en-NG", format === "long" ? {
		year: "numeric",
		month: "long",
		day: "numeric"
	} : {
		year: "numeric",
		month: "short",
		day: "numeric"
	});
}
/** Truncate text to maxLength characters */
function truncateText(text, maxLength = 100) {
	return text.length <= maxLength ? text : `${text.slice(0, maxLength).trim()}…`;
}
/** Lightweight clsx replacement */
function cn(...classes) {
	return classes.filter(Boolean).join(" ");
}
/** Promise-based sleep */
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
/** Leading-edge throttle */
function throttle(fn, limit) {
	let inThrottle = false;
	return (...args) => {
		if (!inThrottle) {
			fn(...args);
			inThrottle = true;
			setTimeout(() => {
				inThrottle = false;
			}, limit);
		}
	};
}
/** Trailing-edge debounce */
function debounce(fn, wait) {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => fn(...args), wait);
	};
}
/** Collision-resistant ID */
function generateId(prefix = "id") {
	return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}
/** Returns true when the visitor's timezone is Africa/Lagos */
function isNigerianUser() {
	if (typeof window === "undefined") return false;
	return Intl.DateTimeFormat().resolvedOptions().timeZone === "Africa/Lagos";
}
/** Time-of-day greeting */
function getGreeting() {
	const h = (/* @__PURE__ */ new Date()).getHours();
	return h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
}
/** Copy text to clipboard — returns success flag */
async function copyToClipboard(text) {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		return false;
	}
}
/** Web Share API wrapper — returns false when not supported */
async function shareContent(data) {
	if (typeof navigator === "undefined" || !navigator.share) return false;
	try {
		await navigator.share(data);
		return true;
	} catch {
		return false;
	}
}
/** Format a Nigerian phone number to a readable form */
function formatPhoneNumber(phone) {
	const c = phone.replace(/\D/g, "");
	if (c.startsWith("234") && c.length === 13) return `+234 ${c.slice(3, 6)} ${c.slice(6, 9)} ${c.slice(9)}`;
	if (c.startsWith("0") && c.length === 11) return `${c.slice(0, 4)} ${c.slice(4, 7)} ${c.slice(7)}`;
	return phone;
}
/** RFC-5322 email validation */
function isValidEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
/** Nigerian phone number validation (local 0XX or international +234XX) */
function isValidNigerianPhone(phone) {
	const c = phone.replace(/\D/g, "");
	return c.length === 11 && c.startsWith("0") || c.length === 13 && c.startsWith("234");
}
/** Approximate reading time in minutes */
function calculateReadingTime(text, wpm = 200) {
	return Math.ceil(text.trim().split(/\s+/).length / wpm);
}
/** Simple pluralize */
function pluralize(count, singular, plural) {
	return count === 1 ? singular : plural ?? `${singular}s`;
}
/** Format number with K / M / B suffix */
function formatNumberShort(n) {
	if (n >= 1e9) return `${(n / 1e9).toFixed(1)}B`;
	if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
	if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`;
	return String(n);
}
/** Human-readable relative time ("2 hours ago") */
function getRelativeTime(date) {
	const diff = Math.floor((Date.now() - new Date(date).getTime()) / 1e3);
	if (diff < 60) return "just now";
	if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
	if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
	if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;
	if (diff < 2592e3) return `${Math.floor(diff / 604800)} weeks ago`;
	if (diff < 31536e3) return `${Math.floor(diff / 2592e3)} months ago`;
	return `${Math.floor(diff / 31536e3)} years ago`;
}
/** Chunk an array into pages */
function chunkArray(arr, size) {
	const chunks = [];
	for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
	return chunks;
}
/** Deep clone any JSON-serializable value */
function deepClone(value) {
	return JSON.parse(JSON.stringify(value));
}
/** Naira amount to kobo (Paystack expects kobo) */
function nairaToKobo(naira) {
	return Math.round(naira * 100);
}
/** Kobo to Naira */
function koboToNaira(kobo) {
	return kobo / 100;
}
var src_default = {
	formatCurrency,
	formatDate,
	truncateText,
	cn,
	sleep,
	throttle,
	debounce,
	generateId,
	isNigerianUser,
	getGreeting,
	copyToClipboard,
	shareContent,
	formatPhoneNumber,
	isValidEmail,
	isValidNigerianPhone,
	calculateReadingTime,
	pluralize,
	formatNumberShort,
	getRelativeTime,
	chunkArray,
	deepClone,
	nairaToKobo,
	koboToNaira,
	getProductFromPath
};

//#endregion
exports.BOLDMIND_COLOR_SCHEMES = BOLDMIND_COLOR_SCHEMES;
exports.BOLDMIND_FONT_CONFIG = BOLDMIND_FONT_CONFIG;
exports.BOLDMIND_PRICING = BOLDMIND_PRICING;
exports.BOLDMIND_PRODUCTS = BOLDMIND_PRODUCTS;
exports.DATABASE_CONFIG = require_database_config.DATABASE_CONFIG;
exports.DOMAIN_MAPPINGS = require_domains.DOMAIN_MAPPINGS;
exports.ECOSYSTEM_ROLE_PERMISSIONS = ECOSYSTEM_ROLE_PERMISSIONS;
exports.PRODUCT_CATEGORIES = PRODUCT_CATEGORIES;
exports.SERVICE_DB_CONFIG = require_database_config.SERVICE_DB_CONFIG;
exports.SYSTEM_ROLE_PERMISSIONS = SYSTEM_ROLE_PERMISSIONS;
exports.SocialIntegration = SocialIntegration;
exports.boldmindAnimations = boldmindAnimations;
exports.boldmindColors = boldmindColors;
exports.boldmindTypography = boldmindTypography;
exports.buildProductCardMap = buildProductCardMap;
exports.calculateAnnualRevenue = calculateAnnualRevenue;
exports.calculateProjectedRevenue = calculateProjectedRevenue;
exports.calculateROI = calculateROI;
exports.calculateReadingTime = calculateReadingTime;
exports.calculateTotalDevelopmentCost = calculateTotalDevelopmentCost;
exports.calculateTotalMonthlyRevenue = calculateTotalMonthlyRevenue;
exports.calculateTotalTeamSize = calculateTotalTeamSize;
exports.calculateYearlySavings = calculateYearlySavings;
exports.chunkArray = chunkArray;
exports.cn = cn;
exports.copyToClipboard = copyToClipboard;
exports.crossPostingRules = crossPostingRules;
exports.debounce = debounce;
exports.deepClone = deepClone;
exports.default = src_default;
exports.detectCurrentProduct = detectCurrentProduct;
exports.detectProductFromHost = detectProductFromHost;
exports.estimateDevelopmentCost = estimateDevelopmentCost;
exports.formatCurrency = formatCurrency;
exports.formatDate = formatDate;
exports.formatNumberShort = formatNumberShort;
exports.formatPhoneNumber = formatPhoneNumber;
exports.fuzzySearchProducts = fuzzySearchProducts;
exports.generateBuildPlan = generateBuildPlan;
exports.generateCSSVariables = generateCSSVariables;
exports.generateFontCSS = generateFontCSS;
exports.generateId = generateId;
exports.generateThemeClasses = generateThemeClasses;
exports.getAPIEndpoint = require_domains.getAPIEndpoint;
exports.getActiveProducts = getActiveProducts;
exports.getAllApps = getAllApps;
exports.getAllDomains = getAllDomains;
exports.getAllHealthScores = getAllHealthScores;
exports.getAllIntegrations = getAllIntegrations;
exports.getAllProductUrls = getAllProductUrls;
exports.getAllServiceModules = getAllServiceModules;
exports.getAllSubdomains = getAllSubdomains;
exports.getAllTWAPackageNames = getAllTWAPackageNames;
exports.getAllTags = getAllTags;
exports.getAllTechStack = getAllTechStack;
exports.getAverageRevenuePerLiveProduct = getAverageRevenuePerLiveProduct;
exports.getBuildingProducts = getBuildingProducts;
exports.getCategoryColorSchemes = getCategoryColorSchemes;
exports.getCategorySummary = getCategorySummary;
exports.getColorScheme = getColorScheme;
exports.getCompetitorGaps = getCompetitorGaps;
exports.getConceptProducts = getConceptProducts;
exports.getConnectionString = require_database_config.getConnectionString;
exports.getContrastColor = getContrastColor;
exports.getDatabaseEnvVar = require_database_config.getDatabaseEnvVar;
exports.getDatabaseName = require_database_config.getDatabaseName;
exports.getDomainFromProduct = require_domains.getDomainFromProduct;
exports.getDomainsByStatus = require_domains.getDomainsByStatus;
exports.getGreeting = getGreeting;
exports.getHighPriorityProducts = getHighPriorityProducts;
exports.getInactiveProducts = getInactiveProducts;
exports.getLiveProducts = getLiveProducts;
exports.getLowPriorityProducts = getLowPriorityProducts;
exports.getPaybackPeriod = getPaybackPeriod;
exports.getPlanAISuiteProducts = getPlanAISuiteProducts;
exports.getPlannedProducts = getPlannedProducts;
exports.getProductByDomain = getProductByDomain;
exports.getProductByFullDomain = getProductByFullDomain;
exports.getProductById = getProductById;
exports.getProductBySlug = getProductBySlug;
exports.getProductColors = getProductColors;
exports.getProductDependencies = getProductDependencies;
exports.getProductDependents = getProductDependents;
exports.getProductFont = getProductFont;
exports.getProductFromDomain = require_domains.getProductFromDomain;
exports.getProductFromPath = getProductFromPath;
exports.getProductHealthScore = getProductHealthScore;
exports.getProductPricing = getProductPricing;
exports.getProductStatusSummary = getProductStatusSummary;
exports.getProductTheme = getProductTheme;
exports.getProductThemeClass = getProductThemeClass;
exports.getProductWebsiteUrl = getProductWebsiteUrl;
exports.getProductsByAnyTag = getProductsByAnyTag;
exports.getProductsByApp = getProductsByApp;
exports.getProductsByCategories = getProductsByCategories;
exports.getProductsByCategory = getProductsByCategory;
exports.getProductsByDatabase = getProductsByDatabase;
exports.getProductsByDomainName = getProductsByDomainName;
exports.getProductsByPriority = getProductsByPriority;
exports.getProductsByServiceModule = getProductsByServiceModule;
exports.getProductsBySimilarStack = getProductsBySimilarStack;
exports.getProductsByStatus = getProductsByStatus;
exports.getProductsBySubdomain = getProductsBySubdomain;
exports.getProductsByTags = getProductsByTags;
exports.getProductsByTeamSize = getProductsByTeamSize;
exports.getProductsByTech = getProductsByTech;
exports.getProductsForService = require_database_config.getProductsForService;
exports.getProductsLaunchingThisYear = getProductsLaunchingThisYear;
exports.getProductsNeedingAttention = getProductsNeedingAttention;
exports.getProductsWithIntegration = getProductsWithIntegration;
exports.getProductsWithSubdomain = getProductsWithSubdomain;
exports.getProductsWithTWA = getProductsWithTWA;
exports.getProductsWithoutSubdomain = getProductsWithoutSubdomain;
exports.getQuickStats = getQuickStats;
exports.getRecentlyCreatedProducts = getRecentlyCreatedProducts;
exports.getRecentlyUpdatedProducts = getRecentlyUpdatedProducts;
exports.getRecommendedNextBuild = getRecommendedNextBuild;
exports.getRelatedProducts = getRelatedProducts;
exports.getRelativeTime = getRelativeTime;
exports.getRevenueByCategory = getRevenueByCategory;
exports.getRevenueGeneratingProducts = getRevenueGeneratingProducts;
exports.getRolePermissions = getRolePermissions;
exports.getServiceDatabase = require_database_config.getServiceDatabase;
exports.getServiceForProduct = require_database_config.getServiceForProduct;
exports.getServiceUrl = require_database_config.getServiceUrl;
exports.getServicesByDatabase = require_database_config.getServicesByDatabase;
exports.getSoloProducts = getSoloProducts;
exports.getStaleProducts = getStaleProducts;
exports.getTWAByPackageName = getTWAByPackageName;
exports.getTagFrequency = getTagFrequency;
exports.getTechStackFrequency = getTechStackFrequency;
exports.getTopOpportunityGap = getTopOpportunityGap;
exports.getTopRevenueProducts = getTopRevenueProducts;
exports.getTopTags = getTopTags;
exports.getTransitiveDependencies = getTransitiveDependencies;
exports.getUpcomingReleases = getUpcomingReleases;
exports.getZeroRevenueProducts = getZeroRevenueProducts;
exports.groupByQuarter = groupByQuarter;
exports.hasPermission = hasPermission;
exports.isLiveDomain = require_domains.isLiveDomain;
exports.isNigerianUser = isNigerianUser;
exports.isValidEmail = isValidEmail;
exports.isValidNigerianPhone = isValidNigerianPhone;
exports.koboToNaira = koboToNaira;
exports.nairaToKobo = nairaToKobo;
exports.paginateProducts = paginateProducts;
exports.pluralize = pluralize;
exports.productThemes = productThemes;
exports.projectRevenue = projectRevenue;
exports.searchProducts = searchProducts;
exports.serializeProducts = serializeProducts;
exports.shareContent = shareContent;
exports.sleep = sleep;
exports.socialAccounts = socialAccounts;
exports.sortProducts = sortProducts;
exports.throttle = throttle;
exports.toProductCard = toProductCard;
exports.toProductCards = toProductCards;
exports.toStaticProps = toStaticProps;
exports.truncateText = truncateText;
exports.usesMongoDB = require_database_config.usesMongoDB;
exports.usesPostgres = require_database_config.usesPostgres;
exports.validateDatabaseEnvVars = require_database_config.validateDatabaseEnvVars;
//# sourceMappingURL=index.cjs.map