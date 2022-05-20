var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var userModel = require("../models/users");
var addressModel = require("../models/users");

var uid2 = require("uid2");

const PDFParser = require("pdf2json");
const extraireInfos = require("../ocr/extraireInfos");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/inscription", async function (req, res, next) {
  var error = [];
  var result = false;
  var saveUser = null;
  var token = null;

  /*const data = await userModel.findOne({
    email: req.body.emailFromFront,
  });

  if (data != null) {
    error.push("utilisateur déjà présent");
  }

  if (
    req.body.usernameFromFront == "" ||
    req.body.emailFromFront == "" ||
    req.body.passwordFromFront == ""
  ) {
    error.push("champs vides");
  }*/

  if (error.length == 0) {
    var hash = bcrypt.hashSync(req.body.passwordFromFront, 10);
    var newUser = new userModel({
      city: req.body.cityFromFront,
      firstname: req.body.firstnameFromFront,
      lastname: req.body.lastnameFromFront,
      place: req.body.placeFromFront,
      password: hash,
      confpassword: hash,
      token: uid2(32),
      lang: "fr",
    });

    saveUser = await newUser.save();

    if (saveUser) {
      result = true;
      token = saveUser.token;
    }
  }

  res.json({ result, saveUser, error, token });
});

router.post("sendCV", function(req,res) {
  const pdfParser = new PDFParser();
  const callbackFunc = callback => {
    pdfParser.on("pdfParser_dataReady", pdfData => {
      callback(pdfData);
    });
  };
  callbackFunc(async result => {
    const infoExtracted = await extraireInfos(result);
    res.json(infoExtracted);
  })
});

module.exports = router;
