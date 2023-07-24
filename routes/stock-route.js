const express = require("express");
const router = express.Router();
const { Category, Asset } = require("../models/association");

router.get("/", async (req, res) => {
  const categories = await Category.findAll({
    include: {
      model: Asset,
      where: {
        isObsolete: false,
      },
    },
  });

  const { count, assets } = await Asset.findAndCountAll({
    where: { isObsolete: false },
  });
  console.log(assets);
  res.render("stock", { categories, total: count });
});

module.exports = router;
