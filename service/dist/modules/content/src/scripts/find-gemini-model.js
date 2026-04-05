"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const generative_ai_1 = require("@google/generative-ai");
const child_process_1 = require("child_process");
async function findWorkingModel() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey)
        return;
    console.log("🔍 Fetching model names via curl...");
    const output = (0, child_process_1.execSync)(`curl.exe -s https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`).toString();
    const data = JSON.parse(output);
    const models = data.models.map((m) => m.name.replace('models/', ''));
    console.log(`📋 Found ${models.length} models to test.`);
    const genAI = new generative_ai_1.GoogleGenerativeAI(apiKey);
    for (const modelName of models) {
        process.stdout.write(`🧪 Testing ${modelName}... `);
        try {
            const model = genAI.getGenerativeModel({
                model: modelName,
                systemInstruction: "You are an expert Nigerian journalist."
            });
            const result = await model.generateContent("Write a one sentence news headline in Pidgin English about AI in Lagos.");
            console.log("✅ WORKS!");
            console.log(`👉 SUGGESTION: Use '${modelName}'`);
        }
        catch (err) {
            console.log(`❌ FAILED (${err.status || 'Error'})`);
        }
    }
}
findWorkingModel();
//# sourceMappingURL=find-gemini-model.js.map