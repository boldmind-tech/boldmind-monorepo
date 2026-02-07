// SERVICES/educenter-service/src/main.ts
import dotenv from 'dotenv';
dotenv.config();
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import questionsRouter from './routes/questions.routes';
import quizzesRouter from './routes/quizzes.routes';
import progressRouter from './routes/progress.route';
import coursesRouter from './routes/courses.routes';
import leaderboardRouter from './routes/leaderboard.routes';
import notesRouter from './routes/notes.routes';
import { prisma } from './database/prisma';

const app: Express = express();
const PORT = parseInt(process.env.PORT || '4003', 10);

app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',').map(o => o.trim()) || ['http://localhost:3001'],
  credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/questions', questionsRouter);
app.use('/quizzes', quizzesRouter);
app.use('/progress', progressRouter);
app.use('/courses', coursesRouter);
app.use('/leaderboard', leaderboardRouter);
app.use('/notes', notesRouter);

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'educenter-service' });
});

app.get('/health/ping', (_req: Request, res: Response) => {
  res.json({ message: 'pong', timestamp: new Date().toISOString() });
});

app.use((err: any, _req: Request, res: Response, _next: any) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      status: err.status || 500,
    },
  });
});

import { startKeepAlive } from './keep-alive';

app.listen(PORT, () => {
  console.log(`🚀 EduCenter Service running on: http://localhost:${PORT}`);
  startKeepAlive(PORT);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

export { prisma };