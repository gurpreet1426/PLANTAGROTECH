module.exports = (sequelize, Sequelize) => {
  const Tags = sequelize.define("tags", {
    tagid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    tagname: {
      type: Sequelize.CHAR,
      allowNull: false
    },    
   tagstatus: {
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

  return Tags;
};