const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Invoice = sequelize.define("Invoice", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  activation_unique_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subscriber_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  subscriber_username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subscriber_salesperson_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  subscriber_salesperson_username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  action_by_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  action_by_username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isp_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  branch_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  package_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  admin_package_price: {
    type: DataTypes.DOUBLE(8, 2),
  },
  admin_package_profit_type: {
    type: DataTypes.INTEGER,
  },
  admin_package_profit: {
    type: DataTypes.DOUBLE(8, 2),
  },
  salesperson_package_price: {
    type: DataTypes.DOUBLE(8, 2),
  },
  salesperson_package_profit_type: {
    type: DataTypes.INTEGER,
  },
  salesperson_package_profit: {
    type: DataTypes.DOUBLE(8, 2),
  },
  package_extra_fee_group: {
    type: DataTypes.STRING,
  },
  package_extra_fee_total: {
    type: DataTypes.DOUBLE(8, 2),
  },
  activation_extra_fee_group: {
    type: DataTypes.STRING,
  },
  activation_extra_fee_total: {
    type: DataTypes.DOUBLE(8, 2),
  },
  activation_duration_type: {
    type: DataTypes.INTEGER,
  },
  activation_duration: {
    type: DataTypes.INTEGER,
  },
  expiration_date_start: {
    type: DataTypes.STRING,
  },
  expiration_date_end: {
    type: DataTypes.STRING,
  },
  expiration_last_date: {
    type: DataTypes.STRING,
  },
  expiration_new_date: {
    type: DataTypes.STRING,
  },
  quota_session_limit: {
    type: DataTypes.STRING,
  },
  quota_data_limit: {
    type: DataTypes.STRING,
  },
  service_type: {
    type: DataTypes.INTEGER,
  },
  billing_due_date: {
    type: DataTypes.STRING,
  },
  billing_total_amount: {
    type: DataTypes.DOUBLE(8, 2),
  },
  billing_paid_amount: {
    type: DataTypes.DOUBLE(8, 2),
  },
  billing_due_amount: {
    type: DataTypes.DOUBLE(8, 2),
  },
  discount_origin: {
    type: DataTypes.INTEGER,
  },
  discount_origin_type: {
    type: DataTypes.INTEGER,
  },
  discount_origin_amount: {
    type: DataTypes.DOUBLE(8, 2),
  },
  discount_recursive_status: {
    type: DataTypes.INTEGER,
  },
  discount_amount: {
    type: DataTypes.DOUBLE(8, 2),
  },
  discount_before_amount: {
    type: DataTypes.DOUBLE(8, 2),
  },
  discount_after_amount: {
    type: DataTypes.DOUBLE(8, 2),
  },
  payment_method: {
    type: DataTypes.INTEGER,
  },
  payment_id: {
    type: DataTypes.INTEGER,
  },
  payment_date: {
    type: DataTypes.DATE,
  },
  payment_note: {
    type: DataTypes.TEXT,
  },
  header_note: {
    type: DataTypes.STRING,
  },
  body_note: {
    type: DataTypes.STRING,
  },
  footer_note: {
    type: DataTypes.STRING,
  },
  invoice_status: {
    type: DataTypes.INTEGER,
  },
  invoice_type: {
    type: DataTypes.INTEGER,
  },
  invoice_generated_source: {
    type: DataTypes.INTEGER,
  },
  activation_status: {
    type: DataTypes.INTEGER,
  },
  created_at: {
    type: DataTypes.DATE,
  },
  updated_at: {
    type: DataTypes.DATE,
  },
  transaction_fee: {
    type: DataTypes.DOUBLE(8, 2),
  },
  transaction_fee_type: {
    type: DataTypes.INTEGER,
  },
  transaction_fee_amount: {
    type: DataTypes.DOUBLE(8, 2),
  },
}, {
  tableName: "invoices",
  timestamps: false,
  indexes: [
    { fields: ["subscriber_id"] },
    { fields: ["subscriber_salesperson_id"] },
    { fields: ["invoice_status"] },
  ]
});

module.exports = Invoice;
