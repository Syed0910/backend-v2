const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Nas = sequelize.define(
  "Nas",
  {
    id: { type: DataTypes.BIGINT.UNSIGNED, autoIncrement: true, primaryKey: true },
    nasname: { type: DataTypes.STRING },
    shortname: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING },
    ports: { type: DataTypes.INTEGER },
    secret: { type: DataTypes.STRING },
    server: { type: DataTypes.STRING },
    community: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    created_at: { type: DataTypes.DATE },
    updated_at: { type: DataTypes.DATE },
  },
  {
    tableName: "nas",
    timestamps: false,
  }
);

module.exports = Nas;
