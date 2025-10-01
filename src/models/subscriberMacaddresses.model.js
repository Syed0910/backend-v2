// src/models/subscriberMacaddresses.model.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const SubscriberMacaddresses = sequelize.define("SubscriberMacaddresses", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
  }
}, {
  tableName: "subscriber_macaddresses",
  timestamps: false,
});

module.exports = SubscriberMacaddresses;
