// controllers/roleHasPermission.controller.js
const RoleHasPermission = require("../models/RoleHasPermission");

module.exports = {
  getAll: async (req, res) => {
    try {
      const data = await RoleHasPermission.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getByRoleId: async (req, res) => {
    const { role_id } = req.params;
    try {
      const data = await RoleHasPermission.findAll({ where: { role_id } });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  create: async (req, res) => {
    const { permission_id, role_id } = req.body;
    try {
      const newEntry = await RoleHasPermission.create({ permission_id, role_id });
      res.status(201).json(newEntry);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    const { permission_id, role_id } = req.body;
    try {
      const deleted = await RoleHasPermission.destroy({
        where: { permission_id, role_id },
      });
      if (deleted) {
        res.status(200).json({ message: "Deleted successfully" });
      } else {
        res.status(404).json({ error: "Not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
