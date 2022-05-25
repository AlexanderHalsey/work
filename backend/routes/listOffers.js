var express = require("express");
var router = express.Router();
const offerModel = require("../models/offers");
const userModel = require("../models/users");

/* GET users listing. */
router.get("/listOffers", async function (req, res, next) {
  console.log("bonjour");
  var offers = await offerModel.find();

  console.log("list offers", offers);
  res.json({ offers });
});

router.get("/displayOffer", async function (req, res, next) {
  console.log("displayOffer req.query :", req.query);
  var offer = await offerModel.findById(req.query.offerId);

  console.log("offer", offer);
  res.json({ offer });
});

router.delete("/deleteOffer", async function (req, res, next) {
  var deleteOffer = await userModel.deleteOne(req.query.offerId);
  {
    token: req.body.token;
  }
  {
    $push: {
      id: _id;
    }
  }

  res.json({ offer });
});

router.post("/likeOffer", async function (req, res, next) {
  var likeOffer = await userModel.updateOne(
    { token: req.body.token },
    { $push: { id: _id } }
  );

  res.json({ offer });
});

router.get("/displayLikeOffer", async function (req, res, next) {
  var likeOffer = await userModel.findOne(
    { token: req.body.token },
    { $push: { id: _id } }
  );

  res.json({ offer });
});

module.exports = router;
