var express = require("express");
var router = express.Router();
const offerModel = require("../models/offers");

/* GET users listing. */
router.get("/listOffers", async function (req, res, next) {
  console.log("bonjour");
  var offers = await offerModel.find();

  console.log("list offers", offers);
  res.json({ offers });
});

router.post("/displayOffer", async function (req, res, next) {
  console.log("displayOffer OK :");
  var offer = await offerModel.findById(req.body.offerId);

  console.log("offer", offer);
  res.json({ offer });
});

module.exports = router;
