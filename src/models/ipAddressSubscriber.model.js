const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const IPAddressSubscriber = sequelize.define("IPAddressSubscriber", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  ip_address_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  subscriber_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  attached_time: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  detached_time: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  attached_by_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  attached_by_username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  detached_by_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  detached_by_username: {
    type: DataTypes.STRING,
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
    type: DataTypes.STRING,
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
  tableName: "ip_address_subscribers",
  timestamps: false,
  indexes: [
    { fields: ["subscriber_id"] },
  ],
});

module.exports = IPAddressSubscriber;
