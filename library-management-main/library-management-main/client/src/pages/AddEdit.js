import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  title: "",
  // amount: "",
  category: "",
};

const AddEdit = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const { title, category } = state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category) {
      toast.error("Fill all fields");
    } else {
      console.log(title, category);
      axios
        .post("http://localhost:5000/api/post", {
          title,
          category,
          issue_date: new Date().toLocaleString(),
          return_date: new Date(
            new Date().getTime() + 3600000
          ).toLocaleString(),
        })
        .then(() => {
          setState({ title: "", category: "" });
        })
        .catch((err) => toast.error(err.response.data));
      toast.success("Book issuedSuccessfully");

      setTimeout(() => navigate("/"), 500);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <div style={{ margin: "10px" }}>
        <label htmlFor="title" style={{ margin: "5px" }}>
          Book Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title || ""}
          onChange={handleInputChange}
        ></input>
      </div>
      <div style={{ margin: "10px" }}>
        <label htmlFor="category" style={{ margin: "5px" }}>
          Category:
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={category || ""}
          onChange={handleInputChange}
        ></input>
      </div>
      <input type="submit" value={"Issue"} className="btn btn-add"></input>
    </form>
  );
};

export default AddEdit;
