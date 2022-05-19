const mongoose = require("mongoose");

const skillsSchema = mongoose.Schema({
  jobRole: String,
  skillLevel: Number,
  group: Number,
});

const skillsModel = mongoose.model("skills", skillsSchema);

module.exports = skillsModel;
