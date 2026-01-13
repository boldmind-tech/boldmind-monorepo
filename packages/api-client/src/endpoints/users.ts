import { APIClient } from '../client';

export class UsersEndpoints {
  constructor(private client: APIClient) {}

  async getUser(uid: string) {
    return this.client.get(`/users/${uid}`);
  }

  async updateUser(uid: string, data: any) {
    return this.client.put(`/users/${uid}`, data);
  }

  async createUser(data: any) {
    return this.client.post('/users', data);
  }

  async getLeaderboard() {
    return this.client.get('/users/leaderboards');
  }
}