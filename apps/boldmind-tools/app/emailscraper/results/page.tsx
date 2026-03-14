"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Search,
    Filter,
    Download,
    BadgeCheck,
    ChevronLeft,
    ChevronRight,
    Mail,
    Gauge,
    ArrowLeft,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Progress } from "@/app/components/ui/progress";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select";

const MOCK_RESULTS = [
    { id: 1, name: "Sarah Chen", company: "Stripe", title: "VP Engineering", email: "s.chen@stripe.com", verified: true, source: "LinkedIn", confidence: 98, date: "2026-03-01" },
    { id: 2, name: "Marcus Johnson", company: "Notion", title: "Head of Growth", email: "m.johnson@notion.so", verified: true, source: "Company Site", confidence: 95, date: "2026-03-01" },
    { id: 3, name: "Elena Rodriguez", company: "Figma", title: "Product Lead", email: "elena.r@figma.com", verified: false, source: "LinkedIn", confidence: 72, date: "2026-02-28" },
    { id: 4, name: "James Park", company: "Vercel", title: "CTO", email: "j.park@vercel.com", verified: true, source: "Hunter.io", confidence: 99, date: "2026-02-28" },
    { id: 5, name: "Aisha Patel", company: "Linear", title: "Design Director", email: "a.patel@linear.app", verified: true, source: "LinkedIn", confidence: 96, date: "2026-02-27" },
    { id: 6, name: "David Kim", company: "Loom", title: "Marketing Manager", email: "d.kim@loom.com", verified: false, source: "Apollo", confidence: 68, date: "2026-02-27" },
    { id: 7, name: "Rachel Foster", company: "Webflow", title: "Sales Director", email: "r.foster@webflow.com", verified: true, source: "Company Site", confidence: 94, date: "2026-02-26" },
    { id: 8, name: "Tom Nguyen", company: "Retool", title: "Engineering Manager", email: "t.nguyen@retool.com", verified: true, source: "LinkedIn", confidence: 97, date: "2026-02-26" },
    { id: 9, name: "Lisa Wang", company: "Airtable", title: "Product Manager", email: "l.wang@airtable.com", verified: true, source: "Hunter.io", confidence: 93, date: "2026-02-25" },
    { id: 10, name: "Chris Miller", company: "Miro", title: "Account Executive", email: "c.miller@miro.com", verified: false, source: "Apollo", confidence: 61, date: "2026-02-25" },
    { id: 11, name: "Fatima Al-Hassan", company: "Canva", title: "Head of Partnerships", email: "f.alhassan@canva.com", verified: true, source: "LinkedIn", confidence: 91, date: "2026-02-24" },
    { id: 12, name: "Brian O'Connor", company: "Slack", title: "Sr. Developer Advocate", email: "b.oconnor@slack.com", verified: true, source: "Company Site", confidence: 96, date: "2026-02-24" },
];

