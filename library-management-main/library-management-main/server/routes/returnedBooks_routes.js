const express = require("express");
const router = express.Router();
const returnedBooksControllers = require("../controllers/returnedbooks");

router.get("/getall", returnedBooksControllers.getAllReturnedBooks);

router.post("/post", returnedBooksControllers.addReturnedBooks);

module.exports = router;
