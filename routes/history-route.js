const express = require("express");
const router = express.Router();
const { Asset, AssetEvent, Category } = require("../models/association");

router.get("/", async (req, res) => {
  const assets = await Asset.findAll({
    include: [AssetEvent, Category],
  });
  const categories = await Category.findAll();
  const filterBy = req.query.filterBy;
  if (filterBy) {
    const filteredResponse = assets.filter(
      (asset) => asset.Category.name === filterBy
    );
    res.render("history", {
      assets: filteredResponse,
      categories,
      activeFilter: filterBy,
    });
  } else {
    res.render("history", {
      assets,
      categories,
    });
  }
});

module.exports = router;
