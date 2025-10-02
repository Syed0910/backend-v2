const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const RadpostauthArchive = sequelize.define("RadpostauthArchive", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: '',
  },
  pass: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: '',
  },
  reply: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: '',
  },
  authdate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  nasipaddress: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  nasportid: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  mac: {
    type: DataTypes.TEXT("medium"),
    allowNull: true,
  },
}, {
  tableName: "radpostauth_archive",
  timestamps: false,
});

module.exports = RadpostauthArchive;
