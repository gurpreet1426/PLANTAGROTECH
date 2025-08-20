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

const productDb = {};

productDb.Sequelize = Sequelize;
productDb.sequelize = sequelize;

productDb.products = require("../../models/productModels/products.model.js")(sequelize, Sequelize);

module.exports = productDb;