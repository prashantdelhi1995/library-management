// const mysql = require("mysql2");

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "Nidhi@1993",
//   database: "completenode",
// });

// module.exports = db;

const Sequelize = require("sequelize");
const sequelize = new Sequelize("library", "root", "Nidhi@1993", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
