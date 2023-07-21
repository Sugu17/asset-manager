var express = require("express");
const db = require("../models/db");
const Employee = require("../models/employee-model");

var router = express.Router();

router.get("/", async (req, res, next) => {
  const employees = await Employee.findAll();
  res.render("employees", { employees, filterType: "inactive" });
});

router.post("/active", async (req, res) => {
  const employees = await Employee.findAll();
  console.log(req.body);
  res.render("employees", {
    employees: employees.filter((emp) => emp.isActive === true),
    filterType: "active",
  });
});

router.post("/new", async (req, res) => {
  const data = req.body;
  await Employee.create({ name: data.name, isActive: data.active ?? false });
  const employees = await Employee.findAll();
  res.render("employees", { employees });
});

module.exports = router;
