const express = require("express");
const router = express.Router();
const nasController = require("../controllers/nas.controller");

router.get("/", nasController.getAllNas);
router.get("/:id", nasController.getNasById);
router.post("/", nasController.createNas);
router.put("/:id", nasController.updateNas);
router.delete("/:id", nasController.deleteNas);

module.exports = router;
