import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <div className="Post">
      <h3 className="text-center">{props.post.title}</h3>
      <p>{props.post.body}</p>
      <p><span className="text-primary">Author : </span> {props.post.author}</p>
      <div className="btn-wraper">
        <Link to={`/post/${props.post._id}`}>
          <button className="btn">See Post</button>
        </Link>
      </div>
    </div>
  );
};

export default Post;
