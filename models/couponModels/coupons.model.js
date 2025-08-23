module.exports = (sequelize, Sequelize) => {
  const Coupons = sequelize.define("coupons", {
    couponid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    couponname: {
      type: Sequelize.CHAR,
      allowNull: false
    },
    coupontype: {
      type: Sequelize.CHAR,
      allowNull: false
    },
     maxdiscount: {
      type: Sequelize.INTEGER,      
      //defaultValue: Sequelize.UUIDV4,
      //allowNull: false  
    },
     couponcode: {
      type: Sequelize.CHAR,      
      //defaultValue: Sequelize.UUIDV4,
      //allowNull: false  
    },
     usermaxlimit: {
      type: Sequelize.INTEGER,      
      //defaultValue: Sequelize.UUIDV4,
      //allowNull: false  
    },
    percentagediscount: {
      type: Sequelize.INTEGER,      
      //defaultValue: Sequelize.UUIDV4,
      //allowNull: false  
    },    
    authorid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },    
    couponstatus: {
      type: Sequelize.CHAR,
      defaultValue: 'Inactive'
    }
  });
  return Coupons;
};