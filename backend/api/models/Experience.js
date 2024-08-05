const mongoose = require("mongoose");
const { Schema } = mongoose;

// Experience Schema Model
const experienceSchema = new Schema({
  companyName: { type: String, required: true },
  position: { type: String, required: true },
  duration: { type: String, required: true },
  description: { type: String, required: true },
});

// create a model instance
const Experience = mongoose.model("Experience", experienceSchema);

module.exports = Experience;
