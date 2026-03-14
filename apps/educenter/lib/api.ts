// APPS/boldmind-educenter/src/lib/api.ts

import { boldMindAPI } from '@boldmind/api-client';

class EducenterAPI {
  // ==================== Users ====================

  async getUser(uid: string) {
    return boldMindAPI.users.getUserById(uid);
  }

  async updateUser(uid: string, data: any) {
    return boldMindAPI.users.updateUser(uid, data);
  }

  async createUser(data: any) {
    return boldMindAPI.users.createUser(data);
  }

  // ==================== Questions ====================

  async getQuestions(data: {
    subject: string;
    examType: string;
    year?: string;
    limit?: number;
  }) {
    return boldMindAPI.educenter.getQuestions(data);
  }

  async getSubjects(examType: string) {
    return boldMindAPI.educenter.getSubjects(examType);
  }

  async getYears(examType: string) {
    return boldMindAPI.educenter.getYears(examType);
  }

  async getSubjectsForYear(year: string) {
    return boldMindAPI.educenter.getSubjectsForYear(year);
  }

  async getYearsForSubject(subject: string) {
    return boldMindAPI.educenter.getYearsForSubject(subject);
  }

  async getComprehensionYears(subject: string) {
    return boldMindAPI.educenter.getComprehensionYears(subject);
  }

  async getTopQuestions(limit?: number) {
    return boldMindAPI.educenter.getTopQuestions(limit);
  }

  async getQuestionDetail(id: string, subject: string) {
    return boldMindAPI.educenter.getQuestionDetail(id, subject);
  }

  async getComprehensionQuestions(params: {
    subject: string;
    year?: string;
    limit?: number;
    random?: boolean;
  }) {
    return boldMindAPI.educenter.getComprehensionQuestions(params);
  }

  async getMultiSubjectQuestions(params: {
    subjects: string[];
    questionsPerSubject?: number;
  }) {
    return boldMindAPI.educenter.getMultiSubjectQuestions(params);
  }

  // ==================== Quizzes ====================

  async startQuiz(data: {
    examType: string;
    subject: string;
    numberOfQuestions?: number;
  }) {
    return boldMindAPI.educenter.startQuiz(data);
  }

  async submitQuiz(quizId: string, answers: Record<string, string>) {
    return boldMindAPI.educenter.submitQuiz(quizId, { answers });
  }

  async getQuiz(quizId: string) {
    return boldMindAPI.educenter.getQuiz(quizId);
  }

  async getMyQuizzes() {
    return boldMindAPI.educenter.getMyQuizzes();
  }

  // ==================== Progress & Leaderboard ====================

  async getProgress() {
    return boldMindAPI.educenter.getMyProgress();
  }

  async getLeaderboard(filters?: {
    examType?: string;
    subject?: string;
  }) {
    return boldMindAPI.educenter.getGlobalLeaderboard(filters);
  }

  async getMyRank(filters?: {
    examType?: string;
    subject?: string;
  }) {
    return boldMindAPI.educenter.getMyRank(filters);
  }

  // ==================== Courses ====================

  async getCourses(filters?: {
    category?: string;
    level?: string;
    isPublished?: boolean;
  }) {
    return boldMindAPI.educenter.getCourses(filters);
  }

  async getCourse(id: string) {
    return boldMindAPI.educenter.getCourse(id);
  }

  async createCourse(data: any) {
    return boldMindAPI.educenter.createCourse(data);
  }

  async updateCourse(id: string, data: any) {
    return boldMindAPI.educenter.updateCourse(id, data);
  }

  async enrollCourse(courseId: string) {
    return boldMindAPI.educenter.enrollInCourse(courseId);
  }

  async getMyEnrollments() {
    return boldMindAPI.educenter.getMyEnrollments();
  }

  async updateEnrollmentProgress(enrollmentId: string, data: {
    progressPercentage?: number;
    completedAt?: string;
  }) {
    return boldMindAPI.educenter.updateEnrollmentProgress(enrollmentId, data);
  }

  // ==================== Notes ====================

  async getNotes(examType: string, subject: string) {
    return boldMindAPI.educenter.getNotes(examType, subject);
  }

  async downloadNote(noteId: string) {
    return boldMindAPI.educenter.downloadNote(noteId);
  }

  // ==================== Study Materials ====================

  async getStudyMaterials(filters?: {
    subject?: string;
    type?: string;
  }) {
    return boldMindAPI.educenter.getStudyMaterials(filters);
  }

  // ==================== Subscriptions ====================

  async subscribe(plan: string) {
    return boldMindAPI.educenter.updateSubscription(plan);
  }

  async getMySubscription() {
    return boldMindAPI.educenter.getMySubscription();
  }

  async intializePayment(data: any) {
    return boldMindAPI.payments.initializePayment(data);
  }

  async verifyPayment(reference: string) {
    return boldMindAPI.payments.verifyPayment(reference);
  }
}

// Export instance
export const educenterAPI = new EducenterAPI();