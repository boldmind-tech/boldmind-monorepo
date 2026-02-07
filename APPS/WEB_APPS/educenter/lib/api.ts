import { createCurrentProductAPI, EducenterEndpoints } from '@boldmind/api-client';
import { PAST_QUESTIONS_CONFIG } from './config';
import axios, { AxiosInstance } from 'axios';

// Past Questions API Client (External API)
// We keep this as is because it's an external service not managed by our api-client
class PastQuestionsAPI {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: PAST_QUESTIONS_CONFIG.baseUrl,
      headers: {
        'AccessToken': PAST_QUESTIONS_CONFIG.accessToken,
        'Content-Type': 'application/json',
      },
    });
  }

  async getQuestions(subject: string, year: string, random: boolean = false) {
    try {
      const response = await this.client.get(PAST_QUESTIONS_CONFIG.endpoints.getQuestions, {
        params: {
          subject,
          year,
          random,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching questions:', error);
      throw error;
    }
  }

  async getRandomQuestion(subject: string, year: string) {
    return this.getQuestions(subject, year, true);
  }

  async getAllQuestions(subject: string, year: string) {
    return this.getQuestions(subject, year, false);
  }
}

/**
 * BoldMind API Client (Backend API)
 * Refactored to use the central @boldmind/api-client
 */
const api = createCurrentProductAPI();
const educenterEndpoints = new EducenterEndpoints(api.gateway);

class BoldMindAPI {
  // Users
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

  // Study Hub
  async getProgress(_uid: string) {
    return educenterEndpoints.getMyProgress();
  }

  async saveProgress(data: {
    uid: string;
    subject: string;
    year: string;
    questionId: string;
    answer: string;
    isCorrect: boolean;
    timeSpent: number;
  }) {
    return educenterEndpoints.submitAttempt(data);
  }

  async getLeaderboard() {
    return educenterEndpoints.getLeaderboard();
  }

  // Business School
  async getCourses(filters?: { category?: string; free?: boolean }) {
    const params: { category?: string; status: string } = {
      status: 'published'
    };
    if (filters?.category) {
      params.category = filters.category;
    }
    return educenterEndpoints.getCourses(params);
  }

  async getCourse(id: string) {
    return educenterEndpoints.getCourse(id);
  }

  async enrollCourse(_uid: string, courseId: string) {
    return educenterEndpoints.enrollCourse(_uid, courseId);
  }

  // Subscriptions
  async subscribe(data: {
    uid: string;
    plan: string;
    email: string;
    amount: number;
  }) {
    return educenterEndpoints.updateSubscription(data.plan);
  }

  async getSubscriptions(_uid: string) {
    return educenterEndpoints.getMySubscription();
  }
}

// Export instances
export const pastQuestionsAPI = new PastQuestionsAPI();
export const boldMindAPI = new BoldMindAPI();