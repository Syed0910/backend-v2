// src/controllers/ticketReply.controller.js

const TicketReply = require("../models/ticketReply.model");

exports.getAll = async (req, res) => {
  try {
    const replies = await TicketReply.findAll();
    res.json(replies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const reply = await TicketReply.findByPk(req.params.id);
    if (!reply) return res.status(404).json({ message: "Reply not found" });
    res.json(reply);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const reply = await TicketReply.create(req.body);
    res.status(201).json(reply);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await TicketReply.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ message: "Reply not found" });
    const updatedReply = await TicketReply.findByPk(req.params.id);
    res.json(updatedReply);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await TicketReply.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) return res.status(404).json({ message: "Reply not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
