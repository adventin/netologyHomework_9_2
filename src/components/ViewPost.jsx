import { useNavigate } from "react-router-dom";
import Post from "../components/Post";

export default function ViewPost({ post, setIsEdit }) {
  const navigate = useNavigate();
  const editPost = (postId) => {
    navigate(`/posts/edit/${postId}`)
  };
  const deletePost = (postId) => {
    fetch(`${import.meta.env.VITE_API_URL_POSTS}/${postId}`, {
      method: "DELETE"
    })
      .then(() => navigate("/"))
  };

  return (
    <>
      <div className="page-post-header">
        <i className="icon-close" onClick={() => navigate("/")}>✘</i>
      </div>
      <Post post={post} />
      <div className="page-post-footer">
        <button className="button-base button-blue" style={{ marginRight: '1rem' }} onClick={() => editPost(post.id)}>Изменить</button>
        <button className="button-base button-red" onClick={() => deletePost(post.id)}>Удалить</button>
      </div>
    </>
  );
}