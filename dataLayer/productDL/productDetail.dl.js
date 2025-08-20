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

const productDetailDb = {};

productDetailDb.Sequelize = Sequelize;
productDetailDb.sequelize = sequelize;

productDetailDb.productDetail = require("../../models/productModels/productDetail.model.js")(sequelize, Sequelize);

module.exports = productDetailDb;