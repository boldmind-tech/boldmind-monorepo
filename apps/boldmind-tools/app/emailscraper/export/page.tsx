"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Download,
    FileSpreadsheet,
    FileJson,
    FileText,
    ArrowLeft,
    Cloud,
    CheckCircle2,
    Clock,
    ExternalLink,
    Mail,
    Webhook,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Separator } from "@/app/components/ui/separator";

const EXPORT_FORMATS = [
    {
        id: "csv",
        name: "CSV",
        description: "Comma-separated file compatible with Excel, Google Sheets, and most CRMs.",
        icon: FileSpreadsheet,
        color: "text-emerald-600 bg-emerald-50",
        popular: true,
    },
    {
        id: "json",
        name: "JSON",
        description: "Structured JSON format for developers and API integrations.",
        icon: FileJson,
        color: "text-blue-600 bg-blue-50",
        popular: false,
    },
    {
        id: "xlsx",
        name: "Excel (XLSX)",
        description: "Native Excel workbook with formatted columns and data validation.",
        icon: FileText,
        color: "text-orange-600 bg-orange-50",
        popular: false,
    },
];

const CRM_INTEGRATIONS = [
    {
        id: "hubspot",
        name: "HubSpot",
        description: "Push contacts directly to HubSpot CRM with field mapping.",
        connected: true,
        lastSync: "2 hours ago",
    },
    {
        id: "salesforce",
        name: "Salesforce",
        description: "Sync leads to Salesforce with automatic deduplication.",
        connected: false,
        lastSync: null,
    },
    {
        id: "webhook",
        name: "Custom Webhook",
        description: "Send data to any endpoint via POST request.",
        connected: true,
        lastSync: "1 day ago",
    },
];

const EXPORT_HISTORY = [
    { id: 1, format: "CSV", records: 847, date: "Mar 1, 2026 · 2:30 PM", status: "completed", size: "124 KB" },
    { id: 2, format: "JSON", records: 412, date: "Feb 28, 2026 · 11:15 AM", status: "completed", size: "89 KB" },
    { id: 3, format: "HubSpot", records: 634, date: "Feb 27, 2026 · 4:00 PM", status: "completed", size: "—" },
    { id: 4, format: "CSV", records: 298, date: "Feb 26, 2026 · 9:45 AM", status: "completed", size: "52 KB" },
    { id: 5, format: "Excel", records: 1203, date: "Feb 24, 2026 · 3:20 PM", status: "completed", size: "215 KB" },
];

