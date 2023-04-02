import { useNavigate } from 'react-router-dom'

export default function Post({ post }) {

  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/posts/${post.id}`)}>
      <div className="card-avatar">
        <img src={`https://i.pravatar.cc/64?${post.id}`} />
      </div>
      <div className='card-body'>
        <div className="card-author">User Name</div>
        <div className="card-content">{post.content}</div>
      </div>
    </div>
  );
}