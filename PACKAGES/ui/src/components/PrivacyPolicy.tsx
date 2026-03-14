// PACKAGES/ui/src/components/PrivacyPolicy.tsx
"use client";

import React from "react";
import { useTheme } from "../providers/theme-provider";
import { cn } from "../lib/utils";
import { Shield, Eye, Database, Cookie, Lock, UserCheck, Globe, Mail, ChevronRight } from "lucide-react";

export interface PrivacyPolicySection {
    title: string;
    content: React.ReactNode;
}

export interface PrivacyPolicyProps {
    companyName?: string;
    appName?: string;
    contactEmail?: string;
    effectiveDate?: string;
    additionalSections?: PrivacyPolicySection[];
    className?: string;
}

const sectionHeaderStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "1.25rem",
    paddingBottom: "0.75rem",
    borderBottom: "2px solid var(--product-muted)",
};

const sectionTitleStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "var(--product-primary)",
    margin: 0,
};

const iconBoxStyle: React.CSSProperties = {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "var(--radius-md)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--product-highlight)",
    color: "var(--product-primary)",
    flexShrink: 0,
};

const paragraphStyle: React.CSSProperties = {
    fontSize: "1rem",
    lineHeight: 1.8,
    color: "var(--product-foreground)",
    marginBottom: "1rem",
    maxWidth: "none",
};

const listStyle: React.CSSProperties = {
    paddingLeft: "1.5rem",
    marginBottom: "1rem",
    listStyleType: "none",
};

const listItemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.5rem",
    marginBottom: "0.625rem",
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "var(--product-foreground)",
};

const subheadingStyle: React.CSSProperties = {
    fontSize: "1.125rem",
    fontWeight: 600,
    color: "var(--product-primary)",
    marginTop: "1.25rem",
    marginBottom: "0.625rem",
};

function BulletItem({ children }: { children: React.ReactNode }) {
    return (
        <li style={listItemStyle}>
            <ChevronRight
                style={{
                    width: "1rem",
                    height: "1rem",
                    marginTop: "0.35rem",
                    color: "var(--product-secondary)",
                    flexShrink: 0,
                }}
            />
            <span>{children}</span>
        </li>
    );
}

