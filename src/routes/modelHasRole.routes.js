const express = require("express");
const router = express.Router();
const controller = require("../controllers/modelHasRole.controller");

// GET all
router.get("/", controller.getAll);

// GET by composite key
router.get("/:role_id/:model_id/:model_type", controller.getByCompositeKey);

// POST (create)
router.post("/", controller.create);

// DELETE by composite key
router.delete("/:role_id/:model_id/:model_type", controller.remove);

module.exports = router;
