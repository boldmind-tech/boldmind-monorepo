import { db } from './db';
import { Category } from '@boldmind/database';

/**
 * Get all categories for navigation
 */
export async function getAllCategories() {
  await db.connect();
  return await db.category.find().sort({ order: 1, name: 1 }).lean();
}

/**
 * Get trending posts for the sidebar
 */
export async function getTrendingPosts(limit = 5) {
  await db.connect();
  return await db.post
    .find({ status: 'published' })
    .sort({ views: -1, createdAt: -1 })
    .limit(limit)
    .populate('category', 'name slug')
    .lean();
}
