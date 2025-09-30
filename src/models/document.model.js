const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Document = sequelize.define("Document", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  file_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  note: {
    type: DataTypes.TEXT,
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
  document_type: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  uploaded_by_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  file_link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  exported_file_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  subscriber_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  verification_status: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  verification_note: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  verification_date: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  verification_by_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  verification_by_username: {
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
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  uploaded_by_username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: "documents",
  timestamps: false,
});

module.exports = Document;
