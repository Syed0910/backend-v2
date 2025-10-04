const Invoice = require("../models/invoice.model");

exports.getAll = async (req, res) => {
  try {
    const invoices = await Invoice.findAll();
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const invoice = await Invoice.findByPk(req.params.id);
    if (!invoice) return res.status(404).json({ message: "Invoice not found" });
    res.json(invoice);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getBySubscriberId = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch all invoices for this subscriber
    const invoices = await Invoice.findAll({
      where: { subscriber_id :id},
      order: [["created_at", "DESC"]], // optional: newest first
    });

    if (!invoices || invoices.length === 0) {
      return res.status(404).json({ message: "No invoices found for this subscriber" });
    }

    res.json(invoices);
  } catch (err) {
    console.error("Error fetching invoices:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.create = async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body);
    res.status(201).json(invoice);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const invoice = await Invoice.findByPk(req.params.id);
    if (!invoice) return res.status(404).json({ message: "Invoice not found" });

    await invoice.update(req.body);
    res.json(invoice);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const invoice = await Invoice.findByPk(req.params.id);
    if (!invoice) return res.status(404).json({ message: "Invoice not found" });

    await invoice.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
