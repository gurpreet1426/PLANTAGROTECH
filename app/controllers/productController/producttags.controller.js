const productTags = require("../../../services/productService/productTags.service");
const express= require ('express');
const router = express.Router();

// Create a new Product tags
router.post("/", productTags.create);

// Retrieve all Product tags
router.get("/", productTags.findAll);

// Retrieve a single Product tags with id
router.get("/:id", productTags.findOne);

// Update a Product tags with id
router.put("/:id", productTags.update);

module.exports = router;