const { DATE } = require("sequelize");
const invoiceDetailsDl = require("../../dataLayer/invoiceDL/invoiceDetails.dl");
const InvoiceDetails = invoiceDetailsDl.invoiceDetails;
const Op = invoiceDetailsDl.Sequelize.Op;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// Create and Save a invoice details
exports.create = async (req, res) => {
  const {authorid}= req?.body;
   if (!authorid || authorid.length == 0) {
    res.status(400).send({
      message: "Authorid is invalid"
    });
  }  
  
  // Save invoice details in the database
  InvoiceDetails.create(req.body)
    .then(data => {      
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the invoice details."
      });
    });
};

// Retrieve all invoice details from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  InvoiceDetails.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving invoice details."
      });
    });
};

// Find a single invoice details with an invoice details id
exports.findOne = (req, res) => {
  const invoiceid = req.params.id;

  InvoiceDetails.findByPk(invoiceid)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving invoice details with invoiceid=" + invoiceid
      });
    });
};

// Update a invoice details by the invoiceid in the request
exports.update = (req, res) => {
  const invoiceid = req.params.id;

  InvoiceDetails.update(req.body, {
    where: { invoiceid: invoiceid }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Invoice details was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update invoice details with invoiceid=${invoiceid}. Maybe invoice details was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating invoice details with invoiceid=" + invoiceid
      });
    });
};