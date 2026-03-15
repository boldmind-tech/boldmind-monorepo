// PACKAGES/ui/src/components/CookieConsent.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Shield, BarChart3, Megaphone, Settings, ChevronDown, ChevronUp } from "lucide-react";
import { useCookieConsent, type CookiePreferences } from "../hooks/useCookieConsent";
import { cn } from "../lib/utils";

export interface CookieConsentProps {
    privacyPolicyUrl?: string;
    onAcceptAll?: (preferences: CookiePreferences) => void;
    onDecline?: (preferences: CookiePreferences) => void;
    onCustomize?: (preferences: CookiePreferences) => void;
    className?: string;
}

interface CookieCategory {
    key: keyof Omit<CookiePreferences, "essential">;
    label: string;
    description: string;
    icon: React.ReactNode;
}

const COOKIE_CATEGORIES: CookieCategory[] = [
    {
        key: "analytics",
        label: "Analytics Cookies",
        description:
            "Help us understand how visitors interact with our service by collecting and reporting anonymous usage data. Includes Google Analytics and internal analytics.",
        icon: <BarChart3 style={{ width: "1.25rem", height: "1.25rem" }} />,
    },
    {
        key: "marketing",
        label: "Marketing Cookies",
        description:
            "Used to track visitors across websites for displaying relevant advertisements. Includes Facebook Pixel and ad retargeting tools.",
        icon: <Megaphone style={{ width: "1.25rem", height: "1.25rem" }} />,
    },
    {
        key: "functional",
        label: "Functional Cookies",
        description:
            "Enable enhanced functionality and personalisation, such as remembering your theme preferences, language settings, and UI customisations.",
        icon: <Settings style={{ width: "1.25rem", height: "1.25rem" }} />,
    },
];

function ToggleSwitch({
    checked,
    onChange,
    disabled = false,
}: {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}) {
    const trackStyle: React.CSSProperties = {
        width: "2.75rem",
        height: "1.5rem",
        borderRadius: "var(--radius-full)",
        backgroundColor: disabled
            ? "var(--product-primary)"
            : checked
                ? "var(--product-primary)"
                : "var(--product-muted)",
        position: "relative",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background-color var(--transition-quick)",
        opacity: disabled ? 0.7 : 1,
        flexShrink: 0,
    };

    const thumbStyle: React.CSSProperties = {
        width: "1.125rem",
        height: "1.125rem",
        borderRadius: "var(--radius-full)",
        backgroundColor: "white",
        position: "absolute",
        top: "50%",
        transform: `translateY(-50%) translateX(${checked ? "1.375rem" : "0.1875rem"})`,
        transition: "transform var(--transition-quick)",
        boxShadow: "var(--shadow-sm)",
    };

    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            disabled={disabled}
            onClick={() => !disabled && onChange(!checked)}
            style={trackStyle}
        >
            <div style={thumbStyle} />
        </button>
    );
}

