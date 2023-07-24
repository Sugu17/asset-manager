const express = require("express");
const router = express.Router();
const { Category, Asset, Employee } = require("../models/association");
const { Op } = require("sequelize");
router.get("/", async (req, res) => {
  const categories = await Category.findAll({
    include: {
      model: Asset,
      where: {
        isObsolete: false,
        EmployeeId: null,
      },
    },
  });
  console.log(categories);
  const assets = await Asset.findAll({
    where: { isObsolete: false, EmployeeId: null },
    include: [Employee],
  });
  res.render("stock", { categories, total: assets.length });
});

module.exports = router;
