"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SuperNavbar, Card, CardHeader, CardTitle, CardContent, Button } from '@boldmind/ui';
import { hubAPIAdapter } from '../../../lib/hub-api-adapter';
import { useAuth } from '@boldmind/auth';
import { useRouter } from 'next/navigation';
import { Sidebar } from '../Sidebar';
import { toast } from 'sonner';

export default function ProductsPage() {
    const { user, isLoading } = useAuth();
    const router = useRouter();
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState({ status: '', category: '' });

    useEffect(() => {
        if (!isLoading && !user) {
            router.push('/login?redirect=/dashboard/products');
            return;
        }

        if (user) {
            loadProducts();
        }
    }, [user, isLoading, router, filter]);

    const loadProducts = async () => {
        try {
            setLoading(true);
            const data = await hubAPIAdapter.getProducts(filter);
            setProducts(data);
        } catch (err: any) {
            toast.error(err.message || 'Failed to load products');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this product?')) return;

        try {
            await hubAPIAdapter.deleteProduct(id);
            toast.success('Product deleted successfully');
            loadProducts();
        } catch (err: any) {
            toast.error(err.message || 'Failed to delete product');
        }
    };

    if (isLoading || loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-[#FFC800] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-gray-600">Loading products...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-gray-50/40 dark:bg-gray-950">
            <Sidebar active="products" />

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
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h1 className="text-3xl font-bold tracking-tight">Products</h1>
                                <p className="text-muted-foreground mt-1">
                                    Manage your product listings
                                </p>
                            </div>
                            <Button onClick={() => router.push('/dashboard/products/new')}>
                                + Add Product
                            </Button>
                        </div>

                        {/* Filters */}
                        <div className="flex gap-4 mb-6">
                            <select
                                value={filter.status}
                                onChange={(e) => setFilter({ ...filter, status: e.target.value })}
                                className="px-4 py-2 border rounded-lg"
                            >
                                <option value="">All Statuses</option>
                                <option value="LIVE">Live</option>
                                <option value="BUILDING">Building</option>
                                <option value="PLANNED">Planned</option>
                                <option value="CONCEPT">Concept</option>
                            </select>

                            <select
                                value={filter.category}
                                onChange={(e) => setFilter({ ...filter, category: e.target.value })}
                                className="px-4 py-2 border rounded-lg"
                            >
                                <option value="">All Categories</option>
                                <option value="media">Media</option>
                                <option value="education">Education</option>
                                <option value="ai">AI</option>
                                <option value="productivity">Productivity</option>
                                <option value="fintech">Fintech</option>
                            </select>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Card className="h-full hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="text-3xl">{product.icon}</div>
                                                    <div>
                                                        <CardTitle className="text-lg">{product.name}</CardTitle>
                                                        <div className="flex gap-2 mt-1">
                                                            <span className={`text-xs px-2 py-0.5 rounded-full ${product.status === 'LIVE' ? 'bg-green-100 text-green-800' :
                                                                product.status === 'BUILDING' ? 'bg-yellow-100 text-yellow-800' :
                                                                    product.status === 'PLANNED' ? 'bg-blue-100 text-blue-800' :
                                                                        'bg-purple-100 text-purple-800'
                                                                }`}>
                                                                {product.status}
                                                            </span>
                                                            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-800">
                                                                {product.category}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                                                {product.description}
                                            </p>
                                            <div className="flex gap-2">
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() => router.push(`/dashboard/products/${product.id}`)}
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() => handleDelete(product.id)}
                                                    className="text-red-600 hover:text-red-700"
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {products.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-500">No products found</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}
