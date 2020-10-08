const mongoose = require('mongoose');
const Order = require('./OrderModel');

const SupplierSchema = mongoose.Schema({
    supplierItems: [
        {
            supplierName: {
                type: String,
                trim: true,
                required: [true, 'Suppiler Name is Mandatory!'],
            },
            address: {
                type: String,
                required: [true, 'Address is Mandatory!'],
            },
            previousOrders: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: Order,
                    trim: true,
                },
            ],
            addedDate: {
                type: Date,
                default: Date.now,
            },
        },
    ],
});

module.exports = mongoose.model('supplier', SupplierSchema);
