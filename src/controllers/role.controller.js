// controllers/role.controller.js
const Role = require("../models/role.model");

const RoleController = {
  getAll: async (req, res) => {
    try {
      const roles = await Role.findAll();
      res.json(roles);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const role = await Role.findByPk(req.params.id);
      if (!role) return res.status(404).json({ error: "Role not found" });
      res.json(role);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  create: async (req, res) => {
    try {
      const newRole = await Role.create(req.body);
      res.status(201).json(newRole);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const role = await Role.findByPk(req.params.id);
      if (!role) return res.status(404).json({ error: "Role not found" });

      await role.update(req.body);
      res.json(role);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const deleted = await Role.destroy({ where: { id: req.params.id } });
      if (!deleted) return res.status(404).json({ error: "Role not found" });
      res.json({ message: "Role deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = RoleController;
