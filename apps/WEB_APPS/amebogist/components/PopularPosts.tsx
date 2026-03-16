"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Eye, TrendingUp } from 'lucide-react';

export default function PopularPosts() {
  // Mock popular posts for initial UI
  const popularPosts = [
    {
      _id: '1',
      title: 'Top 10 AI Tools Every Nigerian Entrepreneur Needs in 2026',
      slug: 'top-10-ai-tools-nigerian-entrepreneur-2026',
      views: 12500,
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=300&h=200',
    },
    {
      _id: '2',
      title: 'New Policy: How the Central Bank Migration Impacts Your Fintech Startups',
      slug: 'cbn-policy-impact-fintech-startups',
      views: 9800,
      imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=300&h=200',
    },
    {
      _id: '3',
      title: 'Why Afrobeats is the Next Big Tech Investment Frontier',
      slug: 'afrobeats-tech-investment-frontier',
      views: 8200,
      imageUrl: 'https://images.unsplash.com/photo-1514525253344-f81ade0ac19e?auto=format&fit=crop&q=80&w=300&h=200',
    },
  ];

  return (
    <div className="space-y-4">
      {popularPosts.map((post, index) => (
        <Link 
          key={post._id} 
          href={`/posts/${post.slug}`}
          className="flex gap-4 group hover:bg-white/50 p-2 rounded-lg transition-all"
        >
          <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold font-serif line-clamp-2 group-hover:text-green-600 transition-colors leading-tight mb-1">
              {post.title}
            </h4>
            <div className="flex items-center gap-3 text-[10px] text-gray-500 uppercase tracking-wider font-bold">
              <span className="flex items-center gap-1">
                <Eye className="h-3 w-3" /> {post.views.toLocaleString()}
              </span>
              <span className="flex items-center gap-1 text-green-600">
                <TrendingUp className="h-3 w-3" /> Trending
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
