const express = require("express");
const router = express.Router();
const Asset = require("../models/asset-model");

router.get("/", async (req, res) => {
  const assets = await Asset.findAll();
  res.render("assets", {
    assets,
  });
});

module.exports = router;
