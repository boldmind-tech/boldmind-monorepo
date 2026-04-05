"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transfer = void 0;
const mongoose_1 = require("mongoose");
const TransferSchema = new mongoose_1.Schema({
    userId: { type: String, required: true, index: true },
    amount: {
        send: { type: Number, required: true },
        sendCurrency: { type: String, required: true },
        receive: { type: Number, required: true },
        receiveCurrency: { type: String, required: true }
    },
    rates: {
        official: Number,
        blackMarket: Number,
        selected: { type: Number, required: true },
        provider: String
    },
    sender: {
        name: String,
        country: String,
        accountDetails: { type: Map, of: mongoose_1.Schema.Types.Mixed }
    },
    recipient: {
        name: { type: String, required: true },
        phone: String,
        bank: { type: String, required: true },
        accountNumber: { type: String, required: true },
        accountName: { type: String, required: true }
    },
    receipt: {
        id: String,
        url: String,
        issuedAt: Date
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'completed', 'failed', 'cancelled'],
        default: 'pending',
        index: true
    },
    timeline: [{
            status: String,
            timestamp: Date,
            message: String
        }],
    fees: {
        providerFee: Number,
        transferFee: Number,
        totalFee: Number
    },
    estimatedDelivery: String,
    actualDelivery: Date,
    trackingId: { type: String, unique: true, index: true }
}, { timestamps: true, collection: 'transfers' });
TransferSchema.index({ userId: 1, status: 1 });
TransferSchema.index({ createdAt: -1 });
exports.Transfer = mongoose_1.default.model('Transfer', TransferSchema);
//# sourceMappingURL=transfer.model.js.map