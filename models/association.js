const db = require("./db");
const Asset = require("./asset-model");
const Category = require("./category-model");
const Employee = require("./employee-model");

// Employee and Asset
Employee.hasMany(Asset);
Asset.belongsTo(Employee);
// Relationship
Category.hasMany(Asset);
Asset.belongsTo(Category);

db.sync({ force: false }).then(() =>
  console.log("Synced models with database")
);

module.exports = { Asset, Category, Employee };
