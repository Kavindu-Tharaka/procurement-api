const Supplier = require('../models/SupplierModel');

exports.createSupplier = async (req, res) => {
    try {
        const newSupplier = await Supplier.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                supplier: newSupplier,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllSuppliers = async (req, res) => {
    try {
        const query = Supplier.find(req.query).populate('previousOrders');

        const suppliers = await query;

        res.status(200).json({
            status: 'success',
            results: suppliers.length,
            data: {
                suppliers,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id).populate(
            'previousOrders'
        );

        res.status(200).json({
            status: 'success',
            data: {
                supplier,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.updateSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        res.status(200).json({
            status: 'success',
            data: {
                supplier,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteSupplier = async (req, res) => {
    try {
        await Supplier.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};
