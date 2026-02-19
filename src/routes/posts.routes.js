import express from "express";
import { getAllPosts } from "../controllers/posts.controller.js";

const router = express.Router();

// GET /api/v1/posts
router.get("/", getAllPosts);

export default router;
