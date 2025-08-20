module.exports = (sequelize, Sequelize) => {
  const DeliveryAddress = sequelize.define("deliveryaddress", {
    deliveryaddressid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false     
    },
    name: {
      type: Sequelize.CHAR,
      allowNull: false
    },
    phonenumber: {
            type: Sequelize.CHAR,
            defaultValue: ''
        },
     addresslineone: {
      type: Sequelize.TEXT,      
      //defaultValue: Sequelize.UUIDV4,
      allowNull: false  
    },
    addresslinetwo: {
      type: Sequelize.TEXT,      
      //defaultValue: Sequelize.UUIDV4,
      //allowNull: false  
    },
     landmark: {
      type: Sequelize.TEXT,      
      //defaultValue: Sequelize.UUIDV4,
      //allowNull: false  
    },
    postalcode: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    cityname: {
      type: Sequelize.CHAR,
      allowNull: false,
      defaultValue: '',
    },
   districtname: {
      type: Sequelize.CHAR,
      allowNull: false,
      defaultValue: '',
    },
    statename: {
      type: Sequelize.CHAR,
      allowNull: false,
      defaultValue: '',
    },    
    authorid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },   
    deliveryaddressstatus: {
      type: Sequelize.CHAR,
      defaultValue: 'Inactive'
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
  return DeliveryAddress;
};