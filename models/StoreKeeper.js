const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StoreKeeperSchema = new Schema({
   refNo: {
        type: String,
        trim: true,
        required: [true, 'Ref No is Mandatory!'],
    },
    date: {
        type: Date,
        default: Date.now,
        required: [true, 'Date is Mandatory!'],
    },
    materials: [{
        type: Date,
        default: Date.now,
        required: [true, 'Items are Mandatory!'],
    }],
    qty: {
        type: Number,
        default: Date.now,
    },
});

module.exports = mongoose.model('storeKeeper', StoreKeeperSchema);