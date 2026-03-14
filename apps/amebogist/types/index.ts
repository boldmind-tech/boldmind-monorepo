export interface AmebogistCategory {
    _id: string;
    name: string;
    slug: string;
    metaTitle?: string;
    metaDescription?: string;
    description?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface AmebogistArticle {
    _id: string;
    title: string;
    content: string | { pidgin: string; english?: string; yoruba?: string, igbo?: string; hausa?: string };
    excerpt: string;
    slug: string;
    category: AmebogistCategory | string;
    author: {
        id: string;
        name: string;
        avatar?: string;
    };
    imageUrl?: string;
    tags?: string[];
    views: number;
    engagement?: {
        views: number;
        likes: number;
        shares: number;
        commentsCount: number;
    };
    createdAt: string;
    status: 'draft' | 'published';
}

// NEW: Add AmebogistComment interface
export interface AmebogistComment {
    _id: string;
    content: string;
    articleId: string;
    parentId?: string | null;
    user: {
        id: string;
        name: string;
        avatar?: string;
    };
    reactions?: {
        like?: number;
        love?: number;
        dislike?: number;
    };
    createdAt: string;
    updatedAt?: string;
}