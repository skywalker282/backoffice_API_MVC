const express = require("express");
const router = express.Router();

const projectBridge = require("../controllers/project");

router.post("/api/v1/projects", projectBridge.addProject);
router.delete("/api/v1/projects/:projectID", projectBridge.removeProject);

module.exports = router;
