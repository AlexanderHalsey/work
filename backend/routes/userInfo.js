var express = require("express");
var router = express.Router();
const userModel = require("../models/users");

router.post("/update", async function(req, res) {
    const user = await userModel.findOneAndUpdate(
        { token: req.body.token },
        {
            userAddress: {  
                streetName: req.body.adresse,
                town: req.body.ville,
                codePostal: req.body.zipCode
            },
            bornWhen: req.body.dateN,
            bornAt: req.body.lieuN
        }
    );
    res.json({ result: true });
});

module.exports = router;