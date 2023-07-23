var express = require("express");
const { Employee, Asset, Category } = require("../models/association");
var router = express.Router();

router.get("/", async (req, res, next) => {
  const employees = await Employee.findAll({ include: Asset });
  const assets = await Asset.findAll({ where: { EmployeeId: null } });
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

const issueAsset = async (req, res) => {
  const clientData = req.body;
  const selectedAsset = await Asset.findByPk(clientData.assetId, {
    include: Employee,
  });
  selectedAsset.update({ EmployeeId: clientData.employeeId });
  return `Employee ID - ${clientData.employeeId} issued ASN#${selectedAsset.serialNumber}`;
};

router.post("/", async (req, res, next) => {
  const clientData = req.body;
  let message;
  const categories = await Category.findAll();
  const assets = await Asset.findAll({ where: { EmployeeId: null } });
  const employees = await Employee.findAll();

  if (clientData.employeeId) {
    message = await issueAsset(req, res);
  }
  res.render("issue", {
    employees,
    alert: "d-block",

    filterType: "inactive",
    alertMessage: message,
    categories,
    assets,
  });
});

module.exports = router;
