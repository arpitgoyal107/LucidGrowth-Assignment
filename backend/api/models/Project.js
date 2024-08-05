const mongoose = require("mongoose");
const { Schema } = mongoose;

// Project Schema Model
const projectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [String],
  liveLink: { type: String, required: true },
  sourceCodeLink: { type: String, required: true },
  image: {
    type: String,
    required: true,
  },
});

// create a model instance
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
