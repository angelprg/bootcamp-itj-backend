const Post = require("../models/post");

const saveComment = async (req, res) => {
  const { id } = req.params;
  const comment = req.body;
  const savedPost = await Post.findByIdAndUpdate(
    id,
    { $push: { comments: comment } },
    { returnDocument: "after" }
  )
    .lean()
    .exec();

  const savedComment = savedPost.comments[savedPost.comments.length - 1];

  res.json(savedComment);
};

module.exports = {
  saveComment,
};
