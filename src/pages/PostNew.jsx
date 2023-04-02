
import { useNavigate } from "react-router-dom";
import FormAddPost from "../components/FormAddPost";

export default function PostNew({ }) {
  const navigate = useNavigate();

  return (
    <div className='page page-post_new'>
      <div className="page-post-header">
        <i className="icon-close" onClick={() => navigate("/")}>✘</i>
      </div>
      <FormAddPost />
    </div>
  );
}