import express from "express";

const router = express.Router();

// GET /api/v1/posts
router.get("/", (req, res) => {
  res.json({ message: "All posts" });
});

export default router;
