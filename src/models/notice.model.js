const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Notice = sequelize.define("Notice", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  public_status: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  assign_type: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  assign_to_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  opened_time: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  opened_ip: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  excerpt: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
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
  tableName: "notices",
  timestamps: false,
});

module.exports = Notice;
