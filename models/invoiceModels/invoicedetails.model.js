module.exports = (sequelize, Sequelize) => {
  const InvoiceDetails = sequelize.define("invoicedetails", {
    invoiceid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    orderid: {
      type: Sequelize.UUID,
      //primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },    
   productdetail: {
      type: Sequelize.JSON,
      defaultValue: {}
    },
    billingaddress: {
      type: Sequelize.JSON,
      defaultValue: {}
    }, 
    coupondetail: {
      type: Sequelize.JSON,
      defaultValue: {}
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
  return InvoiceDetails;
};