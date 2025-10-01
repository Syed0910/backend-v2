const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const EmailTemplate = sequelize.define("EmailTemplate", {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  email_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  template: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
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
  updated_by_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  updated_by_username: {
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
}, {
  tableName: "email_templates",
  timestamps: false,
  indexes: [
    {
      fields: ["name"]
    }
  ]
});

module.exports = EmailTemplate;
