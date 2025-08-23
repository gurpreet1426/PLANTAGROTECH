module.exports = (sequelize, Sequelize) => {
  const Orders = sequelize.define("orders", {
    orderid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    orderstatusid: {
      type: Sequelize.UUID,
      //primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    paymentid: {
      type: Sequelize.UUID,
      //primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    deliveryaddressid: {
      type: Sequelize.UUID,
      //primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    sellerid: {
      type: Sequelize.UUID,
      //primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },    
   ordertotalamount: {
      type: Sequelize.JSON,
      defaultValue: {}
    },      
    authorid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    }
  });
  return Orders;
};