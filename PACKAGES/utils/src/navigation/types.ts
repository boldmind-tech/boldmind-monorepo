// PACKAGES/utils/src/navigation/types.ts

export interface CrossDomainNavParams {
    // Authentication & Session
    auth_token?: string | undefined;
    session_id?: string | undefined;
    user_id?: string | undefined;

    // Internal Navigation Tracking
    from_product: string;
    from_page?: string | undefined;
    from_feature?: string | undefined;

    // User Intent & Context
    intent?: NavigationIntent | undefined;
    action?: string | undefined;

    // Tracking Metadata
    nav_timestamp?: number | undefined;
    referral_code?: string | undefined;
}

export type NavigationIntent =
    | 'upgrade'           // User wants to upgrade/subscribe
    | 'explore'           // Browsing other products
    | 'feature'           // Accessing specific feature
    | 'onboarding'        // Part of onboarding flow
    | 'cross_sell'        // Recommended product
    | 'support'           // Getting help
    | 'integration'       // Connecting products
    | 'redirect';         // Auto-redirect

export interface InternalNavEvent {
    event_id: string;
    timestamp: Date;

    // Product Journey
    from_product: string;
    to_product: string;
    from_page?: string | undefined;
    to_page?: string | undefined;

    // User Context
    user_id?: string | undefined;
    session_id: string;

    // Intent & Conversion
    intent?: NavigationIntent | undefined;
    converted?: boolean;
    conversion_value?: number;

    // Additional Context
    device_type?: 'web' | 'mobile' | undefined;
    referrer?: string | undefined;
}

export interface NavigationAnalytics {
    total_navigations: number;
    unique_users: number;
    top_paths: Array<{ from: string; to: string; count: number }>;
    conversion_rate: number;
    avg_time_to_convert: number;
}