export function CookieConsent({
    privacyPolicyUrl = "/privacy",
    onAcceptAll,
    onDecline,
    onCustomize,
    className,
}: CookieConsentProps) {
    const { showBanner, preferences, acceptAll, declineAll, updatePreferences } = useCookieConsent();
    const [isExpanded, setIsExpanded] = useState(false);
    const [localPrefs, setLocalPrefs] = useState<Omit<CookiePreferences, "essential">>({
        analytics: preferences.analytics,
        marketing: preferences.marketing,
        functional: preferences.functional,
    });

    const handleAcceptAll = () => {
        acceptAll();
        const allAccepted: CookiePreferences = { essential: true, analytics: true, marketing: true, functional: true };
        onAcceptAll?.(allAccepted);
    };

    const handleDecline = () => {
        declineAll();
        const essentialOnly: CookiePreferences = { essential: true, analytics: false, marketing: false, functional: false };
        onDecline?.(essentialOnly);
    };

    const handleSaveCustom = () => {
        updatePreferences(localPrefs);
        const saved: CookiePreferences = { essential: true, ...localPrefs };
        onCustomize?.(saved);
    };

    const bannerStyle: React.CSSProperties = {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        padding: "0 1rem 1rem",
    };

    const cardStyle: React.CSSProperties = {
        maxWidth: "48rem",
        margin: "0 auto",
        background: "var(--glass-bg)",
        backdropFilter: "var(--glass-blur)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid var(--glass-border)",
        borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-2xl)",
        overflow: "hidden",
    };

    const headerStyle: React.CSSProperties = {
        padding: "1.25rem 1.5rem",
        display: "flex",
        alignItems: "flex-start",
        gap: "0.75rem",
    };

    const iconContainerStyle: React.CSSProperties = {
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "var(--radius-md)",
        backgroundColor: "var(--product-highlight)",
        color: "var(--product-primary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        marginTop: "0.125rem",
    };

    const btnBase: React.CSSProperties = {
        padding: "0.625rem 1.25rem",
        borderRadius: "var(--radius-md)",
        fontWeight: 600,
        fontSize: "0.875rem",
        cursor: "pointer",
        transition: "all var(--transition-quick)",
        border: "none",
        fontFamily: "inherit",
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "100%", opacity: 0 }}
                    transition={{ type: "spring", damping: 26, stiffness: 300 }}
                    style={bannerStyle}
                    className={cn(className)}
                >
                    <div style={cardStyle}>
                        {/* Header */}
                        <div style={headerStyle}>
                            <div style={iconContainerStyle}>
                                <Cookie style={{ width: "1.25rem", height: "1.25rem" }} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3
                                    style={{
                                        fontSize: "1.0625rem",
                                        fontWeight: 700,
                                        color: "var(--product-primary)",
                                        margin: "0 0 0.375rem 0",
                                    }}
                                >
                                    We value your privacy 🍪
                                </h3>
                                <p
                                    style={{
                                        fontSize: "0.875rem",
                                        lineHeight: 1.6,
                                        color: "var(--product-foreground)",
                                        margin: 0,
                                        opacity: 0.85,
                                        maxWidth: "none",
                                    }}
                                >
                                    We use cookies to enhance your experience, analyse traffic, and serve personalised content. You can
                                    choose which cookies to allow.{" "}
                                    <a
                                        href={privacyPolicyUrl}
                                        style={{
                                            color: "var(--product-secondary)",
                                            fontWeight: 600,
                                            textDecoration: "underline",
                                            textUnderlineOffset: "2px",
                                        }}
                                    >
                                        Learn more
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Customise Panel */}
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                    style={{ overflow: "hidden" }}
                                >
                                    <div
                                        style={{
                                            padding: "0 1.5rem",
                                            borderTop: "1px solid var(--product-muted)",
                                            paddingTop: "1rem",
                                        }}
                                    >
                                        {/* Essential — always on */}
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                padding: "0.75rem 0",
                                                borderBottom: "1px solid var(--product-muted)",
                                            }}
                                        >
                                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flex: 1 }}>
                                                <div
                                                    style={{
                                                        ...iconContainerStyle,
                                                        width: "2rem",
                                                        height: "2rem",
                                                        backgroundColor: "var(--product-primary)",
                                                        color: "white",
                                                    }}
                                                >
                                                    <Shield style={{ width: "1rem", height: "1rem" }} />
                                                </div>
                                                <div>
                                                    <p
                                                        style={{
                                                            fontWeight: 600,
                                                            fontSize: "0.9375rem",
                                                            margin: 0,
                                                            color: "var(--product-foreground)",
                                                        }}
                                                    >
                                                        Essential Cookies
                                                    </p>
                                                    <p
                                                        style={{
                                                            fontSize: "0.8125rem",
                                                            color: "var(--product-foreground)",
                                                            opacity: 0.6,
                                                            margin: 0,
                                                            maxWidth: "none",
                                                        }}
                                                    >
                                                        Required for the service to function. Always active.
                                                    </p>
                                                </div>
                                            </div>
                                            <ToggleSwitch checked={true} onChange={() => { }} disabled />
                                        </div>

                                        {/* Toggleable categories */}
                                        {COOKIE_CATEGORIES.map((cat) => (
                                            <div
                                                key={cat.key}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    padding: "0.75rem 0",
                                                    borderBottom: "1px solid var(--product-muted)",
                                                }}
                                            >
                                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flex: 1 }}>
                                                    <div style={{ ...iconContainerStyle, width: "2rem", height: "2rem" }}>{cat.icon}</div>
                                                    <div>
                                                        <p
                                                            style={{
                                                                fontWeight: 600,
                                                                fontSize: "0.9375rem",
                                                                margin: 0,
                                                                color: "var(--product-foreground)",
                                                            }}
                                                        >
                                                            {cat.label}
                                                        </p>
                                                        <p
                                                            style={{
                                                                fontSize: "0.8125rem",
                                                                color: "var(--product-foreground)",
                                                                opacity: 0.6,
                                                                margin: 0,
                                                                maxWidth: "none",
                                                            }}
                                                        >
                                                            {cat.description}
                                                        </p>
                                                    </div>
                                                </div>
                                                <ToggleSwitch
                                                    checked={localPrefs[cat.key]}
                                                    onChange={(val) => setLocalPrefs((prev) => ({ ...prev, [cat.key]: val }))}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Action Buttons */}
                        <div
                            style={{
                                padding: "1rem 1.5rem",
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "center",
                                gap: "0.625rem",
                                borderTop: isExpanded ? "1px solid var(--product-muted)" : "none",
                            }}
                        >
                            {/* Customise toggle */}
                            <button
                                type="button"
                                onClick={() => setIsExpanded(!isExpanded)}
                                style={{
                                    ...btnBase,
                                    backgroundColor: "transparent",
                                    color: "var(--product-primary)",
                                    border: "1.5px solid var(--product-muted)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.375rem",
                                }}
                            >
                                {isExpanded ? (
                                    <>
                                        <ChevronUp style={{ width: "1rem", height: "1rem" }} />
                                        Less options
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown style={{ width: "1rem", height: "1rem" }} />
                                        Customise
                                    </>
                                )}
                            </button>

                            <div style={{ flex: 1 }} />

                            {/* Decline */}
                            <button
                                type="button"
                                onClick={handleDecline}
                                style={{
                                    ...btnBase,
                                    backgroundColor: "transparent",
                                    color: "var(--product-foreground)",
                                    opacity: 0.7,
                                    border: "1.5px solid var(--product-muted)",
                                }}
                            >
                                Decline
                            </button>

                            {/* Save preferences (visible only when expanded) */}
                            {isExpanded && (
                                <button
                                    type="button"
                                    onClick={handleSaveCustom}
                                    style={{
                                        ...btnBase,
                                        backgroundColor: "var(--product-secondary)",
                                        color: "var(--product-foreground)",
                                        boxShadow: "var(--shadow-sm)",
                                    }}
                                >
                                    Save Preferences
                                </button>
                            )}

                            {/* Accept All */}
                            <button
                                type="button"
                                onClick={handleAcceptAll}
                                style={{
                                    ...btnBase,
                                    backgroundColor: "var(--product-primary)",
                                    color: "white",
                                    boxShadow: "var(--shadow-sm)",
                                }}
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
