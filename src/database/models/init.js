import Sales from "./Sales.js";
import Products from "./Products.js";
import SalesProducts from "./SalesProducts.js";
import Users from "./Users.js";
import SequelizeMeta from "./SequelizeMeta.js";

export function initModels(sequelize) {
  const models = {
    Sales: Sales.init(sequelize),
    Products: Products.init(sequelize),
    SalesProducts: SalesProducts.init(sequelize),
    Users: Users.init(sequelize),
    SequelizeMeta: SequelizeMeta.init(sequelize),
  };

  // ...

  return models;
}
