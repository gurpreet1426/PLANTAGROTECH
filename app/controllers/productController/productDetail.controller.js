const productDetailService = require("../../../services/productService/productDetail.service");
const express= require ('express');
const router = express.Router();

// Create a new Product details
router.post("/", productDetailService.create);

// Retrieve all Product details
router.get("/", productDetailService.findAll);

// Retrieve a single Product details with id
router.get("/:id", productDetailService.findOne);

// Update a Product details with id
router.put("/:id", productDetailService.update);

module.exports = router;