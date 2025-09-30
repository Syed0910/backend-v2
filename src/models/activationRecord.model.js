const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ActivationRecord = sequelize.define("ActivationRecord", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  activation_unique_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  group_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  record_key: {
    type: DataTypes.STRING,
    allowNull: true
  },
  record_value: {
    type: DataTypes.STRING,
    allowNull: true
  },
  reference_type: {
    type: DataTypes.STRING,
    allowNull: true
  },
  reference_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: true
  },
  created_by_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false
  },
  created_by_username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: "activation_records",
  timestamps: false
});

module.exports = ActivationRecord;
