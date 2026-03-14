// ─────────────────────────────────────────────────────────────────────────────
// packages/ui/src/components/DyslexiaToggle.tsx
// ─────────────────────────────────────────────────────────────────────────────

"use client";

import { useFontMode } from "./FontProvider";

export interface DyslexiaToggleProps {
  /** compact = icon only, default = icon + label */
  variant?: "compact" | "default";
  className?: string;
}

export function DyslexiaToggle({
  variant = "default",
  className = "",
}: DyslexiaToggleProps) {
  const { isDyslexic, toggleFont, fontMode } = useFontMode();

  return (
    <button
      onClick={toggleFont}
      aria-pressed={isDyslexic}
      aria-label={
        isDyslexic
          ? "Switch to standard font"
          : "Switch to OpenDyslexic font"
      }
      title={
        isDyslexic
          ? "Using OpenDyslexic — click to switch to standard font"
          : "Click to switch to OpenDyslexic font"
      }
      className={[
        // Base styles
        "inline-flex items-center gap-2 rounded-full border-2 transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "focus-visible:ring-[var(--product-secondary)]",
        // Active state — OpenDyslexic on
        isDyslexic
          ? "bg-[var(--product-primary)] border-[var(--product-primary)] text-white"
          : "bg-transparent border-[var(--product-muted)] text-[var(--product-foreground)] hover:border-[var(--product-primary)]",
        // Size
        variant === "compact"
          ? "w-9 h-9 justify-center p-0"
          : "px-4 py-2 text-sm font-bold",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Aa icon — uses the OpenDyslexic font style visually */}
      <span
        aria-hidden="true"
        className="text-base leading-none"
        style={{
          fontFamily: isDyslexic
            ? "'OpenDyslexic', sans-serif"
            : "inherit",
          fontWeight: 700,
        }}
      >
        Aa
      </span>

      {variant === "default" && (
        <span className="leading-none">
          {isDyslexic ? "OpenDyslexic" : "Standard Font"}
        </span>
      )}
    </button>
  );
}