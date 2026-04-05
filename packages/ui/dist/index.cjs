'use client';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") {
		for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) {
				__defProp(to, key, {
					get: ((k) => from[k]).bind(null, key),
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
			}
		}
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
let react = require("react");
react = __toESM(react);
let next_link = require("next/link");
next_link = __toESM(next_link);
let next_image = require("next/image");
next_image = __toESM(next_image);
let framer_motion = require("framer-motion");
let lucide_react = require("lucide-react");
let _boldmind_utils = require("@boldmind/utils");
let react_jsx_runtime = require("react/jsx-runtime");
let clsx = require("clsx");
let tailwind_merge = require("tailwind-merge");
let next_script = require("next/script");
next_script = __toESM(next_script);
let next_navigation = require("next/navigation");

//#region src/providers/theme-provider.tsx
const STORAGE = {
	THEME: "bm:theme",
	PRODUCT: "bm:product-theme",
	DYSLEXIA: "bm:dyslexia"
};
function readStorage(key) {
	try {
		return localStorage.getItem(key);
	} catch {
		return null;
	}
}
function writeStorage(key, value) {
	try {
		localStorage.setItem(key, value);
	} catch {}
}
function removeStorage(key) {
	try {
		localStorage.removeItem(key);
	} catch {}
}
function buildProductTheme(slug) {
	const product = (0, _boldmind_utils.getProductBySlug)(slug);
	const colors = (0, _boldmind_utils.getProductColors)(slug);
	const theme = (0, _boldmind_utils.getProductTheme)(slug);
	if (!product) return {
		slug,
		name: slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
		description: "",
		icon: "🚀",
		status: "LIVE",
		colors: {
			primary: colors.primary,
			secondary: colors.secondary,
			accent: colors.accent,
			background: theme.background
		}
	};
	return {
		slug: product.slug,
		name: product.name,
		description: product.description,
		icon: product.icon,
		status: product.status,
		colors: {
			primary: colors.primary,
			secondary: colors.secondary,
			accent: colors.accent,
			background: theme.background
		}
	};
}
function resolveThemeClass(theme) {
	if (theme !== "system") return theme;
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
const ThemeContext = (0, react.createContext)(null);
function ThemeProvider({ children, defaultTheme = "light", forceProductSlug, defaultProduct, defaultDyslexia = false }) {
	const [theme, _setTheme] = (0, react.useState)(defaultTheme);
	const [productSlug, _setProductSlug] = (0, react.useState)(() => {
		if (forceProductSlug) return forceProductSlug;
		if (defaultProduct) return defaultProduct.slug;
		return "boldmind-hub";
	});
	const [dyslexiaMode, _setDyslexia] = (0, react.useState)(defaultDyslexia);
	const prevSlugRef = (0, react.useRef)(productSlug);
	(0, react.useEffect)(() => {
		const storedTheme = readStorage(STORAGE.THEME);
		const storedDyslexia = readStorage(STORAGE.DYSLEXIA);
		const storedProduct = !forceProductSlug && !defaultProduct ? readStorage(STORAGE.PRODUCT) ?? (0, _boldmind_utils.detectCurrentProduct)() ?? "boldmind-hub" : void 0;
		if (storedTheme && storedTheme !== theme) _setTheme(storedTheme);
		if (storedProduct && storedProduct !== productSlug) _setProductSlug(storedProduct);
		if (storedDyslexia !== null) _setDyslexia(storedDyslexia === "true");
	}, []);
	const productTheme = (0, react.useMemo)(() => defaultProduct && defaultProduct.slug === productSlug ? defaultProduct : buildProductTheme(productSlug), [productSlug, defaultProduct]);
	const currentProduct = (0, react.useMemo)(() => (0, _boldmind_utils.getProductBySlug)(productSlug) ?? null, [productSlug]);
	(0, react.useEffect)(() => {
		const root = document.documentElement;
		root.style.setProperty("--product-primary", productTheme.colors.primary);
		root.style.setProperty("--product-secondary", productTheme.colors.secondary);
		root.style.setProperty("--product-accent", productTheme.colors.accent);
		root.style.setProperty("--product-background", productTheme.colors.background);
		root.dataset.product = productTheme.slug;
		root.dataset.theme = theme;
		root.dataset.dyslexia = String(dyslexiaMode);
		const activeClass = resolveThemeClass(theme);
		root.classList.remove("light", "dark");
		root.classList.add(activeClass);
		const prevClass = `theme-${prevSlugRef.current.replace(/-/g, "")}`;
		const nextClass = `theme-${productTheme.slug.replace(/-/g, "")}`;
		if (prevClass !== nextClass) root.classList.remove(prevClass);
		root.classList.add(nextClass);
		prevSlugRef.current = productTheme.slug;
		root.classList.toggle("dyslexia-mode", dyslexiaMode);
		document.body.classList.toggle("dyslexia-friendly", dyslexiaMode);
		if (theme !== "system") return;
		const mq = window.matchMedia("(prefers-color-scheme: dark)");
		const onSystemChange = (e) => {
			root.classList.remove("light", "dark");
			root.classList.add(e.matches ? "dark" : "light");
			root.dataset.theme = e.matches ? "dark" : "light";
		};
		mq.addEventListener("change", onSystemChange);
		return () => mq.removeEventListener("change", onSystemChange);
	}, [
		theme,
		productTheme,
		dyslexiaMode
	]);
	const setTheme = (0, react.useCallback)((t) => {
		_setTheme(t);
		writeStorage(STORAGE.THEME, t);
	}, []);
	const toggleTheme = (0, react.useCallback)(() => {
		setTheme(theme === "light" ? "dark" : theme === "dark" ? "system" : "light");
	}, [theme, setTheme]);
	const switchProduct = (0, react.useCallback)((slug) => {
		if (!forceProductSlug) {
			_setProductSlug(slug);
			writeStorage(STORAGE.PRODUCT, slug);
		}
	}, [forceProductSlug]);
	const toggleDyslexiaMode = (0, react.useCallback)(() => {
		const next = !dyslexiaMode;
		_setDyslexia(next);
		if (next) writeStorage(STORAGE.DYSLEXIA, "true");
		else removeStorage(STORAGE.DYSLEXIA);
	}, [dyslexiaMode]);
	const availableProducts = (0, react.useMemo)(() => _boldmind_utils.BOLDMIND_PRODUCTS, []);
	const liveProducts = (0, react.useMemo)(() => (0, _boldmind_utils.getLiveProducts)(), []);
	const buildingProducts = (0, react.useMemo)(() => (0, _boldmind_utils.getBuildingProducts)(), []);
	const value = (0, react.useMemo)(() => ({
		theme,
		setTheme,
		toggleTheme,
		productTheme,
		currentProduct,
		switchProduct,
		dyslexiaMode,
		toggleDyslexiaMode,
		allProducts: _boldmind_utils.productThemes,
		allColors: _boldmind_utils.boldmindColors,
		availableProducts,
		liveProducts,
		buildingProducts
	}), [
		theme,
		setTheme,
		toggleTheme,
		productTheme,
		currentProduct,
		switchProduct,
		dyslexiaMode,
		toggleDyslexiaMode,
		availableProducts,
		liveProducts,
		buildingProducts
	]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ThemeContext.Provider, {
		value,
		children
	});
}
function useTheme() {
	const ctx = (0, react.useContext)(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
	return ctx;
}
/** Convenience hook — only returns product-related fields */
function useProductTheme() {
	const { productTheme, currentProduct, allProducts, allColors, availableProducts, liveProducts, buildingProducts, switchProduct } = useTheme();
	return {
		productTheme,
		currentProduct,
		allProducts,
		allColors,
		availableProducts,
		liveProducts,
		buildingProducts,
		switchProduct
	};
}
function ThemeToggle({ className }) {
	const { theme, toggleTheme } = useTheme();
	const icon = theme === "light" ? "☀️" : theme === "dark" ? "🌙" : "🖥️";
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
		onClick: toggleTheme,
		className,
		"aria-label": `Switch theme (current: ${theme})`,
		type: "button",
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			children: icon
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
			className: "sr-only",
			children: ["Theme: ", theme]
		})]
	});
}
/**
* DyslexiaModeToggle — available on ALL BoldMind products.
* Pass `alwaysShow` to skip the product-slug guard entirely.
*/
function DyslexiaModeToggle({ className, alwaysShow = false }) {
	const { dyslexiaMode, toggleDyslexiaMode, currentProduct } = useTheme();
	if (!(alwaysShow || currentProduct?.tags.some((t) => [
		"dyslexia",
		"adhd",
		"neurodivergent"
	].includes(t)) || currentProduct?.slug === "boldmind-os")) return null;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
		onClick: toggleDyslexiaMode,
		className,
		"aria-pressed": dyslexiaMode,
		"aria-label": `${dyslexiaMode ? "Disable" : "Enable"} OpenDyslexic font mode`,
		type: "button",
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			children: "🧠"
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: dyslexiaMode ? "Dyslexia Mode: ON" : "Dyslexia Mode: OFF" })]
	});
}

//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return (0, tailwind_merge.twMerge)((0, clsx.clsx)(inputs));
}
function formatCurrency(amount) {
	return new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: "NGN",
		minimumFractionDigits: 0
	}).format(amount);
}
function formatDate(date) {
	const d = typeof date === "string" ? new Date(date) : date;
	return new Intl.DateTimeFormat("en-NG", { dateStyle: "medium" }).format(d);
}
function truncateText(text, maxLength) {
	if (text.length <= maxLength) return text;
	return text.slice(0, maxLength) + "...";
}
function getProductFromPath(path) {
	for (const product of [
		"amebogist",
		"educenter",
		"planai",
		"boldmind-os",
		"naija-fither",
		"emailscraper-pro",
		"safe-ai"
	]) if (path.includes(`/${product}`) || path.startsWith(product)) return product;
	return "boldmind-hub";
}
function detectCurrentProduct() {
	if (typeof window === "undefined") return "boldmind-hub";
	const hostname = window.location.hostname;
	const pathname = window.location.pathname;
	console.log("Detection debug:", {
		hostname,
		pathname
	});
	if (pathname.includes("/educenter") || pathname.startsWith("/educenter")) return "educenter";
	if (pathname.includes("/amebogist") || pathname.startsWith("/amebogist")) return "amebogist";
	if (pathname.includes("/planai") || pathname.startsWith("/planai")) return "planai";
	if (pathname.includes("/boldmind-os") || pathname.startsWith("/boldmind-os")) return "boldmind-os";
	const domainProductMap = {
		"boldmind.ng": "boldmind-hub",
		"www.boldmind.ng": "boldmind-hub",
		"amebogist.ng": "amebogist",
		"www.amebogist.ng": "amebogist",
		"educenter.com.ng": "educenter",
		"www.educenter.com.ng": "educenter",
		"os.boldmind.ng": "boldmind-os",
		"planai.boldmind.ng": "planai",
		"fit.boldmind.ng": "naija-fither",
		"email.boldmind.ng": "emailscraper-pro",
		"safe.boldmind.ng": "safe-ai",
		"localhost": "boldmind-hub"
	};
	if (domainProductMap[hostname]) {
		console.log("Domain match found:", hostname, "->", domainProductMap[hostname]);
		return domainProductMap[hostname];
	}
	if (hostname.includes("localhost")) {
		console.log("Localhost detected, defaulting to boldmind-hub");
		return "boldmind-hub";
	}
	const pathProduct = getProductFromPath(pathname);
	if (pathProduct !== "boldmind-hub") {
		console.log("Path match found:", pathname, "->", pathProduct);
		return pathProduct;
	}
	console.log("Defaulting to boldmind-hub");
	return "boldmind-hub";
}
function getProductThemeClass(product) {
	return `theme-${product.replace(/-/g, "-")}`;
}
function getProductThemeColors(product) {
	const colors = {
		"boldmind-hub": {
			primary: "#00143C",
			secondary: "#FFC800",
			accent: "#2A4A6E"
		},
		"amebogist": {
			primary: "#00A859",
			secondary: "#FFC800",
			accent: "#007A3D"
		},
		"educenter": {
			primary: "#2A4A6E",
			secondary: "#FFFFFF",
			accent: "#1A3452"
		},
		"planai": {
			primary: "#9C27B0",
			secondary: "#FFFFFF",
			accent: "#7B1FA2"
		},
		"boldmind-os": {
			primary: "#E63946",
			secondary: "#FFC800",
			accent: "#B91C1C"
		},
		"naija-fither": {
			primary: "#FF4081",
			secondary: "#9C27B0",
			accent: "#E91E63"
		},
		"emailscraper-pro": {
			primary: "#2196F3",
			secondary: "#FFFFFF",
			accent: "#0D47A1"
		},
		"safe-ai": {
			primary: "#FF5722",
			secondary: "#FFFFFF",
			accent: "#D84315"
		}
	};
	return colors[product] || colors["boldmind-hub"];
}

