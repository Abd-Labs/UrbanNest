const express = require("express");

const {
  getAllProperties,
  getPropertyDetail,
  createProperty,
  updateProperty,
  deleteProperty,
} = require("../../Controllers/PropertyControllers");

const router = express.Router();

module.exports = router;
