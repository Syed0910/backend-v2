const express = require("express");
const router = express.Router();
const smsDeliveriesController = require("../controllers/smsDeliveries.controller");

router.get("/", smsDeliveriesController.getAllSmsDeliveries);
router.get("/:id", smsDeliveriesController.getSmsDeliveryById);
router.post("/", smsDeliveriesController.createSmsDelivery);
router.put("/:id", smsDeliveriesController.updateSmsDelivery);
router.delete("/:id", smsDeliveriesController.deleteSmsDelivery);

module.exports = router;