//#endregion
//#region src/components/SuperNavbar.tsx
/**
* packages/ui/src/components/SuperNavbar.tsx
*
* FIXED:
*  1. Logo + title: when used in boldmind-hub, show the passed `logoSrc` and
*     a passed `brandName` prop — do NOT fall through to `currentProduct.name`
*     from the theme (which was showing whatever product the theme was set to).
*  2. Added `brandName` prop — defaults to `currentProduct?.name` for
*     sub-product apps, but hub passes "BoldMind Hub" explicitly.
*  3. Fixed image fallback initial to use `brandName[0]` not `productInitial`.
*  4. Removed `window.innerWidth/Height` references from SSR-safe particle init.
*  5. Cleaned up unused commented-out code.
*/
const DEFAULT_LINKS = [
	{
		href: "/",
		label: "Home",
		icon: "🏠"
	},
	{
		href: "/features",
		label: "Features",
		icon: "✨"
	},
	{
		href: "/pricing",
		label: "Pricing",
		icon: "💰"
	},
	{
		href: "/docs",
		label: "Docs",
		icon: "📚"
	},
	{
		href: "/contact",
		label: "Contact",
		icon: "✉️"
	}
];
const ICON_MAP = {
	"🏠": /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "🏠" }),
	"✨": /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "✨" }),
	"💰": /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "💰" }),
	"📚": /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "📚" }),
	"✉️": /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "✉️" }),
	"🚀": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Rocket, { className: "w-4 h-4" }),
	"🤖": /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "🤖" }),
	"🎓": /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "🎓" }),
	"📰": /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "📰" })
};
function getIconNode(icon) {
	if (typeof icon !== "string") return icon;
	return ICON_MAP[icon] ?? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Sparkles, { className: "w-4 h-4" });
}
function SuperNavbar({ logoSrc = "/logo.png", brandName, links, cta, theme = "dark", sticky = true, animated = true, showParticles = false, showThemeControls = true, className = "", onLinkClick }) {
	const [isOpen, setIsOpen] = (0, react.useState)(false);
	const [scrolled, setScrolled] = (0, react.useState)(false);
	const [imageError, setImageError] = (0, react.useState)(false);
	const [hoveredLink, setHoveredLink] = (0, react.useState)(null);
	const [hoveredCta, setHoveredCta] = (0, react.useState)(false);
	const [activeLink, setActiveLink] = (0, react.useState)("");
	const [showSparkle, setShowSparkle] = (0, react.useState)(false);
	const [mounted, setMounted] = (0, react.useState)(false);
	const { productTheme } = useTheme();
	const mobileMenuRef = (0, react.useRef)(null);
	const menuButtonRef = (0, react.useRef)(null);
	const currentProduct = (0, _boldmind_utils.getProductBySlug)(productTheme.slug) ?? _boldmind_utils.BOLDMIND_PRODUCTS[0];
	const resolvedBrand = brandName ?? currentProduct?.name ?? "BoldMind";
	const productColor = productTheme.colors.primary;
	(0, react.useEffect)(() => {
		setMounted(true);
	}, []);
	(0, react.useEffect)(() => {
		const onScroll = () => {
			const y = window.scrollY;
			setScrolled(y > 20);
			if (y > 100) {
				setShowSparkle(true);
				setTimeout(() => setShowSparkle(false), 1e3);
			}
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, react.useEffect)(() => {
		const handler = (e) => {
			if (isOpen && mobileMenuRef.current && menuButtonRef.current && !mobileMenuRef.current.contains(e.target) && !menuButtonRef.current.contains(e.target)) setIsOpen(false);
		};
		document.addEventListener("mousedown", handler);
		return () => document.removeEventListener("mousedown", handler);
	}, [isOpen]);
	const handleNavClick = (href, isExternal) => {
		setActiveLink(href);
		setIsOpen(false);
		onLinkClick?.(href);
		if (isExternal || href.startsWith("http")) return;
		if (href.startsWith("#")) {
			document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
			window.history.pushState(null, "", href);
		}
	};
	const getThemeColors = () => {
		const m = productColor.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
		if (m) {
			const [r, g, b] = [
				parseInt(m[1], 16),
				parseInt(m[2], 16),
				parseInt(m[3], 16)
			];
			if (theme === "transparent") return {
				bg: scrolled ? `rgba(${r},${g},${b},0.95)` : "transparent",
				text: "#FFF",
				border: "transparent"
			};
			return {
				bg: scrolled ? productColor : `rgba(${r},${g},${b},0.95)`,
				text: "#FFF",
				border: "#374151"
			};
		}
		return {
			bg: scrolled ? "#00143C" : "rgba(0,20,60,0.95)",
			text: "#FFF",
			border: "#374151"
		};
	};
	const navTheme = getThemeColors();
	const navLinks = links ?? DEFAULT_LINKS;
	const defaultCTA = currentProduct?.status === "LIVE" && currentProduct?.links?.website ? {
		href: currentProduct.links.website,
		label: "Visit Website",
		variant: "primary",
		icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.ExternalLink, { className: "w-4 h-4" })
	} : {
		href: "https://wa.me/2349138349271",
		label: "Get Started",
		variant: "primary",
		icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Zap, { className: "w-4 h-4" })
	};
	const navCTA = cta ?? defaultCTA;
	const ctaClass = (() => {
		const base = "px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 text-sm";
		switch (navCTA.variant) {
			case "secondary": return `${base} bg-white text-blue-600 hover:bg-gray-100 hover:scale-105`;
			case "glow": return `${base} bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105`;
			case "gradient": return `${base} bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:shadow-xl hover:scale-105`;
			default: return `${base} bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:shadow-lg hover:scale-105`;
		}
	})();
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
		showParticles && animated && mounted && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 pointer-events-none z-40",
			children: Array.from({ length: 20 }).map((_, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.div, {
				className: "absolute w-1 h-1 bg-blue-400 rounded-full",
				initial: {
					x: Math.random() * window.innerWidth,
					y: -10,
					opacity: 0
				},
				animate: {
					y: window.innerHeight,
					opacity: [
						0,
						1,
						0
					]
				},
				transition: {
					duration: Math.random() * 3 + 2,
					repeat: Infinity,
					delay: Math.random() * 5
				}
			}, i))
		}),
		/* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.AnimatePresence, { children: showSparkle && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			className: "fixed top-4 right-4 z-50",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.div, {
				animate: { rotate: 360 },
				transition: {
					duration: 1,
					repeat: Infinity,
					ease: "linear"
				},
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Sparkles, { className: "w-6 h-6 text-yellow-400" })
			})
		}) }),
		/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(framer_motion.motion.nav, {
			initial: { y: -100 },
			animate: { y: 0 },
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 20
			},
			style: {
				backgroundColor: navTheme.bg,
				color: navTheme.text,
				borderBottom: `1px solid ${navTheme.border}`
			},
			className: cn("w-full z-50 transition-all duration-300 backdrop-blur-lg", sticky && "fixed top-0", className),
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-center h-20",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.div, {
							whileHover: { scale: 1.05 },
							className: "flex items-center space-x-3",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(next_link.default, {
								href: "/",
								className: "flex items-center space-x-3 no-underline",
								onClick: () => handleNavClick("/"),
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "relative w-10 h-10 flex-shrink-0",
									children: !imageError ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(next_image.default, {
										src: logoSrc,
										alt: resolvedBrand,
										fill: true,
										className: "object-contain",
										onError: () => setImageError(true),
										priority: true
									}), animated && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.div, {
										animate: { rotate: 360 },
										transition: {
											duration: 20,
											repeat: Infinity,
											ease: "linear"
										},
										className: "absolute inset-0 border-2 border-transparent border-t-blue-500 border-r-purple-500 rounded-full"
									})] }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: "w-10 h-10 rounded-xl flex items-center justify-center",
										style: { backgroundColor: productColor },
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "text-white font-black text-lg",
											children: resolvedBrand.charAt(0)
										})
									})
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "text-xl font-black tracking-tight",
									style: { color: navTheme.text },
									children: resolvedBrand
								})]
							})
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "hidden md:flex items-center space-x-1",
							children: [
								navLinks.map((link) => {
									const isExt = link.isExternal || link.href.startsWith("http");
									const isHash = link.href.startsWith("#");
									const isActive = activeLink === link.href;
									const inner = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
										getIconNode(link.icon),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "font-medium text-sm",
											children: link.label
										}),
										link.badge && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "px-2 py-0.5 text-xs font-bold bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full",
											children: link.badge
										}),
										isExt && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.ExternalLink, { className: "w-3 h-3 opacity-60" })
									] });
									const itemClass = cn("flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all cursor-pointer", isActive ? "bg-white/20" : "hover:bg-white/10");
									return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "relative",
										onMouseEnter: () => setHoveredLink(link.href),
										onMouseLeave: () => setHoveredLink(null),
										children: [isExt || isHash ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.a, {
											whileHover: { scale: 1.05 },
											whileTap: { scale: .95 },
											href: link.href,
											target: isExt ? "_blank" : void 0,
											rel: isExt ? "noopener noreferrer" : void 0,
											onClick: (e) => {
												if (isHash) {
													e.preventDefault();
													handleNavClick(link.href, isExt);
												}
											},
											className: itemClass,
											children: inner
										}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(next_link.default, {
											href: link.href,
											passHref: true,
											children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.div, {
												whileHover: { scale: 1.05 },
												whileTap: { scale: .95 },
												onClick: () => handleNavClick(link.href),
												className: itemClass,
												children: inner
											})
										}), hoveredLink === link.href && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.div, {
											layoutId: "navbar-hover",
											className: "absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
										})]
									}, link.href);
								}),
								showThemeControls && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "flex items-center space-x-1 ml-2",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ThemeToggle, {}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DyslexiaModeToggle, {})]
								}),
								navCTA && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.div, {
									whileHover: { scale: 1.05 },
									whileTap: { scale: .95 },
									className: "ml-2",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("a", {
										href: navCTA.href,
										target: navCTA.href.startsWith("http") ? "_blank" : "_self",
										className: ctaClass,
										onMouseEnter: () => setHoveredCta(true),
										onMouseLeave: () => setHoveredCta(false),
										onClick: () => onLinkClick?.(navCTA.href),
										children: [
											navCTA.icon ?? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Rocket, { className: "w-4 h-4" }),
											navCTA.label,
											hoveredCta && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.span, {
												animate: { x: [
													0,
													5,
													0
												] },
												transition: { duration: .5 },
												children: "→"
											})
										]
									})
								})
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 md:hidden",
							children: [showThemeControls && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "flex items-center space-x-1",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ThemeToggle, {}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DyslexiaModeToggle, {})]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								ref: menuButtonRef,
								onClick: () => setIsOpen((v) => !v),
								className: "p-2.5 rounded-lg hover:bg-white/10 transition-colors",
								"aria-label": "Toggle menu",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.AnimatePresence, {
									mode: "wait",
									children: isOpen ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.div, {
										initial: {
											rotate: -90,
											opacity: 0
										},
										animate: {
											rotate: 0,
											opacity: 1
										},
										exit: {
											rotate: 90,
											opacity: 0
										},
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.X, { className: "w-5 h-5" })
									}, "close") : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.div, {
										initial: {
											rotate: 90,
											opacity: 0
										},
										animate: {
											rotate: 0,
											opacity: 1
										},
										exit: {
											rotate: -90,
											opacity: 0
										},
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Menu, { className: "w-5 h-5" })
									}, "menu")
								})
							})]
						})
					]
				})
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.div, {
				ref: mobileMenuRef,
				initial: {
					opacity: 0,
					height: 0
				},
				animate: {
					opacity: 1,
					height: "auto"
				},
				exit: {
					opacity: 0,
					height: 0
				},
				style: { backgroundColor: navTheme.bg },
				className: "md:hidden overflow-hidden border-t border-white/10",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "px-4 py-5 space-y-1",
					children: [navLinks.map((link, idx) => {
						const isExt = link.isExternal || link.href.startsWith("http");
						const isHash = link.href.startsWith("#");
						const rowClass = cn("w-full flex items-center justify-between p-3.5 rounded-xl transition-all", activeLink === link.href ? "bg-white/20" : "hover:bg-white/10");
						return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.div, {
							initial: {
								x: -16,
								opacity: 0
							},
							animate: {
								x: 0,
								opacity: 1
							},
							transition: { delay: idx * .07 },
							children: isExt || isHash ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("a", {
								href: link.href,
								target: isExt ? "_blank" : void 0,
								rel: isExt ? "noopener noreferrer" : void 0,
								onClick: (e) => {
									if (isHash) {
										e.preventDefault();
										handleNavClick(link.href, isExt);
									} else handleNavClick(link.href, isExt);
								},
								className: rowClass,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [getIconNode(link.icon), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "font-medium text-sm",
										children: link.label
									})]
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [link.badge && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "px-2 py-0.5 text-xs font-bold bg-orange-500 text-white rounded-full",
										children: link.badge
									}), isExt && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.ExternalLink, { className: "w-3 h-3 opacity-50" })]
								})]
							}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(next_link.default, {
								href: link.href,
								passHref: true,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									onClick: () => handleNavClick(link.href),
									className: rowClass,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [getIconNode(link.icon), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "font-medium text-sm",
											children: link.label
										})]
									}), link.badge && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: "px-2 py-0.5 text-xs font-bold bg-orange-500 text-white rounded-full",
										children: link.badge
									})]
								})
							})
						}, link.href);
					}), navCTA && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.div, {
						initial: {
							scale: .9,
							opacity: 0
						},
						animate: {
							scale: 1,
							opacity: 1
						},
						transition: { delay: navLinks.length * .07 },
						className: "pt-3",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("a", {
							href: navCTA.href,
							target: navCTA.href.startsWith("http") ? "_blank" : "_self",
							className: `block w-full text-center ${ctaClass}`,
							onClick: () => {
								setIsOpen(false);
								onLinkClick?.(navCTA.href);
							},
							children: [navCTA.icon ?? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Zap, { className: "w-4 h-4" }), navCTA.label]
						})
					})]
				})
			}) })]
		}),
		sticky && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: "h-20" })
	] });
}

//#endregion
//#region src/components/SuperFooter.tsx
function SuperFooter({ sections = [], socialLinks = [], newsletter = true, showStats = true, animated = true, className = "", copyright, variant = "default" }) {
	const [email, setEmail] = (0, react.useState)("");
	const [isSubmitting, setIsSubmitting] = (0, react.useState)(false);
	const [isSubmitted, setIsSubmitted] = (0, react.useState)(false);
	const { productTheme } = useTheme();
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	const currentProduct = (0, react.useMemo)(() => {
		const product = (0, _boldmind_utils.getProductBySlug)(productTheme.slug);
		if (product) {
			console.log("✅ Found product:", product.name, "for slug:", productTheme.slug);
			return product;
		}
		console.warn("⚠️ Product not found for slug:", productTheme.slug, "- Falling back to BoldMind Hub");
		return _boldmind_utils.BOLDMIND_PRODUCTS[0];
	}, [productTheme.slug]);
	const liveProducts = (0, react.useMemo)(() => {
		return (0, _boldmind_utils.getLiveProducts)().filter((p) => p.slug !== productTheme.slug).slice(0, 4);
	}, [productTheme.slug]);
	const getIconComponent = (iconString) => {
		return {
			"📰": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Newspaper, { className: "w-4 h-4" }),
			"🎓": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.GraduationCap, { className: "w-4 h-4" }),
			"🤖": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Brain, { className: "w-4 h-4" }),
			"🧠": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Brain, { className: "w-4 h-4" }),
			"🎬": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Video, { className: "w-4 h-4" }),
			"💼": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Briefcase, { className: "w-4 h-4" }),
			"📊": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.TrendingUp, { className: "w-4 h-4" }),
			"💰": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.DollarSign, { className: "w-4 h-4" }),
			"📈": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.TrendingUp, { className: "w-4 h-4" }),
			"🎨": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Palette, { className: "w-4 h-4" }),
			"🛍️": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.ShoppingCart, { className: "w-4 h-4" }),
			"📧": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Mail, { className: "w-4 h-4" }),
			"🔍": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Search, { className: "w-4 h-4" }),
			"🛡️": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Shield, { className: "w-4 h-4" }),
			"💪": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Dumbbell, { className: "w-4 h-4" }),
			"🔧": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Wrench, { className: "w-4 h-4" }),
			"👥": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Users, { className: "w-4 h-4" }),
			"💱": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RefreshCw$1, { className: "w-4 h-4" }),
			"🧾": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Receipt, { className: "w-4 h-4" }),
			"⚡": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Zap, { className: "w-4 h-4" }),
			"🌾": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Sprout, { className: "w-4 h-4" }),
			"✍️": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PenTool, { className: "w-4 h-4" }),
			"🎭": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Theater, { className: "w-4 h-4" }),
			"🎤": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Mic, { className: "w-4 h-4" }),
			"📱": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Smartphone, { className: "w-4 h-4" }),
			"📚": /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.BookOpen, { className: "w-4 h-4" })
		}[iconString] || /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Sparkles, { className: "w-4 h-4" });
	};
	const getDefaultSections = () => {
		const baseSections = [
			{
				title: `${currentProduct?.icon} ${currentProduct?.name}`,
				links: [
					{
						href: "/features",
						label: "Features",
						icon: "✨"
					},
					{
						href: "/pricing",
						label: "Pricing",
						icon: "💰"
					},
					{
						href: "/demo",
						label: "Demo",
						icon: "🎥"
					},
					{
						href: "/docs",
						label: "Documentation",
						icon: "📚"
					},
					...currentProduct?.links?.website ? [{
						href: currentProduct.links.website,
						label: "Live Website",
						icon: "🌐",
						isExternal: true
					}] : []
				]
			},
			{
				title: "🚀 BoldMind Products",
				links: liveProducts.map((product) => ({
					href: `https://${product.slug}.boldmind.ng`,
					label: product.name,
					icon: product.icon,
					isExternal: true
				}))
			},
			{
				title: "🏢 Company",
				links: [
					{
						href: "/about",
						label: "About BoldMind",
						icon: "🏛️"
					},
					{
						href: "/ecosystem",
						label: "Our Ecosystem",
						icon: "🌐"
					},
					{
						href: "/impact",
						label: "Impact",
						icon: "📈"
					},
					{
						href: "/careers",
						label: "Careers",
						icon: "👥",
						badge: "Hiring"
					},
					{
						href: "/contact",
						label: "Contact Us",
						icon: "✉️"
					}
				]
			}
		];
		return sections || baseSections;
	};
	const getSocialLinks = () => {
		const socials = {
			"boldmind-hub": [
				{
					platform: "Twitter",
					url: "https://twitter.com/boldmindtech",
					icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Twitter, { className: "w-5 h-5" })
				},
				{
					platform: "LinkedIn",
					url: "https://linkedin.com/company/boldmind",
					icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Linkedin, { className: "w-5 h-5" })
				},
				{
					platform: "Instagram",
					url: "https://instagram.com/boldmindtech",
					icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Instagram, { className: "w-5 h-5" })
				},
				{
					platform: "GitHub",
					url: "https://github.com/boldmind-tech",
					icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Github, { className: "w-5 h-5" })
				}
			],
			default: [
				{
					platform: "Twitter",
					url: "https://twitter.com/boldmindtech",
					icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Twitter, { className: "w-5 h-5" })
				},
				{
					platform: "LinkedIn",
					url: "https://linkedin.com/company/boldmind",
					icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Linkedin, { className: "w-5 h-5" })
				},
				{
					platform: "Instagram",
					url: "https://instagram.com/boldmindtech",
					icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Instagram, { className: "w-5 h-5" })
				}
			]
		};
		return socialLinks.length > 0 ? socialLinks : socials[productTheme.slug] || socials.default;
	};
	const footerSections = getDefaultSections();
	const displaySocialLinks = getSocialLinks();
	const getStats = () => {
		if (currentProduct?.status !== "LIVE") return [
			{
				icon: lucide_react.TrendingUp,
				value: "Coming",
				label: "Status",
				color: "bg-yellow-500"
			},
			{
				icon: Calendar,
				value: currentProduct?.timeline?.split(" ")[1] || "2026",
				label: "Launch",
				color: "bg-blue-500"
			},
			{
				icon: lucide_react.Users,
				value: currentProduct?.teamSize || "2",
				label: "Team Size",
				color: "bg-purple-500"
			},
			{
				icon: lucide_react.Rocket,
				value: currentProduct?.priority.toString(),
				label: "Priority",
				color: "bg-green-500"
			}
		];
		return [
			{
				icon: lucide_react.Users,
				value: currentProduct?.users || "Growing",
				label: "Users",
				color: "bg-blue-500"
			},
			{
				icon: lucide_react.DollarSign,
				value: `₦${((currentProduct.monthlyRevenue || 0) / 1e3).toFixed(0)}K`,
				label: "Monthly Revenue",
				color: "bg-green-500"
			},
			{
				icon: lucide_react.TrendingUp,
				value: currentProduct.version,
				label: "Version",
				color: "bg-purple-500"
			},
			{
				icon: lucide_react.Shield,
				value: currentProduct.status,
				label: "Status",
				color: "bg-orange-500"
			}
		];
	};
	const stats = getStats();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!email || isSubmitting) return;
		setIsSubmitting(true);
		await new Promise((resolve) => setTimeout(resolve, 1500));
		setIsSubmitted(true);
		setEmail("");
		setTimeout(() => setIsSubmitted(false), 3e3);
		setIsSubmitting(false);
	};
	const productInitial = currentProduct?.name.charAt(0);
	const getProductColor = () => {
		return {
			amebogist: "#10B981",
			educenter: "#3B82F6",
			"boldmind-hub": "#F59E0B",
			"ai-receptionist": "#8B5CF6",
			"boldmind-os": "#EC4899"
		}[productTheme.slug] || productTheme.colors.primary;
	};
	const productColor = getProductColor();
	if (variant === "minimal") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("footer", {
		className: cn("bg-gradient-to-b from-gray-900 to-gray-950 text-white border-t border-white/10", className),
		style: { background: `linear-gradient(to bottom, ${productColor}20, ${productColor}10)` },
		suppressHydrationWarning: true,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto px-4 py-6",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row justify-between items-center gap-4",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "w-10 h-10 rounded-lg flex items-center justify-center transition-transform hover:scale-110",
							style: { backgroundColor: productColor },
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "text-white font-bold text-lg",
								children: productInitial
							})
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "text-lg font-bold",
								children: currentProduct?.name
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "text-xs text-gray-400",
								children: currentProduct?.status === "LIVE" ? "🚀 LIVE" : "🔨 BUILDING"
							})]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "text-gray-400 text-sm text-center",
						children: copyright || `© ${currentYear} ${currentProduct?.name}. ${currentProduct?.description.split(".")[0]}`
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3",
						children: displaySocialLinks.map((social, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
							href: social.url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-gray-400 hover:text-white transition-colors hover:scale-110 p-2 hover:bg-white/5 rounded-lg",
							children: social.icon
						}, index))
					})
				]
			})
		})
	});
	if (variant === "compact") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("footer", {
		className: cn("bg-gray-900 text-white", className),
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto px-4 py-8",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-8",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "w-12 h-12 rounded-xl flex items-center justify-center",
								style: { backgroundColor: productColor },
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "text-white font-black text-xl",
									children: productInitial
								})
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold",
								children: currentProduct?.name
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "text-sm text-gray-400 mt-1",
								children: currentProduct?.category
							})] })]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
							className: "text-gray-300 text-sm",
							children: [currentProduct?.description.substring(0, 120), "..."]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h4", {
						className: "font-semibold mb-4",
						children: "Quick Links"
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: footerSections?.[0]?.links.slice(0, 4).map((link, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(next_link.default, {
							href: link.href,
							target: link.isExternal ? "_blank" : void 0,
							className: "flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm",
							children: [
								link.icon,
								" ",
								link.label
							]
						}, index))
					})] }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h4", {
							className: "font-semibold mb-4",
							children: "Connect"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "flex gap-3",
							children: displaySocialLinks.map((social, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
								href: social.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors",
								children: social.icon
							}, index))
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: "text-gray-400 text-sm mt-4",
							children: copyright || `© ${currentYear} BoldMind Technology`
						})
					] })
				]
			})
		})
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("footer", {
		className: cn("bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden", className),
		style: { background: `linear-gradient(to bottom, ${productColor}15, ${productColor}05)` },
		suppressHydrationWarning: true,
		children: [animated && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 overflow-hidden pointer-events-none",
			children: [...Array(15)].map((_, i) => {
				const x = i * 7 % 100;
				const y = i * 13 % 100;
				return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.div, {
					className: "absolute w-1 h-1 rounded-full",
					style: {
						backgroundColor: `${productColor}30`,
						left: `${x}%`,
						top: `${y}%`
					},
					animate: { y: "-100%" },
					transition: {
						duration: 10 + i * .5,
						repeat: Infinity,
						delay: i * .3
					}
				}, i);
			})
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16",
			children: [
				showStats && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-12",
					children: stats.map((stat, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(framer_motion.motion.div, {
						initial: {
							opacity: 0,
							scale: .9
						},
						whileInView: {
							opacity: 1,
							scale: 1
						},
						viewport: { once: true },
						transition: { delay: index * .1 },
						whileHover: { y: -5 },
						className: "text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-current transition-all group",
						style: {
							borderColor: `${productColor}30`,
							backgroundColor: `${productColor}10`
						},
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "inline-block p-2 rounded-lg mb-3 group-hover:scale-110 transition-transform",
								style: { backgroundColor: productColor },
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(stat.icon, { className: "w-5 h-5 text-white" })
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "text-2xl font-black mb-1",
								style: { color: productColor },
								children: stat.value
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "text-xs text-gray-400",
								children: stat.label
							})
						]
					}, index))
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-4",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 mb-6",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: "w-14 h-14 rounded-xl flex items-center justify-center transition-transform hover:scale-105",
										style: { backgroundColor: productColor },
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "text-white font-black text-2xl",
											children: productInitial
										})
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
										className: "text-2xl font-bold",
										children: currentProduct?.name
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
										className: "text-gray-400",
										children: currentProduct?.category.toUpperCase()
									})] })]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: "text-gray-300 mb-6",
									children: currentProduct?.description
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "flex gap-3",
									children: displaySocialLinks.map((social, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
										href: social.url,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all hover:scale-110",
										style: { color: productColor },
										children: social.icon
									}, index))
								})
							]
						}),
						footerSections.map((section, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-2",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-lg mb-4 flex items-center gap-2",
								children: section.title
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
								className: "space-y-3",
								children: section.links.map((link, linkIndex) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(next_link.default, {
									href: link.href,
									target: link.isExternal ? "_blank" : void 0,
									className: "flex items-center gap-2 text-gray-400 hover:text-white transition-colors group",
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "opacity-60 group-hover:opacity-100",
											children: getIconComponent(link.icon)
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: link.label }),
										link.badge && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: "text-xs px-2 py-0.5 rounded-full bg-white/10",
											children: link.badge
										}),
										link.isExternal && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.ExternalLink, { className: "w-3 h-3 opacity-50" })
									]
								}) }, linkIndex))
							})]
						}, index)),
						newsletter && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-4",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
									className: "font-semibold text-lg mb-4",
									children: "📬 Stay Updated"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
									className: "text-gray-400 mb-4",
									children: [
										"Get the latest updates about ",
										currentProduct?.name,
										" and BoldMind products"
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("form", {
									onSubmit: handleSubmit,
									className: "space-y-3",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
											type: "email",
											value: email,
											onChange: (e) => setEmail(e.target.value),
											placeholder: "Your email address",
											className: "flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-current transition-colors",
											style: { borderColor: `${productColor}30` },
											required: true
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "submit",
											disabled: isSubmitting,
											className: "px-4 py-2 rounded-lg font-medium transition-all disabled:opacity-50",
											style: {
												backgroundColor: productColor,
												color: "white"
											},
											children: isSubmitting ? "Sending..." : isSubmitted ? "🎉 Subscribed!" : "Subscribe"
										})]
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
										className: "text-xs text-gray-500",
										children: "No spam. Unsubscribe anytime."
									})]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "pt-8 border-t border-white/10",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row justify-between items-center gap-4",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "text-gray-400 text-sm",
							children: copyright || `© ${currentYear} BoldMind Technology Solution Enterprise. All rights reserved.`
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-6 text-sm",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(next_link.default, {
									href: "/privacy",
									className: "text-gray-400 hover:text-white transition-colors",
									children: "Privacy Policy"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(next_link.default, {
									href: "/terms",
									className: "text-gray-400 hover:text-white transition-colors",
									children: "Terms of Service"
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(next_link.default, {
									href: "/cookies",
									className: "text-gray-400 hover:text-white transition-colors",
									children: "Cookies"
								})
							]
						})]
					})
				})
			]
		})]
	});
}
function Video(props) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
		...props,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
			x: "2",
			y: "6",
			width: "20",
			height: "12",
			rx: "2"
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M10 9l5 3-5 3V9z" })]
	});
}
function Search(props) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
		...props,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
			cx: "11",
			cy: "11",
			r: "8"
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M21 21l-4.35-4.35" })]
	});
}
function Wrench(props) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
		...props,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" })
	});
}
function Dumbbell(props) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
		...props,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M6.5 6.5l11 11M21 21l-1-1M3 3l1 1M9 4l-2 2m10 10l2-2M4 9l2-2m10 10l2 2M19 4l-2 2m-8 8l-2 2" })
	});
}
function Palette(props) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
		...props,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
				cx: "13.5",
				cy: "6.5",
				r: ".5"
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
				cx: "17.5",
				cy: "10.5",
				r: ".5"
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
				cx: "8.5",
				cy: "7.5",
				r: ".5"
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
				cx: "6.5",
				cy: "12.5",
				r: ".5"
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1-2.76 0-5-2.24-5-5 0-2.76 2.24-5 5-5 2.76 0 5 2.24 5 5 0 1.25-.48 2.45-1.36 3.36-.19.23-.47.37-.77.37-.55 0-1 .45-1 1v2.27c0 .37.2.69.5.86 1.07.63 2.27.91 3.5.91 5.52 0 10-4.48 10-10S17.52 2 12 2z" })
		]
	});
}
function Sprout(props) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
		...props,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M17 8c0-2.21-1.79-4-4-4S9 5.79 9 8s1.79 4 4 4 4-1.79 4-4zM3 8c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm12 8c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4z" })
	});
}
function PenTool(props) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
		...props,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M12 19l7-7 3 3-7 7-3-3z" }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M2 2l7.586 7.586" }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
				cx: "11",
				cy: "11",
				r: "2"
			})
		]
	});
}
function Theater(props) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
		...props,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M18 4l3 3-3 3" }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M18 20l3-3-3-3" }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M3 7h3a5 5 0 0 1 5 5 5 5 0 0 1 5 5h3" })
		]
	});
}
function Calendar(props) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
		...props,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "4",
				width: "18",
				height: "18",
				rx: "2",
				ry: "2"
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("line", {
				x1: "16",
				y1: "2",
				x2: "16",
				y2: "6"
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("line", {
				x1: "8",
				y1: "2",
				x2: "8",
				y2: "6"
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("line", {
				x1: "3",
				y1: "10",
				x2: "21",
				y2: "10"
			})
		]
	});
}
function RefreshCw$1(props) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
		...props,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M23 4v6h-6" }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M1 20v-6h6" }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
		]
	});
}
function Receipt(props) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
		...props,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z" }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M16 8h-6" }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M8 12h8" }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M10 16h4" })
		]
	});
}

//#endregion
//#region src/components/ParticleBackground.tsx
function ParticleBackground({ particleCount = 80, particleColor = "#3B82F6", connectDistance = 150, mouseInteraction = true, className = "" }) {
	const canvasRef = (0, react.useRef)(null);
	const animationRef = (0, react.useRef)();
	const particlesRef = (0, react.useRef)([]);
	const mouseRef = (0, react.useRef)({
		x: 0,
		y: 0,
		radius: 100
	});
	const initParticles = (width, height) => {
		const particles = [];
		for (let i = 0; i < particleCount; i++) {
			const size = Math.random() * 2 + 1;
			particles.push({
				x: Math.random() * width,
				y: Math.random() * height,
				size,
				speedX: (Math.random() - .5) * .5,
				speedY: (Math.random() - .5) * .5,
				color: particleColor,
				opacity: Math.random() * .5 + .2
			});
		}
		particlesRef.current = particles;
	};
	const connectParticles = (ctx, particles) => {
		for (let i = 0; i < particles.length; i++) {
			const p1 = particles[i];
			if (!p1) continue;
			for (let j = i + 1; j < particles.length; j++) {
				const p2 = particles[j];
				if (!p2) continue;
				const dx = p1.x - p2.x;
				const dy = p1.y - p2.y;
				const distance = Math.sqrt(dx * dx + dy * dy);
				if (distance < connectDistance) {
					const opacity = 1 - distance / connectDistance;
					ctx.beginPath();
					ctx.strokeStyle = `${particleColor}${Math.floor(opacity * 40).toString(16).padStart(2, "0")}`;
					ctx.lineWidth = .5;
					ctx.moveTo(p1.x, p1.y);
					ctx.lineTo(p2.x, p2.y);
					ctx.stroke();
				}
			}
		}
	};
	const animate = () => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const width = canvas.width;
		const height = canvas.height;
		ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
		ctx.fillRect(0, 0, width, height);
		const particles = particlesRef.current;
		const mouse = mouseRef.current;
		particles.forEach((particle) => {
			particle.x += particle.speedX;
			particle.y += particle.speedY;
			if (particle.x > width || particle.x < 0) particle.speedX *= -1;
			if (particle.y > height || particle.y < 0) particle.speedY *= -1;
			if (mouseInteraction) {
				const dx = mouse.x - particle.x;
				const dy = mouse.y - particle.y;
				const distance = Math.sqrt(dx * dx + dy * dy);
				if (distance < mouse.radius) {
					const angle = Math.atan2(dy, dx);
					const force = (mouse.radius - distance) / mouse.radius;
					particle.x -= Math.cos(angle) * force * 2;
					particle.y -= Math.sin(angle) * force * 2;
				}
			}
			ctx.beginPath();
			ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
			ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, "0")}`;
			ctx.fill();
		});
		connectParticles(ctx, particles);
		animationRef.current = requestAnimationFrame(animate);
	};
	const handleMouseMove = (e) => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const rect = canvas.getBoundingClientRect();
		mouseRef.current.x = e.clientX - rect.left;
		mouseRef.current.y = e.clientY - rect.top;
	};
	const handleResize = () => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const parent = canvas.parentElement;
		if (!parent) return;
		canvas.width = parent.clientWidth;
		canvas.height = parent.clientHeight;
		initParticles(canvas.width, canvas.height);
	};
	(0, react.useEffect)(() => {
		if (!canvasRef.current) return;
		handleResize();
		animate();
		if (mouseInteraction) window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("resize", handleResize);
		return () => {
			if (animationRef.current) cancelAnimationFrame(animationRef.current);
			if (mouseInteraction) window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("resize", handleResize);
		};
	}, [
		particleCount,
		particleColor,
		mouseInteraction
	]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		className: `absolute inset-0 pointer-events-none ${className}`
	});
}

//#endregion
//#region src/components/Confetti.tsx
function Confetti({ count = 100, colors = [
	"#3B82F6",
	"#8B5CF6",
	"#10B981",
	"#F59E0B",
	"#EF4444"
], shapes = [
	"circle",
	"square",
	"triangle",
	"star"
], duration = 3e3, onComplete }) {
	const [pieces, setPieces] = (0, react.useState)([]);
	const [isActive, setIsActive] = (0, react.useState)(true);
	(0, react.useEffect)(() => {
		const newPieces = [];
		for (let i = 0; i < count; i++) newPieces.push({
			id: i,
			x: Math.random() * 100,
			y: -10,
			rotation: Math.random() * 360,
			scale: Math.random() * .5 + .5,
			color: colors[Math.floor(Math.random() * colors.length)] || "#3B82F6",
			shape: shapes[Math.floor(Math.random() * shapes.length)] || "circle",
			duration: Math.random() * 1e3 + 2e3
		});
		setPieces(newPieces);
		const timer = setTimeout(() => {
			setIsActive(false);
			onComplete?.();
		}, duration);
		return () => clearTimeout(timer);
	}, [
		count,
		colors,
		shapes,
		duration,
		onComplete
	]);
	const renderShape = (shape, color) => {
		const size = 12;
		switch (shape) {
			case "circle": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "rounded-full",
				style: {
					width: size,
					height: size,
					backgroundColor: color
				}
			});
			case "square": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "rounded",
				style: {
					width: size,
					height: size,
					backgroundColor: color
				}
			});
			case "triangle": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { style: {
				width: 0,
				height: 0,
				borderLeft: `${size / 2}px solid transparent`,
				borderRight: `${size / 2}px solid transparent`,
				borderBottom: `${size}px solid ${color}`
			} });
			case "star": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "text-2xl leading-none",
				style: { color },
				children: "★"
			});
			default: return null;
		}
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.AnimatePresence, { children: isActive && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 pointer-events-none z-50 overflow-hidden",
		children: pieces.map((piece) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.div, {
			className: "absolute",
			initial: {
				x: `${piece.x}vw`,
				y: `${piece.y}vh`,
				rotate: 0,
				scale: piece.scale,
				opacity: 1
			},
			animate: {
				x: `${piece.x + (Math.random() - .5) * 50}vw`,
				y: "100vh",
				rotate: piece.rotation + 360,
				scale: piece.scale,
				opacity: 0
			},
			transition: {
				duration: piece.duration / 1e3,
				ease: "easeOut"
			},
			style: {
				left: 0,
				top: 0
			},
			children: renderShape(piece.shape, piece.color)
		}, piece.id))
	}) });
}

//#endregion
//#region src/components/TypewriterEffect.tsx
function TypewriterEffect({ texts, speed = 100, deleteSpeed = 50, delay = 2e3, loop = true, showCursor = true, cursorChar = "▋", cursorBlinkSpeed = 530, className = "", textClassName = "", cursorClassName = "", onComplete }) {
	const [currentTextIndex, setCurrentTextIndex] = (0, react.useState)(0);
	const [currentText, setCurrentText] = (0, react.useState)("");
	const [isDeleting, setIsDeleting] = (0, react.useState)(false);
	const [isPaused, setIsPaused] = (0, react.useState)(false);
	const [cursorVisible, setCursorVisible] = (0, react.useState)(true);
	if (!texts || texts.length === 0) return null;
	(0, react.useEffect)(() => {
		if (!showCursor) return;
		const cursorInterval = setInterval(() => {
			setCursorVisible((prev) => !prev);
		}, cursorBlinkSpeed);
		return () => clearInterval(cursorInterval);
	}, [showCursor, cursorBlinkSpeed]);
	(0, react.useEffect)(() => {
		if (texts.length === 0) return;
		const currentFullText = texts[currentTextIndex] || "";
		let timeout;
		if (!isPaused) {
			if (!isDeleting && currentText.length < currentFullText.length) timeout = setTimeout(() => {
				setCurrentText(currentFullText.substring(0, currentText.length + 1));
			}, speed);
			else if (isDeleting && currentText.length > 0) timeout = setTimeout(() => {
				setCurrentText(currentFullText.substring(0, currentText.length - 1));
			}, deleteSpeed);
			else if (!isDeleting && currentText.length === currentFullText.length) {
				if (currentTextIndex === texts.length - 1 && !loop && onComplete) onComplete();
				timeout = setTimeout(() => {
					setIsDeleting(true);
				}, delay);
			} else if (isDeleting && currentText.length === 0) {
				setIsDeleting(false);
				setCurrentTextIndex((prev) => {
					return prev === texts.length - 1 ? 0 : prev + 1;
				});
				timeout = setTimeout(() => {
					setIsPaused(false);
				}, 300);
			}
		}
		return () => clearTimeout(timeout);
	}, [
		currentText,
		currentTextIndex,
		isDeleting,
		isPaused,
		texts,
		speed,
		deleteSpeed,
		delay,
		loop,
		onComplete
	]);
	const progress = texts && texts.length > 0 && texts[currentTextIndex] ? currentText.length / texts[currentTextIndex].length : 0;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: `inline-flex items-center ${className}`,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
				className: `font-mono ${textClassName}`,
				children: [currentText, /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.AnimatePresence, { children: currentText && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(framer_motion.motion.span, {
					initial: {
						opacity: 0,
						y: -10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: 10
					},
					className: "inline-block",
					children: [
						currentText.includes("FUN") && " 🎮",
						currentText.includes("EASY") && " 😎",
						currentText.includes("MAGIC") && " ✨",
						currentText.includes("Pay") && " 💰"
					]
				}, currentText) })]
			}),
			showCursor && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.span, {
				animate: { opacity: cursorVisible ? 1 : 0 },
				transition: { duration: .1 },
				className: `ml-1 ${cursorClassName}`,
				children: cursorChar
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.div, {
				className: "absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full",
				initial: { width: 0 },
				animate: { width: `${progress * 100}%` },
				transition: { duration: .3 }
			})
		]
	});
}

//#endregion
//#region src/components/Button.tsx
const Button = react.default.forwardRef(({ className, variant = "primary", size = "md", fullWidth = false, isLoading = false, children, disabled, ...props }, ref) => {
	const [isHovered, setIsHovered] = (0, react.useState)(false);
	const [isActive, setIsActive] = (0, react.useState)(false);
	const baseStyles = {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		fontWeight: 600,
		borderRadius: "0.5rem",
		transition: "all 0.2s",
		cursor: disabled ? "not-allowed" : "pointer",
		opacity: disabled ? .6 : 1,
		width: fullWidth ? "100%" : "auto",
		position: "relative",
		overflow: "hidden"
	};
	const variantStyles = {
		primary: {
			backgroundColor: isHovered ? "#FFD700" : "#FFC800",
			color: "#00143C",
			border: "none",
			boxShadow: isHovered ? "0 4px 12px rgba(255, 200, 0, 0.3)" : "none",
			transform: isHovered ? "translateY(-1px)" : "translateY(0)"
		},
		secondary: {
			backgroundColor: isHovered ? "#002A5C" : "#00143C",
			color: "white",
			border: "none",
			boxShadow: isHovered ? "0 4px 12px rgba(0, 20, 60, 0.3)" : "none",
			transform: isHovered ? "translateY(-1px)" : "translateY(0)"
		},
		outline: {
			backgroundColor: isHovered ? "#00143C" : "transparent",
			color: isHovered ? "white" : "#00143C",
			border: "2px solid #00143C",
			boxShadow: isHovered ? "0 4px 12px rgba(0, 20, 60, 0.1)" : "none"
		},
		ghost: {
			backgroundColor: isHovered ? "rgba(0, 20, 60, 0.1)" : "transparent",
			color: "#00143C",
			border: "none"
		}
	};
	const sizeStyles = {
		sm: {
			padding: "0.5rem 1rem",
			fontSize: "0.875rem"
		},
		md: {
			padding: "0.75rem 1.5rem",
			fontSize: "1rem"
		},
		lg: {
			padding: "1rem 2rem",
			fontSize: "1.125rem"
		}
	};
	const activeStyle = {
		transform: "translateY(0)",
		boxShadow: "none"
	};
	const styles = {
		...baseStyles,
		...variantStyles[variant],
		...sizeStyles[size],
		...isActive ? activeStyle : {}
	};
	const spinnerStyle = {
		width: "1rem",
		height: "1rem",
		border: "2px solid currentColor",
		borderTopColor: "transparent",
		borderRadius: "50%",
		animation: "spin 1s linear infinite",
		marginRight: "0.5rem"
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
		ref,
		className: cn(className),
		style: styles,
		disabled: disabled || isLoading,
		onMouseEnter: () => !disabled && setIsHovered(true),
		onMouseLeave: () => !disabled && setIsHovered(false),
		onMouseDown: () => !disabled && setIsActive(true),
		onMouseUp: () => !disabled && setIsActive(false),
		...props,
		children: isLoading ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { style: spinnerStyle }), "Loading..."] }) : children
	});
});
Button.displayName = "Button";

//#endregion
//#region src/components/Input.tsx
const Input = react.default.forwardRef(({ className, label, error, icon, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		style: { width: "100%" },
		children: [
			label && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
				style: {
					display: "block",
					marginBottom: "0.5rem",
					fontWeight: 500,
					color: "#00143C"
				},
				children: label
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: { position: "relative" },
				children: [icon && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					style: {
						position: "absolute",
						left: "1rem",
						top: "50%",
						transform: "translateY(-50%)",
						color: "#6B7280",
						pointerEvents: "none"
					},
					children: icon
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
					ref,
					style: {
						width: "100%",
						padding: icon ? "0.75rem 1rem 0.75rem 3rem" : "0.75rem 1rem",
						border: `1px solid ${error ? "#EF4444" : "#D1D5DB"}`,
						borderRadius: "0.5rem",
						fontSize: "1rem",
						color: "#00143C",
						backgroundColor: "white",
						transition: "all 0.2s",
						outline: "none",
						boxShadow: "none"
					},
					className: cn(className),
					onFocus: (e) => {
						e.currentTarget.style.borderColor = "#00143C";
						e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0, 20, 60, 0.1)";
					},
					onBlur: (e) => {
						e.currentTarget.style.borderColor = error ? "#EF4444" : "#D1D5DB";
						e.currentTarget.style.boxShadow = "none";
					},
					...props
				})]
			}),
			error && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
				style: {
					color: "#EF4444",
					fontSize: "0.875rem",
					marginTop: "0.25rem"
				},
				children: error
			})
		]
	});
});
Input.displayName = "Input";

//#endregion
//#region src/components/Card.tsx
const Card = react.default.forwardRef(({ className, variant = "default", padding = "md", children, ...props }, ref) => {
	const variantStyles = {
		default: {
			backgroundColor: "white",
			border: "1px solid #E5E7EB",
			boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
		},
		elevated: {
			backgroundColor: "white",
			border: "none",
			boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
		},
		outline: {
			backgroundColor: "transparent",
			border: "2px solid #00143C",
			boxShadow: "none"
		},
		premium: {
			backgroundColor: "#00143C",
			border: "none",
			boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
		}
	};
	const paddingStyles = {
		none: { padding: 0 },
		sm: { padding: "1rem" },
		md: { padding: "1.5rem" },
		lg: { padding: "2rem" }
	};
	const styles = {
		borderRadius: "0.75rem",
		transition: "all 0.2s",
		...variantStyles[variant],
		...paddingStyles[padding]
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		ref,
		className: cn(className),
		style: styles,
		...props,
		children
	});
});
Card.displayName = "Card";
const CardHeader = react.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
	ref,
	style: {
		display: "flex",
		flexDirection: "column",
		gap: "0.5rem",
		marginBottom: "1rem"
	},
	className: cn(className),
	...props
}));
CardHeader.displayName = "CardHeader";
const CardTitle = react.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
	ref,
	style: {
		fontSize: "1.25rem",
		fontWeight: 700,
		color: "#00143C",
		margin: 0
	},
	className: cn(className),
	...props
}));
CardTitle.displayName = "CardTitle";
const CardDescription = react.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
	ref,
	style: {
		fontSize: "0.875rem",
		color: "#6B7280",
		margin: 0
	},
	className: cn(className),
	...props
}));
CardDescription.displayName = "CardDescription";
const CardContent = react.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
	ref,
	style: { paddingTop: "1rem" },
	className: cn(className),
	...props
}));
CardContent.displayName = "CardContent";
const CardFooter = react.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
	ref,
	style: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		paddingTop: "1rem",
		borderTop: "1px solid #E5E7EB"
	},
	className: cn(className),
	...props
}));
CardFooter.displayName = "CardFooter";

//#endregion
//#region src/components/Modal.tsx
const Modal = ({ isOpen, onClose, children, title }) => {
	(0, react.useEffect)(() => {
		if (isOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);
	if (!isOpen) return null;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		style: {
			position: "fixed",
			inset: 0,
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			zIndex: 50,
			padding: "1rem"
		},
		onClick: onClose,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			style: {
				backgroundColor: "white",
				padding: "1.5rem",
				borderRadius: "0.5rem",
				maxWidth: "28rem",
				width: "100%",
				maxHeight: "90vh",
				overflowY: "auto",
				boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
			},
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: "1rem",
					paddingBottom: "0.75rem",
					borderBottom: "1px solid #E5E7EB"
				},
				children: [title && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
					style: {
						fontSize: "1.25rem",
						fontWeight: 600,
						color: "#00143C",
						margin: 0
					},
					children: title
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					onClick: onClose,
					style: {
						background: "none",
						border: "none",
						fontSize: "1.5rem",
						color: "#6B7280",
						cursor: "pointer",
						padding: "0.25rem",
						borderRadius: "0.25rem",
						transition: "color 0.2s"
					},
					onMouseEnter: (e) => e.currentTarget.style.color = "#374151",
					onMouseLeave: (e) => e.currentTarget.style.color = "#6B7280",
					children: "×"
				})]
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children })]
		})
	});
};

//#endregion
//#region src/components/Logo.tsx
const Logo = ({ src, size = "md", className = "", alt = "BoldMind Logo" }) => {
	const getSize = () => {
		if (typeof size === "number") return size;
		return {
			sm: 32,
			md: 48,
			lg: 64,
			xl: 96
		}[size];
	};
	const pixelSize = getSize();
	if (src) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		className: `inline-block ${className}`,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
			src,
			alt,
			width: pixelSize,
			height: pixelSize,
			className: "object-contain rounded-full",
			style: {
				width: pixelSize,
				height: pixelSize
			}
		})
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		className: `flex items-center ${className}`,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: "rounded-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-white font-bold",
			style: {
				width: pixelSize,
				height: pixelSize
			},
			children: size === "sm" || pixelSize <= 32 ? "BM" : "BM"
		})
	});
};

//#endregion
//#region src/components/SocialLinks.tsx
const SocialLinks = ({ links }) => {
	const [hoveredIndex, setHoveredIndex] = (0, react.useState)(null);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		style: {
			display: "flex",
			gap: "1.5rem"
		},
		children: links.map((link, index) => {
			const linkStyle = {
				color: hoveredIndex === index ? "#FFC800" : "#6B7280",
				transition: "color 0.2s",
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
				href: link.href,
				target: "_blank",
				rel: "noopener noreferrer",
				style: linkStyle,
				"aria-label": link.ariaLabel,
				onMouseEnter: () => setHoveredIndex(index),
				onMouseLeave: () => setHoveredIndex(null),
				children: link.icon
			}, index);
		})
	});
};

//#endregion
//#region src/components/StatusBadge.tsx
function StatusBadge({ variant, children, className }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", {
			live: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
			building: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
			planned: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
			concept: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
			hiring: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
			new: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
			premium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
		}[variant], className),
		children
	});
}

//#endregion
//#region src/components/LoadingSpinner.tsx
function LoadingSpinner({ size = "md", color = "currentColor", className }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		className: cn("inline-block", className),
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: cn("animate-spin rounded-full border-2 border-t-transparent", {
				sm: "w-4 h-4",
				md: "w-8 h-8",
				lg: "w-12 h-12"
			}[size]),
			style: {
				borderColor: `${color}20`,
				borderTopColor: color
			}
		})
	});
}

//#endregion
//#region src/components/ErrorBoundary.tsx
var ErrorBoundary = class extends react.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}
	static getDerivedStateFromError(error) {
		return {
			hasError: true,
			error
		};
	}
	componentDidCatch(error, errorInfo) {
		console.error("ErrorBoundary caught an error:", error, errorInfo);
	}
	render() {
		if (this.state.hasError) return this.props.fallback || /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: "min-h-[400px] flex flex-col items-center justify-center p-6",
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "text-6xl mb-4",
					children: "⚠️"
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold text-gray-900 dark:text-white mb-2",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					className: "text-gray-600 dark:text-gray-400 mb-6",
					children: "We're sorry, but something unexpected happened."
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					onClick: () => window.location.reload(),
					className: "px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors",
					children: "Reload Page"
				})
			]
		});
		return this.props.children;
	}
};

//#endregion
//#region src/components/PricingContent.tsx
function buildCheckoutUrl(productSlug, tierName, isYearly) {
	return `https://paystack.com/pay/boldmind-${productSlug}-${tierName}-${isYearly ? "yearly" : "monthly"}`;
}
function TierCard({ tier, productSlug, isYearly, accentColor, isHighlighted, compact }) {
	const price = isYearly ? tier.priceYearly : tier.priceMonthly;
	const yearlySavings = (0, _boldmind_utils.calculateYearlySavings)(tier);
	const checkoutUrl = buildCheckoutUrl(productSlug, tier.name, isYearly);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(framer_motion.motion.div, {
		whileHover: { y: -4 },
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 20
		},
		className: cn("relative flex flex-col rounded-2xl border-2 transition-all duration-300", compact ? "p-5" : "p-6 sm:p-8", isHighlighted ? "border-[var(--product-primary)] shadow-xl" : "border-[var(--product-muted)] hover:border-[var(--product-primary)]/40"),
		style: { background: isHighlighted ? `linear-gradient(135deg, ${accentColor}08, ${accentColor}04)` : "var(--product-background)" },
		children: [
			isHighlighted && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase text-white whitespace-nowrap",
				style: { background: accentColor },
				children: "★ Most Popular"
			}),
			isYearly && yearlySavings > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "absolute top-4 right-4 px-2 py-0.5 rounded-full text-[10px] font-black bg-green-100 text-green-700",
				children: [
					"Save ",
					yearlySavings,
					"%"
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: compact ? "mb-4" : "mb-6",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-2",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "text-xl",
							children: {
								free: "🆓",
								basic: "⚡",
								pro: "🚀",
								enterprise: "🏢"
							}[tier.name]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
							className: "text-lg font-black uppercase tracking-widest",
							style: { color: "var(--product-primary)" },
							children: {
								free: "Free",
								basic: "Basic",
								pro: "Pro",
								enterprise: "Enterprise"
							}[tier.name]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline gap-1",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "text-3xl font-black",
							style: { color: "var(--product-foreground)" },
							children: price === 0 ? "₦0" : `₦${price.toLocaleString()}`
						}), price > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: "text-sm",
							style: {
								color: "var(--product-foreground)",
								opacity: .5
							},
							children: ["/", isYearly ? "yr" : "mo"]
						})]
					}),
					isYearly && price > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
						className: "text-xs mt-1",
						style: {
							color: "var(--product-foreground)",
							opacity: .5
						},
						children: [
							"≈ ₦",
							Math.round(price / 12).toLocaleString(),
							"/month"
						]
					})
				]
			}),
			!compact && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("ul", {
				className: "space-y-3 mb-6 flex-1",
				children: [tier.features.map((feature, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-2.5 text-sm",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Check, {
						className: "mt-0.5 flex-shrink-0 h-4 w-4",
						style: { color: accentColor }
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						style: {
							color: "var(--product-foreground)",
							opacity: .85
						},
						children: feature
					})]
				}, i)), tier.limits && Object.entries(tier.limits).map(([key, val]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-2.5 text-xs",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "mt-1 flex-shrink-0 w-4 h-4 rounded-full border border-current opacity-30 flex items-center justify-center",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "text-[8px]",
							children: "i"
						})
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						style: {
							color: "var(--product-foreground)",
							opacity: .5
						},
						children: [
							key.replace(/([A-Z])/g, " $1").toLowerCase(),
							": ",
							String(val)
						]
					})]
				}, key))]
			}),
			!compact && (tier.name === "free" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(next_link.default, {
				href: "/register",
				className: cn("w-full text-center py-3 rounded-xl font-bold text-sm transition-all", "border-2 border-[var(--product-primary)] text-[var(--product-primary)]", "hover:bg-[var(--product-primary)] hover:text-white"),
				children: "Get Started Free"
			}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
				href: checkoutUrl,
				target: "_blank",
				rel: "noopener noreferrer",
				className: cn("w-full text-center py-3 rounded-xl font-bold text-sm transition-all", "flex items-center justify-center gap-2", isHighlighted ? "text-white hover:opacity-90" : "border-2 border-[var(--product-primary)] text-[var(--product-primary)] hover:bg-[var(--product-primary)] hover:text-white"),
				style: isHighlighted ? { background: accentColor } : void 0,
				children: tier.name === "enterprise" ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: ["Contact Sales ", /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.ArrowRight, { className: "h-4 w-4" })] }) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: ["Subscribe Now ", /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Zap, { className: "h-4 w-4" })] })
			}))
		]
	});
}
function OneTimeCard({ item, productSlug, accentColor }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border-2 p-5 flex flex-col justify-between gap-4",
		style: {
			borderColor: `${accentColor}30`,
			background: `${accentColor}06`
		},
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h4", {
			className: "font-bold text-sm mb-1",
			style: { color: "var(--product-primary)" },
			children: item.name
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
			className: "text-xs opacity-60",
			style: { color: "var(--product-foreground)" },
			children: item.description
		})] }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
				className: "text-2xl font-black",
				style: { color: "var(--product-foreground)" },
				children: ["₦", item.price.toLocaleString()]
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
				href: `https://paystack.com/pay/boldmind-${productSlug}-${item.name.toLowerCase().replace(/\s+/g, "-")}`,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "px-4 py-2 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90",
				style: { background: accentColor },
				children: "Buy Now"
			})]
		})]
	});
}
function SingleProductPricing({ pricing, isYearly }) {
	const { productTheme } = useTheme();
	const accentColor = _boldmind_utils.BOLDMIND_COLOR_SCHEMES[pricing.productSlug]?.primary ?? productTheme.colors.primary;
	const highlightedTier = (0, react.useMemo)(() => {
		const tiers = pricing.tiers;
		return tiers.find((t) => t.name === "pro")?.name ?? tiers.find((t) => t.name === "basic")?.name ?? tiers[0]?.name;
	}, [pricing.tiers]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [pricing.tiers.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		className: cn("grid gap-6", pricing.tiers.length === 1 ? "max-w-sm mx-auto" : pricing.tiers.length === 2 ? "sm:grid-cols-2 max-w-2xl mx-auto" : pricing.tiers.length === 3 ? "sm:grid-cols-3 max-w-4xl mx-auto" : "sm:grid-cols-2 lg:grid-cols-4"),
		children: pricing.tiers.map((tier) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TierCard, {
			tier,
			productSlug: pricing.productSlug,
			isYearly,
			accentColor,
			isHighlighted: tier.name === highlightedTier
		}, tier.name))
	}), pricing.oneTimePrices && pricing.oneTimePrices.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: "mt-10",
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
			className: "text-center text-lg font-bold mb-6",
			style: {
				color: "var(--product-foreground)",
				opacity: .7
			},
			children: "— or choose a one-time package —"
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: cn("grid gap-4", pricing.oneTimePrices.length <= 3 ? "sm:grid-cols-3 max-w-3xl mx-auto" : "sm:grid-cols-2 lg:grid-cols-4"),
			children: pricing.oneTimePrices.map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(OneTimeCard, {
				item,
				productSlug: pricing.productSlug,
				accentColor
			}, item.name))
		})]
	})] });
}
function ProductPricingRow({ pricing }) {
	const [open, setOpen] = (0, react.useState)(false);
	const [yearly, setYearly] = (0, react.useState)(false);
	const scheme = _boldmind_utils.BOLDMIND_COLOR_SCHEMES[pricing.productSlug];
	const accentColor = scheme?.primary ?? "#2B4D87";
	const lowestPrice = pricing.tiers.find((t) => t.priceMonthly === 0) ? "₦0 Free tier" : pricing.tiers[0] ? `From ₦${pricing.tiers[0].priceMonthly.toLocaleString()}/mo` : pricing.oneTimePrices?.[0] ? `From ₦${pricing.oneTimePrices[0].price.toLocaleString()} once` : "Contact us";
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border-2 overflow-hidden transition-all",
		style: { borderColor: open ? accentColor : "var(--product-muted)" },
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
			onClick: () => setOpen(!open),
			className: "w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[var(--product-muted)]/30 transition-colors",
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 min-w-0",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0",
					style: { background: `${accentColor}20` },
					children: scheme?.icon ?? "📦"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "font-bold truncate",
						style: { color: "var(--product-foreground)" },
						children: pricing.productName
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "text-xs opacity-50",
						style: { color: "var(--product-foreground)" },
						children: lowestPrice
					})]
				})]
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 flex-shrink-0",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
					className: "hidden sm:inline-block text-xs font-bold px-3 py-1 rounded-full",
					style: {
						background: `${accentColor}20`,
						color: accentColor
					},
					children: [
						pricing.tiers.length,
						" plan",
						pricing.tiers.length !== 1 ? "s" : "",
						pricing.oneTimePrices?.length ? ` + ${pricing.oneTimePrices.length} one-time` : ""
					]
				}), open ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.ChevronUp, { className: "h-5 w-5 opacity-50" }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.ChevronDown, { className: "h-5 w-5 opacity-50" })]
			})]
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.AnimatePresence, { children: open && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.div, {
			initial: {
				height: 0,
				opacity: 0
			},
			animate: {
				height: "auto",
				opacity: 1
			},
			exit: {
				height: 0,
				opacity: 0
			},
			transition: { duration: .25 },
			className: "overflow-hidden",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "px-5 pb-6 border-t border-[var(--product-muted)]",
				children: [
					pricing.tiers.some((t) => t.priceYearly > 0) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "flex justify-end pt-4 pb-4",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "inline-flex rounded-full p-1 border border-[var(--product-muted)] text-xs font-bold",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								onClick: () => setYearly(false),
								className: cn("px-3 py-1.5 rounded-full transition-all", !yearly ? "text-white" : "opacity-50"),
								style: !yearly ? { background: accentColor } : void 0,
								children: "Monthly"
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								onClick: () => setYearly(true),
								className: cn("px-3 py-1.5 rounded-full transition-all", yearly ? "text-white" : "opacity-50"),
								style: yearly ? { background: accentColor } : void 0,
								children: "Yearly"
							})]
						})
					}),
					pricing.tiers.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: cn("grid gap-4", pricing.tiers.length === 1 ? "sm:grid-cols-1 max-w-xs" : pricing.tiers.length === 2 ? "sm:grid-cols-2" : pricing.tiers.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4"),
						children: pricing.tiers.map((tier) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TierCard, {
							tier,
							productSlug: pricing.productSlug,
							isYearly: yearly,
							accentColor,
							compact: true
						}, tier.name))
					}),
					pricing.oneTimePrices && pricing.oneTimePrices.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3",
						children: pricing.oneTimePrices.map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(OneTimeCard, {
							item,
							productSlug: pricing.productSlug,
							accentColor
						}, item.name))
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "mt-4 text-center",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(next_link.default, {
							href: `https://boldmind.ng/products/${pricing.productSlug}`,
							className: "text-xs font-bold underline underline-offset-4 opacity-60 hover:opacity-100 transition-opacity",
							style: { color: accentColor },
							children: [
								"View ",
								pricing.productName,
								" details →"
							]
						})
					})
				]
			})
		}) })]
	});
}
function PricingContent({ isHub = false, productSlug, heading, subheading, className }) {
	const { productTheme } = useTheme();
	const [isYearly, setIsYearly] = (0, react.useState)(false);
	const [filter, setFilter] = (0, react.useState)("all");
	const resolvedSlug = productSlug ?? productTheme.slug;
	const accentColor = _boldmind_utils.BOLDMIND_COLOR_SCHEMES[resolvedSlug]?.primary ?? productTheme.colors.primary;
	const filteredHubPricing = (0, react.useMemo)(() => {
		if (!isHub) return [];
		return _boldmind_utils.BOLDMIND_PRICING.filter((p) => {
			if (filter === "free") return p.tiers.some((t) => t.name === "free");
			if (filter === "subscription") return p.tiers.some((t) => t.priceMonthly > 0);
			if (filter === "one-time") return (p.oneTimePrices?.length ?? 0) > 0;
			return true;
		});
	}, [isHub, filter]);
	const singlePricing = (0, react.useMemo)(() => {
		if (isHub) return null;
		return (0, _boldmind_utils.getProductPricing)(resolvedSlug) ?? null;
	}, [isHub, resolvedSlug]);
	const hasYearlyOption = (0, react.useMemo)(() => {
		if (isHub) return _boldmind_utils.BOLDMIND_PRICING.some((p) => p.tiers.some((t) => t.priceYearly > 0));
		return singlePricing?.tiers.some((t) => t.priceYearly > 0) ?? false;
	}, [isHub, singlePricing]);
	const resolvedHeading = heading ?? (isHub ? "Transparent Pricing for Every Product" : `${productTheme.name} Pricing`);
	const resolvedSubheading = subheading ?? (isHub ? "Every BoldMind product. Every plan. All in one place. Start free on any product." : `Choose the plan that fits your goals. Start free, upgrade anytime.`);
	(0, react.useMemo)(() => {
		if (!singlePricing) return void 0;
		return singlePricing.tiers.find((t) => t.name === "pro")?.name ?? singlePricing.tiers.find((t) => t.name === "basic")?.name ?? singlePricing.tiers[0]?.name;
	}, [singlePricing]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
		className: cn("w-full", className),
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden py-16 sm:py-24 px-4",
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-[0.03]",
				style: { backgroundImage: `radial-gradient(circle at 25% 50%, ${accentColor} 0%, transparent 60%),
                              radial-gradient(circle at 75% 50%, ${accentColor} 0%, transparent 60%)` }
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "relative z-10 max-w-3xl mx-auto text-center",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6 border",
						style: {
							background: `${accentColor}10`,
							borderColor: `${accentColor}30`,
							color: accentColor
						},
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Sparkles, { className: "h-3 w-3" }), isHub ? "BoldMind Ecosystem Pricing" : `${productTheme.icon} ${productTheme.name}`]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h1", {
						className: "text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 tracking-tight",
						style: { color: "var(--product-primary)" },
						children: resolvedHeading
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: "text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto",
						style: {
							color: "var(--product-foreground)",
							opacity: .7
						},
						children: resolvedSubheading
					}),
					hasYearlyOption && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "mt-8 inline-flex items-center gap-3 p-1.5 rounded-2xl border-2 border-[var(--product-muted)]",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							onClick: () => setIsYearly(false),
							className: cn("px-5 py-2.5 rounded-xl font-bold text-sm transition-all", !isYearly ? "text-white shadow-md" : "opacity-50 hover:opacity-70"),
							style: !isYearly ? { background: accentColor } : void 0,
							children: "Monthly"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
							onClick: () => setIsYearly(true),
							className: cn("px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2", isYearly ? "text-white shadow-md" : "opacity-50 hover:opacity-70"),
							style: isYearly ? { background: accentColor } : void 0,
							children: ["Yearly", /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-black px-2 py-0.5 bg-green-500 text-white rounded-full",
								children: "Save up to 20%"
							})]
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 pb-20",
			children: [
				!isHub && singlePricing && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "max-w-5xl mx-auto",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SingleProductPricing, {
						pricing: singlePricing,
						isYearly
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "mt-16 text-center p-8 rounded-2xl border-2 border-dashed border-[var(--product-muted)]",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "font-bold text-lg mb-2",
								style: { color: "var(--product-primary)" },
								children: "Need a custom plan or have questions?"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "text-sm opacity-60 mb-6",
								style: { color: "var(--product-foreground)" },
								children: "Chat with us on WhatsApp — we respond within minutes."
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("a", {
								href: "https://wa.me/2349138349271",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm bg-green-500 hover:bg-green-600 transition-colors",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
									className: "w-4 h-4",
									fill: "currentColor",
									viewBox: "0 0 24 24",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" })
								}), "WhatsApp Us"]
							})
						]
					})]
				}),
				isHub && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap justify-center gap-2 mb-10",
						children: [
							"all",
							"free",
							"subscription",
							"one-time"
						].map((f) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							onClick: () => setFilter(f),
							className: cn("px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all", filter === f ? "text-white shadow-md" : "border-2 border-[var(--product-muted)] opacity-60 hover:opacity-100"),
							style: filter === f ? { background: accentColor } : void 0,
							children: f === "all" ? "🌍 All Products" : f === "free" ? "🆓 Has Free Tier" : f === "subscription" ? "📅 Subscription" : "💳 One-Time"
						}, f))
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 p-6 rounded-2xl border",
						style: {
							background: `${accentColor}06`,
							borderColor: `${accentColor}20`
						},
						children: [
							{
								label: "Total Products",
								value: _boldmind_utils.BOLDMIND_PRICING.length
							},
							{
								label: "Have Free Tier",
								value: _boldmind_utils.BOLDMIND_PRICING.filter((p) => p.tiers.some((t) => t.name === "free")).length
							},
							{
								label: "Subscription",
								value: _boldmind_utils.BOLDMIND_PRICING.filter((p) => p.tiers.some((t) => t.priceMonthly > 0)).length
							},
							{
								label: "One-Time",
								value: _boldmind_utils.BOLDMIND_PRICING.filter((p) => (p.oneTimePrices?.length ?? 0) > 0).length
							}
						].map((stat) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "text-3xl font-black",
								style: { color: accentColor },
								children: stat.value
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "text-xs opacity-50",
								style: { color: "var(--product-foreground)" },
								children: stat.label
							})]
						}, stat.label))
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: filteredHubPricing.map((pricing) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ProductPricingRow, { pricing }, pricing.productSlug))
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "mt-16 text-center p-10 rounded-3xl relative overflow-hidden",
						style: { background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}08)` },
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-black mb-4",
								style: { color: "var(--product-primary)" },
								children: "Start with any product. Free."
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: "text-lg mb-8 max-w-xl mx-auto",
								style: {
									color: "var(--product-foreground)",
									opacity: .7
								},
								children: "Create one BoldMind account and access the free tier of every product instantly."
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row gap-4 justify-center",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(next_link.default, {
									href: "/register",
									className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all hover:opacity-90",
									style: { background: accentColor },
									children: ["Create Free Account ", /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.ArrowRight, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
									href: "https://wa.me/2349138349271",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base border-2 transition-all hover:bg-[var(--product-muted)]",
									style: {
										borderColor: accentColor,
										color: accentColor
									},
									children: "Talk to Sales"
								})]
							})
						]
					})
				] }),
				!isHub && !singlePricing && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "max-w-lg mx-auto text-center py-16",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: "text-6xl mb-6",
							role: "img",
							"aria-label": "Coming soon",
							children: "🚀"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-black mb-4",
							style: { color: "var(--product-primary)" },
							children: "Pricing Coming Soon"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
							className: "text-base mb-8",
							style: {
								color: "var(--product-foreground)",
								opacity: .6
							},
							children: [productTheme.name, " is still in development. Join the waitlist to be the first to know."]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
							href: "https://wa.me/2349138349271",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm bg-green-500 hover:bg-green-600 transition-colors",
							children: "Join Waitlist on WhatsApp"
						})
					]
				})
			]
		})]
	});
}

//#endregion
//#region src/components/PrivacyPolicy.tsx
const sectionHeaderStyle$1 = {
	display: "flex",
	alignItems: "center",
	gap: "0.75rem",
	marginBottom: "1.25rem",
	paddingBottom: "0.75rem",
	borderBottom: "2px solid var(--product-muted)"
};
const sectionTitleStyle$1 = {
	fontSize: "1.5rem",
	fontWeight: 700,
	color: "var(--product-primary)",
	margin: 0
};
const iconBoxStyle$1 = {
	width: "2.5rem",
	height: "2.5rem",
	borderRadius: "var(--radius-md)",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "var(--product-highlight)",
	color: "var(--product-primary)",
	flexShrink: 0
};
const paragraphStyle$1 = {
	fontSize: "1rem",
	lineHeight: 1.8,
	color: "var(--product-foreground)",
	marginBottom: "1rem",
	maxWidth: "none"
};
const listStyle$1 = {
	paddingLeft: "1.5rem",
	marginBottom: "1rem",
	listStyleType: "none"
};
const listItemStyle$1 = {
	display: "flex",
	alignItems: "flex-start",
	gap: "0.5rem",
	marginBottom: "0.625rem",
	fontSize: "1rem",
	lineHeight: 1.7,
	color: "var(--product-foreground)"
};
const subheadingStyle$1 = {
	fontSize: "1.125rem",
	fontWeight: 600,
	color: "var(--product-primary)",
	marginTop: "1.25rem",
	marginBottom: "0.625rem"
};
function BulletItem$1({ children }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
		style: listItemStyle$1,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.ChevronRight, { style: {
			width: "1rem",
			height: "1rem",
			marginTop: "0.35rem",
			color: "var(--product-secondary)",
			flexShrink: 0
		} }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children })]
	});
}
function PrivacyPolicy({ companyName = "BoldMind Technology Solution Enterprise", appName, contactEmail = "privacy@boldmind.ng", effectiveDate = "February 18, 2026", additionalSections = [], className }) {
	const { productTheme } = useTheme();
	const resolvedAppName = appName || productTheme.name;
	const heroStyle = {
		background: `linear-gradient(135deg, var(--product-primary), color-mix(in srgb, var(--product-primary) 80%, black))`,
		color: "white",
		padding: "3rem 2rem",
		borderRadius: "var(--radius-xl)",
		marginBottom: "2.5rem",
		position: "relative",
		overflow: "hidden"
	};
	const heroOverlayStyle = {
		position: "absolute",
		inset: 0,
		backgroundImage: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)",
		pointerEvents: "none"
	};
	const sectionCardStyle = {
		backgroundColor: "var(--product-background)",
		border: "1px solid var(--product-muted)",
		borderRadius: "var(--radius-lg)",
		padding: "1.75rem",
		marginBottom: "1.5rem",
		transition: "box-shadow var(--transition-base), border-color var(--transition-base)"
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: cn("max-w-4xl mx-auto px-4 py-8 sm:py-12", className),
		style: { color: "var(--product-foreground)" },
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: heroStyle,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { style: heroOverlayStyle }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					style: {
						position: "relative",
						zIndex: 1
					},
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: "1rem",
								marginBottom: "1rem"
							},
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Shield, { style: {
								width: "2.5rem",
								height: "2.5rem"
							} }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h1", {
								style: {
									fontSize: "clamp(2rem, 5vw, 2.75rem)",
									fontWeight: 800,
									margin: 0,
									color: "white"
								},
								children: "Privacy Policy"
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
							style: {
								fontSize: "1.125rem",
								opacity: .9,
								margin: 0,
								maxWidth: "none"
							},
							children: [
								resolvedAppName,
								" — A product of ",
								companyName
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
							style: {
								fontSize: "0.875rem",
								opacity: .7,
								marginTop: "0.5rem",
								marginBottom: 0,
								maxWidth: "none"
							},
							children: [
								"Effective Date: ",
								effectiveDate,
								" • Last Updated: ",
								effectiveDate
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
					style: paragraphStyle$1,
					children: [
						"At ",
						companyName,
						" (“we”, “our”, or “us”), we are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use ",
						resolvedAppName,
						" and any related services, applications, or websites (collectively, the “Service”)."
					]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					style: paragraphStyle$1,
					children: "By accessing or using our Service, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our Service."
				})]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: sectionHeaderStyle$1,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							style: iconBoxStyle$1,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Database, { style: {
								width: "1.25rem",
								height: "1.25rem"
							} })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							style: sectionTitleStyle$1,
							children: "1. Information We Collect"
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle$1,
						children: "1.1 Personal Information You Provide"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle$1,
						children: "When you register for an account, make a purchase, or interact with our Service, we may collect:"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("ul", {
						style: listStyle$1,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Full name, email address, and phone number" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Account credentials (username, encrypted password)" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Billing and payment information (processed securely via third-party payment providers)" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Profile information, preferences, and settings" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Communications and correspondence with us (support tickets, emails, feedback)" })
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle$1,
						children: "1.2 Information Collected Automatically"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle$1,
						children: "When you access our Service, we automatically collect certain technical information:"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("ul", {
						style: listStyle$1,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Device information (type, operating system, browser type and version)" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "IP address, geographic location data (country, city level)" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Usage patterns (pages visited, time spent, click patterns, feature usage)" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Referral sources (how you arrived at our Service)" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Performance data (load times, errors, crash reports)" })
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle$1,
						children: "1.3 Cookies and Tracking Technologies"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle$1,
						children: "We use cookies, web beacons, pixels, and similar technologies to collect information and improve your experience. You can manage your cookie preferences at any time through our cookie settings. For more details, please see Section 5 of this policy."
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle$1,
						children: "1.4 Information from Third Parties"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle$1,
						children: "We may receive information about you from third-party services you connect to your account, including:"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("ul", {
						style: listStyle$1,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Social media platforms (Facebook, Google, when you use social login)" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Analytics providers (aggregated usage data)" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Payment processors (transaction confirmation, fraud prevention data)" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: sectionHeaderStyle$1,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							style: iconBoxStyle$1,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Eye, { style: {
								width: "1.25rem",
								height: "1.25rem"
							} })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							style: sectionTitleStyle$1,
							children: "2. How We Use Your Information"
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle$1,
						children: "We use the information we collect for the following purposes:"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle$1,
						children: "2.1 Service Delivery and Improvement"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("ul", {
						style: listStyle$1,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Provide, maintain, and improve our Service and its features" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Process transactions and send related information (receipts, confirmations)" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Personalise your experience based on your preferences and usage patterns" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Develop new products, services, features, and functionality" })
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle$1,
						children: "2.2 Communication"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("ul", {
						style: listStyle$1,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Send administrative information (account updates, security alerts, policy changes)" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Respond to your enquiries, support requests, and feedback" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Send marketing and promotional communications (with your consent, where required)" })
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle$1,
						children: "2.3 Analytics and Research"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("ul", {
						style: listStyle$1,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Monitor and analyse usage trends, traffic, and engagement metrics" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Conduct research and analysis to improve user experience" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Generate aggregated, anonymised reports and insights" })
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle$1,
						children: "2.4 Safety and Compliance"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("ul", {
						style: listStyle$1,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Detect, prevent, and address fraud, abuse, and security issues" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Comply with applicable laws, regulations, and legal processes" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Enforce our Terms and Conditions and other agreements" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: sectionHeaderStyle$1,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							style: iconBoxStyle$1,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Globe, { style: {
								width: "1.25rem",
								height: "1.25rem"
							} })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							style: sectionTitleStyle$1,
							children: "3. Data Sharing and Disclosure"
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle$1,
						children: "We do not sell your personal information. We may share your information in the following circumstances:"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle$1,
						children: "3.1 Service Providers"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle$1,
						children: "We engage trusted third-party companies and individuals to perform services on our behalf, including payment processing, data analysis, email delivery, hosting, customer service, and marketing assistance. These service providers have access to your information only to perform these tasks and are obligated to protect it."
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle$1,
						children: "3.2 Within the BoldMind Ecosystem"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
						style: paragraphStyle$1,
						children: [
							"Your information may be shared across BoldMind products and services to provide you with a seamless, integrated experience. For example, your account preferences may be synchronised across ",
							resolvedAppName,
							" and other BoldMind products you use."
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle$1,
						children: "3.3 Legal Requirements"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle$1,
						children: "We may disclose your information if required to do so by law or in good faith belief that such action is necessary to comply with a legal obligation, protect and defend our rights or property, prevent fraud, or protect the personal safety of users or the public."
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle$1,
						children: "3.4 Business Transfers"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle$1,
						children: "In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred. We will notify you before your information is transferred and becomes subject to a different privacy policy."
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: sectionHeaderStyle$1,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							style: iconBoxStyle$1,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Lock, { style: {
								width: "1.25rem",
								height: "1.25rem"
							} })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							style: sectionTitleStyle$1,
							children: "4. Data Security"
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle$1,
						children: "We implement appropriate technical and organisational measures to protect your personal information, including:"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("ul", {
						style: listStyle$1,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Encryption of data in transit (TLS/SSL) and at rest" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Regular security audits and vulnerability assessments" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Access controls and authentication mechanisms" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Secure data storage with reputable cloud service providers" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Employee training on data protection and privacy best practices" })
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle$1,
						children: "While we strive to protect your personal information, no method of transmission over the Internet or method of electronic storage is 100% secure. We cannot guarantee its absolute security."
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: sectionHeaderStyle$1,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							style: iconBoxStyle$1,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Cookie, { style: {
								width: "1.25rem",
								height: "1.25rem"
							} })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							style: sectionTitleStyle$1,
							children: "5. Cookies and Tracking Technologies"
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle$1,
						children: "We use the following categories of cookies:"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle$1,
						children: "5.1 Essential Cookies"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle$1,
						children: "Required for the Service to function properly. These include session management, authentication, and security cookies. They cannot be disabled."
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle$1,
						children: "5.2 Analytics Cookies"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle$1,
						children: "Help us understand how visitors interact with our Service by collecting and reporting information anonymously. This includes tools like Google Analytics and our internal analytics platform."
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle$1,
						children: "5.3 Marketing Cookies"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle$1,
						children: "Used to track visitors across websites for the purpose of displaying relevant advertisements. This includes Facebook Pixel and similar advertising tools."
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle$1,
						children: "5.4 Functional Cookies"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle$1,
						children: "Enable enhanced functionality and personalisation, such as remembering your theme preferences, language settings, and user interface customisations."
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle$1,
						children: "You can manage your cookie preferences at any time through the cookie settings banner or by adjusting your browser settings. Note that disabling certain cookies may impact the functionality of our Service."
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: sectionHeaderStyle$1,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							style: iconBoxStyle$1,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Database, { style: {
								width: "1.25rem",
								height: "1.25rem"
							} })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							style: sectionTitleStyle$1,
							children: "6. Data Retention"
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle$1,
						children: "We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. Specific retention periods:"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("ul", {
						style: listStyle$1,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Account data: retained while your account is active and for 30 days after deletion request" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Transaction records: retained for 7 years for legal and tax compliance" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Usage analytics: aggregated and anonymised after 24 months" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Marketing data: retained until you withdraw consent or unsubscribe" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem$1, { children: "Support communications: retained for 3 years after resolution" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: sectionHeaderStyle$1,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							style: iconBoxStyle$1,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.UserCheck, { style: {
								width: "1.25rem",
								height: "1.25rem"
							} })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							style: sectionTitleStyle$1,
							children: "7. Your Rights"
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle$1,
						children: "Under the Nigeria Data Protection Regulation (NDPR) and other applicable data protection laws, you have the following rights:"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("ul", {
						style: listStyle$1,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(BulletItem$1, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "Right of Access:" }), " Request a copy of the personal information we hold about you"] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(BulletItem$1, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "Right to Rectification:" }), " Request correction of inaccurate or incomplete personal information"] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(BulletItem$1, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "Right to Erasure:" }), " Request deletion of your personal information, subject to legal obligations"] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(BulletItem$1, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "Right to Data Portability:" }), " Receive your data in a structured, machine-readable format"] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(BulletItem$1, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "Right to Object:" }), " Object to the processing of your personal information for direct marketing"] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(BulletItem$1, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "Right to Restrict Processing:" }), " Request limitation of processing in certain circumstances"] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(BulletItem$1, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "Right to Withdraw Consent:" }), " Withdraw consent at any time where processing is based on consent"] })
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
						style: paragraphStyle$1,
						children: [
							"To exercise any of these rights, please contact us at",
							" ",
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
								href: `mailto:${contactEmail}`,
								style: {
									color: "var(--product-secondary)",
									fontWeight: 600
								},
								children: contactEmail
							}),
							". We will respond to your request within 30 days."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					style: sectionHeaderStyle$1,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						style: iconBoxStyle$1,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Shield, { style: {
							width: "1.25rem",
							height: "1.25rem"
						} })
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
						style: sectionTitleStyle$1,
						children: "8. Children’s Privacy"
					})]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
					style: paragraphStyle$1,
					children: [
						"Our Service is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at",
						" ",
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
							href: `mailto:${contactEmail}`,
							style: {
								color: "var(--product-secondary)",
								fontWeight: 600
							},
							children: contactEmail
						}),
						"."
					]
				})]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					style: sectionHeaderStyle$1,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						style: iconBoxStyle$1,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Globe, { style: {
							width: "1.25rem",
							height: "1.25rem"
						} })
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
						style: sectionTitleStyle$1,
						children: "9. International Data Transfers"
					})]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					style: paragraphStyle$1,
					children: "Your information may be transferred to and processed in countries other than Nigeria. These countries may have data protection laws that are different from the laws in Nigeria. We take appropriate safeguards to ensure that your personal information remains protected in accordance with this Privacy Policy, including standard contractual clauses and other approved transfer mechanisms."
				})]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					style: sectionHeaderStyle$1,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						style: iconBoxStyle$1,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Eye, { style: {
							width: "1.25rem",
							height: "1.25rem"
						} })
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
						style: sectionTitleStyle$1,
						children: "10. Changes to This Privacy Policy"
					})]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					style: paragraphStyle$1,
					children: "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page, updating the “Effective Date” at the top of this policy, and, where appropriate, sending you a notification via email or through our Service. We encourage you to review this Privacy Policy periodically for any changes."
				})]
			}),
			additionalSections.map((section, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					style: sectionHeaderStyle$1,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						style: iconBoxStyle$1,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Shield, { style: {
							width: "1.25rem",
							height: "1.25rem"
						} })
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("h2", {
						style: sectionTitleStyle$1,
						children: [
							index + 11,
							". ",
							section.title
						]
					})]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: section.content })]
			}, index)),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: {
					...sectionCardStyle,
					background: "var(--product-highlight)",
					border: "2px solid var(--product-primary)"
				},
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: sectionHeaderStyle$1,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							style: {
								...iconBoxStyle$1,
								backgroundColor: "var(--product-primary)",
								color: "white"
							},
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Mail, { style: {
								width: "1.25rem",
								height: "1.25rem"
							} })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							style: sectionTitleStyle$1,
							children: "Contact Us"
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle$1,
						children: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: {
							fontSize: "1rem",
							lineHeight: 2
						},
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								style: {
									...paragraphStyle$1,
									marginBottom: "0.25rem"
								},
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: companyName })
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
								style: {
									...paragraphStyle$1,
									marginBottom: "0.25rem"
								},
								children: [
									"Email:",
									" ",
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
										href: `mailto:${contactEmail}`,
										style: {
											color: "var(--product-secondary)",
											fontWeight: 600
										},
										children: contactEmail
									})
								]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
								style: {
									...paragraphStyle$1,
									marginBottom: "0.25rem"
								},
								children: [
									"Website:",
									" ",
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
										href: "https://boldmind.ng",
										target: "_blank",
										rel: "noopener noreferrer",
										style: {
											color: "var(--product-secondary)",
											fontWeight: 600
										},
										children: "boldmind.ng"
									})
								]
							})
						]
					})
				]
			})
		]
	});
}

//#endregion
//#region src/components/FontProvider.tsx
const STORAGE_KEY$1 = "boldmind-font-mode";
const DEFAULT_FONT_MODE = "dyslexic";
const FontContext = (0, react.createContext)(void 0);
function useFontMode() {
	const ctx = (0, react.useContext)(FontContext);
	if (!ctx) throw new Error("useFontMode must be used within <FontProvider>");
	return ctx;
}
function FontProvider({ children, defaultMode = DEFAULT_FONT_MODE }) {
	const [fontMode, setFontModeState] = (0, react.useState)(void 0);
	const [mounted, setMounted] = (0, react.useState)(false);
	(0, react.useEffect)(() => {
		const saved = localStorage.getItem(STORAGE_KEY$1);
		setFontModeState(saved === "standard" || saved === "dyslexic" ? saved : defaultMode);
		setMounted(true);
	}, [defaultMode]);
	(0, react.useEffect)(() => {
		if (!fontMode || !mounted) return;
		const html = document.documentElement;
		const body = document.body;
		html.setAttribute("data-font", fontMode);
		body.classList.remove("font-standard", "font-dyslexic");
		body.classList.add(`font-${fontMode}`);
	}, [fontMode, mounted]);
	const setFontMode = (0, react.useCallback)((mode) => {
		setFontModeState(mode);
		localStorage.setItem(STORAGE_KEY$1, mode);
	}, []);
	const toggleFont = (0, react.useCallback)(() => {
		setFontMode(fontMode === "dyslexic" ? "standard" : "dyslexic");
	}, [fontMode, setFontMode]);
	const value = {
		fontMode: fontMode ?? defaultMode,
		setFontMode,
		toggleFont,
		isDyslexic: (fontMode ?? defaultMode) === "dyslexic"
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(FontContext.Provider, {
		value,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("script", {
			suppressHydrationWarning: true,
			dangerouslySetInnerHTML: { __html: `
            (function() {
              try {
                var mode = localStorage.getItem('${STORAGE_KEY$1}') || '${defaultMode}';
                document.documentElement.setAttribute('data-font', mode);
                document.body.classList.add('font-' + mode);
              } catch(e) {
                document.documentElement.setAttribute('data-font', '${defaultMode}');
                document.body.classList.add('font-${defaultMode}');
              }
            })();
          ` }
		}), children]
	});
}

//#endregion
//#region src/components/DyslexiaToggle.tsx
function DyslexiaToggle({ variant = "default", className = "" }) {
	const { isDyslexic, toggleFont, fontMode } = useFontMode();
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
		onClick: toggleFont,
		"aria-pressed": isDyslexic,
		"aria-label": isDyslexic ? "Switch to standard font" : "Switch to OpenDyslexic font",
		title: isDyslexic ? "Using OpenDyslexic — click to switch to standard font" : "Click to switch to OpenDyslexic font",
		className: [
			"inline-flex items-center gap-2 rounded-full border-2 transition-all",
			"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
			"focus-visible:ring-[var(--product-secondary)]",
			isDyslexic ? "bg-[var(--product-primary)] border-[var(--product-primary)] text-white" : "bg-transparent border-[var(--product-muted)] text-[var(--product-foreground)] hover:border-[var(--product-primary)]",
			variant === "compact" ? "w-9 h-9 justify-center p-0" : "px-4 py-2 text-sm font-bold",
			className
		].filter(Boolean).join(" "),
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: "text-base leading-none",
			style: {
				fontFamily: isDyslexic ? "'OpenDyslexic', sans-serif" : "inherit",
				fontWeight: 700
			},
			children: "Aa"
		}), variant === "default" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
			className: "leading-none",
			children: isDyslexic ? "OpenDyslexic" : "Standard Font"
		})]
	});
}

//#endregion
//#region src/hooks/useCookieConsent.ts
const STORAGE_KEY = "boldmind_cookie_consent";
const COOKIE_NAME = "boldmind_cookie_consent";
const DEFAULT_PREFERENCES = {
	essential: true,
	analytics: false,
	marketing: false,
	functional: false
};
const ALL_ACCEPTED = {
	essential: true,
	analytics: true,
	marketing: true,
	functional: true
};
function setCookie(name, value, days) {
	if (typeof document === "undefined") return;
	const expires = /* @__PURE__ */ new Date();
	expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1e3);
	document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}
