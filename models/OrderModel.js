const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  orderItems: [
    {
      material: {
        type: String,
        required: [true, 'Material is Mandatory!']
      },
      unit: {
        type: String,
        required: [true, 'Unit is Mandatory!']
      },
      quantity: {
        type: Number,
        required: [true, 'Quantity is Mandatory!']
      },
      remark: {
        type: String,
      },
      status: {
        type: String,
        trim: true,
      },
      deliverDate: {
        type: Date,
        required: [true, 'Deliver Date is Mandatory!']
      },
      createdDate: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model("order", OrderSchema);
