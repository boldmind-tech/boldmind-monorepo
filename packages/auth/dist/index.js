import React, { useCallback, useEffect, useRef } from "react";
import { create } from "zustand";
import { Fragment, jsx } from "react/jsx-runtime";

//#region src/config.ts
const AUTH_CONFIG = {
	apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4001/api/v1",
	cookieName: "boldmind_sso",
	refreshTokenKey: "bm_rt",
	sessionKey: "bm_session",
	refreshThresholdMs: 120 * 1e3
};

//#endregion
//#region src/api.ts
var AuthApiError = class extends Error {
	constructor(message, statusCode, error) {
		super(message);
		this.statusCode = statusCode;
		this.error = error;
		this.name = "AuthApiError";
	}
};
async function authFetch(path, options = {}) {
	const url = `${AUTH_CONFIG.apiUrl}${path}`;
	const res = await fetch(url, {
		...options,
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
			...options.headers
		}
	});
	if (!res.ok) {
		let body = {
			message: res.statusText,
			statusCode: res.status
		};
		try {
			body = await res.json();
		} catch {}
		throw new AuthApiError(body.message, res.status, body.error);
	}
	if (res.status === 204) return void 0;
	return res.json();
}
const authApi = {
	register(input) {
		return authFetch("/auth/register", {
			method: "POST",
			body: JSON.stringify(input)
		});
	},
	login(input) {
		return authFetch("/auth/login", {
			method: "POST",
			body: JSON.stringify(input)
		});
	},
	logout(refreshToken) {
		return authFetch("/auth/logout", {
			method: "POST",
			body: JSON.stringify({ refreshToken })
		});
	},
	logoutAll(accessToken) {
		return authFetch("/auth/logout-all", {
			method: "POST",
			headers: { Authorization: `Bearer ${accessToken}` }
		});
	},
	refresh(refreshToken) {
		return authFetch("/auth/refresh", {
			method: "POST",
			body: JSON.stringify({ refreshToken })
		});
	},
	getMe(accessToken) {
		return authFetch("/auth/me", { headers: { Authorization: `Bearer ${accessToken}` } });
	},
	verifyEmail(email, code) {
		return authFetch("/auth/verify-email", {
			method: "POST",
			body: JSON.stringify({
				email,
				code,
				purpose: "email_verify"
			})
		});
	},
	forgotPassword(email) {
		return authFetch("/auth/forgot-password", {
			method: "POST",
			body: JSON.stringify({ email })
		});
	},
	resetPassword(email, code, newPassword) {
		return authFetch("/auth/reset-password", {
			method: "POST",
			body: JSON.stringify({
				email,
				code,
				newPassword
			})
		});
	},
	googleLoginUrl() {
		return `${AUTH_CONFIG.apiUrl}/auth/google`;
	}
};

//#endregion
//#region src/store.ts
const useAuthStore = create((set) => ({
	status: "loading",
	user: null,
	session: null,
	setSession(session) {
		set({
			session,
			user: session.user,
			status: "authenticated"
		});
	},
	setUser(user) {
		set((state) => ({
			user,
			session: state.session ? {
				...state.session,
				user
			} : null
		}));
	},
	setStatus(status) {
		set({ status });
	},
	clearSession() {
		set({
			status: "unauthenticated",
			user: null,
			session: null
		});
	}
}));

//#endregion
//#region src/token.ts
function isBrowser() {
	return typeof window !== "undefined";
}
function saveRefreshToken(token) {
	if (!isBrowser()) return;
	try {
		localStorage.setItem(AUTH_CONFIG.refreshTokenKey, token);
	} catch {}
}
function getRefreshToken() {
	if (!isBrowser()) return null;
	try {
		return localStorage.getItem(AUTH_CONFIG.refreshTokenKey);
	} catch {
		return null;
	}
}
function clearRefreshToken() {
	if (!isBrowser()) return;
	try {
		localStorage.removeItem(AUTH_CONFIG.refreshTokenKey);
		localStorage.removeItem(AUTH_CONFIG.sessionKey);
	} catch {}
}
function decodeJwt(token) {
	try {
		const parts = token.split(".");
		if (parts.length !== 3) return null;
		const padded = parts[1].replace(/-/g, "+").replace(/_/g, "/");
		const json = atob(padded);
		return JSON.parse(json);
	} catch {
		return null;
	}
}
function isTokenExpired(token) {
	const payload = decodeJwt(token);
	if (!payload) return true;
	return payload.exp * 1e3 < Date.now();
}
function isTokenNearExpiry(token) {
	const payload = decodeJwt(token);
	if (!payload) return true;
	return payload.exp * 1e3 - Date.now() < AUTH_CONFIG.refreshThresholdMs;
}
function getTokenExpiryMs(token) {
	const payload = decodeJwt(token);
	if (!payload) return 0;
	return payload.exp * 1e3;
}

