Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

//#region src/shared/env-config.ts
const ENV_CONFIG = {
	NODE_ENV: process.env["NODE_ENV"] || "development",
	PORT: parseInt(process.env["PORT"] || "4000", 10),
	CORS: {
		ORIGIN: process.env["CORS_ORIGIN"]?.split(",") || ["http://localhost:3001"],
		CREDENTIALS: true
	},
	DOMAINS: {
		HUB: process.env["NEXT_PUBLIC_HUB_DOMAIN"] || "boldmind.ng",
		AMEBOGIST: process.env["NEXT_PUBLIC_AMEBO_DOMAIN"] || "amebogist.ng",
		EDUCENTER: process.env["NEXT_PUBLIC_EDUCENTER_DOMAIN"] || "educenter.com.ng",
		BOLDMIND_OS: process.env["NEXT_PUBLIC_OS_DOMAIN"] || "os.boldmind.ng",
		PLANAI: process.env["NEXT_PUBLIC_PLANAI_DOMAIN"] || "planai.boldmind.ng",
		RECEPTIONIST_AI: process.env["NEXT_PUBLIC_RECEPTIONIST_AI_DOMAIN"] || "planai.boldmind.ng/receptionist",
		SOCIAL_FACTORY: process.env["NEXT_PUBLIC_SOCIAL_FACTORY_DOMAIN"] || "social.boldmind.ng",
		CREDIBILITY_HUB: process.env["NEXT_PUBLIC_CREDIBILITY_HUB_DOMAIN"] || "planai.boldmind.ng/credibility",
		DIGITAL_STOREFRONT: process.env["NEXT_PUBLIC_DIGITAL_STOREFRONT_DOMAIN"] || "planai.boldmind.ng/store",
		BUSSINESS_PLAN_AI: process.env["NEXT_PUBLIC_BUSSINESS_PLAN_AI_DOMAIN"] || "planai.boldmind.ng/planning",
		ANALYTICS_AI: process.env["NEXT_PUBLIC_ANALYTICS_AI_DOMAIN"] || "planai.boldmind.ng/analytics",
		MARKETING_AUTOMATION_AI: process.env["NEXT_PUBLIC_MARKETING_AUTOMATION_AI_DOMAIN"] || "planai.boldmind.ng/marketing",
		BRAND_DESIGN_AI: process.env["NEXT_PUBLIC_BRAND_DESIGN_AI_DOMAIN"] || "planai.boldmind.ng/design",
		FINANCIAL_FORCASTING_AI: process.env["NEXT_PUBLIC_FINANCIAL_ANALYST_AI_DOMAIN"] || "planai.boldmind.ng/finance",
		INVESTOR_READINESS_AI: process.env["NEXT_PUBLIC_INVESTOR_READINESS_AI_DOMAIN"] || "planai.boldmind.ng/investor",
		NAIJA_FITHER: process.env["NEXT_PUBLIC_NAIJA_FITHER_DOMAIN"] || "fit.boldmind.ng",
		EMAILSCRAPER_PRO: process.env["NEXT_PUBLIC_EMAILSCRAPER_PRO_DOMAIN"] || "email.boldmind.ng",
		SAFE_NAIJA: process.env["NEXT_PUBLIC_SAFE_NAIJA_DOMAIN"] || "safe.boldmind.ng",
		AFROHUSTLE_OS: process.env["NEXT_PUBLIC_AFROHUSTLE_OS_DOMAIN"] || "hustle.boldmind.ng",
		NAIJAGIG_MATCHER: process.env["NEXT_PUBLIC_NAIJAGIG_MATCHER_DOMAIN"] || "gig.educenter.com.ng",
		KOLO_AI: process.env["NEXT_PUBLIC_KOLO_AI_DOMAIN"] || "kolo.boldmind.ng",
		BORDERLESS_REMIT: process.env["NEXT_PUBLIC_BORDERLESS_REMIT_DOMAIN"] || "border.boldmind.ng",
		RECEIPT_GENIUS: process.env["NEXT_PUBLIC_RECEIPT_GENIUS_DOMAIN"] || "receipt.boldmind.ng",
		POWER_ALERT: process.env["NEXT_PUBLIC_POWER_ALERT_DOMAIN"] || "power.boldmind.ng",
		FARMGATE_DIRECT: process.env["NEXT_PUBLIC_FARMGATE_DIRECT_DOMAIN"] || "farm.boldmind.ng",
		AFROCOPY_AI: process.env["NEXT_PUBLIC_AFROCOPY_AI_DOMAIN"] || "copy.amebogist.ng",
		SKILL2CASH: process.env["NEXT_PUBLIC_SKILL2CASH_DOMAIN"] || "skills.educenter.com.ng",
		ANONTRUTH_MIC: process.env["NEXT_PUBLIC_ANONTRUTH_MIC_DOMAIN"] || "anon.amebogist.ng"
	},
	DATABASE_URL: process.env["DATABASE_URL"] || "",
	POSTGRES_SERVICES: {
		USER_SERVICE_DATABASE_URL: process.env["USER_SERVICE_DATABASE_URL"] || "",
		PAYMENT_SERVICE_DATABASE_URL: process.env["PAYMENT_SERVICE_DATABASE_URL"] || "",
		ANALYTICS_SERVICE_DATABASE_URL: process.env["ANALYTICS_SERVICE_DATABASE_URL"] || "",
		EDUCENTER_SERVICE_DATABASE_URL: process.env["EDUCENTER_SERVICE_DATABASE_URL"] || "",
		FITHER_SERVICE_DATABASE_URL: process.env["FITHER_SERVICE_DATABASE_URL"] || "",
		PLANAI_SERVICE_DATABASE_URL: process.env["PLANAI_SERVICE_DATABASE_URL"] || "",
		HUB_SERVICE_DATABASE_URL: process.env["HUB_SERVICE_DATABASE_URL"] || "",
		RECEPTIONIST_SERVICE_DATABASE_URL: process.env["RECEPTIONIST_SERVICE_DATABASE_URL"] || "",
		CREDIBILITY_SERVICE_DATABASE_URL: process.env["CREDIBILITY_SERVICE_DATABASE_URL"] || "",
		BUSINESS_PLANNING_SERVICE_DATABASE_URL: process.env["BUSINESS_PLANNING_SERVICE_DATABASE_URL"] || "",
		FINANCIAL_SERVICE_DATABASE_URL: process.env["FINANCIAL_SERVICE_DATABASE_URL"] || "",
		INVESTOR_SERVICE_DATABASE_URL: process.env["INVESTOR_SERVICE_DATABASE_URL"] || "",
		STOREFRONTS_SERVICE_DATABASE_URL: process.env["STOREFRONTS_SERVICE_DATABASE_URL"] || "",
		DIGITAL_STOREFRONTS_DATABASE_URL: process.env["DIGITAL_STOREFRONTS_DATABASE_URL"] || "",
		MARKETING_SERVICE_DATABASE_URL: process.env["MARKETING_SERVICE_DATABASE_URL"] || "",
		ANALYTICS_DASHBOARD_SERVICE_DATABASE_URL: process.env["ANALYTICS_DASHBOARD_SERVICE_DATABASE_URL"] || "",
		SAFEAI_SERVICE_DATABASE_URL: process.env["SAFEAI_SERVICE_DATABASE_URL"] || "",
		KOLOAI_SERVICE_DATABASE_URL: process.env["KOLOAI_SERVICE_DATABASE_URL"] || "",
		RECEIPT_SERVICE_DATABASE_URL: process.env["RECEIPT_SERVICE_DATABASE_URL"] || "",
		BOLDMIND_OS_SERVICE_DATABASE_URL: process.env["BOLDMIND_OS_SERVICE_DATABASE_URL"] || ""
	},
	MONGODB_URL: process.env["MONGODB_URL"] || "",
	MONGODB_SERVICES: {
		AMEBOGIST_SERVICE_MONGODB_URL: process.env["AMEBOGIST_SERVICE_MONGODB_URL"] || "",
		SOCIAL_FACTORY_SERVICE_MONGODB_URL: process.env["SOCIAL_FACTORY_SERVICE_MONGODB_URL"] || "",
		EMAILSCRAPER_PRO_SERVICE_MONGODB_URL: process.env["EMAILSCRAPER_PRO_SERVICE_MONGODB_URL"] || "",
		SAFEAI_SERVICE_MONGODB_URL: process.env["SAFEAI_SERVICE_MONGODB_URL"] || "",
		AFROHUSTLE_SERVICE_MONGODB_URL: process.env["AFROHUSTLE_SERVICE_MONGODB_URL"] || "",
		NAIJAGIG_MATCHER_SERVICE_MONGODB_URL: process.env["NAIJAGIG_MATCHER_SERVICE_MONGODB_URL"] || "",
		BORDERLESS_REMIT_SERVICE_MONGODB_URL: process.env["BORDERLESS_REMIT_SERVICE_MONGODB_URL"] || "",
		POWER_ALERT_SERVICE_MONGODB_URL: process.env["POWER_ALERT_SERVICE_MONGODB_URL"] || "",
		FARMGATE_DIRECT_SERVICE_MONGODB_URL: process.env["FARMGATE_DIRECT_SERVICE_MONGODB_URL"] || "",
		AFROCOPY_AI_SERVICE_MONGODB_URL: process.env["AFROCOPY_AI_SERVICE_MONGODB_URL"] || "",
		SKILL2CASH_SERVICE_MONGODB_URL: process.env["SKILL2CASH_SERVICE_MONGODB_URL"] || "",
		ANONTRUTH_MIC_SERVICE_MONGODB_URL: process.env["ANONTRUTH_MIC_SERVICE_MONGODB_URL"] || ""
	},
	getPostgresConnection(service) {
		const envVar = {
			"boldmind-os-service": "BOLDMIND_OS_SERVICE_DATABASE_URL",
			"user-service": "USER_SERVICE_DATABASE_URL",
			"payment-service": "PAYMENT_SERVICE_DATABASE_URL",
			"analytics-service": "ANALYTICS_SERVICE_DATABASE_URL",
			"educenter-service": "EDUCENTER_SERVICE_DATABASE_URL",
			"fither-service": "FITHER_SERVICE_DATABASE_URL",
			"planai-service": "PLANAI_SERVICE_DATABASE_URL",
			"hub-service": "HUB_SERVICE_DATABASE_URL",
			"receptionist-service": "RECEPTIONIST_SERVICE_DATABASE_URL",
			"credibility-service": "CREDIBILITY_SERVICE_DATABASE_URL",
			"business-planning-service": "BUSINESS_PLANNING_SERVICE_DATABASE_URL",
			"financial-service": "FINANCIAL_SERVICE_DATABASE_URL",
			"investor-service": "INVESTOR_SERVICE_DATABASE_URL",
			"storefronts-service": "STOREFRONTS_SERVICE_DATABASE_URL",
			"digital-storefronts": "DIGITAL_STOREFRONTS_DATABASE_URL",
			"marketing-service": "MARKETING_SERVICE_DATABASE_URL",
			"analytics-dashboard-service": "ANALYTICS_DASHBOARD_SERVICE_DATABASE_URL",
			"safeai-service": "SAFEAI_SERVICE_DATABASE_URL",
			"koloai-service": "KOLOAI_SERVICE_DATABASE_URL",
			"receipt-service": "RECEIPT_SERVICE_DATABASE_URL"
		}[service];
		const url = process.env[envVar] || this.POSTGRES_SERVICES[envVar];
		if (!url) throw new Error(`PostgreSQL URL not found for service: ${service}`);
		return url;
	},
	getMongoConnection(service) {
		const envVar = {
			"amebogist-service": "AMEBOGIST_SERVICE_MONGODB_URL",
			"social-factory-service": "SOCIAL_FACTORY_SERVICE_MONGODB_URL",
			"emailscraper-pro-service": "EMAILSCRAPER_PRO_SERVICE_MONGODB_URL",
			"safeai-service": "SAFEAI_SERVICE_MONGODB_URL",
			"afrohustle-service": "AFROHUSTLE_SERVICE_MONGODB_URL",
			"naijagig-matcher-service": "NAIJAGIG_MATCHER_SERVICE_MONGODB_URL",
			"borderless-remit-service": "BORDERLESS_REMIT_SERVICE_MONGODB_URL",
			"power-alert-service": "POWER_ALERT_SERVICE_MONGODB_URL",
			"farmgate-direct-service": "FARMGATE_DIRECT_SERVICE_MONGODB_URL",
			"afrocopy-ai-service": "AFROCOPY_AI_SERVICE_MONGODB_URL",
			"skill2cash-service": "SKILL2CASH_SERVICE_MONGODB_URL",
			"anontruth-mic-service": "ANONTRUTH_MIC_SERVICE_MONGODB_URL"
		}[service];
		const url = process.env[envVar] || this.MONGODB_SERVICES[envVar];
		if (!url) throw new Error(`MongoDB URL not found for service: ${service}`);
		return url;
	},
	ANALYTICS: {
		GA4_ID: process.env["NEXT_PUBLIC_GA4_ID"] || "G-XXXXXXXXXX",
		MIXPANEL_TOKEN: process.env["NEXT_PUBLIC_MIXPANEL_TOKEN"],
		POSTHOG_KEY: process.env["NEXT_PUBLIC_POSTHOG_KEY"],
		POSTHOG_HOST: process.env["NEXT_PUBLIC_POSTHOG_HOST"] || "https://app.posthog.com"
	},
	SOCIAL: {
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
				url: "https://instagram.com/amebogist10",
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
		tiktok: [{
			id: "tt1",
			name: "CodeFiresAfrica",
			url: "https://tiktok.com/@codesfiresafrica",
			platform: "tiktok"
		}, {
			id: "tt2",
			name: "VillageCircle",
			url: "https://tiktok.com/@viilagecircle",
			platform: "tiktok"
		}],
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
	},
	EMAIL: {
		SUPPORT: process.env["SUPPORT_EMAIL"] || "support@boldmind.ng",
		CONTACT: process.env["CONTACT_EMAIL"] || "contact@boldmind.ng",
		NO_REPLY: process.env["NO_REPLY_EMAIL"] || "noreply@boldmind.ng",
		RESEND_API_KEY: process.env["RESEND_API_KEY"]
	},
	PAYMENT: {
		PAYSTACK_PUBLIC_KEY: process.env["NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY"],
		PAYSTACK_SECRET_KEY: process.env["PAYSTACK_SECRET_KEY"],
		FLUTTERWAVE_PUBLIC_KEY: process.env["FLUTTERWAVE_PUBLIC_KEY"],
		FLUTTERWAVE_SECRET_KEY: process.env["FLUTTERWAVE_SECRET_KEY"],
		CURRENCY: "NGN"
	},
	AUTH: {
		NEXTAUTH_SECRET: process.env["NEXTAUTH_SECRET"],
		NEXTAUTH_URL: process.env["NEXTAUTH_URL"] || "http://localhost:3000",
		SUPABASE_URL: process.env["NEXT_PUBLIC_SUPABASE_URL"],
		SUPABASE_KEY: process.env["NEXT_PUBLIC_SUPABASE_KEY"],
		JWT_SECRET: process.env["JWT_SECRET"] || "your-super-secret-jwt-key-change-this-in-production",
		JWT_EXPIRES_IN: process.env["JWT_EXPIRES_IN"] || "1d"
	},
	AI: {
		OPENAI_API_KEY: process.env["OPENAI_API_KEY"],
		OPENAI_ORG_ID: process.env["OPENAI_ORG_ID"],
		ANTHROPIC_API_KEY: process.env["ANTHROPIC_API_KEY"],
		HUGGINGFACE_TOKEN: process.env["HUGGINGFACE_TOKEN"]
	},
	STORAGE: {
		CLOUDINARY_CLOUD_NAME: process.env["CLOUDINARY_CLOUD_NAME"],
		CLOUDINARY_API_KEY: process.env["CLOUDINARY_API_KEY"],
		CLOUDINARY_API_SECRET: process.env["CLOUDINARY_API_SECRET"],
		AWS_ACCESS_KEY_ID: process.env["AWS_ACCESS_KEY_ID"],
		AWS_SECRET_ACCESS_KEY: process.env["AWS_SECRET_ACCESS_KEY"],
		AWS_REGION: process.env["AWS_REGION"] || "af-south-1"
	},
	APIS: {
		TERMII_API_KEY: process.env["TERMII_API_KEY"],
		HUNTER_API_KEY: process.env["HUNTER_API_KEY"],
		META_ACCESS_TOKEN: process.env["META_ACCESS_TOKEN"]
	},
	FEATURES: {
		ENABLE_CROSS_APP_TRACKING: process.env["NEXT_PUBLIC_ENABLE_CROSS_APP_TRACKING"] === "true",
		ENABLE_SOCIAL_SHARING: process.env["NEXT_PUBLIC_ENABLE_SOCIAL_SHARING"] === "true",
		ENABLE_PAYMENTS: process.env["NEXT_PUBLIC_ENABLE_PAYMENTS"] === "true",
		ENABLE_AI_FEATURES: process.env["NEXT_PUBLIC_ENABLE_AI_FEATURES"] === "true"
	}
};
function getDomainKey(appName) {
	return {
		"boldmind-hub": "HUB",
		"amebogist": "AMEBOGIST",
		"educenter": "EDUCENTER",
		"boldmind-os": "BOLDMIND_OS",
		"planai": "PLANAI",
		"naija-fither": "NAIJA_FITHER",
		"emailscraper-pro": "EMAILSCRAPER_PRO",
		"safe-naija": "SAFE_NAIJA",
		"receptionist": "RECEPTIONIST_AI",
		"social-factory": "SOCIAL_FACTORY",
		"credibility-hubs": "CREDIBILITY_HUB",
		"business-planning": "BUSSINESS_PLAN_AI",
		"financial-forecasting": "FINANCIAL_FORCASTING_AI",
		"investor-readiness": "INVESTOR_READINESS_AI",
		"branding-design": "BRAND_DESIGN_AI",
		"digital-storefronts": "DIGITAL_STOREFRONT",
		"marketing-automation": "MARKETING_AUTOMATION_AI",
		"analytics-dashboard": "ANALYTICS_AI",
		"afrohustle-os": "AFROHUSTLE_OS",
		"naijagig-matcher": "NAIJAGIG_MATCHER",
		"kolo-ai": "KOLO_AI",
		"borderless-remit": "BORDERLESS_REMIT",
		"receipt-genius": "RECEIPT_GENIUS",
		"power-alert": "POWER_ALERT",
		"farmgate-direct": "FARMGATE_DIRECT",
		"afrocopy-ai": "AFROCOPY_AI",
		"skill2cash": "SKILL2CASH",
		"anontruth-mic": "ANONTRUTH_MIC"
	}[appName] || null;
}
function validateEnv() {
	const missing = [
		"NEXTAUTH_SECRET",
		"JWT_SECRET",
		"DATABASE_URL",
		"MONGODB_URL"
	].filter((key) => !process.env[key]);
	if (missing.length > 0) {
		console.error("Missing required environment variables:", missing);
		if (process.env["NODE_ENV"] === "production") throw new Error(`Missing environment variables: ${missing.join(", ")}`);
	}
	return true;
}
function getAppConfig(appName) {
	const domainKey = getDomainKey(appName);
	const baseUrl = `https://${domainKey ? ENV_CONFIG.DOMAINS[domainKey] : "boldmind.ng"}`;
	return {
		...ENV_CONFIG,
		APP: {
			NAME: appName,
			BASE_URL: baseUrl,
			API_URL: `${baseUrl}/api`,
			CDN_URL: `https://cdn.boldmind.ng/${appName}`
		}
	};
}
function getAppDomain(appName) {
	const domainKey = getDomainKey(appName);
	return domainKey ? ENV_CONFIG.DOMAINS[domainKey] : "boldmind.ng";
}
function getDatabaseUrl(serviceName) {
	if (isMongoService(serviceName)) return ENV_CONFIG.getMongoConnection(serviceName);
	else return ENV_CONFIG.getPostgresConnection(serviceName);
}
function isMongoService(serviceName) {
	return [
		"amebogist-service",
		"social-factory-service",
		"emailscraper-pro-service",
		"safeai-service",
		"afrohustle-service",
		"naijagig-matcher-service",
		"borderless-remit-service",
		"power-alert-service",
		"farmgate-direct-service",
		"afrocopy-ai-service",
		"skill2cash-service",
		"anontruth-mic-service"
	].includes(serviceName);
}

//#endregion
exports.ENV_CONFIG = ENV_CONFIG;
exports.getAppConfig = getAppConfig;
exports.getAppDomain = getAppDomain;
exports.getDatabaseUrl = getDatabaseUrl;
exports.validateEnv = validateEnv;
//# sourceMappingURL=index.cjs.map