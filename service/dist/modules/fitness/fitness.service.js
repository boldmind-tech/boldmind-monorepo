"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FitnessService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
const prisma_service_1 = require("../../database/prisma.service");
const redis_service_1 = require("../../database/redis.service");
const client_1 = require("@prisma/client");
const sdk_1 = require("@anthropic-ai/sdk");
let FitnessService = class FitnessService {
    constructor(config, http, prisma, redis) {
        this.config = config;
        this.http = http;
        this.prisma = prisma;
        this.redis = redis;
        this.ai = new sdk_1.default({ apiKey: this.config.get('ANTHROPIC_API_KEY') });
    }
    async getOrCreateProfile(userId) {
        let profile = await this.prisma.fitnessProfile.findUnique({ where: { userId } });
        if (!profile) {
            profile = await this.prisma.fitnessProfile.create({
                data: { userId, goal: client_1.FitnessGoal.MAINTENANCE },
            });
        }
        return profile;
    }
    async updateProfile(userId, data) {
        const mapped = { ...data };
        if (data.weight !== undefined) {
            mapped.weightKg = data.weight;
            delete mapped.weight;
        }
        if (data.height !== undefined) {
            mapped.heightCm = data.height;
            delete mapped.height;
        }
        if (data.dietaryPreferences) {
            mapped.dietaryPrefs = data.dietaryPreferences;
            delete mapped.dietaryPreferences;
        }
        return this.prisma.fitnessProfile.upsert({
            where: { userId },
            create: { userId, ...mapped },
            update: mapped,
        });
    }
    async generateWorkoutPlan(userId, dto) {
        const profile = await this.getOrCreateProfile(userId);
        const prompt = `You are a certified fitness trainer. Generate a ${dto.durationWeeks}-week ${dto.goal ?? profile.goal} workout plan.

User profile:
- Age: ${profile.age ?? 'unknown'}
- Weight: ${profile.weightKg ? `${profile.weightKg}kg` : 'unknown'}
- Height: ${profile.heightCm ? `${profile.heightCm}cm` : 'unknown'}
- Activity level: ${profile.activityLevel ?? dto.activityLevel ?? 'moderate'}
- Fitness goal: ${dto.goal ?? profile.goal}
- Equipment available: ${dto.equipment?.join(', ') ?? 'bodyweight only'}
- Days per week: ${dto.daysPerWeek ?? 4}

Return ONLY valid JSON in this format (no markdown):
{
  "planName": string,
  "weeks": [
    {
      "week": number,
      "days": [
        {
          "day": string,
          "focus": string,
          "exercises": [
            { "name": string, "sets": number, "reps": string, "rest": string, "notes": string }
          ],
          "estimatedDuration": string
        }
      ]
    }
  ],
  "tips": string[]
}`;
        const resp = await this.ai.messages.create({
            model: 'claude-opus-4-5',
            max_tokens: 4096,
            messages: [{ role: 'user', content: prompt }],
        });
        const raw = resp.content[0].text;
        let plan;
        try {
            plan = JSON.parse(raw.replace(/```json|```/g, '').trim());
        }
        catch {
            throw new common_1.BadRequestException('AI returned an invalid workout plan');
        }
        const saved = await this.prisma.workoutPlan.create({
            data: {
                userId,
                profileId: profile.id,
                name: plan.planName,
                goal: dto.goal ?? profile.goal,
                durationWeeks: dto.durationWeeks,
                daysPerWeek: dto.daysPerWeek ?? 4,
                workouts: plan,
                isAIGenerated: true,
            },
        });
        return saved;
    }
    async getWorkoutPlans(userId) {
        return this.prisma.workoutPlan.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getWorkoutPlan(id, userId) {
        const plan = await this.prisma.workoutPlan.findFirst({ where: { id, userId } });
        if (!plan)
            throw new common_1.NotFoundException('Workout plan not found');
        return plan;
    }
    async logWorkout(userId, dto) {
        const log = await this.prisma.workoutLog.create({
            data: {
                userId,
                planId: dto.planId,
                date: dto.date ? new Date(dto.date) : new Date(),
                exercises: dto.exercises,
                durationMinutes: dto.durationMinutes ?? 0,
                caloriesBurned: dto.caloriesBurned,
                notes: dto.notes,
                mood: dto.mood,
                completedAt: new Date(),
            },
        });
        await this.updateStreak(userId);
        return log;
    }
    async getWorkoutHistory(userId, page = 1, limit = 20) {
        const skip = (page - 1) * limit;
        const [data, total] = await this.prisma.$transaction([
            this.prisma.workoutLog.findMany({
                where: { userId },
                orderBy: { completedAt: 'desc' },
                skip,
                take: limit,
            }),
            this.prisma.workoutLog.count({ where: { userId } }),
        ]);
        return { data, meta: { total, page, limit, pages: Math.ceil(total / limit) } };
    }
    async logMeal(userId, dto) {
        return this.prisma.mealLog.create({
            data: {
                userId,
                date: dto.date ? new Date(dto.date) : new Date(),
                mealType: dto.mealType,
                mealName: dto.mealType,
                foods: dto.foods,
                totalCalories: dto.totalCalories,
                proteinG: dto.protein,
                carbsG: dto.carbs,
                fatG: dto.fat,
                notes: dto.notes,
            },
        });
    }
    async getMealHistory(userId, date) {
        const where = { userId };
        if (date) {
            const d = new Date(date);
            const next = new Date(d);
            next.setDate(next.getDate() + 1);
            where.date = { gte: d, lt: next };
        }
        return this.prisma.mealLog.findMany({ where, orderBy: { loggedAt: 'desc' } });
    }
    async analyzeMealFromText(userId, mealDescription) {
        const cacheKey = `fitness:meal-ai:${Buffer.from(mealDescription).toString('base64').slice(0, 40)}`;
        const cached = await this.redis.get(cacheKey);
        if (cached)
            return JSON.parse(cached);
        const resp = await this.ai.messages.create({
            model: 'claude-opus-4-5',
            max_tokens: 1024,
            messages: [{
                    role: 'user',
                    content: `Analyze the nutritional content of this meal: "${mealDescription}".
Return ONLY JSON (no markdown):
{
  "foods": [{ "name": string, "quantity": string, "calories": number, "protein": number, "carbs": number, "fat": number }],
  "totalCalories": number,
  "totalProtein": number,
  "totalCarbs": number,
  "totalFat": number,
  "healthScore": number (0-10),
  "tips": string[]
}`,
                }],
        });
        const raw = resp.content[0].text;
        const result = JSON.parse(raw.replace(/```json|```/g, '').trim());
        await this.redis.set(cacheKey, JSON.stringify(result), 3600);
        return result;
    }
    async getDashboard(userId) {
        const cacheKey = `fitness:dashboard:${userId}`;
        const cached = await this.redis.get(cacheKey);
        if (cached)
            return JSON.parse(cached);
        const [profile, streak, recentWorkouts, weeklyCalories, totalWorkouts] = await Promise.all([
            this.prisma.fitnessProfile.findUnique({ where: { userId } }),
            this.prisma.fitnessStreak.findUnique({ where: { userId } }),
            this.prisma.workoutLog.findMany({
                where: { userId },
                orderBy: { completedAt: 'desc' },
                take: 5,
                select: { completedAt: true, durationMinutes: true, caloriesBurned: true, exercises: true },
            }),
            this.getWeeklyCalories(userId),
            this.prisma.workoutLog.count({ where: { userId } }),
        ]);
        const result = { profile, streak, recentWorkouts, weeklyCalories, totalWorkouts };
        await this.redis.set(cacheKey, JSON.stringify(result), 300);
        return result;
    }
    async logBodyMetrics(userId, data) {
        const log = await this.prisma.bodyMetricLog.create({ data: { userId, ...data } });
        if (data.weight)
            await this.prisma.fitnessProfile.update({ where: { userId }, data: { weightKg: data.weight } });
        await this.redis.del(`fitness:dashboard:${userId}`);
        return log;
    }
    async getBodyMetricsHistory(userId, days = 30) {
        const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
        return this.prisma.bodyMetricLog.findMany({
            where: { userId, createdAt: { gte: since } },
            orderBy: { createdAt: 'asc' },
        });
    }
    async updateStreak(userId) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const streak = await this.prisma.fitnessStreak.findUnique({ where: { userId } });
        if (!streak) {
            await this.prisma.fitnessStreak.create({ data: { userId, current: 1, longest: 1, lastWorkout: today } });
            return;
        }
        const lastDate = new Date(streak.lastWorkout);
        lastDate.setHours(0, 0, 0, 0);
        if (lastDate.getTime() === today.getTime())
            return;
        const isConsecutive = lastDate.getTime() === yesterday.getTime();
        const newCurrent = isConsecutive ? streak.current + 1 : 1;
        const newLongest = Math.max(streak.longest, newCurrent);
        await this.prisma.fitnessStreak.update({
            where: { userId },
            data: { current: newCurrent, longest: newLongest, lastWorkout: today },
        });
    }
    async getWeeklyCalories(userId) {
        const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        const logs = await this.prisma.workoutLog.findMany({
            where: { userId, completedAt: { gte: since }, caloriesBurned: { not: null } },
            select: { completedAt: true, caloriesBurned: true },
        });
        return logs.reduce((sum, l) => sum + (l.caloriesBurned ?? 0), 0);
    }
};
exports.FitnessService = FitnessService;
exports.FitnessService = FitnessService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        axios_1.HttpService,
        prisma_service_1.PrismaService,
        redis_service_1.RedisService])
], FitnessService);
//# sourceMappingURL=fitness.service.js.map