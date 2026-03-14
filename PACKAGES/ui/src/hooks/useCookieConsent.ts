// PACKAGES/ui/src/hooks/useCookieConsent.ts
"use client";

import { useState, useEffect, useCallback } from "react";

export interface CookiePreferences {
    essential: true; // always true — cannot be disabled
    analytics: boolean;
    marketing: boolean;
    functional: boolean;
}

export interface UseCookieConsentReturn {
    /** Current cookie preferences */
    preferences: CookiePreferences;
    /** Whether the user has made any consent choice */
    hasConsented: boolean;
    /** Whether the consent banner should be visible */
    showBanner: boolean;
    /** Accept all cookie categories */
    acceptAll: () => void;
    /** Decline all optional cookies (essential-only) */
    declineAll: () => void;
    /** Update specific preferences */
    updatePreferences: (partial: Partial<Omit<CookiePreferences, "essential">>) => void;
    /** Reset consent (shows banner again) */
    resetConsent: () => void;
}

const STORAGE_KEY = "boldmind_cookie_consent";
const COOKIE_NAME = "boldmind_cookie_consent";

const DEFAULT_PREFERENCES: CookiePreferences = {
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
};

const ALL_ACCEPTED: CookiePreferences = {
    essential: true,
    analytics: true,
    marketing: true,
    functional: true,
};

function setCookie(name: string, value: string, days: number) {
    if (typeof document === "undefined") return;
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

function getCookie(name: string): string | null {
    if (typeof document === "undefined") return null;
    const matches = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return matches ? decodeURIComponent(matches[1] as string) : null;
}

function removeCookie(name: string) {
    if (typeof document === "undefined") return;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax`;
}

function loadPreferences(): { preferences: CookiePreferences; hasConsented: boolean } {
    if (typeof window === "undefined") {
        return { preferences: DEFAULT_PREFERENCES, hasConsented: false };
    }

    // Try localStorage first
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored) as { preferences: CookiePreferences; consented: boolean };
            return {
                preferences: { ...DEFAULT_PREFERENCES, ...parsed.preferences, essential: true },
                hasConsented: parsed.consented === true,
            };
        }
    } catch {
        // Fall through to cookie check
    }

    // Try cookie fallback
    const cookieValue = getCookie(COOKIE_NAME);
    if (cookieValue) {
        try {
            const parsed = JSON.parse(cookieValue) as CookiePreferences;
            return {
                preferences: { ...DEFAULT_PREFERENCES, ...parsed, essential: true },
                hasConsented: true,
            };
        } catch {
            // Invalid cookie
        }
    }

    return { preferences: DEFAULT_PREFERENCES, hasConsented: false };
}

function savePreferences(preferences: CookiePreferences) {
    if (typeof window === "undefined") return;

    const data = { preferences, consented: true, timestamp: new Date().toISOString() };

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
        // localStorage unavailable
    }

    // Also set an HTTP cookie (valid for 365 days) so the server can read it
    setCookie(COOKIE_NAME, JSON.stringify(preferences), 365);
}

export function useCookieConsent(): UseCookieConsentReturn {
    const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);
    const [hasConsented, setHasConsented] = useState(false);
    const [showBanner, setShowBanner] = useState(false);

    // Load saved preferences on mount
    useEffect(() => {
        const { preferences: saved, hasConsented: consented } = loadPreferences();
        setPreferences(saved);
        setHasConsented(consented);
        setShowBanner(!consented);
    }, []);

    const acceptAll = useCallback(() => {
        setPreferences(ALL_ACCEPTED);
        setHasConsented(true);
        setShowBanner(false);
        savePreferences(ALL_ACCEPTED);
    }, []);

    const declineAll = useCallback(() => {
        setPreferences(DEFAULT_PREFERENCES);
        setHasConsented(true);
        setShowBanner(false);
        savePreferences(DEFAULT_PREFERENCES);
    }, []);

    const updatePreferences = useCallback(
        (partial: Partial<Omit<CookiePreferences, "essential">>) => {
            const updated: CookiePreferences = {
                ...preferences,
                ...partial,
                essential: true, // always true
            };
            setPreferences(updated);
            setHasConsented(true);
            setShowBanner(false);
            savePreferences(updated);
        },
        [preferences],
    );

    const resetConsent = useCallback(() => {
        setPreferences(DEFAULT_PREFERENCES);
        setHasConsented(false);
        setShowBanner(true);
        if (typeof window !== "undefined") {
            try {
                localStorage.removeItem(STORAGE_KEY);
            } catch {
                // ignore
            }
            removeCookie(COOKIE_NAME);
        }
    }, []);

    return {
        preferences,
        hasConsented,
        showBanner,
        acceptAll,
        declineAll,
        updatePreferences,
        resetConsent,
    };
}
