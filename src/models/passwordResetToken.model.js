const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PasswordResetToken = sequelize.define("PasswordResetToken", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,    // optional composite PK as recommended
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: "password_reset_tokens",
  timestamps: false,
});

module.exports = PasswordResetToken;
