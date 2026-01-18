// flywheel.ts
import { SocialIntegration, BOLDMIND_PRODUCTS } from '@boldmind/utils';

export interface CustomerJourney {
  userId: string;
  firstSeen: Date;
  lastActive: Date;
  products: string[];
  touchpoints: Array<{
    timestamp: Date;
    product: string;
    action: 'view' | 'signup' | 'purchase' | 'share' | 'referral';
    data?: any;
  }>;
  segment: 'awareness' | 'education' | 'enablement' | 'advocacy';
}

export interface FlywheelMetrics {
  awareness: number;
  education: number;
  enablement: number;
  advocacy: number;
  loopStrength: number;
  conversionRates: {
    awarenessToEducation: number;
    educationToEnablement: number;
    enablementToAdvocacy: number;
  };
  revenue: {
    total: number;
    byProduct: Record<string, number>;
    lifetimeValue: number;
  };
}

export class BoldMindFlywheel {
  private social: any;
  private customerJourney: Map<string, CustomerJourney> = new Map();
  private eventQueue: Array<() => Promise<void>> = [];
  private isProcessingQueue = false;
  
  constructor(socialConfig?: any) {
    this.social = new SocialIntegration(socialConfig);
    this.initializeFlywheel();
  }
  
  private async initializeFlywheel(): Promise<void> {
    // Auto-connect social accounts
    try {
      await this.social.connectAllAccounts();
      console.log('✅ Social accounts connected for flywheel');
    } catch (error) {
      console.error('Failed to connect social accounts:', error);
    }
  }
  
  // Enhanced customer journey tracking
  async trackCustomerJourney(userId: string, event: {
    product: string;
    action: 'view' | 'signup' | 'purchase' | 'share' | 'referral';
    data?: any;
  }): Promise<void> {
    // Add to processing queue for better performance
    this.queueEvent(async () => {
      await this.processJourneyEvent(userId, event);
    });
  }
  
  private async processJourneyEvent(
    userId: string, 
    event: {
      product: string;
      action: 'view' | 'signup' | 'purchase' | 'share' | 'referral';
      data?: any;
    }
  ): Promise<void> {
    let journey = this.customerJourney.get(userId);
    
    if (!journey) {
      journey = {
        userId,
        firstSeen: new Date(),
        lastActive: new Date(),
        products: [],
        touchpoints: [],
        segment: 'awareness'
      };
    }
    
    // Update journey
    journey.lastActive = new Date();
    journey.touchpoints.push({
      timestamp: new Date(),
      product: event.product,
      action: event.action,
      data: event.data
    });
    
    // Add to products if new
    if (!journey.products.includes(event.product)) {
      journey.products.push(event.product);
    }
    
    // Update customer segment based on actions
    journey.segment = this.determineCustomerSegment(journey);
    
    this.customerJourney.set(userId, journey);
    
    // Trigger appropriate flywheel actions
    await this.triggerFlywheelActions(userId, event.product, event.action);
    
    // Update analytics
    await this.updateFlywheelMetrics();
  }
  
  private determineCustomerSegment(journey: CustomerJourney): CustomerJourney['segment'] {
    const hasPurchase = journey.touchpoints.some(t => t.action === 'purchase');
    const hasShare = journey.touchpoints.some(t => t.action === 'share' || t.action === 'referral');
    const hasSignup = journey.touchpoints.some(t => t.action === 'signup');
    
    if (hasShare) return 'advocacy';
    if (hasPurchase) return 'enablement';
    if (hasSignup) return 'education';
    return 'awareness';
  }
  
