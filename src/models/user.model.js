// models/User.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    email_verified_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    two_factor_secret: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    two_factor_recovery_codes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    remember_token: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    current_team_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    profile_photo_path: {
      type: DataTypes.STRING(2048),
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    profile_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    identity: {
      type: DataTypes.STRING(255),
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
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    country: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    province: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    city: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    subarea: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    zip: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sms_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    email_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    auto_renew_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    restricted_connection_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    balance_deduction_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    last_login: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    photo: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    dob: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    department: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    billing_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    balance_limit: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    nas_group: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    area_group: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    about: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    created_by_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    created_by_username: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: "users",
    timestamps: true,                // enable timestamps
    createdAt: "created_at",         // map createdAt → created_at
    updatedAt: "updated_at",         // map updatedAt → updated_at
    underscored: false,
  }
);

module.exports = User;
