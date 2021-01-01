import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./style";

const Posts = () => {
  const posts = useSelector(state =>state.posts)
  const useStyle = useStyles();

  console.log(posts)
  return (
    <>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
