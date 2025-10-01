const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const NasDetails = sequelize.define("NasDetails", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  nas_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  nas_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nas_api: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  nas_ip: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nas_username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nas_password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nas_type: {
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
  parent: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  checked_time: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  api_port: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  incoming_port: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  disconnect_attributes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  allocation_attributes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  created_by: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  updated_by: {
    type: DataTypes.INTEGER,
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
  tableName: "nas_details",
  timestamps: false, // Since you're using custom timestamp fields
});

module.exports = NasDetails;
