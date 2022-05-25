var express = require("express");
var router = express.Router();
const offerModel = require("../models/offers");
const userModel = require("../models/users");

/* GET users listing. */
router.get("/listOffers", async function (req, res, next) {
  const user = await userModel.findOne({ token: req.query.token });

  if (!user) {
    res.json({ result: false, error: "Utilisateur pas trouvé." })
  } else if (!user.userAddress.town) {
    res.json({ result: false, error: "Veuillez completez les champs dans 'Infos Personelles'." })
  } else if (user.jobs.length === 0) {
    res.json({ result: false, error: "Veuillez rajouter des metiers et competences dans la section 'Skills'." })
  } else {
    // Filter of offers where the start date is after today's date 
    // Filter for the offers where the town of the company posting the offer is the same as the town stored by the user in his/her personal space 
    const offers = await offerModel.find({
      company: { address: { town: user.userAddress.town }},
      start_date: { $gt: Date.now() }
    });
    let filterByJobs = [...offers];
    filterByJobs = filterByJobs.filter(offer => {
      for (let job of offer.jobs) {
        // exclude job offers that require a "metier" the user doesn't have
        if (!user.jobs.map(job => job.job_title).includes(job.job_title)) {
          return false
        }
        
        for (let skill of job.skills) {
          // exclude job offers that requires a "metier" with skills beyond the range of the user
          let userSkill = user.jobs.find(j => j.job_title === job.job_title).skills.find(s => s.skill_title === skill.skill_title);
          if (userSkill.experience < skill.experience ||userSkill.level < skill.level) {
            return false
          }
        }
      }
      return true
    });
    res.json({ offers: filterByJobs, user });
  }
});

router.delete("/deleteOffer", async function (req, res, next) {
<<<<<<< HEAD
  var deleteOffer = await offerModel.deleteOne(req.query.offerId);
=======
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

>>>>>>> eddy
  res.json({ offer });
});

module.exports = router;
