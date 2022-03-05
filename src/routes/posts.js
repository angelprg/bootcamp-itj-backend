const express = require("express");
const router = express.Router();

const postController = require("../controllers/post-controller");
const commentController = require("../controllers/comment-controller")

router.get("/", postController.listPosts);
router.get("/:id", postController.getPost);
router.post("/", postController.savePost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

router.post("/:id/comments", commentController.saveComment);

module.exports = router;