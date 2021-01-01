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
