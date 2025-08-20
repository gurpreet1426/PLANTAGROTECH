const couponsService = require("../../../services/couponService/coupons.service");
const express= require ('express');
const router = express.Router();

// Create a new coupons
router.post("/", couponsService.create);

// Retrieve all coupons
router.get("/", couponsService.findAll);

// Retrieve a single coupons with id
router.get("/:id", couponsService.findOne);

// Update a coupons with id
router.put("/:id", couponsService.update);

module.exports = router;