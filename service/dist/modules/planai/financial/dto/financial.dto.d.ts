export declare class GenerateForecastDto {
    businessName: string;
    industry: string;
    currentMonthlyRevenue: number;
    expectedGrowthPercent: number;
    fixedExpensesNGN: number;
    variableCostPercent: number;
    startingCashNGN: number;
    revenueSources: string[];
    upcomingExpenses?: string;
    context?: string;
}
export declare class GenerateScenarioDto extends GenerateForecastDto {
}
export declare class CalculateBreakEvenDto {
    fixedCostsNGN: number;
    variableCostPerUnit: number;
    pricePerUnit: number;
    currentUnits?: number;
}