export function PrivacyPolicy({
    companyName = "BoldMind Technology Solution Enterprise",
    appName,
    contactEmail = "privacy@boldmind.ng",
    effectiveDate = "February 18, 2026",
    additionalSections = [],
    className,
}: PrivacyPolicyProps) {
    const { productTheme } = useTheme();
    const resolvedAppName = appName || productTheme.name;

    const heroStyle: React.CSSProperties = {
        background: `linear-gradient(135deg, var(--product-primary), color-mix(in srgb, var(--product-primary) 80%, black))`,
        color: "white",
        padding: "3rem 2rem",
        borderRadius: "var(--radius-xl)",
        marginBottom: "2.5rem",
        position: "relative",
        overflow: "hidden",
    };

    const heroOverlayStyle: React.CSSProperties = {
        position: "absolute",
        inset: 0,
        backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)",
        pointerEvents: "none",
    };

    const sectionCardStyle: React.CSSProperties = {
        backgroundColor: "var(--product-background)",
        border: "1px solid var(--product-muted)",
        borderRadius: "var(--radius-lg)",
        padding: "1.75rem",
        marginBottom: "1.5rem",
        transition: "box-shadow var(--transition-base), border-color var(--transition-base)",
    };

    return (
        <div
            className={cn("max-w-4xl mx-auto px-4 py-8 sm:py-12", className)}
            style={{ color: "var(--product-foreground)" }}
        >
            {/* Hero Section */}
            <div style={heroStyle}>
                <div style={heroOverlayStyle} />
                <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                        <Shield style={{ width: "2.5rem", height: "2.5rem" }} />
                        <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 800, margin: 0, color: "white" }}>
                            Privacy Policy
                        </h1>
                    </div>
                    <p style={{ fontSize: "1.125rem", opacity: 0.9, margin: 0, maxWidth: "none" }}>
                        {resolvedAppName} — A product of {companyName}
                    </p>
                    <p style={{ fontSize: "0.875rem", opacity: 0.7, marginTop: "0.5rem", marginBottom: 0, maxWidth: "none" }}>
                        Effective Date: {effectiveDate} &bull; Last Updated: {effectiveDate}
                    </p>
                </div>
            </div>

            {/* Introduction */}
            <div style={sectionCardStyle}>
                <p style={paragraphStyle}>
                    At {companyName} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we are committed to protecting
                    and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                    information when you use {resolvedAppName} and any related services, applications, or websites
                    (collectively, the &ldquo;Service&rdquo;).
                </p>
                <p style={paragraphStyle}>
                    By accessing or using our Service, you agree to the collection and use of information in accordance with this
                    policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our Service.
                </p>
            </div>

            {/* Section 1: Information We Collect */}
            <div style={sectionCardStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={iconBoxStyle}>
                        <Database style={{ width: "1.25rem", height: "1.25rem" }} />
                    </div>
                    <h2 style={sectionTitleStyle}>1. Information We Collect</h2>
                </div>

                <h3 style={subheadingStyle}>1.1 Personal Information You Provide</h3>
                <p style={paragraphStyle}>
                    When you register for an account, make a purchase, or interact with our Service, we may collect:
                </p>
                <ul style={listStyle}>
                    <BulletItem>Full name, email address, and phone number</BulletItem>
                    <BulletItem>Account credentials (username, encrypted password)</BulletItem>
                    <BulletItem>Billing and payment information (processed securely via third-party payment providers)</BulletItem>
                    <BulletItem>Profile information, preferences, and settings</BulletItem>
                    <BulletItem>Communications and correspondence with us (support tickets, emails, feedback)</BulletItem>
                </ul>

                <h3 style={subheadingStyle}>1.2 Information Collected Automatically</h3>
                <p style={paragraphStyle}>
                    When you access our Service, we automatically collect certain technical information:
                </p>
                <ul style={listStyle}>
                    <BulletItem>Device information (type, operating system, browser type and version)</BulletItem>
                    <BulletItem>IP address, geographic location data (country, city level)</BulletItem>
                    <BulletItem>Usage patterns (pages visited, time spent, click patterns, feature usage)</BulletItem>
                    <BulletItem>Referral sources (how you arrived at our Service)</BulletItem>
                    <BulletItem>Performance data (load times, errors, crash reports)</BulletItem>
                </ul>

                <h3 style={subheadingStyle}>1.3 Cookies and Tracking Technologies</h3>
                <p style={paragraphStyle}>
                    We use cookies, web beacons, pixels, and similar technologies to collect information and improve your
                    experience. You can manage your cookie preferences at any time through our cookie settings. For more
                    details, please see Section 5 of this policy.
                </p>

                <h3 style={subheadingStyle}>1.4 Information from Third Parties</h3>
                <p style={paragraphStyle}>
                    We may receive information about you from third-party services you connect to your account, including:
                </p>
                <ul style={listStyle}>
                    <BulletItem>Social media platforms (Facebook, Google, when you use social login)</BulletItem>
                    <BulletItem>Analytics providers (aggregated usage data)</BulletItem>
                    <BulletItem>Payment processors (transaction confirmation, fraud prevention data)</BulletItem>
                </ul>
            </div>

            {/* Section 2: How We Use Your Information */}
            <div style={sectionCardStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={iconBoxStyle}>
                        <Eye style={{ width: "1.25rem", height: "1.25rem" }} />
                    </div>
                    <h2 style={sectionTitleStyle}>2. How We Use Your Information</h2>
                </div>

                <p style={paragraphStyle}>We use the information we collect for the following purposes:</p>

                <h3 style={subheadingStyle}>2.1 Service Delivery and Improvement</h3>
                <ul style={listStyle}>
                    <BulletItem>Provide, maintain, and improve our Service and its features</BulletItem>
                    <BulletItem>Process transactions and send related information (receipts, confirmations)</BulletItem>
                    <BulletItem>Personalise your experience based on your preferences and usage patterns</BulletItem>
                    <BulletItem>Develop new products, services, features, and functionality</BulletItem>
                </ul>

                <h3 style={subheadingStyle}>2.2 Communication</h3>
                <ul style={listStyle}>
                    <BulletItem>Send administrative information (account updates, security alerts, policy changes)</BulletItem>
                    <BulletItem>Respond to your enquiries, support requests, and feedback</BulletItem>
                    <BulletItem>Send marketing and promotional communications (with your consent, where required)</BulletItem>
                </ul>

                <h3 style={subheadingStyle}>2.3 Analytics and Research</h3>
                <ul style={listStyle}>
                    <BulletItem>Monitor and analyse usage trends, traffic, and engagement metrics</BulletItem>
                    <BulletItem>Conduct research and analysis to improve user experience</BulletItem>
                    <BulletItem>Generate aggregated, anonymised reports and insights</BulletItem>
                </ul>

                <h3 style={subheadingStyle}>2.4 Safety and Compliance</h3>
                <ul style={listStyle}>
                    <BulletItem>Detect, prevent, and address fraud, abuse, and security issues</BulletItem>
                    <BulletItem>Comply with applicable laws, regulations, and legal processes</BulletItem>
                    <BulletItem>Enforce our Terms and Conditions and other agreements</BulletItem>
                </ul>
            </div>

            {/* Section 3: Data Sharing and Disclosure */}
            <div style={sectionCardStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={iconBoxStyle}>
                        <Globe style={{ width: "1.25rem", height: "1.25rem" }} />
                    </div>
                    <h2 style={sectionTitleStyle}>3. Data Sharing and Disclosure</h2>
                </div>

                <p style={paragraphStyle}>
                    We do not sell your personal information. We may share your information in the following circumstances:
                </p>

                <h3 style={subheadingStyle}>3.1 Service Providers</h3>
                <p style={paragraphStyle}>
                    We engage trusted third-party companies and individuals to perform services on our behalf, including payment
                    processing, data analysis, email delivery, hosting, customer service, and marketing assistance. These service
                    providers have access to your information only to perform these tasks and are obligated to protect it.
                </p>

                <h3 style={subheadingStyle}>3.2 Within the BoldMind Ecosystem</h3>
                <p style={paragraphStyle}>
                    Your information may be shared across BoldMind products and services to provide you with a seamless,
                    integrated experience. For example, your account preferences may be synchronised across {resolvedAppName} and
                    other BoldMind products you use.
                </p>

                <h3 style={subheadingStyle}>3.3 Legal Requirements</h3>
                <p style={paragraphStyle}>
                    We may disclose your information if required to do so by law or in good faith belief that such action is
                    necessary to comply with a legal obligation, protect and defend our rights or property, prevent fraud, or
                    protect the personal safety of users or the public.
                </p>

                <h3 style={subheadingStyle}>3.4 Business Transfers</h3>
                <p style={paragraphStyle}>
                    In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be
                    transferred. We will notify you before your information is transferred and becomes subject to a different
                    privacy policy.
                </p>
            </div>

            {/* Section 4: Data Security */}
            <div style={sectionCardStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={iconBoxStyle}>
                        <Lock style={{ width: "1.25rem", height: "1.25rem" }} />
                    </div>
                    <h2 style={sectionTitleStyle}>4. Data Security</h2>
                </div>

                <p style={paragraphStyle}>
                    We implement appropriate technical and organisational measures to protect your personal information, including:
                </p>
                <ul style={listStyle}>
                    <BulletItem>Encryption of data in transit (TLS/SSL) and at rest</BulletItem>
                    <BulletItem>Regular security audits and vulnerability assessments</BulletItem>
                    <BulletItem>Access controls and authentication mechanisms</BulletItem>
                    <BulletItem>Secure data storage with reputable cloud service providers</BulletItem>
                    <BulletItem>Employee training on data protection and privacy best practices</BulletItem>
                </ul>
                <p style={paragraphStyle}>
                    While we strive to protect your personal information, no method of transmission over the Internet or method
                    of electronic storage is 100% secure. We cannot guarantee its absolute security.
                </p>
            </div>

            {/* Section 5: Cookies */}
            <div style={sectionCardStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={iconBoxStyle}>
                        <Cookie style={{ width: "1.25rem", height: "1.25rem" }} />
                    </div>
                    <h2 style={sectionTitleStyle}>5. Cookies and Tracking Technologies</h2>
                </div>

                <p style={paragraphStyle}>We use the following categories of cookies:</p>

                <h3 style={subheadingStyle}>5.1 Essential Cookies</h3>
                <p style={paragraphStyle}>
                    Required for the Service to function properly. These include session management, authentication, and security
                    cookies. They cannot be disabled.
                </p>

                <h3 style={subheadingStyle}>5.2 Analytics Cookies</h3>
                <p style={paragraphStyle}>
                    Help us understand how visitors interact with our Service by collecting and reporting information anonymously.
                    This includes tools like Google Analytics and our internal analytics platform.
                </p>

                <h3 style={subheadingStyle}>5.3 Marketing Cookies</h3>
                <p style={paragraphStyle}>
                    Used to track visitors across websites for the purpose of displaying relevant advertisements. This includes
                    Facebook Pixel and similar advertising tools.
                </p>

                <h3 style={subheadingStyle}>5.4 Functional Cookies</h3>
                <p style={paragraphStyle}>
                    Enable enhanced functionality and personalisation, such as remembering your theme preferences, language
                    settings, and user interface customisations.
                </p>

                <p style={paragraphStyle}>
                    You can manage your cookie preferences at any time through the cookie settings banner or by adjusting your
                    browser settings. Note that disabling certain cookies may impact the functionality of our Service.
                </p>
            </div>

            {/* Section 6: Data Retention */}
            <div style={sectionCardStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={iconBoxStyle}>
                        <Database style={{ width: "1.25rem", height: "1.25rem" }} />
                    </div>
                    <h2 style={sectionTitleStyle}>6. Data Retention</h2>
                </div>

                <p style={paragraphStyle}>
                    We retain your personal information only for as long as necessary to fulfil the purposes for which it was
                    collected, including to satisfy legal, accounting, or reporting requirements. Specific retention periods:
                </p>
                <ul style={listStyle}>
                    <BulletItem>Account data: retained while your account is active and for 30 days after deletion request</BulletItem>
                    <BulletItem>Transaction records: retained for 7 years for legal and tax compliance</BulletItem>
                    <BulletItem>Usage analytics: aggregated and anonymised after 24 months</BulletItem>
                    <BulletItem>Marketing data: retained until you withdraw consent or unsubscribe</BulletItem>
                    <BulletItem>Support communications: retained for 3 years after resolution</BulletItem>
                </ul>
            </div>

            {/* Section 7: Your Rights */}
            <div style={sectionCardStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={iconBoxStyle}>
                        <UserCheck style={{ width: "1.25rem", height: "1.25rem" }} />
                    </div>
                    <h2 style={sectionTitleStyle}>7. Your Rights</h2>
                </div>

                <p style={paragraphStyle}>
                    Under the Nigeria Data Protection Regulation (NDPR) and other applicable data protection laws, you have the
                    following rights:
                </p>
                <ul style={listStyle}>
                    <BulletItem>
                        <strong>Right of Access:</strong> Request a copy of the personal information we hold about you
                    </BulletItem>
                    <BulletItem>
                        <strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete personal information
                    </BulletItem>
                    <BulletItem>
                        <strong>Right to Erasure:</strong> Request deletion of your personal information, subject to legal
                        obligations
                    </BulletItem>
                    <BulletItem>
                        <strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format
                    </BulletItem>
                    <BulletItem>
                        <strong>Right to Object:</strong> Object to the processing of your personal information for direct marketing
                    </BulletItem>
                    <BulletItem>
                        <strong>Right to Restrict Processing:</strong> Request limitation of processing in certain circumstances
                    </BulletItem>
                    <BulletItem>
                        <strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent
                    </BulletItem>
                </ul>
                <p style={paragraphStyle}>
                    To exercise any of these rights, please contact us at{" "}
                    <a href={`mailto:${contactEmail}`} style={{ color: "var(--product-secondary)", fontWeight: 600 }}>
                        {contactEmail}
                    </a>
                    . We will respond to your request within 30 days.
                </p>
            </div>

            {/* Section 8: Children's Privacy */}
            <div style={sectionCardStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={iconBoxStyle}>
                        <Shield style={{ width: "1.25rem", height: "1.25rem" }} />
                    </div>
                    <h2 style={sectionTitleStyle}>8. Children&rsquo;s Privacy</h2>
                </div>
                <p style={paragraphStyle}>
                    Our Service is not intended for individuals under the age of 13. We do not knowingly collect personal
                    information from children under 13. If we become aware that we have collected personal information from a
                    child under 13, we will take steps to delete such information promptly. If you are a parent or guardian and
                    believe your child has provided us with personal information, please contact us at{" "}
                    <a href={`mailto:${contactEmail}`} style={{ color: "var(--product-secondary)", fontWeight: 600 }}>
                        {contactEmail}
                    </a>
                    .
                </p>
            </div>

            {/* Section 9: International Data Transfers */}
            <div style={sectionCardStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={iconBoxStyle}>
                        <Globe style={{ width: "1.25rem", height: "1.25rem" }} />
                    </div>
                    <h2 style={sectionTitleStyle}>9. International Data Transfers</h2>
                </div>
                <p style={paragraphStyle}>
                    Your information may be transferred to and processed in countries other than Nigeria. These countries may
                    have data protection laws that are different from the laws in Nigeria. We take appropriate safeguards to
                    ensure that your personal information remains protected in accordance with this Privacy Policy, including
                    standard contractual clauses and other approved transfer mechanisms.
                </p>
            </div>

            {/* Section 10: Changes to This Policy */}
            <div style={sectionCardStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={iconBoxStyle}>
                        <Eye style={{ width: "1.25rem", height: "1.25rem" }} />
                    </div>
                    <h2 style={sectionTitleStyle}>10. Changes to This Privacy Policy</h2>
                </div>
                <p style={paragraphStyle}>
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting
                    the new Privacy Policy on this page, updating the &ldquo;Effective Date&rdquo; at the top of this policy,
                    and, where appropriate, sending you a notification via email or through our Service. We encourage you to
                    review this Privacy Policy periodically for any changes.
                </p>
            </div>

            {/* Additional Sections */}
            {additionalSections.map((section, index) => (
                <div key={index} style={sectionCardStyle}>
                    <div style={sectionHeaderStyle}>
                        <div style={iconBoxStyle}>
                            <Shield style={{ width: "1.25rem", height: "1.25rem" }} />
                        </div>
                        <h2 style={sectionTitleStyle}>
                            {index + 11}. {section.title}
                        </h2>
                    </div>
                    <div>{section.content}</div>
                </div>
            ))}

            {/* Contact Section */}
            <div
                style={{
                    ...sectionCardStyle,
                    background: "var(--product-highlight)",
                    border: "2px solid var(--product-primary)",
                }}
            >
                <div style={sectionHeaderStyle}>
                    <div style={{ ...iconBoxStyle, backgroundColor: "var(--product-primary)", color: "white" }}>
                        <Mail style={{ width: "1.25rem", height: "1.25rem" }} />
                    </div>
                    <h2 style={sectionTitleStyle}>Contact Us</h2>
                </div>
                <p style={paragraphStyle}>
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please
                    contact us:
                </p>
                <div style={{ fontSize: "1rem", lineHeight: 2 }}>
                    <p style={{ ...paragraphStyle, marginBottom: "0.25rem" }}>
                        <strong>{companyName}</strong>
                    </p>
                    <p style={{ ...paragraphStyle, marginBottom: "0.25rem" }}>
                        Email:{" "}
                        <a href={`mailto:${contactEmail}`} style={{ color: "var(--product-secondary)", fontWeight: 600 }}>
                            {contactEmail}
                        </a>
                    </p>
                    <p style={{ ...paragraphStyle, marginBottom: "0.25rem" }}>
                        Website:{" "}
                        <a
                            href="https://boldmind.ng"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--product-secondary)", fontWeight: 600 }}
                        >
                            boldmind.ng
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
