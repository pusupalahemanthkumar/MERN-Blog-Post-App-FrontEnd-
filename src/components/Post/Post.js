import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <div>
      <h3>{props.post.title}</h3>
      <p>{props.post.body}</p>
      <p>{props.post.author}</p>

      <Link to={`/post/${props.post._id}`}>
        <button>See Post</button>
      </Link>
    </div>
  );
};

export default Post;
