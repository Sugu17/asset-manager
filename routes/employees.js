var express = require("express");
var router = express.Router();

const employees = [
  { name: "Subash", active: true },
  { name: "Sugumar", active: true },
  { name: "Saravan", active: true },
];

router.get("/", function (req, res, next) {
  res.status(200).render("employees", { employees: employees });
});

module.exports = router;
