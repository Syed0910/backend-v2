const Account = require("../models/account.model");

// Get all accounts
exports.getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.findAll();
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get account by ID
exports.getAccountById = async (req, res) => {
  try {
    const account = await Account.findByPk(req.params.id);
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
    res.json(account);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new account
exports.createAccount = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);
    res.status(201).json(newAccount);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update account
exports.updateAccount = async (req, res) => {
  try {
    const account = await Account.findByPk(req.params.id);
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
    await account.update(req.body);
    res.json(account);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete account
exports.deleteAccount = async (req, res) => {
  try {
    const account = await Account.findByPk(req.params.id);
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
    await account.destroy();
    res.json({ message: "Account deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
