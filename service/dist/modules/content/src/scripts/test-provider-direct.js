"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("reflect-metadata");
const mongoose_1 = require("mongoose");
const slugify_1 = require("slugify");
const post_schema_1 = require("../../schemas/post.schema");
const gemini_provider_1 = require("../../../ai/providers/gemini.provider");
async function testProviderDirect() {
    console.log("🚀 Starting Direct Provider Test...");
    const mongoUri = process.env.MONGODB_URL;
    const apiKey = process.env.GEMINI_API_KEY;
    if (!mongoUri || !apiKey) {
        console.error("❌ Missing env variables");
        return;
    }
    try {
        await mongoose_1.default.connect(mongoUri);
        console.log("✅ Connected to MongoDB");
        const mockConfig = {
            get: (key) => {
                if (key === 'GEMINI_API_KEY')
                    return apiKey;
                return process.env[key];
            }
        };
        const gemini = new gemini_provider_1.GeminiProvider(mockConfig);
        console.log("🤖 Calling GeminiProvider.chat with gemma-3-27b-it...");
        const systemPrompt = "You are an expert Nigerian journalist. Write in Pidgin English.";
        const userPrompt = "Write a news article titled 'AI in Naija 2025'. Include a short excerpt and content body. Format as JSON with fields {title, excerpt, content}.";
        const response = await gemini.chat(systemPrompt, userPrompt, {
            model: 'gemma-3-27b-it'
        });
        console.log("✅ AI Response received. Length:", response.content.length);
        console.log("🤖 Raw content snippet:", response.content.substring(0, 100));
        const aiData = JSON.parse(response.content.match(/\{[\s\S]*\}/)?.[0] || response.content);
        const slug = (0, slugify_1.default)(aiData.title, { lower: true, strict: true });
        const newPost = new post_schema_1.Post({
            slug,
            title: aiData.title,
            content: { pidgin: aiData.content },
            excerpt: aiData.excerpt,
            category: 'ai-tech',
            author: { id: "test-id", name: "Tester", isVerified: true },
            status: 'published',
            source: 'ai'
        });
        await newPost.save();
        console.log(`✅ Post saved successfully: ${slug}`);
    }
    catch (err) {
        console.error("💥 Test failed:", err.message);
        if (err.stack)
            console.error(err.stack);
    }
    finally {
        await mongoose_1.default.disconnect();
        console.log("🔌 Disconnected.");
    }
}
testProviderDirect();
//# sourceMappingURL=test-provider-direct.js.map