const env = process.env.NODE_ENV;

const dbConfig = require("../config/db-config")[env];

console.log(env);

const Sequelize = require("sequelize").Sequelize;

const passwd = process.env.PASSWORD;
const host = process.env.HOST;
// sequelize instance -Connect to db
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, passwd, {
  host: host,
  dialect: dbConfig.dialect,
  logging: false,
  dialectOptions: {
    ssl: true,
  },
});

// Development db
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   logging: false,
// });

// sequelize
//   .authenticate()
//   .then(() => console.log("Db connected..."))
//   .catch((err) => console.log("Error authenticating...", err.message));

module.exports = sequelize;
