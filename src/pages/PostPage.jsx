import { useParams, useNavigate } from "react-router-dom";
import useJsonFetch from '../hooks/useJsonFetch';
import ViewPost from "../components/ViewPost";

export default function PostPage(props) {
  const { postId } = useParams();
  const [data, isLoading, hasError] = useJsonFetch(`${import.meta.env.VITE_API_URL_POSTS}/${postId}`);
  const post = data?.post;

  return (
    <div className='page page-post'>
      {isLoading && 'Идет загрузка'}
      {post && <ViewPost post={post} />}
    </div >
  );
}
