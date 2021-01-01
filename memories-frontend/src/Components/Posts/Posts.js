import Post from './Post/Post'
import useStyles from './style'

const Posts = () => {
  const useStyle = useStyles();
  return (
    <>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
