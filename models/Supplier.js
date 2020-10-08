const mongoose = require('mongoose');
const Order = require('./OrderModel');

const Schema = mongoose.Schema;

const SupplierSchema = new Schema({
    supplierName: {
        type: String,
        trim: true,
        required: [true, 'Suppiler Name is Mandatory!'],
    },
    address: {
        type: String,
        required: [true, 'Address is Mandatory!'],
    },
    addedDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('supplier', SupplierSchema);
