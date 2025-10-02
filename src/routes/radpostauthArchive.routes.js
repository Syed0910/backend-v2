const express = require("express");
const router = express.Router();
const controller = require("../controllers/radpostauthArchive.controller");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.get("/username/:username", controller.getByUsername);

module.exports = router;
