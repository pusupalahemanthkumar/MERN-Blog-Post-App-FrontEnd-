// Importing Required Files And Packages Here.
import React, { useState } from "react";
import axios from "axios";

// Defining CreatePost Component Here.
const CreatePost = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    author: "",
  });
  const formSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/posts/create", {
        title: formData.title,
        body: formData.body,
        author: formData.author,
      })
      .then((result) => {
        console.log(result.data.message);
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <h1 className="text-center">Create Post Page</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label>Body</label>
          <input
            type="text"
            value={formData.body}
            onChange={(e) => {
              setFormData({ ...formData, body: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            value={formData.author}
            onChange={(e) => {
              setFormData({ ...formData, author: e.target.value });
            }}
          />
        </div>
        <button type="submit" className="btn">
          Upload
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
