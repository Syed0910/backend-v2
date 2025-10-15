const express = require("express");
const router = express.Router();
const controller = require("../controllers/invoice.controller");

router.get("/", controller.getAll);
router.get("/id/:id", controller.getById);
router.get("/:id", controller.getBySubscriberId);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;
