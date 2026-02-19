export const getAllPosts = (req, res) => {
  res.json({ message: "All posts" });
};

export const getPostById = async (req,res)=>{
    const {postId} = req.params;
    res.json({
        message:"Fetching data for post with ID"+ postId,
    });
};