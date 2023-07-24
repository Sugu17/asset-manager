const db = require("./db");
const Asset = require("./asset-model");
const Category = require("./category-model");
const Employee = require("./employee-model");
const AssetEvent = require("./assetEvent-model");

// Events and Employee
// Employee.hasMany(AssetEvent);
// AssetEvent.belongsToMany(Employee);

// Asset and Event
Asset.hasMany(AssetEvent);
AssetEvent.belongsTo(Asset);

// Employee and Asset
Employee.hasMany(Asset);
Asset.belongsTo(Employee);

// Category and Asset
Category.hasMany(Asset);
Asset.belongsTo(Category);

db.sync({ force: false }).then(() =>
  console.log("Synced models with database")
);

module.exports = { Asset, Category, Employee, AssetEvent };
