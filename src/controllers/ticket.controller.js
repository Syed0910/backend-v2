// src/controllers/ticket.controller.js

const Ticket = require("../models/ticket.model");

exports.getAll = async (req, res) => {
  try {
    const tickets = await Ticket.findAll();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) return res.status(404).json({ message: "Ticket not found" });
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body);
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Ticket.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ message: "Ticket not found" });

    const updatedTicket = await Ticket.findByPk(req.params.id);
    res.json(updatedTicket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Ticket.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) return res.status(404).json({ message: "Ticket not found" });

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
