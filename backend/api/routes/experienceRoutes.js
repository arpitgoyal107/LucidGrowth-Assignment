const express = require("express");
const {
  getExperiences,
  addExperience,
  updateExperience,
  deleteExperience,
} = require("../controllers/experienceController.js");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getExperiences);
router.post("/", addExperience);
router.put("/:id", authMiddleware, updateExperience);
router.delete("/:id", authMiddleware, deleteExperience);

module.exports = router;
