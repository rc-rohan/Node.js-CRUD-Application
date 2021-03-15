import express from "express";

import {
  getPosts,
  createPost,
  updatePosts,
  deletePost,
  likePost,
} from "../controllers/posts.js";

const router = express.Router();

router.route("/").get(getPosts).post(createPost);

router.route("/:id").patch(updatePosts).delete(deletePost);

router.patch("/:id/likePost", likePost);

export default router;
