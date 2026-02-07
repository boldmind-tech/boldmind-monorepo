// APPS/WEB_APPS/amebogist/app/create/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Brain, Sparkles, Send, Image as ImageIcon, Globe, Languages } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { SuperNavbar, SuperFooter } from "@boldmind/ui";
import { amebogistAPI } from "../../lib/api";
import { AmebogistCategory } from "@boldmind/api-client";

export default function CreateArticlePage() {
    const router = useRouter();
    const [categories, setCategories] = useState<AmebogistCategory[]>([]);
    const [trends, setTrends] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [aiGenerating, setAiGenerating] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        contentEnglish: "",
        contentPidgin: "",
        contentIgbo: "",
        contentHausa: "",
        tags: "",
        featuredImage: "",
        autoVideo: false,
    });

    useEffect(() => {
        const loadInitialData = async () => {
            try {
                const [cats, trendData] = await Promise.all([
                    amebogistAPI.getCategories(),
                    amebogistAPI.articles.getTrends()
                ]);
                setCategories(cats.data);
                setTrends(trendData.data);
            } catch (error) {
                console.error("Failed to load initial data:", error);
            }
        };
        loadInitialData();
    }, []);

    const handleAIGenerate = async (topic: string) => {
        setAiGenerating(true);
        try {
            const result = await amebogistAPI.articles.generateAI({
                topic,
                model: 'gemini',
                language: 'pidgin',
                style: 'amebo'
            });

            if (result.data) {
                setFormData({
                    ...formData,
                    title: result.data.title || formData.title,
                    contentPidgin: result.data.content || formData.contentPidgin,
                    tags: result.data.tags?.join(", ") || formData.tags,
                });
            }
        } catch (error) {
            console.error("AI Generation failed:", error);
            alert("AI generation failed. Please try again or use manual creation.");
        } finally {
            setAiGenerating(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const tagsArray = formData.tags.split(",").map(t => t.trim()).filter(t => t !== "");

            const payload = {
                title: formData.title,
                category: formData.category,
                content: {
                    english: formData.contentEnglish,
                    pidgin: formData.contentPidgin,
                    igbo: formData.contentIgbo,
                    hausa: formData.contentHausa
                },
                tags: tagsArray,
                imageUrl: formData.featuredImage,
                status: "published"
            };

            const result = await amebogistAPI.articles.create(payload);

            if (formData.autoVideo) {
                try {
                    await amebogistAPI.articles.triggerVideoFactory(result.data._id);
                } catch (vError) {
                    console.warn("Auto-video trigger failed, but article was published.");
                }
            }

            router.push(`/posts/${result.data.slug}`);
        } catch (error) {
            console.error("Failed to create article:", error);
            alert("Error creating article. Please check your permissions.");
        } finally {
            setLoading(false);
        }
    };

    // Navigation configuration
    const navLinks = [
        { href: "/", label: "Home" },
        ...categories.map((cat) => ({
            href: `/?category=${cat.slug}`,
            label: cat.name,
        })),
    ];

    const ecosystemProducts = [
        { name: "BoldMind Hub", url: "https://boldmind.ng" },
        { name: "EduCenter", url: "https://educenter.com.ng" },
        { name: "Naija FitHer", url: "https://fit.boldmind.ng" },
        { name: "PlanAI Suite", url: "https://planai.boldmind.ng" },
    ];

    const footerSections = [
        {
            title: "Navigation",
            links: [
                { href: "/", label: "Home" },
                ...categories.map((cat) => ({
                    href: `/?category=${cat.slug}`,
                    label: cat.name,
                })),
            ],
        },
        {
            title: "BoldMind Ecosystem",
            links: ecosystemProducts.map((p) => ({
                href: p.url,
                label: p.name,
                isExternal: true,
            })),
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <SuperNavbar
                links={navLinks}
                cta={{
                    href: "https://boldmind.ng",
                    label: "Explore Ecosystem",
                    variant: "secondary",
                }}
                logoSrc="/logo.png"
                sticky={true}
                animated={true}
                showThemeControls={true}
            />

            <div className="container mx-auto px-4 py-12 pt-24">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-green-100 rounded-xl">
                            <Sparkles className="h-8 w-8 text-green-600" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold font-serif">Create New Amebo</h1>
                            <p className="text-muted-foreground">Share the freshest gist with the world</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Main Editor */}
                            <div className="lg:col-span-2 space-y-6">
                                <Card>
                                    <CardContent className="pt-6 space-y-4">
                                        <div>
                                            <label className="flex items-center justify-between text-sm font-semibold mb-2">
                                                Article Title
                                                {formData.title && (
                                                    <button
                                                        type="button"
                                                        onClick={() => handleAIGenerate(formData.title)}
                                                        disabled={aiGenerating}
                                                        className="flex items-center gap-1 text-[10px] bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 transition-colors disabled:opacity-50"
                                                    >
                                                        {aiGenerating ? "Generating..." : <><Sparkles className="h-3 w-3" /> Enhance with AI</>}
                                                    </button>
                                                )}
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Enter a catchy headline or topic..."
                                                className="w-full p-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none font-serif text-lg"
                                                value={formData.title}
                                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                            <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                                                <label className="flex items-center gap-2 text-sm font-bold text-orange-800 mb-2">
                                                    <Languages className="h-4 w-4" /> Content (Pidgin)
                                                </label>
                                                <textarea
                                                    required
                                                    rows={12}
                                                    placeholder="Immerse your readers in the gist... (Pidgin version)"
                                                    className="w-full p-3 rounded-lg border border-orange-200 bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none font-serif text-sm leading-relaxed"
                                                    value={formData.contentPidgin}
                                                    onChange={(e) => setFormData({ ...formData, contentPidgin: e.target.value })}
                                                ></textarea>
                                                <p className="text-[10px] text-orange-600 mt-2 italic">AmeboGist thrives on authentic Pidgin storytelling!</p>
                                            </div>

                                            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                                                <label className="flex items-center gap-2 text-sm font-bold text-blue-800 mb-2">
                                                    <Globe className="h-4 w-4" /> Content (English)
                                                </label>
                                                <textarea
                                                    required
                                                    rows={12}
                                                    placeholder="The standard English version for global reach..."
                                                    className="w-full p-3 rounded-lg border border-blue-200 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none font-serif text-sm leading-relaxed"
                                                    value={formData.contentEnglish}
                                                    onChange={(e) => setFormData({ ...formData, contentEnglish: e.target.value })}
                                                ></textarea>
                                            </div>

                                            <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                                                <label className="flex items-center gap-2 text-sm font-bold text-purple-800 mb-2">
                                                    <Languages className="h-4 w-4" /> Content (Igbo)
                                                </label>
                                                <textarea
                                                    rows={12}
                                                    placeholder="The Igbo version..."
                                                    className="w-full p-3 rounded-lg border border-purple-200 bg-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none font-serif text-sm leading-relaxed"
                                                    value={formData.contentIgbo}
                                                    onChange={(e) => setFormData({ ...formData, contentIgbo: e.target.value })}
                                                ></textarea>
                                            </div>

                                            <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                                                <label className="flex items-center gap-2 text-sm font-bold text-red-800 mb-2">
                                                    <Languages className="h-4 w-4" /> Content (Hausa)
                                                </label>
                                                <textarea
                                                    rows={12}
                                                    placeholder="The Hausa version..."
                                                    className="w-full p-3 rounded-lg border border-red-200 bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none font-serif text-sm leading-relaxed"
                                                    value={formData.contentHausa}
                                                    onChange={(e) => setFormData({ ...formData, contentHausa: e.target.value })}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Tags and AI Assistance */}
                                <Card className="bg-gradient-to-br from-green-600 to-green-800 text-white">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Brain className="h-5 w-5" /> AI Content Assistant
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-green-50 text-sm mb-4">
                                            Writing a long piece? Use our BoldMind AI to optimize your tags and headlines.
                                        </p>
                                        <Button type="button" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-none">
                                            Generate AI Tags
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Sidebar Settings */}
                            <div className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Publishing Info</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div>
                                            <label className="block text-xs font-semibold uppercase text-muted-foreground mb-2">Category</label>
                                            <select
                                                required
                                                className="w-full p-2 rounded-md border border-gray-200 outline-none focus:border-green-500"
                                                value={formData.category}
                                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                            >
                                                <option value="">Select Category</option>
                                                {categories.map(cat => (
                                                    <option key={cat._id} value={cat.slug}>{cat.name}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold uppercase text-muted-foreground mb-2">Featured Image URL</label>
                                            <div className="relative">
                                                <input
                                                    type="url"
                                                    placeholder="https://example.com/image.jpg"
                                                    className="w-full p-2 pl-8 rounded-md border border-gray-200 outline-none focus:border-green-500 text-xs"
                                                    value={formData.featuredImage}
                                                    onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
                                                />
                                                <ImageIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold uppercase text-muted-foreground mb-2">Tags (Comma separated)</label>
                                            <input
                                                type="text"
                                                placeholder="politics, gist, naija"
                                                className="w-full p-2 rounded-md border border-gray-200 outline-none focus:border-green-500 text-xs"
                                                value={formData.tags}
                                                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-green-200 bg-green-50/30">
                                    <CardHeader>
                                        <CardTitle className="text-sm flex items-center gap-2">
                                            <Send className="h-4 w-4 text-green-600" /> Distribution
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 rounded text-green-600 focus:ring-green-500"
                                                checked={formData.autoVideo}
                                                onChange={(e) => setFormData({ ...formData, autoVideo: e.target.checked })}
                                            />
                                            <div className="flex flex-col">
                                                <span className="text-xs font-bold group-hover:text-green-700 transition-colors">Convert to Video</span>
                                                <span className="text-[10px] text-muted-foreground">Auto-send to Social Factory for video reels.</span>
                                            </div>
                                        </label>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-sm flex items-center gap-2">
                                            <Sparkles className="h-4 w-4 text-orange-500" /> Trending Now
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        {trends.length === 0 ? (
                                            <p className="text-[10px] text-muted-foreground italic">Fetching latest tech trends...</p>
                                        ) : trends.map((trend, idx) => (
                                            <button
                                                key={idx}
                                                type="button"
                                                onClick={() => handleAIGenerate(trend.title)}
                                                className="w-full text-left p-2 rounded-lg hover:bg-orange-50 transition-colors border border-transparent hover:border-orange-100 group"
                                            >
                                                <p className="text-[10px] font-bold group-hover:text-orange-700 leading-tight mb-1">{trend.title}</p>
                                                <div className="flex items-center justify-between">
                                                    <Badge variant="outline" className="text-[8px] py-0 px-1">{trend.platform}</Badge>
                                                    <span className="text-[8px] text-green-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">Draft with AI →</span>
                                                </div>
                                            </button>
                                        ))}
                                    </CardContent>
                                </Card>

                                <div className="p-1 rounded-xl bg-gradient-to-r from-green-500 via-orange-500 to-green-500 animate-pulse">
                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-white hover:bg-gray-50 text-gray-900 font-bold h-14 rounded-lg"
                                    >
                                        {loading ? "Publishing..." : (
                                            <span className="flex items-center gap-2">
                                                <Send className="h-5 w-5" /> Publish Story
                                            </span>
                                        )}
                                    </Button>
                                </div>

                                <Card className="border-dashed border-2">
                                    <CardContent className="pt-6 text-center">
                                        <p className="text-xs text-muted-foreground mb-2">Preview how it looks</p>
                                        <Badge variant="outline">Draft Preview</Badge>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </form>
                </div>
            </div >

            <SuperFooter
                logoSrc="/logo.png"
                sections={footerSections}
                contactInfo={{
                    email: 'hello@boldmind.ng',
                    phone: '+2349138349271',
                    whatsapp: '+2349138349271',
                    address: 'No 5 Olusoji imole str ikosi ketu Lagos Nigeria',
                }}
                copyright={`© ${new Date().getFullYear()} BoldMind Technology Solution Enterprise. All rights reserved.`}
            />
        </div >
    );
}
