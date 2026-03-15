import { boldMindAPI } from '@boldmind/api-client';
 
export const studioAPI = {
  /** GET /api/v1/amebogist/creator/stats */
  getCreatorStats: () => boldMindAPI.amebogist.getCreatorStats(),
 
  /** GET /api/v1/amebogist/creator/my-articles */
  getMyArticles: (params?: { limit?: number; page?: number }) =>
    boldMindAPI.amebogist.getCreatorArticles(params),
 
  /** GET /api/v1/amebogist/me/stats */
  getMyStats: () => boldMindAPI.amebogist.getCreatorStats(),
 
  articles: {
    /** GET /api/v1/amebogist/articles */
    list: (params?: any) => boldMindAPI.amebogist.getArticles(params),
 
    /** GET /api/v1/amebogist/articles/:slug */
    // getBySlug: (slug: string) => boldMindAPI.amebogist.getArticleBySlug(slug),
 
    /** POST /api/v1/amebogist/articles */
    create: (data: any) => boldMindAPI.amebogist.createArticle(data),
 
    /** PATCH /api/v1/amebogist/articles/:id */
    update: (id: string, data: any) => boldMindAPI.amebogist.updateArticle(id, data),
 
    /** PATCH /api/v1/amebogist/articles/:id/publish */
    publish: (id: string) => boldMindAPI.amebogist.createArticle(id),
 
    /** PATCH /api/v1/amebogist/articles/:id/archive */
    // archive: (id: string) => boldMindAPI.amebogist.archiveArticle(id),
 
    /** DELETE /api/v1/amebogist/articles/:id */
    delete: (id: string) => boldMindAPI.amebogist.deleteArticle(id),
 
    /** POST /api/v1/amebogist/articles/generate-ai */
    generateWithAI: (data: any) => boldMindAPI.amebogist.generateAIPost(data),
 
    /** POST /api/v1/amebogist/articles/:id/video-factory */
    // createVideo: (id: string) => boldMindAPI.amebogist.createVideo(id),
  },
};
 
export default studioAPI;
