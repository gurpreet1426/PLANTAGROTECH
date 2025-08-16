module.exports = (sequelize, Sequelize) => {
  const ProductSize = sequelize.define("productsize", {
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

  return ProductSize;
};