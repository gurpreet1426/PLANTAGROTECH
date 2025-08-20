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

const paymentDb = {};

paymentDb.Sequelize = Sequelize;
paymentDb.sequelize = sequelize;

paymentDb.payment = require("../../models/paymentModels/payment.model.js")(sequelize, Sequelize);

module.exports = paymentDb;