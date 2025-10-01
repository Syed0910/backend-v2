const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/session.controller");

// Routes
router.get("/", sessionController.getAllSessions);
router.get("/:id", sessionController.getSessionById);
router.delete("/:id", sessionController.deleteSession);

module.exports = router;
