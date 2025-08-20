const invoicedetailsService = require("../../../services/invoiceService/invoiceDetails.service");
const express= require ('express');
const router = express.Router();

// Create a new invoicedetails
router.post("/", invoicedetailsService.create);

// Retrieve all invoicedetails
router.get("/", invoicedetailsService.findAll);

// Retrieve a single invoicedetails with id
router.get("/:id", invoicedetailsService.findOne);

// Update a invoicedetails with id
router.put("/:id", invoicedetailsService.update);

module.exports = router;