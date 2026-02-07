import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env['GEMINI_API_KEY'] || '');

export async function generateGeminiText(
    prompt: string,
    options: {
        model?: string;
        temperature?: number;
        maxTokens?: number;
    } = {}
) {
    const {
        model = 'gemini-1.5-pro',
        temperature = 0.7,
    } = options;

    const geminiModel = genAI.getGenerativeModel({
        model,
        generationConfig: {
            temperature,
        }
    });

    const result = await geminiModel.generateContent(prompt);
    const response = await result.response;
    return response.text();
}

export default genAI;
