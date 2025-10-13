const express = require("express");
const router = express.Router();
const controller = require("../controllers/radacct.controller");

// GET /api/radacct?limit=100 → get latest session logs
router.get("/", controller.getAllRadacctLogs);

// ✅ NEW — Get session logs by username
router.get("/username/:username", controller.getRadacctLogsByUsername);

// GET /api/radacct/:id → get a single session log by ID
router.get("/:id", controller.getRadacctLogById);

// POST /api/radacct → create a new log (optional, mostly for testing)
router.post("/", controller.createRadacctLog);

// PUT /api/radacct/:id → update a log
router.put("/:id", controller.updateRadacctLog);

// DELETE /api/radacct/:id → delete a log
router.delete("/:id", controller.deleteRadacctLog);

module.exports = router;
