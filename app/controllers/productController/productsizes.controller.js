const productSizesService = require("../../../services/productService/productSizes.service");
const express= require ('express');
const router = express.Router();

// Create a new Product Sizes
router.post("/", productSizesService.create);

// Retrieve all Product Sizes
router.get("/", productSizesService.findAll);

// Retrieve a single Product Sizes with id
router.get("/:id", productSizesService.findOne);

// Update a Product Sizes with id
router.put("/:id", productSizesService.update);

module.exports = router;