const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Radusergroup = sequelize.define("Radusergroup", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: '',
  },
  groupname: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: '',
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
}, {
  tableName: "radusergroup",
  timestamps: false,
});

module.exports = Radusergroup;
