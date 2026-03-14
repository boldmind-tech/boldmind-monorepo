import { useState } from "react";
import { Search, Filter, Download, CheckSquare, Square, BadgeCheck, ExternalLink, ChevronDown, Gauge } from "lucide-react";
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
    { id: 1, name: "Sarah Chen", company: "Stripe", email: "s.chen@stripe.com", verified: true, source: "LinkedIn" },
    { id: 2, name: "Marcus Johnson", company: "Notion", email: "m.johnson@notion.so", verified: true, source: "Company Site" },
    { id: 3, name: "Elena Rodriguez", company: "Figma", email: "elena.r@figma.com", verified: false, source: "LinkedIn" },
    { id: 4, name: "James Park", company: "Vercel", email: "j.park@vercel.com", verified: true, source: "Hunter.io" },
    { id: 5, name: "Aisha Patel", company: "Linear", email: "a.patel@linear.app", verified: true, source: "LinkedIn" },
    { id: 6, name: "David Kim", company: "Loom", email: "d.kim@loom.com", verified: false, source: "Apollo" },
    { id: 7, name: "Rachel Foster", company: "Webflow", email: "r.foster@webflow.com", verified: true, source: "Company Site" },
    { id: 8, name: "Tom Nguyen", company: "Retool", email: "t.nguyen@retool.com", verified: true, source: "LinkedIn" },
    { id: 9, name: "Lisa Wang", company: "Airtable", email: "l.wang@airtable.com", verified: true, source: "Hunter.io" },
    { id: 10, name: "Chris Miller", company: "Miro", email: "c.miller@miro.com", verified: false, source: "Apollo" },
];

const EmailScraperTab = () => {
    const [selected, setSelected] = useState<number[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleSelect = (id: number) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    const toggleAll = () => {
        if (selected.length === MOCK_RESULTS.length) {
            setSelected([]);
        } else {
            setSelected(MOCK_RESULTS.map((r) => r.id));
        }
    };

    const usedCredits = 1847;
    const totalCredits = 5000;
    const usagePercent = (usedCredits / totalCredits) * 100;

    return (
        <div className="flex flex-col gap-4 h-full">
            {/* Search + Filters */}
            <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search by name, company, or domain..."
                        className="pl-8 h-9 text-sm"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <Select defaultValue="all">
                        <SelectTrigger className="h-9 w-[130px] text-sm">
                            <Filter className="h-3.5 w-3.5 mr-1.5" />
                            <SelectValue placeholder="Source" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Sources</SelectItem>
                            <SelectItem value="linkedin">LinkedIn</SelectItem>
                            <SelectItem value="hunter">Hunter.io</SelectItem>
                            <SelectItem value="company">Company Site</SelectItem>
                            <SelectItem value="apollo">Apollo</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select defaultValue="all">
                        <SelectTrigger className="h-9 w-[130px] text-sm">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="verified">Verified</SelectItem>
                            <SelectItem value="unverified">Unverified</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select defaultValue="all">
                        <SelectTrigger className="h-9 w-[130px] text-sm">
                            <SelectValue placeholder="Industry" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Industries</SelectItem>
                            <SelectItem value="saas">SaaS</SelectItem>
                            <SelectItem value="fintech">Fintech</SelectItem>
                            <SelectItem value="design">Design</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Bulk actions bar */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground">
                        {selected.length > 0
                            ? `${selected.length} of ${MOCK_RESULTS.length} selected`
                            : `${MOCK_RESULTS.length} results`}
                    </span>
                    {selected.length > 0 && (
                        <Button size="sm" variant="default" className="h-7 text-xs gap-1.5">
                            <Download className="h-3 w-3" />
                            Export CSV
                        </Button>
                    )}
                </div>
                {/* Usage meter */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Gauge className="h-3.5 w-3.5" />
                        <span>{usedCredits.toLocaleString()} / {totalCredits.toLocaleString()} lookups</span>
                    </div>
                    <div className="w-32">
                        <Progress value={usagePercent} className="h-1.5" />
                    </div>
                </div>
            </div>

            {/* Results table */}
            <div className="border rounded-md overflow-hidden flex-1">
                <div className="overflow-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-surface border-b">
                                <th className="w-10 px-3 py-2 text-left">
                                    <Checkbox
                                        checked={selected.length === MOCK_RESULTS.length}
                                        onCheckedChange={toggleAll}
                                    />
                                </th>
                                <th className="px-3 py-2 text-left font-medium text-xs text-muted-foreground uppercase tracking-wider">Name</th>
                                <th className="px-3 py-2 text-left font-medium text-xs text-muted-foreground uppercase tracking-wider">Company</th>
                                <th className="px-3 py-2 text-left font-medium text-xs text-muted-foreground uppercase tracking-wider">Email</th>
                                <th className="px-3 py-2 text-center font-medium text-xs text-muted-foreground uppercase tracking-wider">Verified</th>
                                <th className="px-3 py-2 text-left font-medium text-xs text-muted-foreground uppercase tracking-wider">Source</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MOCK_RESULTS.map((row) => (
                                <tr
                                    key={row.id}
                                    className={`border-b last:border-0 hover:bg-surface/60 transition-colors ${selected.includes(row.id) ? "bg-primary/5" : ""
                                        }`}
                                >
                                    <td className="px-3 py-2">
                                        <Checkbox
                                            checked={selected.includes(row.id)}
                                            onCheckedChange={() => toggleSelect(row.id)}
                                        />
                                    </td>
                                    <td className="px-3 py-2 font-medium">{row.name}</td>
                                    <td className="px-3 py-2 text-muted-foreground">{row.company}</td>
                                    <td className="px-3 py-2">
                                        <span className="text-primary font-mono text-xs">{row.email}</span>
                                    </td>
                                    <td className="px-3 py-2 text-center">
                                        {row.verified ? (
                                            <BadgeCheck className="h-4 w-4 text-success inline-block" />
                                        ) : (
                                            <span className="text-xs text-muted-foreground">—</span>
                                        )}
                                    </td>
                                    <td className="px-3 py-2">
                                        <Badge variant="secondary" className="text-2xs font-normal">
                                            {row.source}
                                        </Badge>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination hint */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Showing 1-10 of 2,847 results</span>
                <div className="flex gap-1">
                    <Button variant="outline" size="sm" className="h-7 text-xs" disabled>Previous</Button>
                    <Button variant="outline" size="sm" className="h-7 text-xs">Next</Button>
                </div>
            </div>
        </div>
    );
};

export default EmailScraperTab;
