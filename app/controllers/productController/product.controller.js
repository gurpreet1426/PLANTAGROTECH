const productsService = require("../../../services/productService/product.service");
const express= require ('express');
const router = express.Router();

// Create a new Product
router.post("/", productsService.create);

// Retrieve all Products
router.get("/", productsService.findAll);

router.get("/dummy", productsService.dummy);

// Retrieve all active Products
router.get("/activeproducts", productsService.findAllActive);

// Retrieve a single Product with id
router.get("/:id", productsService.findOne);

// Update a Product with id
router.put("/:id", productsService.update);

// Delete a Product with id
//router.delete("/:id", products.delete);

// Delete all Products
//router.delete("/", products.deleteAll);

module.exports = router;