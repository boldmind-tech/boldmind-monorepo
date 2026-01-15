// packages/ui/src/components/SuperFooter.tsx - UPDATED VERSION
"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Heart,
  Coffee,
  Rocket,
  ExternalLink,
  Sparkles,
  TrendingUp,
  Users,
  Globe,
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  BookOpen,
  GraduationCap,
  Newspaper,
  Brain,
  Zap,
  Briefcase,
  Shield,
  ShoppingCart,
  DollarSign,
  Wifi,
  Droplets,
  Utensils,
  Battery,
  AlertCircle,
  Smartphone,
  Tablet,
  Mic,
} from "lucide-react";
import { useTheme } from "../providers/theme-provider";
import { cn } from "../lib/utils";
import {
  BOLDMIND_PRODUCTS,
  Product,
  getProductBySlug,
  getLiveProducts,
  getProductsByCategory,
  ProductStatus,
} from "@boldmind/utils";

export interface FooterLink {
  href: string;
  label: string;
  icon?: React.ReactNode;
  isExternal?: boolean;
  badge?: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SuperFooterProps {
  logoSrc?: string;
  sections?: FooterSection[];
  contactInfo?: {
    email?: string;
    phone?: string;
    whatsapp?: string;
    address?: string;
  };
  socialLinks?: {
    platform: string;
    url: string;
    icon: React.ReactNode;
  }[];
  newsletter?: boolean;
  showStats?: boolean;
  animated?: boolean;
  className?: string;
  copyright?: string;
  variant?: "default" | "minimal" | "compact";
}

export function SuperFooter({
  logoSrc = "/logo.png",
  sections,
  contactInfo,
  socialLinks = [],
  newsletter = true,
  showStats = true,
  animated = true,
  className = "",
  copyright,
  variant = "default",
}: SuperFooterProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { productTheme } = useTheme();

  const currentYear = new Date().getFullYear();

  // Get the current product data
  const currentProduct = useMemo(() => {
    return getProductBySlug(productTheme.slug) || BOLDMIND_PRODUCTS[0]; // Fallback to first product
  }, [productTheme.slug]);

  // Get all live products (except current one) for related products section
  const liveProducts = useMemo(() => {
    return getLiveProducts()
      .filter((p) => p.slug !== productTheme.slug)
      .slice(0, 4);
  }, [productTheme.slug]);

  // Get icon component based on product icon string
  const getIconComponent = (iconString: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      "📰": <Newspaper className="w-4 h-4" />,
      "🎓": <GraduationCap className="w-4 h-4" />,
      "🤖": <Brain className="w-4 h-4" />,
      "🧠": <Brain className="w-4 h-4" />,
      "🎬": <Video className="w-4 h-4" />,
      "💼": <Briefcase className="w-4 h-4" />,
      "📊": <TrendingUp className="w-4 h-4" />,
      "💰": <DollarSign className="w-4 h-4" />,
      "📈": <TrendingUp className="w-4 h-4" />,
      "🎨": <Palette className="w-4 h-4" />,
      "🛍️": <ShoppingCart className="w-4 h-4" />,
      "📧": <Mail className="w-4 h-4" />,
      "🔍": <Search className="w-4 h-4" />,
      "🛡️": <Shield className="w-4 h-4" />,
      "💪": <Dumbbell className="w-4 h-4" />,
      "🔧": <Wrench className="w-4 h-4" />,
      "👥": <Users className="w-4 h-4" />,
      "💱": <RefreshCw className="w-4 h-4" />,
      "🧾": <Receipt className="w-4 h-4" />,
      "⚡": <Zap className="w-4 h-4" />,
      "🌾": <Sprout className="w-4 h-4" />,
      "✍️": <PenTool className="w-4 h-4" />,
      "🎭": <Theater className="w-4 h-4" />,
      "🎤": <Mic className="w-4 h-4" />,
      "📱": <Smartphone className="w-4 h-4" />,
      "📚": <BookOpen className="w-4 h-4" />,
    };
    return iconMap[iconString] || <Sparkles className="w-4 h-4" />;
  };

  // Dynamic sections based on current product
  const getDefaultSections = () => {
    const baseSections: FooterSection[] = [
      {
        title: `${currentProduct.icon} ${currentProduct.name}`,
        links: [
          { href: "/features", label: "Features", icon: "✨" },
          { href: "/pricing", label: "Pricing", icon: "💰" },
          { href: "/demo", label: "Demo", icon: "🎥" },
          { href: "/docs", label: "Documentation", icon: "📚" },
          ...(currentProduct.links?.website
            ? [
                {
                  href: currentProduct.links.website,
                  label: "Live Website",
                  icon: "🌐",
                  isExternal: true,
                },
              ]
            : []),
        ],
      },
      {
        title: "🚀 BoldMind Products",
        links: liveProducts.map((product) => ({
          href: `https://${product.slug}.boldmind.tech`,
          label: product.name,
          icon: product.icon,
          isExternal: true,
          badge:
            product.status === ("LIVE" as ProductStatus)
              ? "🚀 LIVE"
              : undefined,
        })),
      },
      {
        title: "🏢 Company",
        links: [
          { href: "/about", label: "About BoldMind", icon: "🏛️" },
          { href: "/ecosystem", label: "Our Ecosystem", icon: "🌐" },
          { href: "/impact", label: "Impact", icon: "📈" },
          { href: "/careers", label: "Careers", icon: "👥", badge: "Hiring" },
          { href: "/contact", label: "Contact Us", icon: "✉️" },
        ],
      },
    ];

    return sections || baseSections;
  };

