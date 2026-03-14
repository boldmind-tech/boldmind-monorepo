"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Calendar,
    ChevronLeft,
    ChevronRight,
    ArrowLeft,
    Plus,
    Share2,
    Clock,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const POSTS_BY_DAY: Record<string, Array<{ id: number; platform: string; content: string; time: string; status: "ready" | "draft" }>> = {
    "1": [
        { id: 1, platform: "Instagram", content: "5 Tips for SaaS Growth 🚀", time: "2:00 PM", status: "ready" },
        { id: 2, platform: "Facebook", content: "New case study: Acme Corp", time: "5:30 PM", status: "ready" },
    ],
    "3": [
        { id: 3, platform: "TikTok", content: "Behind the scenes 🎬", time: "10:00 AM", status: "draft" },
    ],
    "5": [
        { id: 4, platform: "Instagram", content: "Customer spotlight 💡", time: "3:00 PM", status: "ready" },
        { id: 5, platform: "Facebook", content: "Weekly roundup thread", time: "9:00 AM", status: "draft" },
    ],
    "7": [
        { id: 6, platform: "Instagram", content: "Product update announcement", time: "11:00 AM", status: "ready" },
        { id: 7, platform: "TikTok", content: "Quick tips video", time: "4:00 PM", status: "ready" },
        { id: 8, platform: "Facebook", content: "Community Q&A recap", time: "6:00 PM", status: "draft" },
    ],
    "10": [
        { id: 9, platform: "Instagram", content: "Motivation Monday 💪", time: "8:00 AM", status: "ready" },
    ],
    "12": [
        { id: 10, platform: "Facebook", content: "Blog post share: AI in 2026", time: "10:00 AM", status: "ready" },
        { id: 11, platform: "Instagram", content: "Team photo carousel", time: "2:00 PM", status: "ready" },
    ],
    "14": [
        { id: 12, platform: "TikTok", content: "Tutorial: Setup guide", time: "12:00 PM", status: "draft" },
    ],
    "17": [
        { id: 13, platform: "Instagram", content: "Feature deep dive 🔍", time: "1:00 PM", status: "ready" },
        { id: 14, platform: "Facebook", content: "Webinar announcement", time: "3:00 PM", status: "ready" },
    ],
    "19": [
        { id: 15, platform: "Instagram", content: "User testimonial video", time: "11:00 AM", status: "ready" },
    ],
    "21": [
        { id: 16, platform: "TikTok", content: "Industry trend analysis", time: "10:00 AM", status: "draft" },
        { id: 17, platform: "Instagram", content: "Weekend vibes 🌴", time: "5:00 PM", status: "ready" },
        { id: 18, platform: "Facebook", content: "Success story share", time: "2:00 PM", status: "ready" },
    ],
    "24": [
        { id: 19, platform: "Instagram", content: "New integration launch 🚀", time: "9:00 AM", status: "ready" },
    ],
    "26": [
        { id: 20, platform: "Facebook", content: "Partner spotlight", time: "11:00 AM", status: "ready" },
        { id: 21, platform: "TikTok", content: "Quick hack video", time: "3:00 PM", status: "draft" },
    ],
    "28": [
        { id: 22, platform: "Instagram", content: "Month in review recap", time: "4:00 PM", status: "ready" },
    ],
    "31": [
        { id: 23, platform: "Facebook", content: "April content preview", time: "10:00 AM", status: "draft" },
    ],
};

const getPlatformColor = (platform: string) => {
    const colors: Record<string, string> = {
        Instagram: "bg-gradient-to-r from-purple-500 to-pink-500",
        Facebook: "bg-blue-600",
        TikTok: "bg-gray-900",
    };
    return colors[platform] || "bg-gray-500";
};

