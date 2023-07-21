const db = require("./db");
const { Sequelise, DataTypes } = require("sequelize");
const mockData = require("../seeders/employee-mock");

const Employee = db.define("Employee", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Employee.sync({ force: true })
//   .then(() => console.log("Employee table created...."))
//   .catch((err) => console.log("Error creating employee table"));

Employee.bulkCreate(mockData)
  .then(() => console.log("Database populated"))
  .catch((err) => console.log("Error in populating db", err.message));

module.exports = Employee;
