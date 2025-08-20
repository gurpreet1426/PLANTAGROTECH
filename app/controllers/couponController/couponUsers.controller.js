const couponUsersService = require("../../../services/couponService/couponUsers.service");
const express= require ('express');
const router = express.Router();

// Create a new couponusers
router.post("/", couponUsersService.create);

// Retrieve all couponusers
router.get("/", couponUsersService.findAll);

// Retrieve a single couponusers with id
router.get("/:id", couponUsersService.findOne);

// Update a couponusers with id
router.put("/:id", couponUsersService.update);

module.exports = router;