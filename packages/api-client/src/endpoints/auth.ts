import { APIClient } from '../client';

export class AuthEndpoints {
  constructor(private client: APIClient) {}

  async verifyToken(token: string) {
    return this.client.post('/auth/verify', { token });
  }

  async getSession() {
    return this.client.get('/auth/session');
  }
}