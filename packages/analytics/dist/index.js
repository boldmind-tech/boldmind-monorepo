import { BOLDMIND_PRODUCTS, SocialIntegration } from "@boldmind/utils";

//#region src/flywheel.ts
var BoldMindFlywheel = class {
	constructor(socialConfig) {
		this.customerJourney = /* @__PURE__ */ new Map();
		this.eventQueue = [];
		this.isProcessingQueue = false;
		this.social = new SocialIntegration(socialConfig);
		this.initializeFlywheel();
	}
	async initializeFlywheel() {
		try {
			await this.social.connectAllAccounts();
			console.log("✅ Social accounts connected for flywheel");
		} catch (error) {
			console.error("Failed to connect social accounts:", error);
		}
	}
	async trackCustomerJourney(userId, event) {
		this.queueEvent(async () => {
			await this.processJourneyEvent(userId, event);
		});
	}
	async processJourneyEvent(userId, event) {
		let journey = this.customerJourney.get(userId);
		if (!journey) journey = {
			userId,
			firstSeen: /* @__PURE__ */ new Date(),
			lastActive: /* @__PURE__ */ new Date(),
			products: [],
			touchpoints: [],
			segment: "awareness"
		};
		journey.lastActive = /* @__PURE__ */ new Date();
		journey.touchpoints.push({
			timestamp: /* @__PURE__ */ new Date(),
			product: event.product,
			action: event.action,
			data: event.data
		});
		if (!journey.products.includes(event.product)) journey.products.push(event.product);
		journey.segment = this.determineCustomerSegment(journey);
		this.customerJourney.set(userId, journey);
		await this.triggerFlywheelActions(userId, event.product, event.action);
		await this.updateFlywheelMetrics();
	}
	determineCustomerSegment(journey) {
		const hasPurchase = journey.touchpoints.some((t) => t.action === "purchase");
		const hasShare = journey.touchpoints.some((t) => t.action === "share" || t.action === "referral");
		const hasSignup = journey.touchpoints.some((t) => t.action === "signup");
		if (hasShare) return "advocacy";
		if (hasPurchase) return "enablement";
		if (hasSignup) return "education";
		return "awareness";
	}
	async triggerFlywheelActions(userId, currentProduct, action) {
		const journey = this.customerJourney.get(userId);
		if (!journey) return;
		const product = BOLDMIND_PRODUCTS.find((p) => p.slug === currentProduct);
		if (!product) return;
		switch (action) {
			case "view":
				await this.handleViewAction(userId, product, journey);
				break;
			case "signup":
				await this.handleSignupAction(userId, product, journey);
				break;
			case "purchase":
				await this.handlePurchaseAction(userId, product, journey);
				break;
			case "share":
			case "referral":
				await this.handleAdvocacyAction(userId, product, journey);
				break;
		}
	}
	async handleViewAction(userId, product, journey) {
		if (journey.segment === "awareness") {
			if (product.category === "media") await this.sendPersonalizedContent(userId, "educenter", {
				type: "course_recommendation",
				message: `Liked our news? Check out our ${product.name} course!`
			});
		}
	}
	async handleSignupAction(userId, product, _journey) {
		if (product.category === "education") await this.sendPersonalizedContent(userId, "ai-receptionist", {
			type: "upsell",
			message: "Ready to automate your business? Try our AI Receptionist!",
			discount: "20%OFF"
		});
	}
	async handlePurchaseAction(userId, product, _journey) {
		if (product.category === "ai") {
			await this.sendPersonalizedContent(userId, "referral_program", {
				type: "advocacy",
				message: "Love our product? Share with friends and earn rewards!",
				reward: "$50 credit"
			});
			const complementary = this.getComplementaryProducts(product.slug);
			for (const compProduct of complementary) await this.sendPersonalizedContent(userId, compProduct, {
				type: "cross_sell",
				message: `Enhance your setup with ${compProduct}!`,
				bundleDiscount: "15%"
			});
		}
	}
	async handleAdvocacyAction(userId, product, journey) {
		await this.sendPersonalizedContent(userId, "reward", {
			type: "thank_you",
			message: "Thanks for sharing! Here's a reward for you.",
			reward: "Premium feature unlocked"
		});
		await this.social.crossPost({
			title: `${journey.userId} just shared ${product.name}!`,
			body: "Join our growing community of advocates.",
			excerpt: "Share and earn rewards",
			url: `https://boldmind.com/referral/${userId}`,
			product: "boldmind"
		});
	}
	getComplementaryProducts(currentProduct) {
		return {
			"ai-receptionist": ["business-planning", "social-factory"],
			"business-planning": ["ai-receptionist", "emailscraper-pro"],
			"social-factory": ["ai-receptionist", "emailscraper-pro"],
			"emailscraper-pro": ["social-factory", "business-planning"]
		}[currentProduct] || [];
	}
	async sendPersonalizedContent(userId, target, content) {
		console.log(`Sending personalized content to ${userId}:`, content);
		if (target === "referral_program") await this.social.crossPost({
			title: `${userId} is now part of our referral program!`,
			body: content.message,
			excerpt: "Join our referral program and earn rewards",
			url: `https://boldmind.com/referral/${userId}`,
			product: "boldmind"
		});
	}
	queueEvent(eventFn) {
		this.eventQueue.push(eventFn);
		if (!this.isProcessingQueue) this.processEventQueue();
	}
	async processEventQueue() {
		if (this.isProcessingQueue || this.eventQueue.length === 0) return;
		this.isProcessingQueue = true;
		while (this.eventQueue.length > 0) {
			const batch = this.eventQueue.splice(0, 10);
			await Promise.allSettled(batch.map(async (eventFn) => {
				try {
					await eventFn();
				} catch (error) {
					console.error("Error processing flywheel event:", error);
				}
			}));
			if (this.eventQueue.length > 0) await new Promise((resolve) => setTimeout(resolve, 100));
		}
		this.isProcessingQueue = false;
	}
	async getFlywheelMetrics(_timePeriod = "month") {
		const socialStats = await this.social.getUnifiedAnalytics();
		const journeys = Array.from(this.customerJourney.values());
		const awarenessUsers = journeys.filter((j) => j.segment === "awareness").length;
		const educationUsers = journeys.filter((j) => j.segment === "education").length;
		const enablementUsers = journeys.filter((j) => j.segment === "enablement").length;
		const advocacyUsers = journeys.filter((j) => j.segment === "advocacy").length;
		const totalUsers = journeys.length;
		const loopStrength = totalUsers > 0 ? (educationUsers + enablementUsers + advocacyUsers) / totalUsers : 0;
		const awarenessToEducation = awarenessUsers > 0 ? educationUsers / awarenessUsers : 0;
		const educationToEnablement = educationUsers > 0 ? enablementUsers / educationUsers : 0;
		const enablementToAdvocacy = enablementUsers > 0 ? advocacyUsers / enablementUsers : 0;
		const revenueByProduct = this.calculateRevenueByProduct();
		const totalRevenue = Object.values(revenueByProduct).reduce((sum, val) => sum + val, 0);
		const avgRevenuePerUser = totalUsers > 0 ? totalRevenue / totalUsers : 0;
		return {
			awareness: socialStats.totalFollowers,
			education: educationUsers,
			enablement: enablementUsers,
			advocacy: advocacyUsers,
			loopStrength: Math.round(loopStrength * 100),
			conversionRates: {
				awarenessToEducation: Math.round(awarenessToEducation * 100),
				educationToEnablement: Math.round(educationToEnablement * 100),
				enablementToAdvocacy: Math.round(enablementToAdvocacy * 100)
			},
			revenue: {
				total: totalRevenue,
				byProduct: revenueByProduct,
				lifetimeValue: avgRevenuePerUser
			}
		};
	}
	calculateRevenueByProduct() {
		const revenueMap = {};
		for (const journey of this.customerJourney.values()) {
			const purchases = journey.touchpoints.filter((t) => t.action === "purchase");
			for (const purchase of purchases) {
				const amount = purchase.data?.amount || 99.99;
				revenueMap[purchase.product] = (revenueMap[purchase.product] || 0) + amount;
			}
		}
		return revenueMap;
	}
	async updateFlywheelMetrics() {
		const metrics = await this.getFlywheelMetrics();
		console.log("Updated flywheel metrics:", metrics);
	}
	async getCustomerInsights() {
		const journeys = Array.from(this.customerJourney.values());
		const segmentCounts = journeys.reduce((acc, journey) => {
			acc[journey.segment] = (acc[journey.segment] || 0) + 1;
			return acc;
		}, {});
		const productCounts = journeys.reduce((acc, journey) => {
			journey.products.forEach((product) => {
				acc[product] = (acc[product] || 0) + 1;
			});
			return acc;
		}, {});
		return {
			segments: segmentCounts,
			topProducts: Object.entries(productCounts).map(([product, users]) => ({
				product,
				users
			})).sort((a, b) => b.users - a.users).slice(0, 5),
			engagementTrend: this.calculateEngagementTrend()
		};
	}
	calculateEngagementTrend() {
		const journeys = Array.from(this.customerJourney.values());
		const now = /* @__PURE__ */ new Date();
		const lastWeek = /* @__PURE__ */ new Date(now.getTime() - 10080 * 60 * 1e3);
		const twoWeeksAgo = /* @__PURE__ */ new Date(now.getTime() - 336 * 60 * 60 * 1e3);
		const recentActivity = journeys.filter((j) => j.lastActive > lastWeek).length;
		const previousActivity = journeys.filter((j) => j.lastActive > twoWeeksAgo && j.lastActive <= lastWeek).length;
		if (recentActivity > previousActivity * 1.1) return "growing";
		if (recentActivity < previousActivity * .9) return "declining";
		return "stable";
	}
};
async function runFlywheelExample() {
	const flywheel = new BoldMindFlywheel({
		maxRetries: 3,
		delayBetweenPosts: 1e3,
		batchSize: 5
	});
	await flywheel.trackCustomerJourney("user-123", {
		product: "amebogist",
		action: "view",
		data: { article: "tech-revolution" }
	});
	await flywheel.trackCustomerJourney("user-123", {
		product: "educenter",
		action: "signup",
		data: { course: "react-masterclass" }
	});
	await flywheel.trackCustomerJourney("user-123", {
		product: "ai-receptionist",
		action: "purchase",
		data: {
			amount: 299.99,
			plan: "pro"
		}
	});
	await flywheel.trackCustomerJourney("user-123", {
		product: "ai-receptionist",
		action: "share",
		data: { platform: "twitter" }
	});
	const metrics = await flywheel.getFlywheelMetrics();
	console.log("Flywheel Metrics:", metrics);
	const insights = await flywheel.getCustomerInsights();
	console.log("Customer Insights:", insights);
	return {
		flywheel,
		metrics,
		insights
	};
}

