const express = require("express");
const router = express.Router();
const controller = require("../controllers/coaRequest.controller");

// Get latest CoA requests (default limit 100)
router.get("/", controller.getAllCoaRequests);

// Get CoA requests by subscriber ID
router.get("/subscriber/:subscriberId", controller.getCoaRequestsBySubscriberId);

// Get CoA requests by username (IMPORTANT: place this before ":id" route)
router.get("/user/:username", controller.getCoaRequestsByUsername);

// Get single CoA request by ID
router.get("/:id", controller.getCoaRequestById);

// Create new CoA request (optional)
router.post("/", controller.createCoaRequest);

// Update CoA request by ID
router.put("/:id", controller.updateCoaRequest);

// Delete CoA request by ID
router.delete("/:id", controller.deleteCoaRequest);

module.exports = router;
