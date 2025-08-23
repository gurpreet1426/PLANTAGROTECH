module.exports = (sequelize, Sequelize) => {
  const ProductTags = sequelize.define("producttags", {
    ptagid: {
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
     tagid: {
      type: Sequelize.UUID,
      //foreign: true,
      //defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    ptagstatus: {
      type: Sequelize.CHAR,
      defaultValue: 'Inactive'
    },     
    authorid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    }  
   
  });

  return ProductTags;
};