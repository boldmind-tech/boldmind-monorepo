"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SuperNavbar, Card, CardHeader, CardTitle, CardContent, Button, Input } from '@boldmind/ui';
import { hubAPIAdapter } from '../../../lib/hub-api-adapter';
import { useAuth } from '@boldmind/auth';
import { useRouter } from 'next/navigation';
import { Sidebar } from '../Sidebar';
import { toast } from 'sonner';

export default function AnnouncementsPage() {
    const { user, isLoading } = useAuth();
    const router = useRouter();
    const [announcements, setAnnouncements] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ title: '', content: '', priority: 'normal' });

    useEffect(() => {
        if (!isLoading && !user) {
            router.push('/login?redirect=/dashboard/announcements');
            return;
        }

        if (user) {
            loadAnnouncements();
        }
    }, [user, isLoading, router]);

    const loadAnnouncements = async () => {
        try {
            setLoading(true);
            const data = await hubAPIAdapter.getAnnouncements();
            setAnnouncements(data);
        } catch (err: any) {
            toast.error(err.message || 'Failed to load announcements');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await hubAPIAdapter.createAnnouncement(formData);
            toast.success('Announcement created successfully');
            setShowForm(false);
            setFormData({ title: '', content: '', priority: 'normal' });
            loadAnnouncements();
        } catch (err: any) {
            toast.error(err.message || 'Failed to create announcement');
        }
    };

    if (isLoading || loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-[#FFC800] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-gray-600">Loading announcements...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-gray-50/40 dark:bg-gray-950">
            <Sidebar active="announcements" />

            <div className="flex-1 flex flex-col">
                <SuperNavbar
                    logoSrc="/logo.png"
                    links={[
                        { href: '/dashboard', label: 'Dashboard' },
                        { href: '/dashboard/products', label: 'Products' },
                        { href: '/dashboard/team', label: 'Team' },
                        { href: '/dashboard/announcements', label: 'Announcements' },
                    ]}
                />

                <main className="flex-1 p-6 lg:p-10 overflow-auto">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h1 className="text-3xl font-bold tracking-tight">Announcements</h1>
                                <p className="text-muted-foreground mt-1">
                                    Create and manage announcements
                                </p>
                            </div>
                            <Button onClick={() => setShowForm(!showForm)}>
                                + New Announcement
                            </Button>
                        </div>

                        {/* Create Form */}
                        {showForm && (
                            <Card className="mb-6">
                                <CardHeader>
                                    <CardTitle>Create Announcement</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Title</label>
                                            <Input
                                                type="text"
                                                value={formData.title}
                                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                                placeholder="Announcement title"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Content</label>
                                            <textarea
                                                value={formData.content}
                                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                                placeholder="Announcement content"
                                                className="w-full px-4 py-2 border rounded-lg min-h-[120px]"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Priority</label>
                                            <select
                                                value={formData.priority}
                                                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                                                className="w-full px-4 py-2 border rounded-lg"
                                            >
                                                <option value="low">Low</option>
                                                <option value="normal">Normal</option>
                                                <option value="high">High</option>
                                                <option value="urgent">Urgent</option>
                                            </select>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button type="submit">Create Announcement</Button>
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={() => setShowForm(false)}
                                            >
                                                Cancel
                                            </Button>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        )}

                        {/* Announcements List */}
                        <div className="space-y-4">
                            {announcements.map((announcement, index) => (
                                <motion.div
                                    key={announcement.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Card className={`${announcement.priority === 'urgent' ? 'border-red-500 border-2' :
                                            announcement.priority === 'high' ? 'border-orange-500' :
                                                ''
                                        }`}>
                                        <CardHeader>
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <CardTitle className="flex items-center gap-2">
                                                        {announcement.title}
                                                        <span className={`text-xs px-2 py-0.5 rounded-full ${announcement.priority === 'urgent' ? 'bg-red-100 text-red-800' :
                                                                announcement.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                                                                    announcement.priority === 'low' ? 'bg-gray-100 text-gray-800' :
                                                                        'bg-blue-100 text-blue-800'
                                                            }`}>
                                                            {announcement.priority}
                                                        </span>
                                                    </CardTitle>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                                                {announcement.content}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-4">
                                                {new Date(announcement.createdAt).toLocaleDateString()}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {announcements.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-500">No announcements yet</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}
