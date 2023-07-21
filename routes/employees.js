var express = require("express");
const db = require("../models/db");
const Employee = require("../models/employee-model");

var router = express.Router();

router.get("/", async (req, res, next) => {
  const employees = await Employee.findAll();
  res.render("employees", { employees });
});

router.post("/", async (req, res) => {
  const data = req.body;
  await Employee.create({ name: data.name, isActive: data.active ?? false });
  const employees = await Employee.findAll();
  res.render("employees", { employees });
});

module.exports = router;
