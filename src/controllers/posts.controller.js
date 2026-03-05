// Temporary in-memory data
let posts = [
  { id: "1", title: "First Post" },
  { id: "2", title: "Second Post" }
];

// GET all posts
export const getAllPosts = (req, res) => {
  const {sorBy} = req.query;
  
  if (sorBy ==="date"){
    console.log("Sorting posts by date...")
  }
  res.status(200).json({
    success:true,
    message:"All posts fetched successfully",
    data:posts
  })
};

// GET single post
export const getPostById = (req, res) => {
  const { id } = req.params;

  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: "Post not found"
    });
  }

  res.status(200).json({
    success: true,
    data: post
  });
};

// CREATE post
export const createPost = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      success: false,
      message: "Title is required"
    });
  }

  const newPost = {
    id: String(posts.length + 1),
    title
  };

  posts.push(newPost);

  res.status(201).json({
    success: true,
    data: newPost
  });
};