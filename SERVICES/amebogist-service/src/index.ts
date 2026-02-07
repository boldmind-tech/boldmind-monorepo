import 'dotenv/config';
import express, { Express } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import helmet from 'helmet';
import morgan from 'morgan';

import postRoutes from './routes/post.routes';
import commentRoutes from './routes/comment.routes';
import utilityRoutes from './routes/utility.routes';

const app: Express = express();
const port = process.env['PORT'] || 4021;

// Connect to MongoDB
mongoose.connect(process.env['AMEBOGIST_SERVICE_MONGODB_URL'] || '')
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/articles', postRoutes);
app.use('/', commentRoutes);
app.use('/', utilityRoutes);

// Error handling
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Internal server error',
        message: process.env['NODE_ENV'] === 'development' ? err.message : undefined
    });
});

app.listen(port, () => {
    console.log(`🚀 AmeboGist API running on port ${port}`);
    console.log(`📦 Environment: ${process.env['NODE_ENV'] || 'development'}`);
});

export { app };