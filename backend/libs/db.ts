import { MongoClient } from "mongodb";
import { createClient, RedisClientType } from "redis";
import dotenv from "dotenv";

dotenv.config();

const { REDIS_PASSWORD, REDIS_HOST, REDIS_PORT, MONGO_URL } = process.env;

if (!REDIS_PASSWORD || !REDIS_HOST || !REDIS_PORT || !MONGO_URL) {
  throw new Error("Missing required environment variables.");
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

// Initialize MongoDB client
const mongoClient = new MongoClient(MONGO_URL);

export { redisClient, mongoClient };
