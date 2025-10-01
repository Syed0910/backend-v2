const express = require("express");
const router = express.Router();
const controller = require("../controllers/passwordResetToken.controller");

router.get("/", controller.getAll);
router.get("/:email", controller.getByEmail);
router.post("/", controller.create);
router.delete("/:email", controller.removeByEmail);

module.exports = router;
