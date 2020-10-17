const mongoose = require('mongoose');
const Supplier = require('./Supplier');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    siteName: {
        type: String,
        required: [true, 'Site Name is Mandatory!'],
    },
    siteAddress: {
        type: String,
        required: [true, 'Site Address is Mandatory!'],
    },
    siteContact: {
        type: String,
        default: '0112345321'
    },
    supplier: {
        type: Schema.Types.ObjectId,
        ref: Supplier,
    },
    orderItems: [
        {
            material: {
                type: String,
                required: [true, 'Material is Mandatory!'],
            },
            unit: {
                type: String,
                required: [true, 'Unit is Mandatory!'],
            },
            quantity: {
                type: Number,
                required: [true, 'Quantity is Mandatory!'],
            },
            remark: {
                type: String,
            },
        },
    ],
    status: {
        type: String,
        trim: true,
        default: 'Pending',
    },
    comment: {
        type: String,
        trim: true,
    },
    deliverDate: {
        type: Date,
        required: [true, 'Deliver Date is Mandatory!'],
    },
    requestedDate: {
        type: Date,
        default: Date.now,
    },
});

const Order = mongoose.model('order', OrderSchema);
module.exports = Order;
