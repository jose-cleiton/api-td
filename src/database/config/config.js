// Explicar que tem essa outra forma de não precisar colocar essa linha.
// node -r dotenv/config src/server.js
// https://www.npmjs.com/package/dotenv#preload
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456',
    database: process.env.DB_DATABASE || 'delivery-app',
    host: process.env.DB_HOST  || 'localhost',
    port: process.env.DB_PORT  || 3306,
    dialect: 'mysql',
  }
};