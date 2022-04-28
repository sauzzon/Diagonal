const express = require("express");

const router = express.Router();
const {
  createOrder,
  getAllOrders,
  getOrder,
} = require("../controllers/orders");

router.route("/").post(createOrder).get(getAllOrders);

router.route("/:id").get(getOrder);

module.exports = router;
