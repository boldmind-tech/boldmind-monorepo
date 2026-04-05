//#region src/sw-register.d.ts
/**
 * Register a service worker for PWA functionality
 */
declare function registerServiceWorker(swPath?: string): void;
//#endregion
//#region src/offline-cache.d.ts
/**
 * Get offline cache configuration for a specific app
 */
declare function getOfflineCacheConfig(appName: string): {
  cacheName: string;
  strategies: {
    pages: string;
    assets: string;
    api: string;
  };
};
//#endregion
//#region src/twa-config.d.ts
/**
 * TWA (Trusted Web Activity) configuration for all BoldMind apps
 */
declare const TWA_CONFIG: {
  readonly 'boldmind-hub': {
    readonly packageName: "ng.boldmind.hub";
    readonly hostName: "boldmind.ng";
  };
  readonly 'planai-suite': {
    readonly packageName: "ng.boldmind.planai";
    readonly hostName: "planai.boldmind.ng";
  };
  readonly 'boldmind-os': {
    readonly packageName: "ng.boldmind.os";
    readonly hostName: "os.boldmind.ng";
  };
  readonly 'boldmind-tools': {
    readonly packageName: "ng.boldmind.tools";
    readonly hostName: "tools.boldmind.ng";
  };
  readonly 'naija-fit': {
    readonly packageName: "ng.boldmind.fit";
    readonly hostName: "fit.boldmind.ng";
  };
  readonly 'boldmind-concepts': {
    readonly packageName: "ng.boldmind.concept";
    readonly hostName: "concept.boldmind.ng";
  };
  readonly amebogist: {
    readonly packageName: "ng.amebogist.app";
    readonly hostName: "amebogist.ng";
  };
  readonly educenter: {
    readonly packageName: "ng.educenter.app";
    readonly hostName: "educenter.com.ng";
  };
  readonly skillgig: {
    readonly packageName: "ng.educenter.skills";
    readonly hostName: "skills.educenter.com.ng";
  };
};
//#endregion
export { TWA_CONFIG, getOfflineCacheConfig, registerServiceWorker };