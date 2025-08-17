module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define("payment", {
    paymentid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    cartid: {
      type: Sequelize.UUID,
      //primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    transactionid: {
      type: Sequelize.UUID,
      //primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    paymenttype: {
      type: Sequelize.CHAR,
      allowNull: false
    },
   paymentgatewayresponse: {
      type: Sequelize.JSON,
      defaultValue: {}
    },      
    authorid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },   
    paymentstatus: {
      type: Sequelize.CHAR,
      defaultValue: 'Inactive'
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
  return Payment;
};