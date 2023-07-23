const db = require("./db");
const { DataTypes } = require("sequelize");

//Category Model
const Category = db.define(
  "Category",
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
      unique: true,
      allowNull: false,
    },
  },
  {
    tableName: "Category",
    timestamps: false,
  }
);

module.exports = Category;
