const Post = require("../models/post");
//create
exports.createPost = async (req, res) => {
  const { title, description, price, name } = req.body;
  const image = req.image;
  const newPost = new Post({
    title,
    description,
    price,
    image,
    name,
  });
  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "something went wrong" });
  }
};
//getpost
exports.getAllPosts = async (req, res) => {
  try {
    // Fetch all posts from the database
    const posts = await Post.find();

    // If no posts found, send a 404 response
    if (!posts || posts.length === 0) {
      return res.status(404).json({ message: "No posts found" });
    }

    // If posts found, send them in the response
    res.status(200).json(posts);
  } catch (error) {
    // If any error occurs, send a 500 response with the error message
    res.status(500).json({ message: error.message });
  }
};
//delete
exports.deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//modifications
exports.updatePost = async (req, res) => {
  try {
    const { title, description, price, name }= req.body;
    const image = req.imageURLs;
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { title, description, price, image, name },
      { new: true }
    )
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
