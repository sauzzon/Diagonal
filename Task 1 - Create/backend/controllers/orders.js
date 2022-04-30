const Order = require("../models/Order");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");

const getAllOrders = async (req, res) => {
  const orders = await Order.find({ createdBy: req.user.userId }).sort(
    "createdAt"
  );
  res.status(StatusCodes.OK).json({ orders, count: orders.length });
};
const payOrder = async (req, res) => {
  const {
    user: { userId },
    params: { id: orderId },
  } = req;

  const order = await Order.findOneAndUpdate(
    {
      _id: orderId,
      createdBy: userId,
    },
    {
      status: "paid",
    },
    { new: true, runValidators: true }
  );
  if (!order) {
    throw new NotFoundError(`No order with id ${orderId}`);
  }
  res.status(StatusCodes.OK).json({ order });
};

const createOrder = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const order = await Order.create(req.body);
  res.status(StatusCodes.CREATED).json({ order });
};

module.exports = {
  createOrder,
  getAllOrders,
  payOrder,
};
