import { BoldMindAPI } from '@boldmind/api-client';

/**
 * Centralized API Hub for Amebo Studio
 * Provides access to Amebogist management, Media services, and more
 */
export const boldMindAPI = new BoldMindAPI();

// For legacy code support or easy access
export const studioAPI = boldMindAPI;

export default boldMindAPI;
