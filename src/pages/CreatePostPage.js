import React, { useState } from "react";
import axios from "axios";

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
    <div>
      <div>
        <h1>Create Post Page</h1>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label>Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => {
                setFormData({ ...formData, title: e.target.value });
              }}
            />
          </div>
          <div>
            <label>Body</label>
            <input
              type="text"
              value={formData.body}
              onChange={(e) => {
                setFormData({ ...formData, body: e.target.value });
              }}
            />
          </div>
          <div>
            <label>Author</label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => {
                setFormData({ ...formData, author: e.target.value });
              }}
            />
          </div>
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
