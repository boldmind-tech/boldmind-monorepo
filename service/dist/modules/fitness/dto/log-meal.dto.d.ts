export declare class LogMealDto {
    date?: string;
    mealType: string;
    foods: Array<{
        name: string;
        quantity: string;
        calories?: number;
    }>;
    totalCalories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
    notes?: string;
}
