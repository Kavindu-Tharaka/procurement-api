const express = require("express");
const orderController = require("../controllers/orderController");
const router = express.Router();

router.route("/").get(orderController.getOrders);
router.route("/addOrder").post(orderController.addOrder);


module.exports = router