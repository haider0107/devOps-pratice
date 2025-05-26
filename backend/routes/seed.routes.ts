import express from "express";
import { getSeedDatabase } from "../controllers/seed.controller";

const seedRouter = express.Router();

seedRouter.get("/", getSeedDatabase);


export default seedRouter;