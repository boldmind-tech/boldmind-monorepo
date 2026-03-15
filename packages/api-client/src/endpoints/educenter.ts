// PACKAGES/api-client/src/endpoints/educenter.ts

import APIClient from '../client';

export class EducenterEndpoints {
  constructor(private client: APIClient) { }

  // ==================== Courses ====================

  async getCourses(params?: { category?: string; level?: string; isPublished?: boolean }) {
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

  async enrollInCourse(courseId: string) {
    return this.client.post(`/educenter/courses/${courseId}/enroll`);
  }

  async updateEnrollmentProgress(enrollmentId: string, data: {
    progressPercentage?: number;
    completedAt?: string;
  }) {
    return this.client.patch(`/educenter/courses/enrollments/${enrollmentId}/progress`, data);
  }

  async getMyEnrollments() {
    return this.client.get('/educenter/me/enrollments');
  }

  // ==================== Questions ====================

  async getQuestions(params: {
    subject: string;
    examType: string;
    year?: string;
    limit?: number;
  }) {
    return this.client.get('/educenter/questions', { params });
  }

  async getSubjects(examType: string) {
    return this.client.get('/educenter/questions/subjects', {
      params: { examType }
    });
  }

  async getYears(examType: string) {
    return this.client.get('/educenter/questions/years', {
      params: { examType }
    });
  }

  async getSubjectsForYear(year: string) {
    return this.client.get(`/educenter/questions/subjects-for-year/${year}`);
  }

  async getYearsForSubject(subject: string) {
    return this.client.get(`/educenter/questions/years-for-subject/${subject}`);
  }

  async getComprehensionYears(subject: string) {
    return this.client.get(`/educenter/questions/comprehension-years/${subject}`);
  }

  async getTopQuestions(limit?: number) {
    return this.client.get('/educenter/questions/top', {
      params: { limit }
    });
  }

  async getQuestionDetail(id: string, subject: string) {
    return this.client.get(`/educenter/questions/detail/${id}`, {
      params: { subject }
    });
  }

  async getComprehensionQuestions(params: {
    subject: string;
    year?: string;
    limit?: number;
    random?: boolean;
  }) {
    return this.client.get('/educenter/questions/comprehension', { params });
  }

  async getMultiSubjectQuestions(params: {
    subjects: string[];
    questionsPerSubject?: number;
  }) {
    return this.client.get('/educenter/questions/multi-subject', { params });
  }

  // ==================== Quizzes ====================

  async startQuiz(data: {
    examType: string;
    subject: string;
    numberOfQuestions?: number;
  }) {
    return this.client.post('/educenter/quizzes/start', data);
  }

  async submitQuiz(quizId: string, data: {
    answers: Record<string, string>;
  }) {
    return this.client.post(`/educenter/quizzes/${quizId}/submit`, data);
  }

  async getQuiz(quizId: string) {
    return this.client.get(`/educenter/quizzes/${quizId}`);
  }

  async getMyQuizzes() {
    return this.client.get('/educenter/me/quizzes');
  }

  // ==================== Leaderboard ====================

  async getGlobalLeaderboard(params?: {
    examType?: string;
    subject?: string;
  }) {
    return this.client.get('/educenter/leaderboard/global', { params });
  }

  async getMyRank(params?: {
    examType?: string;
    subject?: string;
  }) {
    return this.client.get('/educenter/leaderboard/me/rank', { params });
  }

  // ==================== Notes ====================

  async getNotes(examType: string, subject: string) {
    return this.client.get(`/educenter/notes/${examType}/${subject}`);
  }

  async downloadNote(noteId: string) {
    return this.client.get(`/educenter/notes/download/${noteId}`);
  }

  // ==================== Study Materials ====================

  async getStudyMaterials(params?: {
    subject?: string;
    type?: string;
  }) {
    return this.client.get('/educenter/materials', { params });
  }

  // ==================== User Progress ====================

  async getMyProgress() {
    return this.client.get('/educenter/me/progress');
  }

  // ==================== Subscription ====================

  async getMySubscription() {
    return this.client.get('/educenter/me/subscription');
  }

  async updateSubscription(plan: string) {
    return this.client.patch('/educenter/me/subscription', { plan });
  }
}