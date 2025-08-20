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

const productSizesDb = {};

productSizesDb.Sequelize = Sequelize;
productSizesDb.sequelize = sequelize;

productSizesDb.productSizes = require("../../models/productModels/productSizes.model.js")(sequelize, Sequelize);

module.exports = productSizesDb;