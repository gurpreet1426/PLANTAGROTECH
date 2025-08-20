const dbConfig = require("../../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const ordersDb = {};

ordersDb.Sequelize = Sequelize;
ordersDb.sequelize = sequelize;

ordersDb.orders = require("../../models/orderModels/orders.model.js")(sequelize, Sequelize);

module.exports = ordersDb;