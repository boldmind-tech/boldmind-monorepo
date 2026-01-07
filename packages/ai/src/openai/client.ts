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
  const imageData = response.data?.[0];

  if (!imageData?.url) {
    throw new Error('Failed to generate image');
  }

  return imageData.url;

}

// Alternative transcription using OpenAI SDK directly - QUICK FIX
export async function transcribeAudioWithSDK(audioData: File | Buffer | Uint8Array) {
  let fileToTranscribe: File;

  if (audioData instanceof File) {
    fileToTranscribe = audioData;
  } else if (Buffer.isBuffer(audioData)) {
    // Convert Buffer to Uint8Array first
    const uint8Array = new Uint8Array(
      audioData.buffer,
      audioData.byteOffset,
      audioData.byteLength
    ) as any; // Type assertion

    fileToTranscribe = new File([uint8Array], 'audio.mp3', { type: 'audio/mpeg' });
  } else {
    // Type assertion for Uint8Array
    const data = audioData as any;
    fileToTranscribe = new File([data], 'audio.mp3', { type: 'audio/mpeg' });
  }

  const transcription = await openai.audio.transcriptions.create({
    file: fileToTranscribe,
    model: "whisper-1",
  });

  return transcription.text;
}

export default openai;