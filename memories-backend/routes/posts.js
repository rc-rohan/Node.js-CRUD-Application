import express from "express";

import {
  getPosts,
  createPost,
  updatePosts,
  deletePost,
} from "../controllers/posts.js";

const router = express.Router();

router.route("/").get(getPosts).post(createPost);

router.route("/:id").patch(updatePosts).delete(deletePost);

export default router;
