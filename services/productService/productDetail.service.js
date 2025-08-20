const { DATE } = require("sequelize");
const productDetailDl = require("../../dataLayer/productDL/productDetail.dl");
const ProductDetail = productDetailDl.productDetail;
const Op = productDetailDl.Sequelize.Op;

// Create and Save a new Product detail
exports.create = (req, res) => {
  // Validate request
  if (!req?.body?.pid) {
    res.status(400).send({
      message: "pid can not be empty!"
    });
    return;
  }  

  // Save Product details in the database
  ProductDetail.create(req?.body)
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

  ProductDetail.findAll({ where: condition })
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

// Find a single Product details with an id
exports.findOne = (req, res) => {
  const pdid = req.params.id;

  ProductDetail.findByPk(pdid)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving product detail with pdid=" + pdid
      });
    });
};

// Update a Product details by the pdid in the request
exports.update = (req, res) => {
  const pdid = req.params.id;

  ProductDetail.update(req.body, {
    where: { pdid: pdid }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Product was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Product detail with pdid=${pdid}. Maybe Product detail was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Product detail with pdid=" + pdid
      });
    });
};


