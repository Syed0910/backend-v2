const express = require("express");
const router = express.Router();
const controller = require("../controllers/radcheck.controller");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.get("/username/:username", controller.getByUsername);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.put("/username/:username", controller.updateByUsername);
router.delete("/:id", controller.remove);

module.exports = router;
