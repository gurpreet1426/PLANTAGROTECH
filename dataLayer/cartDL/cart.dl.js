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

const cartDb = {};

cartDb.Sequelize = Sequelize;
cartDb.sequelize = sequelize;

cartDb.carts = require("../../models/cartModels/carts.model.js")(sequelize, Sequelize);

module.exports = cartDb;