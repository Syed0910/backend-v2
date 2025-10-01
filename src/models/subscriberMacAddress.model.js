const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const SubscriberMacAddress = sequelize.define("SubscriberMacAddress", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  subscriber_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  subscriber_username: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  mac_address: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  isp_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  branch_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  created_by_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  created_by_username: {
    type: DataTypes.STRING(255),
    allowNull: true,
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
  tableName: "subscriber_mac_addresses",
  timestamps: false,
});

module.exports = SubscriberMacAddress;
