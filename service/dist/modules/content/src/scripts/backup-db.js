"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const mongoose_1 = require("mongoose");
const fs_1 = require("fs");
const path_1 = require("path");
async function backup() {
    console.log('🚀 Starting Amebogist Database Backup...');
    const uri = process.env['AMEBOGIST_SERVICE_MONGODB_URL'];
    if (!uri) {
        console.error('❌ MONGODB_URI/AMEBOGIST_SERVICE_MONGODB_URL not found in .env');
        process.exit(1);
    }
    try {
        await mongoose_1.default.connect(uri);
        console.log('✅ Connected to MongoDB');
        const collections = await mongoose_1.default.connection.db?.listCollections().toArray();
        if (!collections) {
            console.log('⚠️ No collections found.');
            process.exit(0);
        }
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const backupDir = path_1.default.join(process.cwd(), 'backups', timestamp);
        if (!fs_1.default.existsSync(backupDir)) {
            fs_1.default.mkdirSync(backupDir, { recursive: true });
        }
        console.log(`📂 Backup directory: ${backupDir}`);
        for (const collectionInfo of collections) {
            const collectionName = collectionInfo.name;
            const data = await mongoose_1.default.connection.db?.collection(collectionName).find({}).toArray();
            if (data) {
                const filePath = path_1.default.join(backupDir, `${collectionName}.json`);
                fs_1.default.writeFileSync(filePath, JSON.stringify(data, null, 2));
                console.log(`✔ Backed up ${collectionName}: ${data.length} documents`);
            }
        }
        console.log('✨ Backup completed successfully!');
    }
    catch (error) {
        console.error('❌ Backup failed:', error);
    }
    finally {
        await mongoose_1.default.disconnect();
        console.log('🔌 Disconnected from MongoDB');
    }
}
backup();
//# sourceMappingURL=backup-db.js.map