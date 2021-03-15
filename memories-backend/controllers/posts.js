import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

//handlers for the routes
export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error);
  }
};
export const createPost = async (req, res) => {
  const post = req.body; //whenever ther is post thenwe attach to the post

  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost); //status code 201: successful creation
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePosts = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const post = req.body;
    //checking he ID of the type mongoose type
    // if (!mongoose.types.ObjectID.isValid(_id)) {
    // res.status(404).json({ status: "flaied", message: "invalid ID" });
    // }
    const updatedPost = await PostMessage.findByIdAndUpdate(
      _id,
      { ...post, _id },
      {
        new: true,
      }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(404).json({
      status: "Request Failed",
      message: "Unable to Update the post",
    });
    console.log(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id: _id } = req.params;

    await PostMessage.findByIdAndDelete(_id);

    res.status(201).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "Failed to Delete Post",
      message: error,
    });
  }
};

export const likePost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await PostMessage.findById(id);
    // console.log("post from like", post);
    const updatedPost = await PostMessage.findByIdAndUpdate(
      id,
      {
        likeCount: post.likeCount + 1,
      },
      { new: true }
    );

    res.status(200).json( updatedPost);
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      message: error,
    });
  }
};
