const { DATE } = require("sequelize");
const cartdl = require("../../dataLayer/cartDL/cart.dl");
const Cart = cartdl.carts;
const Op = cartdl.Sequelize.Op;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// Create and Save a cart
exports.create = async (req, res) => {
  const {authorid,couponid,deliveryaddressid}= req?.body; 

  if (!authorid || authorid.length == 0) {
    res.status(400).send({
      message: "Authorid is invalid"
    });
  }  
  if (!deliveryaddressid || deliveryaddressid.length == 0) {
    res.status(400).send({
      message: "Deliveryaddressid is invalid"
    });   
  }
  
  // Create a Cart
  const cart = {
    couponid: couponid,
    deliveryaddressid: deliveryaddressid,
    cartstatus: cartstatus?cartstatus:"pending",
    authorid:authorid
  };

  // Save cart in the database
  Cart.create(cart)
    .then(data => {      
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the cart."
      });
    });
};

// Retrieve all Carts from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Cart.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving carts."
      });
    });
};

// Find a single cart with an cartid
exports.findOne = (req, res) => {
  const cartid = req.params.id;

  Cart.findByPk(cartid)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving cart with cartid=" + cartid
      });
    });
};

// Update a Cart by the cartid in the request
exports.update = (req, res) => {
  const cartid = req.params.id;

  Cart.update(req.body, {
    where: { cartid: cartid }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Cart was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update cart with cartid=${cartid}. Maybe Cart was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Cart with cartid=" + cartid
      });
    });
};