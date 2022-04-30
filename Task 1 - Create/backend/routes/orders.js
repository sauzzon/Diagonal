const express = require("express");

const router = express.Router();
const {
  createOrder,
  getAllOrders,
  payOrder,
} = require("../controllers/orders");

router.route("/").post(createOrder).get(getAllOrders);

router.route("/:id").patch(payOrder);

module.exports = router;
