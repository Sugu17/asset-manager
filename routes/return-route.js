var express = require("express");
const { Employee, Asset, Category } = require("../models/association");
const { Op } = require("sequelize");
var router = express.Router();

router.get("/", async (req, res, next) => {
  const employees = await Employee.findAll({
    include: {
      model: Asset,
      where: {
        EmployeeId: { [Op.ne]: null },
      },
    },
  });
  const assets = await Asset.findAll({
    where: { EmployeeId: { [Op.not]: null } },
  });
  console.log("Employees", employees);
  // console.log("Assets", assets);
  const categories = await Category.findAll();
  const queries = req.query;
  if (queries.filterBy) {
    const filterResponse = employees.filter(
      (employee) => employee.isActive === true
    );
    res.render("return", {
      employees: filterResponse,
      filterType: "active",
      assets,
      categories,
    });
  } else
    res.render("return", {
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
