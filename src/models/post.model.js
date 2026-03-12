import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A title is required for the post."],
      trim: true,
      minlength: 3
    },
    content: {
      type: String,
      required: [true, "Content is required"]
    },
    author: {
      type: String,
      default: "Anonymous"
    }
  },
  {
    timestamps: true
  }
);

const Post = mongoose.model("Post", postSchema);

export default Post;