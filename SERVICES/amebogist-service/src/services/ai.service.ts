import { generateText as generateOpenAIText } from '@boldmind/ai';
import { generateGeminiText } from '@boldmind/ai';

export interface GenerateArticleOptions {
    topic: string;
    style?: 'news' | 'amebo' | 'startup' | 'tech-update';
    language?: 'pidgin' | 'english' | 'yoruba' | 'igbo' | 'hausa';
    model?: 'openai' | 'gemini';
}

export class AIService {
    static async generateArticle(options: GenerateArticleOptions) {
        const { topic, style = 'amebo', language = 'pidgin', model = 'openai' } = options;

        const systemPrompt = `
            You are an expert Nigerian journalist for AmeboGist, a platform that focuses on AI, Tech, and Creator entrepreneurship in Nigeria.
            Your style is highly engaging, authoritative yet conversational.
            When writing in Pidgin, be authentic and use modern urban Lagos slang where appropriate, but remain professional.
            Focus on providing value to Nigerian entrepreneurs and tech enthusiasts.
        `;

        const prompt = `
            Write a ${style} article about: ${topic}.
            The article must be written in ${language}.
            Include a catchy title, a short excerpt (max 160 chars), and the full content.
            The content should be structured with headings and bullet points where needed.
            Emphasize how this topic affects the Nigerian tech ecosystem or creators.
            Format the output as JSON with fields: title, excerpt, content.
        `;

        let result: string;

        if (model === 'gemini') {
            result = await generateGeminiText(`${systemPrompt}\n\n${prompt}`);
        } else {
            result = await generateOpenAIText(`${systemPrompt}\n\n${prompt}`, {
                model: 'gpt-4-1106-preview'
            });
        }

        try {
            // Extract JSON if AI wrapped it in markdown code blocks
            const jsonMatch = result.match(/\{[\s\S]*\}/);
            const jsonStr = jsonMatch ? jsonMatch[0] : result;
            return JSON.parse(jsonStr);
        } catch (error) {
            console.error('Failed to parse AI response:', error);
            throw new Error('AI failed to generate a valid article format.');
        }
    }
}
