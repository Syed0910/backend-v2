// routes/roleHasPermission.routes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/roleHasPermission.controller");

// Routes
router.get("/", controller.getAll);
router.get("/:role_id", controller.getByRoleId);
router.post("/", controller.create);
router.delete("/", controller.delete);

module.exports = router;
