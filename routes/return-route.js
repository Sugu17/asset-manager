var express = require("express");
const {
  Employee,
  Asset,
  Category,
  AssetEvent,
} = require("../models/association");
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
    where: { EmployeeId: { [Op.ne]: null } },
  });
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

const returnAsset = async (req, res) => {
  const clientData = req.body;

  let assets;
  if (Array.isArray(clientData.assetId)) {
    assets = clientData.assetId;
  } else {
    assets = [clientData.assetId];
  }
  for (const assetId of assets) {
    const selectedAsset = await Asset.findByPk(assetId, {
      include: Employee,
    });
    selectedAsset.update({ EmployeeId: null });
    const newEvent = await AssetEvent.create({
      AssetId: assetId,
      eventMessage: `Asset ID-${clientData.assetId} returned from Employee ID-${clientData.employeeId}`,
    });
  }
  return `Employee ID - ${
    clientData.employeeId
  } returned Asset ID-${assets.join(", ")}`;
};

router.post("/", async (req, res, next) => {
  const clientData = req.body;
  let message;
  const categories = await Category.findAll();
  const assets = await Asset.findAll({ where: { EmployeeId: null } });
  const employees = await Employee.findAll();
  if (clientData.employeeId) {
    message = await returnAsset(req, res);
  }
  res.render("return", {
    employees,
    alert: "d-block",
    filterType: "inactive",
    alertMessage: message,
    categories,
    assets,
  });
});

module.exports = router;
