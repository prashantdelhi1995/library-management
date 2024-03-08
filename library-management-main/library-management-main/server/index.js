const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = require("./util/database");
const issuedBooksRoutes = require("./routes/issued_books");
const returnedBooksRoutes = require("./routes/returnedBooks_routes");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/returnedBooks", returnedBooksRoutes);
app.use("/api", issuedBooksRoutes);

sequelize
  .sync()
  .then((result) => {
    console.log(result);
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
