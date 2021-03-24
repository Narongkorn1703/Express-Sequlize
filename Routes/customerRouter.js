const express = require("express");
const customerController = require("../controller/customerController");
const router = express.Router();
router.get("/", customerController.getAllCustomers);
router.get("/:id", customerController.getCustomer);
router.post("/", customerController.createCustomer);
router.post("/mutip", customerController.mutipleCustomer);
router.put("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

module.exports = router;
