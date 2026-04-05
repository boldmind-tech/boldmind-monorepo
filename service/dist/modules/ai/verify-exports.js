"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const ai_service_1 = require("./ai.service");
async function test() {
    console.log('--- STANDALONE AI EXPORTS TEST ---');
    console.log('Testing generateText export presence...');
    if (typeof ai_service_1.generateText === 'function') {
        console.log('✅ generateText is exported');
    }
    else {
        console.log('❌ generateText is NOT exported');
    }
    console.log('Testing generateGeminiText export presence...');
    if (typeof ai_service_1.generateGeminiText === 'function') {
        console.log('✅ generateGeminiText is exported');
    }
    else {
        console.log('❌ generateGeminiText is NOT exported');
    }
    if (process.env['OPENAI_API_KEY'] || process.env['GEMINI_API_KEY']) {
        console.log('API keys found, attempting dry run...');
    }
    console.log('Test complete.');
}
test().catch(console.error);
//# sourceMappingURL=verify-exports.js.map