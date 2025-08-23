module.exports = (sequelize, Sequelize) => {
  const Carts = sequelize.define("carts", {
    cartid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    couponid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    deliveryaddressid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },  
    cartstatus: {
      type: Sequelize.CHAR,
      defaultValue: 'Inactive'
    },       
    authorid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    }
  });
  return Carts;
};