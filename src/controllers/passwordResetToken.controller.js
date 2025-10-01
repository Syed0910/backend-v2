const PasswordResetToken = require("../models/passwordResetToken.model");

// GET all tokens
exports.getAll = async (req, res) => {
  try {
    const tokens = await PasswordResetToken.findAll();
    res.json(tokens);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET tokens by email
exports.getByEmail = async (req, res) => {
  try {
    const tokens = await PasswordResetToken.findAll({
      where: { email: req.params.email },
    });
    res.json(tokens);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE a new reset token
exports.create = async (req, res) => {
  try {
    const token = await PasswordResetToken.create(req.body);
    res.status(201).json(token);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE all tokens for an email (cleanup)
exports.removeByEmail = async (req, res) => {
  try {
    const count = await PasswordResetToken.destroy({
      where: { email: req.params.email },
    });
    res.json({ message: `${count} token(s) deleted for ${req.params.email}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
