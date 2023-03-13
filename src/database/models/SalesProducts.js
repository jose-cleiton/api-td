import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import Sales from "./Sales.js";
import Products from "./Products.js";

const SalesProducts = sequelize.define("sales_products", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sale_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Sales,
      key: "id",
    },
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Products,
      key: "id",
    },
  },
});

export default SalesProducts;
