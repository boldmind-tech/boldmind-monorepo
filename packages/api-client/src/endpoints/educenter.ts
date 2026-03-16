// PACKAGES/api-client/src/endpoints/educenter.ts

import APIClient from '../client';

export interface StartQuizRequest {
  userId: string;
  examType: 'jamb' | 'waec' | 'neco';
  subject: string;
  numberOfQuestions?: number;
}

export interface SubmitQuizRequest {
  answers: Record<string, string>; // questionId: answer
}

export class EducenterEndpoints {
  constructor(private client: APIClient) { }

  // Questions
  async getQuestions(params: {
    subject: string;
    examType: 'jamb' | 'waec' | 'neco';
    year?: string;
    limit?: number;
  }) {
    return this.client.get('/questions', { params });
  }

  async getSubjects(examType: 'jamb' | 'waec' | 'neco') {
    return this.client.get('/questions/subjects', {
      params: { examType },
    });
  }

  async getYears(examType: 'jamb' | 'waec' | 'neco') {
    return this.client.get('/questions/years', {
      params: { examType },
    });
  }

  // Quizzes
  async startQuiz(data: StartQuizRequest) {
    return this.client.post('/quizzes/start', data);
  }

  async submitQuiz(quizId: string, data: SubmitQuizRequest) {
    return this.client.post(`/quizzes/${quizId}/submit`, data);
  }

  async getQuiz(quizId: string) {
    return this.client.get(`/quizzes/${quizId}`);
  }

  async getUserQuizzes(userId: string) {
    return this.client.get(`/quizzes/user/${userId}`);
  }

  // Progress
  async getUserProgress(userId: string) {
    return this.client.get(`/progress/user/${userId}`);
  }

  async getProgressBySubject(
    userId: string,
    examType: string,
    subject: string
  ) {
    return this.client.get(`/progress/user/${userId}/${examType}/${subject}`);
  }

  async updateStreak(userId: string, data: {
    examType: string;
    subject: string;
  }) {
    return this.client.post(`/progress/user/${userId}/streak`, data);
  }

  // Courses
  async getCourses(params?: {
    category?: string;
    level?: string;
    isPublished?: boolean;
  }) {
    return this.client.get('/courses', { params });
  }

  async getCourse(courseId: string) {
    return this.client.get(`/courses/${courseId}`);
  }

  async enrollCourse(userId: string, courseId: string) {
    return this.client.post('/enrollments', {
      userId,
      courseId,
    });
  }

  async getUserEnrollments(userId: string) {
    return this.client.get(`/enrollments/user/${userId}`);
  }
}