  private async triggerFlywheelActions(
    userId: string, 
    currentProduct: string, 
    action: string
  ): Promise<void> {
    const journey = this.customerJourney.get(userId);
    if (!journey) return;
    
    const product = BOLDMIND_PRODUCTS.find(p => p.slug === currentProduct);
    if (!product) return;
    
    // Different triggers based on action
    switch (action) {
      case 'view':
        await this.handleViewAction(userId, product, journey);
        break;
      case 'signup':
        await this.handleSignupAction(userId, product, journey);
        break;
      case 'purchase':
        await this.handlePurchaseAction(userId, product, journey);
        break;
      case 'share':
      case 'referral':
        await this.handleAdvocacyAction(userId, product, journey);
        break;
    }
  }
  
  private async handleViewAction(
    userId: string, 
    product: any, 
    journey: CustomerJourney
  ): Promise<void> {
    // Awareness stage → Education
    if (journey.segment === 'awareness') {
      // If they viewed AmeboGist, recommend EduCenter
      if (product.category === 'media') {
        await this.sendPersonalizedContent(userId, 'educenter', {
          type: 'course_recommendation',
          message: `Liked our news? Check out our ${product.name} course!`
        });
      }
    }
  }
  
  private async handleSignupAction(
    userId: string, 
    product: any, 
    journey: CustomerJourney
  ): Promise<void> {
    // Education stage → Enablement
    if (product.category === 'education') {
      // EduCenter signup → Recommend AI tools
      await this.sendPersonalizedContent(userId, 'ai-receptionist', {
        type: 'upsell',
        message: 'Ready to automate your business? Try our AI Receptionist!',
        discount: '20%OFF'
      });
    }
  }
  
  private async handlePurchaseAction(
    userId: string, 
    product: any, 
    journey: CustomerJourney
  ): Promise<void> {
    // Enablement stage → Advocacy
    if (product.category === 'ai') {
      // AI tool purchase → Ask for referral
      await this.sendPersonalizedContent(userId, 'referral_program', {
        type: 'advocacy',
        message: 'Love our product? Share with friends and earn rewards!',
        reward: '$50 credit'
      });
      
      // Cross-sell complementary products
      const complementary = this.getComplementaryProducts(product.slug);
      for (const compProduct of complementary) {
        await this.sendPersonalizedContent(userId, compProduct, {
          type: 'cross_sell',
          message: `Enhance your setup with ${compProduct}!`,
          bundleDiscount: '15%'
        });
      }
    }
  }
  
  private async handleAdvocacyAction(
    userId: string, 
    product: any, 
    journey: CustomerJourney
  ): Promise<void> {
    // Advocacy stage → Reward and re-engage
    await this.sendPersonalizedContent(userId, 'reward', {
      type: 'thank_you',
      message: 'Thanks for sharing! Here\'s a reward for you.',
      reward: 'Premium feature unlocked'
    });
    
    // Re-engage with new content
    await this.social.crossPost({
      title: `${journey.userId} just shared ${product.name}!`,
      body: 'Join our growing community of advocates.',
      excerpt: 'Share and earn rewards',
      url: `https://boldmind.com/referral/${userId}`,
      product: 'boldmind'
    });
  }
  
  private getComplementaryProducts(currentProduct: string): string[] {
    const complementaryMap: Record<string, string[]> = {
      'ai-receptionist': ['business-planning', 'social-factory'],
      'business-planning': ['ai-receptionist', 'emailscraper-pro'],
      'social-factory': ['ai-receptionist', 'emailscraper-pro'],
      'emailscraper-pro': ['social-factory', 'business-planning']
    };
    
    return complementaryMap[currentProduct] || [];
  }
  
  private async sendPersonalizedContent(
    userId: string, 
    target: string, 
    content: any
  ): Promise<void> {
    // Implementation for sending personalized content
    // Could be email, in-app notification, social DM, etc.
    console.log(`Sending personalized content to ${userId}:`, content);
    
    // Example: Post to social for advocacy
    if (target === 'referral_program') {
      await this.social.crossPost({
        title: `${userId} is now part of our referral program!`,
        body: content.message,
        excerpt: 'Join our referral program and earn rewards',
        url: `https://boldmind.com/referral/${userId}`,
        product: 'boldmind'
      });
    }
  }
  
