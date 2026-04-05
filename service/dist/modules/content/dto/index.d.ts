export declare class CreatePostDto {
    title: string;
    authorName?: string;
    content: {
        pidgin: string;
        english?: string;
        yoruba?: string;
        igbo?: string;
        hausa?: string;
    };
    excerpt: string;
    category: string;
    subcategory?: string;
    tags?: string[];
    media?: {
        featuredImage?: string;
        gallery?: string[];
        videoUrl?: string;
    };
    seo?: {
        metaTitle?: string;
        metaDescription?: string;
        keywords?: string[];
    };
    scheduledFor?: Date;
    editorialNote?: string;
}
export declare class UpdatePostDto {
    title?: string;
    content?: {
        pidgin?: string;
        english?: string;
        yoruba?: string;
        igbo?: string;
        hausa?: string;
    };
    excerpt?: string;
    category?: string;
    tags?: string[];
    media?: {
        featuredImage?: string;
        gallery?: string[];
        videoUrl?: string;
    };
    seo?: {
        metaTitle?: string;
        metaDescription?: string;
        keywords?: string[];
    };
    editorialNote?: string;
}
export declare class ListPostsQueryDto {
    category?: string;
    tag?: string;
    search?: string;
    sort?: 'latest' | 'trending' | 'featured';
}
export declare class CreateCommentDto {
    content: string;
    parentId?: string;
    language?: 'pidgin' | 'english' | 'yoruba' | 'igbo' | 'hausa';
}
export declare class ReactToPostDto {
    type: 'like' | 'love' | 'laugh' | 'fire' | 'sad' | 'angry';
}
