"use client";

import Link from 'next/link';
import { Card, CardContent } from '@boldmind/ui';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function TrendingCarousel({ topics, posts }: { topics: any[], posts: any[] }) {
  // Use provided posts or mock if empty
  const displayPosts = posts?.length > 0 ? posts.slice(0, 5) : [
    { _id: 't1', title: 'AI Regulation in Nigeria', slug: 'ai-regulation-nigeria', views: 5400 },
    { _id: 't2', title: 'Fuel Prices Today', slug: 'fuel-prices-lagos-abuja', views: 12000 },
    { _id: 't3', title: 'Davido vs Wizkid: The Tech Angle', slug: 'davido-wizkid-tech-angle', views: 8900 },
  ];

  return (
    <div className="space-y-3">
      {displayPosts.map((post, index) => (
        <Link key={post._id} href={`/posts/${post.slug}`}>
          <div className="flex items-center justify-between group p-3 rounded-lg border border-transparent hover:border-green-100 hover:bg-green-50 transition-all">
            <div className="flex items-center gap-3 min-w-0">
              <span className="flex-shrink-0 text-xl font-black text-green-200 group-hover:text-green-400 transition-colors italic">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0">
                <h4 className="text-sm font-bold font-serif truncate group-hover:text-green-700 transition-colors">
                  {post.title}
                </h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  {post.views.toLocaleString()} READS
                </p>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-green-500 transform group-hover:translate-x-1 transition-all" />
          </div>
        </Link>
      ))}
      <div className="pt-2 border-t border-gray-100 mt-4">
        <Link href="/trending" className="text-xs font-bold text-green-600 hover:text-green-700 flex items-center justify-center gap-1 uppercase tracking-wider">
          <Sparkles className="h-3 w-3" /> View All Trending <ChevronRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
