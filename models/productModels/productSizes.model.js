module.exports = (sequelize, Sequelize) => {
  const ProductSizes = sequelize.define("productsizes", {
    psizeid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    psizename: {
      type: Sequelize.CHAR,
      allowNull: false
    },    
   psizestatus: {
      type: Sequelize.CHAR,
      defaultValue: 'Inactive'
    },       
    authorid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    } 
  });

  return ProductSizes;
};