export default function SocialCalendarPage() {
    const [selectedDay, setSelectedDay] = useState<string | null>("1");
    const [viewMode, setViewMode] = useState<"month" | "week">("month");

    const currentMonth = "March 2026";
    const daysInMonth = 31;
    const startOffset = 6; // March 2026 starts on Sunday, so 6 offset for Mon-first

    const selectedPosts = selectedDay ? POSTS_BY_DAY[selectedDay] || [] : [];
    const totalPosts = Object.values(POSTS_BY_DAY).flat().length;
    const readyPosts = Object.values(POSTS_BY_DAY).flat().filter((p) => p.status === "ready").length;

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b bg-card px-6 py-3">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/social">
                            <Button variant="ghost" size="sm" className="gap-1.5 text-xs">
                                <ArrowLeft className="h-3.5 w-3.5" /> Dashboard
                            </Button>
                        </Link>
                        <div className="h-px w-4 bg-border rotate-90" />
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <h1 className="font-semibold text-sm">Content Calendar</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1 bg-muted rounded-md p-0.5">
                            <Button
                                variant={viewMode === "month" ? "default" : "ghost"}
                                size="sm"
                                className="h-7 text-xs px-3"
                                onClick={() => setViewMode("month")}
                            >
                                Month
                            </Button>
                            <Button
                                variant={viewMode === "week" ? "default" : "ghost"}
                                size="sm"
                                className="h-7 text-xs px-3"
                                onClick={() => setViewMode("week")}
                            >
                                Week
                            </Button>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Badge variant="secondary" className="text-xs">{totalPosts} posts · {readyPosts} ready</Badge>
                        </div>
                        <Link href="/social/generate">
                            <Button size="sm" className="h-8 text-xs gap-1.5 bg-gradient-to-r from-pink-600 to-rose-600">
                                <Plus className="h-3 w-3" /> New Post
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Calendar Grid */}
                    <div className="lg:col-span-3">
                        <Card className="border">
                            <CardHeader className="py-3 px-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                                            <ChevronLeft className="h-4 w-4" />
                                        </Button>
                                        <CardTitle className="text-base font-bold">{currentMonth}</CardTitle>
                                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                                            <ChevronRight className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <Button variant="ghost" size="sm" className="h-7 text-xs">Today</Button>
                                </div>
                            </CardHeader>
                            <CardContent className="px-4 pb-4">
                                {/* Day headers */}
                                <div className="grid grid-cols-7 gap-1 mb-1">
                                    {DAYS.map((d) => (
                                        <div key={d} className="text-xs font-semibold text-muted-foreground text-center py-2">
                                            {d}
                                        </div>
                                    ))}
                                </div>

                                {/* Calendar days */}
                                <div className="grid grid-cols-7 gap-1">
                                    {/* Empty cells for offset */}
                                    {[...Array(startOffset)].map((_, i) => (
                                        <div key={`empty-${i}`} className="h-24 rounded-lg" />
                                    ))}

                                    {/* Actual days */}
                                    {[...Array(daysInMonth)].map((_, i) => {
                                        const day = String(i + 1);
                                        const posts = POSTS_BY_DAY[day] || [];
                                        const isSelected = selectedDay === day;
                                        const isToday = day === "1";

                                        return (
                                            <div
                                                key={day}
                                                className={`h-24 rounded-lg border p-1.5 cursor-pointer transition-all hover:shadow-sm ${isSelected ? "ring-2 ring-primary border-primary bg-primary/5" : "hover:border-primary/30"
                                                    } ${isToday ? "bg-primary/5" : ""}`}
                                                onClick={() => setSelectedDay(day)}
                                            >
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className={`text-xs font-medium ${isToday ? "bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center" : ""}`}>
                                                        {i + 1}
                                                    </span>
                                                    {posts.length > 0 && (
                                                        <span className="text-xs text-muted-foreground">{posts.length}</span>
                                                    )}
                                                </div>
                                                <div className="space-y-0.5 overflow-hidden">
                                                    {posts.slice(0, 2).map((post) => (
                                                        <div
                                                            key={post.id}
                                                            className={`text-xs truncate rounded px-1 py-0.5 text-white ${getPlatformColor(post.platform)}`}
                                                        >
                                                            {post.content.slice(0, 18)}...
                                                        </div>
                                                    ))}
                                                    {posts.length > 2 && (
                                                        <span className="text-xs text-muted-foreground">+{posts.length - 2} more</span>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Day Detail Panel */}
                    <div className="lg:col-span-1">
                        <Card className="border sticky top-6">
                            <CardHeader className="py-3 px-4">
                                <CardTitle className="text-sm font-semibold flex items-center gap-1.5">
                                    <Clock className="h-3.5 w-3.5 text-primary" />
                                    {selectedDay ? `March ${selectedDay}, 2026` : "Select a day"}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="px-4 pb-4">
                                {selectedPosts.length > 0 ? (
                                    <div className="space-y-3">
                                        {selectedPosts.map((post) => (
                                            <div key={post.id} className="p-3 rounded-lg border bg-surface">
                                                <div className="flex items-center justify-between mb-1.5">
                                                    <div className="flex items-center gap-1.5">
                                                        <div className={`h-5 w-5 rounded ${getPlatformColor(post.platform)} flex items-center justify-center`}>
                                                            <Share2 className="h-3 w-3 text-white" />
                                                        </div>
                                                        <span className="text-xs font-medium">{post.platform}</span>
                                                    </div>
                                                    <Badge
                                                        variant={post.status === "ready" ? "default" : "secondary"}
                                                        className="text-xs h-5 px-1.5"
                                                    >
                                                        {post.status === "ready" ? "Ready" : "Draft"}
                                                    </Badge>
                                                </div>
                                                <p className="text-xs text-foreground mb-1.5 line-clamp-2">{post.content}</p>
                                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                    <Clock className="h-3 w-3" /> {post.time}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <Calendar className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                                        <p className="text-sm text-muted-foreground mb-3">
                                            {selectedDay ? "No posts scheduled" : "Click a day to view posts"}
                                        </p>
                                        {selectedDay && (
                                            <Link href="/social/generate">
                                                <Button size="sm" className="text-xs gap-1.5 bg-gradient-to-r from-pink-600 to-rose-600">
                                                    <Plus className="h-3 w-3" /> Schedule Post
                                                </Button>
                                            </Link>
                                        )}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
