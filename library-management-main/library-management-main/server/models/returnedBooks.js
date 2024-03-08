const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Returned_books = sequelize.define("books returned", {
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
  fine_paid: Sequelize.STRING,
});

module.exports = Returned_books;
