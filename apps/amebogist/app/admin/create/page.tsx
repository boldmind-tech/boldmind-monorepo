"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, Send, Image as ImageIcon, Globe, Languages, ArrowLeft } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { SuperNavbar, SuperFooter } from "@boldmind/ui";
import { amebogistAPI } from "../../../lib/api";
import { AmebogistCategory } from "@boldmind/api-client";
import Link from "next/link";

export default function CreateArticlePage() {
    const router = useRouter();
    const [categories, setCategories] = useState<AmebogistCategory[]>([]);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        contentEnglish: "",
        contentPidgin: "",
        tags: "",
        featuredImage: "",
        excerpt: "",
    });

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const cats = await amebogistAPI.getCategories();
                setCategories(cats.data);
            } catch (error) {
                console.error("Failed to load categories:", error);
            }
        };
        loadCategories();
    }, []);

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
                    pidgin: formData.contentPidgin
                },
                excerpt: formData.excerpt,
                tags: tagsArray,
                imageUrl: formData.featuredImage,
                status: "published"
            };

            const result = await amebogistAPI.articles.create(payload);
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
        { href: "/admin", label: "Dashboard" }
    ];

    const footerSections = [
        {
            title: "Admin Tools",
            links: [
                { href: "/admin", label: "Dashboard" },
                { href: "/admin/create", label: "New Post" },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50/30">
            <SuperNavbar
                links={navLinks}
                cta={{
                    href: "/admin",
                    label: "Dashboard",
                    variant: "secondary",
                }}
                logoSrc="/logo.png"
                sticky={true}
                animated={true}
                showThemeControls={true}
            />

            <div className="container mx-auto px-4 py-12 pt-24">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <Link href="/admin" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <ArrowLeft className="h-6 w-6 text-gray-600" />
                            </Link>
                            <div>
                                <h1 className="text-3xl font-bold font-serif">Create New Amebo</h1>
                                <p className="text-muted-foreground">Share the freshest gist with the world</p>
                            </div>
                        </div>
                        <Badge variant="outline" className="bg-white px-4 py-1">New Draft</Badge>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Main Editor */}
                            <div className="lg:col-span-2 space-y-6">
                                <Card className="border-none shadow-sm">
                                    <CardContent className="pt-6 space-y-6">
                                        <div>
                                            <label className="block text-sm font-bold mb-2 uppercase tracking-tight text-gray-700">Article Title</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Enter a catchy headline..."
                                                className="w-full p-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none font-serif text-xl"
                                                value={formData.title}
                                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold mb-2 uppercase tracking-tight text-gray-700">Excerpt / Meta Description</label>
                                            <textarea
                                                rows={3}
                                                placeholder="A brief summary for SEO and social sharing..."
                                                className="w-full p-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none text-sm leading-relaxed"
                                                value={formData.excerpt}
                                                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                            ></textarea>
                                        </div>

                                        <div className="grid grid-cols-1 gap-6 pt-4">
                                            <div className="p-6 bg-orange-50/50 rounded-2xl border border-orange-100">
                                                <label className="flex items-center gap-2 text-sm font-black text-orange-800 mb-3 uppercase tracking-widest">
                                                    <Languages className="h-4 w-4" /> Content (Pidgin)
                                                </label>
                                                <textarea
                                                    required
                                                    rows={10}
                                                    placeholder="Immerse your readers in the gist... (Pidgin version)"
                                                    className="w-full p-4 rounded-xl border border-orange-200 bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none font-serif text-md leading-relaxed"
                                                    value={formData.contentPidgin}
                                                    onChange={(e) => setFormData({ ...formData, contentPidgin: e.target.value })}
                                                ></textarea>
                                                <p className="text-[10px] text-orange-600 mt-3 font-bold uppercase tracking-tighter">AmeboGist thrives on authentic Pidgin storytelling!</p>
                                            </div>

                                            <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                                                <label className="flex items-center gap-2 text-sm font-black text-blue-800 mb-3 uppercase tracking-widest">
                                                    <Globe className="h-4 w-4" /> Content (English)
                                                </label>
                                                <textarea
                                                    required
                                                    rows={10}
                                                    placeholder="The standard English version for global reach..."
                                                    className="w-full p-4 rounded-xl border border-blue-200 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none font-serif text-md leading-relaxed"
                                                    value={formData.contentEnglish}
                                                    onChange={(e) => setFormData({ ...formData, contentEnglish: e.target.value })}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Sidebar Settings */}
                            <div className="space-y-6">
                                <Card className="border-none shadow-sm">
                                    <CardHeader>
                                        <CardTitle className="text-lg">Publishing Settings</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div>
                                            <label className="block text-xs font-black uppercase text-muted-foreground mb-2 tracking-widest">Category</label>
                                            <select
                                                required
                                                className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:border-green-500 bg-white"
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
                                            <label className="block text-xs font-black uppercase text-muted-foreground mb-2 tracking-widest">Featured Image URL</label>
                                            <div className="relative">
                                                <input
                                                    type="url"
                                                    placeholder="https://example.com/image.jpg"
                                                    className="w-full p-3 pl-10 rounded-lg border border-gray-200 outline-none focus:border-green-500 text-sm"
                                                    value={formData.featuredImage}
                                                    onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
                                                />
                                                <ImageIcon className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-black uppercase text-muted-foreground mb-2 tracking-widest">Tags (Comma separated)</label>
                                            <input
                                                type="text"
                                                placeholder="politics, gist, naija"
                                                className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:border-green-500 text-sm"
                                                value={formData.tags}
                                                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="space-y-3">
                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-green-600 hover:bg-green-700 text-white font-black h-14 rounded-xl shadow-lg shadow-green-900/10"
                                    >
                                        {loading ? "Publishing..." : (
                                            <span className="flex items-center gap-2">
                                                <Send className="h-5 w-5" /> Live Publish
                                            </span>
                                        )}
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="w-full h-12 rounded-xl border-gray-200 font-bold"
                                        onClick={() => router.push("/admin")}
                                    >
                                        Cancel & Exit
                                    </Button>
                                </div>

                                <Card className="border-dashed border-2 bg-gray-50/50">
                                    <CardContent className="pt-6 text-center">
                                        <Sparkles className="h-8 w-8 text-green-600 mx-auto mb-3" />
                                        <p className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-widest">AI Content Score</p>
                                        <div className="text-2xl font-black text-green-700 mb-1">Pending</div>
                                        <p className="text-[10px] text-muted-foreground">Analyzer will score your content after publishing</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

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
        </div>
    );
}
