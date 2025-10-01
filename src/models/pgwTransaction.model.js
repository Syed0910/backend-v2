const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PgwTransaction = sequelize.define("PgwTransaction", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  ref_id: DataTypes.STRING,
  gateway_type: DataTypes.INTEGER,
  amount: DataTypes.DOUBLE(8, 2),
  currency: DataTypes.STRING,
  method: DataTypes.INTEGER,
  method_details: DataTypes.TEXT,
  request_url: DataTypes.TEXT,
  request_response: DataTypes.TEXT,
  request_hash: DataTypes.TEXT,
  attributes: DataTypes.TEXT,
  redirect_status: DataTypes.INTEGER,
  redirect_url: DataTypes.TEXT,
  payment_ipn_status: DataTypes.INTEGER,
  payment_status: DataTypes.INTEGER,
  activation_status: DataTypes.INTEGER,
  activation_package_id: DataTypes.INTEGER,
  invoice_id: DataTypes.INTEGER,
  payer_type: DataTypes.INTEGER,
  payer_id: DataTypes.INTEGER,
  payer_username: DataTypes.STRING,
  payer_panel_type: DataTypes.INTEGER,
  isp_id: DataTypes.INTEGER,
  branch_id: DataTypes.INTEGER,
  created_by_id: DataTypes.INTEGER,
  created_by_username: DataTypes.STRING,
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
}, {
  tableName: "pgw_transactions",
  timestamps: false,
});

module.exports = PgwTransaction;
