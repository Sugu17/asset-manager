const sequelise = require("../models/index").sequelize;
const { Sequelise, DataTypes } = require("sequelize");

const Employee = sequelise.define("Employee", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});
