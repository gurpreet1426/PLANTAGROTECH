const productDetailsService = require("../../../services/productService/productDetails.service");
const express= require ('express');
const router = express.Router();

// Create a new Product details
router.post("/", productDetailsService.create);

// Retrieve all Product details
router.get("/", productDetailsService.findAll);

// Retrieve a single Product details with id
router.get("/:id", productDetailsService.findOne);

// Update a Product details with id
router.put("/:id", productDetailsService.update);

module.exports = router;