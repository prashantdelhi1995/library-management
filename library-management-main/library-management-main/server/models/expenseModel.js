const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const BooksIssued = sequelize.define("books issued", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  category: Sequelize.STRING,
  issue_date: Sequelize.STRING,
  return_date: Sequelize.STRING,
});

module.exports = BooksIssued;
