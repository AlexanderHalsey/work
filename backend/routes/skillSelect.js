var express = require("express");
var router = express.Router();
const skills = require("../models/skills");

/* GET users listing. */
router.get("/skills", async function (req, res, next) {
  console.log("hello");
  var skills = await skillsModel.find();

  console.log("skillsList", skills);
  res.json({ skills });
});

router.post("/skillslist", async function (req, res, next) {
  console.log("skillist :");
  var skillslist = await skillsModel.findById(req.body.skillsId);

  console.log("skillslist", offer);
  res.json({ skillslist });
});

module.exports = router;
