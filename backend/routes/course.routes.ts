import express from "express";
import { getCourses } from "../controllers/course.controller";

const courseRouter = express.Router();

courseRouter.get("/", getCourses);

export default courseRouter;