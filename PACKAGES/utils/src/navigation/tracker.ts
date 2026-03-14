// PACKAGES/utils/src/navigation/tracker.ts

import type { InternalNavEvent, NavigationAnalytics } from './types';

export class NavigationTracker {
    private apiEndpoint: string;

    constructor(apiEndpoint?: string) {
        this.apiEndpoint = apiEndpoint || process.env['NEXT_PUBLIC_API_ENDPOINT'] || 'https://api.boldmind.ng';
    }

    /**
     * Track internal navigation event
     */
    async track(event: InternalNavEvent): Promise<void> {
        try {
            await fetch(`${this.apiEndpoint}/analytics/navigation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(event),
                // Don't wait for response
                keepalive: true,
            });
        } catch (error) {
            console.error('Failed to track navigation:', error);
            // Fail silently - don't disrupt user experience
        }
    }

    /**
     * Track conversion (e.g., user subscribed after navigating)
     */
    async trackConversion(
        eventId: string,
        conversionValue?: number,
        additionalData?: Record<string, any>
    ): Promise<void> {
        try {
            await fetch(`${this.apiEndpoint}/analytics/navigation/${eventId}/convert`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    converted: true,
                    conversion_value: conversionValue,
                    converted_at: new Date(),
                    ...additionalData,
                }),
            });
        } catch (error) {
            console.error('Failed to track conversion:', error);
        }
    }

    /**
     * Get navigation analytics for a product
     */
    async getAnalytics(
        productSlug: string,
        startDate?: Date,
        endDate?: Date
    ): Promise<NavigationAnalytics> {
        const params = new URLSearchParams({
            product: productSlug,
            ...(startDate && { start: startDate.toISOString() }),
            ...(endDate && { end: endDate.toISOString() }),
        });

        const response = await fetch(
            `${this.apiEndpoint}/analytics/navigation/stats?${params}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch navigation analytics');
        }

        return response.json();
    }

    /**
     * Get user's product journey
     */
    async getUserJourney(userId: string): Promise<InternalNavEvent[]> {
        const response = await fetch(
            `${this.apiEndpoint}/analytics/navigation/user/${userId}/journey`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch user journey');
        }

        return response.json();
    }
}