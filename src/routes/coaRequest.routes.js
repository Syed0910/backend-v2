const express = require("express");
const router = express.Router();
const controller = require("../controllers/coaRequest.controller");

router.post("/", controller.createCoaRequest);
router.get("/", controller.getAllCoaRequests);
router.get("/:id", controller.getCoaRequestById);
router.put("/:id", controller.updateCoaRequest);
router.delete("/:id", controller.deleteCoaRequest);

module.exports = router;
