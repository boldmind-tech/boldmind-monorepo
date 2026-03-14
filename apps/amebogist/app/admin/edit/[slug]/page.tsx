"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, Send, Globe, Languages, ArrowLeft } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { SuperNavbar, SuperFooter } from "@boldmind/ui";
import { amebogistAPI } from "../../../../lib/api";
import { AmebogistCategory } from "@boldmind/api-client";
import { analyzeSEO } from "../../../../lib/seo-analyzer";
import Link from "next/link";

interface EditPageProps {
    params: { slug: string };
}

export default function EditArticlePage({ params }: EditPageProps) {
    const router = useRouter();
    const { slug } = params;
    const [categories, setCategories] = useState<AmebogistCategory[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [articleId, setArticleId] = useState("");
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
        const loadInitialData = async () => {
            try {
                const [catsRes, articleRes] = await Promise.all([
                    amebogistAPI.getCategories(),
                    amebogistAPI.articles.get(slug)
                ]);

                const article = articleRes.data;
                setCategories(catsRes.data);
                setArticleId(article._id);

                setFormData({
                    title: article.title,
                    category: typeof article.category === 'string' ? article.category : article.category.slug,
                    contentEnglish: typeof article.content === 'string' ? "" : article.content.english || "",
                    contentPidgin: typeof article.content === 'string' ? article.content : article.content.pidgin || "",
                    tags: article.tags?.join(", ") || "",
                    featuredImage: article.imageUrl || "",
                    excerpt: article.excerpt || "",
                });
            } catch (error) {
                console.error("Failed to load article:", error);
                alert("Could not find article.");
                router.push("/admin");
            } finally {
                setLoading(false);
            }
        };
        loadInitialData();
    }, [slug, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

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

            await amebogistAPI.articles.update(articleId, payload);
            alert("Article updated successfully!");
            router.push("/admin");
        } catch (error) {
            console.error("Failed to update article:", error);
            alert("Error updating article.");
        } finally {
            setSaving(false);
        }
    };

    const seoResult = analyzeSEO({
        title: formData.title,
        content: { english: formData.contentEnglish, pidgin: formData.contentPidgin },
        slug: slug,
        tags: formData.tags.split(","),
        imageUrl: formData.featuredImage,
        excerpt: formData.excerpt
    });

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading article...</div>;

    return (
        <div className="min-h-screen bg-gray-50/30">
            <SuperNavbar
                links={[{ href: "/", label: "Home" }, { href: "/admin", label: "Dashboard" }]}
                cta={{ href: "/admin", label: "Dashboard", variant: "secondary" }}
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
                                <h1 className="text-3xl font-bold font-serif">Edit "{formData.title}"</h1>
                                <p className="text-muted-foreground">Refine your story for better reach</p>
                            </div>
                        </div>
                        <Badge variant="outline" className="bg-white px-4 py-1 font-bold text-green-700 border-green-200">Live Post</Badge>
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
                                                className="w-full p-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none font-serif text-xl"
                                                value={formData.title}
                                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold mb-2 uppercase tracking-tight text-gray-700">Excerpt / Meta Description</label>
                                            <textarea
                                                rows={3}
                                                className="w-full p-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none text-sm"
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
                                                    className="w-full p-4 rounded-xl border border-orange-200 bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none font-serif text-md leading-relaxed"
                                                    value={formData.contentPidgin}
                                                    onChange={(e) => setFormData({ ...formData, contentPidgin: e.target.value })}
                                                ></textarea>
                                            </div>

                                            <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                                                <label className="flex items-center gap-2 text-sm font-black text-blue-800 mb-3 uppercase tracking-widest">
                                                    <Globe className="h-4 w-4" /> Content (English)
                                                </label>
                                                <textarea
                                                    required
                                                    rows={10}
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
                                            <input
                                                type="url"
                                                className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:border-green-500 text-sm"
                                                value={formData.featuredImage}
                                                onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-black uppercase text-muted-foreground mb-2 tracking-widest">Tags</label>
                                            <input
                                                type="text"
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
                                        disabled={saving}
                                        className="w-full bg-green-600 hover:bg-green-700 text-white font-black h-14 rounded-xl shadow-lg"
                                    >
                                        {saving ? "Saving Changes..." : <span className="flex items-center gap-2"><Send className="h-5 w-5" /> Update Post</span>}
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="w-full h-12 rounded-xl"
                                        onClick={() => router.push("/admin")}
                                    >
                                        Discard Changes
                                    </Button>
                                </div>

                                <Card className={`border-none shadow-premium ${seoResult.score > 70 ? 'bg-green-50' : 'bg-red-50'}`}>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-sm font-black uppercase flex items-center gap-2">
                                            <Sparkles className="h-4 w-4" /> SEO Health: {seoResult.score}%
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        {seoResult.details.map((d, i) => (
                                            <div key={i} className="flex items-start gap-2 text-[10px] uppercase font-bold">
                                                {d.passed ? <Badge className="bg-green-500 p-1 rounded-full border-none h-2 w-2"></Badge> : <Badge className="bg-red-500 p-1 rounded-full border-none h-2 w-2"></Badge>}
                                                <span className={d.passed ? 'text-green-800' : 'text-red-800'}>{d.label}: {d.message}</span>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <SuperFooter
                logoSrc="/logo.png"
                sections={[{ title: "Admin", links: [{ href: "/admin", label: "Dashboard" }] }]}
                contactInfo={{ email: 'hello@boldmind.ng', phone: '+2349138349271', whatsapp: '+2349138349271', address: 'Lagos, Nigeria' }}
                copyright={`© ${new Date().getFullYear()} BoldMind Technology Solution Enterprise.`}
            />
        </div>
    );
}
