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

const couponsDb = {};

couponsDb.Sequelize = Sequelize;
couponsDb.sequelize = sequelize;

couponsDb.coupons = require("../../models/couponModels/coupons.model.js")(sequelize, Sequelize);

module.exports = couponsDb;