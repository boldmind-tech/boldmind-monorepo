"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const generative_ai_1 = require("@google/generative-ai");
async function listModels() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error("❌ GEMINI_API_KEY not found");
        return;
    }
    const genAI = new generative_ai_1.GoogleGenerativeAI(apiKey);
    try {
        console.log("🔍 Testing 'gemini-pro'...");
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent("test");
        console.log("✅ 'gemini-pro' works!");
    }
    catch (err) {
        console.error("❌ 'gemini-pro' failed:", err.message);
    }
    try {
        console.log("🔍 Testing 'gemini-1.5-flash-latest'...");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
        const result = await model.generateContent("test");
        console.log("✅ 'gemini-1.5-flash-latest' works!");
    }
    catch (err) {
        console.error("❌ 'gemini-1.5-flash-latest' failed:", err.message);
    }
}
listModels();
//# sourceMappingURL=discover-models.js.map