// routes/role.routes.js
const express = require("express");
const router = express.Router();
const RoleController = require("../controllers/role.controller");

// Routes
router.get("/", RoleController.getAll);
router.get("/:id", RoleController.getById);
router.post("/", RoleController.create);
router.put("/:id", RoleController.update);
router.delete("/:id", RoleController.delete);

module.exports = router;