export default function EmailScraperExportPage() {
    const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
    const [isExporting, setIsExporting] = useState(false);

    const handleExport = () => {
        if (!selectedFormat) return;
        setIsExporting(true);
        setTimeout(() => {
            setIsExporting(false);
            setSelectedFormat(null);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b bg-card px-6 py-3">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/emailscraper/results">
                            <Button variant="ghost" size="sm" className="gap-1.5 text-xs">
                                <ArrowLeft className="h-3.5 w-3.5" /> Results
                            </Button>
                        </Link>
                        <div className="h-px w-4 bg-border rotate-90" />
                        <div className="flex items-center gap-2">
                            <Download className="h-4 w-4 text-primary" />
                            <h1 className="font-semibold text-sm">Export Data</h1>
                        </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">2,847 emails available</Badge>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
                {/* Format Selection */}
                <div>
                    <h2 className="text-lg font-semibold mb-1">Export Format</h2>
                    <p className="text-sm text-muted-foreground mb-4">Choose a format then click export to download your data.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {EXPORT_FORMATS.map((format) => (
                            <Card
                                key={format.id}
                                className={`border cursor-pointer transition-all hover:shadow-md ${selectedFormat === format.id
                                        ? "ring-2 ring-primary border-primary"
                                        : ""
                                    }`}
                                onClick={() => setSelectedFormat(format.id)}
                            >
                                <CardContent className="p-5">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className={`h-10 w-10 rounded-lg ${format.color} flex items-center justify-center`}>
                                            <format.icon className="h-5 w-5" />
                                        </div>
                                        {format.popular && (
                                            <Badge variant="secondary" className="text-xs">Popular</Badge>
                                        )}
                                    </div>
                                    <h3 className="font-semibold text-sm mb-1">{format.name}</h3>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{format.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    {selectedFormat && (
                        <div className="mt-4 flex items-center gap-3">
                            <Button
                                onClick={handleExport}
                                disabled={isExporting}
                                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                            >
                                <Download className="h-4 w-4 mr-2" />
                                {isExporting ? "Exporting..." : `Export as ${EXPORT_FORMATS.find((f) => f.id === selectedFormat)?.name}`}
                            </Button>
                            <span className="text-xs text-muted-foreground">2,847 records will be exported</span>
                        </div>
                    )}
                </div>

                <Separator />

                {/* CRM Integrations */}
                <div>
                    <h2 className="text-lg font-semibold mb-1 flex items-center gap-2">
                        <Cloud className="h-5 w-5 text-primary" />
                        CRM Integrations
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">Push your scraped contacts directly to your CRM or custom endpoint.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {CRM_INTEGRATIONS.map((crm) => (
                            <Card key={crm.id} className="border">
                                <CardContent className="p-5">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                                            {crm.id === "webhook" ? (
                                                <Webhook className="h-5 w-5 text-muted-foreground" />
                                            ) : (
                                                <Cloud className="h-5 w-5 text-muted-foreground" />
                                            )}
                                        </div>
                                        {crm.connected ? (
                                            <Badge variant="default" className="text-xs bg-emerald-600">
                                                <CheckCircle2 className="h-3 w-3 mr-1" /> Connected
                                            </Badge>
                                        ) : (
                                            <Badge variant="outline" className="text-xs">Not connected</Badge>
                                        )}
                                    </div>
                                    <h3 className="font-semibold text-sm mb-1">{crm.name}</h3>
                                    <p className="text-xs text-muted-foreground mb-3">{crm.description}</p>
                                    {crm.connected ? (
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                <Clock className="h-3 w-3" /> Last sync: {crm.lastSync}
                                            </span>
                                            <Button variant="outline" size="sm" className="h-7 text-xs">
                                                Sync Now
                                            </Button>
                                        </div>
                                    ) : (
                                        <Button variant="outline" size="sm" className="h-7 text-xs w-full">
                                            <ExternalLink className="h-3 w-3 mr-1.5" /> Connect
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <Separator />

                {/* Export History */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        Export History
                    </h2>
                    <Card className="border">
                        <CardContent className="p-0">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-surface border-b">
                                        <th className="px-4 py-2.5 text-left font-medium text-xs text-muted-foreground uppercase tracking-wider">Format</th>
                                        <th className="px-4 py-2.5 text-left font-medium text-xs text-muted-foreground uppercase tracking-wider">Records</th>
                                        <th className="px-4 py-2.5 text-left font-medium text-xs text-muted-foreground uppercase tracking-wider">Date</th>
                                        <th className="px-4 py-2.5 text-left font-medium text-xs text-muted-foreground uppercase tracking-wider">Size</th>
                                        <th className="px-4 py-2.5 text-center font-medium text-xs text-muted-foreground uppercase tracking-wider">Status</th>
                                        <th className="px-4 py-2.5 text-right font-medium text-xs text-muted-foreground uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {EXPORT_HISTORY.map((item) => (
                                        <tr key={item.id} className="border-b last:border-0 hover:bg-surface/60 transition-colors">
                                            <td className="px-4 py-3">
                                                <Badge variant="secondary" className="text-xs font-normal">{item.format}</Badge>
                                            </td>
                                            <td className="px-4 py-3 text-muted-foreground">{item.records.toLocaleString()}</td>
                                            <td className="px-4 py-3 text-muted-foreground text-xs">{item.date}</td>
                                            <td className="px-4 py-3 text-muted-foreground text-xs">{item.size}</td>
                                            <td className="px-4 py-3 text-center">
                                                <Badge variant="default" className="text-xs bg-emerald-600">
                                                    <CheckCircle2 className="h-3 w-3 mr-1" /> {item.status}
                                                </Badge>
                                            </td>
                                            <td className="px-4 py-3 text-right">
                                                <Button variant="ghost" size="sm" className="h-7 text-xs gap-1">
                                                    <Download className="h-3 w-3" /> Re-download
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
