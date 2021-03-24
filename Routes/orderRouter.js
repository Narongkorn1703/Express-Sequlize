const express = require("express");
const orderController = require("../controller/orderController");
const router = express.Router();
router.get("/", orderController.getAllOrders);
router.get("/:id", orderController.getOrder);
router.post("/", orderController.createOrder);
router.put("/:id", orderController.updateOrder);
router.delete("/:id", orderController.deleteOrder);

module.exports = router;

// GET ALL ORDER
// GET ORDER
// CREATE ORDER
// UPDATE ORDER
// DELETE ORDER
// GET TOTAL AMOUNT, TOTAL PRICE
// GET ORDER BY CUSTOMER ID
// GET TOTAL AMOUNT, TOTAL PRICE BY EACH CUSTOMER
// GET CUSTOMER HAVING TOTAL PRICE GREATER THAN 20000
// GET TOTAL PRICE DAILY
// GET TOP 5 BEST SELLER PRODUCT
