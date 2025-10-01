const express = require("express");
const router = express.Router();
const subscriberMacAddressController = require("../controllers/subscriberMacAddress.controller");

router.get("/", subscriberMacAddressController.getAllSubscriberMacAddresses);
router.get("/:id", subscriberMacAddressController.getSubscriberMacAddressById);
router.post("/", subscriberMacAddressController.createSubscriberMacAddress);
router.put("/:id", subscriberMacAddressController.updateSubscriberMacAddress);
router.delete("/:id", subscriberMacAddressController.deleteSubscriberMacAddress);

module.exports = router;
