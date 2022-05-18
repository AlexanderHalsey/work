var express = require("express");
var router = express.Router();
const offerModel = require("../models/offers");

/* GET users listing. */
router.get("/listOffers", async function (req, res, next) {
  console.log("bonjour");
  var offer = await offerModel.find();

  console.log("list offer", offer);
  res.json({ offer });
});

module.exports = router;
