import { useState } from "react";
import {
    Calendar,
    Sparkles,
    Image,
    Video,
    Send,
    Clock,
    Instagram,
    Facebook,
    MoreHorizontal,
    Plus,
    Link2,
    CheckCircle2,
    AlertCircle,
    Trash2,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Separator } from "@/app/components/ui/separator";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const CALENDAR_DATA: Record<string, { count: number; color: string }> = {
    "3": { count: 2, color: "bg-primary" },
    "5": { count: 1, color: "bg-accent" },
    "7": { count: 3, color: "bg-primary" },
    "10": { count: 1, color: "bg-accent" },
    "12": { count: 2, color: "bg-primary" },
    "14": { count: 1, color: "bg-primary" },
    "17": { count: 2, color: "bg-accent" },
    "19": { count: 1, color: "bg-primary" },
    "21": { count: 3, color: "bg-primary" },
    "24": { count: 1, color: "bg-accent" },
    "26": { count: 2, color: "bg-primary" },
    "28": { count: 1, color: "bg-primary" },
};

const SCHEDULED_POSTS = [
    { id: 1, platform: "Instagram", content: "5 Tips for SaaS Growth in 2026 🚀", time: "Today, 2:00 PM", status: "ready" },
    { id: 2, platform: "Facebook", content: "New case study: How Acme Corp scaled...", time: "Today, 5:30 PM", status: "ready" },
    { id: 3, platform: "TikTok", content: "Behind the scenes of our product launch", time: "Tomorrow, 10:00 AM", status: "draft" },
    { id: 4, platform: "Instagram", content: "Customer spotlight: @techstartup", time: "Tomorrow, 3:00 PM", status: "ready" },
    { id: 5, platform: "Facebook", content: "Weekly industry roundup thread", time: "Mar 4, 9:00 AM", status: "draft" },
];

const SOCIAL_ACCOUNTS = [
    { platform: "Instagram", handle: "@yourbrand", connected: true, followers: "12.4K", icon: Instagram },
    { platform: "Facebook", handle: "Your Brand Page", connected: true, followers: "8.7K", icon: Facebook },
    { platform: "TikTok", handle: "@yourbrand", connected: false, followers: "—", icon: Video },
];