function getCookie(name) {
	if (typeof document === "undefined") return null;
	const matches = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
	return matches ? decodeURIComponent(matches[1]) : null;
}
function removeCookie(name) {
	if (typeof document === "undefined") return;
	document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax`;
}
function loadPreferences() {
	if (typeof window === "undefined") return {
		preferences: DEFAULT_PREFERENCES,
		hasConsented: false
	};
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored) {
			const parsed = JSON.parse(stored);
			return {
				preferences: {
					...DEFAULT_PREFERENCES,
					...parsed.preferences,
					essential: true
				},
				hasConsented: parsed.consented === true
			};
		}
	} catch {}
	const cookieValue = getCookie(COOKIE_NAME);
	if (cookieValue) try {
		const parsed = JSON.parse(cookieValue);
		return {
			preferences: {
				...DEFAULT_PREFERENCES,
				...parsed,
				essential: true
			},
			hasConsented: true
		};
	} catch {}
	return {
		preferences: DEFAULT_PREFERENCES,
		hasConsented: false
	};
}
function savePreferences(preferences) {
	if (typeof window === "undefined") return;
	const data = {
		preferences,
		consented: true,
		timestamp: (/* @__PURE__ */ new Date()).toISOString()
	};
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
	} catch {}
	setCookie(COOKIE_NAME, JSON.stringify(preferences), 365);
}
function useCookieConsent() {
	const [preferences, setPreferences] = (0, react.useState)(DEFAULT_PREFERENCES);
	const [hasConsented, setHasConsented] = (0, react.useState)(false);
	const [showBanner, setShowBanner] = (0, react.useState)(false);
	(0, react.useEffect)(() => {
		const { preferences: saved, hasConsented: consented } = loadPreferences();
		setPreferences(saved);
		setHasConsented(consented);
		setShowBanner(!consented);
	}, []);
	return {
		preferences,
		hasConsented,
		showBanner,
		acceptAll: (0, react.useCallback)(() => {
			setPreferences(ALL_ACCEPTED);
			setHasConsented(true);
			setShowBanner(false);
			savePreferences(ALL_ACCEPTED);
		}, []),
		declineAll: (0, react.useCallback)(() => {
			setPreferences(DEFAULT_PREFERENCES);
			setHasConsented(true);
			setShowBanner(false);
			savePreferences(DEFAULT_PREFERENCES);
		}, []),
		updatePreferences: (0, react.useCallback)((partial) => {
			const updated = {
				...preferences,
				...partial,
				essential: true
			};
			setPreferences(updated);
			setHasConsented(true);
			setShowBanner(false);
			savePreferences(updated);
		}, [preferences]),
		resetConsent: (0, react.useCallback)(() => {
			setPreferences(DEFAULT_PREFERENCES);
			setHasConsented(false);
			setShowBanner(true);
			if (typeof window !== "undefined") {
				try {
					localStorage.removeItem(STORAGE_KEY);
				} catch {}
				removeCookie(COOKIE_NAME);
			}
		}, [])
	};
}

//#endregion
//#region src/components/CookieConsent.tsx
const COOKIE_CATEGORIES = [
	{
		key: "analytics",
		label: "Analytics Cookies",
		description: "Help us understand how visitors interact with our service by collecting and reporting anonymous usage data. Includes Google Analytics and internal analytics.",
		icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.BarChart3, { style: {
			width: "1.25rem",
			height: "1.25rem"
		} })
	},
	{
		key: "marketing",
		label: "Marketing Cookies",
		description: "Used to track visitors across websites for displaying relevant advertisements. Includes Facebook Pixel and ad retargeting tools.",
		icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Megaphone, { style: {
			width: "1.25rem",
			height: "1.25rem"
		} })
	},
	{
		key: "functional",
		label: "Functional Cookies",
		description: "Enable enhanced functionality and personalisation, such as remembering your theme preferences, language settings, and UI customisations.",
		icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Settings, { style: {
			width: "1.25rem",
			height: "1.25rem"
		} })
	}
];
function ToggleSwitch({ checked, onChange, disabled = false }) {
	const trackStyle = {
		width: "2.75rem",
		height: "1.5rem",
		borderRadius: "var(--radius-full)",
		backgroundColor: disabled ? "var(--product-primary)" : checked ? "var(--product-primary)" : "var(--product-muted)",
		position: "relative",
		cursor: disabled ? "not-allowed" : "pointer",
		transition: "background-color var(--transition-quick)",
		opacity: disabled ? .7 : 1,
		flexShrink: 0
	};
	const thumbStyle = {
		width: "1.125rem",
		height: "1.125rem",
		borderRadius: "var(--radius-full)",
		backgroundColor: "white",
		position: "absolute",
		top: "50%",
		transform: `translateY(-50%) translateX(${checked ? "1.375rem" : "0.1875rem"})`,
		transition: "transform var(--transition-quick)",
		boxShadow: "var(--shadow-sm)"
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
		type: "button",
		role: "switch",
		"aria-checked": checked,
		disabled,
		onClick: () => !disabled && onChange(!checked),
		style: trackStyle,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { style: thumbStyle })
	});
}
function CookieConsent({ privacyPolicyUrl = "/privacy", onAcceptAll, onDecline, onCustomize, className }) {
	const { showBanner, preferences, acceptAll, declineAll, updatePreferences } = useCookieConsent();
	const [isExpanded, setIsExpanded] = (0, react.useState)(false);
	const [localPrefs, setLocalPrefs] = (0, react.useState)({
		analytics: preferences.analytics,
		marketing: preferences.marketing,
		functional: preferences.functional
	});
	const handleAcceptAll = () => {
		acceptAll();
		onAcceptAll?.({
			essential: true,
			analytics: true,
			marketing: true,
			functional: true
		});
	};
	const handleDecline = () => {
		declineAll();
		onDecline?.({
			essential: true,
			analytics: false,
			marketing: false,
			functional: false
		});
	};
	const handleSaveCustom = () => {
		updatePreferences(localPrefs);
		const saved = {
			essential: true,
			...localPrefs
		};
		onCustomize?.(saved);
	};
	const bannerStyle = {
		position: "fixed",
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 9999,
		padding: "0 1rem 1rem"
	};
	const cardStyle = {
		maxWidth: "48rem",
		margin: "0 auto",
		background: "var(--glass-bg)",
		backdropFilter: "var(--glass-blur)",
		WebkitBackdropFilter: "blur(16px)",
		border: "1px solid var(--glass-border)",
		borderRadius: "var(--radius-xl)",
		boxShadow: "var(--shadow-2xl)",
		overflow: "hidden"
	};
	const headerStyle = {
		padding: "1.25rem 1.5rem",
		display: "flex",
		alignItems: "flex-start",
		gap: "0.75rem"
	};
	const iconContainerStyle = {
		width: "2.5rem",
		height: "2.5rem",
		borderRadius: "var(--radius-md)",
		backgroundColor: "var(--product-highlight)",
		color: "var(--product-primary)",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexShrink: 0,
		marginTop: "0.125rem"
	};
	const btnBase = {
		padding: "0.625rem 1.25rem",
		borderRadius: "var(--radius-md)",
		fontWeight: 600,
		fontSize: "0.875rem",
		cursor: "pointer",
		transition: "all var(--transition-quick)",
		border: "none",
		fontFamily: "inherit"
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.AnimatePresence, { children: showBanner && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.div, {
		initial: {
			y: "100%",
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		exit: {
			y: "100%",
			opacity: 0
		},
		transition: {
			type: "spring",
			damping: 26,
			stiffness: 300
		},
		style: bannerStyle,
		className: cn(className),
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			style: cardStyle,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					style: headerStyle,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						style: iconContainerStyle,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Cookie, { style: {
							width: "1.25rem",
							height: "1.25rem"
						} })
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: { flex: 1 },
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
							style: {
								fontSize: "1.0625rem",
								fontWeight: 700,
								color: "var(--product-primary)",
								margin: "0 0 0.375rem 0"
							},
							children: "We value your privacy 🍪"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
							style: {
								fontSize: "0.875rem",
								lineHeight: 1.6,
								color: "var(--product-foreground)",
								margin: 0,
								opacity: .85,
								maxWidth: "none"
							},
							children: [
								"We use cookies to enhance your experience, analyse traffic, and serve personalised content. You can choose which cookies to allow.",
								" ",
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
									href: privacyPolicyUrl,
									style: {
										color: "var(--product-secondary)",
										fontWeight: 600,
										textDecoration: "underline",
										textUnderlineOffset: "2px"
									},
									children: "Learn more"
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.AnimatePresence, { children: isExpanded && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(framer_motion.motion.div, {
					initial: {
						height: 0,
						opacity: 0
					},
					animate: {
						height: "auto",
						opacity: 1
					},
					exit: {
						height: 0,
						opacity: 0
					},
					transition: { duration: .25 },
					style: { overflow: "hidden" },
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: {
							padding: "0 1.5rem",
							borderTop: "1px solid var(--product-muted)",
							paddingTop: "1rem"
						},
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								padding: "0.75rem 0",
								borderBottom: "1px solid var(--product-muted)"
							},
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: "0.75rem",
									flex: 1
								},
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									style: {
										...iconContainerStyle,
										width: "2rem",
										height: "2rem",
										backgroundColor: "var(--product-primary)",
										color: "white"
									},
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Shield, { style: {
										width: "1rem",
										height: "1rem"
									} })
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									style: {
										fontWeight: 600,
										fontSize: "0.9375rem",
										margin: 0,
										color: "var(--product-foreground)"
									},
									children: "Essential Cookies"
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									style: {
										fontSize: "0.8125rem",
										color: "var(--product-foreground)",
										opacity: .6,
										margin: 0,
										maxWidth: "none"
									},
									children: "Required for the service to function. Always active."
								})] })]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ToggleSwitch, {
								checked: true,
								onChange: () => {},
								disabled: true
							})]
						}), COOKIE_CATEGORIES.map((cat) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								padding: "0.75rem 0",
								borderBottom: "1px solid var(--product-muted)"
							},
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									alignItems: "center",
									gap: "0.75rem",
									flex: 1
								},
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									style: {
										...iconContainerStyle,
										width: "2rem",
										height: "2rem"
									},
									children: cat.icon
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									style: {
										fontWeight: 600,
										fontSize: "0.9375rem",
										margin: 0,
										color: "var(--product-foreground)"
									},
									children: cat.label
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									style: {
										fontSize: "0.8125rem",
										color: "var(--product-foreground)",
										opacity: .6,
										margin: 0,
										maxWidth: "none"
									},
									children: cat.description
								})] })]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ToggleSwitch, {
								checked: localPrefs[cat.key],
								onChange: (val) => setLocalPrefs((prev) => ({
									...prev,
									[cat.key]: val
								}))
							})]
						}, cat.key))]
					})
				}) }),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					style: {
						padding: "1rem 1.5rem",
						display: "flex",
						flexWrap: "wrap",
						alignItems: "center",
						gap: "0.625rem",
						borderTop: isExpanded ? "1px solid var(--product-muted)" : "none"
					},
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setIsExpanded(!isExpanded),
							style: {
								...btnBase,
								backgroundColor: "transparent",
								color: "var(--product-primary)",
								border: "1.5px solid var(--product-muted)",
								display: "flex",
								alignItems: "center",
								gap: "0.375rem"
							},
							children: isExpanded ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.ChevronUp, { style: {
								width: "1rem",
								height: "1rem"
							} }), "Less options"] }) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.ChevronDown, { style: {
								width: "1rem",
								height: "1rem"
							} }), "Customise"] })
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { style: { flex: 1 } }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleDecline,
							style: {
								...btnBase,
								backgroundColor: "transparent",
								color: "var(--product-foreground)",
								opacity: .7,
								border: "1.5px solid var(--product-muted)"
							},
							children: "Decline"
						}),
						isExpanded && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleSaveCustom,
							style: {
								...btnBase,
								backgroundColor: "var(--product-secondary)",
								color: "var(--product-foreground)",
								boxShadow: "var(--shadow-sm)"
							},
							children: "Save Preferences"
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleAcceptAll,
							style: {
								...btnBase,
								backgroundColor: "var(--product-primary)",
								color: "white",
								boxShadow: "var(--shadow-sm)"
							},
							children: "Accept All"
						})
					]
				})
			]
		})
	}) });
}

//#endregion
//#region src/components/analytics/FacebookSDK.tsx
const FacebookSDK = ({ appId, pixelId }) => {
	(0, react.useEffect)(() => {
		if (pixelId) {
			if (typeof window !== "undefined" && window.fbq) window.fbq("track", "PageView");
		}
	}, [
		(0, next_navigation.usePathname)(),
		(0, next_navigation.useSearchParams)(),
		pixelId
	]);
	if (!appId && !pixelId) return null;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(next_script.default, {
		id: "fb-sdk",
		strategy: "afterInteractive",
		children: `
          window.fbAsyncInit = function() {
            FB.init({
              appId      : '${appId || ""}',
              cookie     : true,
              xfbml      : true,
              version    : 'v19.0'
            });
              
            FB.AppEvents.logPageView();   

            FB.getLoginStatus(function(response) {
              if (window.onFacebookLoginStatus) {
                window.onFacebookLoginStatus(response);
              }
              console.log('Facebook Login Status:', response);
            });
          };

          (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = d.createElement(s); js.id = id;
             js.src = "https://connect.facebook.net/en_US/sdk.js";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));
        `
	}), pixelId && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(next_script.default, {
		id: "fb-pixel",
		strategy: "afterInteractive",
		children: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `
	})] });
};

