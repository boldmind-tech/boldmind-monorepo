"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerStatus = void 0;
const mongoose_1 = require("mongoose");
const PowerStatusSchema = new mongoose_1.Schema({
    location: {
        type: { type: String, default: 'Point' },
        coordinates: { type: [Number], required: true },
        address: String,
        area: { type: String, index: true },
        city: { type: String, index: true },
        state: { type: String, index: true }
    },
    provider: { type: String, required: true, index: true },
    status: {
        type: String,
        enum: ['on', 'off', 'fluctuating', 'unknown'],
        default: 'unknown',
        index: true
    },
    lastChange: { type: Date, default: Date.now },
    duration: { type: Number, default: 0 },
    reportedBy: [{
            userId: String,
            timestamp: Date,
            confidence: Number
        }],
    crowdScore: { type: Number, default: 0 },
    predictedRestoration: Date,
    historicalPatterns: [{
            dayOfWeek: Number,
            hourOfDay: Number,
            probabilityOff: Number
        }]
}, { timestamps: true, collection: 'power_status' });
PowerStatusSchema.index({ location: '2dsphere' });
PowerStatusSchema.index({ area: 1, status: 1 });
exports.PowerStatus = mongoose_1.default.model('PowerStatus', PowerStatusSchema);
//# sourceMappingURL=power-status.model.js.map