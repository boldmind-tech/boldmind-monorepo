"use client";

import { useState } from "react";
import Link from "next/link";
import { SuperNavbar, SuperFooter, Button } from "@boldmind/ui";

/**
 * SkillGig Landing Page
 * Product: Freelance & Gig Economy Platform
 * Theme: Professional, Trust-Building, Opportunity-Focused
 * 
 * CSS: skillgig.css + boldmind-components.css
 */

export default function SkillGigPage() {
  const [activeTab, setActiveTab] = useState("freelancers");
  const [searchQuery, setSearchQuery] = useState("");

  // Navigation configuration
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#categories", label: "Categories" },
    { href: "#pricing", label: "Pricing" },
    { href: "https://boldmind.ng", label: "Ecosystem" },
  ];

  // Footer configuration
  const footerSections = [
    {
      title: "For Freelancers",
      links: [
        { href: "/signup/freelancer", label: "Create Profile" },
        { href: "/browse-gigs", label: "Browse Gigs" },
        { href: "/success-stories", label: "Success Stories" },
        { href: "/resources", label: "Resources" },
      ],
    },
    {
      title: "For Clients",
      links: [
        { href: "/signup/client", label: "Post a Gig" },
        { href: "/find-talent", label: "Find Talent" },
        { href: "/how-it-works", label: "How It Works" },
        { href: "/enterprise", label: "Enterprise" },
      ],
    },
    {
      title: "BoldMind Ecosystem",
      links: [
        { href: "https://amebogist.ng", label: "AmeboGist", isExternal: true },
        { href: "https://educenter.com.ng", label: "EduCenter", isExternal: true },
        { href: "https://planai.boldmind.ng", label: "PlanAI", isExternal: true },
        { href: "https://boldmind.ng", label: "View All Products", isExternal: true },
      ],
    },
  ];

  // Categories data
  const categories = [
    { icon: "💻", name: "Web Development", count: "2,500+ gigs" },
    { icon: "🎨", name: "Graphic Design", count: "3,200+ gigs" },
    { icon: "✍️", name: "Content Writing", count: "1,800+ gigs" },
    { icon: "📱", name: "Mobile Apps", count: "950+ gigs" },
    { icon: "🎬", name: "Video Editing", count: "1,200+ gigs" },
    { icon: "📊", name: "Data Analysis", count: "680+ gigs" },
    { icon: "🎙️", name: "Voice Over", count: "420+ gigs" },
    { icon: "🔐", name: "Cybersecurity", count: "290+ gigs" },
  ];

  // Features data
  const features = [
    {
      icon: "🔍",
      title: "Smart Matching",
      description: "Our AI-powered system connects you with the perfect freelancers or gigs based on skills, budget, and requirements.",
    },
    {
      icon: "💰",
      title: "Secure Payments",
      description: "Escrow protection ensures freelancers get paid and clients get work delivered. Multiple payment options available.",
    },
    {
      icon: "⭐",
      title: "Rating System",
      description: "Build your reputation with verified reviews. Top-rated freelancers get priority visibility and higher rates.",
    },
    {
      icon: "🤝",
      title: "Dispute Resolution",
      description: "Fair mediation process protects both parties. Our support team ensures every dispute is resolved professionally.",
    },
    {
      icon: "📱",
      title: "Mobile App",
      description: "Manage gigs on the go with our iOS and Android apps. Get real-time notifications and updates.",
    },
    {
      icon: "🎓",
      title: "Skill Development",
      description: "Access free courses and resources to improve your skills. Stay competitive in the Nigerian gig economy.",
    },
  ];

  // Sample gigs for freelancers
  const sampleGigs = [
    {
      title: "Full-Stack Web Developer Needed",
      budget: "₦150,000 - ₦250,000",
      category: "Web Development",
      client: "TechStart Lagos",
      rating: 4.9,
      reviews: 127,
      tags: ["React", "Node.js", "MongoDB"],
      description: "Looking for an experienced developer to build a modern e-commerce platform...",
    },
    {
      title: "Brand Identity Design Package",
      budget: "₦80,000 - ₦120,000",
      category: "Graphic Design",
      client: "Naija Foods",
      rating: 5.0,
      reviews: 89,
      tags: ["Logo Design", "Brand Guide", "Packaging"],
      description: "Need a complete brand identity for our new food delivery startup...",
    },
    {
      title: "SEO Content Writer for Tech Blog",
      budget: "₦50,000/month",
      category: "Content Writing",
      client: "Digital Hub NG",
      rating: 4.8,
      reviews: 203,
      tags: ["SEO", "Tech Writing", "Research"],
      description: "Seeking a skilled writer to produce 8-10 articles per month...",
    },
  ];

  // Stats data
  const stats = [
    { icon: "👥", number: "25,000+", label: "Active Freelancers" },
    { icon: "💼", number: "15,000+", label: "Gigs Posted" },
    { icon: "💵", number: "₦2.5B+", label: "Paid Out" },
    { icon: "⭐", number: "4.8/5", label: "Average Rating" },
  ];

  // Popular search suggestions
  const popularSearches = [
    "Web Designer", "Content Writer", "Video Editor", 
    "Mobile Developer", "Virtual Assistant", "Logo Design"
  ];

  return (
    <div className="min-h-screen" data-product="skillgig">
      {/* Navigation */}
      <SuperNavbar
        links={navLinks}
        cta={{
          href: "/register",
          label: "Get Started",
          variant: "secondary",
        }}
        logoSrc="/logo-skillgig.png"
        sticky={true}
        animated={true}
        showThemeControls={true}
      />

      {/* Hero Section */}
      <section className="gig-hero hero">
        <div className="hero-content">
          {/* Badge */}
          <div className="gig-badge">
            <div className="gig-badge-icon">💼</div>
            <span className="gig-badge-text">Nigeria's #1 Freelance Marketplace</span>
          </div>

          {/* Title */}
          <h1 className="hero-title">
            Find the <span className="hero-title-accent">Perfect Gig</span>
            <br />
            Or Top <span className="hero-title-accent">Talent</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            Connect with skilled Nigerian freelancers or find your next opportunity. 
            SkillGig makes it easy to hire, get hired, and grow your business.
          </p>

          {/* Search Bar */}
          <div className="gig-search-container">
            <div className="gig-search-wrapper">
              <input
                type="text"
                placeholder="What service are you looking for?"
                className="gig-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="gig-search-button">
                Search Gigs
              </button>
            </div>

            {/* Popular Searches */}
            <div className="gig-search-suggestions">
              <span style={{ 
                fontFamily: "var(--font-primary)", 
                fontSize: "0.875rem", 
                color: "white", 
                marginRight: "0.5rem",
                opacity: 0.7
              }}>
                Popular:
              </span>
              {popularSearches.map((term, index) => (
                <button key={index} className="gig-search-tag">
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="gig-trust-badges">
            <div className="gig-trust-badge">
              <div className="gig-trust-badge-icon">✅</div>
              <span>Verified Freelancers</span>
            </div>
            <div className="gig-trust-badge">
              <div className="gig-trust-badge-icon">💰</div>
              <span>Secure Payments</span>
            </div>
            <div className="gig-trust-badge">
              <div className="gig-trust-badge-icon">🛡️</div>
              <span>Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Browse by <span className="section-title-accent">Category</span>
            </h2>
            <p className="section-description">
              Explore thousands of gigs across multiple categories. 
              Find the perfect match for your needs.
            </p>
          </div>

          <div className="gig-categories">
            {categories.map((category, index) => (
              <div key={index} className="gig-category">
                <div className="gig-category-icon">{category.icon}</div>
                <div className="gig-category-name">{category.name}</div>
                <div className="gig-category-count">{category.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Gigs */}
      <section className="section" style={{ background: "var(--gig-light)" }}>
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Featured <span className="section-title-accent">Opportunities</span>
            </h2>
            <p className="section-description">
              Check out some of the latest gigs posted by Nigerian businesses.
            </p>
          </div>

          {/* Tabs */}
          <div className="gig-tabs">
            <button 
              className={`gig-tab ${activeTab === "freelancers" ? "gig-tab-active" : ""}`}
              onClick={() => setActiveTab("freelancers")}
            >
              For Freelancers
            </button>
            <button 
              className={`gig-tab ${activeTab === "clients" ? "gig-tab-active" : ""}`}
              onClick={() => setActiveTab("clients")}
            >
              For Clients
            </button>
          </div>

          {/* Gig Cards */}
          <div className="card-grid">
            {sampleGigs.map((gig, index) => (
              <div key={index} className="gig-card">
                <div className="gig-card-header">
                  <div className="gig-card-avatar">💼</div>
                  <div className="gig-card-info">
                    <h3 className="gig-card-title">{gig.title}</h3>
                    <div className="gig-card-meta">
                      <span>{gig.client}</span>
                      <span>•</span>
                      <div className="gig-card-rating">
                        ⭐ {gig.rating} ({gig.reviews})
                      </div>
                    </div>
                  </div>
                </div>

                <p className="gig-card-description">{gig.description}</p>

                <div className="gig-card-tags">
                  {gig.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="gig-tag">{tag}</span>
                  ))}
                </div>

                <div className="gig-card-footer">
                  <div>
                    <div className="gig-card-price">{gig.budget}</div>
                    <div className="gig-card-price-label">{gig.category}</div>
                  </div>
                  <Button variant="primary" size="sm">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Why Choose <span className="section-title-accent">SkillGig</span>
            </h2>
            <p className="section-description">
              Built specifically for the Nigerian freelance market. 
              We understand your needs.
            </p>
          </div>

          <div className="gig-features">
            {features.map((feature, index) => (
              <div key={index} className="gig-feature">
                <div className="gig-feature-icon">{feature.icon}</div>
                <h3 className="gig-feature-title">{feature.title}</h3>
                <p className="gig-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="section-container">
          <div className="gig-stats">
            <div className="section-header" style={{ marginBottom: "3rem" }}>
              <h2 className="section-title" style={{ color: "white" }}>
                By the <span style={{ color: "var(--gig-amber)" }}>Numbers</span>
              </h2>
            </div>

            <div className="gig-stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="gig-stat">
                  <div className="gig-stat-icon">{stat.icon}</div>
                  <div className="gig-stat-number">{stat.number}</div>
                  <div className="gig-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: "var(--gig-light)" }}>
        <div className="section-container">
          <div className="gig-cta">
            <div className="gig-cta-content">
              <h2 className="gig-cta-title">
                Ready to Start Your Freelance Journey?
              </h2>
              <p className="gig-cta-description">
                Join thousands of Nigerian freelancers and businesses already 
                succeeding on SkillGig. Create your free account today!
              </p>
              <div className="cta-buttons">
                <Button variant="primary" size="lg" className="btn-primary btn-lg">
                  Sign Up as Freelancer
                </Button>
                <Button variant="outline" size="lg" className="btn-secondary btn-lg" 
                  style={{ borderColor: "white", color: "white" }}>
                  Post a Gig
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SuperFooter
        logoSrc="/logo-skillgig.png"
        sections={footerSections}
        contactInfo={{
          email: 'support@skillgig.ng',
          phone: '+2349138349271',
          whatsapp: '+2349138349271',
          address: 'No 5 Olusoji imole str ikosi ketu Lagos Nigeria',
        }}
        copyright={`© ${new Date().getFullYear()} SkillGig - Part of BoldMind Ecosystem. All rights reserved.`}
      />
    </div>
  );
}