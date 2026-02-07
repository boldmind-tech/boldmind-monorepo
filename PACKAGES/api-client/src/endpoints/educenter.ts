// PACKAGES/api-client/src/endpoints/educenter.ts

import APIClient from '../client';


export class EducenterEndpoints {
  constructor(private client: APIClient) { }

  // Courses
  async getCourses(params?: { category?: string; status?: string }) {
    return this.client.get('/educenter/courses', { params });
  }

  async getCourse(id: string) {
    return this.client.get(`/educenter/courses/${id}`);
  }

  async createCourse(data: any) {
    return this.client.post('/educenter/courses', data);
  }

  async updateCourse(id: string, data: any) {
    return this.client.patch(`/educenter/courses/${id}`, data);
  }

  async deleteCourse(id: string) {
    return this.client.delete(`/educenter/courses/${id}`);
  }

  // Exam Prep
  async getQuestions(params: {
    examType: string;
    subject?: string;
    year?: number;
  }) {
    return this.client.get('/educenter/exams/questions', { params });
  }

  async submitAttempt(data: any) {
    return this.client.post('/educenter/exams/attempt', data);
  }

  async getMyProgress() {
    return this.client.get('/educenter/me/progress');
  }

  // Leaderboard
  async getLeaderboard(limit?: number) {
    return this.client.get('/educenter/leaderboard', { params: { limit } });
  }

  // Subscription
  async getMySubscription() {
    return this.client.get('/educenter/me/subscription');
  }

  async updateSubscription(plan: string) {
    return this.client.patch('/educenter/me/subscription', { plan });
  }

  // Legacy / To be migrated or verified
  async enrollCourse(userId: string, courseId: string) {
    return this.client.post('/educenter/enrollments', {
      userId,
      courseId,
    });
  }

  async getUserEnrollments(userId: string) {
    return this.client.get(`/educenter/enrollments/user/${userId}`);
  }
}
