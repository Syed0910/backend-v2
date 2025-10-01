const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ModelHasRole = sequelize.define("ModelHasRole", {
  role_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    primaryKey: true,
  },
  model_type: {
    type: DataTypes.STRING(255),
    allowNull: false,
    primaryKey: true,
  },
  model_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    primaryKey: true,
  },
}, {
  tableName: "model_has_roles",
  timestamps: false,
  indexes: [
    {
      name: "model_has_roles_model_id_model_type_index",
      fields: ["model_id", "model_type"],
    },
  ],
});

module.exports = ModelHasRole;
