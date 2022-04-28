const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const getDashboard = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({ user });
};

module.exports = {
  getDashboard,
};
