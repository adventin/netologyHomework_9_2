import useJsonFetch from '../hooks/useJsonFetch';
import Posts from "../components/Posts";

export default function HomePage(props) {
  const [data, isLoading, hasError] = useJsonFetch(import.meta.env.VITE_API_URL_POSTS);

  return (
    <div className='page page-home'>
      <Posts posts={data} />
    </div>
  );
}