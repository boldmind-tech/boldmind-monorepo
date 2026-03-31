// APPS/WEB_APPS/naija-fit/lib/api.ts
import { boldMindAPI, type FitnessProfile, type WorkoutPlan, type MealLog, type BodyMetric } from '@boldmind/api-client';

/**
 * Naija Fit API Client
 * Centralizes fitness API calls using the central @boldmind/api-client hub
 */
export const fitnessAPI = {
    /**
     * User profile management
     */
    profile: {
        /** GET /fitness/profile */
        get: () => boldMindAPI.fitness.getProfile(),
        
        /** PATCH /fitness/profile */
        update: (data: Partial<FitnessProfile>) => boldMindAPI.fitness.updateProfile(data),
    },
    
    /**
     * Workout plans management
     */
    plans: {
        /** POST /fitness/plans/generate */
        generate: (data: { goal: string; level?: string; daysPerWeek?: number }) => 
            boldMindAPI.fitness.plans.generate(data),
        
        /** GET /fitness/plans */
        list: () => boldMindAPI.fitness.plans.list(),
        
        /** GET /fitness/plans/:id */
        get: (id: string) => boldMindAPI.fitness.plans.get(id),
    },
    
    /**
     * Workout logging and history
     */
    workouts: {
        /** POST /fitness/workouts */
        log: (data: { planId?: string; exercises: unknown[]; duration?: number }) => 
            boldMindAPI.fitness.workouts.log(data),
        
        /** GET /fitness/workouts */
        list: () => boldMindAPI.fitness.workouts.list(),
    },
    
    /**
     * Meal tracking
     */
    meals: {
        /** POST /fitness/meals */
        log: (data: { meal: string; calories?: number; mealTime?: string }) => 
            boldMindAPI.fitness.meals.log(data),
        
        /** GET /fitness/meals */
        list: () => boldMindAPI.fitness.meals.list(),
        
        /** POST /fitness/meals/analyze */
        analyze: (data: { meal: string; quantity?: string }) => 
            boldMindAPI.fitness.meals.analyze(data),
    },
    
    /**
     * Body metrics tracking
     */
    metrics: {
        /** POST /fitness/metrics */
        log: (data: Partial<BodyMetric>) => boldMindAPI.fitness.metrics.log(data),
        
        /** GET /fitness/metrics */
        list: () => boldMindAPI.fitness.metrics.list(),
        
        /**
         * Get latest metrics (convenience method)
         */
        getLatest: async () => {
            const response = await boldMindAPI.fitness.metrics.list();
            const metrics = response.data;
            return metrics?.[0] || null;
        },
        
        /**
         * Get metrics history for a specific type
         */
        getHistory: async (type: 'weight' | 'bodyFat' | 'muscleMass' | 'bmi') => {
            const response = await boldMindAPI.fitness.metrics.list();
            const metrics = response.data;
            return metrics?.filter(metric => metric.bmi === 1) || [];
        },
    },
    
    /**
     * Fitness Dashboard
     */
    dashboard: () => boldMindAPI.fitness.dashboard(),
    
    /**
     * Convenience methods for common operations
     */
    utils: {
        /**
         * Get user's current fitness stats
         */
        getCurrentStats: async () => {
            const [profile, metrics, dashboard] = await Promise.all([
                boldMindAPI.fitness.getProfile(),
                boldMindAPI.fitness.metrics.list(),
                boldMindAPI.fitness.dashboard(),
            ]);
            
            return {
                profile: profile.data,
                latestMetrics: metrics.data?.[0] || null,
                dashboard: dashboard.data,
            };
        },
        
        /**
         * Log a complete workout session with exercises
         */
        logWorkoutSession: async (data: {
            planId?: string;
            exercises: Array<{
                name: string;
                sets: number;
                reps: number;
                weight?: number;
                duration?: number;
            }>;
            duration?: number;
            notes?: string;
        }) => {
            return boldMindAPI.fitness.workouts.log({
                planId: data.planId,
                exercises: data.exercises,
                duration: data.duration,
                ...(data.notes && { notes: data.notes }),
            });
        },
        
        /**
         * Log a complete meal with nutritional analysis
         */
        logMealWithAnalysis: async (data: {
            meal: string;
            quantity?: string;
            mealTime?: string;
        }) => {
            // First analyze the meal
            const analysis = await boldMindAPI.fitness.meals.analyze({
                meal: data.meal,
                quantity: data.quantity,
            });
            
            // Then log the meal with nutritional info
            return boldMindAPI.fitness.meals.log({
                meal: data.meal,
                calories: analysis.data.calories,
                mealTime: data.mealTime,
            });
        },
    },
};

export default fitnessAPI;