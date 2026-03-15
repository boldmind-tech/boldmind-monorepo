// ─────────────────────────────────────────────────────────────────────────────
// packages/ui/src/primitives/FontProvider.tsx
// ─────────────────────────────────────────────────────────────────────────────
// FIXES:
//   1. Default is now 'dyslexic' (OpenDyslexic) — matches CSS default
//   2. SSR-safe: no localStorage read during server render → no hydration flash
//   3. Exports FontProvider component (not just hook) for use in layouts
//   4. Applies data-font attribute on <html>, not just body class, so CSS
//      variables can scope font changes cleanly
// ─────────────────────────────────────────────────────────────────────────────

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type FontMode = "standard" | "dyslexic";

const STORAGE_KEY = "boldmind-font-mode";

// Default is dyslexic — OpenDyslexic is the BoldMind brand font
const DEFAULT_FONT_MODE: FontMode = "dyslexic";

// ─── Context ──────────────────────────────────────────────────────────────────

interface FontContextType {
  fontMode: FontMode;
  setFontMode: (mode: FontMode) => void;
  toggleFont: () => void;
  isDyslexic: boolean;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useFontMode(): FontContextType {
  const ctx = useContext(FontContext);
  if (!ctx) throw new Error("useFontMode must be used within <FontProvider>");
  return ctx;
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export interface FontProviderProps {
  children: React.ReactNode;
  /**
   * Override the default font mode for this provider instance.
   * Useful when a specific app wants to force a mode.
   */
  defaultMode?: FontMode;
}

export function FontProvider({
  children,
  defaultMode = DEFAULT_FONT_MODE,
}: FontProviderProps) {
  // Start with undefined to avoid SSR/client mismatch
  const [fontMode, setFontModeState] = useState<FontMode | undefined>(
    undefined,
  );
  const [mounted, setMounted] = useState(false);

  // Read localStorage only on client after mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as FontMode | null;
    const resolved: FontMode =
      saved === "standard" || saved === "dyslexic" ? saved : defaultMode;
    setFontModeState(resolved);
    setMounted(true);
  }, [defaultMode]);

  // Apply font mode to <html> element via data attribute + class
  useEffect(() => {
    if (!fontMode || !mounted) return;

    const html = document.documentElement;
    const body = document.body;

    // data-font attribute for CSS variable scoping
    html.setAttribute("data-font", fontMode);

    // Class on body for any utility-class-based overrides
    body.classList.remove("font-standard", "font-dyslexic");
    body.classList.add(`font-${fontMode}`);
  }, [fontMode, mounted]);

  const setFontMode = useCallback((mode: FontMode) => {
    setFontModeState(mode);
    localStorage.setItem(STORAGE_KEY, mode);
  }, []);

  const toggleFont = useCallback(() => {
    setFontMode(fontMode === "dyslexic" ? "standard" : "dyslexic");
  }, [fontMode, setFontMode]);

  // During SSR and initial hydration, render children without font class
  // to avoid flash. The useEffect will apply the correct class immediately
  // after mount before paint (via synchronous layout effect timing).
  const value: FontContextType = {
    fontMode: fontMode ?? defaultMode,
    setFontMode,
    toggleFont,
    isDyslexic: (fontMode ?? defaultMode) === "dyslexic",
  };

  return (
    <FontContext.Provider value={value}>
      {/* Inline script runs before React hydration to prevent FOUC */}
      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var mode = localStorage.getItem('${STORAGE_KEY}') || '${defaultMode}';
                document.documentElement.setAttribute('data-font', mode);
                document.body.classList.add('font-' + mode);
              } catch(e) {
                document.documentElement.setAttribute('data-font', '${defaultMode}');
                document.body.classList.add('font-${defaultMode}');
              }
            })();
          `,
        }}
      />
      {children}
    </FontContext.Provider>
  );
}