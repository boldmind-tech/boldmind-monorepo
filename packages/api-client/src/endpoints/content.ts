// PACKAGES/api-client/src/endpoints/content.ts

import APIClient from '../client';

export class ContentEndpoints {
  constructor(private client: APIClient) { }

  // ARTICLES — Public
  async listArticles(params?: any) {
    return this.client.get('/content/articles', { params });
  }

  async getTrending(params?: any) {
    return this.client.get('/content/articles/trending', { params });
  }

  async getFeatured() {
    return this.client.get('/content/articles/featured');
  }

  async getCategories() {
    return this.client.get('/content/articles/categories');
  }

  async getArticle(slug: string) {
    return this.client.get(`/content/articles/${slug}`);
  }

  // ARTICLES — Authenticated
  async createArticle(data: any) {
    return this.client.post('/content/articles', data);
  }

  async updateArticle(id: string, data: any) {
    return this.client.patch(`/content/articles/${id}`, data);
  }

  async deleteArticle(id: string) {
    return this.client.delete(`/content/articles/${id}`);
  }

  async publishArticle(id: string) {
    return this.client.patch(`/content/articles/${id}/publish`);
  }

  async archiveArticle(id: string) {
    return this.client.patch(`/content/articles/${id}/archive`);
  }

  // REACTIONS
  async react(id: string, type: string) {
    return this.client.post(`/content/articles/${id}/react`, { type });
  }

  async trackView(slug: string) {
    return this.client.post(`/content/articles/${slug}/view`);
  }

  // COMMENTS
  async getComments(id: string, params?: any) {
    return this.client.get(`/content/articles/${id}/comments`, { params });
  }

  async addComment(id: string, data: any) {
    return this.client.post(`/content/articles/${id}/comments`, data);
  }

  async deleteComment(id: string) {
    return this.client.delete(`/content/comments/${id}`);
  }

  // CREATOR ROUTES
  async getMyArticles(params?: any) {
    return this.client.get('/content/creator/my-articles', { params });
  }

  async getMyStats() {
    return this.client.get('/content/creator/stats');
  }

  // ADMIN ROUTES
  async featureArticle(id: string) {
    return this.client.patch(`/content/articles/${id}/feature`);
  }

  async flagComment(id: string) {
    return this.client.patch(`/content/comments/${id}/flag`);
  }

  // RSS FEEDS
  async getRssFeed() {
    return this.client.get('/content/rss');
  }

  async getCategoryFeed(category: string) {
    return this.client.get(`/content/rss/${category}`);
  }
}
