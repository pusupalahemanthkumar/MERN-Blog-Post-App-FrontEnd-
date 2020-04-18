import React, { useState, useEffect } from "react";
import axios from "axios";
// import Post from "../components/Post/Post";
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
    <div>
      <h2>Post</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>{post.author}</p>
    </div>
  );
};

export default SinglePostPage;
