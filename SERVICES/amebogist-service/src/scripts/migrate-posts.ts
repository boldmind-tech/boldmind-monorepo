// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import path from 'path';

// // Load env vars from the service directory
// dotenv.config({ path: path.join(__dirname, '../.env') });

// const MONGODB_URI = process.env['MONGODB_URI'] || 'mongodb://localhost:27017/amebogist';

// async function migrate() {
//     console.log('🚀 Starting Database Migration...');

//     try {
//         await mongoose.connect(MONGODB_URI);
//         console.log('✅ Connected to MongoDB');

//         const db = mongoose.connection.db;
//         const postsCollection = db?.collection('posts');

//         // 1. Update documents to include new content fields and AI metadata
//         const result = await postsCollection?.updateMany(
//             {},
//             [
//                 {
//                     $set: {
//                         'content.igbo': { $ifNull: ['$content.igbo', ''] },
//                         'content.hausa': { $ifNull: ['$content.hausa', ''] },
//                         'aiMetadata': { $ifNull: ['$aiMetadata', {}] },
//                         'distributionStatus': {
//                             $ifNull: [
//                                 '$distributionStatus',
//                                 {
//                                     socialShared: false,
//                                     videoConverted: false
//                                 }
//                             ]
//                         },
//                         'source': { $ifNull: ['$source', 'manual'] }
//                     }
//                 }
//             ]
//         );

//         console.log(`✅ Successfully updated ${result?.modifiedCount} documents.`);

//         // 2. Fix specific character encoding or typos if any (optional)
//         // Example: If there were old 'hause' fields from previous typo
//         const typoFix = await postsCollection?.updateMany(
//             { 'content.hause': { $exists: true } },
//             [
//                 {
//                     $set: { 'content.hausa': '$content.hause' },
//                     $unset: 'content.hause'
//                 }
//             ]
//         );
//         if (typoFix?.modifiedCount > 0 ) {
//             console.log(`✅ Fixed typo in ${typoFix?.modifiedCount} documents.`);
//         }

//         console.log('🎉 Migration Completed Successfully!');
//     } catch (error) {
//         console.error('❌ Migration Failed:', error);
//     } finally {
//         await mongoose.disconnect();
//         process.exit(0);
//     }
// }

// migrate();
