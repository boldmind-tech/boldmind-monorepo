import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateText(
  prompt: string,
  options: {
    model?: string;
    temperature?: number;
    maxTokens?: number;
  } = {}
) {
  const {
    model = 'gpt-4-1106-preview',
    temperature = 0.7,
    maxTokens = 1000,
  } = options;

  const completion = await openai.chat.completions.create({
    model,
    messages: [
      {
        role: 'system',
        content: 'You are a helpful AI assistant.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    temperature,
    max_tokens: maxTokens,
  });

  return completion.choices[0]?.message?.content || '';
}

export async function generateImage(
  prompt: string,
  options: {
    size?: '256x256' | '512x512' | '1024x1024';
    quality?: 'standard' | 'hd';
  } = {}
) {
  const { size = '1024x1024', quality = 'standard' } = options;

  const response = await openai.images.generate({
    model: 'dall-e-3',
    prompt,
    n: 1,
    size,
    quality,
  });

  return response.data[0]?.url || '';
}

export async function transcribeAudio(audioBuffer: Buffer) {
  const file = new File([audioBuffer], 'audio.mp3', { type: 'audio/mpeg' });
  
  const transcription = await openai.audio.transcriptions.create({
    file,
    model: 'whisper-1',
  });

  return transcription.text;
}

export default openai;