import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [returnedBooks, setReturnedBooks] = useState([]);
  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/getall");
    setData(response.data);
    console.log(response.data);
  };

  const loadReturnedBooks = async () => {
    const response = await axios.get(
      "http://localhost:5000/returnedBooks/getall"
    );
    console.log("returned", response.data);
    setReturnedBooks(response.data);
  };
  useEffect(() => {
    loadData();
    loadReturnedBooks();
  }, []);

  const handleDelete = (item) => {
    let id = item.id;
    let fine = item.fine;
    if (
      window.confirm(
        `Are u sure to  return this book ? Your fine amount is :Rs ${fine}`
      )
    ) {
      axios.delete(`http://localhost:5000/api/remove/${id}`);
      axios.post(`http://localhost:5000/returnedBooks/post`, {
        title: item.title,
        category: item.category,
        issue_date: item.issue_date,
        return_date: new Date().toLocaleString(),
        fine_paid: item.fine,
      });
      toast.success("Book returned Successfully");
      setTimeout(() => {
        loadData();
        loadReturnedBooks();
      }, 500);
    }
  };

  return (
    <>
      <div style={{ marginTop: "15px" }}>
        <Link to="/addExpense">
          <button className="btn btn-add">+ Issue New Book</button>
        </Link>
        <table className="styled-table">
          <caption
            style={{
              color: "slateblue",
              fontWeight: "bold",
              marginTop: "40px",
              fontSize: "26px",
            }}
          >
            Issued Books
          </caption>
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>No.</th>
              <th style={{ textAlign: "center" }}>Title</th>
              <th style={{ textAlign: "center" }}>Category</th>
              <th style={{ textAlign: "center" }}>Issue Time</th>
              <th style={{ textAlign: "center" }}>Tentative Reaturn Time</th>
              <th style={{ textAlign: "center" }}>Fine till Now</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              let fine = (
                ((new Date(new Date().toLocaleString()).getTime() -
                  new Date(item.return_date).getTime()) /
                  (1000 * 60 * 60)) *
                100
              ).toFixed();
              item.fine = fine > 0 ? fine : 0;

              return (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.issue_date}</td>
                  <td>{item.return_date}</td>
                  <td>Rs {item.fine}</td>

                  <td>
                    {/* <Link to={`/update/${item.id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link> */}
                    <button
                      className="btn btn-delete"
                      onClick={() => handleDelete(item)}
                    >
                      Return
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <table className="styled-table">
          <caption
            style={{
              color: "slateblue",
              fontWeight: "bold",
              marginTop: "40px",
              fontSize: "26px",
            }}
          >
            Returned Books
          </caption>
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>No.</th>
              <th style={{ textAlign: "center" }}>Title</th>
              <th style={{ textAlign: "center" }}>Category</th>
              <th style={{ textAlign: "center" }}>Issue Time</th>
              <th style={{ textAlign: "center" }}>Return Time</th>
              <th style={{ textAlign: "center" }}>Fine Paid</th>
            </tr>
          </thead>
          <tbody>
            {returnedBooks.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.issue_date}</td>
                  <td>{item.return_date}</td>
                  <td>
                    {item.fine_paid > 0 ? "Rs " + item.fine_paid : "No fine"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
