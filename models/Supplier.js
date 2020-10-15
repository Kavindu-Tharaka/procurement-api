const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SupplierSchema = new Schema({
    supplierName: {
        type: String,
        trim: true,
        required: [true, 'Suppiler Name is Mandatory!'],
    },
    address: {
        type: String,
        trim: true,
        required: [true, 'Address is Mandatory!'],
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Email is Mandatory!'],
    },
    icon: {
        type: String,
        trim: true,
        required: [true, 'Icon is Mandatory!'],
    },
    addedDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('supplier', SupplierSchema);
