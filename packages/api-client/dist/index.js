Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

//#region src/client.ts
var ApiError = class extends Error {
	constructor(status, code, message) {
		super(message);
		this.status = status;
		this.code = code;
		this.name = "ApiError";
	}
};
let _accessToken = null;
function setAccessToken(token) {
	_accessToken = token;
}
function getAccessToken() {
	return _accessToken;
}
let _config = { baseUrl: (typeof process !== "undefined" ? process.env["NEXT_PUBLIC_API_URL"] : void 0)?.replace(/\/$/, "") ?? "http://localhost:4001/api/v1" };
function configure(config) {
	_config = {
		..._config,
		...config
	};
}
async function apiFetch(path, options = {}) {
	const { _skipRefresh, next, ...rest } = options;
	const headers = {
		"Content-Type": "application/json",
		Accept: "application/json",
		...options.headers ?? {}
	};
	if (_accessToken) headers["Authorization"] = `Bearer ${_accessToken}`;
	const res = await fetch(`${_config.baseUrl}${path}`, {
		...rest,
		credentials: "include",
		headers,
		...next ? { next } : {}
	});
	if (res.status === 401 && !_skipRefresh) {
		if (await tryRefresh()) return apiFetch(path, {
			...options,
			_skipRefresh: true
		});
		_config.onUnauthorized?.();
		throw new ApiError(401, "UNAUTHORIZED", "Session expired");
	}
	if (!res.ok) {
		let code = "UNKNOWN_ERROR";
		let message = `Request failed: ${res.status}`;
		try {
			const body = await res.json();
			code = body.code ?? body.error ?? code;
			message = body.message ?? message;
		} catch {}
		throw new ApiError(res.status, code, message);
	}
	if (res.status === 204) return void 0;
	return res.json();
}
async function apiUpload(path, form, method = "POST") {
	const headers = { Accept: "application/json" };
	if (_accessToken) headers["Authorization"] = `Bearer ${_accessToken}`;
	const res = await fetch(`${_config.baseUrl}${path}`, {
		method,
		credentials: "include",
		headers,
		body: form
	});
	if (!res.ok) {
		const body = await res.json().catch(() => ({}));
		throw new ApiError(res.status, body["code"] ?? "UPLOAD_FAILED", body["message"] ?? "Upload failed");
	}
	return res.json();
}
async function tryRefresh() {
	try {
		const res = await fetch(`${_config.baseUrl}/auth/refresh`, {
			method: "POST",
			credentials: "include",
			headers: { "Content-Type": "application/json" }
		});
		if (!res.ok) return false;
		const body = await res.json();
		const token = body.data?.accessToken ?? body.accessToken;
		if (token) setAccessToken(token);
		return true;
	} catch {
		return false;
	}
}
function qs(params) {
	const p = new URLSearchParams();
	for (const [key, val] of Object.entries(params)) if (val !== void 0 && val !== null && val !== "") p.set(key, String(val));
	const str = p.toString();
	return str ? `?${str}` : "";
}

//#endregion
//#region src/auth.api.ts
const authAPI = {
	register: (payload) => apiFetch("/auth/register", {
		method: "POST",
		body: JSON.stringify(payload)
	}),
	login: (payload) => apiFetch("/auth/login", {
		method: "POST",
		body: JSON.stringify(payload)
	}),
	refresh: () => apiFetch("/auth/refresh", { method: "POST" }),
	logout: () => apiFetch("/auth/logout", { method: "POST" }),
	logoutAll: () => apiFetch("/auth/logout-all", { method: "POST" }),
	me: () => apiFetch("/auth/me", { next: { revalidate: 0 } }),
	verifyEmail: (payload) => apiFetch("/auth/verify-email", {
		method: "POST",
		body: JSON.stringify(payload)
	}),
	forgotPassword: (payload) => apiFetch("/auth/forgot-password", {
		method: "POST",
		body: JSON.stringify(payload)
	}),
	resetPassword: (payload) => apiFetch("/auth/reset-password", {
		method: "POST",
		body: JSON.stringify(payload)
	}),
	changePassword: (payload) => apiFetch("/auth/change-password", {
		method: "PATCH",
		body: JSON.stringify(payload)
	}),
	updateUserRole: (userId, role) => apiFetch(`/auth/users/${userId}/role`, {
		method: "PATCH",
		body: JSON.stringify({ role })
	}),
	googleOAuthUrl: (redirectUrl, isExternal = false) => {
		const base = (typeof process !== "undefined" ? process.env["NEXT_PUBLIC_API_URL"] : void 0)?.replace(/\/$/, "") ?? "http://localhost:4001/api/v1";
		const url = new URL(`${base}/auth/google`);
		url.searchParams.set("redirect", redirectUrl);
		if (isExternal) url.searchParams.set("external", "1");
		return url.toString();
	}
};

