const db = require("./db");
const { DataTypes } = require("sequelize");
const Category = require("./category-model");

// Asset model
const Asset = db.define(
  "Asset",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
    serialNumber: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    series: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "Asset",
    timestamps: false,
  }
);

// Asset.create({
//   make: "Dell",
//   model: "XPS",
//   series: "15",
//   serialNumber: "23244309",
//   CategoryId: 1,
// })
//   .then("Asset created")
//   .catch((err) => console.log("Error adding asset", err));

// Asset.create({
//   make: "HP",
//   model: "Omen",
//   series: "15",
//   serialNumber: "232443086",
//   CategoryId: 1,
// })
//   .then("Asset created")
//   .catch((err) => console.log("Error adding asset", err));

module.exports = Asset;
