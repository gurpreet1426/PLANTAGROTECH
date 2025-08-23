const deliveryAddressesService = require("../../../services/deliveryService/deliveryAddresses.service");
const express= require ('express');
const router = express.Router();

// Create a new deliveryaddress
router.post("/", deliveryAddressesService.create);

// Retrieve all deliveryaddress
router.get("/", deliveryAddressesService.findAll);

// Retrieve a single deliveryaddress with id
router.get("/:id", deliveryAddressesService.findOne);

// Update a deliveryaddress with id
router.put("/:id", deliveryAddressesService.update);

module.exports = router;