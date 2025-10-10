const express = require("express");
const router = express.Router();
const radpostauthController = require("../controllers/radpostauth.controller");

// ✅ Fetch latest 100 records
router.get("/", radpostauthController.getAllRadpostauth);

// ✅ Fetch by ID
router.get("/:id", radpostauthController.getRadpostauthById);

// ✅ Fetch latest 100 records by username
router.get("/username/:username", radpostauthController.getRadpostauthByUsername);

module.exports = router;
