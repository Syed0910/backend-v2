const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const CoaRequest = sequelize.define("CoaRequest", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  isp_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  branch_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  subscriber_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  command: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  command_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  command_response: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  action_by_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  action_by_username: {
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
  }
}, {
  tableName: "coa_requests",
  timestamps: false,
});

module.exports = CoaRequest;
