const orderStatusService = require("../../../services/orderService/orderStatus.service");
const express= require ('express');
const router = express.Router();

// Create a new orderstatus
router.post("/", orderStatusService.create);

// Retrieve all orderstatus
router.get("/", orderStatusService.findAll);

// Retrieve a single orderstatus with id
router.get("/:id", orderStatusService.findOne);

// Update a orderstatus with id
router.put("/:id", orderStatusService.update);

module.exports = router;