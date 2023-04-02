import { useParams, useNavigate } from "react-router-dom";
import useJsonFetch from '../hooks/useJsonFetch';
import EditPost from "../components/EditPost";

export default function PostPageEdit(props) {
  const { postId } = useParams();
  const [data, isLoading, hasError] = useJsonFetch(`${import.meta.env.VITE_API_URL_POSTS}/${postId}`);
  const post = data?.post;

  return (
    <div className='page page-post'>
      {isLoading && 'Идет загрузка'}
      {post && <EditPost post={post} />}
    </div >
  );
}