//#endregion
//#region src/components/TermsAndConditions.tsx
const sectionHeaderStyle = {
	display: "flex",
	alignItems: "center",
	gap: "0.75rem",
	marginBottom: "1.25rem",
	paddingBottom: "0.75rem",
	borderBottom: "2px solid var(--product-muted)"
};
const sectionTitleStyle = {
	fontSize: "1.5rem",
	fontWeight: 700,
	color: "var(--product-primary)",
	margin: 0
};
const iconBoxStyle = {
	width: "2.5rem",
	height: "2.5rem",
	borderRadius: "var(--radius-md)",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "var(--product-highlight)",
	color: "var(--product-primary)",
	flexShrink: 0
};
const paragraphStyle = {
	fontSize: "1rem",
	lineHeight: 1.8,
	color: "var(--product-foreground)",
	marginBottom: "1rem",
	maxWidth: "none"
};
const listStyle = {
	paddingLeft: "1.5rem",
	marginBottom: "1rem",
	listStyleType: "none"
};
const listItemStyle = {
	display: "flex",
	alignItems: "flex-start",
	gap: "0.5rem",
	marginBottom: "0.625rem",
	fontSize: "1rem",
	lineHeight: 1.7,
	color: "var(--product-foreground)"
};
const subheadingStyle = {
	fontSize: "1.125rem",
	fontWeight: 600,
	color: "var(--product-primary)",
	marginTop: "1.25rem",
	marginBottom: "0.625rem"
};
function BulletItem({ children }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
		style: listItemStyle,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.ChevronRight, { style: {
			width: "1rem",
			height: "1rem",
			marginTop: "0.35rem",
			color: "var(--product-secondary)",
			flexShrink: 0
		} }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children })]
	});
}
function TermsAndConditions({ companyName = "BoldMind Technology Solution Enterprise", appName, contactEmail = "legal@boldmind.ng", effectiveDate = "February 18, 2026", additionalSections = [], className }) {
	const { productTheme } = useTheme();
	const resolvedAppName = appName || productTheme.name;
	const heroStyle = {
		background: `linear-gradient(135deg, var(--product-primary), color-mix(in srgb, var(--product-primary) 80%, black))`,
		color: "white",
		padding: "3rem 2rem",
		borderRadius: "var(--radius-xl)",
		marginBottom: "2.5rem",
		position: "relative",
		overflow: "hidden"
	};
	const heroOverlayStyle = {
		position: "absolute",
		inset: 0,
		backgroundImage: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)",
		pointerEvents: "none"
	};
	const sectionCardStyle = {
		backgroundColor: "var(--product-background)",
		border: "1px solid var(--product-muted)",
		borderRadius: "var(--radius-lg)",
		padding: "1.75rem",
		marginBottom: "1.5rem",
		transition: "box-shadow var(--transition-base), border-color var(--transition-base)"
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: cn("max-w-4xl mx-auto px-4 py-8 sm:py-12", className),
		style: { color: "var(--product-foreground)" },
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: heroStyle,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { style: heroOverlayStyle }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					style: {
						position: "relative",
						zIndex: 1
					},
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: "1rem",
								marginBottom: "1rem"
							},
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.FileText, { style: {
								width: "2.5rem",
								height: "2.5rem"
							} }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h1", {
								style: {
									fontSize: "clamp(2rem, 5vw, 2.75rem)",
									fontWeight: 800,
									margin: 0,
									color: "white"
								},
								children: "Terms & Conditions"
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
							style: {
								fontSize: "1.125rem",
								opacity: .9,
								margin: 0,
								maxWidth: "none"
							},
							children: [
								resolvedAppName,
								" — A product of ",
								companyName
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
							style: {
								fontSize: "0.875rem",
								opacity: .7,
								marginTop: "0.5rem",
								marginBottom: 0,
								maxWidth: "none"
							},
							children: [
								"Effective Date: ",
								effectiveDate,
								" • Last Updated: ",
								effectiveDate
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
					style: paragraphStyle,
					children: [
						"Welcome to ",
						resolvedAppName,
						". These Terms and Conditions (“Terms”) govern your access to and use of ",
						resolvedAppName,
						" and any related services, applications, or websites (collectively, the “Service”) provided by ",
						companyName,
						" (“Company”, “we”, “our”, or “us”)."
					]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					style: paragraphStyle,
					children: "By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use the Service."
				})]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: sectionHeaderStyle,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							style: iconBoxStyle,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.UserCheck, { style: {
								width: "1.25rem",
								height: "1.25rem"
							} })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							style: sectionTitleStyle,
							children: "1. Acceptance of Terms"
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "By accessing or using our Service, you confirm that:"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("ul", {
						style: listStyle,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem, { children: "You are at least 13 years of age (or the minimum age in your jurisdiction)" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem, { children: "You have the legal capacity to enter into a binding agreement" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem, { children: "You are not prohibited from using the Service under any applicable laws" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem, { children: "If you are using the Service on behalf of an organisation, you have authority to bind that organisation to these Terms" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: sectionHeaderStyle,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							style: iconBoxStyle,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.FileText, { style: {
								width: "1.25rem",
								height: "1.25rem"
							} })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							style: sectionTitleStyle,
							children: "2. Description of Services"
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
						style: paragraphStyle,
						children: [resolvedAppName, " is part of the BoldMind ecosystem of products and services. The specific features and functionality available to you depend on the product or service you are using, your subscription plan (if applicable), and your geographic location."]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or without notice. We will make reasonable efforts to provide advance notice of material changes."
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: sectionHeaderStyle,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							style: iconBoxStyle,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.UserCheck, { style: {
								width: "1.25rem",
								height: "1.25rem"
							} })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							style: sectionTitleStyle,
							children: "3. User Accounts and Responsibilities"
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle,
						children: "3.1 Account Creation"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "To access certain features of the Service, you may need to create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate."
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle,
						children: "3.2 Account Security"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("ul", {
						style: listStyle,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem, { children: "You are responsible for maintaining the confidentiality of your account credentials" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem, { children: "You are responsible for all activities that occur under your account, whether or not you authorise them" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem, { children: "You must notify us immediately of any unauthorised access to or use of your account" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem, { children: "You must not share your account credentials with any third party" })
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle,
						children: "3.3 Account Termination"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "We reserve the right to suspend or terminate your account at any time, with or without cause and with or without notice, including if we believe you have violated these Terms."
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: sectionHeaderStyle,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							style: iconBoxStyle,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.ShieldCheck, { style: {
								width: "1.25rem",
								height: "1.25rem"
							} })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							style: sectionTitleStyle,
							children: "4. Intellectual Property Rights"
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle,
						children: "4.1 Our Intellectual Property"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
						style: paragraphStyle,
						children: [
							"The Service, including its design, text, graphics, logos, icons, images, audio, video, software, and other content, is owned by or licensed to ",
							companyName,
							" and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, modify, distribute, or create derivative works from any part of the Service without our prior written consent."
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle,
						children: "4.2 User-Generated Content"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "You retain ownership of any content you submit, post, or upload to the Service (“User Content”). By submitting User Content, you grant us a non-exclusive, worldwide, royalty-free licence to use, reproduce, modify, adapt, publish, and display such content solely for the purpose of operating and improving the Service."
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle,
						children: "4.3 Feedback"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "Any feedback, suggestions, or ideas you provide regarding the Service may be used by us without obligation or compensation to you."
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: sectionHeaderStyle,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							style: iconBoxStyle,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Ban, { style: {
								width: "1.25rem",
								height: "1.25rem"
							} })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							style: sectionTitleStyle,
							children: "5. Prohibited Conduct"
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "You agree not to:"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("ul", {
						style: listStyle,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem, { children: "Use the Service for any unlawful purpose or in violation of any applicable laws" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem, { children: "Transmit any content that is harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem, { children: "Impersonate any person or entity or misrepresent your affiliation with any person or entity" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem, { children: "Attempt to gain unauthorised access to the Service, other accounts, or computer systems" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem, { children: "Interfere with, disrupt, or place an undue burden on the Service or its infrastructure" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem, { children: "Use any automated means (bots, scrapers, crawlers) to access or interact with the Service without our express permission" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem, { children: "Reverse engineer, decompile, or disassemble any part of the Service" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem, { children: "Use the Service to send spam, phishing messages, or other unsolicited communications" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem, { children: "Engage in any activity that could damage, disable, or impair the Service" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: sectionHeaderStyle,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							style: iconBoxStyle,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.CreditCard, { style: {
								width: "1.25rem",
								height: "1.25rem"
							} })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							style: sectionTitleStyle,
							children: "6. Payment Terms"
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle,
						children: "6.1 Fees and Pricing"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "Certain features of the Service may require payment. All fees are stated in Nigerian Naira (₦) unless otherwise specified. Prices are subject to change with reasonable notice."
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle,
						children: "6.2 Payment Processing"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "Payments are processed through secure third-party payment processors (such as Paystack and Flutterwave). We do not store your full payment card details on our servers."
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle,
						children: "6.3 Refund Policy"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "Refund requests will be evaluated on a case-by-case basis. Digital products and services that have been accessed or used may not be eligible for a full refund. Subscription cancellations take effect at the end of the current billing period."
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle,
						children: "6.4 Taxes"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "You are responsible for all applicable taxes related to your use of the Service. We may collect and remit taxes on your behalf where required by law."
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: sectionHeaderStyle,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							style: iconBoxStyle,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.AlertTriangle, { style: {
								width: "1.25rem",
								height: "1.25rem"
							} })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							style: sectionTitleStyle,
							children: "7. Disclaimers and Limitation of Liability"
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle,
						children: "7.1 Disclaimer of Warranties"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "THE SERVICE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ACCURACY."
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle,
						children: "7.2 Limitation of Liability"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
						style: paragraphStyle,
						children: [
							"TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ",
							companyName.toUpperCase(),
							" SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, REGARDLESS OF THE CAUSE OF ACTION OR THEORY OF LIABILITY."
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THE SERVICE EXCEED THE AMOUNT PAID BY YOU TO US IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY, OR ₦50,000 (FIFTY THOUSAND NAIRA), WHICHEVER IS GREATER."
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle,
						children: "7.3 Indemnification"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
						style: paragraphStyle,
						children: [
							"You agree to indemnify, defend, and hold harmless ",
							companyName,
							", its officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses arising from your use of the Service or violation of these Terms."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: sectionHeaderStyle,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							style: iconBoxStyle,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.RefreshCw, { style: {
								width: "1.25rem",
								height: "1.25rem"
							} })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							style: sectionTitleStyle,
							children: "8. Termination and Suspension"
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination:"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("ul", {
						style: listStyle,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem, { children: "Your right to use the Service will immediately cease" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem, { children: "We may delete your account and all associated data, subject to our data retention policy" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem, { children: "Any outstanding payments or obligations will remain due" }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BulletItem, { children: "Provisions that by their nature should survive termination will survive (including intellectual property, disclaimers, limitation of liability, and indemnification)" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: sectionHeaderStyle,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							style: iconBoxStyle,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Gavel, { style: {
								width: "1.25rem",
								height: "1.25rem"
							} })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							style: sectionTitleStyle,
							children: "9. Governing Law and Dispute Resolution"
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle,
						children: "9.1 Governing Law"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, including the Nigeria Data Protection Regulation (NDPR), without regard to conflict of law principles."
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle,
						children: "9.2 Dispute Resolution"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "Any dispute arising out of or in connection with these Terms shall first be attempted to be resolved through good faith negotiation. If the dispute cannot be resolved through negotiation within 30 days, either party may submit the dispute to mediation, and if mediation fails, to binding arbitration in Lagos, Nigeria, in accordance with the Arbitration and Conciliation Act of Nigeria."
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle,
						children: "9.3 Class Action Waiver"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "You agree that any disputes will be resolved on an individual basis and that you will not bring or participate in any class, collective, or representative action."
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: sectionHeaderStyle,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							style: iconBoxStyle,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Scale, { style: {
								width: "1.25rem",
								height: "1.25rem"
							} })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							style: sectionTitleStyle,
							children: "10. General Provisions"
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle,
						children: "10.1 Entire Agreement"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
						style: paragraphStyle,
						children: [
							"These Terms, together with our Privacy Policy and any other legal notices or agreements published on the Service, constitute the entire agreement between you and ",
							companyName,
							" regarding the use of the Service."
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle,
						children: "10.2 Severability"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall continue in full force and effect."
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle,
						children: "10.3 Waiver"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "No waiver of any term or condition shall be deemed a further or continuing waiver of such term or any other term, and our failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision."
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle,
						children: "10.4 Assignment"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "You may not assign or transfer your rights under these Terms without our prior written consent. We may assign our rights and obligations under these Terms without restriction."
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						style: subheadingStyle,
						children: "10.5 Changes to Terms"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "We reserve the right to modify these Terms at any time. Material changes will be communicated via the Service or email. Your continued use of the Service after any modifications constitutes your acceptance of the updated Terms."
					})
				]
			}),
			additionalSections.map((section, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: sectionCardStyle,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					style: sectionHeaderStyle,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						style: iconBoxStyle,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.FileText, { style: {
							width: "1.25rem",
							height: "1.25rem"
						} })
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("h2", {
						style: sectionTitleStyle,
						children: [
							index + 11,
							". ",
							section.title
						]
					})]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: section.content })]
			}, index)),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: {
					...sectionCardStyle,
					background: "var(--product-highlight)",
					border: "2px solid var(--product-primary)"
				},
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: sectionHeaderStyle,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							style: {
								...iconBoxStyle,
								backgroundColor: "var(--product-primary)",
								color: "white"
							},
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(lucide_react.Mail, { style: {
								width: "1.25rem",
								height: "1.25rem"
							} })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
							style: sectionTitleStyle,
							children: "Contact Us"
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						style: paragraphStyle,
						children: "If you have any questions or concerns about these Terms and Conditions, please contact us:"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: {
							fontSize: "1rem",
							lineHeight: 2
						},
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								style: {
									...paragraphStyle,
									marginBottom: "0.25rem"
								},
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: companyName })
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
								style: {
									...paragraphStyle,
									marginBottom: "0.25rem"
								},
								children: [
									"Email:",
									" ",
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
										href: `mailto:${contactEmail}`,
										style: {
											color: "var(--product-secondary)",
											fontWeight: 600
										},
										children: contactEmail
									})
								]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
								style: {
									...paragraphStyle,
									marginBottom: "0.25rem"
								},
								children: [
									"Website:",
									" ",
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
										href: "https://boldmind.ng",
										target: "_blank",
										rel: "noopener noreferrer",
										style: {
											color: "var(--product-secondary)",
											fontWeight: 600
										},
										children: "boldmind.ng"
									})
								]
							})
						]
					})
				]
			})
		]
	});
}

