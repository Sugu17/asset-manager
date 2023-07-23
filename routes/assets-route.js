const express = require("express");
const router = express.Router();
const Asset = require("../models/asset-model");
const Category = require("../models/category-model");

router.get("/", async (req, res) => {
  const assets = await Asset.findAll({ include: Category });
  const categories = await Category.findAll();
  const filterBy = req.query.filterBy;
  if (filterBy) {
    const filteredResponse = assets.filter(
      (asset) => asset.Category.name === filterBy
    );
    res.render("assets", {
      assets: filteredResponse,
      categories,
      activeFilter: filterBy,
    });
  } else {
    res.render("assets", {
      assets,
      categories,
    });
  }
});

const updateAsset = async (req, res, existingAsset) => {
  const clientData = req.body;
  const updatedAsset = await existingAsset.update({
    make: clientData.make,
    model: clientData.model,
    series: clientData.series,
    serialNumber: clientData.serialNumber,
    CategoryId: +clientData.category,
  });
  return `Asset ID - ${updatedAsset.id} updated with new details`;
};

const addAsset = async (req, res) => {
  const clientData = req.body;
  const newAsset = await Asset.create({
    make: clientData.make,
    model: clientData.model,
    series: clientData.series,
    serialNumber: clientData.serialNumber,
    CategoryId: +clientData.category,
  });
  // .then(() => console.log("Asset added successfully"))
  // .catch((err) => console.log("Error adding asset!", err));
  return `Asset ID - ${newAsset.id} added successfully`;
};

router.post("/", async (req, res, next) => {
  const clientData = req.body;
  console.log("Asset data", clientData);
  let message;
  if (clientData.make) {
    const existingAsset = await Asset.findByPk(clientData.id);
    if (existingAsset) {
      message = await updateAsset(req, res, existingAsset);
    } else {
      message = await addAsset(req, res);
    }
  }
  const assets = await Asset.findAll({ include: Category });
  const categories = await Category.findAll();
  res.render("assets", {
    assets,
    categories,
    alert: "d-block",
    alertMessage: message,
  });
});

router.delete("/:AssetId", async (req, res) => {
  const AssetToBeDeletedId = req.params.AssetId;
  const count = await Asset.destroy({
    where: { id: AssetToBeDeletedId },
  });
  res.send(`Deleted user ${count} Asset with id ${AssetToBeDeletedId}`);
});

module.exports = router;
