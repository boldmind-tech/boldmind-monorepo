"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    SuperNavbar,
    SuperFooter,
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    StatusBadge,
} from "@boldmind/ui";

const SITE_NAME = "AmeboStudio";
const TAGLINE = "Create. Edit. Distribute. Your Stories, Amplified.";

export default function AmeboStudioPage() {
    const [activeTab, setActiveTab] = useState("video");

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "#features", label: "Features" },
        { href: "#pricing", label: "Pricing" },
        { href: "#templates", label: "Templates" },
        { href: "https://amebogist.ng", label: "AmeboGist", isExternal: true },
    ];

    const footerSections = [
        {
            title: "Product",
            links: [
                { href: "#features", label: "Features" },
                { href: "#pricing", label: "Pricing" },
                { href: "#templates", label: "Templates" },
                { href: "/docs", label: "Documentation" },
            ],
        },
        {
            title: "BoldMind Ecosystem",
            links: [
                { href: "https://boldmind.ng", label: "BoldMind Hub", isExternal: true },
                { href: "https://amebogist.ng", label: "AmeboGist", isExternal: true },
                { href: "https://educenter.com.ng", label: "EduCenter", isExternal: true },
                { href: "https://planai.boldmind.ng", label: "PlanAI Suite", isExternal: true },
            ],
        },
        {
            title: "Legal",
            links: [
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/cookies", label: "Cookie Policy" },
            ],
        },
    ];

    const features = [
        {
            icon: "🎬",
            title: "AI-Powered Video Editor",
            description: "Auto-cut, caption, and enhance your videos with intelligent AI. Turn raw footage into viral content in minutes.",
            gradient: "gradient-primary",
        },
        {
            icon: "📸",
            title: "Smart Image Studio",
            description: "Remove backgrounds, enhance quality, and create stunning thumbnails with one-click AI tools.",
            gradient: "gradient-secondary",
        },
        {
            icon: "📝",
            title: "Content Writer AI",
            description: "Generate engaging scripts, captions, and blog posts. Nigerian context-aware, trending topics included.",
            gradient: "gradient-accent",
        },
        {
            icon: "📊",
            title: "Analytics Dashboard",
            description: "Track performance across all platforms. Understand what content resonates with your audience.",
            gradient: "gradient-primary",
        },
        {
            icon: "🎨",
            title: "Brand Templates",
            description: "Professional templates for Nigerian creators. Maintain consistent branding across all content.",
            gradient: "gradient-secondary",
        },
        {
            icon: "🚀",
            title: "Multi-Platform Publishing",
            description: "Publish to YouTube, Instagram, TikTok, and more. Schedule and automate your content distribution.",
            gradient: "gradient-accent",
        },
    ];

    const pricingPlans = [
        {
            name: "Starter",
            price: "₦5,000",
            period: "/ month",
            description: "Perfect for new creators getting started",
            features: [
                "50 AI video edits/month",
                "100 image enhancements",
                "Basic analytics",
                "5 GB cloud storage",
                "Email support",
            ],
            badge: null,
            ctaText: "Start Free Trial",
            ctaVariant: "secondary" as const,
        },
        {
            name: "Creator",
            price: "₦15,000",
            period: "/ month",
            description: "For serious content creators",
            features: [
                "Unlimited AI video edits",
                "Unlimited image enhancements",
                "Advanced analytics",
                "50 GB cloud storage",
                "Priority support",
                "Brand kit & templates",
            ],
            badge: "MOST POPULAR",
            ctaText: "Get Started",
            ctaVariant: "primary" as const,
        },
        {
            name: "Studio",
            price: "₦40,000",
            period: "/ month",
            description: "For teams and media studios",
            features: [
                "Everything in Creator",
                "Team collaboration (5 users)",
                "200 GB cloud storage",
                "White-label options",
                "API access",
                "Dedicated account manager",
            ],
            badge: "ENTERPRISE",
            ctaText: "Contact Sales",
            ctaVariant: "accent" as const,
        },
    ];

    const contentTypes = [
        { id: "video", label: "Video Editing", icon: "🎬" },
        { id: "image", label: "Image Design", icon: "📸" },
        { id: "audio", label: "Podcast Tools", icon: "🎙️" },
        { id: "text", label: "Content Writing", icon: "📝" },
    ];

    const templates = [
        { name: "Viral Shorts", category: "Video", thumbnail: "🎥" },
        { name: "Instagram Reels", category: "Video", thumbnail: "📱" },
        { name: "YouTube Thumbnails", category: "Image", thumbnail: "🖼️" },
        { name: "Podcast Cover", category: "Audio", thumbnail: "🎧" },
        { name: "Blog Post Template", category: "Text", thumbnail: "📄" },
        { name: "Social Media Pack", category: "Image", thumbnail: "🎨" },
    ];

    const stats = [
        { value: "12.5k+", label: "Active Creators" },
        { value: "2M+", label: "Videos Edited" },
        { value: "150M+", label: "Views Generated" },
        { value: "99.9%", label: "Uptime" },
    ];

    return (
        <div className="amebostudio-page">
            <SuperNavbar
                links={navLinks}
                cta={{
                    href: "/register",
                    label: "Get Started Free",
                    variant: "primary",
                }}
                logoSrc="/logo.png"
                sticky={true}
                animated={true}
                showThemeControls={true}
            />

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-background" />
                <div className="hero-gradient-overlay" />

                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-content"
                    >
                        <div className="hero-badge">
                            <span className="badge-dot" />
                            <span className="badge-text">PART OF BOLDMIND ECOSYSTEM</span>
                        </div>

                        <h1 className="hero-title">
                            Create Content That{" "}
                            <span className="hero-title-accent">Goes Viral</span>
                        </h1>

                        <p className="hero-description">
                            AI-powered studio for Nigerian creators. Edit videos, design
                            graphics, write scripts — all in one place. From AmeboGist to
                            YouTube, we amplify your stories.
                        </p>

                        <div className="hero-cta-group">
                            <Button variant="primary" size="lg" className="hero-cta-primary">
                                Start Creating Free
                            </Button>
                            <Button variant="outline" size="lg" className="hero-cta-secondary">
                                Watch Demo
                            </Button>
                        </div>

                        <div className="hero-stats">
                            {stats.map((stat, index) => (
                                <div key={index} className="hero-stat-item">
                                    <div className="hero-stat-value">{stat.value}</div>
                                    <div className="hero-stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            Everything You Need to <span className="text-accent">Create</span>
                        </h2>
                        <p className="section-description">
                            Professional creator tools, powered by AI, built for Nigerian
                            storytellers
                        </p>
                    </div>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card variant="elevated" className="feature-card">
                                    <CardHeader>
                                        <div className="feature-icon">{feature.icon}</div>
                                        <CardTitle>{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{feature.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Type Tabs */}
            <section className="content-types-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            Create Any Type of <span className="text-accent">Content</span>
                        </h2>
                        <p className="section-description">
                            Switch between tools seamlessly. Your entire creative workflow in
                            one platform.
                        </p>
                    </div>

                    <div className="content-tabs">
                        {contentTypes.map((type) => (
                            <button
                                key={type.id}
                                onClick={() => setActiveTab(type.id)}
                                className={`content-tab ${activeTab === type.id ? "content-tab-active" : ""
                                    }`}
                            >
                                <span className="content-tab-icon">{type.icon}</span>
                                <span className="content-tab-label">{type.label}</span>
                            </button>
                        ))}
                    </div>

                    <div className="content-showcase">
                        <div className="content-showcase-visual">
                            <div className="content-showcase-placeholder">
                                <span className="showcase-icon">
                                    {contentTypes.find((t) => t.id === activeTab)?.icon}
                                </span>
                                <h3 className="showcase-title">
                                    {contentTypes.find((t) => t.id === activeTab)?.label}
                                </h3>
                                <p className="showcase-description">
                                    Professional-grade tools with AI assistance
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Templates Section */}
            <section id="templates" className="templates-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            Pre-built <span className="text-accent">Templates</span>
                        </h2>
                        <p className="section-description">
                            Start with proven templates designed for Nigerian audiences
                        </p>
                    </div>

                    <div className="templates-grid">
                        {templates.map((template, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="template-card"
                            >
                                <div className="template-thumbnail">{template.thumbnail}</div>
                                <div className="template-info">
                                    <h4 className="template-name">{template.name}</h4>
                                    <span className="template-category">{template.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="pricing-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            Simple, Transparent <span className="text-accent">Pricing</span>
                        </h2>
                        <p className="section-description">
                            Choose the plan that fits your creative ambition
                        </p>
                    </div>

                    <div className="pricing-grid">
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card
                                    variant="elevated"
                                    className={`pricing-card ${plan.badge ? "pricing-card-featured" : ""
                                        }`}
                                >
                                    {plan.badge && (
                                        <div className="pricing-badge">
                                            <StatusBadge variant="live">{plan.badge}</StatusBadge>
                                        </div>
                                    )}
                                    <CardHeader>
                                        <CardTitle>{plan.name}</CardTitle>
                                        <div className="pricing-amount">
                                            <span className="pricing-price">{plan.price}</span>
                                            <span className="pricing-period">{plan.period}</span>
                                        </div>
                                        <CardDescription>{plan.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="pricing-features">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className="pricing-feature">
                                                    <span className="pricing-feature-icon">✓</span>
                                                    <span className="pricing-feature-text">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button
                                            variant="primary"
                                            className="pricing-cta"
                                        >
                                            {plan.ctaText}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">
                            Ready to Amplify Your Stories?
                        </h2>
                        <p className="cta-description">
                            Join 12,500+ Nigerian creators building their digital empire with
                            AmeboStudio
                        </p>
                        <div className="cta-buttons">
                            <Button variant="primary" size="lg">
                                Start Creating Free
                            </Button>
                            <Button variant="outline" size="lg" className="cta-button-secondary">
                                Schedule a Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <SuperFooter
                logoSrc="/logo.png"
                sections={footerSections}
                contactInfo={{
                    email: "studio@boldmind.ng",
                    phone: "+2349138349271",
                    whatsapp: "+2349138349271",
                    address: "No 5 Olusoji imole str ikosi ketu Lagos Nigeria",
                }}
                copyright={`© ${new Date().getFullYear()} AmeboStudio - BoldMind Ecosystem. All rights reserved.`}
            />
        </div>
    );
}