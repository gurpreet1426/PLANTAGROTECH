const paymentService = require("../../../services/paymentService/payment.service");
const express= require ('express');
const router = express.Router();

// Create a new payment
router.post("/", paymentService.create);

// Retrieve all payment
router.get("/", paymentService.findAll);

// Retrieve a single payment with id
router.get("/:id", paymentService.findOne);

// Update a payment with id
router.put("/:id", paymentService.update);

module.exports = router;