const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  orderItems: [
    {
      material: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      remark: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
      status: {
        type: Number,
      },
    },
  ],
});

module.exports = mongoose.model("order", OrderSchema);
