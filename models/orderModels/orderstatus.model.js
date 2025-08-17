module.exports = (sequelize, Sequelize) => {
  const OrderStatus = sequelize.define("orderstatus", {
    orderstatusid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    orderStatusstatusname: {
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
    },       
    createdat: {
      allowNull: false,
  type: Sequelize.DATE,
  defaultValue: Sequelize.fn('now')
    },
    updatedat: {
      allowNull: false,
  type: Sequelize.DATE,
  defaultValue: Sequelize.fn('now')
    }
  });
  return OrderStatus;
};