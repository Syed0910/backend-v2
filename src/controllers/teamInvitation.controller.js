// src/controllers/teamInvitation.controller.js

const TeamInvitation = require("../models/teamInvitation.model");

exports.getAll = async (req, res) => {
  try {
    const invitations = await TeamInvitation.findAll();
    res.json(invitations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const invitation = await TeamInvitation.findByPk(req.params.id);
    if (!invitation) return res.status(404).json({ message: "Invitation not found" });
    res.json(invitation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newInvite = await TeamInvitation.create(req.body);
    res.status(201).json(newInvite);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await TeamInvitation.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) return res.status(404).json({ message: "Invitation not found" });

    const updatedInvite = await TeamInvitation.findByPk(req.params.id);
    res.json(updatedInvite);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await TeamInvitation.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) return res.status(404).json({ message: "Invitation not found" });

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
