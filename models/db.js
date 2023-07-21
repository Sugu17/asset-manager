const dbConfig = require("../config/db-config");

const Sequelize = require("sequelize").Sequelize;

// sequelize instance -Connect to db
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  logging: false,
});

// sequelize
//   .authenticate()
//   .then(() => console.log("Db connected..."))
//   .catch((err) => console.log("Error authenticating...", err.message));

module.exports = sequelize;
