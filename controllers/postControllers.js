const post = (require("../models/post").export.createPost = async (
  req,
  res
) => {
  const { title, description, price, createdAt, name } = req.body;
  const newPost = new post({
    title,
  });
  try {
    const savedPost = await newPost.save();
    res.json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "something went wrong" });
  }
});
