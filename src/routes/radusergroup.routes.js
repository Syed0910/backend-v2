const express = require("express");
const router = express.Router();
const controller = require("../controllers/radusergroup.controller");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.get("/username/:username", controller.getByUsername);
router.post("/", controller.create);

module.exports = router;
