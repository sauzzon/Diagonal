const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    details: {
      type: String,
      required: [true, "Please provide order details"],
    },
    status: {
      type: String,
      enum: ["payed", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
