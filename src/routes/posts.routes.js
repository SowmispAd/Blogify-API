import express from "express";
import { getAllPosts, getPostById } from "../controllers/posts.controller.js";

const router = express.Router();

// GET all posts
router.get("/", getAllPosts);

// GET single post by ID (dynamic route)
router.get("/:postId", getPostById);

export default router;
