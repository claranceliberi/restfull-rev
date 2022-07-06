const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  isGoodBoy: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const Member = mongoose.model("Member", DogSchema);

module.exports = { Member };