//#endregion
//#region src/users.api.ts
const usersAPI = {
	list: (params) => apiFetch(`/users${qs({ ...params })}`),
	dashboard: () => apiFetch("/users/dashboard", { next: { revalidate: 0 } }),
	get: (id) => apiFetch(`/users/${id}`),
	update: (id, data) => apiFetch(`/users/${id}`, {
		method: "PATCH",
		body: JSON.stringify(data)
	}),
	updateProfile: (id, payload) => apiFetch(`/users/${id}/profile`, {
		method: "PATCH",
		body: JSON.stringify(payload)
	}),
	activity: (id) => apiFetch(`/users/${id}/activity`),
	ban: (id) => apiFetch(`/users/${id}/ban`, { method: "DELETE" })
};

//#endregion
//#region src/payment.api.ts
const paymentAPI = {
	initialize: (payload) => apiFetch("/payment/initialize", {
		method: "POST",
		body: JSON.stringify(payload)
	}),
	verify: (reference) => apiFetch(`/payment/verify/${reference}`, { next: { revalidate: 0 } }),
	history: () => apiFetch("/payment/history", { next: { revalidate: 0 } }),
	subscriptions: () => apiFetch("/payment/subscriptions", { next: { revalidate: 0 } }),
	checkAccess: (productSlug) => apiFetch(`/payment/access/${productSlug}`, { next: { revalidate: 60 } }),
	joinWaitlist: (data) => apiFetch("/payment/waitlist", {
		method: "POST",
		body: JSON.stringify(data)
	})
};

//#endregion
//#region src/amebogist.api.ts
const amebogistAPI = {
	list: (params) => apiFetch(`/amebogist/articles${qs({ ...params })}`, { next: {
		revalidate: 60,
		tags: ["amebo-articles"]
	} }),
	search: (query, page = 1) => apiFetch(`/amebogist/search${qs({
		q: query,
		page
	})}`, { next: { revalidate: 30 } }),
	trending: (limit = 8) => apiFetch(`/amebogist/articles/trending${qs({ limit })}`, { next: {
		revalidate: 300,
		tags: ["amebo-trending"]
	} }),
	featured: () => apiFetch("/amebogist/articles/featured", { next: { revalidate: 300 } }),
	categories: () => apiFetch("/amebogist/categories", { next: {
		revalidate: 3600,
		tags: ["amebo-categories"]
	} }),
	trends: () => apiFetch("/amebogist/articles/trends", { next: { revalidate: 600 } }),
	getBySlug: (slug) => apiFetch(`/amebogist/articles/${slug}`, { next: {
		revalidate: 60,
		tags: [`amebo-article-${slug}`]
	} }),
	create: (payload) => apiFetch("/amebogist/articles", {
		method: "POST",
		body: JSON.stringify(payload)
	}),
	update: (id, payload) => apiFetch(`/amebogist/articles/${id}`, {
		method: "PATCH",
		body: JSON.stringify(payload)
	}),
	delete: (id) => apiFetch(`/amebogist/articles/${id}`, { method: "DELETE" }),
	publish: (id) => apiFetch(`/amebogist/articles/${id}/publish`, { method: "PATCH" }),
	archive: (id) => apiFetch(`/amebogist/articles/${id}/archive`, { method: "PATCH" }),
	feature: (id) => apiFetch(`/amebogist/articles/${id}/feature`, { method: "PATCH" }),
	react: (id, reaction) => apiFetch(`/amebogist/articles/${id}/react`, {
		method: "POST",
		body: JSON.stringify({ reaction })
	}),
	recordView: (slug) => apiFetch(`/amebogist/articles/${slug}/view`, { method: "POST" }),
	generateAI: (prompt) => apiFetch("/amebogist/articles/generate-ai", {
		method: "POST",
		body: JSON.stringify({ prompt })
	}),
	videoFactory: (id) => apiFetch(`/amebogist/articles/${id}/video-factory`, { method: "POST" }),
	comments: {
		list: (articleId, page = 1) => apiFetch(`/amebogist/articles/${articleId}/comments${qs({ page })}`),
		create: (articleId, content) => apiFetch(`/amebogist/articles/${articleId}/comments`, {
			method: "POST",
			body: JSON.stringify({ content })
		}),
		delete: (commentId) => apiFetch(`/amebogist/comments/${commentId}`, { method: "DELETE" }),
		react: (commentId, reaction) => apiFetch(`/amebogist/comments/${commentId}/react`, {
			method: "PATCH",
			body: JSON.stringify({ reaction })
		}),
		flag: (commentId) => apiFetch(`/amebogist/comments/${commentId}/flag`, { method: "PATCH" })
	},
	creator: {
		myArticles: (params) => apiFetch(`/amebogist/creator/my-articles${qs({ ...params })}`),
		stats: () => apiFetch("/amebogist/creator/stats"),
		meStats: () => apiFetch("/amebogist/me/stats")
	},
	rss: {
		feed: () => `${(typeof process !== "undefined" ? process.env["NEXT_PUBLIC_API_URL"] : "") ?? ""}/amebogist/rss`,
		categoryFeed: (category) => `${(typeof process !== "undefined" ? process.env["NEXT_PUBLIC_API_URL"] : "") ?? ""}/amebogist/rss/${category}`
	}
};

