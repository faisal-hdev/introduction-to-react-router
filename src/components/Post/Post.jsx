import { Link, useNavigate } from "react-router-dom";
import "./Post.css";

/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Post = ({ post }) => {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };

  const { id, title } = post;
  return (
    <div className="post">
      <p>Post of id {id}</p>
      <p>{title}</p>
      <Link to={`/post/${id}`}>
        <button>Show details</button>
      </Link>
      <button onClick={handleShowDetails}>Click to see details</button>
    </div>
  );
};

export default Post;
