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

// Relationship
Category.hasMany(Asset);
Asset.belongsTo(Category);

Category.sync({ force: true }).then(() =>
  console.log("Category tables synced...")
);
Asset.sync({ force: true }).then(() => console.log("Asset tables synced..."));

module.exports = Asset;
