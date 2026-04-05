"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receipt = void 0;
const mongoose_1 = require("mongoose");
const ReceiptSchema = new mongoose_1.Schema({
    userId: { type: String, required: true, index: true },
    businessId: { type: String, index: true },
    receiptNumber: { type: String, required: true, unique: true },
    customer: {
        name: String,
        email: String,
        phone: String,
        address: String
    },
    vendor: {
        name: { type: String, required: true },
        address: String,
        phone: String,
        email: String,
        logo: String,
        taxId: String
    },
    items: [{
            description: { type: String, required: true },
            quantity: { type: Number, required: true },
            unitPrice: { type: Number, required: true },
            total: { type: Number, required: true }
        }],
    subtotal: { type: Number, required: true },
    tax: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    total: { type: Number, required: true },
    currency: { type: String, default: 'NGN' },
    paymentMethod: String,
    paymentStatus: {
        type: String,
        enum: ['paid', 'pending', 'refunded'],
        default: 'pending'
    },
    issueDate: { type: Date, required: true },
    dueDate: Date,
    paidDate: Date,
    pdfUrl: String,
    imageUrl: String,
    template: { type: String, default: 'default' },
    customization: {
        colors: {
            primary: { type: String, default: '#000000' },
            secondary: { type: String, default: '#666666' }
        },
        font: { type: String, default: 'Arial' },
        showLogo: { type: Boolean, default: true }
    },
    aiExtracted: {
        confidence: Number,
        rawData: mongoose_1.Schema.Types.Mixed,
        verified: { type: Boolean, default: false }
    },
    status: {
        type: String,
        enum: ['draft', 'sent', 'paid', 'overdue', 'cancelled'],
        default: 'draft',
        index: true
    },
    notes: String,
    tags: [String]
}, { timestamps: true, collection: 'receipts' });
ReceiptSchema.index({ userId: 1, status: 1 });
ReceiptSchema.index({ receiptNumber: 1 });
ReceiptSchema.index({ issueDate: -1 });
exports.Receipt = mongoose_1.default.model('Receipt', ReceiptSchema);
//# sourceMappingURL=receipt.model.js.map