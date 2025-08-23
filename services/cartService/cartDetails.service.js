const { DATE } = require("sequelize");
const cartDetailsDl = require("../../dataLayer/cartDL/cartDetails.dl");
const CartDetails = cartDetailsDl.cartDetails;
const Op = cartDetailsDl.Sequelize.Op;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// Create and Save a cartdetails
exports.create = async (req, res) => {
  const {cartid,pid,pqty,authorid}= req?.body;
  
  if (!cartid || cartid.length == 0) {
    res.status(400).send({
      message: "CartId is invalid"
    });
  }  
  if (!pid || pid.length == 0) {
    res.status(400).send({
      message: "productis is invalid"
    });   
  }
  
  // Create a Cartdetails
  const cartDetails = {
    cartid: cartid,
    pid: pid,
    pqty: pqty?pqty:0,
    authorid:authorid
  };

  // Save cart in the database
  CartDetails.create(cartDetails)
    .then(data => {      
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the cart details."
      });
    });
};

// Retrieve all Cartdetails from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  CartDetails.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cart details."
      });
    });
};

// Find a single cartdetails with an cartdetailid
exports.findOne = (req, res) => {
  const cartdetailid = req.params.id;

  CartDetails.findByPk(cartdetailid)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving cart detail with cartdetailid=" + cartdetailid
      });
    });
};

// Update a Cart detail by the cartdetailid in the request
exports.update = (req, res) => {
  const cartdetailid = req.params.id;

  CartDetails.update(req.body, {
    where: { cartdetailid: cartdetailid }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Cart detail was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update cart detail with cartdetailid=${cartdetailid}. Maybe Cart detail was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Cart detail with cartdetailid=" + cartdetailid
      });
    });
};