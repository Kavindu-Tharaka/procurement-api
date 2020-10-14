const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StoreKeeperSchema = new Schema({
   refNo: {
        type: String,
        trim: true,
        required: [true, 'Ref No is Mandatory!'],
    },
    date: {
        type: String,
        default: Date.now,
        required: [true, 'Date is Mandatory!'],
    },
    materialInputFields: [{
        type:Object,
        // trim: true,
        required: [true, 'Material Items are Mandatory!'],
    }]
    
});

module.exports = mongoose.model('store', StoreKeeperSchema);