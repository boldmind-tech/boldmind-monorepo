"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Calendar,
    Sparkles,
    Share2,
    Plus,
    TrendingUp,
    Clock,
    CheckCircle2,
    BarChart3,
    ArrowRight,
    Zap,
    Users,
    Eye,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";

const STATS = [
    { label: "Scheduled Posts", value: "12", icon: Clock, change: "+3 this week", color: "text-blue-500" },
    { label: "Published", value: "48", icon: CheckCircle2, change: "+11 this week", color: "text-emerald-500" },
    { label: "Total Reach", value: "24.8K", icon: Eye, change: "+18% vs last week", color: "text-purple-500" },
    { label: "Engagement Rate", value: "4.2%", icon: TrendingUp, change: "+0.6% vs last week", color: "text-amber-500" },
];

const UPCOMING_POSTS = [
    { id: 1, platform: "Instagram", content: "5 Tips for SaaS Growth in 2026 🚀", time: "Today, 2:00 PM", status: "ready" },
    { id: 2, platform: "Facebook", content: "New case study: How Acme Corp scaled their ARR 3x", time: "Today, 5:30 PM", status: "ready" },
    { id: 3, platform: "TikTok", content: "Behind the scenes of our product launch 🎬", time: "Tomorrow, 10:00 AM", status: "draft" },
    { id: 4, platform: "Instagram", content: "Customer spotlight: @techstartup's journey 💡", time: "Tomorrow, 3:00 PM", status: "ready" },
    { id: 5, platform: "X (Twitter)", content: "Weekly industry roundup thread 🧵", time: "Mar 4, 9:00 AM", status: "draft" },
];

const PLATFORMS = [
    { name: "Instagram", handle: "@yourbrand", followers: "12.4K", connected: true, growth: "+340" },
    { name: "Facebook", handle: "Your Brand Page", followers: "8.7K", connected: true, growth: "+127" },
    { name: "TikTok", handle: "@yourbrand", followers: "3.2K", connected: true, growth: "+890" },
    { name: "X (Twitter)", handle: "@yourbrand", followers: "5.1K", connected: false, growth: "—" },
];

const getPlatformColor = (platform: string) => {
    const colors: Record<string, string> = {
        Instagram: "bg-gradient-to-r from-purple-500 to-pink-500",
        Facebook: "bg-blue-600",
        TikTok: "bg-black",
        "X (Twitter)": "bg-gray-800",
    };
    return colors[platform] || "bg-gray-500";
};

export default function SocialContentFactoryPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b bg-card px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-pink-600 to-rose-600 flex items-center justify-center">
                            <Share2 className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <h1 className="font-bold text-lg tracking-tight">Social Content Factory</h1>
                            <p className="text-xs text-muted-foreground">Create, schedule & manage social content</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href="/social/calendar">
                            <Button variant="outline" size="sm" className="text-xs gap-1.5">
                                <Calendar className="h-3.5 w-3.5" /> Calendar
                            </Button>
                        </Link>
                        <Link href="/social/generate">
                            <Button size="sm" className="text-xs gap-1.5 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700">
                                <Plus className="h-3.5 w-3.5" /> Create Post
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    {STATS.map((stat) => (
                        <Card key={stat.label} className="border">
                            <CardContent className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs text-muted-foreground font-medium">{stat.label}</span>
                                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                                </div>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <span className="text-xs text-muted-foreground">{stat.change}</span>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Upcoming Posts */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold flex items-center gap-2">
                                <Clock className="h-5 w-5 text-primary" />
                                Upcoming Posts
                            </h2>
                            <Link href="/social/calendar">
                                <Button variant="ghost" size="sm" className="text-xs gap-1">
                                    View All <ArrowRight className="h-3 w-3" />
                                </Button>
                            </Link>
                        </div>
                        <div className="space-y-3">
                            {UPCOMING_POSTS.map((post) => (
                                <Card key={post.id} className="border hover:shadow-sm transition-shadow">
                                    <CardContent className="p-4 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className={`h-8 w-8 rounded-lg ${getPlatformColor(post.platform)} flex items-center justify-center`}>
                                                <Share2 className="h-4 w-4 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium line-clamp-1">{post.content}</p>
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                                                    <span>{post.platform}</span>
                                                    <span>·</span>
                                                    <span>{post.time}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Badge
                                            variant={post.status === "ready" ? "default" : "secondary"}
                                            className="text-xs"
                                        >
                                            {post.status === "ready" ? "Ready" : "Draft"}
                                        </Badge>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Connected Platforms */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold flex items-center gap-2">
                                <Users className="h-5 w-5 text-primary" />
                                Platforms
                            </h2>
                            <Link href="/social/accounts">
                                <Button variant="ghost" size="sm" className="text-xs gap-1">
                                    Manage <ArrowRight className="h-3 w-3" />
                                </Button>
                            </Link>
                        </div>
                        <div className="space-y-3">
                            {PLATFORMS.map((platform) => (
                                <Card key={platform.name} className="border">
                                    <CardContent className="p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2.5">
                                                <div className={`h-8 w-8 rounded-lg ${getPlatformColor(platform.name)} flex items-center justify-center`}>
                                                    <Share2 className="h-4 w-4 text-white" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium">{platform.name}</div>
                                                    <div className="text-xs text-muted-foreground">{platform.handle}</div>
                                                </div>
                                            </div>
                                            {platform.connected ? (
                                                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                                            ) : (
                                                <Badge variant="outline" className="text-xs">Connect</Badge>
                                            )}
                                        </div>
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-muted-foreground">{platform.followers} followers</span>
                                            <span className="text-emerald-600 font-medium">{platform.growth} this month</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Quick Actions */}
                        <Card className="border mt-4 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20">
                            <CardContent className="p-4 text-center">
                                <Sparkles className="h-8 w-8 text-pink-500 mx-auto mb-2" />
                                <h3 className="font-semibold text-sm mb-1">AI Content Generator</h3>
                                <p className="text-xs text-muted-foreground mb-3">
                                    Generate engaging social media content with AI
                                </p>
                                <Link href="/social/generate">
                                    <Button size="sm" className="text-xs w-full bg-gradient-to-r from-pink-600 to-rose-600">
                                        <Sparkles className="h-3 w-3 mr-1.5" /> Generate Content
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
