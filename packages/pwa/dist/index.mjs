//#region src/sw-register.ts
/**
* Register a service worker for PWA functionality
*/
function registerServiceWorker(swPath = "/sw.js") {
	if (typeof window !== "undefined" && "serviceWorker" in navigator) window.addEventListener("load", () => {
		navigator.serviceWorker.register(swPath).then((registration) => {
			console.log("SW registered:", registration.scope);
		}).catch((error) => {
			console.error("SW registration failed:", error);
		});
	});
}

//#endregion
//#region src/offline-cache.ts
/**
* Get offline cache configuration for a specific app
*/
function getOfflineCacheConfig(appName) {
	return {
		cacheName: `boldmind-${appName}-v1`,
		strategies: {
			pages: "network-first",
			assets: "cache-first",
			api: "network-only"
		}
	};
}

//#endregion
//#region src/twa-config.ts
/**
* TWA (Trusted Web Activity) configuration for all BoldMind apps
*/
const TWA_CONFIG = {
	"boldmind-hub": {
		packageName: "ng.boldmind.hub",
		hostName: "boldmind.ng"
	},
	"planai-suite": {
		packageName: "ng.boldmind.planai",
		hostName: "planai.boldmind.ng"
	},
	"boldmind-os": {
		packageName: "ng.boldmind.os",
		hostName: "os.boldmind.ng"
	},
	"boldmind-tools": {
		packageName: "ng.boldmind.tools",
		hostName: "tools.boldmind.ng"
	},
	"naija-fit": {
		packageName: "ng.boldmind.fit",
		hostName: "fit.boldmind.ng"
	},
	"boldmind-concepts": {
		packageName: "ng.boldmind.concept",
		hostName: "concept.boldmind.ng"
	},
	"amebogist": {
		packageName: "ng.amebogist.app",
		hostName: "amebogist.ng"
	},
	"educenter": {
		packageName: "ng.educenter.app",
		hostName: "educenter.com.ng"
	},
	"skillgig": {
		packageName: "ng.educenter.skills",
		hostName: "skills.educenter.com.ng"
	}
};

//#endregion
export { TWA_CONFIG, getOfflineCacheConfig, registerServiceWorker };