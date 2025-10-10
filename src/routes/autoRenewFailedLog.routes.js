const express = require("express");
const router = express.Router();
const controller = require("../controllers/autoRenewFailedLog.controller");

// GET all logs (optionally limit to latest 100)
router.get("/", controller.getAll);

// GET single log by ID
router.get("/:id", controller.getById);

// CREATE a new log
router.post("/", controller.create);

// UPDATE an existing log by ID
router.put("/:id", controller.update);

// DELETE a log by ID
router.delete("/:id", controller.remove);

module.exports = router;
