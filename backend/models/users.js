const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  token: String,
  userAddress: addressSchema,
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "skills" }],
  applications: [applicationSchema],
});

const addressSchema = mongoose.Schema({
  streetName: String,
  streetName2: String,
  town: String,
  zipCode: String,
  province: String,
  country: String,
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

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
