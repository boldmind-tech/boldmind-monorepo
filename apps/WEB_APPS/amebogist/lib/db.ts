// lib/db.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Global mongoose cache for connection reuse
interface CachedConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: CachedConnection | undefined;
}

const cached: CachedConnection = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

/**
 * Connect to MongoDB with caching
 */
async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000, // 10 seconds
      socketTimeoutMS: 45000, // 45 seconds
      maxPoolSize: 10,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      console.log(`✅ MongoDB Connected: ${MONGODB_URI}`);
      return mongooseInstance;
    }).catch((error) => {
      console.error("❌ MongoDB connection error:", error);
      cached.promise = null;
      throw error;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }

  return cached.conn;
}

/**
 * Category Schema
 */
const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    metaTitle: { type: String },
    metaDescription: { type: String },
  },
  { timestamps: true },
);

/**
 * User Schema
 */
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: String,
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);

/**
 * Post Schema
 */
const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: String,
    content: String,
    imageUrl: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    views: { type: Number, default: 0 },
    status: {
      type: String,
      default: "published",
      enum: ["draft", "published", "archived"]
    },
    source: { type: String, default: "manual" },
    commentary: String,
    isSponsored: { type: Boolean, default: false },
    boldmindProduct: { type: String, default: "amebogist" },
    tags: [{ type: String }],
    readTime: { type: Number, default: 0 },
  },
  { timestamps: true }
);



// Create models with proper typing
const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);
const User = mongoose.models.User || mongoose.model("User", userSchema);
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

/**
 * Type for populated post as expected by page.tsx
 */
export type PopulatedPostLean = mongoose.Document & {
  _id: mongoose.Types.ObjectId;
  title: string;
  excerpt?: string;
  content: string;
  category?: {
    _id: mongoose.Types.ObjectId;
    name: string;
    slug: string;
    metaTitle: string;
    metaDescription: string;
  };
  authorId?: {
    _id: mongoose.Types.ObjectId;
    name: string;
    avatar?: string;
  };
  imageUrl?: string;
  slug: string;
  views: number;
  createdAt: Date;
  updatedAt: Date;
  status: string;
  source: string;
  commentary?: string;
  isSponsored: boolean;
  boldmindProduct: string;
  tags?: string[];
  readTime?: number;
};

/**
 * Export db object matching original AmeboGist structure
 */
export const db = {
  // Connection
  connect: dbConnect,
  mongoose,

  // Models - direct access
  Category,
  User,
  Post,

  // Aliases for original code compatibility
  category: Category,
  post: Post,
  user: User,

  // Raw MongoDB client (if needed)
  getClient: () => mongoose.connection.getClient(),

  // Helper methods
  isConnected: () => mongoose.connection.readyState === 1,
  disconnect: () => mongoose.disconnect(),
};

/**
 * Helper to ensure database is connected before operations
 */
export async function withConnection<T>(operation: () => Promise<T>): Promise<T> {
  await dbConnect();
  return operation();
}

export default db;