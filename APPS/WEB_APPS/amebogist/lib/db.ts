import { getProductDatabase } from '@boldmind/utils';
import { prisma, mongoClient, connectMongo, Post, Category } from '@boldmind/database';
import mongoose from 'mongoose';

/**
 * Get the appropriate database client for AmeboGist
 * Based on the launch architecture, AmeboGist uses MongoDB
 */
export async function getDb() {
  const dbType = getProductDatabase('amebogist');
  
  if (dbType === 'mongodb' || !dbType) {
    await connectMongo({
      uri: process.env.MONGODB_URI || '',
      dbName: 'amebogist'
    });
    return { type: 'mongodb', client: mongoClient.db('amebogist') };
  }
  
  return { type: 'postgres', client: prisma };
}

/**
 * Interface for populated post as expected by page.tsx
 */
export interface PopulatedPostLean {
  _id: mongoose.Types.ObjectId;
  title: string;
  excerpt?: string;
  content: string;
  category: {
    _id: mongoose.Types.ObjectId;
    name: string;
    slug: string;
    metaTitle: string;
    metaDescription: string;
  };
  authorId?: {
    name: string;
    avatar?: string;
  };
  imageUrl?: string;
  slug: string;
  views: number;
  createdAt: Date;
  updatedAt: Date;
  source: string;
  commentary?: string;
  isSponsored: boolean;
  boldmindProduct: string;
}

/**
 * Exported 'db' object to satisfy original AmeboGist logic in page.tsx
 */
export const db = {
  connect: async () => {
    await connectMongo({
      uri: process.env.MONGODB_URI || '',
      dbName: 'amebogist'
    });
  },
  post: Post,
  category: Category,
};
