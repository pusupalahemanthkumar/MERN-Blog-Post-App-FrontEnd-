// Importing Required Files And Packages Here.
import React, { useState, useEffect } from "react";
import axios from "axios";

// Defining SinglePostPage Component Here.
const SinglePostPage = (props) => {
  const [post, setpost] = useState({});
  const postId = props.match.params.id;
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/posts/get/${postId}`)
      .then((result) => {
        console.log(result.data.post);
        setpost(result.data.post);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postId]);
  return (
    <div className="Post">
      <h3 className="text-center">{post.title}</h3>
      <p>{post.body}</p>
      <p><span className="text-primary">Author : </span> {post.author}</p>
    </div>
  );
};

export default SinglePostPage;
