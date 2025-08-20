module.exports = (sequelize, Sequelize) => {
  const ProductDetail = sequelize.define("productdetail", {
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

  return ProductDetail;
};