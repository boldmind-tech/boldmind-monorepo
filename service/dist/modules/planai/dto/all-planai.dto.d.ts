export declare class GenerateBusinessPlanDto {
    businessName: string;
    industry: string;
    description: string;
    targetCustomers: string;
    productsServices: string;
    location?: string;
    initialCapitalNGN?: number;
    fundingNeeded?: number;
    additionalContext?: string;
}
export declare class GeneratePitchDeckDto {
    businessName: string;
    industry: string;
    problemStatement: string;
    solution: string;
    teamBackground: string;
    traction?: string;
    fundingAskNGN?: number;
    targetMarket?: string;
}
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
export declare class GenerateScenarioDto {
    businessName: string;
    baseRevenue: number;
    growthRate: number;
    fixedCosts: number;
    industry?: string;
    risks?: string;
}
export declare class CalculateBreakEvenDto {
    fixedCostsNGN: number;
    variableCostPerUnit: number;
    pricePerUnit: number;
    currentUnits?: number;
}
export declare class GenerateLogoDto {
    businessName: string;
    industry: string;
    style?: string;
    colors?: string[];
    additionalInstructions?: string;
}
export declare class GenerateBrandKitDto {
    businessName: string;
    industry: string;
    targetAudience: string;
    brandValues: string[];
    style?: string;
    inspiration?: string;
}
export declare class GenerateFlyerDto {
    businessName: string;
    offerText: string;
    callToAction: string;
    contact?: string;
    style?: string;
    colors?: string;
}
export declare class GenerateColorPaletteDto {
    industry: string;
    targetAudience: string;
    mood?: string;
}
