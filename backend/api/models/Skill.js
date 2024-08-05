const mongoose = require("mongoose");
const { Schema } = mongoose;

// Skill Schema Model
const skillSchema = new Schema({
  name: { type: String, required: true },
  level: { type: String, required: true },
});

// create a model instance
const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;
