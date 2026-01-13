import { APIClient } from '../client';

export class EducenterEndpoints {
  constructor(private client: APIClient) {}

  // Progress
  async saveProgress(data: {
    uid: string;
    subject: string;
    year: string;
    questionId: string;
    answer: string;
    isCorrect: boolean;
    timeSpent: number;
  }) {
    return this.client.post('/educenter/progress', data);
  }

  async getProgress(uid: string) {
    return this.client.get(`/educenter/progress/${uid}`);
  }

  async getSubjectProgress(uid: string, subject: string) {
    return this.client.get(`/educenter/progress/${uid}/subject/${subject}`);
  }

  async getLeaderboard() {
    return this.client.get('/educenter/progress/leaderboard');
  }
}