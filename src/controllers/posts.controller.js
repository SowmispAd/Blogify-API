import Post from "../models/post.model.js";

// GET all posts
export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();

    res.status(200).json({
      success: true,
      data: posts
    });

  } catch (error) {
    next(error);
  }
};

// GET single post
export const getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      const error = new Error("Post not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      data: post
    });

  } catch (error) {
    next(error);
  }
};

// CREATE post
export const createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);

    res.status(201).json({
      success: true,
      data: post
    });

  } catch (error) {
    next(error);
  }
};