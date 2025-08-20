const ordersService = require("../../../services/orderService/orders.service");
const express= require ('express');
const router = express.Router();

// Create a new orders
router.post("/", ordersService.create);

// Retrieve all orders
router.get("/", ordersService.findAll);

// Retrieve a single orders with id
router.get("/:id", ordersService.findOne);

// Update a orders with id
router.put("/:id", ordersService.update);

module.exports = router;