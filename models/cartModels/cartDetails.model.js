module.exports = (sequelize, Sequelize) => {
  const CartDetails = sequelize.define("cartdetails", {
    cartdetailid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    cartid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    pid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    pqty: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0, 
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
  return CartDetails;
};