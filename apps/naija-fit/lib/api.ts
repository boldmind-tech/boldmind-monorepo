import { BoldMindAPI } from '@boldmind/api-client';

/**
 * Centralized API Hub for Naija Fit
 * Provides access to NaijaFither, Payments, and common services
 */
export const boldMindAPI = new BoldMindAPI();

// For legacy code support or easy access
export const naijaFitAPI = boldMindAPI;

export default boldMindAPI;
