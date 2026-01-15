// services/naija-fither-service/src/meal-plans.service.ts
import { Injectable } from '@nestjs/common';
import { getMongoDb } from '@boldmind/database';
import OpenAI from 'openai';
import { nigerianFoods } from './data/nigerian-foods';

interface MealPlan {
  id: string;
  userId: string;
  name: string;
  goal: 'weight_loss' | 'maintenance' | 'muscle_gain';
  targetCalories: number;
  duration: number; // days
  meals: {
    day: number;
    breakfast: Meal;
    lunch: Meal;
    dinner: Meal;
    snacks: Meal[];
  }[];
  createdAt: Date;
}

interface Meal {
  name: string;
  ingredients: string[];
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  preparation: string;
}

interface UserProfile {
  age: number;
  weight: number; // kg
  height: number; // cm
  gender: 'male' | 'female';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
  goal: 'weight_loss' | 'maintenance' | 'muscle_gain';
  dietaryRestrictions?: string[];
  medicalConditions?: string[];
}

@Injectable()
export class MealPlansService {
  private openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  private async getDb() {
    return getMongoDb(
      process.env.MONGODB_URI!,
      'boldmind_naija_fither'
    );
  }

  async generateMealPlan(
    userId: string,
    profile: UserProfile,
    duration: number = 7
  ): Promise<MealPlan> {
    // Calculate target calories using Mifflin-St Jeor Equation
    const targetCalories = this.calculateCalories(profile);

    // Generate meals using AI
    const prompt = this.buildMealPlanPrompt(profile, targetCalories, duration);
    
    const response = await this.openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are a Nigerian nutritionist expert. Create culturally appropriate meal plans using Nigerian foods.
          Focus on local ingredients: jollof rice, egusi soup, moi moi, plantain, beans, fish, etc.
          Consider Nigerian eating habits and preferences.`,
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
      response_format: { type: 'json_object' },
    });

    const generatedPlan = JSON.parse(response.choices[0].message.content || '{}');

    const mealPlan: MealPlan = {
      id: crypto.randomUUID(),
      userId,
      name: `${profile.goal} Plan - ${duration} Days`,
      goal: profile.goal,
      targetCalories,
      duration,
      meals: generatedPlan.meals,
      createdAt: new Date(),
    };

    // Save to database
    const db = await this.getDb();
    await db.collection('meal_plans').insertOne(mealPlan);

    return mealPlan;
  }

  private calculateCalories(profile: UserProfile): number {
    // Mifflin-St Jeor Equation
    let bmr: number;
    
    if (profile.gender === 'male') {
      bmr = 10 * profile.weight + 6.25 * profile.height - 5 * profile.age + 5;
    } else {
      bmr = 10 * profile.weight + 6.25 * profile.height - 5 * profile.age - 161;
    }

    // Activity multiplier
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9,
    };

    let tdee = bmr * activityMultipliers[profile.activityLevel];

    // Adjust for goal
    if (profile.goal === 'weight_loss') {
      tdee -= 500; // 500 calorie deficit for ~0.5kg/week loss
    } else if (profile.goal === 'muscle_gain') {
      tdee += 300; // 300 calorie surplus
    }

    return Math.round(tdee);
  }

  private buildMealPlanPrompt(
    profile: UserProfile,
    targetCalories: number,
    duration: number
  ): string {
    return `
Create a ${duration}-day Nigerian meal plan for:
- Gender: ${profile.gender}
- Age: ${profile.age}
- Weight: ${profile.weight}kg
- Height: ${profile.height}cm
- Goal: ${profile.goal}
- Target Calories: ${targetCalories} per day
${profile.dietaryRestrictions?.length ? `- Dietary Restrictions: ${profile.dietaryRestrictions.join(', ')}` : ''}
${profile.medicalConditions?.length ? `- Medical Conditions: ${profile.medicalConditions.join(', ')}` : ''}

Use ONLY Nigerian foods from this list:
${JSON.stringify(nigerianFoods.slice(0, 50), null, 2)}

Return a JSON object with this structure:
{
  "meals": [
    {
      "day": 1,
      "breakfast": {
        "name": "Moi Moi with Pap",
        "ingredients": ["beans", "palm oil", "pepper", "onions", "pap"],
        "calories": 350,
        "protein": 15,
        "carbs": 45,
        "fats": 12,
        "preparation": "Step by step..."
      },
      "lunch": { ... },
      "dinner": { ... },
      "snacks": [{ ... }]
    }
  ]
}

Ensure:
- Each day hits ~${targetCalories} calories (±50)
- Balanced macros (40% carbs, 30% protein, 30% fats for weight loss)
- Variety across days
- Affordable, locally available ingredients
- Practical Nigerian cooking methods
`;
  }

  async getMealPlans(userId: string): Promise<MealPlan[]> {
    const db = await this.getDb();
    return db.collection<MealPlan>('meal_plans')
      .find({ userId })
      .sort({ createdAt: -1 })
      .limit(10)
      .toArray();
  }

  async trackProgress(
    userId: string,
    data: {
      weight: number;
      date: Date;
      notes?: string;
    }
  ): Promise<void> {
    const db = await this.getDb();
    await db.collection('progress').insertOne({
      id: crypto.randomUUID(),
      userId,
      ...data,
      createdAt: new Date(),
    });
  }

  async getProgressHistory(userId: string, days: number = 30): Promise<any[]> {
    const db = await this.getDb();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    return db.collection('progress')
      .find({
        userId,
        date: { $gte: startDate },
      })
      .sort({ date: 1 })
      .toArray();
  }

  async searchNigerianFoods(query: string): Promise<any[]> {
    return nigerianFoods.filter(food => 
      food.name.toLowerCase().includes(query.toLowerCase()) ||
      food.category.toLowerCase().includes(query.toLowerCase())
    );
  }
}