const SocialFactoryTab = () => {
    const [topic, setTopic] = useState("");
    const [generatedCaption, setGeneratedCaption] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = () => {
        if (!topic) return;
        setIsGenerating(true);
        setTimeout(() => {
            setGeneratedCaption(
                `🚀 ${topic}\n\nHere's what you need to know about ${topic.toLowerCase()} in 2026:\n\n1️⃣ Focus on value-driven content\n2️⃣ Leverage AI for personalization\n3️⃣ Build authentic community engagement\n\n#B2B #Marketing #Growth`
            );
            setIsGenerating(false);
        }, 1200);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
            {/* Left: Calendar + Accounts */}
            <div className="lg:col-span-1 flex flex-col gap-4">
                {/* Mini Calendar */}
                <Card className="border">
                    <CardHeader className="py-3 px-4">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-sm font-semibold flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5 text-primary" />
                                March 2026
                            </CardTitle>
                            <Button variant="ghost" size="sm" className="h-6 text-xs">Today</Button>
                        </div>
                    </CardHeader>
                    <CardContent className="px-4 pb-3">
                        <div className="grid grid-cols-7 gap-0.5 text-center">
                            {DAYS.map((d) => (
                                <div key={d} className="text-2xs font-medium text-muted-foreground py-1">{d}</div>
                            ))}
                            {/* Empty cells for offset (March 2026 starts Sunday) */}
                            {[...Array(6)].map((_, i) => (
                                <div key={`empty-${i}`} className="h-8" />
                            ))}
                            {[...Array(31)].map((_, i) => {
                                const day = String(i + 1);
                                const data = CALENDAR_DATA[day];
                                return (
                                    <div
                                        key={day}
                                        className={`h-8 flex flex-col items-center justify-center rounded text-xs cursor-pointer hover:bg-muted transition-colors relative ${day === "1" ? "font-semibold text-primary" : ""
                                            }`}
                                    >
                                        <span>{i + 1}</span>
                                        {data && (
                                            <div className="flex gap-0.5 mt-0.5">
                                                {[...Array(Math.min(data.count, 3))].map((_, j) => (
                                                    <div key={j} className={`w-1 h-1 rounded-full ${data.color}`} />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>

                {/* Social Accounts */}
                <Card className="border">
                    <CardHeader className="py-3 px-4">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-sm font-semibold flex items-center gap-1.5">
                                <Link2 className="h-3.5 w-3.5 text-primary" />
                                Connected Accounts
                            </CardTitle>
                            <Button variant="ghost" size="sm" className="h-6 text-xs gap-1">
                                <Plus className="h-3 w-3" /> Add
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="px-4 pb-3 space-y-2">
                        {SOCIAL_ACCOUNTS.map((account) => (
                            <div
                                key={account.platform}
                                className="flex items-center justify-between p-2 rounded-md border bg-surface"
                            >
                                <div className="flex items-center gap-2.5">
                                    <account.icon className="h-4 w-4 text-foreground" />
                                    <div>
                                        <div className="text-xs font-medium">{account.platform}</div>
                                        <div className="text-2xs text-muted-foreground">{account.handle}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    {account.connected ? (
                                        <>
                                            <span className="text-2xs text-muted-foreground">{account.followers}</span>
                                            <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                                        </>
                                    ) : (
                                        <Button variant="outline" size="sm" className="h-6 text-2xs">
                                            Connect
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            {/* Center: AI Generation */}
            <div className="lg:col-span-1 flex flex-col gap-4">
                <Card className="border flex-1">
                    <CardHeader className="py-3 px-4">
                        <CardTitle className="text-sm font-semibold flex items-center gap-1.5">
                            <Sparkles className="h-3.5 w-3.5 text-accent" />
                            AI Content Generator
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 pb-4 flex flex-col gap-3">
                        <div>
                            <label className="text-xs font-medium text-muted-foreground mb-1 block">Topic</label>
                            <Input
                                placeholder="e.g. B2B Lead Generation Strategies"
                                className="h-9 text-sm"
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                            />
                        </div>
                        <Button
                            onClick={handleGenerate}
                            disabled={!topic || isGenerating}
                            className="w-full h-8 text-xs gap-1.5"
                        >
                            <Sparkles className="h-3 w-3" />
                            {isGenerating ? "Generating..." : "Generate Content"}
                        </Button>

                        {generatedCaption && (
                            <>
                                <Separator />
                                <div>
                                    <label className="text-xs font-medium text-muted-foreground mb-1 block">Caption</label>
                                    <Textarea
                                        value={generatedCaption}
                                        onChange={(e) => setGeneratedCaption(e.target.value)}
                                        className="text-xs min-h-[120px] resize-none"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="border rounded-md p-3 flex flex-col items-center justify-center gap-1.5 bg-surface min-h-[80px]">
                                        <Image className="h-5 w-5 text-muted-foreground" />
                                        <span className="text-2xs text-muted-foreground">Image Preview</span>
                                        <Button variant="outline" size="sm" className="h-6 text-2xs mt-1">
                                            Generate Image
                                        </Button>
                                    </div>
                                    <div className="border rounded-md p-3 flex flex-col items-center justify-center gap-1.5 bg-surface min-h-[80px]">
                                        <Video className="h-5 w-5 text-muted-foreground" />
                                        <span className="text-2xs text-muted-foreground">Video Preview</span>
                                        <Button variant="outline" size="sm" className="h-6 text-2xs mt-1">
                                            Generate Video
                                        </Button>
                                    </div>
                                </div>
                                <Button variant="default" className="w-full h-8 text-xs gap-1.5 bg-accent hover:bg-accent/90">
                                    <Send className="h-3 w-3" />
                                    Schedule Post
                                </Button>
                            </>
                        )}
                    </CardContent>
                </Card>
            </div>

            {/* Right: Scheduled Queue */}
            <div className="lg:col-span-1">
                <Card className="border h-full">
                    <CardHeader className="py-3 px-4">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-sm font-semibold flex items-center gap-1.5">
                                <Clock className="h-3.5 w-3.5 text-primary" />
                                Scheduled Queue
                            </CardTitle>
                            <Badge variant="secondary" className="text-2xs">{SCHEDULED_POSTS.length} posts</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="px-4 pb-3 space-y-2">
                        {SCHEDULED_POSTS.map((post) => (
                            <div key={post.id} className="p-2.5 rounded-md border bg-surface">
                                <div className="flex items-start justify-between mb-1">
                                    <div className="flex items-center gap-1.5">
                                        {post.platform === "Instagram" && <Instagram className="h-3 w-3" />}
                                        {post.platform === "Facebook" && <Facebook className="h-3 w-3" />}
                                        {post.platform === "TikTok" && <Video className="h-3 w-3" />}
                                        <span className="text-2xs font-medium">{post.platform}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Badge
                                            variant={post.status === "ready" ? "default" : "secondary"}
                                            className="text-2xs h-4 px-1.5"
                                        >
                                            {post.status === "ready" ? "Ready" : "Draft"}
                                        </Badge>
                                        <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                                            <Trash2 className="h-3 w-3 text-muted-foreground" />
                                        </Button>
                                    </div>
                                </div>
                                <p className="text-xs text-foreground mb-1 line-clamp-2">{post.content}</p>
                                <span className="text-2xs text-muted-foreground">{post.time}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default SocialFactoryTab;
