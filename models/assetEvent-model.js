const db = require("./db");
const { DataTypes } = require("sequelize");

// Asset event model,... Can be an Issue event or return event
const AssetEvent = db.define(
  "Event",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
    eventMessage: DataTypes.STRING,
  },
  {
    tableName: "Event",
  }
);

module.exports = AssetEvent;
