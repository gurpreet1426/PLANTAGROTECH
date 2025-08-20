const cartService = require("../../../services/cartService/cart.service");
const express= require ('express');
const router = express.Router();

// Create a new cart
router.post("/", cartService.create);

// Retrieve all carts
router.get("/", cartService.findAll);

// Retrieve a single cart with id
router.get("/:id", cartService.findOne);

// Update a cart with id
router.put("/:id", cartService.update);

module.exports = router;