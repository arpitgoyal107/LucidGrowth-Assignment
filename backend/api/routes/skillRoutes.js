const express = require("express");
const {
  getSkills,
  addSkill,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillController.js");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getSkills);
router.post("/", addSkill);
router.put("/:id", authMiddleware, updateSkill);
router.delete("/:id", authMiddleware, deleteSkill);

module.exports = router;
