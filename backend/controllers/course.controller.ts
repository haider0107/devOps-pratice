import { NextFunction, Request, RequestHandler, Response } from "express";
import { mongoClient, redisClient } from "../libs/db";

export const getCourses: RequestHandler = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const cacheKey = "api:courses";
    const cached = await redisClient.get(cacheKey);

    if (cached) {
      res.status(200).json({
        source: "cache",
        data: JSON.parse(cached),
      });
    }

    const db = mongoClient.db("chaicode");
    const collection = db.collection("courses");
    const courses = await collection.find().toArray();

    await redisClient.set(cacheKey, JSON.stringify(courses), { EX: 60 });

    res.status(200).json({
      source: "db",
      data: courses,
    });
  } catch (error) {
    next(error);
  }
};
