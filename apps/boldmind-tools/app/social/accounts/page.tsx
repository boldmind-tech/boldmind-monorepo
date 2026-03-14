"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Share2,
    ArrowLeft,
    Plus,
    CheckCircle2,
    AlertCircle,
    Settings,
    ExternalLink,
    RefreshCw,
    Trash2,
    BarChart3,
    TrendingUp,
    Users,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Separator } from "@/app/components/ui/separator";

const ACCOUNTS = [
    {
        id: "ig",
        platform: "Instagram",
        handle: "@yourbrand",
        connected: true,
        followers: "12.4K",
        following: "892",
        posts: "347",
        engagement: "4.8%",
        lastSync: "5 minutes ago",
        color: "from-purple-500 to-pink-500",
        stats: { reach: "18.2K", impressions: "45.6K", clicks: "1.2K" },
    },
    {
        id: "fb",
        platform: "Facebook",
        handle: "Your Brand Page",
        connected: true,
        followers: "8.7K",
        following: "—",
        posts: "203",
        engagement: "3.2%",
        lastSync: "12 minutes ago",
        color: "from-blue-600 to-blue-500",
        stats: { reach: "12.8K", impressions: "34.1K", clicks: "987" },
    },
    {
        id: "tt",
        platform: "TikTok",
        handle: "@yourbrand",
        connected: true,
        followers: "3.2K",
        following: "156",
        posts: "89",
        engagement: "7.1%",
        lastSync: "1 hour ago",
        color: "from-gray-900 to-gray-700",
        stats: { reach: "28.4K", impressions: "92.3K", clicks: "3.4K" },
    },
    {
        id: "tw",
        platform: "X (Twitter)",
        handle: "@yourbrand",
        connected: false,
        followers: "—",
        following: "—",
        posts: "—",
        engagement: "—",
        lastSync: null,
        color: "from-gray-800 to-gray-600",
        stats: { reach: "—", impressions: "—", clicks: "—" },
    },
    {
        id: "li",
        platform: "LinkedIn",
        handle: "Your Brand Company",
        connected: false,
        followers: "—",
        following: "—",
        posts: "—",
        engagement: "—",
        lastSync: null,
        color: "from-blue-700 to-blue-600",
        stats: { reach: "—", impressions: "—", clicks: "—" },
    },
];

export default function SocialAccountsPage() {
    const [accounts, setAccounts] = useState(ACCOUNTS);
    const connectedCount = accounts.filter((a) => a.connected).length;

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b bg-card px-6 py-3">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/social">
                            <Button variant="ghost" size="sm" className="gap-1.5 text-xs">
                                <ArrowLeft className="h-3.5 w-3.5" /> Dashboard
                            </Button>
                        </Link>
                        <div className="h-px w-4 bg-border rotate-90" />
                        <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" />
                            <h1 className="font-semibold text-sm">Connected Accounts</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">{connectedCount} connected</Badge>
                        <Button size="sm" className="h-8 text-xs gap-1.5 bg-gradient-to-r from-pink-600 to-rose-600">
                            <Plus className="h-3 w-3" /> Add Account
                        </Button>
                    </div>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">
                {/* Account Cards */}
                {accounts.map((account) => (
                    <Card key={account.id} className={`border ${!account.connected ? "opacity-70" : ""}`}>
                        <CardContent className="p-0">
                            <div className="flex flex-col lg:flex-row">
                                {/* Account Info */}
                                <div className="p-5 flex-1 border-b lg:border-b-0 lg:border-r">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${account.color} flex items-center justify-center`}>
                                                <Share2 className="h-6 w-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">{account.platform}</h3>
                                                <span className="text-sm text-muted-foreground">{account.handle}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {account.connected ? (
                                                <Badge variant="default" className="text-xs bg-emerald-600">
                                                    <CheckCircle2 className="h-3 w-3 mr-1" /> Connected
                                                </Badge>
                                            ) : (
                                                <Badge variant="outline" className="text-xs">
                                                    <AlertCircle className="h-3 w-3 mr-1" /> Not Connected
                                                </Badge>
                                            )}
                                        </div>
                                    </div>

                                    {account.connected ? (
                                        <>
                                            <div className="grid grid-cols-4 gap-4 mb-4">
                                                {[
                                                    { label: "Followers", value: account.followers },
                                                    { label: "Posts", value: account.posts },
                                                    { label: "Engagement", value: account.engagement },
                                                    { label: "Following", value: account.following },
                                                ].map((stat) => (
                                                    <div key={stat.label}>
                                                        <span className="text-xs text-muted-foreground">{stat.label}</span>
                                                        <p className="text-lg font-bold">{stat.value}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                                <span className="flex items-center gap-1">
                                                    <RefreshCw className="h-3 w-3" /> Last synced: {account.lastSync}
                                                </span>
                                                <div className="flex gap-2">
                                                    <Button variant="ghost" size="sm" className="h-7 text-xs gap-1">
                                                        <RefreshCw className="h-3 w-3" /> Sync
                                                    </Button>
                                                    <Button variant="ghost" size="sm" className="h-7 text-xs gap-1">
                                                        <Settings className="h-3 w-3" /> Settings
                                                    </Button>
                                                    <Button variant="ghost" size="sm" className="h-7 text-xs gap-1 text-red-500 hover:text-red-600">
                                                        <Trash2 className="h-3 w-3" /> Disconnect
                                                    </Button>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="text-center py-4">
                                            <p className="text-sm text-muted-foreground mb-3">
                                                Connect your {account.platform} account to start scheduling and publishing content.
                                            </p>
                                            <Button className="bg-gradient-to-r from-pink-600 to-rose-600 text-xs gap-1.5">
                                                <ExternalLink className="h-3 w-3" /> Connect {account.platform}
                                            </Button>
                                        </div>
                                    )}
                                </div>

                                {/* Account Stats Panel */}
                                {account.connected && (
                                    <div className="p-5 lg:w-[280px] bg-surface/30">
                                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-1.5">
                                            <BarChart3 className="h-3 w-3" /> This Month
                                        </h4>
                                        <div className="space-y-3">
                                            {[
                                                { label: "Reach", value: account.stats.reach },
                                                { label: "Impressions", value: account.stats.impressions },
                                                { label: "Link Clicks", value: account.stats.clicks },
                                            ].map((stat) => (
                                                <div key={stat.label} className="flex items-center justify-between">
                                                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                                                    <span className="text-sm font-semibold">{stat.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Separator className="my-3" />
                                        <div className="flex items-center gap-1.5 text-xs text-emerald-600">
                                            <TrendingUp className="h-3 w-3" />
                                            <span className="font-medium">+12% vs last month</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
