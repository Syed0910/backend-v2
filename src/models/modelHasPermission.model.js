const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ModelHasPermission = sequelize.define("ModelHasPermission", {
  permission_id: {
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
  tableName: "model_has_permissions",
  timestamps: false,
  indexes: [
    {
      name: "model_has_permissions_model_id_model_type_index",
      fields: ["model_id", "model_type"],
    },
  ],
});

module.exports = ModelHasPermission;
