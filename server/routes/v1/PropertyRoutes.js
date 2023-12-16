const express = require("express");

const {
  getAllProperties,
  getPropertyDetail,
  createProperty,
  updateProperty,
  deleteProperty,
} = require("../../Controllers/PropertyControllers");

const router = express.Router();

router.get('/', getAllProperties);
router.get('/:id',getPropertyDetail);
router.post('/',createProperty);
router.put('/:id',updateProperty);
router.delete('/:id',deleteProperty);

module.exports = router;
