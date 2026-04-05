"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const generative_ai_1 = require("@google/generative-ai");
async function listModels() {
    const apiKey = process.env['GEMINI_API_KEY'];
    if (!apiKey) {
        console.error("❌ GEMINI_API_KEY is missing from environment variables");
        return;
    }
    console.log("Checking models with key ending in:", apiKey.slice(-4));
    const genAI = new generative_ai_1.GoogleGenerativeAI(apiKey);
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        console.log("Attempting to generate content with 'gemini-2.0-flash'...");
        try {
            const result = await model.generateContent("Hello");
            console.log("✅ 'gemini-2.0-flash' worked! Response:", result.response.text());
        }
        catch (e) {
            console.error("❌ 'gemini-2.0-flash' failed:", e.message);
        }
        const modelPro = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        console.log("Attempting to generate content with 'gemini-2.5-flash'...");
        try {
            const result = await modelPro.generateContent("Hello");
            console.log("✅ 'gemini-2.5-flash' worked! Response:", result.response.text());
        }
        catch (e) {
            console.error("❌ 'gemini-2.5-flash' failed:", e.message);
        }
        const modelLatest = genAI.getGenerativeModel({ model: "gemini-flash-latest" });
        console.log("Attempting to generate content with 'gemini-flash-latest'...");
        try {
            const result = await modelLatest.generateContent("Hello");
            console.log("✅ 'gemini-flash-latest' worked! Response:", result.response.text());
        }
        catch (e) {
            console.error("❌ 'gemini-flash-latest' failed:", e.message);
        }
    }
    catch (error) {
        console.error("Error initializing:", error);
    }
}
listModels();
//# sourceMappingURL=check-gemini.js.map