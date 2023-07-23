const express = require("express");
const router = express.Router();
const { Category } = require("../models/association");

router.get("/", async (req, res) => {
  const categories = await Category.findAll();
  res.render("categories", {
    categories,
  });
});

const updateCategory = async (req, res, existingCategory) => {
  const clientData = req.body;
  const updatedCategory = await existingCategory.update({
    name: clientData.name,
  });
  return `Category ID - ${updatedCategory.id} updated with new details`;
};

const addCategory = async (req, res) => {
  const clientData = req.body;
  const newCategory = await Category.create({
    name: clientData.name,
  });
  return `Category ID - ${newCategory.id} added successfully`;
};

router.post("/", async (req, res, next) => {
  const clientData = req.body;
  let message;
  if (clientData.name) {
    const existingCategory = await Category.findByPk(clientData.id);
    if (existingCategory) {
      message = await updateCategory(req, res, existingCategory);
    } else {
      message = await addCategory(req, res);
    }
  }
  const categories = await Category.findAll();
  res.render("categories", {
    categories,
    alert: "d-block",
    alertMessage: message,
  });
});

router.delete("/:categoryId", async (req, res) => {
  const CategoryToBeDeletedId = req.params.CategoryId;
  const count = await Category.destroy({
    where: { id: CategoryToBeDeletedId },
  });
  res.send(`Deleted user ${count} Category with id ${CategoryToBeDeletedId}`);
});

module.exports = router;
