import { BoldMindAPI } from '@boldmind/api-client';

/**
 * Centralized API Hub for Skillgig
 * Provides access to Skill2cash, Payments, and Hub services
 */
export const boldMindAPI = new BoldMindAPI();

// For legacy code support or easy access
export const skillgigAPI = boldMindAPI;

export default boldMindAPI;
