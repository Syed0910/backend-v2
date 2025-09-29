const express = require("express");
const router = express.Router();
const controller = require("../controllers/subscriber.controller");

// GET all subscribers
router.get("/", controller.getAll);

// GET subscriber by ID
router.get("/:id", controller.getById);

module.exports = router;
