const RadGroupReply = require('../models/radGroupReply.model');

module.exports = {
  async index(req, res) {
    try {
      const data = await RadGroupReply.findAll();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async show(req, res) {
    try {
      const item = await RadGroupReply.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Not found' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async store(req, res) {
    try {
      const newItem = await RadGroupReply.create(req.body);
      res.status(201).json(newItem);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const item = await RadGroupReply.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Not found' });

      await item.update(req.body);
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async destroy(req, res) {
    try {
      const item = await RadGroupReply.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Not found' });

      await item.destroy();
      res.json({ message: 'Deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
