// const db = require("../util/database");
const BooksIssued = require("../models/expenseModel");

exports.getAllBooks = (req, res) => {
  BooksIssued.findAll()
    .then((books) => {
      return res.json(books);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addNewBook = (req, res) => {
  const { title, category, issue_date, return_date } = req.body;
  BooksIssued.create({
    title: title,
    category: category,
    issue_date: issue_date,
    return_date: return_date,
  })
    .then((result) => {
      console.log("issued");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteBook = (req, res) => {
  const { id } = req.params;
  BooksIssued.findByPk(id)
    .then((book) => {
      return book.destroy();
    })
    .then((result) => {
      console.log("book Deleted");
    })
    .catch((err) => console.log(err));
};

// exports.getSingleExpense = (req, res) => {
//   const { id } = req.params;
//   Expense.findByPk(id)
//     .then((expense) => {
//       console.log(expense.dataValues);
//       res.send(expense.dataValues);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// const sqlGet = "SELECT * FROM expenses where id=?";
// db.query(sqlGet, id, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   res.send(result);
// });
// };

// exports.editExpense = (req, res) => {
//   const { id } = req.params;
//   const { title, amount, category } = req.body;
//   Expense.update(
//     { title: title, amount: amount, category: category },
//     { where: { id: id } }
//   )
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));

// const sqlUpdate =
//   "UPDATE expenses SET title=?, amount=?,category=? WHERE id=?";
// db.query(sqlUpdate, [title, amount, category, id], (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   res.send(result);
// });
// };
