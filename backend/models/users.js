const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  streetName: String,
  town: String,
  zipCode: String,
});

const applicationSchema = mongoose.Schema({
  employerRead: Boolean,
  employerResponse: {
    type: ["Pending", "Accepted", "Refused"],
    default: "Pending",
  },
  applicationDecision: {
    type: ["Pending", "Accepted", "Refused"],
    default: "Pending",
  },
});
const userSchema = mongoose.Schema({
  nom: String,
  prenom: String,
  email: String,
  phone: String,
  password: String,
  token: String,
  blackListOffers: [{ type: mongoose.Schema.Types.ObjectId, ref: "offers" }],
  likesOfferIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "offers" }],
  userAddress: addressSchema,
  jobs: [{
    job_title: String,
    skills: [{
      skill_title: String,
      experience: Number,
      level: Number
    }]
  }],
  applications: [applicationSchema],
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
