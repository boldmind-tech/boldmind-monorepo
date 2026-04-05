"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const mongoose_1 = require("mongoose");
const post_schema_1 = require("../../schemas/post.schema");
async function check() {
    console.log("🔍 Checking MongoDB for generated posts...");
    const Post = mongoose_1.default.model('Post', post_schema_1.PostSchema);
    await mongoose_1.default.connect(process.env.MONGODB_URL || '');
    const count = await Post.countDocuments();
    console.log('Post count:', count);
    const lastPosts = await Post.find({}, 'slug createdAt').sort({ createdAt: -1 }).limit(5);
    console.log('Last 5 posts:', lastPosts.map(p => ({ slug: p.slug, at: p.createdAt })));
    process.exit();
}
check();
//# sourceMappingURL=check-posts.js.map