const express = require("express");
const router = express.Router();
const { Asset, AssetEvent, Category } = require("../models/association");

router.get("/", async (req, res) => {
  const assets = await Asset.findAll({ include: [Category] });
  const categories = await Category.findAll();
  const filterBy = req.query.filterBy;
  if (filterBy) {
    const filteredResponse = assets.filter(
      (asset) => asset.Category.name === filterBy
    );
    res.render("scrap", {
      assets: filteredResponse,
      categories,
      activeFilter: filterBy,
    });
  } else {
    res.render("scrap", {
      assets,
      categories,
    });
  }
});

const markObsolete = async (req, res, asset) => {
  const clientData = req.body;
  const updateStatus = await asset.update({
    isObsolete: true,
  });
  console.log(updateStatus);
  const newEvent = await AssetEvent.create({
    AssetId: clientData.assetId,
    eventMessage: `Asset ID-${clientData.assetId} made obsolete`,
  });
  return `Asset ID-${clientData.assetId} made obsolete`;
};

const markActive = async (req, res, asset) => {
  const clientData = req.body;
  const updateStatus = await asset.update({
    isObsolete: false,
  });
  console.log(updateStatus);
  const newEvent = await AssetEvent.create({
    AssetId: clientData.assetId,
    eventMessage: `Asset ID-${clientData.assetId} made active`,
  });
  return `Asset ID-${clientData.assetId} made active`;
};

router.post("/", async (req, res) => {
  const clientData = req.body;
  let message = "";
  if (clientData.assetId) {
    const selAsset = await Asset.findByPk(clientData.assetId);
    if (clientData.isObsolete === "true") {
      message = await markActive(req, res, selAsset);
    } else {
      message = await markObsolete(req, res, selAsset);
    }
  }
  const assets = await Asset.findAll({ include: [Category] });
  const categories = await Category.findAll();
  res.render("scrap", {
    assets,
    categories,
    alert: "d-block",
    alertMessage: message,
  });
});

module.exports = router;
