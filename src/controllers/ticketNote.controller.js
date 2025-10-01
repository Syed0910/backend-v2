// src/controllers/ticketNote.controller.js

const TicketNote = require("../models/ticketNote.model");

exports.getAll = async (req, res) => {
  try {
    const notes = await TicketNote.findAll();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const note = await TicketNote.findByPk(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const note = await TicketNote.create(req.body);
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await TicketNote.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ message: "Note not found" });
    const updatedNote = await TicketNote.findByPk(req.params.id);
    res.json(updatedNote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await TicketNote.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) return res.status(404).json({ message: "Note not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
