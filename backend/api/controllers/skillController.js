const Skill = require("../models/Skill");

// Controller to get all skills
const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find(); // Fetch all skills from the database
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to add a new skill
const addSkill = async (req, res) => {
  const { name, level } = req.body;
  try {
    const newSkill = new Skill({ name, level }); // Create a new skill instance
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to update an existing skill by ID
const updateSkill = async (req, res) => {
  const { id } = req.params;
  const { name, level } = req.body;
  try {
    const skill = await Skill.findById(id);
    if (!skill) return res.status(404).json({ message: "Skill not found" });

    // Update the skill if it exists
    skill.name = name || skill.name;
    skill.level = level || skill.level;

    const updatedSkill = await skill.save();
    res.json(updatedSkill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to delete a skill by ID
const deleteSkill = async (req, res) => {
  const { id } = req.params;
  try {
    // Validate the ID
    if (!id) return res.status(400).json({ message: "Invalid ID" });

    const skill = await Skill.findByIdAndDelete(id);

    // Check if the skill exists
    if (!skill) return res.status(404).json({ message: "Skill not found" });

    res.json({ message: "Skill deleted" });
  } catch (err) {
    console.error(err); // Log error for server-side debugging
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getSkills, addSkill, updateSkill, deleteSkill };
