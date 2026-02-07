import { Request, Response } from 'express';
// import mongoose from 'mongoose';
import { Post } from '../models/post.model';
import { AIService } from '../services/ai.service';
import { TrendService } from '../services/trend.service';
import { VideoFactoryService } from '../services/video-factory.service';

export const getTrends = async (_req: Request, res: Response) => {
    try {
        const trends = await TrendService.getTrendingTechUpdates();
        return res.json({ data: trends });
    } catch (error: any) {
        return res.status(500).json({ error: 'Failed to fetch trends' });
    }
};

export const triggerVideoFactory = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const post = await Post.findById(id);
        if (!post) return res.status(404).json({ error: 'Post not found' });

        const job = await VideoFactoryService.convertPostToVideo(post);

        if (job) {
            await Post.updateOne(
                { _id: id },
                {
                    $set: {
                        'distributionStatus.videoConverted': true,
                        'distributionStatus.factoryJobId': job.data?.id || job.id
                    }
                }
            );
        }

        return res.json({ success: true, data: job });
    } catch (error: any) {
        return res.status(500).json({ error: 'Failed to trigger video factory' });
    }
};

export const generateAIPost = async (req: Request, res: Response) => {
    const { topic, style, language, model } = req.body;

    if (!topic) {
        return res.status(400).json({ error: 'Topic is required for AI generation' });
    }

    try {
        const article = await AIService.generateArticle({
            topic,
            style,
            language,
            model
        });

        return res.json({ data: article });
    } catch (error: any) {
        console.error('AI Generation Error:', error);
        return res.status(500).json({
            error: 'Failed to generate article with AI',
            details: error.message
        });
    }
};

export const listArticles = async (req: Request, res: Response) => {
    const {
        category,
        status = 'published',
        featured,
        tag,
        authorId,
        search,
        page = '1',
        limit = '20',
        sortBy = 'publishedAt',
        order = 'desc'
    } = req.query;

    const query: any = { status };

    if (category) query.category = category;
    if (featured === 'true') query.isFeatured = true;
    if (tag) query.tags = { $in: [(tag as string).toLowerCase()] };
    if (authorId) query['author.id'] = authorId;
    if (search) {
        query.$or = [
            { title: { $regex: search, $options: 'i' } },
            { excerpt: { $regex: search, $options: 'i' } },
            { 'content.pidgin': { $regex: search, $options: 'i' } }
        ];
    }

    const skip = (parseInt(page as string) - 1) * parseInt(limit as string);
    const sortOrder = order === 'asc' ? 1 : -1;

    const [articles, total] = await Promise.all([
        Post.find(query)
            .select('-content.english -content.yoruba -seo.metaDescription -monetization')
            .sort({ [sortBy as string]: sortOrder })
            .skip(skip)
            .limit(parseInt(limit as string))
            .lean(),
        Post.countDocuments(query)
    ]);

    return res.json({
        data: articles,
        meta: {
            total,
            page: parseInt(page as string),
            limit: parseInt(limit as string),
            totalPages: Math.ceil(total / parseInt(limit as string))
        }
    });
};

export const trendingArticles = async (_req: Request, res: Response) => {
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    const articles = await Post.find({
        status: 'published',
        publishedAt: { $gte: weekAgo }
    })
        .sort({ 'engagement.views': -1, publishedAt: -1 })
        .limit(10)
        .select('slug title excerpt media.featuredImage author engagement.views category publishedAt')
        .lean();

    return res.json({ data: articles });
};

export const searchArticles = async (req: Request, res: Response) => {
    const { q, limit = '10' } = req.query;

    if (!q || typeof q !== 'string') {
        return res.status(400).json({ error: 'Query parameter "q" required' });
    }

    const articles = await Post.find({
        status: 'published',
        $or: [
            { title: { $regex: q, $options: 'i' } },
            { excerpt: { $regex: q, $options: 'i' } },
            { 'content.pidgin': { $regex: q, $options: 'i' } },
            { tags: { $in: [q.toLowerCase()] } },
            { 'seo.keywords': { $in: [q.toLowerCase()] } }
        ]
    })
        .limit(parseInt(limit as string))
        .select('slug title excerpt media.featuredImage author category publishedAt')
        .lean();

    return res.json({ data: articles, query: q });
};

export const getArticleBySlug = async (req: Request, res: Response) => {
    const { slug } = req.params;
    const { incrementViews = 'true' } = req.query;

    const article = await Post.findOne({ slug, status: 'published' }).lean();

    if (!article) {
        return res.status(404).json({ error: 'Article not found' });
    }

    if (incrementViews === 'true') {
        await Post.updateOne({ _id: article._id }, { $inc: { 'engagement.views': 1 } });
        if (article.engagement) {
            article.engagement.views = (article.engagement.views || 0) + 1;
        } else {
            article.engagement = { views: 1, likes: 0, shares: 0, commentsCount: 0, readingTime: 0 };
        }
    }

    return res.json({ data: article });
};

export const createArticle = async (req: Request, res: Response) => {
    const {
        title,
        content,
        excerpt,
        category,
        tags,
        author,
        media,
        seo,
        isFeatured,
        source,
        editorialNote,
        status = 'draft'
    } = req.body;

    const baseSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

    let slug = baseSlug;
    let counter = 1;
    while (await Post.exists({ slug })) {
        slug = `${baseSlug}-${counter}`;
        counter++;
    }

    const article = new Post({
        slug,
        title,
        content: {
            pidgin: content.pidgin,
            english: content.english,
            yoruba: content.yoruba,
            igbo: content.igbo,
            hausa: content.hausa
        },
        excerpt: excerpt || content.pidgin.substring(0, 160) + '...',
        category,
        tags: tags?.map((t: string) => t.toLowerCase()) || [],
        author,
        media: {
            featuredImage: media?.featuredImage,
            gallery: media?.gallery || [],
            videoUrl: media?.videoUrl
        },
        seo: {
            metaTitle: seo?.metaTitle || title,
            metaDescription: seo?.metaDescription || excerpt,
            keywords: seo?.keywords || tags || [],
            ogImage: seo?.ogImage || media?.featuredImage
        },
        isFeatured: isFeatured || false,
        source: source || 'manual',
        editorialNote,
        status,
        publishedAt: status === 'published' ? new Date() : undefined
    });

    await article.save();
    return res.status(201).json({ data: article });
};

export const updateArticle = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;

    if (updates.slug) {
        const existing = await Post.findById(id);
        if (existing?.status === 'published') {
            delete updates.slug;
        }
    }

    if (updates.status === 'published') {
        updates.publishedAt = new Date();
    }

    const article = await Post.findByIdAndUpdate(
        id,
        { $set: updates, updatedAt: new Date() },
        { new: true, runValidators: true }
    );

    if (!article) {
        return res.status(404).json({ error: 'Article not found' });
    }

    return res.json({ data: article });
};

export const deleteArticle = async (req: Request, res: Response) => {
    const { id } = req.params;

    const article = await Post.findByIdAndUpdate(
        id,
        { $set: { status: 'archived', updatedAt: new Date() } },
        { new: true }
    );

    if (!article) {
        return res.status(404).json({ error: 'Article not found' });
    }

    return res.status(200).json({ data: article, message: 'Article archived' });
};
