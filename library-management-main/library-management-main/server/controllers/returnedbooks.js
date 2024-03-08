const Returned_books = require("../models/returnedBooks");

exports.getAllReturnedBooks = (req, res) => {
  Returned_books.findAll()
    .then((books) => {
      return res.json(books);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addReturnedBooks = (req, res) => {
  const { title, category, issue_date, return_date, fine_paid } = req.body;
  Returned_books.create({
    title: title,
    category: category,
    issue_date: issue_date,
    return_date: return_date,
    fine_paid: fine_paid,
  })
    .then((result) => {
      console.log("added");
    })
    .catch((err) => {
      console.log(err);
    });
};
