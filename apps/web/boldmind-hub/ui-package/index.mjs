// src/components/Navbar.tsx
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { jsx, jsxs } from "react/jsx-runtime";
var Navbar = ({
  logoSrc = "/logo.png",
  links,
  cta
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredCta, setHoveredCta] = useState(false);
  const [hoveredMobileCta, setHoveredMobileCta] = useState(false);
  const [hoveredMenuButton, setHoveredMenuButton] = useState(false);
  const [hoveredMobileLinks, setHoveredMobileLinks] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && mobileMenuRef.current && menuButtonRef.current && !mobileMenuRef.current.contains(event.target) && !menuButtonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleMobileLinkHover = (href, isHovering) => {
    setHoveredMobileLinks((prev) => ({
      ...prev,
      [href]: isHovering
    }));
  };
  return /* @__PURE__ */ jsx("nav", { style: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: "all 0.3s",
    backgroundColor: scrolled ? "#00143C" : "rgba(0, 20, 60, 0.95)",
    boxShadow: scrolled ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)" : "none",
    backdropFilter: scrolled ? "none" : "blur(8px)"
  }, children: /* @__PURE__ */ jsxs("div", { style: { width: "100%" }, children: [
    /* @__PURE__ */ jsx("div", { style: {
      maxWidth: "80rem",
      margin: "0 auto",
      padding: "0 1rem"
    }, children: /* @__PURE__ */ jsxs("div", { style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "5rem"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ jsxs(Link, { href: "/", style: {
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        textDecoration: "none"
      }, children: [
        !imageError ? /* @__PURE__ */ jsx("div", { style: {
          position: "relative",
          width: "2.5rem",
          height: "2.5rem",
          flexShrink: 0
        }, children: /* @__PURE__ */ jsx(
          Image,
          {
            src: logoSrc,
            alt: "BoldMind Logo",
            fill: true,
            style: { objectFit: "contain" },
            priority: true,
            onError: () => setImageError(true)
          }
        ) }) : /* @__PURE__ */ jsx("div", { style: {
          width: "2.5rem",
          height: "2.5rem",
          backgroundColor: "#FFC800",
          borderRadius: "0.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0
        }, children: /* @__PURE__ */ jsx("span", { style: {
          fontSize: "1.5rem",
          fontWeight: 900,
          color: "#00143C"
        }, children: "B" }) }),
        /* @__PURE__ */ jsxs("div", { style: {
          display: isMobile ? "none" : "block"
        }, children: [
          /* @__PURE__ */ jsxs("span", { style: {
            fontSize: "1.5rem",
            fontWeight: 900,
            color: "white"
          }, children: [
            "Bold",
            /* @__PURE__ */ jsx("span", { style: { color: "#FFC800" }, children: "Mind" })
          ] }),
          /* @__PURE__ */ jsx("p", { style: {
            fontSize: "0.75rem",
            color: "#D1D5DB",
            marginTop: "-0.25rem"
          }, children: "Technology Solutions" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { style: {
        display: isMobile ? "none" : "flex",
        alignItems: "center",
        gap: "1.5rem"
      }, children: [
        links.map((link) => /* @__PURE__ */ jsxs(
          Link,
          {
            href: link.href,
            onMouseEnter: () => setHoveredLink(link.href),
            onMouseLeave: () => setHoveredLink(null),
            style: {
              color: hoveredLink === link.href ? "#FFC800" : "#D1D5DB",
              fontWeight: 500,
              textDecoration: "none",
              fontSize: "0.875rem",
              position: "relative",
              transition: "color 0.2s"
            },
            children: [
              link.label,
              /* @__PURE__ */ jsx("span", { style: {
                position: "absolute",
                bottom: "-0.25rem",
                left: 0,
                width: hoveredLink === link.href ? "100%" : "0",
                height: "0.125rem",
                backgroundColor: "#FFC800",
                transition: "width 0.3s"
              } })
            ]
          },
          link.href
        )),
        cta && /* @__PURE__ */ jsx(
          "a",
          {
            href: cta.href,
            target: "_blank",
            rel: "noopener noreferrer",
            onMouseEnter: () => setHoveredCta(true),
            onMouseLeave: () => setHoveredCta(false),
            style: {
              marginLeft: "1rem",
              padding: "0.625rem 1.25rem",
              backgroundColor: hoveredCta ? "#FFD700" : "#FFC800",
              color: "#00143C",
              fontWeight: "bold",
              borderRadius: "0.5rem",
              textDecoration: "none",
              transition: "all 0.2s",
              fontSize: "0.875rem",
              boxShadow: hoveredCta ? "0 20px 25px -5px rgba(0, 0, 0, 0.1)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
            },
            children: cta.label
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { style: {
        display: isMobile ? "flex" : "none",
        alignItems: "center",
        gap: "0.5rem"
      }, children: [
        cta && /* @__PURE__ */ jsx(
          "a",
          {
            href: cta.href,
            target: "_blank",
            rel: "noopener noreferrer",
            onMouseEnter: () => setHoveredMobileCta(true),
            onMouseLeave: () => setHoveredMobileCta(false),
            style: {
              padding: "0.5rem 0.75rem",
              backgroundColor: hoveredMobileCta ? "#FFD700" : "#FFC800",
              color: "#00143C",
              fontWeight: "bold",
              borderRadius: "0.5rem",
              textDecoration: "none",
              fontSize: "0.75rem",
              transition: "background-color 0.2s"
            },
            children: cta.label
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            ref: menuButtonRef,
            onClick: () => setIsOpen(!isOpen),
            onMouseEnter: () => setHoveredMenuButton(true),
            onMouseLeave: () => setHoveredMenuButton(false),
            style: {
              color: hoveredMenuButton ? "#FFC800" : "#D1D5DB",
              background: "none",
              border: "none",
              padding: "0.5rem",
              cursor: "pointer",
              transition: "color 0.2s"
            },
            "aria-label": "Toggle menu",
            children: /* @__PURE__ */ jsx(
              "svg",
              {
                style: { width: "1.5rem", height: "1.5rem" },
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: isOpen ? /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12"
                  }
                ) : /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M4 6h16M4 12h16M4 18h16"
                  }
                )
              }
            )
          }
        )
      ] })
    ] }) }),
    isOpen && isMobile && /* @__PURE__ */ jsx("div", { ref: mobileMenuRef, style: {
      borderTop: "1px solid #374151",
      position: "absolute",
      top: "5rem",
      left: 0,
      right: 0,
      backgroundColor: "#00143C",
      zIndex: 50
    }, children: /* @__PURE__ */ jsx("div", { style: {
      padding: "0 1rem",
      paddingTop: "1rem",
      paddingBottom: "1rem"
    }, children: /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: "0.5rem" }, children: links.map((link) => /* @__PURE__ */ jsx(
      Link,
      {
        href: link.href,
        onMouseEnter: () => handleMobileLinkHover(link.href, true),
        onMouseLeave: () => handleMobileLinkHover(link.href, false),
        style: {
          display: "block",
          padding: "0.75rem 0.75rem",
          borderRadius: "0.5rem",
          color: hoveredMobileLinks[link.href] ? "#FFC800" : "#D1D5DB",
          textDecoration: "none",
          fontWeight: 500,
          backgroundColor: hoveredMobileLinks[link.href] ? "rgba(255, 255, 255, 0.05)" : "transparent",
          transition: "all 0.2s"
        },
        onClick: () => setIsOpen(false),
        children: link.label
      },
      link.href
    )) }) }) })
  ] }) });
};
var Navbar_default = Navbar;

// src/components/Footer.tsx
import React2, { useState as useState2 } from "react";
import Link2 from "next/link";
import Image2 from "next/image";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var Footer = ({
  logoSrc = "/logo.png",
  sections,
  className = "",
  copyright
}) => {
  const [imageError, setImageError] = useState2(false);
  const [hoveredLink, setHoveredLink] = useState2(null);
  const [hoveredSocial, setHoveredSocial] = useState2(null);
  const defaultSections = [
    {
      title: "Products",
      links: [
        { href: "https://amebogist.ng", label: "AmeboGist" },
        { href: "https://educenter.com.ng", label: "EduCenter" },
        { href: "/planai", label: "PlanAI Suite" },
        { href: "/products", label: "All Products" }
      ]
    },
    {
      title: "Company",
      links: [
        { href: "/#ecosystem", label: "Our Ecosystem" },
        { href: "/#products", label: "All Products" },
        { href: "https://x.com/VillageCircle", label: "Blog" },
        { href: "/#contact", label: "Contact Us" }
      ]
    },
    {
      title: "Connect",
      links: [
        { href: "https://twitter.com/BoldMindNg", label: "Twitter" },
        { href: "https://linkedin.com/company/boldmind", label: "LinkedIn" },
        { href: "https://instagram.com/boldmind.ng", label: "Instagram" },
        { href: "https://github.com/boldmind-tech", label: "GitHub" }
      ]
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/cookies", label: "Cookie Policy" },
        { href: "/gdpr", label: "GDPR" }
      ]
    }
  ];
  const footerSections = sections || defaultSections;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const getLinkColor = (href, label) => {
    const key = `${href}-${label}`;
    return hoveredLink === key ? "#FFC800" : "#9CA3AF";
  };
  const getSocialColor = (href, label) => {
    const key = `${href}-${label}`;
    return hoveredSocial === key ? "#FFC800" : "#D1D5DB";
  };
  return /* @__PURE__ */ jsx2("footer", { style: {
    width: "100%",
    backgroundColor: "#00143C",
    color: "white"
  }, children: /* @__PURE__ */ jsx2("div", { style: { width: "100%" }, children: /* @__PURE__ */ jsxs2("div", { style: {
    maxWidth: "80rem",
    margin: "0 auto",
    padding: "3rem 1rem"
  }, children: [
    /* @__PURE__ */ jsxs2("div", { style: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "2rem",
      marginBottom: "3rem"
    }, children: [
      /* @__PURE__ */ jsxs2("div", { style: {
        gridColumn: "span 2"
      }, children: [
        /* @__PURE__ */ jsxs2("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1.5rem"
        }, children: [
          !imageError ? /* @__PURE__ */ jsx2("div", { style: {
            position: "relative",
            width: "3rem",
            height: "3rem",
            flexShrink: 0
          }, children: /* @__PURE__ */ jsx2(
            Image2,
            {
              src: logoSrc,
              alt: "BoldMind Logo",
              fill: true,
              style: { objectFit: "contain" },
              onError: () => setImageError(true)
            }
          ) }) : /* @__PURE__ */ jsx2("div", { style: {
            width: "3rem",
            height: "3rem",
            backgroundColor: "#FFC800",
            borderRadius: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
          }, children: /* @__PURE__ */ jsx2("span", { style: {
            fontSize: "1.5rem",
            fontWeight: 900,
            color: "#00143C"
          }, children: "B" }) }),
          /* @__PURE__ */ jsxs2("div", { children: [
            /* @__PURE__ */ jsxs2("span", { style: {
              fontSize: "1.5rem",
              fontWeight: 900
            }, children: [
              "Bold",
              /* @__PURE__ */ jsx2("span", { style: { color: "#FFC800" }, children: "Mind" })
            ] }),
            /* @__PURE__ */ jsx2("p", { style: {
              color: "#9CA3AF",
              fontSize: "0.75rem",
              marginTop: "0.25rem"
            }, children: "Technology Solutions" })
          ] })
        ] }),
        /* @__PURE__ */ jsx2("p", { style: {
          color: "#9CA3AF",
          fontSize: "0.875rem",
          marginBottom: "1.5rem",
          maxWidth: "28rem"
        }, children: "Building impact-driven products that solve fundamental Nigerian problems through authentic media, education, and technology." }),
        /* @__PURE__ */ jsxs2("div", { style: { display: "flex", flexDirection: "column", gap: "0.75rem" }, children: [
          /* @__PURE__ */ jsxs2("div", { style: { display: "flex", alignItems: "center", gap: "0.75rem" }, children: [
            /* @__PURE__ */ jsxs2("svg", { style: { width: "1.25rem", height: "1.25rem", color: "#9CA3AF", flexShrink: 0 }, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ jsx2("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }),
              /* @__PURE__ */ jsx2("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })
            ] }),
            /* @__PURE__ */ jsx2("span", { style: { color: "#D1D5DB", fontSize: "0.875rem" }, children: "Lagos, Nigeria" })
          ] }),
          /* @__PURE__ */ jsxs2("div", { style: { display: "flex", alignItems: "center", gap: "0.75rem" }, children: [
            /* @__PURE__ */ jsx2("svg", { style: { width: "1.25rem", height: "1.25rem", color: "#9CA3AF", flexShrink: 0 }, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx2("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" }) }),
            /* @__PURE__ */ jsx2(
              "a",
              {
                href: "tel:+2349138349271",
                onMouseEnter: () => setHoveredSocial("phone"),
                onMouseLeave: () => setHoveredSocial(null),
                style: {
                  color: hoveredSocial === "phone" ? "#FFC800" : "#D1D5DB",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  transition: "color 0.2s"
                },
                children: "+234 913 834 9271"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs2("div", { style: { display: "flex", alignItems: "center", gap: "0.75rem" }, children: [
            /* @__PURE__ */ jsx2("svg", { style: { width: "1.25rem", height: "1.25rem", color: "#9CA3AF", flexShrink: 0 }, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx2("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }),
            /* @__PURE__ */ jsx2(
              "a",
              {
                href: "mailto:hello@boldmind.ng",
                onMouseEnter: () => setHoveredSocial("email"),
                onMouseLeave: () => setHoveredSocial(null),
                style: {
                  color: hoveredSocial === "email" ? "#FFC800" : "#D1D5DB",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  transition: "color 0.2s"
                },
                children: "hello@boldmind.ng"
              }
            )
          ] })
        ] })
      ] }),
      footerSections.map((section) => /* @__PURE__ */ jsxs2("div", { style: { display: "flex", flexDirection: "column", gap: "1rem" }, children: [
        /* @__PURE__ */ jsx2("h3", { style: {
          fontWeight: "bold",
          fontSize: "1rem",
          color: "white",
          marginBottom: "1rem"
        }, children: section.title }),
        /* @__PURE__ */ jsx2("ul", { style: { display: "flex", flexDirection: "column", gap: "0.75rem" }, children: section.links.map((link) => {
          const linkKey = `${link.href}-${link.label}`;
          return /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsxs2(
            Link2,
            {
              href: link.href,
              onMouseEnter: () => setHoveredLink(linkKey),
              onMouseLeave: () => setHoveredLink(null),
              style: {
                color: getLinkColor(link.href, link.label),
                fontSize: "0.875rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "color 0.2s"
              },
              target: link.href.startsWith("http") ? "_blank" : "_self",
              children: [
                /* @__PURE__ */ jsx2("span", { children: link.label }),
                link.href.startsWith("http") && /* @__PURE__ */ jsx2("svg", { style: { width: "0.75rem", height: "0.75rem", flexShrink: 0 }, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx2("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" }) })
              ]
            }
          ) }, link.href);
        }) })
      ] }, section.title))
    ] }),
    /* @__PURE__ */ jsx2("div", { style: {
      backgroundColor: "#0A1D37",
      borderRadius: "0.75rem",
      padding: "1.5rem",
      marginBottom: "2rem"
    }, children: /* @__PURE__ */ jsxs2("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }, children: [
      /* @__PURE__ */ jsxs2("div", { style: { flexShrink: 0 }, children: [
        /* @__PURE__ */ jsx2("h4", { style: {
          fontWeight: "bold",
          fontSize: "1rem",
          marginBottom: "0.5rem"
        }, children: "\u{1F4EC} Get Updates" }),
        /* @__PURE__ */ jsx2("p", { style: {
          color: "#9CA3AF",
          fontSize: "0.875rem"
        }, children: "Subscribe for Nigerian tech & entrepreneurship insights" })
      ] }),
      /* @__PURE__ */ jsxs2("form", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        width: "100%"
      }, children: [
        /* @__PURE__ */ jsx2(
          "input",
          {
            type: "email",
            placeholder: "Your email address",
            style: {
              flex: 1,
              padding: "0.75rem 1rem",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid #374151",
              borderRadius: "0.5rem",
              color: "white",
              fontSize: "0.875rem",
              outline: "none"
            },
            required: true
          }
        ),
        /* @__PURE__ */ jsx2(
          "button",
          {
            type: "submit",
            style: {
              padding: "0.75rem 1.5rem",
              backgroundColor: "#FFC800",
              color: "#00143C",
              fontWeight: "bold",
              borderRadius: "0.5rem",
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
              fontSize: "0.875rem"
            },
            children: "Subscribe"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs2("div", { style: {
      borderTop: "1px solid #374151",
      paddingTop: "2rem"
    }, children: [
      /* @__PURE__ */ jsxs2("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }, children: [
        /* @__PURE__ */ jsx2("p", { style: {
          color: "#6B7280",
          fontSize: "0.75rem",
          textAlign: "center"
        }, children: copyright || `\xA9 ${currentYear} BoldMind Technology Solution Enterprise. All rights reserved.` }),
        /* @__PURE__ */ jsx2("div", { style: {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.75rem",
          fontSize: "0.75rem"
        }, children: ["Privacy Policy", "Terms", "Cookies", "Sitemap"].map((item, index) => {
          const href = `/${item.toLowerCase().replace(" ", "")}`;
          const isHovered = hoveredLink === `bottom-${item}`;
          return /* @__PURE__ */ jsxs2(React2.Fragment, { children: [
            /* @__PURE__ */ jsx2(
              Link2,
              {
                href,
                onMouseEnter: () => setHoveredLink(`bottom-${item}`),
                onMouseLeave: () => setHoveredLink(null),
                style: {
                  textDecoration: "none",
                  color: isHovered ? "#FFC800" : "#9CA3AF",
                  transition: "color 0.2s"
                },
                children: item
              }
            ),
            index < 3 && /* @__PURE__ */ jsx2("span", { style: { color: "#4B5563" }, children: "\u2022" })
          ] }, item);
        }) })
      ] }),
      /* @__PURE__ */ jsx2("p", { style: {
        color: "#6B7280",
        fontSize: "0.75rem",
        textAlign: "center",
        marginTop: "1rem"
      }, children: "Empowering 1 million Nigerian Entrepreneurs by 2030" })
    ] })
  ] }) }) });
};
var Footer_default = Footer;

// src/components/Button.tsx
import React3, { useState as useState3 } from "react";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
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
  return new Intl.DateTimeFormat("en-NG", {
    dateStyle: "medium"
  }).format(d);
}
function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

// src/components/Button.tsx
import { Fragment, jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var Button = React3.forwardRef(
  ({
    className,
    variant = "primary",
    size = "md",
    fullWidth = false,
    isLoading = false,
    children,
    disabled,
    ...props
  }, ref) => {
    const [isHovered, setIsHovered] = useState3(false);
    const [isActive, setIsActive] = useState3(false);
    const baseStyles = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 600,
      borderRadius: "0.5rem",
      transition: "all 0.2s",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
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
    return /* @__PURE__ */ jsx3(
      "button",
      {
        ref,
        className: cn(className),
        style: styles,
        disabled: disabled || isLoading,
        onMouseEnter: () => !disabled && setIsHovered(true),
        onMouseLeave: () => !disabled && setIsHovered(false),
        onMouseDown: () => !disabled && setIsActive(true),
        onMouseUp: () => !disabled && setIsActive(false),
        ...props,
        children: isLoading ? /* @__PURE__ */ jsxs3(Fragment, { children: [
          /* @__PURE__ */ jsx3("div", { style: spinnerStyle }),
          "Loading..."
        ] }) : children
      }
    );
  }
);
Button.displayName = "Button";
var Button_default = Button;

// src/components/Input.tsx
import React4 from "react";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var Input = React4.forwardRef(
  ({ className, label, error, icon, ...props }, ref) => {
    return /* @__PURE__ */ jsxs4("div", { style: { width: "100%" }, children: [
      label && /* @__PURE__ */ jsx4("label", { style: {
        display: "block",
        marginBottom: "0.5rem",
        fontWeight: 500,
        color: "#00143C"
      }, children: label }),
      /* @__PURE__ */ jsxs4("div", { style: { position: "relative" }, children: [
        icon && /* @__PURE__ */ jsx4("div", { style: {
          position: "absolute",
          left: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#6B7280",
          pointerEvents: "none"
        }, children: icon }),
        /* @__PURE__ */ jsx4(
          "input",
          {
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
          }
        )
      ] }),
      error && /* @__PURE__ */ jsx4("p", { style: {
        color: "#EF4444",
        fontSize: "0.875rem",
        marginTop: "0.25rem"
      }, children: error })
    ] });
  }
);
Input.displayName = "Input";
var Input_default = Input;

// src/components/Card.tsx
import React5 from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var Card = React5.forwardRef(
  ({ className, variant = "default", padding = "md", children, ...props }, ref) => {
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
    return /* @__PURE__ */ jsx5(
      "div",
      {
        ref,
        className: cn(className),
        style: styles,
        ...props,
        children
      }
    );
  }
);
Card.displayName = "Card";
var CardHeader = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx5(
  "div",
  {
    ref,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      marginBottom: "1rem"
    },
    className: cn(className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx5(
  "h3",
  {
    ref,
    style: {
      fontSize: "1.25rem",
      fontWeight: 700,
      color: "#00143C",
      margin: 0
    },
    className: cn(className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx5(
  "p",
  {
    ref,
    style: {
      fontSize: "0.875rem",
      color: "#6B7280",
      margin: 0
    },
    className: cn(className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx5(
  "div",
  {
    ref,
    style: { paddingTop: "1rem" },
    className: cn(className),
    ...props
  }
));
CardContent.displayName = "CardContent";
var CardFooter = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx5(
  "div",
  {
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
  }
));
CardFooter.displayName = "CardFooter";

// src/components/Logo.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var Logo = ({
  src,
  size = "md",
  className = "",
  alt = "BoldMind Logo"
}) => {
  const getSize = () => {
    if (typeof size === "number") return size;
    const sizeMap = {
      sm: 32,
      md: 48,
      lg: 64,
      xl: 96
    };
    return sizeMap[size];
  };
  const pixelSize = getSize();
  if (src) {
    return /* @__PURE__ */ jsx6("div", { className: `inline-block ${className}`, children: /* @__PURE__ */ jsx6(
      "img",
      {
        src,
        alt,
        width: pixelSize,
        height: pixelSize,
        className: "object-contain rounded-full",
        style: { width: pixelSize, height: pixelSize }
      }
    ) });
  }
  return /* @__PURE__ */ jsx6("div", { className: `flex items-center ${className}`, children: /* @__PURE__ */ jsx6(
    "div",
    {
      className: "rounded-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-white font-bold",
      style: { width: pixelSize, height: pixelSize },
      children: size === "sm" || pixelSize <= 32 ? "BM" : "BM"
    }
  ) });
};
var Logo_default = Logo;

// src/components/SocialLinks.tsx
import { useState as useState4 } from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var SocialLinks = ({ links }) => {
  const [hoveredIndex, setHoveredIndex] = useState4(null);
  const containerStyle = {
    display: "flex",
    gap: "1.5rem"
  };
  return /* @__PURE__ */ jsx7("div", { style: containerStyle, children: links.map((link, index) => {
    const isHovered = hoveredIndex === index;
    const linkStyle = {
      color: isHovered ? "#FFC800" : "#6B7280",
      transition: "color 0.2s",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };
    return /* @__PURE__ */ jsx7(
      "a",
      {
        href: link.href,
        target: "_blank",
        rel: "noopener noreferrer",
        style: linkStyle,
        "aria-label": link.ariaLabel,
        onMouseEnter: () => setHoveredIndex(index),
        onMouseLeave: () => setHoveredIndex(null),
        children: link.icon
      },
      index
    );
  }) });
};
var SocialLinks_default = SocialLinks;

// src/components/StatusBadge.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var StatusBadge = ({ status, color = "#10B981" }) => {
  const badgeStyle = {
    fontSize: "0.75rem",
    fontWeight: 600,
    padding: "0.25rem 0.75rem",
    borderRadius: "9999px",
    backgroundColor: `rgba(${hexToRgb(color)}, 0.1)`,
    color,
    display: "inline-block"
  };
  return /* @__PURE__ */ jsx8("span", { style: badgeStyle, children: status });
};
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : "16, 185, 129";
}
var StatusBadge_default = StatusBadge;

// src/components/LoadingSpinner.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var LoadingSpinner = () => {
  const spinnerStyle = {
    display: "inline-block",
    width: "2rem",
    height: "2rem",
    border: "2px solid #FFC800",
    borderTopColor: "transparent",
    borderRadius: "50%",
    animation: "spin 1s linear infinite"
  };
  return /* @__PURE__ */ jsx9("div", { style: spinnerStyle });
};
var LoadingSpinner_default = LoadingSpinner;

// src/components/ErrorBoundary.tsx
import { Component } from "react";
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
var ErrorBoundary = class extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return /* @__PURE__ */ jsxs5("div", { style: {
        padding: "1rem",
        border: "1px solid #FCA5A5",
        backgroundColor: "#FEF2F2",
        borderRadius: "0.5rem"
      }, children: [
        /* @__PURE__ */ jsx10("h2", { style: {
          fontSize: "1.125rem",
          fontWeight: 600,
          color: "#991B1B"
        }, children: "Something went wrong" }),
        /* @__PURE__ */ jsx10("p", { style: { color: "#DC2626", marginTop: "0.5rem" }, children: this.state.error?.message || "An unexpected error occurred" }),
        /* @__PURE__ */ jsx10(
          "button",
          {
            onClick: () => this.setState({ hasError: false }),
            style: {
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              backgroundColor: "#DC2626",
              color: "white",
              borderRadius: "0.375rem",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s",
              ":hover": { backgroundColor: "#B91C1C" }
            },
            children: "Try again"
          }
        )
      ] });
    }
    return this.props.children;
  }
};
var ErrorBoundary_default = ErrorBoundary;
export {
  Button_default as Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ErrorBoundary_default as ErrorBoundary,
  Footer_default as Footer,
  Input_default as Input,
  LoadingSpinner_default as LoadingSpinner,
  Logo_default as Logo,
  Navbar_default as Navbar,
  SocialLinks_default as SocialLinks,
  StatusBadge_default as StatusBadge,
  cn,
  formatCurrency,
  formatDate,
  truncateText
};
//# sourceMappingURL=index.mjs.map