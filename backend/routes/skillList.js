var express = require("express");
var router = express.Router();
const jobsModel = require("../models/jobs");

/* GET users listing. */
router.get("/skills", async function (req, res, next) {
  console.log("hello");
  var skills = await jobsModel.find();

  console.log("show all skillsList", skills);
  res.json({ skills });
});


module.exports = router;
