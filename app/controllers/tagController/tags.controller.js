const tags = require("../../../services/tagService/tags.service");
const express= require ('express');
const router = express.Router();

// Create a new tags
router.post("/", tags.create);

// Retrieve all tags
router.get("/", tags.findAll);

// Retrieve a single tags with id
router.get("/:id", tags.findOne);

// Update a tags with id
router.put("/:id", tags.update);

module.exports = router;