const express = require("express");
const router = express.Router();
const {
  getCustomers,
  getCustomerById,
  postCustomers,
  updateCustomer,
  deleteCustomer
} = require("../controllers/customerController.js");
const customers = require("../models/customerSchema");

router.get("/fetch-all", getCustomers);
router.get("/fetch/:id", getCustomerById);
router.post("/create", postCustomers);
router.patch("/update/:id", updateCustomer);
router.post("/delete/:id", deleteCustomer);

module.exports = router;
