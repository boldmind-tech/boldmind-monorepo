import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';

export const getArticleComments = async (req: Request, res: Response) => {
    const { articleId } = req.params;
    const { parentId, sort = 'newest' } = req.query;

    const query: any = { postId: new mongoose.Types.ObjectId(articleId) };
    if (parentId) {
        query.parentId = new mongoose.Types.ObjectId(parentId as string);
    } else {
        query.parentId = { $exists: false };
    }

    const sortOption = sort === 'oldest' ? 'createdAt' : '-createdAt';

    const comments = await Comment.find(query)
        .sort(sortOption)
        .limit(parentId ? 50 : 100)
        .lean();

    return res.json({ data: comments });
};

export const addComment = async (req: Request, res: Response) => {
    const { articleId } = req.params;
    const { user, content, language = 'pidgin', parentId } = req.body;

    const article = await Post.findById(articleId);
    if (!article || article.status !== 'published') {
        return res.status(404).json({ error: 'Article not found or not published' });
    }

    const comment = new Comment({
        postId: new mongoose.Types.ObjectId(articleId),
        parentId: parentId ? new mongoose.Types.ObjectId(parentId) : undefined,
        user,
        content,
        language,
        reactions: { like: 0, love: 0, laugh: 0, angry: 0 }
    });

    await comment.save();

    await Post.updateOne(
        { _id: articleId },
        { $inc: { 'engagement.commentsCount': 1 } }
    );

    return res.status(201).json({ data: comment });
};

export const reactToComment = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { reaction } = req.body;

    if (!['like', 'love', 'laugh', 'angry'].includes(reaction)) {
        return res.status(400).json({ error: 'Invalid reaction type' });
    }

    const comment = await Comment.findByIdAndUpdate(
        id,
        { $inc: { [`reactions.${reaction}`]: 1 } },
        { new: true }
    );

    if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
    }

    return res.json({ data: comment });
};
