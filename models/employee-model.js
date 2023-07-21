const db = require("./db");
const { Sequelise, DataTypes } = require("sequelize");

const Employee = db.define("Employee", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

Employee.sync({ force: true })
  .then(() => console.log("Employee table created...."))
  .catch((err) => console.log("Error creating employee table"));

module.exports = Employee;
