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

const productdb = {};

productdb.Sequelize = Sequelize;
productdb.sequelize = sequelize;

productdb.products = require("../../models/productModels/product.model.js")(sequelize, Sequelize);

module.exports = productdb;