"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, BarChart3, ListRestart, Newspaper, Users, Zap } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { SuperNavbar, SuperFooter } from "@boldmind/ui";
import { amebogistAPI } from "../../lib/api";
import AdminArticleTable from "../../components/AdminArticleTable";

export default function AdminDashboard() {
    const [articles, setArticles] = useState<any[]>([]);
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState<any[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setLoading(true);
        try {
            const [artRes, statsRes, catsRes] = await Promise.all([
                amebogistAPI.articles.list({ limit: 100 }), // Get recent articles
                amebogistAPI.getMyStats(),
                amebogistAPI.getCategories()
            ]);

            setArticles(artRes.data || []);
            setStats(statsRes); // This might need unwrapping based on API structure
            setCategories(catsRes.data || []);
        } catch (error) {
            console.error("Failed to load admin data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await amebogistAPI.articles.delete(id);
            setArticles(articles.filter(a => a._id !== id));
        } catch (error) {
            console.error("Delete failed:", error);
            alert("Failed to delete article.");
        }
    };

    // Navigation configuration
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/admin", label: "Dashboard" },
        ...categories.map((cat) => ({
            href: `/?category=${cat.slug}`,
            label: cat.name,
        })),
    ];

    const footerSections = [
        {
            title: "Admin Links",
            links: [
                { href: "/admin", label: "Dashboard" },
                { href: "/admin/create", label: "New Post" },
                { href: "/admin/categories", label: "Manage Categories" },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50/30">
            <SuperNavbar
                links={navLinks}
                cta={{
                    href: "/admin/create",
                    label: "Create Post",
                    variant: "primary",
                }}
                logoSrc="/logo.png"
                sticky={true}
                animated={true}
                showThemeControls={true}
            />

            <div className="container mx-auto px-4 py-12 pt-24 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                    <div>
                        <h1 className="text-4xl font-bold font-serif tracking-tight">Admin Dashboard</h1>
                        <p className="text-muted-foreground mt-1">Manage your stories, analyze SEO, and track growth.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" onClick={loadData} disabled={loading} className="gap-2">
                            <ListRestart className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} /> Refresh
                        </Button>
                        <Button asChild className="bg-green-600 hover:bg-green-700 gap-2">
                            <Link href="/admin/create">
                                <Plus className="h-5 w-5" /> New Story
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <Card className="border-none shadow-sm bg-white overflow-hidden group">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-xs font-black uppercase tracking-widest text-muted-foreground">Total Views</CardTitle>
                            <BarChart3 className="h-4 w-4 text-amebogreen-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{stats?.totalViews?.toLocaleString() || articles.reduce((acc, a) => acc + (a.views || 0), 0).toLocaleString()}</div>
                            <p className="text-[10px] text-green-600 font-bold uppercase mt-1">+12.5% from last month</p>
                        </CardContent>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amebogreen-500 to-transparent opacity-30"></div>
                    </Card>

                    <Card className="border-none shadow-sm bg-white overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-xs font-black uppercase tracking-widest text-muted-foreground">Total Posts</CardTitle>
                            <Newspaper className="h-4 w-4 text-orange-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{articles.length}</div>
                            <p className="text-[10px] text-muted-foreground font-bold uppercase mt-1">Active on AmeboGist</p>
                        </CardContent>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-transparent opacity-30"></div>
                    </Card>

                    <Card className="border-none shadow-sm bg-white overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-xs font-black uppercase tracking-widest text-muted-foreground">Content Health</CardTitle>
                            <Zap className="h-4 w-4 text-yellow-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">84%</div>
                            <p className="text-[10px] text-yellow-600 font-bold uppercase mt-1">Avg. SEO Score</p>
                        </CardContent>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-transparent opacity-30"></div>
                    </Card>

                    <Card className="border-none shadow-sm bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 text-white">
                            <CardTitle className="text-xs font-black uppercase tracking-widest text-white/60">Community</CardTitle>
                            <Users className="h-4 w-4 text-amebogreen-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">2.4k</div>
                            <p className="text-[10px] text-amebogreen-400 font-bold uppercase mt-1">Unique Visitors</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Article Management Table */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <Newspaper className="h-5 w-5 text-green-700" />
                        </div>
                        <h2 className="text-2xl font-bold font-serif">Story Management</h2>
                    </div>

                    <AdminArticleTable articles={articles} onDelete={handleDelete} />
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
