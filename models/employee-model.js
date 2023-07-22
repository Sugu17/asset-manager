const db = require("./db");
const { DataTypes } = require("sequelize");
const mockData = require("../seeders/employee-mock");

const Employee = db.define(
  "Employee",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
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
  },
  {
    tableName: "Employee",
  }
);

Employee.sync()
  .then(() => console.log("Employee table created...."))
  .catch((err) => console.log("Error creating employee table"));

// Employee.drop().then(() => console.log("Db dropped"));

// Employee.bulkCreate(mockData)
//   .then(() => console.log("Database populated"))
//   .catch((err) => console.log("Error in populating db", err.message));

module.exports = Employee;
