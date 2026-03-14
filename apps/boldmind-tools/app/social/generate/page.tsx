"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Sparkles,
    ArrowLeft,
    Send,
    Image,
    Video,
    Hash,
    Clock,
    Save,
    Share2,
    RefreshCw,
    CheckCircle2,
    Copy,
    Wand2,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Separator } from "@/app/components/ui/separator";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select";

const TONE_OPTIONS = [
    { value: "professional", label: "Professional" },
    { value: "casual", label: "Casual & Friendly" },
    { value: "inspirational", label: "Inspirational" },
    { value: "educational", label: "Educational" },
    { value: "humorous", label: "Humorous" },
];

const PLATFORM_PREVIEWS = [
    { id: "instagram", name: "Instagram", maxChars: 2200, color: "from-purple-500 to-pink-500" },
    { id: "facebook", name: "Facebook", maxChars: 63206, color: "from-blue-600 to-blue-500" },
    { id: "tiktok", name: "TikTok", maxChars: 2200, color: "from-gray-900 to-gray-700" },
    { id: "twitter", name: "X (Twitter)", maxChars: 280, color: "from-gray-800 to-gray-600" },
];

const SUGGESTED_HASHTAGS = [
    "#SaaS", "#Growth", "#B2B", "#Marketing", "#StartupLife",
    "#TechInAfrica", "#NigerianBusiness", "#AI", "#Productivity",
    "#ContentMarketing", "#SocialMedia", "#Leadership",
];

