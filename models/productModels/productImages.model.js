module.exports = (sequelize, Sequelize) => {
  const ProductImages = sequelize.define("productimages", {
    pimgid: {
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
    pimgurl: {
      type: Sequelize.CHAR,
      allowNull: false
    },
    pimgstatus: {
      type: Sequelize.CHAR,
      defaultValue: 'Inactive'
    },   
    pimgranking: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },   
    authorid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    }
  });

  return ProductImages;
};