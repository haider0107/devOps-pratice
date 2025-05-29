import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Database
import { mongoClient } from './libs/db';

// Routes
import courseRouter from './routes/course.routes';
import seedRouter from './routes/seed.routes';

dotenv.config();

const app = express();
const PORT: number = parseInt(process.env.PORT || '8080', 10);

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  }),
);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to ChaiCode API ☕️',
  });
});

// app.get('/new', (_req: Request, res: Response) => {
//   res.status(200).json({
//     message: 'New chai code API ☕️',
//   });
// });

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ alive: true });
});

app.get('/version', (_req: Request, res: Response) => {
  res.status(200).json({
    version: 'v1',
    host: process.env.NODE_HOST,
  });
});

app.get('/url', (req: Request, res: Response) => {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  console.log('Current URL:', fullUrl);

  res.status(200).json({
    fullUrl,
    host: process.env.NODE_HOST,
  });
});

app.use('/api/v1/courses', courseRouter);
app.use('/api/v1/seed', seedRouter);

app.listen(PORT, async () => {
  await mongoClient.connect();
  console.log(`Backend server running at http://localhost:${PORT}`);
});

export default app;
