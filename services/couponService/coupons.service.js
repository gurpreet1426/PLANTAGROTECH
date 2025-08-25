const { DATE } = require("sequelize");
const couponsDl = require("../../dataLayer/couponDL/coupons.dl");
const Coupons = couponsDl.coupons;
const Op = couponsDl.Sequelize.Op;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// Create and Save a coupon
exports.create = async (req, res) => {  
   if (!req.body.couponname || req.body.couponname.length == 0) {
    res.status(400).send({
      message: "couponname is invalid"
    });
  }  
  
  // Save coupon in the database
  Coupons.create(req?.body)
    .then(data => {      
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the coupon."
      });
    });
};

// Retrieve all Coupons from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Coupons.findAll({ where: condition })
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

// Find a single coupon with an couponid
exports.findOne = (req, res) => {
  const couponid = req.params.id;

  Coupons.findByPk(couponid)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving coupon with couponid=" + couponid
      });
    });
};

// Update a Coupon by the couponid in the request
exports.update = (req, res) => {
  const couponid = req.params.id;

  Coupons.update(req.body, {
    where: { couponid: couponid }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Coupon was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update coupon with couponid=${couponid}. Maybe Coupon was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Coupon with couponid=" + couponid
      });
    });
};