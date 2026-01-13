import axios, { AxiosInstance } from 'axios';
import { PAST_QUESTIONS_CONFIG, API_CONFIG } from './config';

// Past Questions API Client (External API)
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

// BoldMind API Client (Backend API)
class BoldMindAPI {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_CONFIG.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add auth token interceptor
    this.client.interceptors.request.use((config) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  // Users
  async getUser(uid: string) {
    const response = await this.client.get(API_CONFIG.endpoints.getUser.replace(':uid', uid));
    return response.data;
  }

  async updateUser(uid: string, data: any) {
    const response = await this.client.put(API_CONFIG.endpoints.updateUser.replace(':uid', uid), data);
    return response.data;
  }

  async createUser(data: any) {
    const response = await this.client.post('/users', data);
    return response.data;
  }

  // Study Hub
  async getProgress(uid: string) {
    const response = await this.client.get(API_CONFIG.endpoints.getProgress.replace(':uid', uid));
    return response.data;
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
    const response = await this.client.post(API_CONFIG.endpoints.saveProgress, data);
    return response.data;
  }

  async getLeaderboard() {
    const response = await this.client.get(API_CONFIG.endpoints.getLeaderboard);
    return response.data;
  }

  // Business School
  async getCourses(filters?: { category?: string; free?: boolean }) {
    const response = await this.client.get(API_CONFIG.endpoints.getCourses, { params: filters });
    return response.data;
  }

  async getCourse(id: string) {
    const response = await this.client.get(API_CONFIG.endpoints.getCourse.replace(':id', id));
    return response.data;
  }

  async enrollCourse(uid: string, courseId: string) {
    const response = await this.client.post(API_CONFIG.endpoints.enrollCourse, { uid, courseId });
    return response.data;
  }

  // AI Lab
  async getAITools() {
    const response = await this.client.get(API_CONFIG.endpoints.getTools);
    return response.data;
  }

  async generateVideo(data: {
    script: string;
    style: string;
    duration: number;
  }) {
    const response = await this.client.post(API_CONFIG.endpoints.generateVideo, data);
    return response.data;
  }

  async createWhatsAppAutomation(data: {
    name: string;
    trigger: string;
    response: string;
  }) {
    const response = await this.client.post(API_CONFIG.endpoints.automateWhatsApp, data);
    return response.data;
  }

  // Subscriptions
  async subscribe(data: {
    uid: string;
    plan: string;
    email: string;
    amount: number;
  }) {
    const response = await this.client.post(API_CONFIG.endpoints.subscribe, data);
    return response.data;
  }

  async verifyPayment(reference: string) {
    const response = await this.client.post(API_CONFIG.endpoints.verifyPayment, { reference });
    return response.data;
  }

  async getSubscriptions(uid: string) {
    const response = await this.client.get(API_CONFIG.endpoints.getSubscriptions.replace(':uid', uid));
    return response.data;
  }
}

// Export instances
export const pastQuestionsAPI = new PastQuestionsAPI();
export const boldMindAPI = new BoldMindAPI();