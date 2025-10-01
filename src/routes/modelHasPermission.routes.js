const express = require("express");
const router = express.Router();
const controller = require("../controllers/modelHasPermission.controller");

// GET all
router.get("/", controller.getAll);

// GET by composite key
router.get("/:permission_id/:model_id/:model_type", controller.getByCompositeKey);

// POST (create)
router.post("/", controller.create);

// DELETE by composite key
router.delete("/:permission_id/:model_id/:model_type", controller.remove);

module.exports = router;
