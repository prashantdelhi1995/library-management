const express = require("express");
const router = express.Router();
const booksController = require("../controllers/issuedBooks");

// router.get("/get/:id", expenseController.getSingleExpense);

router.get("/getall", booksController.getAllBooks);

router.post("/post", booksController.addNewBook);

// router.put("/update/:id", booksController.editbooks);

router.delete("/remove/:id", booksController.deleteBook);

module.exports = router;
