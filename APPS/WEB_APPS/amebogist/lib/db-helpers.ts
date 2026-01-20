// lib/db-helpers.ts
import { db } from "./db";
import mongoose from "mongoose";
import { cache } from "react";

export interface Category {
  _id: string;
  name: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Get all categories with caching
 */
export const getAllCategories = cache(async (): Promise<Category[]> => {
  try {
    await db.connect();
    const categories = await db.category.find().lean<Category[]>();
    return categories.map((category) => ({
      _id: category._id.toString(),
      name: category.name,
      slug: category.slug,
      description: category.description,
      metaTitle: category.metaTitle,
      metaDescription: category.metaDescription,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    }));
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
});
/**
 * Get trending posts
 */
export async function getTrendingPosts(limit = 8) {
  try {
    await db.connect();

    // Last 7 days
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    const trendingPosts = await db.post
      .find({
        status: 'published',
        createdAt: { $gte: oneWeekAgo }
      })
      .populate('category', 'name slug')
      .populate('authorId', 'name avatar')
      .sort({ views: -1, createdAt: -1 })
      .limit(limit)
      .lean();

    return trendingPosts.map(post => {
      const content = post.content || '';
      const wordCount = content.split(/\s+/).length;
      const readTime = Math.ceil(wordCount / 200);

      return {
        _id: post._id,
        title: post.title,
        excerpt: post.excerpt || content.substring(0, 160) + '...',
        category: post.category ? {
          _id: post.category._id.toString(),
          name: post.category.name || 'Uncategorized',
          slug: post.category.slug || 'uncategorized'
        } : { _id: '', name: 'Uncategorized', slug: 'uncategorized' },
        author: post.authorId ? {
          name: post.authorId.name || 'AmeboGist Team',
          avatar: post.authorId.avatar
        } : { name: 'AmeboGist Team' },
        imageUrl: post.imageUrl || '/placeholder.svg',
        slug: post.slug,
        views: post.views || 0,
        createdAt: post.createdAt,
        isSponsored: post.isSponsored || false,
        readTime: readTime > 0 ? readTime : 1
      };
    });
  } catch (error) {
    console.error('Error fetching trending posts:', error);
    return [];
  }
}

// ... rest of your db-helpers functions