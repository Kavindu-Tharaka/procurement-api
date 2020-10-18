const Order = require('../models/OrderModel');

/**
 * Implemented for insert order document in to the database
 * @param {HTTP request} req 
 * @param {HTTP response} res 
 * sends response with inserted Order document
 */
exports.createOrder = async (req, res) => {
    try {
        const newOrder = await Order.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                order: newOrder,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

/**
 * Implemented for get all the order document in the database
 * @param {HTTP request} req 
 * @param {HTTP response} res 
 * sends response with all the Order documents in the database
 */
exports.getAllOrders = async (req, res) => {
    try {
        const query = Order.find(req.query).populate("supplier");

        const orders = await query;

        res.status(200).json({
            status: 'success',
            results: orders.length,
            data: {
                orders,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

/**
 * Implemented for get specific order document in the database
 * @param {HTTP request} req 
 * @param {HTTP response} res 
 * sends response with single Order documents in the database
 */
exports.getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                order,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

/**
 * Implemented for update a Order document in the database
 * @param {HTTP request} req 
 * @param {HTTP response} res 
 * sends response with updated Order document
 */
exports.updateOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: 'success',
            data: {
                order,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

/**
 * Implemented for delete a specific order document in the database
 * @param {HTTP request} req 
 * @param {HTTP response} res 
 * sends success if the deletion is success
 */
exports.deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);

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

