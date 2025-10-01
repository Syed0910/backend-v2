const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PrepaidCard = sequelize.define("PrepaidCard", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expiry_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DOUBLE(8, 2),
    allowNull: false,
  },
  total: DataTypes.INTEGER,
  used: DataTypes.INTEGER,
  new: DataTypes.INTEGER,
  character_limit: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  voucher_prefix: DataTypes.STRING,
  voucher_combination: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  card_type: DataTypes.INTEGER,
  package_id: DataTypes.INTEGER,
  reseller_id: DataTypes.INTEGER,
  note: DataTypes.TEXT,
  status: DataTypes.INTEGER,
  isp_id: DataTypes.INTEGER,
  branch_id: DataTypes.INTEGER,
  department_id: DataTypes.INTEGER,
  created_by_id: DataTypes.INTEGER,
  created_by_username: DataTypes.STRING,
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
}, {
  tableName: "prepaid_cards",
  timestamps: false,
});

module.exports = PrepaidCard;
