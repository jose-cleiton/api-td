import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const SequelizeMeta = sequelize.define("sequelize_meta", {
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    primaryKey: true,
  },
  up: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  down: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default SequelizeMeta;
