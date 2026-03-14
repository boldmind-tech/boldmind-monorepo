"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Search,
    Mail,
    Shield,
    Zap,
    Globe,
    ArrowRight,
    BarChart3,
    BadgeCheck,
    Target,
    Database,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";

const RECENT_SEARCHES = [
    { domain: "stripe.com", results: 847, verified: 723, date: "2 hours ago" },
    { domain: "notion.so", results: 412, verified: 389, date: "5 hours ago" },
    { domain: "figma.com", results: 634, verified: 501, date: "1 day ago" },
    { domain: "vercel.com", results: 298, verified: 267, date: "2 days ago" },
    { domain: "linear.app", results: 156, verified: 148, date: "3 days ago" },
];

const FEATURES = [
    {
        icon: Globe,
        title: "Domain Scanner",
        description: "Scrape verified email addresses from any company domain with pattern-matching algorithms.",
        color: "text-blue-500 bg-blue-50",
    },
    {
        icon: Shield,
        title: "Email Verification",
        description: "Real-time SMTP and DNS verification to ensure every email reaches a real inbox.",
        color: "text-emerald-500 bg-emerald-50",
    },
    {
        icon: Database,
        title: "Data Enrichment",
        description: "Enrich contacts with job titles, LinkedIn profiles, company data, and social links.",
        color: "text-purple-500 bg-purple-50",
    },
    {
        icon: Zap,
        title: "Bulk Processing",
        description: "Upload CSVs with thousands of domains and process them in parallel for fast results.",
        color: "text-amber-500 bg-amber-50",
    },
];

export default function EmailScraperPage() {
    const [domain, setDomain] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = () => {
        if (!domain) return;
        setIsSearching(true);
        setTimeout(() => setIsSearching(false), 1500);
    };

    const usedCredits = 1847;
    const totalCredits = 5000;

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b bg-card px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                            <Mail className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <h1 className="font-bold text-lg tracking-tight">EmailScraper Pro</h1>
                            <p className="text-xs text-muted-foreground">Find & verify business emails at scale</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right mr-2">
                            <span className="text-xs text-muted-foreground block">Credits remaining</span>
                            <span className="text-sm font-semibold">{(totalCredits - usedCredits).toLocaleString()}</span>
                        </div>
                        <div className="w-24">
                            <Progress value={(usedCredits / totalCredits) * 100} className="h-1.5" />
                        </div>
                        <Link href="/emailscraper/results">
                            <Button variant="outline" size="sm" className="text-xs">
                                View Results
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Search Section */}
            <section className="py-16 px-6 bg-gradient-to-b from-purple-50/50 to-background">
                <div className="max-w-3xl mx-auto text-center">
                    <Badge variant="secondary" className="mb-4 text-xs">
                        <Zap className="h-3 w-3 mr-1" /> AI-Powered Lead Generation
                    </Badge>
                    <h2 className="text-4xl font-bold text-foreground mb-3 tracking-tight">
                        Find any business email in seconds
                    </h2>
                    <p className="text-muted-foreground mb-8 text-lg">
                        Enter a company domain to discover and verify employee email addresses with our advanced scraping engine.
                    </p>

                    <div className="flex gap-2 max-w-xl mx-auto">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Enter a domain (e.g. stripe.com)"
                                className="pl-10 h-12 text-sm"
                                value={domain}
                                onChange={(e) => setDomain(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                            />
                        </div>
                        <Button
                            onClick={handleSearch}
                            disabled={!domain || isSearching}
                            className="h-12 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                        >
                            {isSearching ? "Searching..." : "Search"}
                            {!isSearching && <ArrowRight className="h-4 w-4 ml-1.5" />}
                        </Button>
                    </div>

                    <p className="text-xs text-muted-foreground mt-3">
                        Supports batch URLs. Paste multiple domains separated by commas.
                    </p>
                </div>
            </section>

            {/* Stats Row */}
            <section className="px-6 -mt-4">
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-4">
                    {[
                        { label: "Total Lookups", value: "1,847", icon: Search, change: "+124 this week" },
                        { label: "Verified Emails", value: "1,523", icon: BadgeCheck, change: "82.4% rate" },
                        { label: "Domains Scanned", value: "47", icon: Globe, change: "+8 this week" },
                        { label: "Accuracy Rate", value: "97.2%", icon: Target, change: "Industry-leading" },
                    ].map((stat) => (
                        <Card key={stat.label} className="border">
                            <CardContent className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs text-muted-foreground font-medium">{stat.label}</span>
                                    <stat.icon className="h-4 w-4 text-muted-foreground" />
                                </div>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <span className="text-xs text-muted-foreground">{stat.change}</span>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Features + Recent Searches */}
            <section className="px-6 py-12">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Features */}
                    <div className="lg:col-span-3">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-primary" />
                            Core Features
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {FEATURES.map((feature) => (
                                <Card key={feature.title} className="border hover:shadow-md transition-shadow">
                                    <CardContent className="p-4">
                                        <div className={`h-10 w-10 rounded-lg ${feature.color} flex items-center justify-center mb-3`}>
                                            <feature.icon className="h-5 w-5" />
                                        </div>
                                        <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Recent Searches */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <Search className="h-5 w-5 text-primary" />
                            Recent Searches
                        </h3>
                        <Card className="border">
                            <CardContent className="p-0">
                                {RECENT_SEARCHES.map((search, i) => (
                                    <div
                                        key={search.domain}
                                        className={`flex items-center justify-between p-3 hover:bg-surface/60 transition-colors ${i < RECENT_SEARCHES.length - 1 ? "border-b" : ""
                                            }`}
                                    >
                                        <div>
                                            <div className="text-sm font-medium">{search.domain}</div>
                                            <div className="text-xs text-muted-foreground">
                                                {search.results} found · {search.verified} verified
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs text-muted-foreground">{search.date}</span>
                                            <Link href="/emailscraper/results">
                                                <Button variant="ghost" size="sm" className="h-6 text-xs ml-2">
                                                    View
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
