const { DATE } = require("sequelize");
const ordersDl = require("../../dataLayer/orderDL/orders.dl");
const Orders = ordersDl.orders;
const Op = ordersDl.Sequelize.Op;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// Create and Save a orders
exports.create = async (req, res) => {
  const {authorid}= req?.body;
   if (!authorid || authorid.length == 0) {
    res.status(400).send({
      message: "Authorid is invalid"
    });
  }  
  
  // Save orders in the database
  Orders.create(req.body)
    .then(data => {      
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the orders."
      });
    });
};

// Retrieve all orders from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Orders.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving orders."
      });
    });
};

// Find a single orders with an orders id
exports.findOne = (req, res) => {
  const orderid = req.params.id;

  Orders.findByPk(orderid)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving orders with orderid=" +orderid
      });
    });
};

// Update a orders by the orderid in the request
exports.update = (req, res) => {
  const orderid = req.params.id;

  Orders.update(req.body, {
    where: { orderid: orderid }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "orders was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update orders with orderid=${orderid}. Maybe orders was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating orders with orderid=" + orderid
      });
    });
};