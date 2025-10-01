const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Otp = sequelize.define("Otp", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  method: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  otp_code: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  otp_token: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  otp_time_limit: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  otp_message: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  owner_type: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  owner_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  owner_username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  send_type: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  send_by_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  send_by_username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  send_time: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  send_from: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  verified_time: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  source_type: {
    type: DataTypes.INTEGER,
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
  tableName: "otps",
  timestamps: false,
  indexes: [
    {
      name: "otps_otp_code_index",
      fields: ["otp_code"]
    },
    {
      name: "otps_phone_number_index",
      fields: ["phone_number"]
    }
  ]
});

module.exports = Otp;
