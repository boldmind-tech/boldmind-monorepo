// APPS/boldmind-educenter/src/lib/api.ts

import { createCurrentProductAPI, EducenterEndpoints } from '@boldmind/api-client';

const api = createCurrentProductAPI();
const educenterEndpoints = new EducenterEndpoints(api.gateway);

class EducenterAPI {
  // ==================== Users ====================

  async getUser(uid: string) {
    const response = await api.gateway.get(`/users/${uid}`);
    return response;
  }

  async updateUser(uid: string, data: any) {
    const response = await api.gateway.put(`/users/${uid}`, data);
    return response;
  }

  async createUser(data: any) {
    const response = await api.gateway.post('/users', data);
    return response;
  }

  // ==================== Questions ====================

  async getQuestions(data: {
    subject: string;
    examType: string;
    year?: string;
    limit?: number;
  }) {
    return educenterEndpoints.getQuestions(data);
  }

  async getSubjects(examType: string) {
    return educenterEndpoints.getSubjects(examType);
  }

  async getYears(examType: string) {
    return educenterEndpoints.getYears(examType);
  }

  async getSubjectsForYear(year: string) {
    return educenterEndpoints.getSubjectsForYear(year);
  }

  async getYearsForSubject(subject: string) {
    return educenterEndpoints.getYearsForSubject(subject);
  }

  async getComprehensionYears(subject: string) {
    return educenterEndpoints.getComprehensionYears(subject);
  }

  async getTopQuestions(limit?: number) {
    return educenterEndpoints.getTopQuestions(limit);
  }

  async getQuestionDetail(id: string, subject: string) {
    return educenterEndpoints.getQuestionDetail(id, subject);
  }

  async getComprehensionQuestions(params: {
    subject: string;
    year?: string;
    limit?: number;
    random?: boolean;
  }) {
    return educenterEndpoints.getComprehensionQuestions(params);
  }

  async getMultiSubjectQuestions(params: {
    subjects: string[];
    questionsPerSubject?: number;
  }) {
    return educenterEndpoints.getMultiSubjectQuestions(params);
  }

  // ==================== Quizzes ====================

  async startQuiz(data: {
    examType: string;
    subject: string;
    numberOfQuestions?: number;
  }) {
    return educenterEndpoints.startQuiz(data);
  }

  async submitQuiz(quizId: string, answers: Record<string, string>) {
    return educenterEndpoints.submitQuiz(quizId, { answers });
  }

  async getQuiz(quizId: string) {
    return educenterEndpoints.getQuiz(quizId);
  }

  async getMyQuizzes() {
    return educenterEndpoints.getMyQuizzes();
  }

  // ==================== Progress & Leaderboard ====================

  async getProgress() {
    return educenterEndpoints.getMyProgress();
  }

  async getLeaderboard(filters?: {
    examType?: string;
    subject?: string;
  }) {
    return educenterEndpoints.getGlobalLeaderboard(filters);
  }

  async getMyRank(filters?: {
    examType?: string;
    subject?: string;
  }) {
    return educenterEndpoints.getMyRank(filters);
  }

  // ==================== Courses ====================

  async getCourses(filters?: {
    category?: string;
    level?: string;
    isPublished?: boolean;
  }) {
    const params: {
      category?: string;
      level?: string;
      isPublished?: boolean;
    } = {};

    if (filters?.category) {
      params.category = filters.category;
    }
    if (filters?.level) {
      params.level = filters.level;
    }
    // Default to published courses only if not specified
    if (filters?.isPublished !== undefined) {
      params.isPublished = filters.isPublished;
    } else {
      params.isPublished = true;
    }

    return educenterEndpoints.getCourses(params);
  }

  async getCourse(id: string) {
    return educenterEndpoints.getCourse(id);
  }

  async createCourse(data: any) {
    return educenterEndpoints.createCourse(data);
  }

  async updateCourse(id: string, data: any) {
    return educenterEndpoints.updateCourse(id, data);
  }

  async enrollCourse(courseId: string) {
    return educenterEndpoints.enrollInCourse(courseId);
  }

  async getMyEnrollments() {
    return educenterEndpoints.getMyEnrollments();
  }

  async updateEnrollmentProgress(enrollmentId: string, data: {
    progressPercentage?: number;
    completedAt?: string;
  }) {
    return educenterEndpoints.updateEnrollmentProgress(enrollmentId, data);
  }

  // ==================== Notes ====================

  async getNotes(examType: string, subject: string) {
    return educenterEndpoints.getNotes(examType, subject);
  }

  async downloadNote(noteId: string) {
    return educenterEndpoints.downloadNote(noteId);
  }

  // ==================== Study Materials ====================

  async getStudyMaterials(filters?: {
    subject?: string;
    type?: string;
  }) {
    return educenterEndpoints.getStudyMaterials(filters);
  }

  // ==================== Subscriptions ====================

  async subscribe(plan: string) {
    return educenterEndpoints.updateSubscription(plan);
  }

  async getMySubscription() {
    return educenterEndpoints.getMySubscription();
  }

  async intializePayment(data: any) {
    return api.gateway.post('/payments/initialize', data);
  }

  async verifyPayment(reference: string) {
    return api.gateway.get(`/payments/verify/${reference}`);
  }
}

// Export instance
export const educenterAPI = new EducenterAPI();