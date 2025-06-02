import { MongoClient } from 'mongodb';
import fs from 'node:fs';
import { createClient, RedisClientType } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

let { REDIS_PASSWORD, MONGO_USERNAME, MONGO_PASSWORD } = process.env;

if (!REDIS_PASSWORD && process.env.REDIS_PASSWORD_FILE) {
  REDIS_PASSWORD = fs
    .readFileSync(process.env.REDIS_PASSWORD_FILE, 'utf-8')
    .trim();
}

if (!MONGO_USERNAME && process.env.MONGO_USERNAME_FILE) {
  MONGO_USERNAME = fs
    .readFileSync(process.env.MONGO_USERNAME_FILE, 'utf-8')
    .trim();
}

if (!MONGO_PASSWORD && process.env.MONGO_PASSWORD_FILE) {
  MONGO_PASSWORD = fs
    .readFileSync(process.env.MONGO_PASSWORD_FILE, 'utf-8')
    .trim();
}

const { MONGO_HOST, REDIS_PORT, REDIS_HOST } = process.env;

if (
  !REDIS_PASSWORD ||
  !REDIS_HOST ||
  !REDIS_PORT ||
  !MONGO_USERNAME ||
  !MONGO_PASSWORD ||
  !MONGO_HOST
) {
  throw new Error('Missing required environment variables.');
}

// Initialize Redis client
const redisClient: RedisClientType = createClient({
  password: REDIS_PASSWORD,
  socket: {
    host: REDIS_HOST,
    port: parseInt(REDIS_PORT, 10),
  },
});

const init = async () => {
  await redisClient.connect();
};

init();

const MONGO_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:27017`;

// Initialize MongoDB client
const mongoClient = new MongoClient(MONGO_URL);

export { redisClient, mongoClient };
