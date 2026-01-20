export interface User {
    _id: string;
    name: string;
    email: string;
    avatar?: string;
    role?: string;
    bio?: string;
}

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

export interface Post {
    _id: string;
    title: string;
    content: string;
    excerpt?: string;
    slug: string;
    imageUrl?: string;
    videoUrl?: string;
    status: 'draft' | 'published';
    categoryId: string;
    authorId: string;
    views: number;
    tags: string[];
    createdAt: string;
    updatedAt: string;
    source?: 'manual' | 'newsdata';
    commentary?: string;
    author?: User;
    category?: Category;
}

export interface ClientRelatedPost {
    _id: string;
    title: string;
    slug: string;
    excerpt?: string;
    imageUrl?: string;
    createdAt: string;
    category?: Category;
    views: number;
    tags: string[];
}


// export interface TrendingPost {
//   _id: string
//   title: string
//   excerpt: string
//   imageUrl?: string
//   category: {
//     name: string
//     slug: string
//   }
//   views: number
//   createdAt: string
// }