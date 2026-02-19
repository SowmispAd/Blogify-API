import express from "express";
import postsRouter from "./src/routes/posts.routes.js";

const app = express();

app.use(express.json());

// Mount the posts router
app.use("/api/v1/posts", postsRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
