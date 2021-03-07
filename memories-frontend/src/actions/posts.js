import * as api from "../api";

//Action Creators: Action creators are function that return actions
export const getPosts = () => async (dispatch) => {
  //here we need to create the async function so that is possible due to the redux-thunk package
  //here we are doing that the function returns a function

  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }

  //  const action = {type: "FETCH_ALL", payload: []}

  //in redux thunk instead of returning the function we use dispatch the function
  // dispatch(action);
};

export const createPost = (post) => async (dispatch) =>{
  try {
    const {data} = api.createPosts(post);
    dispatch({type: "CREATE" , payload: data})
  } catch (error) {
    console.log(error);
  }
}