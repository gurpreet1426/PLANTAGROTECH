const { DATE } = require("sequelize");
const deliveryAddressDl = require("../../dataLayer/deliveryDL/deliveryAddress.dl");
const DeliveryAddress = deliveryAddressDl.deliveryAddress;
const Op = deliveryAddressDl.Sequelize.Op;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// Create and Save a delivery address
exports.create = async (req, res) => {
  const {authorid}= req?.body;
   if (!authorid || authorid.length == 0) {
    res.status(400).send({
      message: "Authorid is invalid"
    });
  }  
  
  // Save delivery address in the database
  DeliveryAddress.create(req.body)
    .then(data => {      
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the delivery address."
      });
    });
};

// Retrieve all delivery address from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  DeliveryAddress.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving delivery address."
      });
    });
};

// Find a single delivery address with an delivery address id
exports.findOne = (req, res) => {
  const deliveryaddressid = req.params.id;

  DeliveryAddress.findByPk(deliveryaddressid)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving delivery address with deliveryaddressid=" + deliveryaddressid
      });
    });
};

// Update a delivery address by the deliveryaddressid in the request
exports.update = (req, res) => {
  const deliveryaddressid = req.params.id;

  DeliveryAddress.update(req.body, {
    where: { deliveryaddressid: deliveryaddressid }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "delivery address was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update delivery address with deliveryaddressid=${deliveryaddressid}. Maybe delivery address was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating delivery address with deliveryaddressid=" + deliveryaddressid
      });
    });
};