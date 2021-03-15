import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_ALL,
  LIKE,
} from "../constants/actionTypes";
import * as api from "../api";

//Action Creators: Action creators are function that return actions
export const getPosts = () => async (dispatch) => {
  //here we need to create the async function so that is possible due to the redux-thunk package
  //here we are doing that the function returns a function

  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
  //  const action = {type: "FETCH_ALL", payload: []}

  //in redux thunk instead of returning the function we use dispatch the function
  // dispatch(action);
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPosts(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    console.log(data);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    console.log(data);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