  // Dynamic social links based on product
  const getSocialLinks = () => {
    const socials = {
      "boldmind-hub": [
        {
          platform: "Twitter",
          url: "https://twitter.com/boldmindtech",
          icon: <Twitter className="w-5 h-5" />,
        },
        {
          platform: "LinkedIn",
          url: "https://linkedin.com/company/boldmind",
          icon: <Linkedin className="w-5 h-5" />,
        },
        {
          platform: "Instagram",
          url: "https://instagram.com/boldmindtech",
          icon: <Instagram className="w-5 h-5" />,
        },
        {
          platform: "GitHub",
          url: "https://github.com/boldmind-tech",
          icon: <Github className="w-5 h-5" />,
        },
      ],
      default: [
        {
          platform: "Twitter",
          url: "https://twitter.com/boldmindtech",
          icon: <Twitter className="w-5 h-5" />,
        },
        {
          platform: "LinkedIn",
          url: "https://linkedin.com/company/boldmind",
          icon: <Linkedin className="w-5 h-5" />,
        },
        {
          platform: "Instagram",
          url: "https://instagram.com/boldmindtech",
          icon: <Instagram className="w-5 h-5" />,
        },
      ],
    };

    return socialLinks.length > 0
      ? socialLinks
      : socials[productTheme.slug as keyof typeof socials] || socials.default;
  };

  const footerSections = getDefaultSections();
  const displaySocialLinks = getSocialLinks();

  // Dynamic stats based on product
  const getStats = () => {
    // For non-live products, show projected stats
    if (currentProduct.status !== ("LIVE" as ProductStatus)) {
      return [
        {
          icon: TrendingUp,
          value: "Coming",
          label: "Status",
          color: "bg-yellow-500",
        },
        {
          icon: Calendar,
          value: currentProduct.timeline?.split(" ")[1] || "2026",
          label: "Launch",
          color: "bg-blue-500",
        },
        {
          icon: Users,
          value: currentProduct.teamSize || "2",
          label: "Team Size",
          color: "bg-purple-500",
        },
        {
          icon: Rocket,
          value: currentProduct.priority.toString(),
          label: "Priority",
          color: "bg-green-500",
        },
      ];
    }

    // For live products, show actual stats
    return [
      {
        icon: Users,
        value: currentProduct.users || "Growing",
        label: "Users",
        color: "bg-blue-500",
      },
      {
        icon: DollarSign,
        value: `₦${((currentProduct.monthlyRevenue || 0) / 1000).toFixed(0)}K`,
        label: "Monthly Revenue",
        color: "bg-green-500",
      },
      {
        icon: TrendingUp,
        value: currentProduct.version,
        label: "Version",
        color: "bg-purple-500",
      },
      {
        icon: Shield,
        value: currentProduct.status,
        label: "Status",
        color: "bg-orange-500",
      },
    ];
  };