//#endregion
//#region src/educenter.api.ts
const educenterAPI = {
	subjects: (examType) => apiFetch(`/educenter/subjects/${examType}`, { next: { revalidate: 3600 } }),
	questionsPreview: (params) => apiFetch(`/educenter/questions/preview${qs({ ...params })}`, { next: { revalidate: 300 } }),
	cbt: {
		start: (payload) => apiFetch("/educenter/cbt/start", {
			method: "POST",
			body: JSON.stringify(payload)
		}),
		mock: (payload) => apiFetch("/educenter/cbt/mock", {
			method: "POST",
			body: JSON.stringify(payload)
		}),
		submit: (sessionId, payload) => apiFetch(`/educenter/cbt/${sessionId}/submit`, {
			method: "POST",
			body: JSON.stringify(payload)
		}),
		abandon: (sessionId) => apiFetch(`/educenter/cbt/${sessionId}/abandon`, { method: "POST" }),
		review: (sessionId) => apiFetch(`/educenter/cbt/${sessionId}/review`)
	},
	sessions: (params) => apiFetch(`/educenter/sessions${qs({ ...params })}`),
	dashboard: () => apiFetch("/educenter/dashboard", { next: { revalidate: 0 } }),
	analytics: (examType, subject) => apiFetch(`/educenter/analytics/${examType}/${subject}`),
	streak: {
		get: () => apiFetch("/educenter/streak", { next: { revalidate: 0 } }),
		setGoal: (dailyGoal) => apiFetch("/educenter/streak/goal", {
			method: "PATCH",
			body: JSON.stringify({ dailyGoal })
		})
	},
	leaderboard: {
		global: (params) => apiFetch(`/educenter/leaderboard${qs({ ...params })}`),
		myRank: (params) => apiFetch(`/educenter/leaderboard/my-rank${qs({ ...params })}`)
	},
	aiTutor: (payload) => apiFetch("/educenter/ai-tutor", {
		method: "POST",
		body: JSON.stringify(payload)
	}),
	studyPlan: (payload) => apiFetch("/educenter/study-plan", {
		method: "POST",
		body: JSON.stringify(payload)
	}),
	courses: {
		list: (params) => apiFetch(`/educenter/courses${qs({ ...params })}`, { next: { revalidate: 300 } }),
		get: (slug) => apiFetch(`/educenter/courses/${slug}`, { next: { revalidate: 300 } }),
		marketingPlaybooks: () => apiFetch("/educenter/courses/marketing-playbooks", { next: { revalidate: 3600 } }),
		aiToolsTraining: () => apiFetch("/educenter/courses/ai-tools-training", { next: { revalidate: 3600 } }),
		create: (data) => apiFetch("/educenter/courses", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		enroll: (courseId) => apiFetch(`/educenter/courses/${courseId}/enroll`, { method: "POST" }),
		updateProgress: (courseId, payload) => apiFetch(`/educenter/courses/${courseId}/progress`, {
			method: "PATCH",
			body: JSON.stringify(payload)
		}),
		publish: (courseId) => apiFetch(`/educenter/courses/${courseId}/publish`, { method: "PATCH" })
	}
};

//#endregion
//#region src/planai.api.ts
const planaiAPI = {
	jobs: {
		list: () => apiFetch("/planai/jobs"),
		get: (id) => apiFetch(`/planai/jobs/${id}`)
	},
	planning: {
		generate: (data) => apiFetch("/planai/planning/generate", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		pitchDeck: (data) => apiFetch("/planai/planning/pitch-deck", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		myJobs: () => apiFetch("/planai/planning/jobs"),
		getJob: (id) => apiFetch(`/planai/planning/jobs/${id}`),
		downloadJob: (id) => `${(typeof process !== "undefined" ? process.env["NEXT_PUBLIC_API_URL"] : "") ?? ""}/planai/planning/jobs/${id}/download`,
		templates: () => apiFetch("/planai/planning/templates", { next: { revalidate: 3600 } })
	},
	finance: {
		forecast: (data) => apiFetch("/planai/finance/forecast", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		scenario: (data) => apiFetch("/planai/finance/scenario", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		breakEven: (data) => apiFetch("/planai/finance/break-even", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		myForecasts: () => apiFetch("/planai/finance/forecasts"),
		getForecast: (id) => apiFetch(`/planai/finance/forecasts/${id}`),
		exchangeRate: () => apiFetch("/planai/finance/exchange-rate", { next: { revalidate: 3600 } })
	},
	branding: {
		logo: (data) => apiFetch("/planai/branding/logo", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		brandKit: (data) => apiFetch("/planai/branding/brand-kit", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		flyer: (data) => apiFetch("/planai/branding/flyer", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		colorPalette: (data) => apiFetch("/planai/branding/color-palette", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		myJobs: () => apiFetch("/planai/branding/jobs")
	},
	marketing: {
		createEmailCampaign: (data) => apiFetch("/planai/marketing/campaign/email", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		sendCampaign: (id) => apiFetch(`/planai/marketing/campaign/${id}/send`, { method: "POST" }),
		generateSubjectLines: (data) => apiFetch("/planai/marketing/generate/subject-lines", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		generateEmailCopy: (data) => apiFetch("/planai/marketing/generate/email-copy", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		whatsappBroadcast: (data) => apiFetch("/planai/marketing/whatsapp/broadcast", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		campaignAnalytics: (campaignId) => apiFetch(`/planai/marketing/analytics/${campaignId}`)
	},
	credibility: {
		createPortfolio: (data) => apiFetch("/planai/credibility/portfolio", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		getPortfolio: (userId) => apiFetch(`/planai/credibility/portfolio/${userId}`),
		linkedinOptimize: (data) => apiFetch("/planai/credibility/linkedin-optimize", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		generateResume: (data) => apiFetch("/planai/credibility/resume", {
			method: "POST",
			body: JSON.stringify(data)
		})
	},
	investor: {
		safeAgreement: (data) => apiFetch("/planai/investor/safe-agreement", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		dataRoom: (data) => apiFetch("/planai/investor/data-room", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		dueDiligence: (data) => apiFetch("/planai/investor/due-diligence-checklist", {
			method: "POST",
			body: JSON.stringify(data ?? {})
		}),
		investorUpdate: (data) => apiFetch("/planai/investor/investor-update", {
			method: "POST",
			body: JSON.stringify(data)
		})
	},
	analytics: {
		overview: () => apiFetch("/planai/analytics/overview"),
		report: (data) => apiFetch("/planai/analytics/report", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		revenue: () => apiFetch("/planai/analytics/revenue"),
		growthInsights: () => apiFetch("/planai/analytics/growth-insights")
	},
	hr: (data) => apiFetch("/planai/hr", {
		method: "POST",
		body: JSON.stringify(data)
	}),
	legal: (data) => apiFetch("/planai/legal", {
		method: "POST",
		body: JSON.stringify(data)
	}),
	operations: (data) => apiFetch("/planai/operations", {
		method: "POST",
		body: JSON.stringify(data)
	}),
	emailScraper: {
		search: (data) => apiFetch("/planai/emailscraper/search", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		verify: (email) => apiFetch("/planai/emailscraper/verify", {
			method: "POST",
			body: JSON.stringify({ email })
		}),
		bulkVerify: (emails) => apiFetch("/planai/emailscraper/bulk-verify", {
			method: "POST",
			body: JSON.stringify({ emails })
		}),
		leads: (params) => apiFetch(`/planai/emailscraper/leads${qs({ ...params })}`),
		exportLeads: (params) => `${(typeof process !== "undefined" ? process.env["NEXT_PUBLIC_API_URL"] : "") ?? ""}/planai/emailscraper/leads/export${qs({ ...params })}`,
		createList: (data) => apiFetch("/planai/emailscraper/lists", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		lists: () => apiFetch("/planai/emailscraper/lists"),
		jobs: () => apiFetch("/planai/emailscraper/jobs")
	}
};
const receptionistAPI = {
	setup: (data) => apiFetch("/receptionist/setup", {
		method: "POST",
		body: JSON.stringify(data)
	}),
	getConfig: () => apiFetch("/receptionist/my"),
	updateConfig: (data) => apiFetch("/receptionist/my", {
		method: "PATCH",
		body: JSON.stringify(data)
	}),
	toggle: () => apiFetch("/receptionist/my/toggle", { method: "PATCH" }),
	conversations: {
		list: () => apiFetch("/receptionist/conversations"),
		get: (phone) => apiFetch(`/receptionist/conversations/${phone}`),
		reply: (phone, message) => apiFetch(`/receptionist/conversations/${phone}/reply`, {
			method: "POST",
			body: JSON.stringify({ message })
		}),
		resolve: (phone) => apiFetch(`/receptionist/conversations/${phone}/resolve`, { method: "PATCH" })
	},
	knowledge: {
		add: (data) => apiFetch("/receptionist/knowledge", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		list: () => apiFetch("/receptionist/knowledge"),
		delete: (id) => apiFetch(`/receptionist/knowledge/${id}`, { method: "DELETE" })
	},
	analytics: () => apiFetch("/receptionist/analytics"),
	admin: {
		all: () => apiFetch("/receptionist/admin/all"),
		suspend: (id) => apiFetch(`/receptionist/admin/${id}/suspend`, { method: "PATCH" })
	}
};
const storefrontsAPI = {
	get: (slug) => apiFetch(`/storefronts/${slug}`, { next: { revalidate: 300 } }),
	products: (slug) => apiFetch(`/storefronts/${slug}/products`, { next: { revalidate: 120 } }),
	getProduct: (productId) => apiFetch(`/storefronts/products/${productId}`),
	placeOrder: (slug, data) => apiFetch(`/storefronts/${slug}/orders`, {
		method: "POST",
		body: JSON.stringify(data)
	}),
	owner: {
		create: (data) => apiFetch("/storefronts", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		myStores: () => apiFetch("/storefronts/owner/my-stores"),
		update: (storeId, data) => apiFetch(`/storefronts/owner/${storeId}`, {
			method: "PATCH",
			body: JSON.stringify(data)
		}),
		delete: (storeId) => apiFetch(`/storefronts/owner/${storeId}`, { method: "DELETE" }),
		dashboard: (storeId) => apiFetch(`/storefronts/owner/${storeId}/dashboard`),
		addProduct: (storeId, data) => apiFetch(`/storefronts/owner/${storeId}/products`, {
			method: "POST",
			body: JSON.stringify(data)
		}),
		updateProduct: (storeId, productId, data) => apiFetch(`/storefronts/owner/${storeId}/products/${productId}`, {
			method: "PATCH",
			body: JSON.stringify(data)
		}),
		deleteProduct: (storeId, productId) => apiFetch(`/storefronts/owner/${storeId}/products/${productId}`, { method: "DELETE" }),
		orders: (storeId) => apiFetch(`/storefronts/owner/${storeId}/orders`),
		updateOrder: (storeId, orderId, data) => apiFetch(`/storefronts/owner/${storeId}/orders/${orderId}`, {
			method: "PATCH",
			body: JSON.stringify(data)
		})
	}
};

//#endregion
//#region src/fitness.api.ts
const fitnessAPI = {
	getProfile: () => apiFetch("/fitness/profile", { next: { revalidate: 0 } }),
	updateProfile: (data) => apiFetch("/fitness/profile", {
		method: "PATCH",
		body: JSON.stringify(data)
	}),
	plans: {
		generate: (data) => apiFetch("/fitness/plans/generate", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		list: () => apiFetch("/fitness/plans"),
		get: (id) => apiFetch(`/fitness/plans/${id}`)
	},
	workouts: {
		log: (data) => apiFetch("/fitness/workouts", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		list: () => apiFetch("/fitness/workouts")
	},
	meals: {
		log: (data) => apiFetch("/fitness/meals", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		list: () => apiFetch("/fitness/meals"),
		analyze: (data) => apiFetch("/fitness/meals/analyze", {
			method: "POST",
			body: JSON.stringify(data)
		})
	},
	metrics: {
		log: (data) => apiFetch("/fitness/metrics", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		list: () => apiFetch("/fitness/metrics")
	},
	dashboard: () => apiFetch("/fitness/dashboard", { next: { revalidate: 0 } })
};

//#endregion
//#region src/os.api.ts
const osAPI = {
	workspaces: {
		create: (data) => apiFetch("/os/workspaces", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		list: () => apiFetch("/os/workspaces"),
		get: (id) => apiFetch(`/os/workspaces/${id}`),
		update: (id, data) => apiFetch(`/os/workspaces/${id}`, {
			method: "PATCH",
			body: JSON.stringify(data)
		}),
		delete: (id) => apiFetch(`/os/workspaces/${id}`, { method: "DELETE" }),
		members: {
			add: (workspaceId, data) => apiFetch(`/os/workspaces/${workspaceId}/members`, {
				method: "POST",
				body: JSON.stringify(data)
			}),
			remove: (workspaceId, targetUserId) => apiFetch(`/os/workspaces/${workspaceId}/members/${targetUserId}`, { method: "DELETE" }),
			updateRole: (workspaceId, targetUserId, role) => apiFetch(`/os/workspaces/${workspaceId}/members/${targetUserId}/role`, {
				method: "PATCH",
				body: JSON.stringify({ role })
			})
		},
		projects: {
			create: (workspaceId, data) => apiFetch(`/os/workspaces/${workspaceId}/projects`, {
				method: "POST",
				body: JSON.stringify(data)
			}),
			list: (workspaceId) => apiFetch(`/os/workspaces/${workspaceId}/projects`)
		},
		tasks: {
			create: (workspaceId, data) => apiFetch(`/os/workspaces/${workspaceId}/tasks`, {
				method: "POST",
				body: JSON.stringify(data)
			}),
			list: (workspaceId) => apiFetch(`/os/workspaces/${workspaceId}/tasks`)
		}
	},
	tasks: {
		update: (taskId, data) => apiFetch(`/os/tasks/${taskId}`, {
			method: "PATCH",
			body: JSON.stringify(data)
		}),
		delete: (taskId) => apiFetch(`/os/tasks/${taskId}`, { method: "DELETE" })
	},
	dashboard: () => apiFetch("/os/dashboard", { next: { revalidate: 0 } })
};

//#endregion
//#region src/media.api.ts
const mediaAPI = {
	upload: (file, folder) => {
		const form = new FormData();
		form.append("file", file);
		if (folder) form.append("folder", folder);
		return apiUpload("/media/upload", form);
	},
	uploadBatch: (files, folder) => {
		const form = new FormData();
		files.forEach((f) => form.append("files", f));
		if (folder) form.append("folder", folder);
		return apiUpload("/media/upload/batch", form);
	},
	presign: (data) => apiFetch("/media/presign", {
		method: "POST",
		body: JSON.stringify(data)
	}),
	list: () => apiFetch("/media"),
	delete: (id) => apiFetch(`/media/${id}`, { method: "DELETE" }),
	admin: { all: () => apiFetch("/media/admin/all") }
};

//#endregion
//#region src/notifications.api.ts
const notificationsAPI = {
	list: (params) => apiFetch(`/notifications${qs({ ...params })}`, { next: { revalidate: 0 } }),
	markRead: (ids) => apiFetch("/notifications/read", {
		method: "POST",
		body: JSON.stringify(ids ? { ids } : {})
	}),
	delete: (id) => apiFetch(`/notifications/${id}`, { method: "DELETE" }),
	push: {
		subscribe: (subscription) => apiFetch("/notifications/push/subscribe", {
			method: "POST",
			body: JSON.stringify(subscription)
		}),
		unsubscribe: (endpoint) => apiFetch("/notifications/push/unsubscribe", {
			method: "POST",
			body: JSON.stringify({ endpoint })
		})
	},
	admin: {
		broadcastPush: (data) => apiFetch("/notifications/broadcast/push", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		broadcastEmail: (data) => apiFetch("/notifications/broadcast/email", {
			method: "POST",
			body: JSON.stringify(data)
		})
	}
};

//#endregion
//#region src/automation.api.ts
const automationAPI = {
	social: {
		schedule: (data) => apiFetch("/automation/social/schedule", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		calendar: (data) => apiFetch("/automation/social/calendar", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		captions: (data) => apiFetch("/automation/social/captions", {
			method: "POST",
			body: JSON.stringify(data)
		})
	},
	email: { campaign: (data) => apiFetch("/automation/email/campaign", {
		method: "POST",
		body: JSON.stringify(data)
	}) },
	scraper: {
		run: (data) => apiFetch("/automation/scraper/run", {
			method: "POST",
			body: JSON.stringify(data)
		}),
		verify: (data) => apiFetch("/automation/scraper/verify", {
			method: "POST",
			body: JSON.stringify(data)
		})
	},
	trigger: (data) => apiFetch("/automation/trigger", {
		method: "POST",
		body: JSON.stringify(data)
	}),
	queues: () => apiFetch("/automation/queues")
};

//#endregion
//#region src/admin.api.ts
const adminAPI = {
	stats: () => apiFetch("/admin/stats", { next: { revalidate: 60 } }),
	users: {
		list: (params) => apiFetch(`/admin/users${qs({ ...params })}`),
		updateRole: (id, role) => apiFetch(`/admin/users/${id}/role`, {
			method: "PATCH",
			body: JSON.stringify({ role })
		})
	},
	revenue: () => apiFetch("/admin/revenue", { next: { revalidate: 300 } }),
	waitlist: {
		list: (params) => apiFetch(`/admin/waitlist${qs({ ...params })}`),
		invite: (productSlug, emails) => apiFetch(`/admin/waitlist/${productSlug}/invite`, {
			method: "POST",
			body: JSON.stringify({ emails })
		})
	},
	logs: (params) => apiFetch(`/admin/logs${qs({ ...params })}`)
};

//#endregion
//#region src/index.ts
/**
* Unified API client — mirrors the shape apps already use via boldMindAPI.*
*
* @example
* const { data } = await boldMindAPI.auth.login({ email, password });
* const { data } = await boldMindAPI.educenter.dashboard();
* const { data } = await boldMindAPI.payments.verify('txn_ref');
*/
const boldMindAPI = {
	auth: authAPI,
	users: usersAPI,
	payments: paymentAPI,
	amebogist: amebogistAPI,
	educenter: educenterAPI,
	planai: planaiAPI,
	receptionist: receptionistAPI,
	storefronts: storefrontsAPI,
	fitness: fitnessAPI,
	os: osAPI,
	media: mediaAPI,
	notifications: notificationsAPI,
	automation: automationAPI,
	admin: adminAPI
};

//#endregion
exports.ApiError = ApiError;
exports.adminAPI = adminAPI;
exports.amebogistAPI = amebogistAPI;
exports.apiFetch = apiFetch;
exports.apiUpload = apiUpload;
exports.authAPI = authAPI;
exports.automationAPI = automationAPI;
exports.boldMindAPI = boldMindAPI;
exports.configure = configure;
exports.educenterAPI = educenterAPI;
exports.fitnessAPI = fitnessAPI;
exports.getAccessToken = getAccessToken;
exports.mediaAPI = mediaAPI;
exports.notificationsAPI = notificationsAPI;
exports.osAPI = osAPI;
exports.paymentAPI = paymentAPI;
exports.planaiAPI = planaiAPI;
exports.qs = qs;
exports.receptionistAPI = receptionistAPI;
exports.setAccessToken = setAccessToken;
exports.storefrontsAPI = storefrontsAPI;
exports.usersAPI = usersAPI;
//# sourceMappingURL=index.js.map