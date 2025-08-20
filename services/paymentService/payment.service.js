const { DATE } = require("sequelize");
const paymentDl = require("../../dataLayer/paymentDL/payment.dl");
const Payment = paymentDl.payment;
const Op = paymentDl.Sequelize.Op;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// Create and Save a payment
exports.create = async (req, res) => {
  const {authorid}= req?.body;
   if (!authorid || authorid.length == 0) {
    res.status(400).send({
      message: "Authorid is invalid"
    });
  }  
  
  // Save payment in the database
  Payment.create(req.body)
    .then(data => {      
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the payment."
      });
    });
};

// Retrieve all payments from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Payment.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving payments."
      });
    });
};

// Find a single payment with an paymentid
exports.findOne = (req, res) => {
  const paymentid = req.params.id;

  Payment.findByPk(paymentid)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving payment with paymentid=" +paymentid
      });
    });
};

// Update a payment by the paymentid in the request
exports.update = (req, res) => {
  const paymentid = req.params.id;

  Payment.update(req.body, {
    where: { paymentid: paymentid }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "payment was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update payment with paymentid=${paymentid}. Maybe payment was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating payment with paymentid=" +paymentid
      });
    });
};