  const stats = getStats();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setEmail("");
    setTimeout(() => setIsSubmitted(false), 3000);
    setIsSubmitting(false);
  };

  // Get the first letter of product name for logo
  const productInitial = currentProduct.name.charAt(0);

  // Get product-specific color
  const getProductColor = () => {
    const colorMap: Record<string, string> = {
      amebogist: "#10B981", // Green
      educenter: "#3B82F6", // Blue
      "boldmind-hub": "#F59E0B", // Amber
      "ai-receptionist": "#8B5CF6", // Purple
      "boldmind-os": "#EC4899", // Pink
    };
    return colorMap[productTheme.slug] || productTheme.colors.primary;
  };

  const productColor = getProductColor();

  // Minimal variant
  if (variant === "minimal") {
    return (
      <footer
        className={cn(
          "bg-gradient-to-b from-gray-900 to-gray-950 text-white border-t border-white/10",
          className,
        )}
        style={{
          background: `linear-gradient(to bottom, ${productColor}20, ${productColor}10)`,
        }}
        suppressHydrationWarning
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Dynamic Logo */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform hover:scale-110"
                style={{ backgroundColor: productColor }}
              >
                <span className="text-white font-bold text-lg">
                  {productInitial}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">{currentProduct.name}</span>
                <span className="text-xs text-gray-400">
                  {currentProduct.status === ("LIVE" as any)
                    ? "🚀 LIVE"
                    : "🔨 BUILDING"}
                </span>
              </div>
            </div>

            {/* Dynamic Copyright */}
            <p className="text-gray-400 text-sm text-center">
              {copyright ||
                `© ${currentYear} ${currentProduct.name}. ${currentProduct.description.split(".")[0]}`}
            </p>

            {/* Dynamic Social Links */}
            <div className="flex items-center gap-3">
              {displaySocialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors hover:scale-110 p-2 hover:bg-white/5 rounded-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Compact variant
  if (variant === "compact") {
    return (
      <footer className={cn("bg-gray-900 text-white", className)}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and description */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: productColor }}
                >
                  <span className="text-white font-black text-xl">
                    {productInitial}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{currentProduct.name}</h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {currentProduct.category}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                {currentProduct.description.substring(0, 120)}...
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {footerSections[0].links.slice(0, 4).map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.icon} {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                {displaySocialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-4">
                {copyright || `© ${currentYear} BoldMind Technology`}
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Default full variant
  return (
    <footer
      className={cn(
        "bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden",
        className,
      )}
      style={{
        background: `linear-gradient(to bottom, ${productColor}15, ${productColor}05)`,
      }}
      suppressHydrationWarning
    >
      {animated && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => {
            // Generate deterministic positions based on index
            const x = (i * 7) % 100; // Deterministic X position
            const y = (i * 13) % 100; // Deterministic Y position

            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  backgroundColor: `${productColor}30`,
                  left: `${x}%`,
                  top: `${y}%`,
                }}
                animate={{
                  y: "-100%",
                }}
                transition={{
                  duration: 10 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            );
          })}
        </div>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Stats Section */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-current transition-all group"
                style={{
                  borderColor: `${productColor}30`,
                  backgroundColor: `${productColor}10`,
                }}
              >
                <div
                  className="inline-block p-2 rounded-lg mb-3 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: productColor }}
                >
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div
                  className="text-2xl font-black mb-1"
                  style={{ color: productColor }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform hover:scale-105"
                style={{ backgroundColor: productColor }}
              >
                <span className="text-white font-black text-2xl">
                  {productInitial}
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{currentProduct.name}</h2>
                <p className="text-gray-400">
                  {currentProduct.category.toUpperCase()}
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">{currentProduct.description}</p>

            {/* Social Links */}
            <div className="flex gap-3">
              {displaySocialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all hover:scale-110"
                  style={{ color: productColor }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      target={link.isExternal ? "_blank" : undefined}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                    >
                      <span className="opacity-60 group-hover:opacity-100">
                        {getIconComponent(link.icon as string)}
                      </span>
                      <span>{link.label}</span>
                      {link.badge && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/10">
                          {link.badge}
                        </span>
                      )}
                      {link.isExternal && (
                        <ExternalLink className="w-3 h-3 opacity-50" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          {newsletter && (
            <div className="lg:col-span-4">
              <h3 className="font-semibold text-lg mb-4">📬 Stay Updated</h3>
              <p className="text-gray-400 mb-4">
                Get the latest updates about {currentProduct.name} and BoldMind
                products
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-current transition-colors"
                    style={{ borderColor: `${productColor}30` }}
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 rounded-lg font-medium transition-all disabled:opacity-50"
                    style={{
                      backgroundColor: productColor,
                      color: "white",
                    }}
                  >
                    {isSubmitting
                      ? "Sending..."
                      : isSubmitted
                        ? "🎉 Subscribed!"
                        : "Subscribe"}
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              {copyright ||
                `© ${currentYear} BoldMind Technology Solution Enterprise. All rights reserved.`}
            </div>

            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper icons component
function Video(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M10 9l5 3-5 3V9z" />
    </svg>
  );
}

function Search(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function Wrench(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function Dumbbell(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M6.5 6.5l11 11M21 21l-1-1M3 3l1 1M9 4l-2 2m10 10l2-2M4 9l2-2m10 10l2 2M19 4l-2 2m-8 8l-2 2" />
    </svg>
  );
}

function Palette(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="13.5" cy="6.5" r=".5" />
      <circle cx="17.5" cy="10.5" r=".5" />
      <circle cx="8.5" cy="7.5" r=".5" />
      <circle cx="6.5" cy="12.5" r=".5" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1-2.76 0-5-2.24-5-5 0-2.76 2.24-5 5-5 2.76 0 5 2.24 5 5 0 1.25-.48 2.45-1.36 3.36-.19.23-.47.37-.77.37-.55 0-1 .45-1 1v2.27c0 .37.2.69.5.86 1.07.63 2.27.91 3.5.91 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  );
}

function Sprout(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M17 8c0-2.21-1.79-4-4-4S9 5.79 9 8s1.79 4 4 4 4-1.79 4-4zM3 8c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm12 8c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4z" />
    </svg>
  );
}

function PenTool(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

function Theater(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M18 4l3 3-3 3" />
      <path d="M18 20l3-3-3-3" />
      <path d="M3 7h3a5 5 0 0 1 5 5 5 5 0 0 1 5 5h3" />
    </svg>
  );
}

function Calendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function RefreshCw(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M23 4v6h-6" />
      <path d="M1 20v-6h6" />
      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
    </svg>
  );
}

function Receipt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z" />
      <path d="M16 8h-6" />
      <path d="M8 12h8" />
      <path d="M10 16h4" />
    </svg>
  );
}
