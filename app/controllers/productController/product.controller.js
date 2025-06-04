const products = require('../../../productService/product.service');
const express= require ('express');
const router = express.Router();
router.get("/dummy", products.dummy);
module.exports = router;