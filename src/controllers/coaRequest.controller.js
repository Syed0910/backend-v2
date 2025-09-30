const CoaRequest = require("../models/coaRequest.model");

exports.getAll = async (req, res) => {
  try {
    const requests = await CoaRequest.findAll();
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const request = await CoaRequest.findByPk(req.params.id);
    if (!request) return res.status(404).json({ message: "Not found" });
    res.json(request);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const request = await CoaRequest.create(req.body);
    res.status(201).json(request);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const request = await CoaRequest.findByPk(req.params.id);
    if (!request) return res.status(404).json({ message: "Not found" });

    await request.update(req.body);
    res.json(request);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const request = await CoaRequest.findByPk(req.params.id);
    if (!request) return res.status(404).json({ message: "Not found" });

    await request.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
