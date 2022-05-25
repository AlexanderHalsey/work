var express = require("express");
var router = express.Router();
const jobsModel = require("../models/jobs");
const userModel = require("../models/users");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  var skills = await jobsModel.find();
  res.json({ skills });
});

router.post("/newSkill", async function(req, res) {

  const user = await userModel.findOne({ token: req.body.userToken });

  if (!user) {
    res.json({ result: false, error: "Utilisateur pas trouvé." })
  } else {
    user.jobs.push({
      job_title: req.body.jobTitleFromFront,
      skills: req.body.skillsFromFront.map(skill => {
        return {
          skill_title: skill,
          experience: 0,
          level: 0,
        }
      })
    })
    var userSaved = await user.save();

    res.json({ result: userSaved });
  }
})

router.post("/updateSkill", async function(req, res) {
  const user = await userModel.findOne({ token: req.body.userToken });
  if (!user) {
    res.json({ result: false, error: "Utilisateur pas trouvé." })
  } else {
    let skillToChange = user.jobs.find(job => job.job_title === req.body.jobTitleFromFront).skills.find(skill => skill.skill_title === req.body.skillTitleFromFront);
    skillToChange.experience = req.body.skillExperienceFromFront;
    skillToChange.level = req.body.skillLevelFromFront
    var userSaved = await user.save();

    res.json({ result: userSaved });
  }
});




module.exports = router;
