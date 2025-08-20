const { DATE } = require("sequelize");
const couponUsersDl = require("../../dataLayer/couponDL/couponUsers.dl");
const CouponUsers = couponUsersDl.couponUsers;
const Op = couponUsersDl.Sequelize.Op;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// Create and Save a coupon user
exports.create = async (req, res) => {
  //const {couponname,coupontype,maxdiscount,couponcode,usermaxlimit,percentagediscount,couponstatus,authorid}= req?.body;
  const {authorid}= req?.body;
  
  if (!authorid || authorid.length == 0) {
    res.status(400).send({
      message: "Authorid is invalid"
    });
  }  
 

  // Save couponuser in the database
  CouponUsers.create(req.body)
    .then(data => {      
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the coupon user."
      });
    });
};

// Retrieve all Coupon user from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  CouponUsers.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving coupons."
      });
    });
};

// Find a single coupon user with an coupon user id
exports.findOne = (req, res) => {
  const couponuserid = req.params.id;

  CouponUsers.findByPk(couponuserid)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving coupon user with couponuserid=" + couponuserid
      });
    });
};

// Update a Coupon user by the couponuserid in the request
exports.update = (req, res) => {
  const couponuserid = req.params.id;

  CouponUsers.update(req.body, {
    where: { couponuserid: couponuserid }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Coupon user was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update coupon user with couponuserid=${couponuserid}. Maybe coupon user was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Coupon user with couponuserid=" + couponuserid
      });
    });
};