  // Queue system for handling high volumes
  private queueEvent(eventFn: () => Promise<void>): void {
    this.eventQueue.push(eventFn);
    
    if (!this.isProcessingQueue) {
      this.processEventQueue();
    }
  }
  
  private async processEventQueue(): Promise<void> {
    if (this.isProcessingQueue || this.eventQueue.length === 0) return;
    
    this.isProcessingQueue = true;
    
    while (this.eventQueue.length > 0) {
      const batch = this.eventQueue.splice(0, 10); // Process 10 at a time
      
      await Promise.allSettled(
        batch.map(async (eventFn) => {
          try {
            await eventFn();
          } catch (error) {
            console.error('Error processing flywheel event:', error);
          }
        })
      );
      
      // Small delay between batches
      if (this.eventQueue.length > 0) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    
    this.isProcessingQueue = false;
  }
  
  // Enhanced flywheel metrics
  async getFlywheelMetrics(timePeriod: 'day' | 'week' | 'month' = 'month'): Promise<FlywheelMetrics> {
    const socialStats = await this.social.getUnifiedAnalytics();
    const journeys = Array.from(this.customerJourney.values());
    
    // Calculate conversions between stages
    const awarenessUsers = journeys.filter(j => j.segment === 'awareness').length;
    const educationUsers = journeys.filter(j => j.segment === 'education').length;
    const enablementUsers = journeys.filter(j => j.segment === 'enablement').length;
    const advocacyUsers = journeys.filter(j => j.segment === 'advocacy').length;
    
    const totalUsers = journeys.length;
    
    // Calculate loop strength (progression through stages)
    const loopStrength = totalUsers > 0 
      ? (educationUsers + enablementUsers + advocacyUsers) / totalUsers 
      : 0;
    
    // Calculate conversion rates
    const awarenessToEducation = awarenessUsers > 0 
      ? educationUsers / awarenessUsers 
      : 0;
    
    const educationToEnablement = educationUsers > 0 
      ? enablementUsers / educationUsers 
      : 0;
    
    const enablementToAdvocacy = enablementUsers > 0 
      ? advocacyUsers / enablementUsers 
      : 0;
    
    // Calculate revenue (simplified - would integrate with payment system)
    const revenueByProduct = this.calculateRevenueByProduct();
    const totalRevenue = Object.values(revenueByProduct).reduce((sum, val) => sum + val, 0);
    
    const avgRevenuePerUser = totalUsers > 0 ? totalRevenue / totalUsers : 0;
    
    return {
      awareness: socialStats.totalFollowers,
      education: educationUsers,
      enablement: enablementUsers,
      advocacy: advocacyUsers,
      loopStrength: Math.round(loopStrength * 100), // Percentage
      conversionRates: {
        awarenessToEducation: Math.round(awarenessToEducation * 100),
        educationToEnablement: Math.round(educationToEnablement * 100),
        enablementToAdvocacy: Math.round(enablementToAdvocacy * 100)
      },
      revenue: {
        total: totalRevenue,
        byProduct: revenueByProduct,
        lifetimeValue: avgRevenuePerUser
      }
    };
  }
  
  private calculateRevenueByProduct(): Record<string, number> {
    // Simplified revenue calculation
    // In real implementation, integrate with payment processor
    const revenueMap: Record<string, number> = {};
    
    for (const journey of this.customerJourney.values()) {
      const purchases = journey.touchpoints.filter(t => t.action === 'purchase');
      
      for (const purchase of purchases) {
        const amount = purchase.data?.amount || 99.99; // Default amount
        revenueMap[purchase.product] = (revenueMap[purchase.product] || 0) + amount;
      }
    }
    
    return revenueMap;
  }
  
  private async getProductSignups(productSlug: string): Promise<number> {
    const journeys = Array.from(this.customerJourney.values());
    return journeys.filter(j => 
      j.touchpoints.some(t => 
        t.product === productSlug && t.action === 'signup'
      )
    ).length;
  }
  
  private async getProductPurchases(productSlug: string): Promise<number> {
    const journeys = Array.from(this.customerJourney.values());
    return journeys.filter(j => 
      j.touchpoints.some(t => 
        t.product === productSlug && t.action === 'purchase'
      )
    ).length;
  }
  
  private async getSocialShares(): Promise<number> {
    const journeys = Array.from(this.customerJourney.values());
    return journeys.filter(j => 
      j.touchpoints.some(t => t.action === 'share')
    ).length;
  }
  
  private async calculateLoopStrength(): Promise<number> {
    const metrics = await this.getFlywheelMetrics();
    return metrics.loopStrength;
  }
  
  private async updateFlywheelMetrics(): Promise<void> {
    // Optional: Store metrics in database for historical analysis
    const metrics = await this.getFlywheelMetrics();
    
    // Could store in DB, send to analytics service, etc.
    console.log('Updated flywheel metrics:', metrics);
  }
  
  // Get customer insights for segmentation
  async getCustomerInsights(): Promise<{
    segments: Record<string, number>;
    topProducts: Array<{ product: string; users: number }>;
    engagementTrend: 'growing' | 'stable' | 'declining';
  }> {
    const journeys = Array.from(this.customerJourney.values());
    
    const segmentCounts = journeys.reduce((acc, journey) => {
      acc[journey.segment] = (acc[journey.segment] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    // Calculate top products
    const productCounts = journeys.reduce((acc, journey) => {
      journey.products.forEach(product => {
        acc[product] = (acc[product] || 0) + 1;
      });
      return acc;
    }, {} as Record<string, number>);
    
    const topProducts = Object.entries(productCounts)
      .map(([product, users]) => ({ product, users }))
      .sort((a, b) => b.users - a.users)
      .slice(0, 5);
    
    // Simple trend calculation (would be more sophisticated in production)
    const engagementTrend = this.calculateEngagementTrend();
    
    return {
      segments: segmentCounts,
      topProducts,
      engagementTrend
    };
  }
  
  private calculateEngagementTrend(): 'growing' | 'stable' | 'declining' {
    const journeys = Array.from(this.customerJourney.values());
    
    // Check last 7 days vs previous 7 days
    const now = new Date();
    const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
    
    const recentActivity = journeys.filter(j => 
      j.lastActive > lastWeek
    ).length;
    
    const previousActivity = journeys.filter(j => 
      j.lastActive > twoWeeksAgo && j.lastActive <= lastWeek
    ).length;
    
    if (recentActivity > previousActivity * 1.1) return 'growing';
    if (recentActivity < previousActivity * 0.9) return 'declining';
    return 'stable';
  }
}

// Example usage
export async function runFlywheelExample() {
  const flywheel = new BoldMindFlywheel({
    maxRetries: 3,
    delayBetweenPosts: 1000,
    batchSize: 5
  });
  
  // Simulate customer journey
  await flywheel.trackCustomerJourney('user-123', {
    product: 'amebogist',
    action: 'view',
    data: { article: 'tech-revolution' }
  });
  
  await flywheel.trackCustomerJourney('user-123', {
    product: 'educenter',
    action: 'signup',
    data: { course: 'react-masterclass' }
  });
  
  await flywheel.trackCustomerJourney('user-123', {
    product: 'ai-receptionist',
    action: 'purchase',
    data: { amount: 299.99, plan: 'pro' }
  });
  
  await flywheel.trackCustomerJourney('user-123', {
    product: 'ai-receptionist',
    action: 'share',
    data: { platform: 'twitter' }
  });
  
  // Get metrics
  const metrics = await flywheel.getFlywheelMetrics();
  console.log('Flywheel Metrics:', metrics);
  
  const insights = await flywheel.getCustomerInsights();
  console.log('Customer Insights:', insights);
  
  return { flywheel, metrics, insights };
}