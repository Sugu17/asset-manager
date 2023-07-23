var express = require("express");
const { Employee, Asset, Category } = require("../models/association");
var router = express.Router();

router.get("/", async (req, res, next) => {
  const employees = await Employee.findAll({ include: Asset });
  const assets = await Asset.findAll();
  const categories = await Category.findAll();
  const queries = req.query;
  if (queries.filterBy) {
    const filterResponse = employees.filter(
      (employee) => employee.isActive === true
    );
    res.render("issue", {
      employees: filterResponse,
      filterType: "active",
      assets,
      categories,
    });
  } else
    res.render("issue", {
      employees,
      filterType: "inactive",
      assets,
      categories,
    });
});

const updateEmployee = async (req, res, existingEmployee) => {
  const clientData = req.body;
  const updatedEmployee = await existingEmployee.update({
    name: clientData.name,
    phone: clientData.phone,
    department: clientData.department,
    isActive: clientData.isActive ? true : false,
  });
  return `Employee ID - ${updatedEmployee.id} updated with new details`;
};

const addEmployee = async (req, res) => {
  const clientData = req.body;
  const newEmployee = await Employee.create({
    name: clientData.name,
    isActive: clientData.active ?? false,
    phone: clientData.phone,
    department: clientData.department,
  });
  return `Employee ID - ${newEmployee.id} added successfully`;
};

router.post("/", async (req, res, next) => {
  const clientData = req.body;
  let message;
  if (clientData.name) {
    const existingEmployee = await Employee.findByPk(clientData.id);
    if (existingEmployee) {
      message = await updateEmployee(req, res, existingEmployee);
    } else {
      message = await addEmployee(req, res);
    }
  }
  const employees = await Employee.findAll();
  res.render("employees", {
    employees,
    alert: "d-block",
    filterType: "inactive",
    alertMessage: message,
  });
});

router.delete("/:employeeId", async (req, res) => {
  const employeeToBeDeletedId = req.params.employeeId;
  const count = await Employee.destroy({
    where: { id: employeeToBeDeletedId },
  });
  res.send(`Deleted user ${count} employee with id ${employeeToBeDeletedId}`);
});

module.exports = router;
