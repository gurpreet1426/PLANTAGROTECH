const cartDetailsService = require("../../../services/cartService/cartdetails.service");
const express= require ('express');
const router = express.Router();

// Create a new cart detail
router.post("/", cartDetailsService.create);

// Retrieve all cart detail
router.get("/", cartDetailsService.findAll);

// Retrieve a single cart detail with id
router.get("/:id", cartDetailsService.findOne);

// Update a cart detail with id
router.put("/:id", cartDetailsService.update);

module.exports = router;