// PACKAGES/ui/src/components/TermsAndConditions.tsx
"use client";

import React from "react";
import { useTheme } from "../providers/theme-provider";
import { cn } from "../lib/utils";
import {
    FileText,
    UserCheck,
    ShieldCheck,
    AlertTriangle,
    Gavel,
    CreditCard,
    Ban,
    RefreshCw,
    Scale,
    Mail,
    ChevronRight,
} from "lucide-react";

export interface TermsSection {
    title: string;
    content: React.ReactNode;
}

export interface TermsAndConditionsProps {
    companyName?: string;
    appName?: string;
    contactEmail?: string;
    effectiveDate?: string;
    additionalSections?: TermsSection[];
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

export function TermsAndConditions({
    companyName = "BoldMind Technology Solution Enterprise",
    appName,
    contactEmail = "legal@boldmind.ng",
    effectiveDate = "February 18, 2026",
    additionalSections = [],
    className,
}: TermsAndConditionsProps) {
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
                        <FileText style={{ width: "2.5rem", height: "2.5rem" }} />
                        <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 800, margin: 0, color: "white" }}>
                            Terms &amp; Conditions
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
                    Welcome to {resolvedAppName}. These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use
                    of {resolvedAppName} and any related services, applications, or websites (collectively, the
                    &ldquo;Service&rdquo;) provided by {companyName} (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;,
                    or &ldquo;us&rdquo;).
                </p>
                <p style={paragraphStyle}>
                    By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by
                    these Terms. If you do not agree to these Terms, you must not access or use the Service.
                </p>
            </div>

            {/* Section 1: Acceptance of Terms */}
            <div style={sectionCardStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={iconBoxStyle}>
                        <UserCheck style={{ width: "1.25rem", height: "1.25rem" }} />
                    </div>
                    <h2 style={sectionTitleStyle}>1. Acceptance of Terms</h2>
                </div>

                <p style={paragraphStyle}>By accessing or using our Service, you confirm that:</p>
                <ul style={listStyle}>
                    <BulletItem>You are at least 13 years of age (or the minimum age in your jurisdiction)</BulletItem>
                    <BulletItem>You have the legal capacity to enter into a binding agreement</BulletItem>
                    <BulletItem>You are not prohibited from using the Service under any applicable laws</BulletItem>
                    <BulletItem>
                        If you are using the Service on behalf of an organisation, you have authority to bind that organisation to
                        these Terms
                    </BulletItem>
                </ul>
            </div>

            {/* Section 2: Description of Services */}
            <div style={sectionCardStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={iconBoxStyle}>
                        <FileText style={{ width: "1.25rem", height: "1.25rem" }} />
                    </div>
                    <h2 style={sectionTitleStyle}>2. Description of Services</h2>
                </div>

                <p style={paragraphStyle}>
                    {resolvedAppName} is part of the BoldMind ecosystem of products and services. The specific features and
                    functionality available to you depend on the product or service you are using, your subscription plan (if
                    applicable), and your geographic location.
                </p>
                <p style={paragraphStyle}>
                    We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or without
                    notice. We will make reasonable efforts to provide advance notice of material changes.
                </p>
            </div>

            {/* Section 3: User Accounts */}
            <div style={sectionCardStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={iconBoxStyle}>
                        <UserCheck style={{ width: "1.25rem", height: "1.25rem" }} />
                    </div>
                    <h2 style={sectionTitleStyle}>3. User Accounts and Responsibilities</h2>
                </div>

                <h3 style={subheadingStyle}>3.1 Account Creation</h3>
                <p style={paragraphStyle}>
                    To access certain features of the Service, you may need to create an account. You agree to provide accurate,
                    current, and complete information during registration and to update such information to keep it accurate.
                </p>

                <h3 style={subheadingStyle}>3.2 Account Security</h3>
                <ul style={listStyle}>
                    <BulletItem>You are responsible for maintaining the confidentiality of your account credentials</BulletItem>
                    <BulletItem>
                        You are responsible for all activities that occur under your account, whether or not you authorise them
                    </BulletItem>
                    <BulletItem>
                        You must notify us immediately of any unauthorised access to or use of your account
                    </BulletItem>
                    <BulletItem>
                        You must not share your account credentials with any third party
                    </BulletItem>
                </ul>

                <h3 style={subheadingStyle}>3.3 Account Termination</h3>
                <p style={paragraphStyle}>
                    We reserve the right to suspend or terminate your account at any time, with or without cause and with or
                    without notice, including if we believe you have violated these Terms.
                </p>
            </div>

            {/* Section 4: Intellectual Property */}
            <div style={sectionCardStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={iconBoxStyle}>
                        <ShieldCheck style={{ width: "1.25rem", height: "1.25rem" }} />
                    </div>
                    <h2 style={sectionTitleStyle}>4. Intellectual Property Rights</h2>
                </div>

                <h3 style={subheadingStyle}>4.1 Our Intellectual Property</h3>
                <p style={paragraphStyle}>
                    The Service, including its design, text, graphics, logos, icons, images, audio, video, software, and other
                    content, is owned by or licensed to {companyName} and is protected by copyright, trademark, and other
                    intellectual property laws. You may not reproduce, modify, distribute, or create derivative works from any
                    part of the Service without our prior written consent.
                </p>

                <h3 style={subheadingStyle}>4.2 User-Generated Content</h3>
                <p style={paragraphStyle}>
                    You retain ownership of any content you submit, post, or upload to the Service (&ldquo;User Content&rdquo;).
                    By submitting User Content, you grant us a non-exclusive, worldwide, royalty-free licence to use, reproduce,
                    modify, adapt, publish, and display such content solely for the purpose of operating and improving the Service.
                </p>

                <h3 style={subheadingStyle}>4.3 Feedback</h3>
                <p style={paragraphStyle}>
                    Any feedback, suggestions, or ideas you provide regarding the Service may be used by us without obligation
                    or compensation to you.
                </p>
            </div>

            {/* Section 5: Prohibited Conduct */}
            <div style={sectionCardStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={iconBoxStyle}>
                        <Ban style={{ width: "1.25rem", height: "1.25rem" }} />
                    </div>
                    <h2 style={sectionTitleStyle}>5. Prohibited Conduct</h2>
                </div>

                <p style={paragraphStyle}>You agree not to:</p>
                <ul style={listStyle}>
                    <BulletItem>Use the Service for any unlawful purpose or in violation of any applicable laws</BulletItem>
                    <BulletItem>Transmit any content that is harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable</BulletItem>
                    <BulletItem>Impersonate any person or entity or misrepresent your affiliation with any person or entity</BulletItem>
                    <BulletItem>Attempt to gain unauthorised access to the Service, other accounts, or computer systems</BulletItem>
                    <BulletItem>Interfere with, disrupt, or place an undue burden on the Service or its infrastructure</BulletItem>
                    <BulletItem>Use any automated means (bots, scrapers, crawlers) to access or interact with the Service without our express permission</BulletItem>
                    <BulletItem>Reverse engineer, decompile, or disassemble any part of the Service</BulletItem>
                    <BulletItem>Use the Service to send spam, phishing messages, or other unsolicited communications</BulletItem>
                    <BulletItem>Engage in any activity that could damage, disable, or impair the Service</BulletItem>
                </ul>
            </div>

            {/* Section 6: Payment Terms */}
            <div style={sectionCardStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={iconBoxStyle}>
                        <CreditCard style={{ width: "1.25rem", height: "1.25rem" }} />
                    </div>
                    <h2 style={sectionTitleStyle}>6. Payment Terms</h2>
                </div>

                <h3 style={subheadingStyle}>6.1 Fees and Pricing</h3>
                <p style={paragraphStyle}>
                    Certain features of the Service may require payment. All fees are stated in Nigerian Naira (₦) unless
                    otherwise specified. Prices are subject to change with reasonable notice.
                </p>

                <h3 style={subheadingStyle}>6.2 Payment Processing</h3>
                <p style={paragraphStyle}>
                    Payments are processed through secure third-party payment processors (such as Paystack and Flutterwave). We
                    do not store your full payment card details on our servers.
                </p>

                <h3 style={subheadingStyle}>6.3 Refund Policy</h3>
                <p style={paragraphStyle}>
                    Refund requests will be evaluated on a case-by-case basis. Digital products and services that have been
                    accessed or used may not be eligible for a full refund. Subscription cancellations take effect at the end of
                    the current billing period.
                </p>

                <h3 style={subheadingStyle}>6.4 Taxes</h3>
                <p style={paragraphStyle}>
                    You are responsible for all applicable taxes related to your use of the Service. We may collect and remit
                    taxes on your behalf where required by law.
                </p>
            </div>

            {/* Section 7: Disclaimers */}
            <div style={sectionCardStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={iconBoxStyle}>
                        <AlertTriangle style={{ width: "1.25rem", height: "1.25rem" }} />
                    </div>
                    <h2 style={sectionTitleStyle}>7. Disclaimers and Limitation of Liability</h2>
                </div>

                <h3 style={subheadingStyle}>7.1 Disclaimer of Warranties</h3>
                <p style={paragraphStyle}>
                    THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES
                    OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS
                    FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ACCURACY.
                </p>

                <h3 style={subheadingStyle}>7.2 Limitation of Liability</h3>
                <p style={paragraphStyle}>
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, {companyName.toUpperCase()} SHALL NOT BE LIABLE FOR ANY
                    INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF
                    PROFITS, DATA, USE, OR GOODWILL, REGARDLESS OF THE CAUSE OF ACTION OR THEORY OF LIABILITY.
                </p>
                <p style={paragraphStyle}>
                    IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THE SERVICE EXCEED
                    THE AMOUNT PAID BY YOU TO US IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY, OR
                    ₦50,000 (FIFTY THOUSAND NAIRA), WHICHEVER IS GREATER.
                </p>

                <h3 style={subheadingStyle}>7.3 Indemnification</h3>
                <p style={paragraphStyle}>
                    You agree to indemnify, defend, and hold harmless {companyName}, its officers, directors, employees, and
                    agents from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses
                    arising from your use of the Service or violation of these Terms.
                </p>
            </div>

            {/* Section 8: Termination */}
            <div style={sectionCardStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={iconBoxStyle}>
                        <RefreshCw style={{ width: "1.25rem", height: "1.25rem" }} />
                    </div>
                    <h2 style={sectionTitleStyle}>8. Termination and Suspension</h2>
                </div>

                <p style={paragraphStyle}>
                    We may terminate or suspend your access to the Service immediately, without prior notice or liability, for
                    any reason, including if you breach these Terms. Upon termination:
                </p>
                <ul style={listStyle}>
                    <BulletItem>Your right to use the Service will immediately cease</BulletItem>
                    <BulletItem>We may delete your account and all associated data, subject to our data retention policy</BulletItem>
                    <BulletItem>Any outstanding payments or obligations will remain due</BulletItem>
                    <BulletItem>Provisions that by their nature should survive termination will survive (including intellectual property, disclaimers, limitation of liability, and indemnification)</BulletItem>
                </ul>
            </div>

            {/* Section 9: Governing Law */}
            <div style={sectionCardStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={iconBoxStyle}>
                        <Gavel style={{ width: "1.25rem", height: "1.25rem" }} />
                    </div>
                    <h2 style={sectionTitleStyle}>9. Governing Law and Dispute Resolution</h2>
                </div>

                <h3 style={subheadingStyle}>9.1 Governing Law</h3>
                <p style={paragraphStyle}>
                    These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria,
                    including the Nigeria Data Protection Regulation (NDPR), without regard to conflict of law principles.
                </p>

                <h3 style={subheadingStyle}>9.2 Dispute Resolution</h3>
                <p style={paragraphStyle}>
                    Any dispute arising out of or in connection with these Terms shall first be attempted to be resolved through
                    good faith negotiation. If the dispute cannot be resolved through negotiation within 30 days, either party
                    may submit the dispute to mediation, and if mediation fails, to binding arbitration in Lagos, Nigeria, in
                    accordance with the Arbitration and Conciliation Act of Nigeria.
                </p>

                <h3 style={subheadingStyle}>9.3 Class Action Waiver</h3>
                <p style={paragraphStyle}>
                    You agree that any disputes will be resolved on an individual basis and that you will not bring or
                    participate in any class, collective, or representative action.
                </p>
            </div>

            {/* Section 10: General Provisions */}
            <div style={sectionCardStyle}>
                <div style={sectionHeaderStyle}>
                    <div style={iconBoxStyle}>
                        <Scale style={{ width: "1.25rem", height: "1.25rem" }} />
                    </div>
                    <h2 style={sectionTitleStyle}>10. General Provisions</h2>
                </div>

                <h3 style={subheadingStyle}>10.1 Entire Agreement</h3>
                <p style={paragraphStyle}>
                    These Terms, together with our Privacy Policy and any other legal notices or agreements published on the
                    Service, constitute the entire agreement between you and {companyName} regarding the use of the Service.
                </p>

                <h3 style={subheadingStyle}>10.2 Severability</h3>
                <p style={paragraphStyle}>
                    If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or
                    eliminated to the minimum extent necessary, and the remaining provisions shall continue in full force and
                    effect.
                </p>

                <h3 style={subheadingStyle}>10.3 Waiver</h3>
                <p style={paragraphStyle}>
                    No waiver of any term or condition shall be deemed a further or continuing waiver of such term or any other
                    term, and our failure to assert any right or provision under these Terms shall not constitute a waiver of
                    such right or provision.
                </p>

                <h3 style={subheadingStyle}>10.4 Assignment</h3>
                <p style={paragraphStyle}>
                    You may not assign or transfer your rights under these Terms without our prior written consent. We may assign
                    our rights and obligations under these Terms without restriction.
                </p>

                <h3 style={subheadingStyle}>10.5 Changes to Terms</h3>
                <p style={paragraphStyle}>
                    We reserve the right to modify these Terms at any time. Material changes will be communicated via the Service
                    or email. Your continued use of the Service after any modifications constitutes your acceptance of the
                    updated Terms.
                </p>
            </div>

            {/* Additional Sections */}
            {additionalSections.map((section, index) => (
                <div key={index} style={sectionCardStyle}>
                    <div style={sectionHeaderStyle}>
                        <div style={iconBoxStyle}>
                            <FileText style={{ width: "1.25rem", height: "1.25rem" }} />
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
                    If you have any questions or concerns about these Terms and Conditions, please contact us:
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
