import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../components/Post/Post";
const HomePage = (props) => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/posts/")
      .then((result) => {
        console.log(result.data.posts);
        setposts(result.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2 className="text-center text-primary">Posts</h2>
      {posts.map((post, idx) => {
        return <Post post={post} key={post._id} />;
      })}
    </div>
  );
};

export default HomePage;