//#endregion
//#region src/components/ProductLayout.tsx
const productConfigs = {
	"boldmind-hub": {
		name: "BoldMind Hub",
		theme: "dark",
		footerSections: [{
			title: "🚀 Products",
			links: [
				{
					href: "https://amebogist.ng",
					label: "AmeboGist",
					isExternal: true
				},
				{
					href: "https://educenter.com.ng",
					label: "EduCenter",
					isExternal: true
				},
				{
					href: "/boldmind-os",
					label: "BoldMind OS"
				},
				{
					href: "/products",
					label: "All 31+ Products"
				}
			]
		}, {
			title: "🏢 Company",
			links: [
				{
					href: "/about",
					label: "About BoldMind"
				},
				{
					href: "/mission",
					label: "Our Mission"
				},
				{
					href: "/team",
					label: "Team"
				},
				{
					href: "/careers",
					label: "Careers"
				}
			]
		}]
	},
	"educenter": {
		name: "EduCenter",
		theme: "light",
		footerSections: [{
			title: "🎓 Learning Paths",
			links: [
				{
					href: "/study-hub",
					label: "Study Hub"
				},
				{
					href: "/business-school",
					label: "Business School"
				},
				{
					href: "/ai-lab",
					label: "AI Skills Lab"
				},
				{
					href: "/courses",
					label: "All Courses"
				}
			]
		}, {
			title: "🏢 Company",
			links: [
				{
					href: "/about",
					label: "About EduCenter"
				},
				{
					href: "/instructors",
					label: "Instructors"
				},
				{
					href: "/careers",
					label: "Careers"
				},
				{
					href: "/contact",
					label: "Contact"
				}
			]
		}]
	},
	"boldmind-os": {
		name: "BoldMind OS",
		theme: "dark",
		footerSections: [{
			title: "🧠 OS Modules",
			links: [
				{
					href: "#capture",
					label: "Capture Brain"
				},
				{
					href: "#focus",
					label: "Focus Brain"
				},
				{
					href: "#connect",
					label: "Connect Brain"
				},
				{
					href: "#create",
					label: "Create Brain"
				},
				{
					href: "#reflect",
					label: "Reflect Brain"
				}
			]
		}, {
			title: "🏢 Company",
			links: [
				{
					href: "/about",
					label: "About Us"
				},
				{
					href: "/mission",
					label: "Our Mission"
				},
				{
					href: "/team",
					label: "Team"
				},
				{
					href: "/careers",
					label: "Careers"
				}
			]
		}]
	},
	"amebogist": {
		name: "AmeboGist",
		theme: "dark",
		footerSections: [{
			title: "📰 Categories",
			links: [
				{
					href: "/news",
					label: "News"
				},
				{
					href: "/entertainment",
					label: "Entertainment"
				},
				{
					href: "/sports",
					label: "Sports"
				},
				{
					href: "/tech",
					label: "Tech"
				},
				{
					href: "/lifestyle",
					label: "Lifestyle"
				}
			]
		}, {
			title: "🏢 Company",
			links: [
				{
					href: "/about",
					label: "About AmeboGist"
				},
				{
					href: "/advertise",
					label: "Advertise With Us"
				},
				{
					href: "/contact",
					label: "Contact"
				},
				{
					href: "/privacy",
					label: "Privacy Policy"
				}
			]
		}]
	},
	"default": {
		name: "BoldMind Product",
		theme: "dark",
		footerSections: [{
			title: "📱 Product",
			links: [
				{
					href: "/features",
					label: "Features"
				},
				{
					href: "/pricing",
					label: "Pricing"
				},
				{
					href: "/demo",
					label: "Demo"
				},
				{
					href: "/docs",
					label: "Documentation"
				}
			]
		}, {
			title: "🏢 Company",
			links: [
				{
					href: "/about",
					label: "About Us"
				},
				{
					href: "/contact",
					label: "Contact"
				},
				{
					href: "/privacy",
					label: "Privacy"
				},
				{
					href: "/terms",
					label: "Terms"
				}
			]
		}]
	}
};
function ProductLayout({ children, product, navLinks, cta, showParticles = false, theme }) {
	const config = productConfigs[product] || productConfigs["default"];
	const currentTheme = theme || config?.theme;
	const footerSections = config?.footerSections;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: `min-h-screen ${currentTheme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SuperNavbar, {
				logoSrc: "/logo.png",
				links: navLinks.map((link) => ({
					...link,
					icon: link.icon ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: link.icon }) : void 0
				})),
				cta,
				theme: currentTheme || "dark",
				sticky: true,
				animated: true,
				showParticles
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("main", {
				className: "pt-20",
				children
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SuperFooter, {
				logoSrc: "/logo.png",
				sections: footerSections,
				contactInfo: {
					email: `hello@${product}.ng`,
					phone: "+234 913 834 9271",
					address: "Lagos, Nigeria"
				},
				newsletter: true,
				showStats: true,
				animated: true,
				copyright: `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${config?.name}. A BoldMind Technology Solution.`
			})
		]
	});
}

//#endregion
//#region src/hooks/useMediaQuery.tsx
function useMediaQuery(query) {
	const [matches, setMatches] = (0, react.useState)(false);
	(0, react.useEffect)(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches) setMatches(media.matches);
		const listener = () => setMatches(media.matches);
		media.addEventListener("change", listener);
		return () => media.removeEventListener("change", listener);
	}, [matches, query]);
	return matches;
}

//#endregion
//#region src/hooks/useClickOutside.tsx
function useClickOutside(ref, handler) {
	(0, react.useEffect)(() => {
		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) return;
			handler(event);
		};
		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);
		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, handler]);
}

//#endregion
//#region src/hooks/useDebounce.tsx
function useDebounce(value, delay = 500) {
	const [debouncedValue, setDebouncedValue] = (0, react.useState)(value);
	(0, react.useEffect)(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);
	return debouncedValue;
}

//#endregion
exports.Button = Button;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.Confetti = Confetti;
exports.CookieConsent = CookieConsent;
exports.DyslexiaModeToggle = DyslexiaModeToggle;
exports.DyslexiaToggle = DyslexiaToggle;
exports.ErrorBoundary = ErrorBoundary;
exports.FacebookSDK = FacebookSDK;
exports.FontProvider = FontProvider;
exports.Input = Input;
exports.LoadingSpinner = LoadingSpinner;
exports.Logo = Logo;
exports.Modal = Modal;
exports.ParticleBackground = ParticleBackground;
exports.PricingContent = PricingContent;
exports.PrivacyPolicy = PrivacyPolicy;
exports.ProductLayout = ProductLayout;
exports.SocialLinks = SocialLinks;
exports.StatusBadge = StatusBadge;
exports.SuperFooter = SuperFooter;
exports.SuperNavbar = SuperNavbar;
exports.TermsAndConditions = TermsAndConditions;
exports.ThemeProvider = ThemeProvider;
exports.ThemeToggle = ThemeToggle;
exports.TypewriterEffect = TypewriterEffect;
exports.cn = cn;
exports.detectCurrentProduct = detectCurrentProduct;
exports.formatCurrency = formatCurrency;
exports.formatDate = formatDate;
exports.getProductFromPath = getProductFromPath;
exports.getProductThemeClass = getProductThemeClass;
exports.getProductThemeColors = getProductThemeColors;
exports.truncateText = truncateText;
exports.useClickOutside = useClickOutside;
exports.useDebounce = useDebounce;
exports.useMediaQuery = useMediaQuery;
exports.useProductTheme = useProductTheme;
exports.useTheme = useTheme;
//# sourceMappingURL=index.cjs.map