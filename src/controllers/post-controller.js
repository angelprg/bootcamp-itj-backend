const Post = require("../models/post");

const listPosts = async (req, res) => {
  const posts = await Post.find().lean().exec();
  res.json(posts);
};

const getPost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id).lean().exec();

  if (post) {
    res.json(post);
  } else {
    res.status(404).send();
  }
};

const savePost = async (req, res) => {
  const post = req.body;
  const newPost = new Post(post);
  await newPost.save();
  res.status(201).json(newPost);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;

  const updatedPost = await Post.findByIdAndUpdate(id, post, {
    returnDocument: "after",
  })
    .lean()
    .exec();

  if (updatedPost) {
    res.json(updatedPost);
  } else {
    res.status(404).send();
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  const deletedPost = await Post.findByIdAndDelete(id).exec();

  if (deletedPost) {
    res.status(204).send();
  } else {
    res.status(404).send();
  }
};

module.exports = {
  listPosts,
  getPost,
  savePost,
  updatePost,
  deletePost,
};