export default function EmailScraperResultsPage() {
    const [selected, setSelected] = useState<number[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sourceFilter, setSourceFilter] = useState("all");
    const [statusFilter, setStatusFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 10;

    const filteredResults = MOCK_RESULTS.filter((r) => {
        const matchesSearch =
            !searchQuery ||
            r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            r.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
            r.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSource = sourceFilter === "all" || r.source.toLowerCase().replace(/[.\s]/g, "") === sourceFilter;
        const matchesStatus =
            statusFilter === "all" ||
            (statusFilter === "verified" && r.verified) ||
            (statusFilter === "unverified" && !r.verified);
        return matchesSearch && matchesSource && matchesStatus;
    });

    const paginatedResults = filteredResults.slice(
        (currentPage - 1) * resultsPerPage,
        currentPage * resultsPerPage
    );
    const totalPages = Math.ceil(filteredResults.length / resultsPerPage);

    const toggleSelect = (id: number) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    const toggleAll = () => {
        if (selected.length === paginatedResults.length) {
            setSelected([]);
        } else {
            setSelected(paginatedResults.map((r) => r.id));
        }
    };

    const getConfidenceColor = (confidence: number) => {
        if (confidence >= 90) return "text-emerald-600";
        if (confidence >= 70) return "text-amber-600";
        return "text-red-500";
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b bg-card px-6 py-3">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/emailscraper">
                            <Button variant="ghost" size="sm" className="gap-1.5 text-xs">
                                <ArrowLeft className="h-3.5 w-3.5" /> Back
                            </Button>
                        </Link>
                        <div className="h-px w-4 bg-border rotate-90" />
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-primary" />
                            <h1 className="font-semibold text-sm">Scraper Results</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mr-4">
                            <Gauge className="h-3.5 w-3.5" />
                            <span>1,847 / 5,000 lookups</span>
                            <div className="w-20">
                                <Progress value={36.9} className="h-1.5" />
                            </div>
                        </div>
                        <Link href="/emailscraper/export">
                            <Button size="sm" className="h-8 text-xs gap-1.5 bg-gradient-to-r from-purple-600 to-indigo-600">
                                <Download className="h-3 w-3" /> Export
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-6">
                {/* Search + Filters */}
                <div className="flex flex-col sm:flex-row gap-2 mb-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search by name, company, or email..."
                            className="pl-8 h-9 text-sm"
                            value={searchQuery}
                            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                        />
                    </div>
                    <div className="flex gap-2">
                        <Select value={sourceFilter} onValueChange={(v) => { setSourceFilter(v); setCurrentPage(1); }}>
                            <SelectTrigger className="h-9 w-[130px] text-sm">
                                <Filter className="h-3.5 w-3.5 mr-1.5" />
                                <SelectValue placeholder="Source" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Sources</SelectItem>
                                <SelectItem value="linkedin">LinkedIn</SelectItem>
                                <SelectItem value="hunterio">Hunter.io</SelectItem>
                                <SelectItem value="companysite">Company Site</SelectItem>
                                <SelectItem value="apollo">Apollo</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); setCurrentPage(1); }}>
                            <SelectTrigger className="h-9 w-[130px] text-sm">
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Status</SelectItem>
                                <SelectItem value="verified">Verified</SelectItem>
                                <SelectItem value="unverified">Unverified</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Bulk actions */}
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-muted-foreground">
                        {selected.length > 0
                            ? `${selected.length} of ${filteredResults.length} selected`
                            : `${filteredResults.length} results`}
                    </span>
                    {selected.length > 0 && (
                        <div className="flex gap-2">
                            <Link href="/emailscraper/export">
                                <Button size="sm" variant="default" className="h-7 text-xs gap-1.5">
                                    <Download className="h-3 w-3" /> Export Selected
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>

                {/* Results Table */}
                <div className="border rounded-md overflow-hidden">
                    <div className="overflow-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-surface border-b">
                                    <th className="w-10 px-3 py-2.5 text-left">
                                        <Checkbox
                                            checked={paginatedResults.length > 0 && selected.length === paginatedResults.length}
                                            onCheckedChange={toggleAll}
                                        />
                                    </th>
                                    <th className="px-3 py-2.5 text-left font-medium text-xs text-muted-foreground uppercase tracking-wider">Name</th>
                                    <th className="px-3 py-2.5 text-left font-medium text-xs text-muted-foreground uppercase tracking-wider">Company</th>
                                    <th className="px-3 py-2.5 text-left font-medium text-xs text-muted-foreground uppercase tracking-wider">Title</th>
                                    <th className="px-3 py-2.5 text-left font-medium text-xs text-muted-foreground uppercase tracking-wider">Email</th>
                                    <th className="px-3 py-2.5 text-center font-medium text-xs text-muted-foreground uppercase tracking-wider">Verified</th>
                                    <th className="px-3 py-2.5 text-center font-medium text-xs text-muted-foreground uppercase tracking-wider">Confidence</th>
                                    <th className="px-3 py-2.5 text-left font-medium text-xs text-muted-foreground uppercase tracking-wider">Source</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedResults.map((row) => (
                                    <tr
                                        key={row.id}
                                        className={`border-b last:border-0 hover:bg-surface/60 transition-colors ${selected.includes(row.id) ? "bg-primary/5" : ""
                                            }`}
                                    >
                                        <td className="px-3 py-2.5">
                                            <Checkbox
                                                checked={selected.includes(row.id)}
                                                onCheckedChange={() => toggleSelect(row.id)}
                                            />
                                        </td>
                                        <td className="px-3 py-2.5 font-medium">{row.name}</td>
                                        <td className="px-3 py-2.5 text-muted-foreground">{row.company}</td>
                                        <td className="px-3 py-2.5 text-muted-foreground text-xs">{row.title}</td>
                                        <td className="px-3 py-2.5">
                                            <span className="text-primary font-mono text-xs">{row.email}</span>
                                        </td>
                                        <td className="px-3 py-2.5 text-center">
                                            {row.verified ? (
                                                <BadgeCheck className="h-4 w-4 text-emerald-500 inline-block" />
                                            ) : (
                                                <span className="text-xs text-muted-foreground">—</span>
                                            )}
                                        </td>
                                        <td className="px-3 py-2.5 text-center">
                                            <span className={`text-xs font-semibold ${getConfidenceColor(row.confidence)}`}>
                                                {row.confidence}%
                                            </span>
                                        </td>
                                        <td className="px-3 py-2.5">
                                            <Badge variant="secondary" className="text-xs font-normal">
                                                {row.source}
                                            </Badge>
                                        </td>
                                    </tr>
                                ))}
                                {paginatedResults.length === 0 && (
                                    <tr>
                                        <td colSpan={8} className="px-3 py-12 text-center text-sm text-muted-foreground">
                                            No results match your filters.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                    <span>
                        Showing {(currentPage - 1) * resultsPerPage + 1}-{Math.min(currentPage * resultsPerPage, filteredResults.length)} of {filteredResults.length} results
                    </span>
                    <div className="flex gap-1">
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-7 text-xs gap-1"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((p) => p - 1)}
                        >
                            <ChevronLeft className="h-3 w-3" /> Previous
                        </Button>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <Button
                                key={i + 1}
                                variant={currentPage === i + 1 ? "default" : "outline"}
                                size="sm"
                                className="h-7 w-7 text-xs p-0"
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </Button>
                        ))}
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-7 text-xs gap-1"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((p) => p + 1)}
                        >
                            Next <ChevronRight className="h-3 w-3" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
