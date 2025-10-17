const express = require("express");
const router = express.Router();
const controller = require("../controllers/invoice.controller");

// Get all invoices
router.get("/", controller.getAll);

// ✅ Get invoices by subscriber ID
router.get("/subscriber/:id", controller.getBySubscriberId);

// ✅ Get a single invoice by its ID
router.get("/:id", controller.getById);

// Create a new invoice
router.post("/", controller.create);

// Update an invoice by ID
router.put("/:id", controller.update);

// Delete an invoice by ID
router.delete("/:id", controller.remove);

module.exports = router;
