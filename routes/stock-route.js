const express = require("express");
const router = express.Router();
const { Category, Asset } = require("../models/association");

router.get("/", async (req, res) => {
  const categories = await Category.findAll({ include: Asset });
  const assets = await Asset.findAll();
  console.log(categories);
  res.render("stock", { categories, total: assets.length });
});

module.exports = router;
