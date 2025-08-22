module.exports = (sequelize, Sequelize) => {
  const ProductDetails = sequelize.define("productdetails", {
    pdid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    pid: {
      type: Sequelize.UUID,
      //foreign: true,
      //defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    producvediourl: {
      type: Sequelize.JSON,
      defaultValue: {}
    },
    plantinstructions: {
      type: Sequelize.TEXT,
      allowNull: false
    },    
    organizationid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },   
    authorid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },   
    
  });

  return ProductDetails;
};