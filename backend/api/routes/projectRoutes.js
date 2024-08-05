const express = require("express");
const {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController.js");
const authMiddleware = require("../middleware/authMiddleware");
const multer = require("multer");

const router = express.Router();
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    //cb - callback
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

router.get("/", getProjects);
router.post("/", upload.single("image"), addProject);
router.put("/:id", authMiddleware, updateProject);
router.delete("/:id", authMiddleware, deleteProject);

module.exports = router;
