import { Request, RequestHandler, Response } from 'express';
import { mongoClient } from '../libs/db';
// import { seedDatabase } from "../seed.js";

export const getSeedDatabase: RequestHandler = async (
  _: Request,
  res: Response,
): Promise<void> => {
  const courses = [
    {
      title: 'DevOps Fundamentals',
      description: 'Learn the basics of DevOps engineering and practices',
      instructor: 'ChaiCode Team',
      duration: '10 hours',
      topics: ['Docker', 'Kubernetes', 'CI/CD', 'Infrastructure as Code'],
      price: 499,
      level: 'Beginner',
    },
    {
      title: 'Full Stack Development',
      description: 'Master full stack web development with modern technologies',
      instructor: 'ChaiCode Team',
      duration: '20 hours',
      topics: ['React', 'Node.js', 'MongoDB', 'Express', 'Redis'],
      price: 799,
      level: 'Intermediate',
    },
    {
      title: 'System Design',
      description: 'Learn to design scalable distributed systems',
      instructor: 'ChaiCode Team',
      duration: '15 hours',
      topics: [
        'Architecture Patterns',
        'Scalability',
        'Load Balancing',
        'Caching',
      ],
      price: 999,
      level: 'Advanced',
    },
  ];

  try {
    const db = mongoClient.db('chaicode');

    await db.collection('courses').deleteMany({});

    const result = await db.collection('courses').insertMany(courses);
    console.log(`Successfully seeded ${result.insertedCount} courses`);

    res.status(200).json({
      message: 'Database seeded successfully',
    });
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};
