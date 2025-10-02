// src/models/subscriberServices.model.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const SubscriberServices = sequelize.define("SubscriberServices", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  package_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  subscriber_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  action_by_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  action_by_username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: "subscriber_services",
  timestamps: false,
});

module.exports = SubscriberServices;
