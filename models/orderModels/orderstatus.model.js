module.exports = (sequelize, Sequelize) => {
  const OrderStatus = sequelize.define("orderstatuses", {
    orderstatusid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    orderstatusstatusname: {
      type: Sequelize.CHAR,      
      defaultValue: 'InProgress',
      allowNull: false     
    },
    orderstatus: {
      type: Sequelize.CHAR,      
      defaultValue: 'InProgress',
      allowNull: false     
    },    
    authorid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    }
  });
  return OrderStatus;
};