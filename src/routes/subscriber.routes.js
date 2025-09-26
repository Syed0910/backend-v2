const express = require("express");
const router = express.Router();
const controller = require("../controllers/subscriber.controller");

// GET all
router.get("/", controller.getAll);

// GET by ID
router.get("/:id", controller.getById);

module.exports = router;
