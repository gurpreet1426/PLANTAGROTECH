const { DATE } = require("sequelize");
const tagsDl = require("../../dataLayer/tagDL/tags.dl");
const Tags = tagsDl.tags;
const Op = tagsDl.Sequelize.Op;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// Create and Save a tags
exports.create = async (req, res) => {
  const {tagname}= req?.body;
   if (!tagname || tagname.length == 0) {
    res.status(400).send({
      message: "Tagname is invalid"
    });
  }  
  
  // Save tags in the database
  Tags.create(req.body)
    .then(data => {      
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the tags."
      });
    });
};

// Retrieve all tags from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Tags.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tags."
      });
    });
};

// Find a single tags with an tagid
exports.findOne = (req, res) => {
  const tagid = req.params.id;

  Tags.findByPk(tagid)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving tags with tagid=" +tagid
      });
    });
};

// Update a tags by the tagid in the request
exports.update = (req, res) => {
  const tagid = req.params.id;

  Tags.update(req.body, {
    where: { tagid: tagid }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "tags was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update tags with tagid=${tagid}. Maybe tags was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating tags with tagid=" +tagid
      });
    });
};