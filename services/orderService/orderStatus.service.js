const { DATE } = require("sequelize");
const orderStatusDl = require("../../dataLayer/orderDL/orderStatus.dl");
const OrderStatus = orderStatusDl.orderStatus;
const Op = orderStatusDl.Sequelize.Op;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// Create and Save a order status
exports.create = async (req, res) => {
  const {orderstatusstatusname}= req?.body;
   if (!orderstatusstatusname || orderstatusstatusname.length == 0) {
    res.status(400).send({
      message: "Order status statusname is invalid"
    });
  }  
  
  // Save order status in the database
  OrderStatus.create(req.body)
    .then(data => {      
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the order status."
      });
    });
};

// Retrieve all order status from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  OrderStatus.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving order status."
      });
    });
};

// Find a single order status with an order status id
exports.findOne = (req, res) => {
  const orderstatusid = req.params.id;

  OrderStatus.findByPk(orderstatusid)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving order status with orderstatusid=" +orderstatusid
      });
    });
};

// Update a order status by the orderstatusid in the request
exports.update = (req, res) => {
  const orderstatusid = req.params.id;

  OrderStatus.update(req.body, {
    where: { orderstatusid: orderstatusid }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "order status was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update order status with orderstatusid=${orderstatusid}. Maybe order status was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating order status with orderstatusid=" +orderstatusid
      });
    });
};