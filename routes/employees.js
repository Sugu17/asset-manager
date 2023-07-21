var express = require("express");
const db = require("../models/db");
const Employee = require("../models/employee-model");

var router = express.Router();

router.get("/", async (req, res, next) => {
  const employees = await Employee.findAll();
  const queries = req.query;

  if (queries.filterBy) {
    const filterResponse = employees.filter(
      (employee) => employee.isActive === true
    );
    res.render("employees", {
      employees: filterResponse,
      filterType: "active",
    });
  } else res.render("employees", { employees, filterType: "inactive" });
});

router.post("/", async (req, res, next) => {
  const data = req.body;
  if (data.name)
    await Employee.create({
      name: data.name,
      isActive: data.active ?? false,
      phone: data.phone,
      department: data.department,
    });
  const employees = await Employee.findAll();
  res.render("employees", {
    employees,
    alert: "d-block",
    filterType: "inactive",
  });
});

module.exports = router;