//#endregion
//#region src/client/use-auth.ts
function useAuth() {
	const { status, user, session, setSession, clearSession } = useAuthStore();
	const register = useCallback(async (input) => {
		const tokens = await authApi.register(input);
		saveRefreshToken(tokens.refreshToken);
		setSession({
			user: await authApi.getMe(tokens.accessToken),
			accessToken: tokens.accessToken,
			expiresAt: getTokenExpiryMs(tokens.accessToken)
		});
	}, [setSession]);
	const login = useCallback(async (input) => {
		const tokens = await authApi.login(input);
		saveRefreshToken(tokens.refreshToken);
		setSession({
			user: await authApi.getMe(tokens.accessToken),
			accessToken: tokens.accessToken,
			expiresAt: getTokenExpiryMs(tokens.accessToken)
		});
	}, [setSession]);
	const logout = useCallback(async () => {
		const rt = localStorage.getItem("bm_rt");
		try {
			if (rt) await authApi.logout(rt);
		} catch {}
		clearRefreshToken();
		clearSession();
	}, [clearSession]);
	const logoutAll = useCallback(async () => {
		const accessToken = session?.accessToken;
		try {
			if (accessToken) await authApi.logoutAll(accessToken);
		} catch {}
		clearRefreshToken();
		clearSession();
	}, [session, clearSession]);
	const loginWithGoogle = useCallback(() => {
		window.location.href = authApi.googleLoginUrl();
	}, []);
	return {
		status,
		user,
		session,
		isAuthenticated: status === "authenticated",
		isLoading: status === "loading",
		register,
		login,
		logout,
		logoutAll,
		loginWithGoogle
	};
}

//#endregion
//#region src/client/auth-provider.tsx
let refreshTimer = null;
function scheduleRefresh(accessToken, onRefresh) {
	if (refreshTimer) clearTimeout(refreshTimer);
	const delay = getTokenExpiryMs(accessToken) - Date.now() - 6e4;
	if (delay > 0) refreshTimer = setTimeout(onRefresh, delay);
}
function AuthProvider({ children }) {
	const { setSession, setStatus, clearSession } = useAuthStore();
	const initialized = useRef(false);
	const silentRefresh = React.useCallback(async () => {
		const rt = getRefreshToken();
		if (!rt) {
			clearSession();
			return;
		}
		try {
			const tokens = await authApi.refresh(rt);
			saveRefreshToken(tokens.refreshToken);
			setSession({
				user: await authApi.getMe(tokens.accessToken),
				accessToken: tokens.accessToken,
				expiresAt: getTokenExpiryMs(tokens.accessToken)
			});
			scheduleRefresh(tokens.accessToken, silentRefresh);
		} catch {
			clearRefreshToken();
			clearSession();
		}
	}, [setSession, clearSession]);
	useEffect(() => {
		if (initialized.current) return;
		initialized.current = true;
		if (!getRefreshToken()) {
			setStatus("unauthenticated");
			return;
		}
		silentRefresh();
		return () => {
			if (refreshTimer) clearTimeout(refreshTimer);
		};
	}, [silentRefresh, setStatus]);
	return /* @__PURE__ */ jsx(Fragment, { children });
}

//#endregion
//#region src/sso.ts
const SSO_COOKIE_NAME = "boldmind_sso";
const HUB_URL = process.env["NEXT_PUBLIC_HUB_URL"] || (process.env.NODE_ENV === "production" ? "https://boldmind.ng" : "http://localhost:3000s");
const SAFE_DOMAINS = [
	"boldmind.ng",
	"amebogist.ng",
	"educenter.com.ng",
	"localhost",
	"127.0.0.0"
];
function buildHubLoginUrl(returnUrl) {
	const url = new URL(`${HUB_URL}/login`);
	url.searchParams.set("return_url", returnUrl);
	return url.toString();
}
function buildHubRegisterUrl(returnUrl) {
	const url = new URL(`${HUB_URL}/register`);
	if (returnUrl) url.searchParams.set("return_url", returnUrl);
	return url.toString();
}
function redirectToHubLogin(returnUrl) {
	if (typeof window === "undefined") return;
	window.location.href = buildHubLoginUrl(returnUrl ?? window.location.href);
}
function isSafeBoldMindUrl(url) {
	try {
		const { hostname } = new URL(url);
		return SAFE_DOMAINS.some((d) => hostname === d || hostname.endsWith(`.${d}`));
	} catch {
		return false;
	}
}
function safeRedirectUrl(url, fallback = "/dashboard") {
	if (!url) return fallback;
	if (url.startsWith("/")) return url;
	return isSafeBoldMindUrl(url) ? url : fallback;
}
function getAppNameFromReturnUrl(url) {
	try {
		const { hostname } = new URL(url);
		if (hostname.includes("amebogist")) return "AmeboGist";
		if (hostname.includes("educenter")) return "EduCenter";
		if (hostname.includes("planai")) return "PlanAI Suite";
		if (hostname.includes("fit")) return "NaijaFit";
		if (hostname.includes("os.")) return "BoldMind OS";
		if (hostname.includes("studio")) return "Amebo Studio";
		if (hostname.includes("tools")) return "BoldMind Tools";
		if (hostname.includes("skills")) return "SkillGig";
		return "BoldMind";
	} catch {
		return "BoldMind";
	}
}

//#endregion
export { AUTH_CONFIG, AuthApiError, AuthProvider, SSO_COOKIE_NAME, authApi, buildHubLoginUrl, buildHubRegisterUrl, clearRefreshToken, decodeJwt, getAppNameFromReturnUrl, getRefreshToken, getTokenExpiryMs, isSafeBoldMindUrl, isTokenExpired, isTokenNearExpiry, redirectToHubLogin, safeRedirectUrl, saveRefreshToken, useAuth, useAuthStore };
//# sourceMappingURL=index.js.map