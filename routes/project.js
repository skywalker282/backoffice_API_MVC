const express = require("express");
const router = express.Router();

const projectBridge = require("../controllers/project");

router.get("/api/v1/projects", projectBridge.getAllProjects);
