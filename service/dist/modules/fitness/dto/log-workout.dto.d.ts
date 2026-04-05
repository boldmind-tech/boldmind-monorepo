export declare class LogWorkoutDto {
    planId?: string;
    date?: string;
    exercises: Array<{
        name: string;
        sets: number;
        reps: string;
        weight?: number;
    }>;
    durationMinutes?: number;
    caloriesBurned?: number;
    notes?: string;
    mood?: string;
}
