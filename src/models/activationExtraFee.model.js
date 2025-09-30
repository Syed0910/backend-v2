const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ActivationExtraFee = sequelize.define("ActivationExtraFee", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  activation_group_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  subscriber_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  package_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  custom_invoice_entry_type: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true
  },
  item_quantity: {
    type: DataTypes.DOUBLE(8, 2),
    allowNull: true
  },
  item_unit_type: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  amount: {
    type: DataTypes.DOUBLE(8, 2),
    allowNull: true
  },
  isp_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  branch_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  created_by: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  updated_by: {
    type: DataTypes.INTEGER,
    allowNull: true
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
  tableName: "activation_extra_fees",
  timestamps: false
});

module.exports = ActivationExtraFee;
