"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const mongoose_1 = require("mongoose");
async function test() {
    console.log("🧪 Testing MongoDB connection...");
    const uri = process.env.MONGODB_URL;
    if (!uri) {
        console.error("❌ MONGODB_URL not found");
        return;
    }
    try {
        await mongoose_1.default.connect(uri);
        console.log("✅ Successfully connected to MongoDB!");
    }
    catch (err) {
        console.error("❌ Connection failed:", err);
    }
    finally {
        await mongoose_1.default.disconnect();
        console.log("🔌 Disconnected.");
    }
}
test();
//# sourceMappingURL=test-db.js.map