export default function SocialGeneratePage() {
    const [topic, setTopic] = useState("");
    const [tone, setTone] = useState("professional");
    const [generatedCaption, setGeneratedCaption] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["instagram", "facebook"]);
    const [selectedHashtags, setSelectedHashtags] = useState<string[]>([]);

    const handleGenerate = () => {
        if (!topic) return;
        setIsGenerating(true);
        setTimeout(() => {
            const tonePrefix: Record<string, string> = {
                professional: "📊",
                casual: "👋",
                inspirational: "🌟",
                educational: "📚",
                humorous: "😄",
            };
            setGeneratedCaption(
                `${tonePrefix[tone] || "🚀"} ${topic}\n\nHere's what you need to know about ${topic.toLowerCase()} in 2026:\n\n1️⃣ Focus on value-driven content that resonates with your audience\n2️⃣ Leverage AI for personalization at scale\n3️⃣ Build authentic community engagement across platforms\n4️⃣ Measure what matters — engagement > vanity metrics\n5️⃣ Stay consistent with your brand voice\n\nWhat's your take? Drop your thoughts below 👇\n\n${selectedHashtags.join(" ") || "#Growth #Marketing #B2B"}`
            );
            setIsGenerating(false);
        }, 1500);
    };

    const togglePlatform = (id: string) => {
        setSelectedPlatforms((prev) =>
            prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
        );
    };

    const toggleHashtag = (tag: string) => {
        setSelectedHashtags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

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
                            <Sparkles className="h-4 w-4 text-accent" />
                            <h1 className="font-semibold text-sm">AI Content Generator</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {generatedCaption && (
                            <>
                                <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5">
                                    <Save className="h-3 w-3" /> Save Draft
                                </Button>
                                <Button size="sm" className="h-8 text-xs gap-1.5 bg-gradient-to-r from-pink-600 to-rose-600">
                                    <Send className="h-3 w-3" /> Schedule
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* Left: Input Controls */}
                    <div className="lg:col-span-2 space-y-5">
                        {/* Topic Input */}
                        <Card className="border">
                            <CardHeader className="py-3 px-4">
                                <CardTitle className="text-sm font-semibold flex items-center gap-1.5">
                                    <Wand2 className="h-3.5 w-3.5 text-accent" />
                                    Content Prompt
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="px-4 pb-4 space-y-3">
                                <div>
                                    <label className="text-xs font-medium text-muted-foreground mb-1 block">
                                        Topic or Idea
                                    </label>
                                    <Input
                                        placeholder="e.g. B2B Lead Generation Strategies"
                                        className="h-9 text-sm"
                                        value={topic}
                                        onChange={(e) => setTopic(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-medium text-muted-foreground mb-1 block">
                                        Tone
                                    </label>
                                    <Select value={tone} onValueChange={setTone}>
                                        <SelectTrigger className="h-9 text-sm">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {TONE_OPTIONS.map((t) => (
                                                <SelectItem key={t.value} value={t.value}>
                                                    {t.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button
                                    onClick={handleGenerate}
                                    disabled={!topic || isGenerating}
                                    className="w-full h-9 text-xs gap-1.5 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700"
                                >
                                    <Sparkles className="h-3 w-3" />
                                    {isGenerating ? "Generating..." : "Generate Content"}
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Platform Selection */}
                        <Card className="border">
                            <CardHeader className="py-3 px-4">
                                <CardTitle className="text-sm font-semibold flex items-center gap-1.5">
                                    <Share2 className="h-3.5 w-3.5 text-primary" />
                                    Target Platforms
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="px-4 pb-4 space-y-2">
                                {PLATFORM_PREVIEWS.map((p) => (
                                    <div
                                        key={p.id}
                                        className={`flex items-center justify-between p-2.5 rounded-lg border cursor-pointer transition-all ${selectedPlatforms.includes(p.id)
                                                ? "ring-2 ring-primary border-primary bg-primary/5"
                                                : "hover:border-primary/30"
                                            }`}
                                        onClick={() => togglePlatform(p.id)}
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <div className={`h-7 w-7 rounded-md bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                                                <Share2 className="h-3.5 w-3.5 text-white" />
                                            </div>
                                            <div>
                                                <span className="text-xs font-medium">{p.name}</span>
                                                <span className="text-xs text-muted-foreground block">{p.maxChars.toLocaleString()} char limit</span>
                                            </div>
                                        </div>
                                        {selectedPlatforms.includes(p.id) && (
                                            <CheckCircle2 className="h-4 w-4 text-primary" />
                                        )}
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Hashtag Suggestions */}
                        <Card className="border">
                            <CardHeader className="py-3 px-4">
                                <CardTitle className="text-sm font-semibold flex items-center gap-1.5">
                                    <Hash className="h-3.5 w-3.5 text-primary" />
                                    Suggested Hashtags
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="px-4 pb-4">
                                <div className="flex flex-wrap gap-1.5">
                                    {SUGGESTED_HASHTAGS.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant={selectedHashtags.includes(tag) ? "default" : "secondary"}
                                            className="text-xs cursor-pointer transition-colors"
                                            onClick={() => toggleHashtag(tag)}
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right: Preview + Output */}
                    <div className="lg:col-span-3 space-y-5">
                        <Card className="border">
                            <CardHeader className="py-3 px-4">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-sm font-semibold flex items-center gap-1.5">
                                        <Sparkles className="h-3.5 w-3.5 text-accent" />
                                        Generated Content
                                    </CardTitle>
                                    {generatedCaption && (
                                        <div className="flex items-center gap-1.5">
                                            <Button variant="ghost" size="sm" className="h-7 text-xs gap-1" onClick={() => navigator.clipboard?.writeText(generatedCaption)}>
                                                <Copy className="h-3 w-3" /> Copy
                                            </Button>
                                            <Button variant="ghost" size="sm" className="h-7 text-xs gap-1" onClick={handleGenerate}>
                                                <RefreshCw className="h-3 w-3" /> Regenerate
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </CardHeader>
                            <CardContent className="px-4 pb-4">
                                {generatedCaption ? (
                                    <div className="space-y-4">
                                        <Textarea
                                            value={generatedCaption}
                                            onChange={(e) => setGeneratedCaption(e.target.value)}
                                            className="text-sm min-h-[200px] resize-none"
                                        />
                                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                                            <span>{generatedCaption.length} characters</span>
                                            <span>
                                                {selectedPlatforms.map((p) => {
                                                    const platform = PLATFORM_PREVIEWS.find((pp) => pp.id === p);
                                                    if (!platform) return null;
                                                    const isOver = generatedCaption.length > platform.maxChars;
                                                    return (
                                                        <Badge
                                                            key={p}
                                                            variant={isOver ? "destructive" : "secondary"}
                                                            className="text-xs ml-1"
                                                        >
                                                            {platform.name}: {isOver ? "Too long" : "OK"}
                                                        </Badge>
                                                    );
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-16">
                                        <Sparkles className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
                                        <h3 className="font-medium text-muted-foreground mb-1">No content generated yet</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Enter a topic and click Generate to create AI-powered social media content.
                                        </p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Media Generation */}
                        {generatedCaption && (
                            <div className="grid grid-cols-2 gap-4">
                                <Card className="border">
                                    <CardContent className="p-5 flex flex-col items-center justify-center text-center min-h-[160px]">
                                        <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center mb-3">
                                            <Image className="h-6 w-6 text-muted-foreground" />
                                        </div>
                                        <h4 className="font-medium text-sm mb-1">Image</h4>
                                        <p className="text-xs text-muted-foreground mb-3">
                                            Generate a matching visual for your post
                                        </p>
                                        <Button variant="outline" size="sm" className="text-xs gap-1.5">
                                            <Sparkles className="h-3 w-3" /> Generate Image
                                        </Button>
                                    </CardContent>
                                </Card>

                                <Card className="border">
                                    <CardContent className="p-5 flex flex-col items-center justify-center text-center min-h-[160px]">
                                        <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center mb-3">
                                            <Video className="h-6 w-6 text-muted-foreground" />
                                        </div>
                                        <h4 className="font-medium text-sm mb-1">Video</h4>
                                        <p className="text-xs text-muted-foreground mb-3">
                                            Create a short video from your content
                                        </p>
                                        <Button variant="outline" size="sm" className="text-xs gap-1.5">
                                            <Sparkles className="h-3 w-3" /> Generate Video
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {/* Schedule Actions */}
                        {generatedCaption && (
                            <Card className="border bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="font-semibold text-sm mb-0.5">Ready to publish?</h4>
                                            <p className="text-xs text-muted-foreground">
                                                Schedule this post to {selectedPlatforms.length} platform{selectedPlatforms.length !== 1 ? "s" : ""}
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="outline" size="sm" className="text-xs gap-1.5">
                                                <Save className="h-3 w-3" /> Save Draft
                                            </Button>
                                            <Button variant="outline" size="sm" className="text-xs gap-1.5">
                                                <Clock className="h-3 w-3" /> Schedule
                                            </Button>
                                            <Button size="sm" className="text-xs gap-1.5 bg-gradient-to-r from-pink-600 to-rose-600">
                                                <Send className="h-3 w-3" /> Publish Now
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
