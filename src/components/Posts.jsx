import { Link } from 'react-router-dom'
import Post from "./Post";

export default function Posts({ posts }) {

  return (
    <div className="posts">
      <div className='posts-header'>
        <Link className='button-base button-blue' to="/posts/new">Создать пост</Link>
      </div>
      <div className="posts-list">
        {posts?.map(post => {
          return (
            <Post key={post.id} post={post} />
          )
        })}
      </div>
    </div>
  );
}