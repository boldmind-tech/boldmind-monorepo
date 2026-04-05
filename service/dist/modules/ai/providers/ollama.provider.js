"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var OllamaProvider_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OllamaProvider = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let OllamaProvider = OllamaProvider_1 = class OllamaProvider {
    constructor(config) {
        this.config = config;
        this.logger = new common_1.Logger(OllamaProvider_1.name);
        this.isReachable = false;
        this.baseUrl = this.config.get('OLLAMA_BASE_URL') ?? 'http://localhost:11434';
        this.defaultModel = this.config.get('OLLAMA_DEFAULT_MODEL') ?? 'llama3.2';
        void this.checkAvailability();
    }
    async checkAvailability() {
        try {
            const res = await fetch(`${this.baseUrl}/api/tags`, { signal: AbortSignal.timeout(2000) });
            this.isReachable = res.ok;
            if (this.isReachable) {
                this.logger.log(`✅ Ollama available at ${this.baseUrl} (LOCAL — zero cost)`);
            }
        }
        catch {
            this.isReachable = false;
            this.logger.debug('Ollama not running locally — skipping');
        }
    }
    get available() {
        return this.isReachable;
    }
    async chat(systemPrompt, userMessage, options = {}) {
        const { model = this.defaultModel, temperature = 0.7, format } = options;
        const start = Date.now();
        const response = await fetch(`${this.baseUrl}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model,
                stream: false,
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userMessage },
                ],
                options: { temperature },
                ...(format ? { format } : {}),
            }),
            signal: AbortSignal.timeout(60_000),
        });
        if (!response.ok)
            throw new Error(`Ollama error: ${await response.text()}`);
        const data = (await response.json());
        return { content: data.message.content, model, latencyMs: Date.now() - start };
    }
    async listModels() {
        const res = await fetch(`${this.baseUrl}/api/tags`);
        const data = (await res.json());
        return data.models.map((m) => m.name);
    }
    async pullModel(modelName) {
        this.logger.log(`Pulling Ollama model: ${modelName}...`);
        await fetch(`${this.baseUrl}/api/pull`, {
            method: 'POST',
            body: JSON.stringify({ name: modelName }),
        });
    }
};
exports.OllamaProvider = OllamaProvider;
exports.OllamaProvider = OllamaProvider = OllamaProvider_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], OllamaProvider);
//# sourceMappingURL=ollama.provider.js.map