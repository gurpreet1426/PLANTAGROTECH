const deliveryAddressService = require("../../../services/deliveryService/deliveryAddress.service");
const express= require ('express');
const router = express.Router();

// Create a new deliveryaddress
router.post("/", deliveryAddressService.create);

// Retrieve all deliveryaddress
router.get("/", deliveryAddressService.findAll);

// Retrieve a single deliveryaddress with id
router.get("/:id", deliveryAddressService.findOne);

// Update a deliveryaddress with id
router.put("/:id", deliveryAddressService.update);

module.exports = router;