var express = require('express');
var router = express.Router();

const PDFParser = require("pdf2json");
const extraireInfos = require("../ocr/extraireInfos");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/sendCV", async function(req,res) {
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

  pdfParser.parseBuffer(req.files.file.data);
});

module.exports = router;
