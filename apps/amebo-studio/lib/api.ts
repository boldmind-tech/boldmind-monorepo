// APPS/WEB_APPS/amebo-studio/lib/api.ts
import { boldMindAPI, type ArticleListParams, type CreateArticlePayload } from '@boldmind/api-client';

export const studioAPI = {
    /** GET /amebogist/creator/stats */
    getCreatorStats: () => boldMindAPI.amebogist.creator.stats(),
    
    /** GET /amebogist/creator/my-articles */
    getMyArticles: (params?: ArticleListParams) => 
        boldMindAPI.amebogist.creator.myArticles(params),
    
    /** GET /amebogist/me/stats */
    getMyStats: () => boldMindAPI.amebogist.creator.meStats(),
    
    /**
     * Articles management
     */
    articles: {
        /** GET /amebogist/articles */
        list: (params?: ArticleListParams) => boldMindAPI.amebogist.list(params),
        
        /** GET /amebogist/articles/:slug */
        getBySlug: (slug: string) => boldMindAPI.amebogist.getBySlug(slug),
        
        /** POST /amebogist/articles */
        create: (data: CreateArticlePayload) => boldMindAPI.amebogist.create(data),
        
        /** PATCH /amebogist/articles/:id */
        update: (id: string, data: Partial<CreateArticlePayload>) => 
            boldMindAPI.amebogist.update(id, data),
        
        /** PATCH /amebogist/articles/:id/publish */
        publish: (id: string) => boldMindAPI.amebogist.publish(id),
        
        /** PATCH /amebogist/articles/:id/archive */
        archive: (id: string) => boldMindAPI.amebogist.archive(id),
        
        /** PATCH /amebogist/articles/:id/feature */
        feature: (id: string) => boldMindAPI.amebogist.feature(id),
        
        /** DELETE /amebogist/articles/:id */
        delete: (id: string) => boldMindAPI.amebogist.delete(id),
        
        /** POST /amebogist/articles/generate-ai */
        generateWithAI: (prompt: string) => boldMindAPI.amebogist.generateAI(prompt),
        
        /** POST /amebogist/articles/:id/video-factory */
        createVideo: (id: string) => boldMindAPI.amebogist.videoFactory(id),
        
        /** POST /amebogist/articles/:id/react */
        react: (id: string, reaction: string) => 
            boldMindAPI.amebogist.react(id, reaction),
        
        /** GET /amebogist/articles/:id/comments */
        getComments: (articleId: string, page?: number) => 
            boldMindAPI.amebogist.comments.list(articleId, page),
        
        /** POST /amebogist/articles/:id/comments */
        createComment: (articleId: string, content: string) => 
            boldMindAPI.amebogist.comments.create(articleId, content),
    },
    
    /**
     * Comments management
     */
    comments: {
        /** DELETE /amebogist/comments/:id */
        delete: (commentId: string) => boldMindAPI.amebogist.comments.delete(commentId),
        
        /** PATCH /amebogist/comments/:id/react */
        react: (commentId: string, reaction: string) => 
            boldMindAPI.amebogist.comments.react(commentId, reaction),
        
        /** PATCH /amebogist/comments/:id/flag */
        flag: (commentId: string) => boldMindAPI.amebogist.comments.flag(commentId),
    },
    
    /**
     * Categories
     */
    getCategories: () => boldMindAPI.amebogist.categories(),
    
    /**
     * RSS Feeds
     */
    rss: {
        feed: () => boldMindAPI.amebogist.rss.feed(),
        categoryFeed: (category: string) => boldMindAPI.amebogist.rss.categoryFeed(category),
    },
};

export default studioAPI;