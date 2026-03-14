import { BoldMindAPI } from '@boldmind/api-client';

/**
 * Centralized API Hub for BoldMind Tools
 * Provides access to Emailscraper, SocialFactory, and common services
 */
export const boldMindAPI = new BoldMindAPI();

// For legacy code support or easy access
export const toolsAPI = boldMindAPI;

export default boldMindAPI;
