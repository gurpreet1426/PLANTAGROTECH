const { DATE } = require("sequelize");
const productTagsDl = require("../../dataLayer/productDL/productTags.dl");
const ProductTags = productTagsDl.productTags;
const Op = productTagsDl.Sequelize.Op;

// Create and Save a new Product tags
exports.create = (req, res) => {
  // Validate request
  if (!req.body.pid) {
    res.status(400).send({
      message: "Pid can not be empty!"
    });
    return;
  }

   // Save Product tags in the database
  ProductTags.create(req?.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product tags."
      });
    });
};

// Retrieve all Product tags from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  ProductTags.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving product tags."
      });
    });
};


// Find a single Product with an id
exports.findOne = (req, res) => {
  const ptagid = req.params.id;

  ProductTags.findByPk(ptagid)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Product tags with ptagid=" + ptagid
      });
    });
};

// Update a Product tags by the ptagid in the request
exports.update = (req, res) => {
  const ptagid = req.params.id;

  ProductTags.update(req.body, {
    where: { ptagid: ptagid }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Product was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Product with id=" + id
      });
    });
};