//#endregion
//#region src/cross-app-tracking.ts
var CrossAppTracker = class CrossAppTracker {
	constructor() {
		this.userJourneys = /* @__PURE__ */ new Map();
	}
	static getInstance() {
		if (!CrossAppTracker.instance) CrossAppTracker.instance = new CrossAppTracker();
		return CrossAppTracker.instance;
	}
	trackNavigation(userId, fromProduct, toProduct) {
		const event = {
			userId,
			eventType: "navigation",
			fromProduct,
			toProduct,
			timestamp: (/* @__PURE__ */ new Date()).toISOString(),
			metadata: { userAgent: typeof navigator !== "undefined" ? navigator.userAgent : void 0 }
		};
		this.addToJourney(userId, event);
		this.sendToAnalytics(event);
	}
	trackConversion(userId, product, amount) {
		const event = {
			userId,
			eventType: "conversion",
			fromProduct: product,
			timestamp: (/* @__PURE__ */ new Date()).toISOString(),
			metadata: { amount }
		};
		this.addToJourney(userId, event);
		this.sendToAnalytics(event);
	}
	addToJourney(userId, event) {
		if (!this.userJourneys.has(userId)) this.userJourneys.set(userId, []);
		this.userJourneys.get(userId).push(event);
		if (this.userJourneys.get(userId).length > 100) this.userJourneys.set(userId, this.userJourneys.get(userId).slice(-100));
	}
	sendToAnalytics(event) {
		console.log("Cross-app analytics:", event);
	}
	getUserJourney(userId) {
		return this.userJourneys.get(userId) || [];
	}
	getProductAffinity(userId) {
		const journey = this.getUserJourney(userId);
		const affinity = {};
		journey.forEach((event) => {
			affinity[event.fromProduct] = (affinity[event.fromProduct] || 0) + 1;
			if (event.toProduct) affinity[event.toProduct] = (affinity[event.toProduct] || 0) + 1;
		});
		return affinity;
	}
	getRecommendedProducts(userId) {
		const affinity = this.getProductAffinity(userId);
		const userProducts = Object.keys(affinity);
		const recommendations = /* @__PURE__ */ new Set();
		userProducts.forEach((productSlug) => {
			const product = BOLDMIND_PRODUCTS.find((p) => p.slug === productSlug);
			if (product) {
				BOLDMIND_PRODUCTS.filter((p) => p.category === product.category && p.slug !== productSlug).forEach((p) => recommendations.add(p.slug));
				product.tags.forEach((tag) => {
					BOLDMIND_PRODUCTS.filter((p) => p.tags.includes(tag) && p.slug !== productSlug).forEach((p) => recommendations.add(p.slug));
				});
			}
		});
		return Array.from(recommendations).slice(0, 5);
	}
};
const crossAppTracker = CrossAppTracker.getInstance();

