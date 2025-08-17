module.exports = (sequelize, Sequelize) => {
  const CouponUsers = sequelize.define("couponusers", {
    couponuserid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    couponid: {
      type: Sequelize.UUID,      
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },   
    userlimitcount: {
      type: Sequelize.INTEGER,      
      //defaultValue: Sequelize.UUIDV4,
      //allowNull: false  
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
  return CouponUsers;
};