const { DATE } = require("sequelize");
const productSizesDl = require("../../dataLayer/productDL/productSizes.dl");
const ProductSizes = productSizesDl.productSizes;
const Op = productSizesDl.Sequelize.Op;

// Create and Save a new Product sizes
exports.create = (req, res) => {
  // Validate request
  if (!req?.body?.pid) {
    res.status(400).send({
      message: "pid can not be empty!"
    });
    return;
  }  

  // Save Product details in the database
  ProductSizes.create(req?.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product detail"
      });
    });
};

// Retrieve all Product details from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  ProductSizes.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving product details."
      });
    });
};

// Find a single Product details with an psizeid
exports.findOne = (req, res) => {
  const psizeid = req.params.id;

  ProductSizes.findByPk(psizeid)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving product detail with psizeid=" + psizeid
      });
    });
};

// Update a Product details by the psizeid in the request
exports.update = (req, res) => {
  const psizeid = req.params.id;

  ProductSizes.update(req.body, {
    where: { psizeid: psizeid }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Product was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Product detail with psizeid=${psizeid}. Maybe Product detail was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Product detail with psizeid=" + psizeid
      });
    });
};