//#endregion
//#region src/index.ts
const analytics = {
	pageview: (url) => {
		if (typeof window !== "undefined" && window.gtag) window.gtag("config", process.env["NEXT_PUBLIC_GA_ID"], { page_path: url });
	},
	event: ({ action, category, label, value }) => {
		if (typeof window !== "undefined" && window.gtag) window.gtag("event", action, {
			event_category: category,
			event_label: label,
			value
		});
	}
};
const mixpanel = {
	track: (eventName, properties) => {
		if (typeof window !== "undefined" && window.mixpanel) window.mixpanel.track(eventName, properties);
	},
	identify: (userId) => {
		if (typeof window !== "undefined" && window.mixpanel) window.mixpanel.identify(userId);
	},
	people: { set: (properties) => {
		if (typeof window !== "undefined" && window.mixpanel) window.mixpanel.people.set(properties);
	} }
};
const posthog = {
	capture: (eventName, properties) => {
		if (typeof window !== "undefined" && window.posthog) window.posthog.capture(eventName, properties);
	},
	identify: (userId, properties) => {
		if (typeof window !== "undefined" && window.posthog) window.posthog.identify(userId, properties);
	}
};
function trackEvent({ eventName, properties, userId }) {
	analytics.event({
		action: eventName,
		category: properties?.["category"] || "General",
		label: properties?.["label"],
		value: properties?.["value"]
	});
	mixpanel.track(eventName, properties);
	posthog.capture(eventName, properties);
	if (userId) {
		mixpanel.identify(userId);
		posthog.identify(userId, properties);
	}
}
const Events = {
	USER_REGISTERED: "user_registered",
	USER_LOGGED_IN: "user_logged_in",
	USER_LOGGED_OUT: "user_logged_out",
	USER_UPDATED_PROFILE: "user_updated_profile",
	PRODUCT_VIEWED: "product_viewed",
	PRODUCT_ADDED_TO_CART: "product_added_to_cart",
	PRODUCT_PURCHASED: "product_purchased",
	PAYMENT_INITIATED: "payment_initiated",
	PAYMENT_SUCCESS: "payment_success",
	PAYMENT_FAILED: "payment_failed",
	SUBSCRIPTION_STARTED: "subscription_started",
	SUBSCRIPTION_RENEWED: "subscription_renewed",
	SUBSCRIPTION_CANCELLED: "subscription_cancelled",
	ARTICLE_VIEWED: "article_viewed",
	VIDEO_PLAYED: "video_played",
	DOWNLOAD_STARTED: "download_started",
	LEAD_CAPTURED: "lead_captured",
	FORM_SUBMITTED: "form_submitted",
	EMAIL_SUBSCRIBED: "email_subscribed",
	AI_GENERATION_STARTED: "ai_generation_started",
	AI_GENERATION_COMPLETED: "ai_generation_completed",
	AUTOMATION_TRIGGERED: "automation_triggered"
};
function trackPageView(url) {
	analytics.pageview(url);
	posthog.capture("$pageview", { url });
}
function trackUserSignup(userId, email, method) {
	trackEvent({
		eventName: Events.USER_REGISTERED,
		properties: {
			email,
			method
		},
		userId
	});
}
function trackPurchase(userId, amount, product) {
	trackEvent({
		eventName: Events.PRODUCT_PURCHASED,
		properties: {
			amount,
			product,
			currency: "NGN"
		},
		userId
	});
}
function trackSubscription(userId, plan, amount, interval) {
	trackEvent({
		eventName: Events.SUBSCRIPTION_STARTED,
		properties: {
			plan,
			amount,
			interval,
			currency: "NGN"
		},
		userId
	});
}

//#endregion
export { BoldMindFlywheel, CrossAppTracker, Events, analytics, crossAppTracker, mixpanel, posthog, runFlywheelExample, trackEvent, trackPageView, trackPurchase, trackSubscription, trackUserSignup };
//# sourceMappingURL=index.js.map